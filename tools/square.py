"""Square up the pictures that are visitors' photos (frame, wall, taken from the side), Robyn 2026-11-17: "some of the
works on the walls are not squared. they look like someone took a bad photo".

For each picture: the long straight edges near its four sides (OpenCV's line-segment detector), grouped into lines.
On each side the innermost strong line is the frame's sight edge (where the paint starts); a side with none runs off
the photo. The four lines make the painting's outline; it is cut out and stretched straight to the work's own
proportions (w × h in works.json).

  python3 tools/square.py find            → source/square.json  {id: {q: [[x,y]×4 as 0–1, tl tr br bl], ...}}
  python3 tools/square.py sheet [from]    → review sheets (photo + outline | result) in $SHEETS
  python3 tools/square.py apply           → public/art/<id>-m.jpg / -s.jpg from the originals kept in source/art-orig/
                                            (only the ids in source/square-ok.json, with hand corrections from it)
"""
import json, sys, os, math
import cv2, numpy as np

ART, ORIG = 'public/art', 'source/art-orig'
# looked at one by one (2026-11-17): these the finder got wrong, left as they are — an altarpiece whose gold border
# or carved frame is part of the work, or already a straight photo
SKIP = {'010066317', '010065523', '010059205', '010062111', '010064466', '010053682', '010061855'}
# and these outlined by hand (corners 0–1, tl tr br bl), each side then snapped to the nearest straight edge
HAND = {
    '010064417': [[0.035, 0.085], [0.97, 0.07], [0.97, 0.86], [0.035, 0.875]],   # Banquet of Herod, gold frame
    '010065005': [[0.372, 0.115], [0.628, 0.115], [0.628, 0.6], [0.372, 0.6]],   # the middle one of three on a wall
    '010064667': [[0.19, 0.155], [0.85, 0.12], [0.85, 0.83], [0.19, 0.84]],      # Old Man with a Toque, black frame
    '010066571': [[0.195, 0.205], [0.81, 0.205], [0.81, 0.825], [0.195, 0.825]], # arched, on a blue wall
    # the finder stopped at an outer moulding on these (2026-11-17, from the sheet of all results)
    '010067608': [[0.065, 0.09], [0.935, 0.085], [0.935, 0.915], [0.06, 0.925]],
    '010062706': [[0.205, 0.165], [0.8, 0.165], [0.8, 0.825], [0.205, 0.825]],      # Renoir, carved frame
    '010059176': {'q': [[0.152, 0.262], [0.862, 0.262], [0.869, 0.858], [0.138, 0.862]], 'snap': False},  # Chardin
    '010066158': {'q': [[0.128, 0.132], [0.855, 0.136], [0.844, 0.874], [0.136, 0.878]], 'snap': False},  # Fragonard's bull
    '010066191': [[0.165, 0.18], [0.84, 0.18], [0.84, 0.79], [0.165, 0.79]],         # Géricault's race
}
UA = "LouvreWalkthrough/0.1 (https://tinselman.github.io/louvre/)"   # contact = the site (his OK, 2026-11-17)
lsd = cv2.createLineSegmentDetector()
MINSIDES = int(os.environ.get('MINSIDES', 3))
ALIKE = float(os.environ.get('ALIKE', 1e9))


def lines_near(g):
    """Strong straight lines near each side: {side: [(theta, offset, coverage)]}; for t/b, offset = y at x=W/2
    and theta the slope angle; for l/r, offset = x at y=H/2 and theta the lean."""
    H, W = g.shape
    segs = lsd.detect(g)[0]
    segs = segs.reshape(-1, 4) if segs is not None else np.zeros((0, 4))
    out = {}
    for side in 'tblr':
        lying = side in 'tb'
        D, E = (W, H) if lying else (H, W)          # along, across
        cand = []
        for x1, y1, x2, y2 in segs.tolist():
            if not lying: x1, y1, x2, y2 = y1, x1, y2, x2     # swap so 'along' is x
            dx, dy = x2 - x1, y2 - y1
            L = math.hypot(dx, dy)
            if L < 0.06 * D or abs(dy) > abs(dx) * 0.5: continue    # short, or more than ~27° off
            th = math.atan2(dy, dx)
            if th > math.pi / 2: th -= math.pi
            if th < -math.pi / 2: th += math.pi
            off = y1 + (D / 2 - x1) * math.tan(th)
            if side in 'tl' and off > 0.32 * E: continue
            if side in 'br' and off < 0.68 * E: continue
            cand.append([th, off, min(x1, x2), max(x1, x2), L])
        cand.sort(key=lambda c: c[1])
        groups = []
        for c in cand:
            for gr in groups:
                if abs(gr['th'] - c[0]) < math.radians(1.6) and abs(gr['off'] - c[1]) < 2.5 + 0.003 * E:
                    gr['m'].append(c); w = sum(m[4] for m in gr['m'])
                    gr['th'] = sum(m[0] * m[4] for m in gr['m']) / w
                    gr['off'] = sum(m[1] * m[4] for m in gr['m']) / w
                    break
            else:
                groups.append(dict(th=c[0], off=c[1], m=[c]))
        res = []
        for gr in groups:
            iv = sorted((m[2], m[3]) for m in gr['m'])
            cov, a, b = 0.0, None, None
            for s, e in iv:
                if a is None or s > b: cov += 0 if a is None else b - a; a, b = s, e
                else: b = max(b, e)
            cov += b - a
            res.append((gr['th'], gr['off'], cov / D))
        out[side] = res
    return out


def strip_ratio(g, side, th, off):
    """How plain the strip between this line and the photo's edge is, along the line, against the painting inside it.
    A frame or a wall is the same all along (low); paint is not (about 1). Median std along sample lines."""
    H, W = g.shape
    lying = side in 'tb'
    D, E = (W, H) if lying else (H, W)
    a = np.linspace(0.2 * D, 0.8 * D, 120)
    t = math.tan(th)
    def along(d):
        c = off + (a - D / 2) * t + d
        ok = (c >= 0) & (c <= E - 1)
        if ok.sum() < 60: return None
        xs, ys = (a[ok], c[ok]) if lying else (c[ok], a[ok])
        v = g[ys.astype(int), xs.astype(int)].astype(np.float32)
        return float(v.std())
    out_sign = -1 if side in 'tl' else 1
    room = off if side in 'tl' else E - 1 - off
    outs = [along(out_sign * d) for d in np.linspace(2, max(2.5, room - 1), 12)] if room > 3 else []
    ins = [along(-out_sign * d) for d in np.linspace(0.04 * E, 0.12 * E, 8)]
    outs = [x for x in outs if x is not None]; ins = [x for x in ins if x is not None]
    if not outs or not ins: return 0.0
    return float(np.median(outs) / max(8.0, np.median(ins)))


def meet(l1, l2, W, H):
    """Corner where a lying line (t/b) meets a standing one (l/r). Each given as (theta, offset)."""
    th1, o1 = l1; th2, o2 = l2
    # lying: y = o1 + (x - W/2) tan th1 ; standing: x = o2 + (y - H/2) tan th2
    a, b = math.tan(th1), math.tan(th2)
    y = (o1 + (o2 - H / 2 * b - W / 2) * a) / (1 - a * b)
    x = o2 + (y - H / 2) * b
    return [x, y]


def bands_alike(lab, q):
    """The strips a crop would remove, side by side: a frame (or frame and wall) is the same stuff all round; a
    painting's own edges are not (sky above, ground below). Largest colour difference (ΔE) between the strips'
    averages, over the strips more than 2 px wide; 0 if fewer than two."""
    H, W = lab.shape[:2]
    q = np.array(q, np.float32)
    polys = {'t': [q[0], q[1], (q[1][0], -1), (q[0][0], -1)], 'b': [q[3], q[2], (q[2][0], H), (q[3][0], H)],
             'l': [q[0], q[3], (-1, q[3][1]), (-1, q[0][1])], 'r': [q[1], q[2], (W, q[2][1]), (W, q[1][1])]}
    means = []
    for k, pts in polys.items():
        m = np.zeros((H, W), np.uint8)
        cv2.fillPoly(m, [np.array(pts, np.float32).round().astype(np.int32)], 1)
        n = int(m.sum())
        side = (q[1][0] - q[0][0]) if k in 'tb' else (q[3][1] - q[0][1])
        if n < 3 * max(side, 1): continue
        means.append(lab[m.astype(bool)].mean(0))
    if len(means) < 2: return 0.0
    return float(max(np.linalg.norm(x - y) for i, x in enumerate(means) for y in means[i + 1:]))


def one_pass(g, lab, rec, straight):
    """The best outline inside this picture, or None to keep it whole. → (q, err, tilt, alike)"""
    H, W = g.shape
    ls = lines_near(g)
    border = {'t': (0.0, 0.0), 'b': (0.0, H - 1.0), 'l': (0.0, 0.0), 'r': (0.0, W - 1.0)}
    cands = {}
    for side in 'tblr':
        strong = sorted([l for l in ls[side] if l[2] >= 0.35 and (not straight or abs(l[0]) < math.radians(1.2))],
                        key=lambda l: -l[2])[:5]
        cands[side] = [border[side]] + [(l[0], l[1]) for l in strong]
    combos, full = [], None
    for t in cands['t']:
        for b in cands['b']:
            for l in cands['l']:
                for r in cands['r']:
                    framed = sum(x is not border[k] for x, k in zip((t, b, l, r), 'tblr'))
                    # a frame shows on three or four sides; a straight line in the painting itself (a table, a
                    # door) on one or two
                    if 0 < framed < MINSIDES: continue
                    q = [meet(t, l, W, H), meet(t, r, W, H), meet(b, r, W, H), meet(b, l, W, H)]
                    qa = np.array(q)
                    if (qa[:, 0] < -0.03 * W).any() or (qa[:, 0] > 1.03 * W).any() or (qa[:, 1] < -0.03 * H).any() or (qa[:, 1] > 1.03 * H).any(): continue
                    area = cv2.contourArea(qa.astype(np.float32)) / (W * H)
                    if area < 0.2: continue
                    asp = (np.linalg.norm(qa[1] - qa[0]) + np.linalg.norm(qa[2] - qa[3])) / (np.linalg.norm(qa[3] - qa[0]) + np.linalg.norm(qa[2] - qa[1]))
                    err = abs(math.log(asp / rec)) if rec else 0.0
                    c = (err, area, q, (t, b, l, r))
                    if framed == 0: full = c
                    else: combos.append(c)
    if not combos or full is None: return None
    # proportions no worse than keeping it whole; the best of those, and among near-equals the innermost
    combos = [c for c in combos if c[0] <= full[0] + 0.02]
    combos = [c + (bands_alike(lab, c[2]),) for c in combos]
    combos = [c for c in combos if c[4] < ALIKE]
    if not combos: return None
    best = min(c[0] for c in combos)
    err, area, q, pick, alike = min([c for c in combos if c[0] <= best + 0.035], key=lambda c: c[1])
    return q, err, max(abs(math.degrees(p[0])) for p in pick), alike


def find(id_, work):
    img = cv2.imread(f'{ORIG}/{id_}-m.jpg' if os.path.exists(f'{ORIG}/{id_}-m.jpg') else f'{ART}/{id_}-m.jpg')
    if img is None: return None
    H, W = img.shape[:2]
    rec = (work['w'] / work['h']) if work.get('w') and work.get('h') else None
    if not rec: return None
    # peel: the outline found, straightened to its own proportions, looked at again (a deep frame has several
    # mouldings; the sight edge is the last one)
    Q = np.array([[0, 0], [W, 0], [W, H], [0, H]], np.float32)
    cur, steps = img, []
    for k in range(4):
        g = cv2.cvtColor(cur, cv2.COLOR_BGR2GRAY)
        lab = cv2.cvtColor(cur.astype(np.float32) / 255, cv2.COLOR_BGR2Lab)
        r = one_pass(g, lab, rec, straight=k > 0)
        if not r: break
        q, err, tilt, alike = r
        h, w = cur.shape[:2]
        M = cv2.getPerspectiveTransform(np.array([[0, 0], [w, 0], [w, h], [0, h]], np.float32), Q)
        Q = cv2.perspectiveTransform(np.array([q], np.float32), M)[0]
        steps.append(dict(err=round(err, 3), tilt=round(tilt, 2), alike=round(alike, 1)))
        qn = [[x / W, y / H] for x, y in Q]
        cur = warp(img, qn, 0)
    if not steps: return None
    qn = [[round(float(x) / W, 4), round(float(y) / H, 4)] for x, y in Q]
    cut = max(qn[0][1], qn[1][1], 1 - qn[2][1], 1 - qn[3][1], qn[0][0], qn[3][0], 1 - qn[1][0], 1 - qn[2][0])
    tilt = max(st['tilt'] for st in steps)
    if cut < 0.012 and tilt < 0.5: return None
    return dict(q=qn, cut=round(cut, 3), tilt=tilt, steps=steps, px=[W, H])


def snap(img, qa):
    """A hand outline, each side moved onto the strongest straight edge within 2.5 % of it (and 3° of its slant)."""
    g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY); H, W = g.shape
    segs = lsd.detect(g)[0]; segs = segs.reshape(-1, 4).tolist() if segs is not None else []
    q = np.array(qa, float) * [W, H]
    lines = []
    for a, b in ((0, 1), (1, 2), (3, 2), (0, 3)):           # t r b l
        p0, p1 = q[a], q[b]; d = (p1 - p0) / np.linalg.norm(p1 - p0); n = np.array([-d[1], d[0]])
        E = W if abs(n[0]) > abs(n[1]) else H
        pts, wts = [], []
        for x1, y1, x2, y2 in segs:
            u = np.array([x2 - x1, y2 - y1]); L = np.linalg.norm(u)
            if L < 8 or abs(np.dot(u / L, d)) < math.cos(math.radians(3)): continue
            e1, e2 = np.array([x1, y1]), np.array([x2, y2])
            if max(abs(np.dot(e1 - p0, n)), abs(np.dot(e2 - p0, n))) > 0.025 * E: continue
            t1, t2 = np.dot(e1 - p0, d), np.dot(e2 - p0, d); side = np.linalg.norm(p1 - p0)
            if max(t1, t2) < 0 or min(t1, t2) > side: continue
            pts += [e1, e2]; wts += [L, L]
        if wts and sum(wts) / 2 >= 0.3 * np.linalg.norm(p1 - p0):
            off = np.average([np.dot(pt - p0, n) for pt in pts], weights=wts)
            lines.append((p0 + n * off, d))
        else:
            lines.append((p0, d))
    def cross(l1, l2):
        (a, u), (b, v) = l1, l2
        t = np.cross(b - a, v) / np.cross(u, v)
        return a + u * t
    t, r, b, l = lines
    out = [cross(t, l), cross(t, r), cross(b, r), cross(b, l)]
    return [[round(float(x) / W, 4), round(float(y) / H, 4)] for x, y in out]


def warp(img, qn, aspect, maxside=1024):
    H, W = img.shape[:2]
    q = np.array([[x * W, y * H] for x, y in qn], np.float32)
    top, bot = np.linalg.norm(q[1] - q[0]), np.linalg.norm(q[2] - q[3])
    lef, rig = np.linalg.norm(q[3] - q[0]), np.linalg.norm(q[2] - q[1])
    h = max(lef, rig); w = h * aspect
    if aspect <= 0: w = max(top, bot)
    s = min(1.0, maxside / max(w, h)) if max(w, h) > maxside else 1.0
    w, h = int(round(w * s)), int(round(h * s))
    M = cv2.getPerspectiveTransform(q, np.array([[0, 0], [w, 0], [w, h], [0, h]], np.float32))
    return cv2.warpPerspective(img, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)


def aspect_of(work, qn, px):
    """The work's own proportions, unless they disagree badly with the outline (then the outline's)."""
    W, H = px
    q = np.array([[x * W, y * H] for x, y in qn])
    own = (np.linalg.norm(q[1] - q[0]) + np.linalg.norm(q[2] - q[3])) / (np.linalg.norm(q[3] - q[0]) + np.linalg.norm(q[2] - q[1]))
    rec = (work['w'] / work['h']) if work.get('w') and work.get('h') else None
    if rec and 0.8 < rec / own < 1.25: return rec
    return own


if __name__ == '__main__':
    cmd = sys.argv[1]
    works = {w['id']: w for w in json.load(open('data/works.json'))}
    if cmd == 'find':
        # only visitors' photos: a camera named in the file (a museum scan, Google Art Project's or a Leaf back's,
        # is square already, and its straight lines are the painting's own)
        meta = json.load(open('source/commons-meta.json')); imgs = json.load(open('data/images.json'))
        PRO = ('', '0', 'Google', 'Leaf', 'Phase One', 'Hasselblad', 'Sinar', 'HP')
        res = {}
        for k, id_ in enumerate(works):
            if id_ not in imgs or meta.get(imgs[id_]['file'], {}).get('make', '') in PRO: continue
            r = find(id_, works[id_])
            if r: res[id_] = r
            if k % 300 == 0: print(k, flush=True)
        need = dict(sorted(res.items(), key=lambda kv: -(kv[1]['cut'] + kv[1]['tilt'] / 20)))
        json.dump(need, open('source/square.json', 'w'), indent=0)
        print(len(res), 'pictures,', len(need), 'to square')
    elif cmd == 'sheet':
        from PIL import Image, ImageDraw, ImageFont
        S = os.environ['SHEETS']
        need = json.load(open('source/square.json'))
        ids = sys.argv[3:] if len(sys.argv) > 3 else list(need)
        start = int(sys.argv[2]) if len(sys.argv) > 2 else 0
        font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 15)
        C, R, cw, ch = 5, 6, 320, 190
        n = 0
        for p in range(start, len(ids), C * R):
            sheet = Image.new('RGB', (C * cw, R * ch), (60, 60, 60)); d = ImageDraw.Draw(sheet)
            for i, id_ in enumerate(ids[p:p + C * R]):
                v = need[id_]; src = f'{ORIG}/{id_}-m.jpg' if os.path.exists(f'{ORIG}/{id_}-m.jpg') else f'{ART}/{id_}-m.jpg'
                img = cv2.imread(src)
                out = warp(img, v['q'], aspect_of(works[id_], v['q'], v['px']))
                a = Image.fromarray(cv2.cvtColor(img, cv2.COLOR_BGR2RGB)); b = Image.fromarray(cv2.cvtColor(out, cv2.COLOR_BGR2RGB))
                box = (cw // 2 - 6, ch - 26)
                sa = min(box[0] / a.width, box[1] / a.height); a = a.resize((max(1, int(a.width * sa)), max(1, int(a.height * sa))))
                b.thumbnail(box)
                cx, cy = (i % C) * cw, (i // C) * ch
                sheet.paste(a, (cx + 3, cy + 22)); sheet.paste(b, (cx + cw // 2 + 3, cy + 22))
                pts = [(cx + 3 + x * a.width, cy + 22 + y * a.height) for x, y in v['q']]
                d.line(pts + [pts[0]], fill=(255, 40, 40), width=2)
                d.text((cx + 3, cy + 3), f'{p + i} {id_}', fill=(255, 255, 0), font=font)
            sheet.save(f'{S}/sq{p // (C * R):03d}.jpg', quality=82); n += 1
        print(n, 'sheets')
    elif cmd == 'apply':
        # straighten from the big (1920 px) picture, so the cut-out painting keeps its detail; the originals are
        # kept in source/art-orig/ (not published) so this can be run again
        import urllib.request, time
        from PIL import Image
        imgs = json.load(open('data/images.json')); need = json.load(open('source/square.json'))
        # what was done to each (the photo's own address, the outline cut): kept here, not in the page's data
        done_ = json.load(open('source/squared.json')) if os.path.exists('source/squared.json') else {}
        os.makedirs(ORIG, exist_ok=True)
        todo = [k for k in need if k not in SKIP] + [k for k in HAND if k not in need]
        only = sys.argv[2:]
        if only: todo = [k for k in todo if k in only]
        done = 0
        for id_ in todo:
            im = imgs[id_]
            om, ol = f'{ORIG}/{id_}-m.jpg', f'{ORIG}/{id_}-l.jpg'
            if not os.path.exists(om): os.replace(f'{ART}/{id_}-m.jpg', om)
            if not os.path.exists(ol):
                url = done_.get(id_, {}).get('l0') or im['l']
                if not url.startswith('http'): print('no big picture', id_); continue
                for k in range(4):
                    try:
                        with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=40) as r:
                            open(ol, 'wb').write(r.read()); break
                    except Exception as e:
                        print('  ', id_, e, flush=True); time.sleep(30 * (k + 1))
                else:
                    print('could not fetch', id_); continue
                time.sleep(3)
            big = cv2.imread(ol)
            if big is None: big = cv2.imread(om)
            if id_ in HAND:   # a dict with snap False: the outline exactly as given
                h_ = HAND[id_]
                q = h_['q'] if isinstance(h_, dict) and not h_.get('snap', True) else snap(cv2.imread(om), h_)
            else: q = need[id_]['q']
            sm = cv2.imread(om)
            asp = aspect_of(works[id_], q, [sm.shape[1], sm.shape[0]])
            out = warp(big, q, asp, maxside=1920)
            L = Image.fromarray(cv2.cvtColor(out, cv2.COLOR_BGR2RGB))
            L.save(f'{ART}/{id_}-l.jpg', quality=82, optimize=True, progressive=True)
            m = L.copy()
            if max(m.size) > 1024: m.thumbnail((1024, 1024), Image.LANCZOS)
            m.save(f'{ART}/{id_}-m.jpg', quality=78, optimize=True, progressive=True)
            sm_ = m.copy(); sm_.thumbnail((256, 256), Image.LANCZOS); sm_.save(f'{ART}/{id_}-s.jpg', quality=72, optimize=True)
            c = sm_.resize((1, 1), Image.BOX).getpixel((0, 0))
            d_ = done_.setdefault(id_, {})
            d_.setdefault('l0', im['l'] if im['l'].startswith('http') else im.get('l0'))   # where the photo came from
            d_['q'] = q
            im.pop('l0', None); im.pop('sq', None)
            im.update(px=list(m.size), l=f'art/{id_}-l.jpg', c='#%02x%02x%02x' % c)
            done += 1
            if done % 10 == 0:
                json.dump(imgs, open('data/images.json', 'w'), indent=0); json.dump(done_, open('source/squared.json', 'w'), indent=0)
                print(done, flush=True)
        json.dump(imgs, open('data/images.json', 'w'), indent=0); json.dump(done_, open('source/squared.json', 'w'), indent=0)
        print('squared', done)

"""The pictures: for each work in data/works.json, its Commons file as a 960 px picture ('m', walking up to it) and
a 256 px one ('s', from across the room), both re-saved smaller here; and the address of a 1920 px one on Commons for
the full view ('l'). Writes data/images.json {id: {px:[w,h] of m, l: url, c: '#rrggbb' average colour, file}}.
Wikimedia asks bulk users for one request at a time and a clear User-Agent."""
import json, sys, time, os, subprocess, urllib.request, urllib.parse
from PIL import Image
UA = "LouvreWalkthrough/0.1 (personal non-commercial project; one request at a time)"
works = json.load(open('data/works.json'))
lim = int(sys.argv[1]) if len(sys.argv) > 1 else 10**9
imgs = json.load(open('data/images.json')) if os.path.exists('data/images.json') else {}
# the ones that failed before (Wikimedia wouldn't make their small thumbnail) go last, and get one try each
tried = set(json.load(open('source/images-failed.json'))) if os.path.exists('source/images-failed.json') else set()
todo = sorted([w for w in works if w['id'] not in imgs], key=lambda w: w['id'] in tried)[:lim]
failed = set(tried)
def get(url, tries=4):
    for k in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=25) as r: return r.read()
        except urllib.error.HTTPError as e:
            print('  http', e.code, url[:90], flush=True)
            if e.code in (429, 503):
                if '/thumb/' not in url and 'api.php' not in url: return None      # an original: leave it to the page
                time.sleep(int(e.headers.get('Retry-After') or 0) or 6 * (k + 1)); continue
            if e.code == 404: return None
            raise
        except Exception as e:
            print('  error', type(e).__name__, url[:90], flush=True); time.sleep(3 * (k + 1))
    return None
def info(files, width):
    q = urllib.parse.urlencode({'action': 'query', 'format': 'json', 'prop': 'imageinfo', 'iiprop': 'url|size',
                                'iiurlwidth': width, 'titles': '|'.join('File:' + f for f in files)})
    d = json.loads(get('https://commons.wikimedia.org/w/api.php?' + q))
    norm = {n['to']: n['from'] for n in d['query'].get('normalized', [])}
    out = {}
    for p in d['query']['pages'].values():
        if 'imageinfo' not in p: continue
        t = norm.get(p['title'], p['title'])
        out[t.removeprefix('File:')] = p['imageinfo'][0]
    return out
n = 0
for i in range(0, len(todo), 40):
    batch = todo[i:i + 40]
    files = [w['img'] for w in batch]
    try: m, l = info(files, 960), info(files, 1920)
    except Exception as e: print('  info failed', e, flush=True); time.sleep(20); continue
    for w in batch:
        a, b = m.get(w['img']), l.get(w['img'])
        if not a: print('no info', w['img']); continue
        # a thumbnail, never the original file: Wikimedia slows down bulk downloads of originals (429, wait 600 s)
        # but not of thumbnails. Under 960 px wide, the biggest standard thumbnail step it has
        src = a.get('thumburl') if (a.get('width') or 0) > 960 else None
        if not src:
            ow = a.get('width') or 0
            step = next((s_ for s_ in (500, 330, 250, 120) if s_ < ow), None)
            orig = a['url'].split('?')[0]
            if step and '/commons/' in orig:
                name = orig.rsplit('/', 1)[1]
                tail = f'lossy-page1-{step}px-{name}.jpg' if name.lower().endswith(('.tif', '.tiff')) else f'{step}px-{name}'
                src = orig.replace('/commons/', '/commons/thumb/', 1) + '/' + tail
            else:
                src = orig
        data = get(src, tries=1 if ('/thumb/' not in src or w['id'] in tried) else 3)
        if not data:
            print('no file', w['img'], flush=True); failed.add(w['id'])
            json.dump(sorted(failed), open('source/images-failed.json', 'w')); continue
        failed.discard(w['id'])
        raw = f"public/art/{w['id']}-raw"
        open(raw, 'wb').write(data)
        try:
            im = Image.open(raw); im.load(); im = im.convert('RGB')
        except Exception as e:
            print('bad picture', w['img'], e); os.remove(raw); continue
        if max(im.size) > 1024: im.thumbnail((1024, 1024), Image.LANCZOS)
        im.save(f"public/art/{w['id']}-m.jpg", quality=78, optimize=True, progressive=True)
        s = im.copy(); s.thumbnail((256, 256), Image.LANCZOS); s.save(f"public/art/{w['id']}-s.jpg", quality=72, optimize=True)
        c = s.resize((1, 1), Image.BOX).getpixel((0, 0))
        os.remove(raw)
        imgs[w['id']] = dict(px=list(im.size), l=(b.get('thumburl') or b['url']) if b else src, c='#%02x%02x%02x' % c,
                             file=w['img'], size=[a.get('width'), a.get('height')])
        n += 1
        if n % 10 == 0:
            json.dump(imgs, open('data/images.json', 'w'), indent=0)
            print(n, 'pictures', flush=True)
        time.sleep(1.2)          # one at a time, gently
    json.dump(imgs, open('data/images.json', 'w'), indent=0)
print('done', n, flush=True)

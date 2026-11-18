"""Every Commons photo of one sculpture, for building it in 3D from photographs (photogrammetry).
  python3 tools/sculpt_photos.py <name> <Category_1> [<Category_2> ...]
→ source/scans/<name>/list.json  {file: {url, w, h, make, model, artist, licence, cat}}
→ source/scans/<name>/photos/<n>.jpg  (Commons' 1920 px thumbnails — a standard size, one request at a time)
Each photographer and licence is kept for the credit. Drawings, prints and paintings (no camera in the file) are left out."""
import json, os, sys, time, re, hashlib, urllib.parse, urllib.request
UA = "LouvreWalkthrough/0.1 (https://tinselman.github.io/louvre/)"   # contact = the site (his OK, 2026-11-17)
name, cats = sys.argv[1], sys.argv[2:]
D = f'source/scans/{name}'; os.makedirs(f'{D}/photos', exist_ok=True)


def api(**q):
    q.update(action='query', format='json')
    for k in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request('https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(q),
                                        headers={'User-Agent': UA}), timeout=40) as r:
                return json.loads(r.read())
        except Exception as e:
            print('  retry', e, flush=True); time.sleep(20 * (k + 1))
    raise SystemExit('api failed')


strip = lambda s: re.sub(r'<[^>]+>', '', s or '').strip()[:160]
lst = json.load(open(f'{D}/list.json')) if os.path.exists(f'{D}/list.json') else {}
for cat in cats:
    cont = {}
    while True:
        d = api(generator='categorymembers', gcmtitle='Category:' + cat, gcmtype='file', gcmlimit=50, prop='imageinfo',
                iiprop='url|size|mime|commonmetadata|extmetadata', iiurlwidth=1920,
                iiextmetadatafilter='Artist|LicenseShortName', **cont)
        for p in d.get('query', {}).get('pages', {}).values():
            ii = (p.get('imageinfo') or [{}])[0]
            if ii.get('mime') != 'image/jpeg': continue
            cm = {m['name']: m['value'] for m in ii.get('commonmetadata', []) if isinstance(m.get('value'), (str, int, float))}
            em = ii.get('extmetadata', {})
            f = p['title'].removeprefix('File:')
            lst.setdefault(f, dict(url=ii.get('thumburl') or ii['url'], w=ii.get('width'), h=ii.get('height'),
                                   make=str(cm.get('Make', '')).strip(), model=str(cm.get('Model', '')).strip(),
                                   artist=strip(em.get('Artist', {}).get('value')),
                                   licence=strip(em.get('LicenseShortName', {}).get('value')), cat=cat))
        if 'continue' not in d: break
        cont = {k: v for k, v in d['continue'].items() if k != 'continue'}
        time.sleep(1)
    json.dump(lst, open(f'{D}/list.json', 'w'), indent=0)
    print(cat, len(lst), flush=True)
    time.sleep(1)

# the photographs only (a camera named), and big enough to be any use
todo = [(f, v) for f, v in lst.items() if v['make'] and min(v['w'] or 0, v['h'] or 0) >= 900]
print(len(lst), 'files,', len(todo), 'photographs to fetch', flush=True)
for i, (f, v) in enumerate(sorted(todo)):
    v['n'] = n = hashlib.md5(f.encode()).hexdigest()[:10]
    out = f'{D}/photos/{n}.jpg'
    if os.path.exists(out): continue
    for k in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(v['url'], headers={'User-Agent': UA}), timeout=60) as r:
                open(out, 'wb').write(r.read()); break
        except Exception as e:
            print('  ', f[:60], e, flush=True); time.sleep(30 * (k + 1))
    if i % 20 == 0: print(i, flush=True); json.dump(lst, open(f'{D}/list.json', 'w'), indent=0)
    time.sleep(3)
json.dump(lst, open(f'{D}/list.json', 'w'), indent=0)
print('done', flush=True)

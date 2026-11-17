"""Each picture's camera and author on Commons (EXIF Make/Model, Artist, Credit), 40 files a request, one request
at a time. A visitor's photo names a camera; a museum scan mostly doesn't. → source/commons-meta.json {file: {...}}"""
import json, os, time, urllib.parse, urllib.request, re
UA = "LouvreWalkthrough/0.1 (https://tinselman.github.io/louvre/)"   # contact = the site (his OK, 2026-11-17)
imgs = json.load(open('data/images.json'))
out = json.load(open('source/commons-meta.json')) if os.path.exists('source/commons-meta.json') else {}
files = sorted({v['file'] for v in imgs.values()} - set(out))
for i in range(0, len(files), 40):
    batch = files[i:i + 40]
    q = urllib.parse.urlencode({'action': 'query', 'format': 'json', 'prop': 'imageinfo',
                                'iiprop': 'commonmetadata|extmetadata', 'iiextmetadatafilter': 'Artist|Credit',
                                'titles': '|'.join('File:' + f for f in batch)})
    for k in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request('https://commons.wikimedia.org/w/api.php?' + q,
                                        headers={'User-Agent': UA}), timeout=30) as r:
                d = json.loads(r.read()); break
        except Exception as e:
            print('  retry', e, flush=True); time.sleep(30 * (k + 1))
    else:
        continue
    norm = {n['to']: n['from'] for n in d['query'].get('normalized', [])}
    for p in d['query']['pages'].values():
        t = norm.get(p['title'], p['title']).removeprefix('File:')
        ii = (p.get('imageinfo') or [{}])[0]
        cm = {m['name']: m['value'] for m in ii.get('commonmetadata', []) if isinstance(m.get('value'), (str, int, float))}
        em = ii.get('extmetadata', {})
        strip = lambda s: re.sub(r'<[^>]+>', '', s or '').strip()[:120]
        out[t] = dict(make=str(cm.get('Make', '')).strip(), model=str(cm.get('Model', '')).strip(),
                      artist=strip(em.get('Artist', {}).get('value')), credit=strip(em.get('Credit', {}).get('value')))
    json.dump(out, open('source/commons-meta.json', 'w'), indent=0)
    print(i + len(batch), 'of', len(files), flush=True)
    time.sleep(2)
print('done', len(out))

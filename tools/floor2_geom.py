"""The second floor (Richelieu + Sully paintings) from OSM, in the SAME turned frame as source/osm/denon1.json
(so the floors stack). OSM puts some Sully rooms at level 2.25; they are taken as the same floor.
Writes source/osm/floor2.json {els:[{id, kind, name, pts, tags, level}]} and pictures floor2_*.png."""
import json, math
from PIL import Image, ImageDraw, ImageFont
d = json.load(open('source/osm/indoor_geom.json'))
T = json.load(open('source/osm/denon1.json'))
LAT0, LON0 = 48.8606, 2.3376
kx, kz = math.cos(math.radians(LAT0)) * 111320, 110574
P = lambda g: ((g['lon'] - LON0) * kx, -(g['lat'] - LAT0) * kz)
ang = T['angle']; mx, mz = T['origin']
ca, sa = math.cos(-ang), math.sin(-ang)
R = lambda p: ((p[0] - mx) * ca - (p[1] - mz) * sa, (p[0] - mx) * sa + (p[1] - mz) * ca)
els = []
for e in d['elements']:
    t = e.get('tags', {})
    if e['type'] != 'way' or 'geometry' not in e: continue
    lv = str(t.get('level', '')).split(';')
    if not ({'2', '2.25'} & set(lv)): continue
    if not (t.get('indoor') or t.get('stairs') or t.get('highway') in ('steps', 'elevator') or t.get('door')): continue
    pts = [R(P(g)) for g in e['geometry']]
    name = (t.get('ref', '') + ' ' + t.get('name', '')).strip()
    els.append({'id': e['id'], 'kind': t.get('indoor') or t.get('highway') or 'other', 'name': name, 'pts': pts, 'tags': t, 'level': t.get('level')})
json.dump({'angle': ang, 'origin': [mx, mz], 'els': els}, open('source/osm/floor2.json', 'w'), ensure_ascii=False)
xs = [p[0] for e in els for p in e['pts']]; zs = [p[1] for e in els for p in e['pts']]
x0, x1, z0, z1 = min(xs) - 5, max(xs) + 5, min(zs) - 5, max(zs) + 5
print(len(els), 'elements; extent x', round(x0), round(x1), 'z', round(z0), round(z1))
S = 2400 / (x1 - x0); W, H = 2400, int((z1 - z0) * S)
im = Image.new('RGB', (W, H), 'white'); dr = ImageDraw.Draw(im); font = ImageFont.load_default(14)
col = {'room': (255, 214, 214), 'corridor': (205, 225, 255), 'area': (215, 250, 215), 'yes': (245, 240, 195), 'wall': (40, 40, 40), 'steps': (120, 200, 120), 'elevator': (120, 120, 220)}
for kind in ['yes', 'area', 'corridor', 'room', 'wall', 'steps', 'elevator', 'other']:
    for e in els:
        if e['kind'] != kind: continue
        q = [((x - x0) * S, (z - z0) * S) for x, z in e['pts']]
        if len(q) > 2: dr.polygon(q, fill=col.get(kind, (200, 200, 200)), outline=(70, 70, 70))
        elif len(q) == 2: dr.line(q, fill=(0, 140, 0), width=3)
for e in els:
    if not e['name']: continue
    cx = sum(p[0] for p in e['pts']) / len(e['pts']); cz = sum(p[1] for p in e['pts']) / len(e['pts'])
    dr.text(((cx - x0) * S - 12, (cz - z0) * S - 7), e['name'][:14], fill=(0, 0, 0), font=font)
# the first floor's rooms, outlined in blue, for registration
B = json.load(open('data/building.json'))
for r in B['rooms']:
    dr.rectangle([((r['x0'] - x0) * S, (r['z0'] - z0) * S), ((r['x1'] - x0) * S, (r['z1'] - z0) * S)], outline=(0, 0, 255), width=2)
for gx in range(int(x0 // 10) * 10, int(x1), 10):
    dr.line([((gx - x0) * S, 0), ((gx - x0) * S, 8 if gx % 50 else 20)], fill=(0, 0, 255), width=1)
    if gx % 50 == 0: dr.text(((gx - x0) * S + 2, 22), str(gx), fill=(0, 0, 255), font=font)
for gz in range(int(z0 // 10) * 10, int(z1), 10):
    dr.line([(0, (gz - z0) * S), (8 if gz % 50 else 20, (gz - z0) * S)], fill=(0, 0, 255), width=1)
    if gz % 50 == 0: dr.text((22, (gz - z0) * S - 8), str(gz), fill=(0, 0, 255), font=font)
im.save('source/osm/floor2.png'); print(W, H, round(S, 2), 'px/m')

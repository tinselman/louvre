"""The Denon wing's level-1 rooms from OSM, turned so the Grande Galerie runs along x (east = +x, the Seine
to the south = +z). Writes source/osm/denon1.json [{id, kind, name, pts:[[x,z]...]}] and a picture."""
import json, sys, math
from PIL import Image, ImageDraw, ImageFont
d = json.load(open('source/osm/indoor_geom.json'))
LAT0, LON0 = 48.8606, 2.3376
kx, kz = math.cos(math.radians(LAT0)) * 111320, 110574
P = lambda g: ((g['lon'] - LON0) * kx, -(g['lat'] - LAT0) * kz)
els = []
for e in d['elements']:
    t = e.get('tags', {})
    if e['type'] != 'way' or 'geometry' not in e or not t.get('indoor'): continue
    if '1' not in str(t.get('level', '')).split(';'): continue
    pts = [P(g) for g in e['geometry']]
    cx = sum(p[0] for p in pts) / len(pts); cz = sum(p[1] for p in pts) / len(pts)
    if not (-380 < cx < 15 and -40 < cz < 140): continue
    name = (t.get('ref', '') + ' ' + t.get('name', '')).strip()
    els.append({'id': e['id'], 'kind': t['indoor'], 'name': name, 'pts': pts, 'tags': t})
gg = next(e for e in els if e['name'] == 'Grande Galerie')
# the Grande Galerie's long axis
xs = [p[0] for p in gg['pts']]; zs = [p[1] for p in gg['pts']]
mx, mz = sum(xs) / len(xs), sum(zs) / len(zs)
sxx = sum((x - mx) ** 2 for x in xs); szz = sum((z - mz) ** 2 for z in zs); sxz = sum((x - mx) * (z - mz) for x, z in zip(xs, zs))
ang = 0.5 * math.atan2(2 * sxz, sxx - szz)
# better: the angle of its longest edge
best = max(zip(gg['pts'], gg['pts'][1:]), key=lambda ab: math.dist(*ab))
ang = math.atan2(best[1][1] - best[0][1], best[1][0] - best[0][0])
if math.cos(ang) < 0: ang += math.pi
ca, sa = math.cos(-ang), math.sin(-ang)
R = lambda p: ((p[0] - mx) * ca - (p[1] - mz) * sa, (p[0] - mx) * sa + (p[1] - mz) * ca)
for e in els: e['pts'] = [R(p) for p in e['pts']]
print('turned by', round(math.degrees(ang), 3), 'deg about', round(mx, 2), round(mz, 2))
json.dump({'angle': ang, 'origin': [mx, mz], 'els': els}, open('source/osm/denon1.json', 'w'), ensure_ascii=False)
xs = [p[0] for e in els for p in e['pts']]; zs = [p[1] for e in els for p in e['pts']]
x0, x1, z0, z1 = min(xs) - 5, max(xs) + 5, min(zs) - 5, max(zs) + 5
print('extent', round(x0), round(x1), round(z0), round(z1))
for part, (a, b) in enumerate([(x0, (x0 + x1) / 2 + 10), ((x0 + x1) / 2 - 10, x1)]):
    S = 2400 / (b - a); W, H = 2400, int((z1 - z0) * S)
    im = Image.new('RGB', (W, H), 'white'); dr = ImageDraw.Draw(im); font = ImageFont.load_default(15)
    col = {'room': (255, 214, 214), 'corridor': (205, 225, 255), 'area': (215, 250, 215), 'yes': (245, 240, 195), 'wall': (40, 40, 40)}
    for kind in ['yes', 'area', 'corridor', 'room', 'wall']:
        for e in els:
            if e['kind'] != kind: continue
            q = [((x - a) * S, (z - z0) * S) for x, z in e['pts']]
            if len(q) > 2: dr.polygon(q, fill=col.get(kind, (200, 200, 200)), outline=(70, 70, 70))
    for e in els:
        if not e['name']: continue
        cx = sum(p[0] for p in e['pts']) / len(e['pts']); cz = sum(p[1] for p in e['pts']) / len(e['pts'])
        dr.text(((cx - a) * S - 30, (cz - z0) * S - 8), e['name'][:30], fill=(0, 0, 0), font=font)
    for gx in range(int(a // 10) * 10, int(b), 10):
        dr.line([((gx - a) * S, 0), ((gx - a) * S, 8)], fill=(0, 0, 255), width=1)
        if gx % 50 == 0: dr.text(((gx - a) * S + 2, 10), str(gx), fill=(0, 0, 255), font=font)
    for gz in range(int(z0 // 10) * 10, int(z1), 10):
        dr.line([(0, (gz - z0) * S), (8, (gz - z0) * S)], fill=(0, 0, 255), width=1)
        dr.text((10, (gz - z0) * S - 8), str(gz), fill=(0, 0, 255), font=font)
    im.save(f'source/osm/denon1_{part}.png'); print(part, W, H, round(S, 2), 'px/m')

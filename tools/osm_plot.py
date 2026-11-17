"""Draw the OSM indoor polygons of one level as a PNG, in local metres (x east, z south), with names."""
import json, sys, math
from PIL import Image, ImageDraw, ImageFont
src, out, level = sys.argv[1], sys.argv[2], sys.argv[3]
box = [float(v) for v in sys.argv[4].split(',')] if len(sys.argv) > 4 else None   # x0,z0,x1,z1 metres
d = json.load(open(src))
LAT0, LON0 = 48.8606, 2.3376
kx, kz = math.cos(math.radians(LAT0)) * 111320, 110574
P = lambda g: (( g['lon'] - LON0) * kx, -(g['lat'] - LAT0) * kz)
polys = []
for e in d['elements']:
    t = e.get('tags', {})
    lv = str(t.get('level', '')).split(';')
    if e['type'] != 'way' or 'geometry' not in e: continue
    if t.get('building') and not t.get('indoor'):
        polys.append(('bld', [P(g) for g in e['geometry']], '', e['id'])); continue
    if level not in lv or not t.get('indoor'): continue
    name = t.get('ref') or t.get('name') or ''
    if t.get('ref') and t.get('name'): name = t['ref'] + ' ' + t['name']
    polys.append((t['indoor'], [P(g) for g in e['geometry']], name, e['id']))
xs = [p[0] for _, pts, _, _ in polys for p in pts]; zs = [p[1] for _, pts, _, _ in polys for p in pts]
x0, z0, x1, z1 = box or (min(xs), min(zs), max(xs), max(zs))
S = 2400 / (x1 - x0)
W, H = 2400, int((z1 - z0) * S) + 1
im = Image.new('RGB', (W, H), 'white'); dr = ImageDraw.Draw(im)
font = ImageFont.load_default(14)
col = {'bld': (225, 225, 225), 'room': (255, 210, 210), 'corridor': (210, 230, 255), 'area': (220, 255, 220), 'yes': (240, 240, 200), 'wall': (60, 60, 60)}
for kind in ['bld', 'yes', 'area', 'corridor', 'room', 'wall']:
    for k, pts, name, i in polys:
        if k != kind: continue
        q = [((x - x0) * S, (z - z0) * S) for x, z in pts]
        if len(q) > 2: dr.polygon(q, fill=col.get(k, (200, 200, 200)), outline=(80, 80, 80))
for k, pts, name, i in polys:
    if not name or k == 'bld': continue
    cx = sum(p[0] for p in pts) / len(pts); cz = sum(p[1] for p in pts) / len(pts)
    dr.text(((cx - x0) * S - 20, (cz - z0) * S - 6), name[:28], fill=(0, 0, 0), font=font)
# a 10 m scale bar
dr.line([(20, H - 20), (20 + 10 * S, H - 20)], fill=(0, 0, 0), width=4); dr.text((20, H - 40), '10 m', fill=(0, 0, 0), font=font)
im.save(out); print(W, H, 'px; scale', round(S, 2), 'px/m; box', [round(v, 1) for v in (x0, z0, x1, z1)])

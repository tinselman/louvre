"""For each OSM room polygon (turned frame), the room's main rectangle: start from its bounding box and pull each
side in until at least 85% of the strip just inside it is room (so window bays and niches don't count)."""
import json, sys
import numpy as np
from PIL import Image, ImageDraw
d = json.load(open('source/osm/denon1.json'))
C = 0.1
out = {}
for e in d['els']:
    if e['kind'] not in ('room', 'corridor', 'area') : continue
    xs = [p[0] for p in e['pts']]; zs = [p[1] for p in e['pts']]
    x0, x1, z0, z1 = min(xs), max(xs), min(zs), max(zs)
    if x1 - x0 < 3 or z1 - z0 < 3: continue
    W, H = int((x1 - x0) / C) + 1, int((z1 - z0) / C) + 1
    im = Image.new('L', (W, H), 0)
    ImageDraw.Draw(im).polygon([((x - x0) / C, (z - z0) / C) for x, z in e['pts']], fill=1)
    g = np.array(im, dtype=bool)
    i0, i1, j0, j1 = 0, W - 1, 0, H - 1
    for _ in range(400):
        moved = False
        if g[j0:j1 + 1, i0].mean() < 0.85: i0 += 1; moved = True
        if g[j0:j1 + 1, i1].mean() < 0.85: i1 -= 1; moved = True
        if g[j0, i0:i1 + 1].mean() < 0.85: j0 += 1; moved = True
        if g[j1, i0:i1 + 1].mean() < 0.85: j1 -= 1; moved = True
        if not moved or i1 - i0 < 5 or j1 - j0 < 5: break
    r = [round(x0 + i0 * C, 2), round(z0 + j0 * C, 2), round(x0 + (i1 + 1) * C, 2), round(z0 + (j1 + 1) * C, 2)]
    out[str(e['id'])] = {'name': e['name'], 'kind': e['kind'], 'bbox': [round(v, 2) for v in (x0, z0, x1, z1)], 'core': r}
    print(f"{e['id']:>10} {e['name'][:30]:30} bbox {x0:8.2f} {z0:8.2f} {x1:8.2f} {z1:8.2f}  core {r}")
json.dump(out, open('source/osm/cores.json', 'w'), ensure_ascii=False, indent=1)

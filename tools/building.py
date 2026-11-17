"""The Denon wing, first floor, as rooms: data/building.json.

Rooms are axis-aligned rectangles in the turned frame of source/osm/denon1.json (x east along the Grande Galerie,
z south toward the Seine, metres). Their outlines are OpenStreetMap's indoor map (core rectangles, tools/core_rects.py),
tidied: rooms that touch get a wall between them at least WALL thick. Rooms 718 and 719, west of the Salvator Rosa
pavilion, aren't in OpenStreetMap; they are carried on from the Grande Galerie at lengths read off the Louvre's own
visitor plan (May 2026). Heights and ceilings are Claude's stylised reading of each room (not surveyed).

Doorways are listed by the two rooms they join; each is centred on the stretch where the two rooms face each other
unless `at` says where along it. An 'arch' is the full width less a pier each side (the Grande Galerie's bays)."""
import json
WALL = 0.7

R = []
def room(id, name, rect, spring, top, ceiling='flat', sky=0.0, axis=None, hang=True):
    x0, z0, x1, z1 = rect
    R.append(dict(id=id, name=name, x0=x0, z0=z0, x1=x1, z1=z1, spring=spring, top=top, ceiling=ceiling, sky=sky,
                  axis=axis or ('x' if x1 - x0 >= z1 - z0 else 'z'), hang=hang))

GG_Z = (-3.2, 8.4)
room('719', 'Goya',                               (-286.0, -9.0, -259.0, 8.4), 8.0, 11.0, 'cove', 0.45)
room('718', 'Spanish painting · Murillo',         (-258.3, *GG_Z[:1], -200.5, GG_Z[1]), 7.5, 11.0, 'vault', 0.32)
room('717', 'Salvator Rosa',                       (-199.76, -23.4, -190.06, 8.49), 8.5, 13.0, 'cove', 0.4)
room('716', 'Grande Galerie · 3rd and 4th bays',  (-189.4, *GG_Z[:1], -111.8, GG_Z[1]), 8.0, 12.5, 'vault', 0.32)
room('712', 'Grande Galerie · Tribune',           (-110.6, *GG_Z[:1], -38.3, GG_Z[1]), 8.0, 12.5, 'vault', 0.32)
room('710', 'Grande Galerie · 1st and 2nd bays',  (-37.1, *GG_Z[:1], 78.6, GG_Z[1]), 8.0, 12.5, 'vault', 0.32)
room('708', 'Salon Carré',                         (79.6, -8.3, 103.2, 9.0), 10.0, 14.5, 'cove', 0.5)
room('707', 'Salle Duchâtel',                      (94.6, -23.7, 103.2, -9.0), 6.0, 7.5, 'cove', 0.0)
room('706', 'Salles Percier et Fontaine',          (94.8, -42.0, 103.2, -24.4), 5.5, 8.5, 'vault', 0.0, 'z')
room('703', 'Salle 703',                           (96.0, -64.0, 102.4, -42.7), 6.5, 8.0, 'cove', 0.0, hang=False)
room('704', "Rotonde d'Apollon",                   (103.2, -67.1, 114.3, -55.8), 7.0, 9.0, 'cove', 0.0)
room('661', 'Salle des verres',                    (117.0, -64.0, 127.7, -51.3), 6.0, 7.5, 'cove', 0.0)
room('705', "Galerie d'Apollon",                   (104.9, -55.1, 115.5, 11.1), 7.5, 12.0, 'vault', 0.0, 'z')
room('709', 'Salle des Sept-Mètres',               (66.2, -42.5, 76.0, -3.9), 6.0, 7.5, 'cove', 0.4)
room('daru', 'Escalier Daru',                      (65.8, -61.8, 95.3, -43.3), 11.0, 13.0, 'cove', 0.55, hang=False)
room('702', 'Salle Daru · Neoclassicism',          (12.6, -61.8, 65.0, -45.5), 10.5, 14.0, 'cove', 0.5)
room('701', 'Salon Denon',                         (-14.5, -65.4, 11.9, -45.9), 9.5, 13.0, 'cove', 0.0)
room('700', 'Salle Mollien · Romanticism',         (-64.4, -63.7, -15.2, -46.3), 10.0, 13.5, 'cove', 0.5)
room('711', 'Salle des États',                     (-14.2, -45.2, 8.2, -3.9), 11.0, 14.5, 'cove', 0.6)
room('pm',  'Palier Mollien',                      (-75.6, -63.1, -65.1, -49.3), 9.0, 12.0, 'cove', 0.3, hang=False)
room('715', 'Salle 715',                           (-75.9, -48.6, -71.6, -36.9), 5.5, 6.5, 'flat', 0.0)
room('714', 'Beistegui Collection',                (-85.9, -36.2, -71.2, -26.0), 6.0, 7.0, 'cove', 0.3)
room('713', 'Great Britain · United States',      (-86.1, -25.3, -71.4, -15.6), 6.0, 7.0, 'cove', 0.3)
room('713p', 'Passage',                            (-75.9, -14.9, -71.6, -3.9), 4.8, 5.5, 'flat', 0.0, hang=False)

# keep a wall at least WALL thick wherever two rooms face each other
by = {r['id']: r for r in R}
def facing(a, b):
    """the axis two rooms face each other across, the gap, and the stretch they share"""
    ox = min(a['x1'], b['x1']) - max(a['x0'], b['x0']); oz = min(a['z1'], b['z1']) - max(a['z0'], b['z0'])
    if ox > 1.0 and oz < 3.0:   # one above the other (in z)
        return 'z', (b['z0'] - a['z1']) if a['z0'] < b['z0'] else (a['z0'] - b['z1']), (max(a['x0'], b['x0']), min(a['x1'], b['x1']))
    if oz > 1.0 and ox < 3.0:
        return 'x', (b['x0'] - a['x1']) if a['x0'] < b['x0'] else (a['x0'] - b['x1']), (max(a['z0'], b['z0']), min(a['z1'], b['z1']))
    return None
for i, a in enumerate(R):
    for b in R[i + 1:]:
        f = facing(a, b)
        if not f: continue
        ax, gap, _ = f
        if gap >= WALL or gap < -3: continue
        need = (WALL - gap) / 2
        lo, hi = (a, b) if (a['z0'] if ax == 'z' else a['x0']) < (b['z0'] if ax == 'z' else b['x0']) else (b, a)
        k0, k1 = ('z0', 'z1') if ax == 'z' else ('x0', 'x1')
        lo[k1] = round(lo[k1] - need, 3); hi[k0] = round(hi[k0] + need, 3)

D = []
def door(a, b, w=None, h=None, at=None, arch=False):
    A, B = by[a], by[b]
    ax, gap, (s0, s1) = facing(A, B)
    if arch:
        w = (s1 - s0) - 2 * 1.1
        h = min(A['spring'], B['spring']) - 0.6
    c = at if at is not None else (s0 + s1) / 2
    # the door's planes: room a's face and room b's
    if ax == 'z':
        pa, pb = (A['z1'], B['z0']) if A['z0'] < B['z0'] else (A['z0'], B['z1'])
    else:
        pa, pb = (A['x1'], B['x0']) if A['x0'] < B['x0'] else (A['x0'], B['x1'])
    D.append(dict(a=a, b=b, wall=('x' if ax == 'z' else 'z'), u0=round(c - w / 2, 3), u1=round(c + w / 2, 3), pa=pa, pb=pb, h=round(h, 2)))

for a, b in [('719', '718'), ('718', '717'), ('716', '712'), ('712', '710')]: door(a, b, arch=True)
door('717', '716', w=9.0, h=7.4, at=sum(GG_Z) / 2)
door('710', '708', w=7.0, h=7.6, at=sum(GG_Z) / 2)
door('710', '711', w=5.5, h=7.0)
door('710', '709', w=5.0, h=5.4)
door('711', '701', w=6.0, h=7.0)
door('701', '700', w=6.0, h=7.0)
door('701', '702', w=6.0, h=7.0)
door('700', 'pm', w=5.0, h=6.5)
door('pm', '715', w=3.6, h=4.8)
door('715', '714', w=3.6, h=4.6)
door('714', '713', w=4.0, h=4.6, at=-73.5)
door('713', '713p', w=3.6, h=4.4)
door('713p', '712', w=3.6, h=4.4)
door('702', 'daru', w=6.0, h=7.5)
door('daru', '709', w=5.0, h=5.4)
door('daru', '703', w=4.0, h=5.6)
door('708', '707', w=4.0, h=5.0)
door('707', '706', w=4.0, h=5.0)
door('706', '703', w=4.0, h=5.0)
door('703', '704', w=4.0, h=5.6)
door('704', '705', w=5.0, h=6.0)
door('704', '661', w=3.6, h=5.0)
door('708', '705', w=4.0, h=5.6, at=4.0)

# free-standing walls: the end wall of the Salle des États (the Wedding at Cana) and the Mona Lisa's own wall
s = by['711']; cx = (s['x0'] + s['x1']) / 2
W = [dict(id='cana', room='711', x0=round(cx - 6.7, 2), z0=-38.6, x1=round(cx + 6.7, 2), z1=-38.6, t=0.6, h=9.0),
     dict(id='joconde', room='711', x0=round(cx - 3.4, 2), z0=-23.0, x1=round(cx + 3.4, 2), z1=-23.0, t=0.8, h=4.6)]
# the bays of the Salle des Sept-Mètres (OpenStreetMap's short walls)
s = by['709']
for z in (-29.8, -36.4): W.append(dict(id=f'bay{z}', room='709', x0=s['x0'], z0=z, x1=round(s['x0'] + 4.4, 2), z1=z, t=0.35, h=s['spring']))
for z in (-10.8, -18.5): W.append(dict(id=f'bay{z}', room='709', x0=round(s['x1'] - 4.4, 2), z0=z, x1=s['x1'], z1=z, t=0.35, h=s['spring']))

# the rail that keeps the crowd back from the Mona Lisa (white, waist high, 2 m out from her wall)
s = by['711']; cx = (s['x0'] + s['x1']) / 2
RAILS = [dict(id='joconde-rail', room='711', x0=round(cx - 3.0, 2), z0=-25.4, x1=round(cx + 3.0, 2), z1=-25.4, h=0.95)]

out = dict(note='Denon wing, first floor — rooms from OpenStreetMap indoor data (© OpenStreetMap contributors, ODbL), turned so the Grande Galerie runs east-west; heights stylised.',
           rooms=R, doors=D, walls=W, rails=RAILS,
           # in the Salon Carré, looking west down the Grande Galerie
           start=dict(x=96.0, z=2.6, yaw=90.0))
json.dump(out, open('data/building.json', 'w'), ensure_ascii=False, indent=1)
print(len(R), 'rooms', len(D), 'doors', len(W), 'free walls')
for d in D: print(d)

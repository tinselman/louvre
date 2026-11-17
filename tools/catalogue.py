"""data/works.json: every painting the Louvre lists in a room we built (Denon first floor; Richelieu and Sully second
floor — with --all, every second-floor room, built or not, so their pictures can be fetched ahead), with a public-domain picture
on Wikimedia Commons (through Wikidata). Titles and artists in English where Wikidata has them, else the Louvre's
French; date, medium (put into English) and size from the Louvre's record (Etalab Open Licence). Sizes in metres:
w, h the painting itself; fw the frame's width each side when the Louvre gives the size with frame."""
import json, re, sys, collections, hashlib
wd = {e['ark'].removeprefix('cl'): e for e in json.load(open('source/wikidata.json'))}
B = json.load(open('data/building.json'))
rooms = {r['id'] for r in B['rooms'] if r['hang']}
ALL = '--all' in sys.argv
args = [a for a in sys.argv[1:] if not a.startswith('--')]
MED = [(r'huile', 'oil'), (r'tempera|détrempe', 'tempera'), (r'sur toile', 'on canvas'), (r'sur bois', 'on wood'),
       (r'sur cuivre', 'on copper'), (r'sur papier', 'on paper'), (r'sur ardoise', 'on slate'), (r'sur marbre', 'on marble'),
       (r'transposée? sur toile', 'transferred to canvas'), (r'\(peuplier\)', '(poplar)'), (r'\(chêne\)', '(oak)'),
       (r'\(noyer\)', '(walnut)'), (r'\(tilleul\)', '(lime)'), (r'fond d\'or', 'gold ground'), (r'pastel', 'pastel'),
       (r'et ', 'and '), (r'marouflée?', 'mounted'), (r'peinture à la colle', 'distemper'), (r'cire', 'wax')]
def english(m):
    s = (m or '').strip()
    for a, b in MED: s = re.sub(a, b, s)
    return s[:1].upper() + s[1:]
def metres(v, unit):
    try: x = float(v.replace(',', '.').replace(' ', ''))
    except Exception: return None
    return x / 100 if unit == 'cm' else x / 1000 if unit == 'mm' else x
def years(s):
    s = (s or '').replace('Date de création/fabrication :', '').strip()
    m = re.search(r'\((\d{3,4})\s*-\s*(\d{3,4})\)', s)
    if re.search(r'siècle', s) and m: return f'{m.group(1)}–{m.group(2)}', int(m.group(1))
    ys = re.findall(r'\b(1\d{3}|[5-9]\d{2})\b', s)
    if not ys: return s, 9999
    lab = ys[0] if len(set(ys)) == 1 else f'{ys[0]}–{ys[-1]}' if len(ys) == 2 else ys[0]
    if 'vers' in s.lower() or 'about' in s.lower(): lab = 'c. ' + lab
    return lab, int(ys[0])
def cpath(name):
    # where Commons keeps a file: /a/ab/ from the md5 of its name (spaces as underscores)
    n = name.replace(' ', '_'); h = hashlib.md5(n.encode('utf-8')).hexdigest()
    return f'{h[0]}/{h[:2]}'
out, why = [], collections.Counter()
seen = set()
for line in open('source/louvre.jsonl'):
    try: r = json.loads(line)
    except ValueError: continue          # (a line still being written)
    if r.get('missing') or not r.get('room'): continue
    m = re.match(r'Salle (\w+), Aile (?:Aile )?(Denon|Richelieu|Sully), Niveau (\d)', r['room'])
    if not m: continue
    room, wing, level = m.group(1), m.group(2), int(m.group(3))
    if not ((wing == 'Denon' and level == 1) or level == 2 or room in rooms): continue
    if room not in rooms and not (ALL and level == 2): why['room not built: ' + room] += 1; continue
    ark = r['arkId'].removeprefix('cl')
    if ark in seen: continue
    seen.add(ark)
    w = wd.get(ark)
    if not w or not w['img']: why['no picture'] += 1; continue
    dims = {d['type']: metres(d['value'], d.get('unit', 'm')) for d in (r.get('dimension') or [])}
    H, W = dims.get('Hauteur'), dims.get('Largeur')
    if (not H or not W) and dims.get('Diamètre'): H = W = dims['Diamètre']     # a tondo: as its square
    if not H or not W or H > 12 or W > 12: why['no size'] += 1; continue
    Hf, Wf = dims.get('Hauteur avec accessoire'), dims.get('Largeur avec accessoire')
    fw = None
    if Hf and Wf and Hf > H and Wf > W: fw = round(min((Hf - H) / 2, (Wf - W) / 2, 0.45), 3)
    cr = [c for c in (r.get('creator') or []) if c.get('label') and c.get('linkType', '') == ''] or (r.get('creator') or [])
    artist = w['creator'] or (cr[0]['label'] if cr else '')
    if cr and cr[0].get('linkType'): artist = (cr[0]['linkType'] + ' ' + cr[0]['label']).strip()
    date, sortyear = years(r.get('displayDateCreated'))
    inv = next((o['value'] for o in (r.get('objectNumber') or []) if o.get('type') == 'Numéro principal'), '')
    title = w['label'] if w['label'] and not re.match(r'^Q\d+$', w['label']) else r['title']
    out.append(dict(id=ark, title=title, fr=r['title'], artist=artist, date=date, year=sortyear,
                    medium=english(r.get('materialsAndTechniques')), w=round(W, 3), h=round(H, 3), fw=fw,
                    room=room, floor=level, wing=wing, inv=inv, q=w['q'], img=w['img'], cpath=cpath(w['img'])))
out.sort(key=lambda e: (e['room'], e['year'], e['artist']))
json.dump(out, open(args[0] if args else 'data/works.json', 'w'), ensure_ascii=False, indent=0)
c = collections.Counter(e['room'] for e in out)
print(len(out), 'works to hang:', dict(sorted(c.items())))
print('left out:', {k: v for k, v in why.items() if not k.startswith('room not built')}, '; in rooms not built:', sum(v for k, v in why.items() if k.startswith('room not built')))

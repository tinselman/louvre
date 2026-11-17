# The Louvre — Denon Wing, first floor (a white walk-through)

Robyn, 2026-11-16: "let's do the denon gallery … make a stylized version of the actual architecture, where
everything is shades of white and as user approaches a work of art … the background fade and gets darker. This
interface is same as Robyn Miller gallery. Floor should have same texture."

## Run it
    npm --prefix ~/Claude/Projects/louvre run dev      → http://127.0.0.1:5252   (launch.json entry "louvre")
Test hooks: `?at=x,z,yawDeg,pitchDeg`, `?room=711`, `?open=<ark id>`, `?hud=0`. Headless: `node tools/shot.mjs --list shots/jobs1.json`,
`node tools/fps.mjs 2` (2–2.5 ms a frame at retina, 2026-11-16).

## Where everything comes from (all re-runnable, in order)
1. `tools/wikidata.py source/wikidata.json` — every painting on Wikidata with a Louvre ARK id (P9394; stored WITHOUT
   the `cl` prefix) and its Commons picture (P18): 10,427 paintings, 4,767 with a picture.
2. `tools/louvre_rooms.py source/wikidata.json source/louvre.jsonl` — reads each painting's own record
   (`collections.louvre.fr/ark:/53355/cl<id>.json`, documented by the Louvre, allowed by robots.txt; `/search/export`
   is disallowed and the search pages sit behind a robot check — never get round it). One request at a time,
   resumable, pictured works first. The `room` field: "Salle 711, Aile Aile Denon, Niveau 1".
3. OpenStreetMap indoor map (Overpass, level 1, `source/osm/indoor_geom.json`) → `tools/denon_geom.py` turns it
   19.5° so the Grande Galerie runs along x → `tools/core_rects.py` (each room's rectangle without window bays).
4. `tools/building.py` → `data/building.json`: 24 rooms (incl. 704 Rotonde d'Apollon and 661 Salle des verres, which the
   Louvre files under Denon), 27 doorways, free walls (the Wedding at Cana end wall,
   the Mona Lisa's wall, the Sept-Mètres bays). Rooms 718/719 aren't in OSM: carried on west from the Grande
   Galerie at lengths read off the Louvre's visitor plan (`source/plan/plan_en.pdf`, May 2026; it's drawn at a slant,
   so only lengths along the gallery were taken from it). Heights/ceilings are Claude's stylised reading.
5. `tools/catalogue.py` → `data/works.json` (Denon level-1 rooms we built, with a picture and a size).
6. `tools/images.py` → `public/art/<id>-s.jpg` (256 px), `-m.jpg` (≤1024 px) and `data/images.json` (pixels,
   average colour, the 1920 px Commons address used by the full view).

## Licences / credit (on the wall title in the Salon Carré)
Room outlines © OpenStreetMap contributors (ODbL). Louvre text data: Etalab Open Licence (attribution). Louvre's own
photographs are NOT used (free only for private/educational use; a public site would need a paid licence from
GrandPalaisRmn) — pictures are Wikimedia Commons public-domain reproductions.

## How it works
- `src/arch.ts` rooms → faces (each side, doorways cut), reveals, thresholds, collision strips.
- `src/hang.ts` the Louvre gives the room only, so works are hung by date clockwise round each room, one row at eye
  level (centre 1.6 m, big ones' bottoms ≥ 0.6 m); crowded rooms stack small neighbours 2 then 3 high; if the round
  doesn't fit, columns go where there's most room. Mona Lisa pinned on her wall's north face, Wedding at Cana on the
  end wall facing her (Claude's reading of the room — not checked against a photo).
- `src/build.ts` walls in ≤14 m stretches (each knows ≤40 pictures for their soft shadows), coves / barrel vaults
  with skylights, floors (the gallery's polished concrete + mirror; shade along walls computed from each room's wall
  segments), white frames, label cards (words drawn only within 7 m), a single merged mesh of colour patches for far
  pictures (real meshes only within 42 m), door signs.
- From the Portrait gallery, unchanged or nearly: player.ts (walking), focus.ts (the darkening; reach raised to 12 m
  for the huge canvases), viewer.ts (full view; caption + Commons credit), touch.ts, crosshair.ts, rest.ts, reflect.ts
  (mirror now only draws the nearest 48 m).

## Claude's choices (not ruled on)
- Start in the Salon Carré looking west down the Grande Galerie; wall title there.
- No host creature, no exit door, no visitor counter (yet).
- Paintings only (no sculpture, no Winged Victory); the Daru staircase is a plain landing room.
- Frames: plain white mouldings, width from the Louvre's framed size when given, else guessed.

## Checks (2026-11-16)
- `node tools/check.mjs` — every work hung, none overlapping another / a doorway / a label, none off its wall, every room
  reachable from the start: PASS (543 works at the time).
- `node tools/fps.mjs 2` — 1.9–2.5 ms a frame at retina in five places (Chrome headless, M-series GPU).
- `node ../idlecheck/idle-check.mjs --away http://127.0.0.1:5252/` — 0 frames, 0 draws when the visitor has gone.
- WebKit (Safari's engine): playwright-core 1.65.1 matches the cached webkit-2388 (scratchpad `wk/wk.mjs`) — renders, no errors.

## Wikimedia
upload.wikimedia.org answered 429 with Retry-After 600 after ~130 quick downloads (generic User-Agent, no contact — we
don't put Robyn's email in it). tools/images.py now waits as asked and goes one picture every ~2 s.

## Later the same evening
- Ceiling paintings: titles starting "Plafond", or taller than the walls, hang flat overhead (vault: as high as its sides
  allow; cove: on the flat middle if they fit, else just above the walls). Tondi (diameter only) hang as their square.
- The Mona Lisa's rail stops the visitor but not the view (`arch.sight` for the fade, `arch.solids` for walking).
- Pictures not yet downloaded load straight from Commons in the page (`cpath` = md5 folder; Commons sends CORS *).
- 623 paintings hung (all pictured Louvre records read); check.mjs PASS.

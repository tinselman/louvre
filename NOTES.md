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
- All 10,427 Wikidata paintings with a Louvre ARK read (2026-11-16 evening). In the rooms built: 623 hung, 35 left out
  for want of a public-domain picture, 1 for want of a size (paintings the Louvre has that Wikidata doesn't know aren't
  counted at all).

## Online (2026-11-16, his "make this public" / "you get it working for me")
- Repo tinselman/louvre is PUBLIC (free GitHub Pages needs that). Address: **https://tinselman.github.io/louvre/**
- Pages serves the repo's **main** branch (root). main = the finished site only; this workshop copy lives on the
  **studio** branch (this folder's branch is `studio`, tracking origin/studio). `gh-pages` is a leftover copy, unused.
- `Projects/louvre-site` is the finished site's own checkout (branch main, .nojekyll). To publish, only at his word:
  `npm run build` here → copy `dist/` over louvre-site (keep its .git and .nojekyll) → commit there → `git push`.
  Ordinary pushes only; he sees the old page for ~10 min in Safari — tell him Cmd-Option-R.
- Commits are by RobynMiller <RobynMiller@mac.lan> (set in both folders' git config) — never his Gmail.

## The second floor, the stair, the map (2026-11-16 night, his "do second floor … create a map … small X in upper right corner closes the map")
- **Floor 2** = Richelieu (Dutch, Flemish, German, early French) and Sully (French, round the Cour Carrée), from
  OpenStreetMap levels 2 and 2.25 (`tools/floor2_geom.py` turns it in the same frame as floor 1 → `source/osm/cores2.json`).
  `tools/building.py` makes ~130 floor-2 rooms; rooms OSM lacks (914, 916–918, 922–923, 925–926 redrawn, 931) are
  Claude's reading; a few joins tidied so neighbours meet (Lefuel landing, 829→830, 936, 944, 813). OSM maps no
  doorways on floor 2, so every two rooms facing across a wall over ≥2 m get one in the middle (≤3.2 m wide).
  Floor 2 sits 8 m above floor 1 (stylised). Heights: cabinets 5.2 m, rooms 5.8, big rooms 6.5, all top-lit
  (it's the top floor); 801 the Medici gallery a vault.
- **The way up**: Salle des verres (661) → Salon des Sept-Cheminées (660) → Salle Henri II (662) → Salle des Bronzes
  (663) → a passage → **Escalier Henri II** (where OSM has it): two flights side by side, a landing at 4 m, a parting
  wall topped as a rail. Room `s1` (floor 1's part, walls to 8 m, no ceiling) and `s2` (floor 2's, top-lit cove) over
  the same plan; `B.stairs` gives the flights. You change floor on the upper flight above the landing (and back on
  the lower). `node tools/stairwalk.mjs` walks it both ways with the W key.
- **Engine**: rooms have `floor` and `y`; `buildArch(B, floor)` one floor at a time; `facePoint` adds the floor's
  height; the shaders take `uBase` (skirting, shade, skylight measured from the room's own floor); the floor you're not
  on isn't drawn (both are, on the stair); the mirror follows your floor (`mirror.level`); pictures on the other floor
  count as far away.
- **Hanging**: 2,165 paintings (625 floor 1, 1,540 floor 2). Crowded rooms hang closer, small ones up to five high (as
  the Louvre's cabinets are); a label goes under its painting when there's no room beside it; a room with more
  paintings than wall lends the rest to a room next door (or two doors away) with wall to spare — Claude's, so none
  is left out. `node tools/check.mjs` PASS.
- **The map** (`src/map.ts`): round button bottom right (or M); the floor you're on, every room and number, doorways,
  the stair, you (red dot, which way you face); tabs for the other floor; the X in its top-right corner (or M/Esc) closes.
  `?map=1` opens it (tests).
- Frame times 1.8–4.5 ms at retina in ten places, both floors and the stair (`node tools/fps.mjs 2`). WebKit renders.
- Pictures: 611 local; Wikimedia throttled this Mac (429) during the floor-2 download — `tools/images.py` keeps going,
  stubborn ones last (`source/images-failed.json`). Until a picture is local the page loads it from Commons.

## Sculptures (asked 2026-11-16: "sculptures should be color mapped")
- Which: `tools/wikidata_sculpt.py` (2,917 Louvre sculptures on Wikidata) → `louvre_rooms.py` → `source/louvre_sculpt.jsonl`.
  They stand on the ground floor and below (Richelieu 0/-1, Sully 0, Denon 0/-1) — none in the painting floors, except
  the Winged Victory on the Daru landing (our `daru` room).
- Colour scans: no openly licensed, texture-mapped scan of the Louvre marble exists. Best: Cosmo Wenman's scan of the
  Skulpturhalle Basel cast (Sketchfab 4edd6459f2834e7ab0b395e71cee2513, CC-BY, 9 textures, 283k faces; the cast's
  brown paint, not her marble). p_moraiti's CC-BY scan has no textures (one tan material, lumpy); dan.myrtz / zrhyes /
  melina.osteo are souvenir replicas. Sketchfab downloads need a signed-in account; Thingiverse is behind Cloudflare's
  robot check (not to be got round). Waiting on Robyn.

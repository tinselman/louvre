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
- 2026-11-16, late: Robyn made a Sketchfab account and downloaded the glTF; Safari unpacked it into
  ~/Downloads/winged_victory_of_samothrace (copied to source/scans/victoire/; its license.txt is the credit to use).
  It is the figure alone (no ship), 9 textures of 8192 px, ~330k triangles, two stray scraps (left out at load).
  `gltf-transform optimize … --compress meshopt --texture-compress webp --texture-size 2048 --simplify-ratio 0.6`
  → public/models/victoire.glb, 3.6 MB. `node tools/look.mjs models/victoire.glb out.png` shows a model from 4 sides.
- She stands in the Daru hall (the Louvre's room 703 is the "Palier Samothrace"), x 84 z -52.5, facing west toward
  the Salle Daru: the figure 3.28 m on her ship (Claude's simple drawing from the Louvre's measurements: 2.00 m high,
  4.29 long, 2.58 wide, on a 0.36 m base, grey Lartos marble), 5.64 m in all. The scan's colour map gives the surface
  detail; its hue (the Basel cast's brown paint) is turned to Parian marble (#ece7dd). Credit on her label and on the
  wall title. Frame times 2.3 ms beside her; WebKit renders her.

## The floor-2 pictures (2026-11-17)
- Wikimedia kept answering this Mac 429 for hours, so at his "Yes, use GitHub" a one-off job,
  `.github/workflows/pictures.yml`, was to fetch them on GitHub's computers. The access token on this Mac can't push
  workflow files (no `workflow` scope), so he committed it himself on github.com (6d6537b). Run 44040942736 ran
  75 min and got **nothing**: Wikimedia turned GitHub's machines away (429) on the very first picture, every try.
  Wikimedia is stricter with shared cloud addresses than with a home connection. Don't try that again.
- Back on this Mac, each picture's first request was still refused (429) while the same picture asked for once by
  hand came through. Wikimedia's robot policy (wikitech Robot_policy + the Foundation's User-Agent policy) wants a
  bulk script to name a contact (email or website) in its User-Agent, or it may be throttled. At his "Yes, name the
  site" the fetcher now sends `LouvreWalkthrough/0.1 (https://tinselman.github.io/louvre/)` — the site, never his
  email. Not getting round their checks with another tool was the point. `PACE=3 python3 -u tools/images.py`.
- The job file stays harmless (it only runs if the file itself changes, or by hand from the Actions tab). Deleting it
  needs github.com too (same token limit): github.com/tinselman/louvre/delete/studio/.github/workflows/pictures.yml.

## The stair's stone (2026-11-17, his "stairs should have the same glossy floors and rounded corner on edge of stairs")
- Treads, risers, the landing, the foot and the head are the floors' polished concrete now (`stairMaterial` in
  shaders.ts: the same mottle, aggregate and mirror, laid on each face from the side it faces; no saw-cut joints).
- Every step's front edge is a quarter round, `NOSE` = 25 mm, 6 facets with smooth normals (build.ts `stairGeometry`).
- Shade: the inside corner at the back of each tread, the risers lit at 80 %, along the walls (doorways left open).
- The gloss: the floors' one mirror, put level with your feet while you're on the stair (main.ts `setLevel`); a step
  above or below it looks 2.5 m along its reflected ray in that picture, and where that point isn't in it, the white
  hall. Room floors keep their gloss only while the mirror is within 0.5 m of their height. The stair is on layer 1,
  as the floors (a glossy surface can't be drawn into its own mirror).
- check.mjs PASS, stairwalk both ways, frame times 2.7–5.9 ms, WebKit renders it.

## Published 2026-11-17 12:11 (his "Yes, when done")
- All 2,165 pictures local (`tools/images.py` finished: 1,534 in ~95 min at PACE 3, no refusals once the site was
  named). Studio 66cbc6f → main 3bd63e3: pictures, the Winged Victory, the stair's concrete and rounded steps.
- The previous build's script (assets/index-BIhouE2z.js) kept on main, so a stale page loads, sees version.json and
  reloads; drop it next publish. One 503 from Pages in the first minute after the push (gone on retry).
- `node tools/requests.mjs <url> "x,z,yaw,pitch,floor"` lists any request at that spot that comes back 400+.
- Still on studio: `.github/workflows/pictures.yml` (harmless; delete it on github.com — see above).

## Squared pictures (2026-11-17, his "some of the works on the walls are not squared. they look like someone took a bad photo")
- Many Commons pictures are visitors' photos (Sailko's above all): taken from the side, with the frame and the wall
  in them. `tools/square.py` finds the painting's outline in each and cuts it out straight, at the work's own
  proportions (w × h in works.json).
- Which: only files that name a consumer camera (Canon, Fujifilm, Nikon, phones…) in their EXIF —
  `tools/commons_meta.py` → source/commons-meta.json (55 API requests, the site-named User-Agent). Museum scans
  (Google Art Project, Leaf backs, no camera) are square already, and the finder's straight lines there were the
  painting's own (a table, a door, a column) — never touch them.
- How (`find`): OpenCV's line-segment detector; the long lines near each side, grouped; every choice of one line a
  side (or the photo's edge) where at least 3 sides are lines (a frame shows all round; a line in the painting on one
  or two). The outline whose proportions match the record wins; among near-equals the innermost (the sight edge, not
  the outer moulding). Then straightened and looked at again, up to 4 times — a deep gold frame (the Corots) has
  several mouldings and the paint starts inside the last.
- 199 found; all looked at on contact sheets. 7 left as they are (SKIP: altarpieces whose border is part of the
  work, already-straight photos); 9 outlined by hand (HAND: Banquet of Herod, the middle one of three on a wall,
  Old Man with a Toque, the arched Coronation, and five where the finder stopped at an outer moulding — snapped to
  the nearest edge, or exactly as given with snap False). An arched or oval painting keeps its gold corners.
- `apply`: fetches the 1920 px picture once (the outline cut from it keeps its detail), straightens it, writes
  art/<id>-l.jpg (the close-up view's picture, now local), -m and -s; images.json gets the new px, colour and l.
  The photos as they were stay in source/art-orig/ (not committed — run `apply` again from them).
- `node tools/facing.mjs <dir> <id> …` stands in front of paintings and saves a picture of each (headless).
- Not looked at: camera photos the finder found no outline in (a frame on fewer than 3 sides).

## Published 2026-11-17 (his "Yes, publish") — the squared pictures
- Studio c01a695 → main 3c58293 (version mwlbuebc). Dropped index-BIhouE2z.js; kept index-DXn9K2lp.js (the build
  before) for stale pages — drop it next publish. Live check: the straightened files served, `requests.mjs` at the
  Victory 160 responses, none bad.

## Sculpture from photographs — the Venus de Milo test (2026-11-17, his "can you retrieve sculptures from photos?" → "Yes, try it")
- `tools/sculpt_photos.py venus <Commons categories…>` lists every photo of her with photographer + licence →
  source/scans/venus/list.json and fetches the photographs (1920 px thumbnails, one at a time) → photos/ (not committed).
- `tools/capture.swift` = Apple's Object Capture (RealityKit PhotogrammetrySession), unordered; `tools/lift.swift` cuts
  the subject out of each photo onto black (Vision's foreground-instance mask, the tallest subject); `tools/obj2glb.py`
  OBJ → glb (npx obj2gltf was refused by the permission check).
- What happened: Object Capture is NOT repeatable on visitors' photos. 182 colour photos once gave the whole statue
  (front, sides, back; patchy colour) — but the same set failed when run again; asking for camera poses (`.poses`)
  made runs fail (now only with POSES=1); without the two GFDL-only photos it never worked; cut-out photos failed
  too; one run made the room's marble wall and a ghost of her. Two of those 182 are GFDL 1.2 only — incompatible with
  CC BY-SA, so that test model (source/scans/venus/venus-test.glb) is never published.
- What's used instead: Wikidata (P4896) lists a real 3D scan on Commons, "Scan the World - Venus de Milo.stl"
  (CC BY-SA 4.0, 607k triangles, cm). `tools/stl2glb.py` → glb (welded, smooth normals, z-up → y-up), then
  `npx gltf-transform optimize … --compress meshopt --simplify true --simplify-ratio 0.3 --simplify-error 0.0003`
  → public/models/venus.glb, 0.75 MB. Of the 2,917 Louvre sculptures on Wikidata, she is the only one with a Commons model.

## The ground floor and the Daru stair (2026-11-17, his "Yes, build it")
- Floor 0 (y −8): the Daru stair down, its foot hall (g703, under the Palier), the Rotonde de Mars (under the Rotonde
  d'Apollon), the Salle de Diane (under the Salle des verres) and 345, the Salle de la Vénus de Milo — OpenStreetMap
  level 0 (rects in tools/building.py). Heights Claude's. Nothing else of the ground floor is built.
- The stair (`daru` in STAIRS, rooms dz0/dz1): built as the Henri II (two flights, a landing, out east on both floors),
  north of the Victory's hall: from the Palier (703, run on north to z −70.7; its door to 704 pinned where it was)
  down to the foot hall. Claude's placing — the real Daru staircase falls west from her landing, where our hall is.
  Stairs now carry y0 / lo / hi (Henri II: 0, 1, 2; Daru: −8, 0, 1); stair rooms wallBase. Door signs read
  "Escalier Daru · down to the Venus de Milo" / "· up to the Winged Victory".
- She stands at x 143, z −51.5, facing west to the door from Diane, on a plain plinth 0.55 m (`plinth` in
  sculptures.json; drawn simply): 204 cm (the Louvre's record), the scan 2.156 m with its own base; marble colour
  all over (the scan has no colour map). Credit on her label and the wall title.
- `?at=x,z,yaw,pitch,0` now works (floor 0 was read as "no floor"). `node tools/stairwalk.mjs daru` walks 703 → down →
  the foot hall → Mars → Diane → her, and back up. fps.mjs has five ground-floor/stair spots (1.6–4.4 ms).
- check.mjs PASS; stairwalk (Henri II) unchanged; WebKit renders her room and the stair, no errors.

## Published 2026-11-18 (his "Yes, publish") — the ground floor and the Venus de Milo
- Studio 1d102fb → main ef2d113 (version mwm7v2b8). Dropped index-DXn9K2lp.js; kept index-ChV7oqjx.js (the build
  before) for stale pages — drop it next publish. The photo-built Venus test model is not in the build (only
  models/venus.glb from the Scan the World STL, and victoire.glb).

## The map: click a room to go there (2026-11-18, his "users should be able to click anywhere on map and be placed into that room")
- src/map.ts: a click on any room of the floor shown (of rooms one inside another, the smaller) calls `goTo` in
  main.ts and closes the map. The room under the pointer is tinted red and named below: "Go to 345 · Salle de la
  Vénus de Milo".
- Where you land: where you clicked, kept 0.8 m off its walls (a room under 1.6 m across: its middle), looking the
  longest way across it. A stair's room: its foot on the lower floor's tab, its head on the upper's, looking west
  along the flight. If you'd held the mouse (pointer lock) when the map opened with M, it's held again.
- The plan draws the whole Louvre at ~1.6 px a metre (950 px wide), so the small cabinets are a few pixels — the
  tint shows which one you're on.
- `node tools/mapclick.mjs [out-dir]`: clicks every room's middle on its floor's tab (162 of 162 right), the four
  stair ends, a corner; shots map-hover.png / map-landed.png. WebKit: 345, 711, s2, dz1 right, no errors. check.mjs PASS.

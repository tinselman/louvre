/* THE LOUVRE — THE PAINTINGS. The Denon wing's first floor and the Richelieu and Sully wings' second, kept to their
   real plan and proportions, made white, every painting the Louvre lists in them hung in its room, a stair between
   the floors; walked through as Robyn Miller's Portrait gallery is: the mouse looks, W A S D walk, walking up to a
   painting darkens everything else, a click opens it full size; M (or the button, bottom right) opens a map.

   Test hooks (in the address):  ?at=x,z,yaw,pitch[,floor]  stand somewhere      ?hud=0  no 'click for full screen'
                                 ?open=<id>         open a work full size        ?room=711  start in a room
   window.__gReady turns true once the first frames are drawn. */
import * as THREE from 'three';
import './style.css';
import { loadData } from './model';
import { buildArch, facePoint, roomAt, type Arch, type Rect } from './arch';
import { hang } from './hang';
import type { Title, Item } from './hang';
import type { Work } from './model';
import { FloorMap } from './map';
import { buildInterior, labelCanvas, doorSigns, rails, stairGeometry, stairFloor, type Pic, type Interior } from './build';
import { FloorMirror } from './reflect';
import { Player, EYE } from './player';
import { Viewer } from './viewer';
import { Touch, type TouchHit } from './touch';
import { Focus } from './focus';
import { setUpCrosshair, vp } from './crosshair';
import { resting } from './rest';

declare global { interface Window { __gReady?: boolean; __g?: unknown } }

declare const __BUILD__: string;
/* A browser may keep the page for a while after a publish (GitHub lets it, for 10 minutes), and with it the old code:
   if a newer build is out, load that instead (once, so it can never go round and round) — as in the Portrait gallery */
if (!import.meta.env.DEV) {
  fetch(`version.json?${Date.now()}`, { cache: 'no-store' }).then((r) => r.json()).then((v: { build?: string }) => {
    if (!v.build || v.build === __BUILD__) return;
    try {
      if (sessionStorage.getItem('louvre:fresh') === v.build) return;
      sessionStorage.setItem('louvre:fresh', v.build);
    } catch { return; }
    location.reload();
  }).catch(() => {});
}

const params = new URLSearchParams(location.search);
const touchOnly = (matchMedia('(hover: none) and (pointer: coarse)').matches && !params.has('desk')) || params.has('touch');

start().catch((e) => {
  console.error(e);
  document.getElementById('cover')!.classList.add('gone');
  document.getElementById('mobile')!.classList.add('on');
});

async function start() {
  const [data] = await Promise.all([
    loadData(),
    Promise.race([
      Promise.all(['300 40px "Inter Tight"', '400 40px "Inter Tight"', '500 40px "Inter Tight"', 'italic 500 40px "Inter Tight"'].map((f) => document.fonts.load(f))),
      new Promise((r) => setTimeout(r, 2500)),
    ]),
  ]);

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  const maxDpr = Math.min(devicePixelRatio || 1, touchOnly ? 1.5 : 2);
  let dpr = maxDpr;
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(0xffffff, 1);
  renderer.setSize(innerWidth, innerHeight);
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  const canvas = renderer.domElement;
  document.getElementById('stage')!.appendChild(canvas);
  const showCross = setUpCrosshair();
  const maxAniso = renderer.capabilities.getMaxAnisotropy();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.08, 700);
  camera.layers.enable(1);
  const mirror = new FloorMirror(1, 1);
  const sizeAll = () => {
    renderer.setPixelRatio(dpr);
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.fov = camera.aspect < 1 ? THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(31)) * Math.min(1.45, 0.82 / camera.aspect))) : 62;
    camera.updateProjectionMatrix();
    const b = renderer.getDrawingBufferSize(new THREE.Vector2());
    mirror.setSize(Math.round(b.x / 2), Math.round(b.y / 2));
  };
  sizeAll();
  addEventListener('resize', sizeAll);

  /* ---- the building, the hanging, the pictures ----------------------------------------------------------- */
  const B = data.building;
  const FLOORS = [...new Set(B.rooms.map((r) => r.floor))].sort((a, b) => a - b);
  const arches = new Map<number, Arch>(FLOORS.map((f) => [f, buildArch(B, f)]));
  const arch = arches.get(1)!;
  const stairs = B.stairs ?? [];
  // what the stairs add to every floor: the wall between the flights (to walk into, and to see past)
  const stairSolids: Rect[] = stairs.map((s) => ({ x0: s.xL, x1: s.x1, z0: s.aZ, z1: s.bZ }));
  // the wall title: in the Salon Carré, on the west wall beside the doorway into the Grande Galerie
  const sc = arch.faces.find((f) => f.room.id === '708' && !f.free && f.axis === 'z' && f.n[0] > 0)!;
  const titleU = -3.0, titles: Title[] = sc ? [{
    face: sc, pos: facePoint(sc, titleU, 1.62), normal: [1, 0, 0], right: [sc.right[0], 0, sc.right[1]],
    title: 'Musée du Louvre', sub: 'The Paintings · Denon, Richelieu and Sully',
    how: touchOnly ? 'Drag the floor to walk, a wall to turn · tap a painting to see it whole'
      : 'Click to look with the mouse · W A S D to walk · walk up to a painting, click to see it whole · M for the map',
    credit: 'Rooms after OpenStreetMap’s indoor map (© OpenStreetMap contributors). Which room each painting hangs in, and the words\non the labels: the musée du Louvre’s collections database (Etalab Open Licence). Photographs: Wikimedia Commons,\npublic domain. Within each room the paintings are hung by date; the walls, ceilings and frames are simplified, all in white.',
  }] : [];
  // each floor hung on its own
  const items: Item[] = [], unplaced: Work[] = [];
  const hungOn = new Map<number, Item[]>();
  for (const f of FLOORS) {
    const A = arches.get(f)!;
    const h = hang(A, data.works.filter((w) => A.byId.has(w.room)), f === 1 && sc ? [{ face: sc.key, a: titleU - 1.35, b: titleU + 1.35 }] : [], B.doors);
    items.push(...h.items); unplaced.push(...h.unplaced); hungOn.set(f, h.items);
  }
  if (unplaced.length) console.warn(`${unplaced.length} works found no wall`, unplaced.map((w) => `${w.room} ${w.title}`));

  const cat = new Map(data.works.map((w) => [w.id, w]));
  /* a picture: our own copy, or — for any not downloaded yet — straight from Wikimedia Commons (which lets pages load
     its pictures; a thumbnail of a TIFF is a JPEG) */
  const commons = (id: string, px: number) => {
    const w = cat.get(id);
    if (!w?.cpath) return '';
    const n = encodeURIComponent(w.img.replace(/ /g, '_'));
    const thumb = /\.tiff?$/i.test(w.img) ? `lossy-page1-${px}px-${n}.jpg` : `${px}px-${n}`;
    return `https://upload.wikimedia.org/wikipedia/commons/thumb/${w.cpath}/${n}/${thumb}`;
  };
  const url = (id: string, size: 's' | 'm') => data.images[id] ? `art/${id}-${size}.jpg` : commons(id, size === 's' ? 330 : 960);
  const colourTex = new Map<string, THREE.Texture>();
  const colourOf = (id: string) => data.images[id]?.c ?? '#8a8580';
  const flat = (id: string) => {
    let t = colourTex.get(id);
    if (!t) {
      const c = new THREE.Color(colourOf(id));
      // (a 1×1 picture of the painting's average colour, until its own picture is in)
      const cv = document.createElement('canvas'); cv.width = cv.height = 1;
      const g = cv.getContext('2d')!; g.fillStyle = colourOf(id); g.fillRect(0, 0, 1, 1);
      t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; void c;
      colourTex.set(id, t);
    }
    return t;
  };
  const interiors = new Map<number, Interior>();
  for (const f of FLOORS) {
    const A = arches.get(f)!;
    const it = buildInterior(A, hungOn.get(f)!, f === 1 ? titles : [], flat, (id) => data.images[id]?.px, colourOf, mirror.target.texture, mirror.texMat);
    it.group.add(doorSigns(A, B.doors));
    if (f === 1) it.group.add(rails(B.rails ?? []));
    scene.add(it.group, it.stair);
    interiors.set(f, it);
  }
  for (const s of stairs) scene.add(stairGeometry(s));
  const pictures = FLOORS.flatMap((f) => interiors.get(f)!.pictures);
  const floorOfPic = new Map<Pic, number>(FLOORS.flatMap((f) => interiors.get(f)!.pictures.map((p) => [p, f] as [Pic, number])));
  const byId = new Map<string, Pic>(pictures.map((p) => [p.work.id, p]));

  /* ---- where you stand: which floor, and how high (the stair's flights carry you between them) --------------- */
  const player = new Player(canvas);
  player.world = arch.bounds;
  let cur = 1, inStair = false;
  const baseOf = (f: number) => arches.get(f)!.base;
  const setFloor = (f: number) => {
    cur = f;
    player.solids = [...arches.get(f)!.solids, ...stairSolids];
    mirror.level = baseOf(f);
    for (const [g, it] of interiors) for (const m of it.floors) (m.material as THREE.ShaderMaterial).uniforms.uGloss.value = g === f ? 1 : 0;
  };
  /** the floor's height where you stand, and whether that's on the stair */
  const ground = (x: number, z: number) => {
    for (const s of stairs) { const y = stairFloor(s, x, z); if (y !== null) return { y, stair: s }; }
    return { y: baseOf(cur), stair: null };
  };
  const st = B.start;
  setFloor(1);
  player.pos.set(st.x, EYE, st.z);
  player.yaw = THREE.MathUtils.degToRad(st.yaw); player.pitch = 0.02;
  const inRoom = params.get('room') && B.rooms.find((r) => r.id === params.get('room'));
  if (inRoom) { setFloor(inRoom.floor); player.pos.set((inRoom.x0 + inRoom.x1) / 2, EYE, (inRoom.z0 + inRoom.z1) / 2); }
  const at = params.get('at');
  if (at) {
    const [x, z, yaw, pitch, fl] = at.split(',').map(Number);
    if (fl && arches.has(fl)) setFloor(fl);
    player.pos.set(x, EYE, z);
    player.yaw = THREE.MathUtils.degToRad(yaw || 0);
    player.pitch = THREE.MathUtils.degToRad(pitch || 0);
  }
  player.collide();
  player.pos.y = ground(player.pos.x, player.pos.z).y + EYE;
  /** after each step: the floor you're on (the upper flight past the landing is the second floor, the lower the
      first), your eyes at the floor's height, and only your floor drawn — both, on the stair */
  const settle = (dt: number) => {
    const g = ground(player.pos.x, player.pos.z);
    inStair = !!g.stair;
    if (g.stair) {
      const half = g.stair.rise / 2, upper = player.pos.z > (g.stair.aZ + g.stair.bZ) / 2;
      if (upper && g.y > half + 0.3 && cur !== 2) setFloor(2);
      if (!upper && g.y < half - 0.3 && cur !== 1) setFloor(1);
    }
    const want = g.y + EYE;
    player.pos.y += (want - player.pos.y) * (dt > 0 ? Math.min(1, dt * 14) : 1);
    for (const [f, it] of interiors) it.group.visible = f === cur || inStair;
  };
  settle(0);

  const hud = params.get('hud') !== '0';
  document.getElementById('dot')!.style.display = 'none';
  const focus = new Focus(hud, touchOnly);

  /* ---- pictures: a colour far off, a small picture across the room, the sharp one up close ------------------- */
  const loader = new THREE.TextureLoader();
  const small = new Map<string, THREE.Texture>(), sharp = new Map<string, THREE.Texture>();
  const loading = new Set<string>();
  // a picture that wouldn't load is left a minute before it's tried again (never hammered four times a second)
  const failed = new Map<string, number>();
  const prep = (t: THREE.Texture) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = maxAniso; t.needsUpdate = true; return t; };
  const NEAR = 42, LABEL_NEAR = 16, TEXT_NEAR = 7, SHARP_NEAR = 9;
  const dist = (p: Pic) => Math.hypot(p.mesh.position.x - player.pos.x, p.mesh.position.z - player.pos.z) + (floorOfPic.get(p) === cur ? 0 : 1e4);
  let pendingSharp = 1;
  function updatePictures() {
    pendingSharp = 0;
    const order = pictures.map((p) => ({ p, d: dist(p) })).sort((a, b) => a.d - b.d);
    const hides = new Map(FLOORS.map((f) => [f, interiors.get(f)!.far.geometry.getAttribute('aHide') as THREE.BufferAttribute]));
    const changed = new Set<number>();
    for (const { p, d } of order) {
      const vis = d < NEAR, f = floorOfPic.get(p)!;
      if (vis !== p.mesh.visible || frames === 0) {
        p.mesh.visible = vis;
        const hide = hides.get(f)!;
        for (let k = 0; k < p.farRange[1]; k++) hide.setX(p.farRange[0] + k, vis ? 1 : 0);
        changed.add(f);
      }
      if (p.label) {
        p.label.visible = d < LABEL_NEAR;
        // the label's words: drawn when you're near enough to read them, let go when you're well away
        if (d < TEXT_NEAR && !p.labelTex) {
          const t = new THREE.CanvasTexture(labelCanvas(p.work)); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = maxAniso;
          p.labelTex = t;
          const m = (p.label.material as THREE.ShaderMaterial).clone(); m.uniforms.uMap.value = t;
          p.label.material = m;
        } else if (d > TEXT_NEAR * 2 && p.labelTex) {
          const m = p.label.material as THREE.ShaderMaterial;
          p.labelTex.dispose(); p.labelTex = null; m.dispose();
          p.label.material = blankLabel;
        }
      }
      const id = p.work.id;
      if (sharp.has(id) && d > SHARP_NEAR * 1.8) {
        sharp.get(id)!.dispose(); sharp.delete(id);
        p.mat.uniforms.uMap.value = small.get(id) ?? flat(id);
      }
      const want = d < SHARP_NEAR && !sharp.has(id) ? 'm' : !small.has(id) && d < NEAR + 20 ? 's' : null;
      if (want === 'm') pendingSharp++;
      if (!want || loading.has(id + want) || loading.size >= 6) continue;
      if (performance.now() - (failed.get(id + want) ?? -1e9) < 60000) continue;
      loading.add(id + want);
      loader.loadAsync(url(id, want)).then((t) => {
        loading.delete(id + want);
        prep(t);
        if (want === 'm') { if (dist(p) > SHARP_NEAR * 1.8) { t.dispose(); return; } sharp.set(id, t); p.mat.uniforms.uMap.value = t; }
        else { small.set(id, t); if (!sharp.has(id)) p.mat.uniforms.uMap.value = t; }
      }).catch(() => { loading.delete(id + want); failed.set(id + want, performance.now()); });
    }
    for (const f of changed) hides.get(f)!.needsUpdate = true;
  }
  const blankLabel = pictures.find((p) => p.label)?.label?.material as THREE.Material;

  /* ---- what you can aim at --------------------------------------------------------------------------------- */
  const ray = new THREE.Raycaster();
  ray.far = 30;
  ray.layers.enableAll();
  const targets = () => {
    const out: THREE.Object3D[] = [];
    for (const p of pictures) if (p.mesh.visible) out.push(p.mesh);
    scene.traverseVisible((o) => { if (o !== scene && (o.userData.face || o.userData.floor)) out.push(o); });
    return out;
  };
  const local = new THREE.Vector3();
  const onImage = (hit: THREE.Intersection | undefined): string | null => {
    const p = hit && pictures.find((q) => q.mesh === hit.object);
    if (!p) return null;
    hit.object.worldToLocal(local.copy(hit.point));
    return Math.abs(local.x) <= p.work.w / 2 + 1e-3 && Math.abs(local.y) <= p.work.h / 2 + 1e-3 ? p.work.id : null;
  };
  const imageAt = (ndc: THREE.Vector2) => { ray.setFromCamera(ndc, camera); return onImage(ray.intersectObjects(targets(), false)[0]); };

  /* ---- a painting full size --------------------------------------------------------------------------------- */
  const viewer = new Viewer();
  let relockAfter = true, lastTouch = -1e9, releasing = false;
  const openWork = (id: string) => {
    const w = cat.get(id);
    if (!w) return;
    relockAfter = player.locked;
    vp.x = innerWidth / 2; vp.y = innerHeight / 2;
    player.frozen = true;
    const im = data.images[id];
    viewer.show(w, im ? [im.px[0] * 2, im.px[1] * 2] : [1920, 1920 * w.h / w.w], url(id, 'm'), im?.l ?? commons(id, 1920));
    focus.opened();
  };
  viewer.onClose = () => { player.frozen = false; };
  addEventListener('pointermove', (e) => {
    if (!player.locked || !viewer.open || e.pointerType !== 'mouse') return;
    vp.x = Math.max(2, Math.min(innerWidth - 2, vp.x + e.movementX));
    vp.y = Math.max(2, Math.min(innerHeight - 2, vp.y + e.movementY));
  }, { capture: true });

  const press = (e: MouseEvent) => {
    if (e.button !== 0 && e.button !== 2) return;
    if (performance.now() - lastTouch < 900) return;
    if (viewer.open) { viewer.hide(); return; }
    if (!player.locked) {
      const r = canvas.getBoundingClientRect();
      const id = imageAt(new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1));
      if (id) { openWork(id); return; }
      canvas.requestPointerLock(); return;
    }
    const id = imageAt(new THREE.Vector2(0, 0));
    if (id) openWork(id);
  };
  canvas.addEventListener('mousedown', press);
  addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') lastTouch = performance.now(); }, true);
  const pickAt = (ndc: THREE.Vector2): TouchHit => {
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(targets(), false)[0];
    if (!hit) return { kind: 'none', ndc: ndc.clone() };
    const u = hit.object.userData, base = { point: hit.point, dist: hit.distance, ndc: ndc.clone() };
    if (u.work) return { kind: 'work', work: u.work, image: !!onImage(hit), ...base };
    if (u.face) return { kind: 'wall', ...base };
    if (u.floor || hit.point.y - baseOf(cur) < 0.02) return { kind: 'floor', ...base };
    return { kind: 'other', ...base };
  };
  new Touch(canvas, camera, player, pickAt, (hit) => {
    if (hit.kind === 'work' && hit.work) {
      const p = byId.get(hit.work);
      if (!p || focus.pic === p || (hit.dist ?? 99) < 3.2) { if (hit.image) openWork(hit.work); return; }
      const c = p.mesh.position, n = p.placed.normal, D = THREE.MathUtils.clamp(0.9 + 1.2 * Math.max(p.w, p.h), 1.3, 9);
      player.goal = { x: c.x + n[0] * D, z: c.z + n[2] * D, yaw: Math.atan2(n[0], n[2]), pitch: Math.atan2(c.y - EYE, D) };
    } else if (hit.kind === 'floor' && hit.point) {
      const dx = hit.point.x - player.pos.x, dz = hit.point.z - player.pos.z, d = Math.hypot(dx, dz), k = Math.max(0, d - 0.5) / Math.max(d, 1e-6);
      player.goal = { x: player.pos.x + dx * k, z: player.pos.z + dz * k };
    }
  }, () => !viewer.open);
  viewer.relock = () => relockAfter;
  viewer.el.addEventListener('mousedown', (e) => {
    if (performance.now() - lastTouch < 900) {
      if ((e.target as HTMLElement).closest('.frame')) return;
      const id = viewer.work?.id, p = id ? byId.get(id) : undefined;
      viewer.hide();
      if (p) player.glide.set(p.placed.normal[0], p.placed.normal[2]).multiplyScalar(2.4);
      return;
    }
    e.preventDefault();
    viewer.hide();
    if (!viewer.open && !player.locked && viewer.relock()) canvas.requestPointerLock();
  });
  document.addEventListener('contextmenu', (e) => { if (!(e.target as HTMLElement).closest('input, textarea, select')) e.preventDefault(); });
  document.addEventListener('selectstart', (e) => {
    const t = e.target instanceof Element ? e.target : (e.target as Node | null)?.parentElement;
    if (!t?.closest('input, textarea, select, [contenteditable]')) e.preventDefault();
  });
  addEventListener('keydown', (e) => {
    if ((e.target as HTMLElement).closest?.('input, textarea, select, button')) return;
    const open = e.code === 'Enter' || e.code === 'Space';
    if (viewer.open) {
      if (open || e.code === 'Escape') { e.preventDefault(); viewer.hide(); if (open && relockAfter) canvas.requestPointerLock(); }
      return;
    }
    if (open && focus.pic) { e.preventDefault(); openWork(focus.pic.work.id); }
    if (e.code === 'KeyM' && !e.metaKey && !e.ctrlKey && !e.altKey) { e.preventDefault(); map.toggle(); }
  });
  document.addEventListener('pointerlockchange', () => {
    if (releasing) { releasing = false; return; }
    if (!player.locked && viewer.open) viewer.hide();
  });
  const openParam = params.get('open');
  if (openParam) setTimeout(() => openWork(openParam), 300);

  const sights = new Map(FLOORS.map((f) => [f, [...arches.get(f)!.sight, ...stairSolids]]));

  /* ---- the map (bottom right; M) ------------------------------------------------------------------------------ */
  const map = new FloorMap(B, (open) => { if (open && player.locked) { releasing = true; document.exitPointerLock(); } });
  if (params.has('map')) setTimeout(() => map.toggle(true), 200);

  /* ---- the loop ------------------------------------------------------------------------------------------- */
  let lastT = performance.now(), frames = 0, slow = 0, picT = 0;
  updatePictures();
  function frame() {
    if (window.__gReady && resting(() => { lastT = performance.now(); requestAnimationFrame(frame); })) return;
    const now = performance.now();
    const dt = Math.min((now - lastT) / 1000, 0.05);
    lastT = now;
    if (dt > 0.024) slow += dt; else slow = Math.max(0, slow - dt * 0.5);
    if (slow > 1.5 && dpr > 1) { dpr = Math.max(1, dpr - 0.25); slow = 0; sizeAll(); }
    player.update(dt);
    settle(dt);
    player.apply(camera);
    map.update(player.pos.x, player.pos.z, player.yaw, cur);
    camera.updateMatrixWorld();
    if ((picT -= dt) <= 0) { picT = 0.25; updatePictures(); }
    if (viewer.open) focus.clear();
    else focus.update(dt, camera, pictures.filter((p) => p.mesh.visible), sights.get(cur)!, true);
    mirror.render(renderer, scene, camera);
    renderer.render(scene, camera);
    const cross = player.locked && !touchOnly;
    showCross(cross, viewer.open ? vp.x : undefined, viewer.open ? vp.y : undefined);
    document.body.classList.toggle('cross-on', cross && !viewer.open);
    focus.render(renderer, scene, camera);
    frames++;
    if (!window.__gReady && frames > 3) {
      window.__gReady = true;
      document.getElementById('cover')!.classList.add('gone');
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  window.__g = { data, arch, arches, items, unplaced, pictures, player, camera, renderer, scene, focus, viewer, openWork, map,
    floor: () => cur, setFloor, ground, roomAt: (x: number, z: number) => roomAt(arches.get(cur)!, x, z)?.id, pendingSharp: () => pendingSharp };
}

/* Getting about on a phone (Robyn, 2026-10-26: "try first a 3d gallery and try some different intuit controls,
   like grabbing the ground or walls and dragging it or pulling it. if the user drags or pulls and lets up there is
   a bit of continued movement... like sliding or gliding movement. Fast dragging and letting go can allow user to
   move longer distances or faster rotations. user must be near a wall to grab a wall. if user is near a work, they
   click and the piece enlarges. if user clicks on a wall once the painting is open, it closes and they are pushed
   back into the room").

   A finger on the FLOOR grabs it: the spot under the finger stays under the finger, so pulling the floor toward
   you walks you forward, pushing it away walks you back, sideways steps you sideways. A finger on a WALL (one near
   enough to reach) grabs it the same way and turns you: the wall goes where the finger goes. Let go while moving
   and you glide on, or keep turning, slowing to a stop — a fast flick goes further. A touch stops any glide.
   A TAP on a painting near you opens it; on one further off, or on the floor, glides you there. (The full view's
   own taps — closing it and stepping back — are in main.ts.)

   TWO FINGERS move you like a camera (Robyn, 2026-10-26: "on mobile devices, user can use two fingers to pan or
   spread two fingers to push in or push two fingers together to pull out"): spread them and you push in (walk
   forward), pinch them and you pull out (walk back), move them together and you pan, the room following them as a
   wall does one finger. Let go moving and you glide on, as with one. */
import * as THREE from 'three';
import type { Player } from './player';

export interface TouchHit { kind: 'work' | 'wall' | 'floor' | 'other' | 'none'; point?: THREE.Vector3; dist?: number; work?: string; image?: boolean; ndc?: THREE.Vector2 }

/** a wall nearer than this can be grabbed (further off, a finger above the floor still turns you, gently) */
export const REACH = 4.5;
const TAP_MS = 380, TAP_PX = 10;
/** metres pushed in as two fingers spread to e (2.7×) times as far apart */
const PUSH = 1.8;

export class Touch {
  private ndc = new THREE.Vector2();
  private ray = new THREE.Raycaster();
  private v = new THREE.Vector3();
  private d: { id: number; x: number; y: number; t: number; mode: 'ground' | 'turn'; grip: number; p0: THREE.Vector3 | null; moved: boolean; lx: number; ly: number } | null = null;
  private trail: { t: number; dx: number; dz: number; dyaw: number }[] = [];
  /** every finger down on the room, and the two-finger move under way (apart, and their middle) */
  private pts = new Map<number, { x: number; y: number }>();
  private two: { dist: number; mx: number; my: number } | null = null;
  private spent = false;                 // a finger left over from two does nothing till all are up

  constructor(private canvas: HTMLCanvasElement, private camera: THREE.PerspectiveCamera, private player: Player,
              private pick: (ndc: THREE.Vector2) => TouchHit,
              private tap: (hit: TouchHit) => void,
              private enabled: () => boolean) {
    canvas.addEventListener('pointerdown', (e) => this.start(e));
    canvas.addEventListener('pointermove', (e) => this.move(e));
    canvas.addEventListener('pointerup', (e) => this.end(e));
    canvas.addEventListener('pointercancel', (e) => { this.lift(e.pointerId); this.d = null; });
    // a finger that's gone without a word (the phone took it for something of its own) lets go too
    canvas.addEventListener('lostpointercapture', (e) => { if (this.pts.has(e.pointerId)) this.lift(e.pointerId); if (this.d?.id === e.pointerId) this.d = null; });
    // and the phone's own press-and-hold (selecting, the magnifier, a menu) and double-tap zoom never start here
    canvas.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
  }

  private at(e: PointerEvent) {
    const r = this.canvas.getBoundingClientRect();
    return this.ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  }
  /** where the finger's line of sight meets the floor (null looking up, or too far off) */
  private floorAt(ndc: THREE.Vector2) {
    this.player.apply(this.camera);
    this.camera.updateMatrixWorld();
    this.ray.setFromCamera(ndc, this.camera);
    const o = this.ray.ray.origin, dir = this.ray.ray.direction;
    if (dir.y > -0.03) return null;
    const t = -o.y / dir.y;
    return t > 30 ? null : new THREE.Vector3(o.x + dir.x * t, 0, o.z + dir.z * t);
  }

  private start(e: PointerEvent) {
    if (e.pointerType !== 'touch' || !this.enabled()) return;
    // old fingers that never lifted: forget them
    for (const id of [...this.pts.keys()]) if (!this.canvas.hasPointerCapture(id)) this.lift(id);
    if (this.d && !this.canvas.hasPointerCapture(this.d.id)) this.d = null;
    e.preventDefault();
    getSelection()?.removeAllRanges();          // nothing stays selected (shaded blue on an iPhone) once you touch
    this.pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    this.canvas.setPointerCapture(e.pointerId);
    if (this.pts.size === 2 && !this.spent) {
      // a second finger: the one-finger move (or tap) gives way to two
      this.d = null;
      this.player.glide.set(0, 0); this.player.spin = 0; this.player.goal = null;
      this.two = this.pair(); this.trail = [];
      return;
    }
    if (this.pts.size > 1 || this.spent || this.d) return;
    // a touch catches you: any glide stops
    this.player.glide.set(0, 0); this.player.spin = 0; this.player.goal = null;
    const ndc = this.at(e), hit = this.pick(ndc), fl = this.floorAt(ndc);
    const onFloor = !!fl && (hit.kind === 'floor' || hit.kind === 'none' || (hit.dist ?? Infinity) > this.camera.position.distanceTo(fl) - 0.05);
    // a wall in reach is held exactly; further off (or the ceiling), a finger turns you more gently
    const grip = onFloor ? 1 : hit.kind === 'wall' || hit.kind === 'work' ? ((hit.dist ?? 99) <= REACH ? 1 : 0.6) : 0.6;
    this.d = { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now(), mode: onFloor ? 'ground' : 'turn', grip, p0: onFloor ? fl : null, moved: false, lx: e.clientX, ly: e.clientY };
    this.trail = [];
  }

  /** two fingers: how far apart, and their middle */
  private pair() {
    const [a, b] = [...this.pts.values()];
    return { dist: Math.max(24, Math.hypot(a.x - b.x, a.y - b.y)), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
  }
  /** a finger up (or gone): the end of a two-finger move glides you on */
  private lift(id: number) {
    if (!this.pts.delete(id)) return;
    if (this.two && this.pts.size < 2) {
      this.two = null;
      this.spent = this.pts.size > 0;
      this.coastOn('both');
    } else if (!this.pts.size) this.spent = false;
  }
  /** let go moving: glide on (a quick flick, further), unless the fingers had stopped first */
  private coastOn(mode: 'ground' | 'turn' | 'both') {
    const now = performance.now();
    const recent = this.trail.filter((s) => now - s.t < 120);
    if (!recent.length || now - recent[recent.length - 1].t > 70) return;
    const span = Math.max(0.03, (now - recent[0].t) / 1000 + 1 / 60);
    let sx = 0, sz = 0, syaw = 0;
    for (const s of recent) { sx += s.dx; sz += s.dz; syaw += s.dyaw; }
    if (mode !== 'turn') { this.player.glide.set(sx / span, sz / span); if (this.player.glide.length() > 7) this.player.glide.setLength(7); }
    if (mode !== 'ground') this.player.spin = THREE.MathUtils.clamp(syaw / span, -7, 7);
  }

  private move(e: PointerEvent) {
    const q = this.pts.get(e.pointerId);
    if (q) { q.x = e.clientX; q.y = e.clientY; }
    if (this.two && q) {
      e.preventDefault();
      // spread: push in; pinch: pull out (along the way you face); the middle moving: pan, as a wall turns you
      const n = this.pair(), t = this.two, now = performance.now();
      const f = PUSH * Math.log(n.dist / t.dist);
      const k = THREE.MathUtils.degToRad(this.camera.fov) / this.canvas.clientHeight;
      const bx = this.player.pos.x, bz = this.player.pos.z;
      if (f) this.player.drag(-Math.sin(this.player.yaw) * f, -Math.cos(this.player.yaw) * f);
      const dyaw = (n.mx - t.mx) * k;
      this.player.turnBy(dyaw, (n.my - t.my) * k);
      this.trail.push({ t: now, dx: this.player.pos.x - bx, dz: this.player.pos.z - bz, dyaw });
      while (this.trail.length && now - this.trail[0].t > 120) this.trail.shift();
      this.two = n;
      return;
    }
    const d = this.d;
    if (!d || e.pointerId !== d.id) return;
    e.preventDefault();
    if (!d.moved && Math.hypot(e.clientX - d.x, e.clientY - d.y) > TAP_PX) d.moved = true;
    const dx = e.clientX - d.lx, dy = e.clientY - d.ly;
    d.lx = e.clientX; d.ly = e.clientY;
    if (!d.moved) return;
    const now = performance.now();
    if (d.mode === 'ground' && d.p0) {
      const p = this.floorAt(this.at(e));
      if (!p) return;
      let mx = d.p0.x - p.x, mz = d.p0.z - p.z;
      const len = Math.hypot(mx, mz);
      if (len > 1.2) { mx *= 1.2 / len; mz *= 1.2 / len; }        // (a grip near the horizon can't fling you)
      const bx = this.player.pos.x, bz = this.player.pos.z;
      this.player.drag(mx, mz);
      this.trail.push({ t: now, dx: this.player.pos.x - bx, dz: this.player.pos.z - bz, dyaw: 0 });
    } else {
      // the wall goes where the finger goes: turning by the angle the finger moved through
      const k = (THREE.MathUtils.degToRad(this.camera.fov) / this.canvas.clientHeight) * d.grip;
      this.player.turnBy(dx * k, dy * k);
      this.trail.push({ t: now, dx: 0, dz: 0, dyaw: dx * k });
    }
    while (this.trail.length && now - this.trail[0].t > 120) this.trail.shift();
  }

  private end(e: PointerEvent) {
    const wasTwo = !!this.two;
    this.lift(e.pointerId);
    if (wasTwo) return;
    const d = this.d;
    if (!d || e.pointerId !== d.id) return;
    this.d = null;
    if (!d.moved && performance.now() - d.t < TAP_MS) { this.tap(this.pick(this.at(e))); return; }
    this.coastOn(d.mode);
  }
}

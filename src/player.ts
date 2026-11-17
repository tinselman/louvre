/* Walking, exactly as in Crystal Maze: click to take the mouse, then the mouse
   looks; W A S D walk and step sideways, the arrow keys turn and look up and
   down (eased, so a tap is gentle), Shift walks faster, Esc gives the mouse
   back. The constants are Crystal Maze's, except the pace: a gallery wants a
   stroll, so walking is 2.6 m/s rather than 4.4, and Shift 4.6. */
import * as THREE from 'three';
import type { Rect } from './arch';

export const EYE = 1.62;           // as in Crystal Maze

const ACCEL = 12, DECEL = 6.5;
const TURN_RATE = 2.0, TURN_ACCEL = 9;
const PITCH_RATE = 1.7, PITCH_ACCEL = 9, PITCH_MAX = 1.15;
const LOOK_MOUSE = 0.0022;
const WALK = 2.6, RUN = 4.6;
const RADIUS = 0.3;

export class Player {
  pos = new THREE.Vector3(6.6, EYE, 10.2);
  vel = new THREE.Vector3();
  yaw = Math.atan2(6.6 - 4.2, 10.2 - 0.4); pitch = 0.05; yawVel = 0; pitchVel = 0;
  keys = new Set<string>();
  /** keys pressed once from elsewhere (the host's speech bubble), each held for a moment */
  private taps = new Map<string, number>();
  frozen = false;               // while a painting is open
  moved = false;                // has the visitor done anything yet
  /* on a phone (touch.ts): let go after dragging the floor and you glide on, after dragging a wall you go on
     turning, both slowing to a stop; and a tap can send you gliding to a spot (`goal`) */
  glide = new THREE.Vector2();  // m/s, in the floor plane
  spin = 0;                     // rad/s
  goal: { x: number; z: number; yaw?: number; pitch?: number } | null = null;

  solids: Rect[] = [];
  obstacles: { x: number; z: number; r: number }[] = [];
  world: Rect = { x0: -22, x1: 39, z0: -38, z1: 30 };

  constructor(private canvas: HTMLCanvasElement) {
    addEventListener('keydown', (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if ((e.target as HTMLElement).closest?.('input, textarea, select')) return;   // typing, not walking
      this.keys.add(e.code);
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    // on Robyn's site the gallery sits in a frame, and until it's clicked the keys go to the page round it —
    // which hands them on (host.js), so W walks from the first moment (Robyn, 2026-10-26)
    addEventListener('message', (e) => {
      const k = e.data?.rmiKey;
      if (!k || !/^https:\/\/(www\.)?robynmiller\.net$/.test(e.origin)) return;
      if (k.type === 'down') this.keys.add(k.code); else this.keys.delete(k.code);
    });
    addEventListener('blur', () => this.keys.clear());
    // Mouse writes both axes directly, as in Crystal Maze — easing it reads as lag.
    addEventListener('mousemove', (e) => {
      if (document.pointerLockElement !== this.canvas || this.frozen) return;
      this.yaw -= e.movementX * LOOK_MOUSE;
      this.pitch = Math.max(-PITCH_MAX, Math.min(PITCH_MAX, this.pitch - e.movementY * LOOK_MOUSE));
      this.moved = true;
    });
  }

  get locked() { return document.pointerLockElement === this.canvas; }
  /** moved by a finger on the floor: straight there, walls permitting */
  drag(dx: number, dz: number) { this.pos.x += dx; this.pos.z += dz; this.collide(); this.moved = true; this.goal = null; }
  /** turned by a finger on a wall */
  turnBy(dyaw: number, dpitch: number) {
    this.yaw += dyaw;
    this.pitch = Math.max(-PITCH_MAX, Math.min(PITCH_MAX, this.pitch + dpitch));
    this.moved = true; this.goal = null;
  }
  /** press a key once, as if held for `secs` (a step forward, a turn) */
  tap(code: string, secs: number) { this.taps.set(code, secs); }

  update(dt: number) {
    const k = this.frozen ? new Set<string>() : this.taps.size ? new Set([...this.keys, ...this.taps.keys()]) : this.keys;
    for (const [c, t] of this.taps) { if (t - dt <= 0) this.taps.delete(c); else this.taps.set(c, t - dt); }
    let turn = 0;
    if (k.has('ArrowLeft')) turn += 1;
    if (k.has('ArrowRight')) turn -= 1;
    this.yawVel += (turn * TURN_RATE - this.yawVel) * (1 - Math.exp(-TURN_ACCEL * dt));
    this.yaw += this.yawVel * dt;

    let look = 0;
    if (k.has('ArrowUp')) look += 1;
    if (k.has('ArrowDown')) look -= 1;
    this.pitchVel += (look * PITCH_RATE - this.pitchVel) * (1 - Math.exp(-PITCH_ACCEL * dt));
    this.pitch += this.pitchVel * dt;
    if (this.pitch > PITCH_MAX || this.pitch < -PITCH_MAX) {
      this.pitch = Math.max(-PITCH_MAX, Math.min(PITCH_MAX, this.pitch));
      this.pitchVel = 0;
    }

    let fwd = 0, strafe = 0;
    if (k.has('KeyW')) fwd += 1;
    if (k.has('KeyS')) fwd -= 1;
    if (k.has('KeyD')) strafe += 1;
    if (k.has('KeyA')) strafe -= 1;
    if (fwd || strafe || turn || look) this.moved = true;

    let wantX = 0, wantZ = 0;
    if (fwd || strafe) {
      const speed = k.has('ShiftLeft') || k.has('ShiftRight') ? RUN : WALK;
      const len = Math.hypot(fwd, strafe);
      const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
      wantX = (-sin * fwd + cos * strafe) / len * speed;
      wantZ = (-cos * fwd - sin * strafe) / len * speed;
    }
    const a = 1 - Math.exp(-((fwd || strafe) ? ACCEL : DECEL) * dt);
    this.vel.x += (wantX - this.vel.x) * a;
    this.vel.z += (wantZ - this.vel.z) * a;

    // gliding on after a finger lets go (or toward a tapped spot), slowing as it goes
    if (!this.frozen) this.coast(dt);

    if (this.vel.lengthSq() > 1e-8) {
      const bx = this.pos.x, bz = this.pos.z;
      this.pos.x += this.vel.x * dt;
      this.pos.z += this.vel.z * dt;
      this.collide();
      // whatever the walls took away comes off the velocity too, so you slide
      const px = this.pos.x - (bx + this.vel.x * dt), pz = this.pos.z - (bz + this.vel.z * dt);
      const pl = Math.hypot(px, pz);
      if (pl > 1e-9) {
        const nx = px / pl, nz = pz / pl;
        const into = this.vel.x * nx + this.vel.z * nz;
        if (into < 0) { this.vel.x -= nx * into; this.vel.z -= nz * into; }
      }
    }
  }

  private coast(dt: number) {
    const g = this.goal;
    if (g) {
      // ease toward the spot (and the way to face there), arriving gently
      const dx = g.x - this.pos.x, dz = g.z - this.pos.z, d = Math.hypot(dx, dz);
      const k = 1 - Math.exp(-2.6 * dt);
      const step = Math.min(d, Math.max(d * k, Math.min(d, 0.9 * dt)));
      if (d > 1e-4) { const bx = this.pos.x, bz = this.pos.z; this.pos.x += (dx / d) * step; this.pos.z += (dz / d) * step; this.collide(); if (Math.hypot(this.pos.x - bx, this.pos.z - bz) < step * 0.2) this.goal = null; }
      if (g.yaw !== undefined) this.yaw += Math.atan2(Math.sin(g.yaw - this.yaw), Math.cos(g.yaw - this.yaw)) * k;
      if (g.pitch !== undefined) this.pitch += (g.pitch - this.pitch) * k;
      if (d < 0.02 && (g.yaw === undefined || Math.abs(Math.atan2(Math.sin(g.yaw - this.yaw), Math.cos(g.yaw - this.yaw))) < 0.01)) this.goal = null;
      return;
    }
    if (this.glide.lengthSq() > 1e-6) {
      const bx = this.pos.x, bz = this.pos.z;
      this.pos.x += this.glide.x * dt; this.pos.z += this.glide.y * dt;
      this.collide();
      // a wall takes what it stops off the glide (you slide along it)
      const ax = (this.pos.x - bx) / Math.max(dt, 1e-6), az = (this.pos.z - bz) / Math.max(dt, 1e-6);
      this.glide.set(ax, az).multiplyScalar(Math.exp(-2.4 * dt));
      if (this.glide.lengthSq() < 0.0004) this.glide.set(0, 0);
    }
    if (Math.abs(this.spin) > 1e-3) { this.yaw += this.spin * dt; this.spin *= Math.exp(-3.2 * dt); } else this.spin = 0;
  }

  collide() {
    const p = this.pos;
    for (let pass = 0; pass < 2; pass++) {
      for (const b of this.solids) {
        const cx = Math.max(b.x0, Math.min(p.x, b.x1));
        const cz = Math.max(b.z0, Math.min(p.z, b.z1));
        const dx = p.x - cx, dz = p.z - cz;
        const d2 = dx * dx + dz * dz;
        if (d2 >= RADIUS * RADIUS) continue;
        if (d2 > 1e-12) {
          const d = Math.sqrt(d2);
          p.x += dx / d * (RADIUS - d);
          p.z += dz / d * (RADIUS - d);
        } else {
          // inside the box: out by the shortest way
          const outs = [p.x - b.x0 + RADIUS, b.x1 - p.x + RADIUS, p.z - b.z0 + RADIUS, b.z1 - p.z + RADIUS];
          const m = Math.min(...outs);
          if (m === outs[0]) p.x = b.x0 - RADIUS; else if (m === outs[1]) p.x = b.x1 + RADIUS;
          else if (m === outs[2]) p.z = b.z0 - RADIUS; else p.z = b.z1 + RADIUS;
        }
      }
    }
    for (const o of this.obstacles) {
      const dx = p.x - o.x, dz = p.z - o.z, d = Math.hypot(dx, dz), min = RADIUS * 0.7 + o.r;
      if (d < min && d > 1e-6) { p.x = o.x + dx / d * min; p.z = o.z + dz / d * min; }
    }
    p.x = Math.max(this.world.x0, Math.min(this.world.x1, p.x));
    p.z = Math.max(this.world.z0, Math.min(this.world.z1, p.z));
  }

  apply(camera: THREE.PerspectiveCamera) {
    camera.position.copy(this.pos);
    camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
  }
}

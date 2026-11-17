/* The map (Robyn, 2026-11-16: "create a map that can be open from bottom right corner that show position of user in
   museum. small X in upper right corner closes the map"). A round button in the bottom-right corner (or the M key)
   opens the plan of the floor you're on: every room, its number, the doorways, the stair, and you — a red dot and the
   way you're facing. Two tabs show the other floor; the X in the panel's top-right corner (or M, or Esc) closes it.
   Drawn on a canvas, north up (the frame's x east, z south toward the Seine), redrawn only while it's open. */
import type { Building } from './model';

const FLOOR_NAME: Record<number, string> = { 1: 'First floor · Denon', 2: 'Second floor · Richelieu and Sully' };
const RED = '#d8231b';

export class FloorMap {
  open = false;
  private shown = 1;               // the floor drawn (yours, unless a tab says otherwise)
  private chosen: number | null = null;
  private btn: HTMLButtonElement;
  private panel: HTMLDivElement;
  private cv: HTMLCanvasElement;
  private here: HTMLDivElement;
  private tabs: HTMLButtonElement[] = [];
  private me = { x: 0, z: 0, yaw: 0, floor: 1 };
  private last = '';

  constructor(private B: Building, private onToggle: (open: boolean) => void) {
    this.btn = document.createElement('button');
    this.btn.id = 'map-btn';
    this.btn.setAttribute('aria-label', 'Map');
    this.btn.title = 'Map (M)';
    this.btn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M3.5 5.5l5.5-2 6 2 5.5-2v15l-5.5 2-6-2-5.5 2z M9 3.5v15 M15 5.5v15" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`;
    this.btn.addEventListener('click', (e) => { e.stopPropagation(); this.toggle(); });
    this.btn.addEventListener('mousedown', (e) => e.stopPropagation());

    this.panel = document.createElement('div');
    this.panel.id = 'map';
    const head = document.createElement('div'); head.className = 'map-head';
    const title = document.createElement('div'); title.className = 'map-title'; title.textContent = 'Musée du Louvre';
    const tabs = document.createElement('div'); tabs.className = 'map-tabs';
    for (const f of [...new Set(B.rooms.map((r) => r.floor))].sort()) {
      const t = document.createElement('button');
      t.textContent = f === 1 ? '1st floor' : f === 2 ? '2nd floor' : `Floor ${f}`;
      t.dataset.floor = String(f);
      t.addEventListener('click', (e) => { e.stopPropagation(); this.chosen = f; this.draw(true); });
      tabs.appendChild(t); this.tabs.push(t);
    }
    const close = document.createElement('button'); close.className = 'map-close'; close.setAttribute('aria-label', 'Close the map');
    close.innerHTML = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    close.addEventListener('click', (e) => { e.stopPropagation(); this.toggle(false); });
    head.append(title, tabs, close);
    this.cv = document.createElement('canvas');
    this.here = document.createElement('div'); this.here.className = 'map-here';
    this.panel.append(head, this.cv, this.here);
    for (const ev of ['mousedown', 'pointerdown', 'touchstart', 'wheel'] as const) this.panel.addEventListener(ev, (e) => e.stopPropagation(), { passive: true });
    document.body.append(this.btn, this.panel);
    addEventListener('resize', () => { if (this.open) this.draw(true); });
    addEventListener('keydown', (e) => { if (e.code === 'Escape' && this.open) this.toggle(false); });
  }

  toggle(want = !this.open) {
    this.open = want;
    this.chosen = null;
    this.panel.classList.toggle('on', want);
    this.btn.classList.toggle('on', want);
    this.onToggle(want);
    if (want) this.draw(true);
  }

  /** where you are (called every frame; draws only when the map is open and something changed) */
  update(x: number, z: number, yaw: number, floor: number) {
    this.me = { x, z, yaw, floor };
    if (this.open) this.draw(false);
  }

  private draw(force: boolean) {
    const f = this.chosen ?? this.me.floor;
    const key = `${f}|${this.me.x.toFixed(2)}|${this.me.z.toFixed(2)}|${this.me.yaw.toFixed(3)}|${this.me.floor}|${innerWidth}x${innerHeight}`;
    if (!force && key === this.last) return;
    this.last = key;
    this.shown = f;
    for (const t of this.tabs) t.classList.toggle('on', Number(t.dataset.floor) === f);
    const rooms = this.B.rooms.filter((r) => r.floor === f);
    // the same frame for both floors, so the stair sits in one place on each
    const all = this.B.rooms;
    const X0 = Math.min(...all.map((r) => r.x0)) - 4, X1 = Math.max(...all.map((r) => r.x1)) + 4;
    const Z0 = Math.min(...all.map((r) => r.z0)) - 4, Z1 = Math.max(...all.map((r) => r.z1)) + 4;
    const cssW = this.cv.clientWidth || 600, k = cssW / (X1 - X0), cssH = Math.round((Z1 - Z0) * k);
    const dpr = Math.min(devicePixelRatio || 1, 2);
    if (this.cv.width !== Math.round(cssW * dpr) || this.cv.height !== Math.round(cssH * dpr)) {
      this.cv.width = Math.round(cssW * dpr); this.cv.height = Math.round(cssH * dpr); this.cv.style.height = `${cssH}px`;
    }
    const g = this.cv.getContext('2d')!;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, cssW, cssH);
    const P = (x: number, z: number): [number, number] => [(x - X0) * k, (z - Z0) * k];
    // the other floor, faintly, for bearings
    g.fillStyle = '#f1f0ec';
    for (const r of all) if (r.floor !== f) { const [a, b] = P(r.x0, r.z0); g.fillRect(a, b, (r.x1 - r.x0) * k, (r.z1 - r.z0) * k); }
    // this floor's rooms
    for (const r of rooms) {
      const [a, b] = P(r.x0, r.z0), w = (r.x1 - r.x0) * k, h = (r.z1 - r.z0) * k;
      g.fillStyle = r.stair ? '#e7e4dc' : r.hang ? '#ffffff' : '#f7f6f2';
      g.fillRect(a, b, w, h);
      g.strokeStyle = '#8f8c85'; g.lineWidth = 1; g.strokeRect(a + 0.5, b + 0.5, w - 1, h - 1);
    }
    // doorways: a gap in each wall
    g.strokeStyle = '#ffffff'; g.lineWidth = 2.2; g.lineCap = 'butt';
    const ids = new Set(rooms.map((r) => r.id));
    for (const d of this.B.doors) {
      if (!ids.has(d.a) || !ids.has(d.b)) continue;
      for (const pl of [d.pa, d.pb]) {
        const [a0, b0] = d.wall === 'x' ? P(d.u0, pl) : P(pl, d.u0), [a1, b1] = d.wall === 'x' ? P(d.u1, pl) : P(pl, d.u1);
        g.beginPath(); g.moveTo(a0, b0); g.lineTo(a1, b1); g.stroke();
      }
    }
    // the stair's steps
    for (const s of this.B.stairs ?? []) {
      g.strokeStyle = '#b4b0a7'; g.lineWidth = 0.8;
      for (let x = s.xL; x <= s.xE + 1e-6; x += (s.xE - s.xL) / 10) {
        const [a, b0] = P(x, s.z0), [, b1] = P(x, s.z1);
        g.beginPath(); g.moveTo(a, b0); g.lineTo(a, b1); g.stroke();
      }
    }
    // room numbers, where there's room for them
    g.fillStyle = '#6f6c66'; g.textAlign = 'center'; g.textBaseline = 'middle';
    const fs = Math.max(7, Math.min(11, k * 2.2));
    g.font = `400 ${fs}px "Inter Tight", "Helvetica Neue", sans-serif`;
    for (const r of rooms) {
      if (!/^\d+$/.test(r.id)) continue;
      const w = (r.x1 - r.x0) * k, h = (r.z1 - r.z0) * k;
      if (w < fs * 1.9 || h < fs * 1.2) continue;
      const [a, b] = P((r.x0 + r.x1) / 2, (r.z0 + r.z1) / 2);
      g.fillText(r.id, a, b);
    }
    for (const s of this.B.stairs ?? []) {
      const [a, b] = P(s.x0 - 1, (s.z0 + s.z1) / 2);
      g.textAlign = 'right'; g.fillStyle = '#4a4844';
      g.fillText(f === 1 ? 'stairs up ↑' : 'stairs down ↓', a, b);
      g.textAlign = 'center';
    }
    // you
    const room = this.B.rooms.find((r) => r.floor === this.me.floor && this.me.x >= r.x0 && this.me.x <= r.x1 && this.me.z >= r.z0 && this.me.z <= r.z1);
    if (this.me.floor === f) {
      const [a, b] = P(this.me.x, this.me.z);
      const dx = -Math.sin(this.me.yaw), dz = -Math.cos(this.me.yaw), spread = 0.5, L = Math.max(16, k * 7);
      const grd = g.createRadialGradient(a, b, 0, a, b, L);
      grd.addColorStop(0, 'rgba(216,35,27,0.34)'); grd.addColorStop(1, 'rgba(216,35,27,0)');
      g.fillStyle = grd;
      g.beginPath(); g.moveTo(a, b);
      const ang = Math.atan2(dz, dx);
      g.arc(a, b, L, ang - spread, ang + spread); g.closePath(); g.fill();
      g.fillStyle = RED; g.strokeStyle = '#ffffff'; g.lineWidth = 2;
      g.beginPath(); g.arc(a, b, 5, 0, Math.PI * 2); g.fill(); g.stroke();
    }
    const where = room ? (/^\d+$/.test(room.id) ? `${room.id} · ${room.name}` : room.name) : '';
    this.here.textContent = (this.me.floor === f ? `${FLOOR_NAME[f] ?? ''}${where ? ' — you are in ' + where : ''}`
      : `${FLOOR_NAME[f] ?? ''} — you are on the ${this.me.floor === 1 ? 'first' : 'second'} floor`);
  }

  get floorShown() { return this.shown; }
}

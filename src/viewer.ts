/* A painting, full size. It fills the screen as far as its own pixels allow
   and no further (a small scan stays its own size rather than going soft), on a
   dark ground with its label beneath. The wall picture already in memory shows
   at once and the full scan fades in over it. A click closes it.

   If the work has a crop (set in the editor), only that part of the scan is
   shown — here, on the wall and everywhere; and its colour corrections (adjust.ts) too. The editor can add its own buttons
   along the top (`tools`) and hold the viewer open while it works (`busy`). */
import type { Work } from './model';
import { titleOf, sizeText, SOLD_RED } from './model';
type CatWork = Work & { crop?: Crop; sold?: boolean };
type Crop = [number, number, number, number];
const cssFilter = (_id: string, _a?: unknown) => '';

export class Viewer {
  el: HTMLDivElement;
  /** a bar along the top for the editor's buttons (empty for visitors) */
  tools: HTMLDivElement;
  private low: HTMLImageElement;
  private high: HTMLImageElement;
  private cap: HTMLDivElement;
  private frame: HTMLDivElement;
  /** a sold work's red dot, off the picture's bottom-right corner as on the wall; "SOLD" over it on hover */
  private sold: HTMLDivElement;
  /** the picture and its dot together — what fingers push in on and move about */
  private hold: HTMLDivElement;
  /* fingers on the picture (a phone): how far pushed in, and moved by (px); and where each finger is */
  private zs = 1;
  private zx = 0;
  private zy = 0;
  private fingers = new Map<number, { x: number; y: number }>();
  private grip: { d: number; mx: number; my: number } | null = null;
  open = false;
  /** while true, clicks don't close it (the crop tool or the colour sliders are at work) */
  get busy() { return this._busy; }
  set busy(v: boolean) { this._busy = v; this.el.classList.toggle('busy', v); }
  private _busy = false;
  /** the "?" and the little host who takes questions (ask.ts) */
  ask: { reset(w: CatWork): void; close(): void } | null = null;
  work: CatWork | null = null;
  px: [number, number] = [1, 1];
  private crop: Crop = [0, 0, 1, 1];
  onClose: () => void = () => {};
  onShow: (w: CatWork) => void = () => {};
  /** room kept free on the right (the editor's colour panel) */
  reserveRight = 0;
  /** whether closing should take the mouse back for walking (not when a page is open) */
  relock: () => boolean = () => true;

  constructor() {
    this.el = document.getElementById('view') as HTMLDivElement;
    this.frame = this.el.querySelector('.frame') as HTMLDivElement;
    this.low = this.el.querySelector('img.low') as HTMLImageElement;
    this.high = this.el.querySelector('img.high') as HTMLImageElement;
    this.cap = this.el.querySelector('.cap') as HTMLDivElement;
    this.tools = document.createElement('div');
    this.tools.className = 'view-tools';
    this.el.prepend(this.tools);
    // the dot hangs off the picture's corner wherever the picture is: both sit in a box the picture's size
    const hold = this.hold = document.createElement('div');
    hold.className = 'frame-hold';
    this.frame.before(hold);
    hold.append(this.frame);
    this.sold = document.createElement('div');
    this.sold.className = 'view-sold';
    this.sold.style.background = SOLD_RED;
    this.sold.innerHTML = '<span>SOLD</span>';
    hold.append(this.sold);
    this.high.addEventListener('load', () => { if (this.open) this.high.classList.add('in'); });
    addEventListener('resize', () => { if (this.work) { this.zoomTo(1, 0, 0); this.fit(); } });
    this.fingersOn();
  }

  /* A phone: spread two fingers on the painting to push in on it, pinch them to pull back out, move them to move it
     about; pushed in, one finger moves it about too (Robyn, 2026-10-26: "on mobile devices, user can use two fingers
     to pan or spread two fingers to push in or push two fingers together to pull out"). The spot under the fingers
     stays under them. Let go pulled out past where it started and it settles back. Taps are main.ts's: one beside
     the picture still closes it. */
  get zoomed() { return this.zs > 1.02; }
  private zoomTo(s: number, x: number, y: number, settle = false) {
    const W = this.frame.offsetWidth * s / 2, H = this.frame.offsetHeight * s / 2;
    this.zs = s;
    this.zx = Math.max(-W, Math.min(W, x));
    this.zy = Math.max(-H, Math.min(H, y));
    this.hold.classList.toggle('settle', settle);
    this.hold.classList.toggle('zoomed', this.zoomed);
    this.hold.style.transform = s === 1 && !this.zx && !this.zy ? '' : `translate(${this.zx}px, ${this.zy}px) scale(${s})`;
  }
  private fingersOn() {
    const MAX = 6;
    const pair = () => {
      const v = [...this.fingers.values()];
      if (!v.length) return null;
      if (v.length === 1) return { d: 1, mx: v[0].x, my: v[0].y };
      const [a, b] = v;
      return { d: Math.max(24, Math.hypot(a.x - b.x, a.y - b.y)), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
    };
    this.el.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'touch' || !this.open || this.busy) return;
      if ((e.target as HTMLElement).closest('.ask-btn, .ask-box, .view-tools, .view-sold')) return;
      this.fingers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      this.grip = pair();
    });
    this.el.addEventListener('pointermove', (e) => {
      const f = this.fingers.get(e.pointerId);
      if (!f) return;
      f.x = e.clientX; f.y = e.clientY;
      const g = this.grip, n = pair();
      this.grip = n;
      if (!g || !n || (this.fingers.size === 1 && !this.zoomed)) return;   // not pushed in: one finger leaves it be
      // the picture's middle as it sits unmoved, and the spot of it under the fingers
      const r = this.hold.getBoundingClientRect(), cx = r.left + r.width / 2 - this.zx, cy = r.top + r.height / 2 - this.zy;
      const lx = (g.mx - cx - this.zx) / this.zs, ly = (g.my - cy - this.zy) / this.zs;
      const s = Math.max(0.6, Math.min(MAX, this.zs * (n.d / g.d)));
      this.zoomTo(s, n.mx - cx - s * lx, n.my - cy - s * ly);
    });
    const up = (e: PointerEvent) => {
      if (!this.fingers.delete(e.pointerId)) return;
      this.grip = pair();
      if (!this.fingers.size && this.zs < 1.02) this.zoomTo(1, 0, 0, true);
    };
    this.el.addEventListener('pointerup', up);
    this.el.addEventListener('pointercancel', up);
    // pinching here is the painting's, never the page zooming (an iPhone's own pinch)
    this.el.addEventListener('touchmove', (e) => { if (e.touches.length > 1 || this.zoomed) e.preventDefault(); }, { passive: false });
    for (const t of ['gesturestart', 'gesturechange']) document.addEventListener(t, (e) => e.preventDefault());
  }

  show(w: CatWork, px: [number, number] | undefined, lowSrc: string, highSrc: string) {
    this.work = w;
    this.px = px ?? [1200, 1200];
    this.crop = w.crop ?? [0, 0, 1, 1];
    this.open = true;
    this.busy = false;
    this.high.classList.remove('in');
    this.fingers.clear(); this.grip = null;
    this.zoomTo(1, 0, 0);
    this.low.src = lowSrc;
    this.high.src = highSrc;
    this.caption();
    this.sold.classList.toggle('on', !!w.sold);
    this.sold.classList.remove('show');
    this.setFilter(cssFilter(w.id));
    this.fit();
    this.el.classList.add('on');
    this.ask?.reset(w);
    this.onShow(w);
  }
  caption() {
    const w = this.work;
    if (!w) return;
    const lines = [`<i>${esc(titleOf(w))}</i>`, [w.artist, w.date].filter(Boolean).map(esc).join(' &nbsp;·&nbsp; ')];
    const rest = [w.medium, sizeText(w), w.inv].filter(Boolean).map((s) => esc(s as string));
    if (rest.length) lines.push(rest.join(' &nbsp;·&nbsp; '));
    lines.push(`<span class="credit">Photograph: Wikimedia Commons, public domain &nbsp;·&nbsp; musée du Louvre</span>`);
    this.cap.innerHTML = lines.join('<br>');
  }

  hide() {
    if (!this.open || this.busy) return;
    this.open = false;
    this.work = null;
    this.fingers.clear(); this.grip = null;
    this.el.classList.remove('on');
    this.ask?.close();
    this.onClose();
  }

  /** colour corrections on the picture shown (a CSS filter, '' for none) */
  setFilter(css: string) { this.low.style.filter = css; this.high.style.filter = css; }
  refit() { this.el.style.paddingRight = this.reserveRight ? `${this.reserveRight}px` : ''; this.fit(); }
  /** show a different part of the scan (the editor's crop tool shows the whole while it works) */
  setCrop(c: Crop) { this.crop = c; this.fit(); }
  /** the frame the picture is drawn in (for the crop tool to lay its box over) */
  get frameEl() { return this.frame; }

  private fit() {
    const capH = 64, pad = 28, top = this.tools.childElementCount ? 56 : 0;
    const [x0, y0, x1, y1] = this.crop;
    const pw = this.px[0] * (x1 - x0), ph = this.px[1] * (y1 - y0);
    const maxW = innerWidth - 2 * pad - this.reserveRight, maxH = innerHeight - 2 * pad - capH - top;
    const s = Math.min(1, maxW / pw, maxH / ph);
    const W = Math.round(pw * s), H = Math.round(ph * s);
    this.frame.style.width = `${W}px`;
    this.frame.style.height = `${H}px`;
    // the whole scan, scaled and shifted so the crop fills the frame
    const iw = W / (x1 - x0), ih = H / (y1 - y0);
    for (const im of [this.low, this.high]) {
      Object.assign(im.style, { width: `${iw}px`, height: `${ih}px`, left: `${-x0 * iw}px`, top: `${-y0 * ih}px` });
    }
  }
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));

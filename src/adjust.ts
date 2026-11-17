/* Colour corrections for a work's photo (Robyn, 2026-10-25: "basic color editing control. Like
   contrast, lighten/darken, saturation, etc." — and warmth, shadows, highlights). Set in the editor's
   close-up; everyone sees the result: on the wall (the picture shader) and in the full view and the
   editor's little pictures (an SVG filter doing the same sums). The photo files are never changed.

   Each value runs -1..1, 0 = as photographed. Worked in sRGB, in this order: warmth (red up, blue
   down, or the reverse), a tone curve (lighten/darken as a gamma; contrast about the middle; shadows
   and highlights lifting or lowering the dark and the light tones, leaving black and white be), then
   saturation. */
import * as THREE from 'three';
import type { Adjust } from './model';

export const ADJUST_KEYS = ['b', 'c', 's', 't', 'sh', 'hl'] as const;
export const isNeutral = (a?: Adjust) => !a || ADJUST_KEYS.every((k) => !a[k]);

function params(a?: Adjust) {
  const v = (k: typeof ADJUST_KEYS[number]) => a?.[k] ?? 0;
  return { warm: [1 + 0.1 * v('t'), 1, 1 - 0.1 * v('t')] as [number, number, number], gamma: 2 ** (-0.8 * v('b')), contrast: 2 ** (0.8 * v('c')), sh: v('sh'), hl: v('hl'), sat: 1 + v('s') };
}
const clamp = (x: number) => Math.min(1, Math.max(0, x));
function curve(x: number, p: ReturnType<typeof params>) {
  let s = Math.pow(x, p.gamma);
  s = clamp(0.5 + (s - 0.5) * p.contrast);
  const ws = s * (1 - s) * (1 - s) * 6.75, wh = s * s * (1 - s) * 6.75;
  return clamp(s + p.sh * 0.25 * ws + p.hl * 0.25 * wh);
}

/* ---- on the wall: the picture shader's part ------------------------------------------------ */
export const ADJUST_GLSL = /* glsl */ `
  uniform float uAdj; uniform vec3 uWarm; uniform float uGamma; uniform float uContrast; uniform float uShadows; uniform float uHigh; uniform float uSat;
  vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
  vec3 toLinear(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
  vec3 adjust(vec3 lin) {
    if (uAdj < 0.5) return lin;
    vec3 s = clamp(toSRGB(lin) * uWarm, 0.0, 1.0);
    s = pow(s, vec3(uGamma));
    s = clamp(0.5 + (s - 0.5) * uContrast, 0.0, 1.0);
    vec3 ws = s * (1.0 - s) * (1.0 - s) * 6.75, wh = s * s * (1.0 - s) * 6.75;
    s = clamp(s + uShadows * 0.25 * ws + uHigh * 0.25 * wh, 0.0, 1.0);
    float y = dot(s, vec3(0.2126, 0.7152, 0.0722));
    return toLinear(clamp(mix(vec3(y), s, uSat), 0.0, 1.0));
  }`;
export function adjustUniforms(a?: Adjust) {
  const p = params(a);
  return {
    uAdj: { value: isNeutral(a) ? 0 : 1 }, uWarm: { value: new THREE.Vector3(...p.warm) }, uGamma: { value: p.gamma },
    uContrast: { value: p.contrast }, uShadows: { value: p.sh }, uHigh: { value: p.hl }, uSat: { value: p.sat },
  };
}

/* ---- in pictures on the page: the same sums as an SVG filter ------------------------------- */
let defs: SVGSVGElement | null = null;
const NS = 'http://www.w3.org/2000/svg';
/** a CSS filter for a work's corrections ('' when there are none); `key` names the filter, so changing
    the corrections of one key changes every picture using it */
export function cssFilter(key: string, a?: Adjust): string {
  if (isNeutral(a)) return '';
  if (!defs) {
    defs = document.createElementNS(NS, 'svg');
    defs.setAttribute('width', '0'); defs.setAttribute('height', '0');
    defs.style.position = 'absolute';
    document.body.append(defs);
  }
  const id = `adj-${key}`;
  let f = defs.querySelector<SVGFilterElement>(`#${CSS.escape(id)}`);
  if (!f) { f = document.createElementNS(NS, 'filter'); f.id = id; f.setAttribute('color-interpolation-filters', 'sRGB'); defs.append(f); }
  const p = params(a), [r, , b] = p.warm, w = [0.2126, 0.7152, 0.0722], S = p.sat;
  const table = Array.from({ length: 65 }, (_, i) => curve(i / 64, p).toFixed(4)).join(' ');
  const sat = [0, 1, 2].map((row) => [0, 1, 2].map((col) => ((1 - S) * w[col] + (row === col ? S : 0)).toFixed(4)).join(' ') + ' 0 0').join('  ') + '  0 0 0 1 0';
  f.innerHTML = `<feColorMatrix type="matrix" values="${r} 0 0 0 0  0 1 0 0 0  0 0 ${b} 0 0  0 0 0 1 0"/>`
    + `<feComponentTransfer><feFuncR type="table" tableValues="${table}"/><feFuncG type="table" tableValues="${table}"/><feFuncB type="table" tableValues="${table}"/></feComponentTransfer>`
    + `<feColorMatrix type="matrix" values="${sat}"/>`;
  return `url(#${id})`;
}

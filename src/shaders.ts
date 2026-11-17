/* The light inside the Denon wing.

   The Louvre's painting galleries are lit from above, through their skylights, so there are no spotlights here:
   the walls take an even, soft light that grows a little toward the ceiling, gathers into a shade along the floor
   and into the corners, and each picture throws a soft shadow onto the wall below it. Everything built is a shade
   of white; only the paintings have colour. The floor is the Portrait gallery's own polished concrete — the same
   mottle, aggregate, saw-cut joints and soft mirror (Robyn, 2026-11-16: "Floor should have same texture").

   The pictures are drawn without tone mapping, so their colours are the photographs'. */
import * as THREE from 'three';

export const MAXB = 40, MAXSEG = 24;
export const WHITE_WALL = '#f2f1ee', WHITE_CEILING = '#f7f7f5', WHITE_FRAME = '#efeee9';
export const AMBIENT = 0.9;        // walls and ceilings: white reads white
export const FLOOR_AMB = 0.76;     // the concrete, as in the Portrait gallery

const NOISE = /* glsl */ `
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`;

const VERT = /* glsl */ `
varying vec3 vW;
varying vec3 vN;
varying vec2 vUv;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
const OUT = /* glsl */ `
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`;

/** a room's skylight, as a rectangle in plan (or none), for the soft brightening of what's under and around it */
export interface SkyRefs { rect: THREE.Vector4; top: number; base?: number }
const SKY_GLSL = /* glsl */ `
  uniform vec4 uSky; uniform float uTop; uniform float uBase;
  // light from the skylight: more the nearer (in plan) and the higher up a point is
  float skyLight(vec3 p) {
    if (uSky.z <= uSky.x) return 0.0;
    vec2 c = clamp(p.xz, uSky.xy, uSky.zw);
    float d = length(p.xz - c);
    return exp(-d / 7.0) * (0.35 + 0.65 * clamp((p.y - uBase) / uTop, 0.0, 1.0));
  }
`;
const skyUniforms = (s: SkyRefs) => ({ uSky: { value: s.rect }, uTop: { value: s.top }, uBase: { value: s.base ?? 0 } });

export interface FaceInfo {
  normal: THREE.Vector3; right: THREE.Vector3; axisX: boolean; u0: number; u1: number;
  cornerA: boolean; cornerB: boolean; spring: number;
  boxes: { c: THREE.Vector3; s: THREE.Vector3 }[];   // pictures on it: middle, half width / half height / depth
}

/* A wall: flat paint with the faintest roller texture, a shade along the floor and into the corners and up under
   the cove, a soft shadow under every picture, and a 15 mm shadow-gap skirting. */
export function wallMaterial(F: FaceInfo, albedo: THREE.Color, sky: SkyRefs) {
  const pad = <T>(a: T[], n: number, make: () => T) => { const o = a.slice(0, n); while (o.length < n) o.push(make()); return o; };
  return new THREE.ShaderMaterial({
    uniforms: {
      uB: { value: Math.min(F.boxes.length, MAXB) },
      uBC: { value: pad(F.boxes.map((x) => x.c), MAXB, () => new THREE.Vector3(0, -99, 0)) },
      uBS: { value: pad(F.boxes.map((x) => x.s), MAXB, () => new THREE.Vector3()) },
      uFN: { value: F.normal }, uFR: { value: F.right },
      uAxisX: { value: F.axisX ? 1 : 0 }, uU0: { value: F.u0 }, uU1: { value: F.u1 },
      uCA: { value: F.cornerA ? 1 : 0 }, uCB: { value: F.cornerB ? 1 : 0 }, uSpring: { value: F.spring },
      uAlb: { value: albedo }, uAmb: { value: AMBIENT },
      ...skyUniforms(sky),
    },
    vertexShader: VERT,
    fragmentShader: /* glsl */ `
      #define MAXB ${MAXB}
      uniform int uB; uniform vec3 uBC[MAXB]; uniform vec3 uBS[MAXB];
      uniform vec3 uFN; uniform vec3 uFR;
      uniform float uAxisX, uU0, uU1, uCA, uCB, uSpring;
      uniform vec3 uAlb; uniform float uAmb;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${SKY_GLSL}
      ${NOISE}
      float occ(float d, float k, float r) { return 1.0 - k * exp(-max(d, 0.0) / r); }
      void main() {
        vec3 n = normalize(vN);
        // a picture's shadow: its box, dropped a little and softened by how far it stands off the wall
        float shade = 1.0;
        for (int j = 0; j < MAXB; j++) {
          if (j >= uB) break;
          vec3 q = vW - uBC[j];
          vec2 P = vec2(dot(q, uFR), q.y);
          vec2 hs = uBS[j].xy;
          float dep = uBS[j].z;
          float drop = dep * 0.9 + 0.006;
          float soft = 0.012 + dep * 0.55;
          vec2 e = abs(P + vec2(0.0, drop)) - hs;
          float d = length(max(e, 0.0)) + min(max(e.x, e.y), 0.0);
          shade *= 1.0 - 0.34 * (1.0 - smoothstep(-soft, soft, d));
          // the thin contact line right round the frame
          vec2 e2 = abs(P) - hs;
          float d2 = length(max(e2, 0.0));
          shade *= 1.0 - 0.16 * exp(-d2 / 0.006) * step(0.0, max(e2.x, e2.y));
        }
        float hy = vW.y - uBase;
        float ao = occ(hy, 0.30, 0.32);
        float u = uAxisX > 0.5 ? vW.x : vW.z;
        if (uCA > 0.5) ao *= occ(u - uU0, 0.22, 0.35);
        if (uCB > 0.5) ao *= occ(uU1 - u, 0.22, 0.35);
        ao *= occ(uSpring - hy, 0.10, 0.5);
        float amb = uAmb * (0.93 + 0.06 * dot(n.xz, vec2(0.45, 0.893))) * (0.95 + 0.07 * clamp(hy / uSpring, 0.0, 1.0));
        amb += 0.10 * skyLight(vW);
        vec2 t = abs(n.x) > 0.5 ? vW.zy : vW.xy;
        float grain = 1.0 + 0.018 * (vnoise(t * 41.0) - 0.5) + 0.012 * (fbm(t * 1.7) - 0.5);
        vec3 alb = uAlb * grain;
        if (hy < 0.015) alb *= 0.25;
        gl_FragColor = vec4(alb * amb * ao * shade, 1.0);
        ${OUT}
      }`,
  });
}

/* Plaster: ceilings, coves, vaults, doorway reveals, the ends of free walls. Lit by the room, brighter toward the
   skylight, a little darker where it turns to face down. */
export function plasterMaterial(albedo: THREE.Color, sky: SkyRefs) {
  return new THREE.ShaderMaterial({
    uniforms: { uAlb: { value: albedo }, uAmb: { value: AMBIENT }, ...skyUniforms(sky) },
    vertexShader: VERT,
    fragmentShader: /* glsl */ `
      uniform vec3 uAlb; uniform float uAmb;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${SKY_GLSL}
      ${NOISE}
      void main() {
        vec3 n = normalize(vN);
        float down = clamp(-n.y, 0.0, 1.0);
        float amb = uAmb * (0.97 - 0.05 * down + 0.04 * dot(n.xz, vec2(0.45, 0.893))) + 0.16 * skyLight(vW);
        float grain = 1.0 + 0.012 * (vnoise(vW.xz * 23.0 + vW.y * 7.0) - 0.5);
        if (vW.y - uBase < 0.015) amb *= 0.3;
        gl_FragColor = vec4(uAlb * amb * grain, 1.0);
        ${OUT}
      }`,
  });
}

/* A skylight: frosted glass, glowing white, in a grid of thin glazing bars. */
export function skylightMaterial() {
  return new THREE.ShaderMaterial({
    toneMapped: false,
    vertexShader: VERT,
    fragmentShader: /* glsl */ `
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      void main() {
        vec2 g = abs(fract(vW.xz / vec2(1.25, 0.95) + 0.5) - 0.5) * vec2(1.25, 0.95);
        float bar = 1.0 - smoothstep(0.012, 0.022, min(g.x, g.y));
        vec3 c = mix(vec3(1.0, 1.0, 0.995), vec3(0.86, 0.865, 0.87), bar);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  });
}

/* Polished concrete, as in the Portrait gallery: mottled grey with fine aggregate, saw-cut joints, and a soft
   mirror of the room in it, stronger the lower you look across it. The shade along the walls is worked out here
   from the room's own walls (`segs`, each wall stretch as x0, z0, x1, z1) rather than baked. */
export function floorMaterial(refl: THREE.Texture, texMat: THREE.Matrix4, segs: THREE.Vector4[], sky: SkyRefs) {
  const s = segs.slice(0, MAXSEG);
  while (s.length < MAXSEG) s.push(new THREE.Vector4(1e5, 1e5, 1e5, 1e5));
  return new THREE.ShaderMaterial({
    uniforms: { uRefl: { value: refl }, uTexMat: { value: texMat }, uGloss: { value: 1 }, uAmb: { value: FLOOR_AMB }, uSeg: { value: s }, uNSeg: { value: Math.min(segs.length, MAXSEG) }, ...skyUniforms(sky) },
    vertexShader: /* glsl */ `
      uniform mat4 uTexMat;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying vec4 vR;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz; vN = vec3(0.0, 1.0, 0.0); vUv = uv;
        vR = uTexMat * w;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      #define MAXSEG ${MAXSEG}
      uniform sampler2D uRefl;
      uniform float uAmb; uniform float uGloss;   // (0 on the floor you're not on: its reflection isn't drawn)
      uniform vec4 uSeg[MAXSEG]; uniform int uNSeg;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying vec4 vR;
      ${SKY_GLSL}
      ${NOISE}
      const vec2 DISC[8] = vec2[8](vec2(-0.613, 0.617), vec2(0.170, -0.040), vec2(-0.299, -0.792),
        vec2(0.645, 0.493), vec2(-0.651, -0.072), vec2(0.421, -0.581), vec2(-0.033, 0.977), vec2(0.928, -0.156));
      float segDist(vec2 p, vec4 s) {
        vec2 a = s.xy, b = s.zw, ab = b - a;
        float t = clamp(dot(p - a, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
        return length(p - a - ab * t);
      }
      void main() {
        vec2 xz = vW.xz;
        float m = 0.55 * fbm(xz * 0.45) + 0.30 * fbm(xz * 2.6 + 5.0) + 0.15 * vnoise(xz * 23.0);
        vec3 alb = mix(vec3(0.30, 0.298, 0.292), vec3(0.47, 0.465, 0.455), m);
        float speck = step(0.93, vnoise(xz * 140.0));
        alb = mix(alb, alb * 1.35, speck * 0.5);
        vec2 g = abs(fract(xz / 2.1 + 0.5) - 0.5) * 2.1;
        float joint = min(g.x, g.y);
        alb *= mix(0.55, 1.0, smoothstep(0.0015, 0.0045, joint));
        float ao = 1.0;
        for (int k = 0; k < MAXSEG; k++) {
          if (k >= uNSeg) break;
          float d = segDist(xz, uSeg[k]);
          ao *= 1.0 - 0.42 * exp(-d / 0.28);
        }
        vec3 base = alb * (vec3(uAmb) * ao * (1.0 + 0.10 * skyLight(vec3(vW.x, uBase, vW.z))));
        vec2 ruv = vR.xy / vR.w;
        vec2 wob = (vec2(fbm(xz * 7.0 + 3.1), fbm(xz * 7.0 - 7.3)) - 0.5) * 0.010;
        vec3 V = normalize(cameraPosition - vW);
        float dist = length(cameraPosition - vW);
        float blur = 0.0035 + 0.006 * smoothstep(1.0, 8.0, dist);
        vec3 rc = vec3(0.0);
        for (int k = 0; k < 8; k++) rc += texture2D(uRefl, ruv + wob + DISC[k] * blur).rgb;
        rc /= 8.0;
        float F = 0.045 + 0.955 * pow(1.0 - max(V.y, 0.0), 5.0);
        float gloss = 0.80 * mix(1.0, 0.75, m) * uGloss;
        vec3 col = base * (1.0 - F * gloss) + rc * F * gloss;
        gl_FragColor = vec4(col, 1.0);
        ${OUT}
      }`,
  });
}

/* The stair's stone (Robyn, 2026-11-17: "stairs should have the same glossy floors and rounded corner on edge of
   stairs"): the floors' polished concrete on its treads, risers and the rounded nose of every step: the same mottle,
   aggregate and soft mirror. The mirror is the floors' one, made level with where you stand when you're on the stair;
   a step higher or lower looks along its own reflected ray (a point `REACH` out) in that same picture, and where that
   point isn't in it (below the mirror, off its edge) sees the white hall instead. Shade: the inside corner at the
   back of each tread, the risers lit less than the treads, and along the walls (`segs`). `st`: the stair's plan
   (xL, xE, run, the z between its flights) and `n`, steps in each flight. */
export function stairMaterial(refl: THREE.Texture, texMat: THREE.Matrix4, segs: THREE.Vector4[], st: THREE.Vector4, n: number) {
  const s = segs.slice(0, MAXSEG);
  while (s.length < MAXSEG) s.push(new THREE.Vector4(1e5, 1e5, 1e5, 1e5));
  return new THREE.ShaderMaterial({
    uniforms: { uRefl: { value: refl }, uTexMat: { value: texMat }, uLevel: { value: 0 }, uAmb: { value: FLOOR_AMB }, uSeg: { value: s }, uNSeg: { value: Math.min(segs.length, MAXSEG) }, uSt: { value: st }, uN: { value: n } },
    vertexShader: VERT,
    fragmentShader: /* glsl */ `
      #define MAXSEG ${MAXSEG}
      #define REACH 2.5
      uniform sampler2D uRefl; uniform mat4 uTexMat;
      uniform float uLevel; uniform float uAmb; uniform float uN;
      uniform vec4 uSeg[MAXSEG]; uniform int uNSeg; uniform vec4 uSt;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${NOISE}
      const vec2 DISC[8] = vec2[8](vec2(-0.613, 0.617), vec2(0.170, -0.040), vec2(-0.299, -0.792),
        vec2(0.645, 0.493), vec2(-0.651, -0.072), vec2(0.421, -0.581), vec2(-0.033, 0.977), vec2(0.928, -0.156));
      float segDist(vec2 p, vec4 s) {
        vec2 a = s.xy, b = s.zw, ab = b - a;
        float t = clamp(dot(p - a, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
        return length(p - a - ab * t);
      }
      float mottle(vec2 p) { return 0.55 * fbm(p * 0.45) + 0.30 * fbm(p * 2.6 + 5.0) + 0.15 * vnoise(p * 23.0); }
      float speck(vec2 p) { return step(0.93, vnoise(p * 140.0)); }
      void main() {
        vec3 n = normalize(vN);
        // the concrete laid on each face from the side it faces: treads from above (as the floors), risers from the front
        vec3 w = pow(abs(n), vec3(4.0)); w /= (w.x + w.y + w.z);
        float m = 0.0, sp = 0.0;
        if (w.y > 0.01) { m += w.y * mottle(vW.xz); sp += w.y * speck(vW.xz); }
        if (w.x > 0.01) { vec2 q = vW.zy + 31.0; m += w.x * mottle(q); sp += w.x * speck(q); }
        if (w.z > 0.01) { vec2 q = vW.xy + 57.0; m += w.z * mottle(q); sp += w.z * speck(q); }
        vec3 alb = mix(vec3(0.30, 0.298, 0.292), vec3(0.47, 0.465, 0.455), m);
        alb = mix(alb, alb * 1.35, sp * 0.5);
        float ao = 1.0;
        for (int k = 0; k < MAXSEG; k++) {
          if (k >= uNSeg) break;
          ao *= 1.0 - 0.42 * exp(-segDist(vW.xz, uSeg[k]) / 0.28);
        }
        // the inside corner at the back of a tread, where the next riser goes up (and in front of each flight's first)
        if (n.y > 0.9) {
          float t = vW.z < uSt.w ? (uSt.y - vW.x) / uSt.z : (vW.x - uSt.x) / uSt.z;   // steps up its flight
          if (t > -1.0 && t < uN - 1.0) ao *= 1.0 - 0.32 * exp(-(1.0 - fract(t)) * uSt.z / 0.05);
        }
        float lit = 0.80 + 0.20 * clamp(n.y, 0.0, 1.0);
        vec3 base = alb * (vec3(uAmb) * ao * lit);
        vec3 V = normalize(cameraPosition - vW);
        vec3 R = reflect(-V, n);
        vec3 P = vW + R * REACH;
        vec4 pr = uTexMat * vec4(P, 1.0);
        vec2 ruv = pr.xy / pr.w;
        vec2 wob = (vec2(fbm(vW.xz * 7.0 + 3.1), fbm(vW.xz * 7.0 - 7.3)) - 0.5) * 0.010;
        float dist = length(cameraPosition - vW);
        float blur = 0.0035 + 0.006 * smoothstep(1.0, 8.0, dist);
        vec3 rc = vec3(0.0);
        for (int k = 0; k < 8; k++) rc += texture2D(uRefl, ruv + wob + DISC[k] * blur).rgb;
        rc /= 8.0;
        // the white hall, where the mirror has nothing to show
        vec3 hall = mix(vec3(0.30, 0.298, 0.292) * uAmb, vec3(0.72, 0.715, 0.70), smoothstep(-0.25, 0.25, R.y));
        vec2 e = min(ruv, 1.0 - ruv);
        float ok = smoothstep(uLevel + 0.02, uLevel + 0.35, P.y) * smoothstep(0.0, 0.04, min(e.x, e.y)) * step(0.0, pr.w);
        rc = mix(hall, rc, ok);
        float F = 0.045 + 0.955 * pow(1.0 - max(dot(V, n), 0.0), 5.0);
        float gloss = 0.80 * mix(1.0, 0.75, m);
        vec3 col = base * (1.0 - F * gloss) + rc * F * gloss;
        gl_FragColor = vec4(col, 1.0);
        ${OUT}
      }`,
  });
}

/* A painting in its frame. aSide 0 = the painting's face (its photograph), 1 = the canvas's edge (its outermost
   paint), 2 = the frame (a flat colour, aCol). Lit evenly from above: the faces turned up a touch brighter,
   those turned down darker; the photograph itself at full strength. */
export function pictureMaterial(map: THREE.Texture) {
  return new THREE.ShaderMaterial({
    uniforms: { uMap: { value: map } },
    toneMapped: false,
    vertexShader: /* glsl */ `
      attribute float aSide; attribute vec3 aCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vSide; varying vec3 vCol;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vUv = uv; vSide = aSide; vCol = aCol;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D uMap;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vSide; varying vec3 vCol;
      void main() {
        vec3 n = normalize(vN);
        vec3 c = texture2D(uMap, vUv).rgb;
        float lit = 1.0;
        if (vSide > 1.5) { c = vCol; lit = 0.80 + 0.16 * n.y; lit *= 0.93 + 0.07 * abs(dot(n, vec3(0.45, 0.0, 0.893))); }
        else if (vSide > 0.5) lit = 0.62 + 0.2 * n.y;
        gl_FragColor = vec4(c * lit, 1.0);
        #include <colorspace_fragment>
      }`,
  });
}

/* A label card: printed text, lit as the wall is. */
export function labelMaterial(map: THREE.Texture) {
  return new THREE.ShaderMaterial({
    uniforms: { uMap: { value: map } },
    vertexShader: VERT,
    fragmentShader: /* glsl */ `
      uniform sampler2D uMap;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      void main() {
        vec3 c = texture2D(uMap, vUv).rgb;
        gl_FragColor = vec4(c * 0.86, 1.0);
        ${OUT}
      }`,
  });
}

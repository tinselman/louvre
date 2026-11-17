"""Every sculpture on Wikidata that carries a Louvre ARK id, with its picture and any Commons 3D model (P4896).
The query service is rate-limited (one query a minute during its outage), so: one query for every Louvre object's
kind, a wait, one query for which kinds are sculpture, then labels from the action API.
Writes source/wikidata_sculpt.json: [{q, ark, img, label, creator, model, kind}]"""
import json, sys, time, urllib.request, urllib.parse
UA = "LouvreWalkthrough/0.1 (personal non-commercial project)"
def sparql(q):
    for attempt in range(8):
        try:
            req = urllib.request.Request("https://query.wikidata.org/sparql?" + urllib.parse.urlencode({"query": q}),
                                         headers={"User-Agent": UA, "Accept": "application/sparql-results+json"})
            return json.load(urllib.request.urlopen(req, timeout=300))["results"]["bindings"]
        except Exception as e:
            print("wait:", e, flush=True); time.sleep(70)
    raise SystemExit("query service never answered")
qid = lambda u: u.rsplit("/", 1)[1]
# the kinds asked for by name (a subclass walk times out while the service is limited): sculpture, statue, bust, relief
KINDS = {'Q860861': 'sculpture', 'Q179700': 'statue', 'Q241045': 'bust', 'Q245117': 'relief'}
rows = sparql("""SELECT ?i ?ark ?kind ?img ?model ?c WHERE { VALUES ?kind { %s } ?i wdt:P31 ?kind ; wdt:P9394 ?ark .
  OPTIONAL { ?i wdt:P18 ?img } OPTIONAL { ?i wdt:P4896 ?model } OPTIONAL { ?i wdt:P170 ?c } }""" % ' '.join('wd:' + k for k in KINDS))
print(len(rows), "rows", flush=True)
sk = set(KINDS)
out = {}
for r in rows:
    q = qid(r["i"]["value"])
    e = out.setdefault(q, {"q": q, "ark": r["ark"]["value"], "img": None, "label": None, "creator": None, "model": None, "kind": qid(r["kind"]["value"]), "c": None})
    if "img" in r and not e["img"]: e["img"] = urllib.parse.unquote(qid(r["img"]["value"]))
    if "model" in r and not e["model"]: e["model"] = urllib.parse.unquote(qid(r["model"]["value"]))
    if "c" in r and not e["c"]: e["c"] = qid(r["c"]["value"])
# labels (works, creators, kinds) from the action API, 50 at a time
ids = sorted(set(out) | {e["c"] for e in out.values() if e["c"]} | sk)
lab = {}
for k in range(0, len(ids), 50):
    u = "https://www.wikidata.org/w/api.php?" + urllib.parse.urlencode({"action": "wbgetentities", "ids": "|".join(ids[k:k + 50]), "props": "labels", "languages": "en|fr", "format": "json"})
    for attempt in range(6):
        try: got = json.load(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": UA}), timeout=60)); break
        except urllib.error.HTTPError as e:
            print("labels wait:", e.code, flush=True); time.sleep(int(e.headers.get("Retry-After") or 0) or 20 * (attempt + 1))
    else: got = {}
    for i, ent in got.get("entities", {}).items():
        L = ent.get("labels", {}); lab[i] = (L.get("en") or L.get("fr") or {}).get("value")
    time.sleep(1.0)
for e in out.values():
    e["label"] = lab.get(e["q"]); e["creator"] = lab.get(e.pop("c")) if e.get("c") else None; e["kind"] = lab.get(e["kind"])
json.dump(list(out.values()), open(sys.argv[1], "w"), ensure_ascii=False, indent=0)
print(len(out), "sculptures;", sum(1 for e in out.values() if e["img"]), "with a picture;", sum(1 for e in out.values() if e["model"]), "with a Commons 3D model")

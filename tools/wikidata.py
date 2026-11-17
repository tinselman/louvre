"""Every painting on Wikidata that carries a Louvre ARK id, with its Commons picture (if any).
Writes source/wikidata.json: [{q, ark, img, label, creator}]"""
import json, sys, urllib.request, urllib.parse
UA = "LouvreWalkthrough/0.1 (personal non-commercial project)"
Q = """SELECT ?i ?ark ?img ?label ?creator WHERE {
  ?i wdt:P9394 ?ark ; wdt:P31 wd:Q3305213 .
  OPTIONAL { ?i wdt:P18 ?img }
  OPTIONAL { ?i rdfs:label ?label FILTER(LANG(?label)="en") }
  OPTIONAL { ?i wdt:P170 ?c . ?c rdfs:label ?creator FILTER(LANG(?creator)="en") }
}"""
req = urllib.request.Request("https://query.wikidata.org/sparql?" + urllib.parse.urlencode({"query": Q}),
                             headers={"User-Agent": UA, "Accept": "application/sparql-results+json"})
rows = json.load(urllib.request.urlopen(req, timeout=300))["results"]["bindings"]
out = {}
for r in rows:
    q = r["i"]["value"].rsplit("/", 1)[1]
    e = out.setdefault(q, {"q": q, "ark": r["ark"]["value"], "img": None, "label": None, "creator": None})
    if "img" in r and not e["img"]: e["img"] = urllib.parse.unquote(r["img"]["value"].rsplit("/", 1)[1])
    if "label" in r and not e["label"]: e["label"] = r["label"]["value"]
    if "creator" in r and not e["creator"]: e["creator"] = r["creator"]["value"]
json.dump(list(out.values()), open(sys.argv[1], "w"), ensure_ascii=False, indent=0)
print(len(out), "paintings;", sum(1 for e in out.values() if e["img"]), "with a picture")

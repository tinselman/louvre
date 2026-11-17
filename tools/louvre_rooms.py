"""Read each painting's own record on collections.louvre.fr (the .json the Louvre documents for every entry)
and keep where it hangs. Pictured works first. Resumable: appends to source/louvre.jsonl, skips arks
already there. Stops at once if the site answers with its robot check instead of data (never gets round it).
Polite: one connection, one request at a time, a short pause between."""
import json, sys, time, http.client, os
src, out = sys.argv[1], sys.argv[2]
works = json.load(open(src))
works.sort(key=lambda e: e["img"] is None)
done = set()
if os.path.exists(out):
    for line in open(out):
        try: done.add(json.loads(line)["arkId"])
        except Exception: pass
KEEP = ["arkId", "title", "room", "currentLocation", "displayDateCreated", "objectNumber", "creator",
        "dimension", "materialsAndTechniques", "collection", "objectType", "denominationTitle", "isMuseesNationauxRecuperation"]
conn = None
def get(path):
    global conn
    for attempt in range(4):
        try:
            if conn is None: conn = http.client.HTTPSConnection("collections.louvre.fr", timeout=30)
            conn.request("GET", path, headers={"User-Agent": "LouvreWalkthrough/0.1 (personal non-commercial project)", "Accept": "application/json"})
            r = conn.getresponse(); body = r.read()
            return r.status, body
        except Exception as e:
            conn = None; time.sleep(2 + attempt * 3)
    return 0, b""
n = 0
with open(out, "a") as f:
    for e in works:
        if "cl" + e["ark"] in done: continue
        st, body = get('/ark:/53355/cl' + e['ark'].removeprefix('cl') + '.json')
        if st == 404: f.write(json.dumps({"arkId": "cl" + e["ark"], "missing": True}) + "\n"); continue
        if st != 200 or not body.lstrip().startswith(b"{"):
            print(f"STOP at {e['ark']}: status {st}, not data ({body[:80]!r})", flush=True); sys.exit(2)
        d = json.loads(body)
        f.write(json.dumps({k: d.get(k) for k in KEEP}, ensure_ascii=False) + "\n")
        n += 1
        if n % 200 == 0: f.flush(); print(n, "read", flush=True)
        time.sleep(0.15)
print("done", n, flush=True)

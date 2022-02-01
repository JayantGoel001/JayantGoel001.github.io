from glob import glob
import json

files = glob("**/**.json",recursive=True)

for file in files:
    with open(file,"r+") as f:
        d = json.loads(f.read())

    d.pop("posted",None)
    d.pop("version",None)
    d.pop("type",None)
    d.pop("label",None)

    with open(file,"w+") as f:
        json.dump(d,f,separators=(',',':'))

from glob import glob

files = glob("**/**.mtn",recursive=True)

for file in files:
    with open(file,"r+") as f:
        text = f.read()

        text = text.replace("PARAM_","")

    with open(file,"w+") as f:
        f.write(text)

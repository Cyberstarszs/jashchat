import re, json, os, shutil, subprocess
from datetime import datetime

supplier = {
    "followers tiktok": 18876,
    "followers instagram": 34320,
    "likes tiktok": 752,
    "views tiktok": 280,
    "likes instagram": 415
}

poster = {
    'Instagram': {
        'Followers': [
            { "quantity": 50, "price": 4000 },
            { "quantity": 100, "price": 8000 },
            { "quantity": 200, "price": 15000 },
            { "quantity": 300, "price": 22000 },
            { "quantity": 400, "price": 29000 },
            { "quantity": 500, "price": 35000 },
            { "quantity": 1000, "price": 55000 },
            { "quantity": 3000, "price": 150000 }
        ],
        'Likes': [
            { "quantity": 150, "price": 4000 },
            { "quantity": 200, "price": 5000 },
            { "quantity": 300, "price": 6000 },
            { "quantity": 400, "price": 7000 },
            { "quantity": 500, "price": 9000 },
            { "quantity": 700, "price": 11000 },
            { "quantity": 1000, "price": 12000 },
            { "quantity": 3000, "price": 29000 }
        ],
        'Views': [
            { "quantity": 1000, "price": 2000 },
            { "quantity": 2000, "price": 3000 },
            { "quantity": 5000, "price": 4000 },
            { "quantity": 10000, "price": 6000 },
            { "quantity": 15000, "price": 7000 },
            { "quantity": 20000, "price": 8000 },
            { "quantity": 30000, "price": 9000 },
            { "quantity": 50000, "price": 12000 },
            { "quantity": 100000, "price": 15000 }
        ]
    },
    'Tiktok': {
        'Followers': [
            { "quantity": 50, "price": 3000 },
            { "quantity": 100, "price": 7000 },
            { "quantity": 200, "price": 12000 },
            { "quantity": 300, "price": 15000 },
            { "quantity": 400, "price": 21000 },
            { "quantity": 500, "price": 27000 },
            { "quantity": 1000, "price": 46000 },
            { "quantity": 3000, "price": 125000 }
        ],
        'Likes': [
            { "quantity": 150, "price": 2000 },
            { "quantity": 200, "price": 3000 },
            { "quantity": 300, "price": 4000 },
            { "quantity": 400, "price": 5000 },
            { "quantity": 500, "price": 6000 },
            { "quantity": 700, "price": 9000 },
            { "quantity": 1000, "price": 11000 },
            { "quantity": 3000, "price": 23000 }
        ],
        'Views': [
            { "quantity": 1000, "price": 2000 },
            { "quantity": 2000, "price": 3000 },
            { "quantity": 5000, "price": 4000 },
            { "quantity": 10000, "price": 6000 },
            { "quantity": 15000, "price": 7000 },
            { "quantity": 20000, "price": 8000 },
            { "quantity": 30000, "price": 9000 },
            { "quantity": 50000, "price": 12000 },
            { "quantity": 100000, "price": 15000 }
        ],
        'Live Views': [
            { "quantity": 50, "price": 4000 },
            { "quantity": 100, "price": 5000 },
            { "quantity": 200, "price": 7000 },
            { "quantity": 300, "price": 9000 },
            { "quantity": 400, "price": 11000 },
            { "quantity": 500, "price": 13000 },
            { "quantity": 1000, "price": 23000 },
            { "quantity": 3000, "price": 30000 }
        ]
    },
    'YouTube': {
        'Subscribers': [
            { "quantity": 50, "price": 6000 },
            { "quantity": 100, "price": 16000 },
            { "quantity": 200, "price": 24000 },
            { "quantity": 300, "price": 32000 },
            { "quantity": 400, "price": 39000 },
            { "quantity": 500, "price": 48000 },
            { "quantity": 1000, "price": 99000 },
            { "quantity": 3000, "price": 270000 }
        ],
        'Shares': [
            { "quantity": 150, "price": 6000 },
            { "quantity": 200, "price": 7000 },
            { "quantity": 300, "price": 8000 },
            { "quantity": 400, "price": 9000 },
            { "quantity": 500, "price": 10000 },
            { "quantity": 700, "price": 11000 },
            { "quantity": 1000, "price": 13000 },
            { "quantity": 3000, "price": 27000 }
        ],
        'Views': [
            { "quantity": 1000, "price": 14000 },
            { "quantity": 2000, "price": 23000 },
            { "quantity": 5000, "price": 46000 },
            { "quantity": 10000, "price": 97000 },
            { "quantity": 15000, "price": 139000 },
            { "quantity": 20000, "price": 190000 },
            { "quantity": 30000, "price": 285000 },
            { "quantity": 50000, "price": 350000 },
            { "quantity": 100000, "price": 400000 }
        ]
    },
    'Shopee': {
        'Followers': [
            { "quantity": 50, "price": 6000 },
            { "quantity": 100, "price": 7000 },
            { "quantity": 200, "price": 9000 },
            { "quantity": 300, "price": 10000 },
            { "quantity": 400, "price": 11000 },
            { "quantity": 500, "price": 12000 },
            { "quantity": 1000, "price": 18000 },
            { "quantity": 3000, "price": 50000 }
        ]
    }
}

bulan = {
    "januari":1,"februari":2,"maret":3,"april":4,"mei":5,"juni":6,"juli":7,
    "agustus":8,"september":9,"oktober":10,"november":11,"desember":12
}
id_month = {
    1:"Januari",2:"Februari",3:"Maret",4:"April",5:"Mei",6:"Juni",7:"Juli",
    8:"Agustus",9:"September",10:"Oktober",11:"November",12:"Desember"
}

def parse_date(line):
    m = re.search(r"(\d{1,2})/(\d{1,2})/(\d{4})", line)
    if m: return datetime(int(m.group(3)), int(m.group(2)), int(m.group(1)))
    m = re.search(r"(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})", line, re.IGNORECASE)
    if m:
        d = int(m.group(1)); mn = m.group(2).lower(); y = int(m.group(3))
        mm = bulan.get(mn,0)
        if mm: return datetime(y,mm,d)
    return None

def extract_qtys(s):
    t = s.lower().replace("rp","").replace(".","").replace(","," ")
    return [int(n) for n in re.findall(r"\d+", t)]

def extract_total(s):
    t = s.lower().replace("rp","").strip()
    t = t.replace(".","").replace(",","").replace(" ","")
    t = t.replace("rb","000").replace("k","000")
    nums = re.findall(r"\d+", t)
    return int(nums[0]) if nums else 0

def format_date(dt):
    return f"{dt.day:02d} {id_month[dt.month]} {dt.year}"

def harga_poster(jenis, qty):
    low = jenis.lower()
    for platform, kategori in poster.items():
        if platform.lower() in low:
            for layanan, daftar in kategori.items():
                if layanan.lower() in low:
                    for p in daftar:
                        if p["quantity"] == qty: return p["price"]
    return qty

def match_supplier_price(jenis):
    low = jenis.lower()
    if "tiktok" in low:
        if "follower" in low: return supplier.get("followers tiktok")
        if "like" in low: return supplier.get("likes tiktok")
        if "view" in low: return supplier.get("views tiktok")
    if "instagram" in low:
        if "follower" in low: return supplier.get("followers instagram")
        if "like" in low: return supplier.get("likes instagram")
        if "view" in low: return supplier.get("views tiktok")
    return None

def allocate_proportional(total, weights):
    if not weights: return []
    s = sum(weights)
    if s == 0: return [total//len(weights)]*len(weights)
    allocs = [int(total*w/s) for w in weights]
    diff = total - sum(allocs)
    if diff: allocs[0] += diff
    return allocs

def parse_file(path):
    with open(path, encoding="utf-8") as f: 
        txt = f.read()
    blocks = re.split(r"(?:DATA PESANAN)", txt, flags=re.IGNORECASE)
    hasil = []
    for b in blocks:
        tanggal=None; jenis=""; qtys=[]; total=0; link=""
        for line in b.splitlines():
            if not tanggal:
                t = parse_date(line)
                if t: tanggal = t
            if not jenis:
                m = re.search(r"Jenis(?:\s*Pesanan)?\s*[:\-]?\s*(.+)", line, re.IGNORECASE)
                if m:
                    jenis = m.group(1).strip()
                elif any(k in line.lower() for k in ["followers","likes","views","subscribers","shares"]):
                    jenis = line.split(":")[-1].strip()
            if (not qtys) and re.search(r"(jumlah|paket|qty)", line, re.IGNORECASE):
                qtys = extract_qtys(line)
            if (not total) and re.search(r"(total|harga|bayar)", line, re.IGNORECASE):
                total = extract_total(line)
            if (not link) and "http" in line.lower() and "whatsapp" not in line.lower():
                m = re.search(r"https?://[^\s]+", line)
                if m: link = m.group(0).rstrip(".,)")
        if tanggal and jenis and qtys and total and link:
            # normalisasi jenis biar rapi
            jenis = re.sub(r"^[^A-Za-z0-9]+", "", jenis)   # buang simbol di depan
            jenis = re.sub(r"\s+", " ", jenis).strip()     # rapikan spasi

            jenis_list = [j.strip() for j in re.split(r"\+|,", jenis) if j.strip()]
            if len(jenis_list) > 1 and len(qtys) >= len(jenis_list):
                qtys_used = qtys[:len(jenis_list)]
                poster_prices = [harga_poster(j,q) for j,q in zip(jenis_list, qtys_used)]
                allocs = allocate_proportional(total, poster_prices)
                for j,q,alloc in zip(jenis_list, qtys_used, allocs):
                    sup_price = match_supplier_price(j) or 0
                    supply = int(sup_price*q/1000) if sup_price else 0
                    hasil.append((tanggal,j.title(),str(q),alloc,link,supply))
            else:
                q = qtys[0] if qtys else 0
                sup_price = match_supplier_price(jenis) or 0
                supply = int(sup_price*q/1000) if sup_price else 0
                hasil.append((tanggal,jenis.title(),str(q),total,link,supply))
    return hasil


def parse_tanggal_id(s):
    d, b, y = s.split()
    return datetime(int(y), bulan[b.lower()], int(d))

existing=[]
if os.path.exists("transaksi.json"):
    with open("transaksi.json",encoding="utf-8") as f:
        existing=json.load(f)

seen={(h["Tanggal"],h["Jenis"],h["Paket"],h["Link"]) for h in existing}
new=parse_file("data.txt")

before_count=len(existing)
for tgl,jenis,paket,total,link,supply in new:
    k=(format_date(tgl),jenis,paket,link)
    if k not in seen:
        existing.append({
            "Tanggal":format_date(tgl),
            "Jenis":jenis,
            "Paket":paket,
            "Total":total,
            "Link":link,
            "Supply":supply,
            "Untung":total-supply
        })
        seen.add(k)

existing_sorted=sorted(existing,key=lambda x:parse_tanggal_id(x["Tanggal"]))
final=[]
for i,h in enumerate(existing_sorted,1):
    final.append({
        "ID":f"{i:04d}",
        "Tanggal":h["Tanggal"],
        "Jenis":h["Jenis"],
        "Paket":h["Paket"],
        "Total":h["Total"],
        "Link":h["Link"],
        "Supply":h["Supply"],
        "Untung":h["Untung"]
    })
after_count=len(final)

with open("transaksi.json","w",encoding="utf-8") as f:
    json.dump(final,f,ensure_ascii=False,indent=2)

repo_path = r"D:\data"
src = os.path.join(repo_path, "transaksi.json")
dst = os.path.join(repo_path, "hasil_transaksi.json")
shutil.copy(src,dst)
subprocess.run(["git","-C",repo_path,"add",dst],check=True)
subprocess.run(["git","-C",repo_path,"commit","-m","Update hasil_transaksi.json"],check=True)
subprocess.run(["git","-C",repo_path,"push","origin","main"],check=True)

print(f"Selesai. Data awal: {before_count}, setelah update: {after_count}, bertambah: {after_count-before_count}")

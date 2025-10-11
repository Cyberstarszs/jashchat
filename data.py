import re, json, os, shutil, subprocess
from datetime import datetime
import sys, time
from rich.console import Console
from rich.table import Table
from rich.progress import track
from colorama import Fore, Style
import threading
import itertools
import sys
import time

console = Console()

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
    },
    'Aplikasi': {
        'ChatGPT': [
            { "quantity": "1 Bulan 5U (Sharing)", "price": 23000 },
            { "quantity": "1 Minggu (Sharing)", "price": 27000 },
            { "quantity": "1 Bulan 10U", "price": 39000 },
            { "quantity": "1 Bulan 8U", "price": 45000 }
        ],
        'YouTube Premium': [
            { "quantity": "1 Bulan (Famplan)", "price": 13500 },
            { "quantity": "1 Bulan (Individu)", "price": 16500 },
            { "quantity": "3 Bulan (Individu)", "price": 31000 },
            { "quantity": "3 Bulan (Inplan Promo)", "price": 28000 }
        ],
        'Canva Pro': [
            { "quantity": "1 Bulan", "price": 3000 },
            { "quantity": "3 Bulan", "price": 7000 },
            { "quantity": "1 Tahun", "price": 20000 },
            { "quantity": "EDU Lifetime", "price": 27650 }
        ],
        'CapCut Pro': [
            { "quantity": "1 Minggu", "price": 15000 },
            { "quantity": "1 Bulan (Garansi 7 hari)", "price": 20000 },
            { "quantity": "1 Bulan (Full Garansi)", "price": 22000 }
        ],
        'Spotify Premium': [
            { "quantity": "1 Bulan", "price": 23000 },
            { "quantity": "2 Bulan", "price": 27000 }
        ],
        'Vidio': [
            { "quantity": "1 Bulan (Sharing)", "price": 23500 },
            { "quantity": "1 Bulan (Private All Device)", "price": 33000 },
            { "quantity": "1 Tahun (Private TV Only)", "price": 16725 }
        ],
        'Netflix Premium': [
            { "quantity": "1P1U - 1 Minggu", "price": 19850 },
            { "quantity": "1P1U - 1 Bulan", "price": 30000 },
            { "quantity": "1P2U - 1 Minggu", "price": 18650 },
            { "quantity": "1P2U - 1 Bulan", "price": 25000 },
            { "quantity": "Private - 1 Bulan", "price": 105000 }
        ],
        'Remini': [
            { "quantity": "1 Bulan (Web Sharing)", "price": 17500 },
            { "quantity": "1 Tahun (App Android PRO)", "price": 43750 }
        ],
        'Disney+ Hotstar': [
            { "quantity": "1 Minggu (Sharing)", "price": 21000 },
            { "quantity": "1 Bulan (Sharing)", "price": 28000 },
            { "quantity": "1 Bulan (Private)", "price": 70000 }
        ],
        'IQIYI': [
            { "quantity": "1 Bulan (Sharing)", "price": 15475 },
            { "quantity": "1 Bulan (Private)", "price": 36000 }
        ],
        'Zoom Meeting Pro': [
            { "quantity": "14 Hari", "price": 16250 }
        ],
        'WeTV VIP': [
            { "quantity": "1 Bulan (Sharing)", "price": 18000 },
            { "quantity": "1 Bulan (Private)", "price": 37000 }
        ],
        'VSCO': [
            { "quantity": "1 Tahun", "price": 26250 }
        ],
        'VIU Premium': [
            { "quantity": "1 Tahun (Anti Limit)", "price": 12000 },
            { "quantity": "150 Akun", "price": 25000 }
        ],
        'Vision+': [
            { "quantity": "1 Bulan (Sharing)", "price": 16000 },
            { "quantity": "1 Bulan (Code Redeem)", "price": 15625 },
            { "quantity": "1 Bulan (Private)", "price": 18000 }
        ],
        'RCTI+': [
            { "quantity": "1 Bulan (Sharing)", "price": 22000 },
            { "quantity": "1 Bulan (Private)", "price": 33000 }
        ],
        'Picsart': [
            { "quantity": "1 Bulan (Private)", "price": 15000 }
        ],
        'Meitu': [
            { "quantity": "1 Bulan (Sharing)", "price": 23000 },
            { "quantity": "1 Bulan (Private)", "price": 38000 }
        ],
        'HBO': [
            { "quantity": "1 Bulan (Sharing Max)", "price": 25000 },
            { "quantity": "1 Bulan (Sharing GO)", "price": 21250 },
            { "quantity": "1 Bulan (Private Max)", "price": 53000 }
        ],
        'GetContact Premium': [
            { "quantity": "1 Bulan", "price": 18000 }
        ],
        'Amazon Prime Video': [
            { "quantity": "1 Bulan (Sharing)", "price": 17000 },
            { "quantity": "1 Bulan (Private)", "price": 20000 }
        ],
        'Apple Music': [
            { "quantity": "1 Bulan (Famplan)", "price": 14700 },
            { "quantity": "2 Bulan (Famplan)", "price": 17975 },
            { "quantity": "3 Bulan (Famplan)", "price": 25750 },
            { "quantity": "1 Bulan (Famhead)", "price": 19000 }
        ],
        'BStation': [
            { "quantity": "1 Bulan", "price": 16100 },
            { "quantity": "3 Bulan", "price": 19900 },
            { "quantity": "1 Tahun", "price": 22300 }
        ],
        'Netflix Premium 4K': [
    { "quantity": "1P1U - 1 Bulan", "price": 25500 },
    { "quantity": "1P2U - 1 Bulan", "price": 17000 },
    { "quantity": "SemiPriv - 1 Bulan", "price": 30500 },
    { "quantity": "Private - 1 Bulan", "price": 95000 }
],

        'Dramabox': [
            { "quantity": "1 Bulan", "price": 17200 },
            { "quantity": "3 Bulan", "price": 28500 }
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

def animate_loading(text):
    for c in itertools.cycle(['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']):
        if done:
            break
        sys.stdout.write(f'\r{text} {c}')
        sys.stdout.flush()
        time.sleep(0.1)
    sys.stdout.write('\r' + ' ' * (len(text) + 2) + '\r')

def start_animation(text):
    global done
    done = False
    t = threading.Thread(target=animate_loading, args=(text,))
    t.start()
    return t

def stop_animation(thread):
    global done
    done = True
    thread.join()

def print_header():
    console.print("\n" + "="*60, style="bold blue")
    console.print("🤖 SISTEM MANAJEMEN DATA TRANSAKSI", style="bold white on blue", justify="center")
    console.print("="*60, style="bold blue")

def print_success(msg):
    console.print(f"✅ {msg}", style="bold green")

def print_error(msg):
    console.print(f"❌ {msg}", style="bold red")

def print_warning(msg):
    console.print(f"⚠️  {msg}", style="bold yellow")

def print_info(msg):
    console.print(f"ℹ️  {msg}", style="bold cyan")

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
    return f"{dt.day:02d} {id_month[dt.month]} {dt.year}"  # Fixed: dt.month instead of dt.morrow()

def get_durasi_aplikasi(jenis, qty):
    low = jenis.lower()
    for app_name, app_data in poster.get('Aplikasi', {}).items():
        if app_name.lower() in low:
            for p in app_data:
                if p["quantity"] == qty: 
                    return p.get("durasi", "")
    return ""

def harga_poster(jenis, qty):
    low = jenis.lower()
    
    for app_name, app_data in poster.get('Aplikasi', {}).items():
        if app_name.lower() in low:
            for p in app_data:
                if p["quantity"] == qty: 
                    return p["price"]
    
    for platform, kategori in poster.items():
        if platform.lower() in low and platform != 'Aplikasi':
            for layanan, daftar in kategori.items():
                if layanan.lower() in low:
                    for p in daftar:
                        if p["quantity"] == qty: return p["price"]
    return qty

def match_supplier_price(jenis):
    low = jenis.lower()
    
    for app_name in poster.get('Aplikasi', {}).keys():
        if app_name.lower() in low:
            return None
    
    if "tiktok" in low:
        if "follower" in low: return supplier.get("followers tiktok")
        if "like" in low: return supplier.get("likes tiktok")
        if "view" in low: return supplier.get("views tiktok")
    if "instagram" in low:
        if "follower" in low: return supplier.get("followers instagram")
        if "like" in low: return supplier.get("likes instagram")
        if "view" in low: return supplier.get("views tiktok")
    return None

def is_premium_app(jenis):
    low = jenis.lower()
    for app_name in poster.get('Aplikasi', {}).keys():
        if app_name.lower() in low:
            return True
    return False

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
    
    blocks = re.split(r"(?:╭❀「 DATA PESANAN 」|DATA PESANAN)", txt, flags=re.IGNORECASE)
    hasil = []
    
    for b in blocks:
        tanggal=None; jenis=""; qtys=[]; total=0; link=""; id_pesanan=""; durasi=""
        
        for line in b.splitlines():
            line = line.strip()
            
            if not id_pesanan:
                m = re.search(r"ID\s*[:\-]\s*(\d+)", line, re.IGNORECASE)
                if m:
                    id_pesanan = m.group(1).strip()
            
            if not tanggal:
                t = parse_date(line)
                if t: tanggal = t
            
            if not jenis:
                m = re.search(r"Jenis\s*[:\-]\s*(.+)", line, re.IGNORECASE)
                if m:
                    jenis = m.group(1).strip()
                elif any(k in line.lower() for k in ["followers","likes","views","subscribers","shares","iqiyi","netflix","spotify","youtube premium","disney"]):
                    jenis = line.split(":")[-1].strip() if ":" in line else line.strip()
            
            if (not qtys) and re.search(r"(paket|qty|quantity)", line, re.IGNORECASE):
                qtys = extract_qtys(line)
            
            if (not durasi) and re.search(r"(bulan|tahun|minggu|durasi)", line, re.IGNORECASE):
                m = re.search(r"(?:\(([^)]+)\)|(\d+\s*(?:Bulan|Tahun|Minggu).+))", line, re.IGNORECASE)
                if m:
                    durasi = m.group(1) or m.group(2) or ""
            
            if (not total) and re.search(r"(total|harga|bayar|rp)", line, re.IGNORECASE):
                total = extract_total(line)
            
            if (not link) and "http" in line.lower() and "whatsapp" not in line.lower() and "chat.whatsapp" not in line.lower():
                m = re.search(r"https?://[^\s]+", line)
                if m: link = m.group(0).rstrip(".,)")
        
        if tanggal and jenis and total:
            if is_premium_app(jenis) and not qtys:
                qtys = [1]
                if not durasi:
                    durasi = get_durasi_aplikasi(jenis, 1)
            
            if qtys:
                jenis = re.sub(r"^[^A-Za-z0-9]+", "", jenis)
                jenis = re.sub(r"\s+", " ", jenis).strip()
                
                if "+" in jenis and not is_premium_app(jenis):
                    jenis_list = [j.strip() for j in re.split(r"\+", jenis) if j.strip()]
                    if len(jenis_list) > 1 and len(qtys) >= len(jenis_list):
                        qtys_used = qtys[:len(jenis_list)]
                        poster_prices = [harga_poster(j,q) for j,q in zip(jenis_list, qtys_used)]
                        allocs = allocate_proportional(total, poster_prices)
                        for j,q,alloc in zip(jenis_list, qtys_used, allocs):
                            sup_price = match_supplier_price(j) or 0
                            supply = int(sup_price*q/1000) if sup_price else 0
                            hasil.append((tanggal,j.title(),str(q),alloc,link,supply,id_pesanan,""))
                else:
                    q = qtys[0] if qtys else 1
                    sup_price = match_supplier_price(jenis) or 0
                    supply = int(sup_price*q/1000) if sup_price else 0
                    hasil.append((tanggal,jenis.title(),str(q),total,link,supply,id_pesanan,durasi))
    
    return hasil

def parse_tanggal_id(s):
    d, b, y = s.split()
    return datetime(int(y), bulan[b.lower()], int(d))

def run_update_data():
    anim = start_animation("Memproses data transaksi")
    
    existing=[]
    if os.path.exists("transaksi.json"):
        with open("transaksi.json",encoding="utf-8") as f:
            existing=json.load(f)
    seen={(h["Tanggal"],h["Jenis"],h["Paket"],h["Link"]) for h in existing}
    new=parse_file("data.txt")
    
    stop_animation(anim)
    
    if not new:
        print_warning("Tidak ada data baru yang ditemukan")
        return
    
    console.print(f"📊 Ditemukan {len(new)} transaksi baru", style="bold green")
    
    console.print("\n📋 Pilih status untuk transaksi baru:", style="bold")
    console.print("1. ⏳ Pending", style="yellow")
    console.print("2. 🔄 Proses", style="blue")
    console.print("3. ✅ Selesai", style="green")
    
    pilihan_status = console.input("\n🎯 Pilih status [1/2/3]: ").strip()
    
    if pilihan_status == "1":
        keterangan_baru = "pending"
        status_text = "pending"
    elif pilihan_status == "2":
        keterangan_baru = "proses"
        status_text = "proses"
    elif pilihan_status == "3":
        keterangan_baru = "selesai"
        status_text = "selesai"
    else:
        print_error("Pilihan tidak valid")
        return
    
    count_new = 0
    for tgl,jenis,paket,total,link,supply,id_pesanan,durasi in new:
        k=(format_date(tgl),jenis,paket,link)
        if k not in seen:
            data_baru = {
                "Tanggal":format_date(tgl),
                "Jenis":jenis,
                "Paket":paket,
                "Total":total,
                "Link":link,
                "Supply":supply,
                "Untung":total-supply,
                "keterangan":keterangan_baru
            }
            
            if id_pesanan:
                data_baru["ID_Pesanan"] = id_pesanan
            
            if durasi and is_premium_app(jenis):
                data_baru["Durasi"] = durasi
            
            existing.append(data_baru)
            seen.add(k)
            count_new += 1
    
    if count_new == 0:
        print_warning("Tidak ada data baru yang perlu ditambahkan")
        return
    
    anim = start_animation("Menyusun data transaksi")
    existing_sorted=sorted(existing,key=lambda x:parse_tanggal_id(x["Tanggal"]))
    stop_animation(anim)
    
    final=[]
    for i,h in enumerate(existing_sorted,1):
        item_data = {
            "ID":f"{i:04d}",
            "Tanggal":h["Tanggal"],
            "Jenis":h["Jenis"],
            "Paket":h["Paket"],
            "Total":h["Total"],
            "Link":h["Link"],
            "Supply":h["Supply"],
            "Untung":h["Untung"],
            "keterangan":h.get("keterangan",keterangan_baru)
        }
        
        if "ID_Pesanan" in h:
            item_data["ID_Pesanan"] = h["ID_Pesanan"]
        
        if "Durasi" in h:
            item_data["Durasi"] = h["Durasi"]
        
        final.append(item_data)
    
    with open("transaksi.json","w",encoding="utf-8") as f:
        json.dump(final,f,ensure_ascii=False,indent=2)
    
    anim = start_animation("Menyinkronkan dengan repository")
    repo_path = r"D:\data"
    src = os.path.join(repo_path, "transaksi.json")
    dst = os.path.join(repo_path, "hasil_transaksi.json")
    shutil.copy(src,dst)
    
    try:
        with open(os.devnull, "w") as DEVNULL:
            subprocess.run(["git","-C",repo_path,"add",dst], stdout=DEVNULL, stderr=DEVNULL, check=True)
            
            result = subprocess.run(["git","-C",repo_path,"diff","--cached","--quiet"], 
                                  stdout=DEVNULL, stderr=DEVNULL)
            
            if result.returncode == 0:
                print_warning("Tidak ada perubahan yang perlu di-commit")
            else:
                subprocess.run(["git","-C",repo_path,"commit","-m",f"Update data transaksi dengan status {status_text}"], 
                              stdout=DEVNULL, stderr=DEVNULL, check=True)
                subprocess.run(["git","-C",repo_path,"push","origin","main"], 
                              stdout=DEVNULL, stderr=DEVNULL, check=True)
                print_success(f"Update data selesai dengan status {status_text} dan telah disinkronkan")
    
    except subprocess.CalledProcessError as e:
        print_error(f"Terjadi kesalahan dalam proses Git: {e}")
    
    stop_animation(anim)

def run_update_status():
    if not os.path.exists("transaksi.json"):
        print_error("File transaksi.json tidak ditemukan")
        return
    
    with open("transaksi.json", encoding="utf-8") as f:
        data = json.load(f)
    
    console.print("\n📋 Daftar Transaksi", style="bold underline")
    table = Table(show_header=True, header_style="bold magenta")
    table.add_column("ID", style="cyan", width=6)
    table.add_column("Tanggal", style="green", width=15)
    table.add_column("Jenis", width=20)
    table.add_column("Paket", width=15)
    table.add_column("Status", width=10)
    
    for item in data:
        paket_display = item["Paket"]
        if "Durasi" in item:
            paket_display = f"{item['Paket']} {item['Durasi']}"
        
        status_color = "green" if item["keterangan"] == "selesai" else "yellow" if item["keterangan"] == "proses" else "red"
        table.add_row(
            item["ID"],
            item["Tanggal"],
            item["Jenis"],
            paket_display,
            f"[{status_color}]{item['keterangan']}[/{status_color}]"
        )
    
    console.print(table)
    
    id_input = console.input("\n🎯 Masukkan ID transaksi yang ingin diubah: ").strip()
    
    found = False
    for item in data:
        if item["ID"] == id_input:
            found = True
            old_status = item["keterangan"]
            console.print(f"\n📝 Transaksi ditemukan: {item['Jenis']}")
            
            paket_display = item["Paket"]
            if "Durasi" in item:
                paket_display = f"{item['Paket']} {item['Durasi']}"
            
            console.print(f"Paket: {paket_display}")
            console.print(f"Status saat ini: {old_status}")
            console.print("📋 Pilih status baru:", style="bold")
            console.print("1. ⏳ Pending", style="yellow")
            console.print("2. 🔄 Proses", style="blue")
            console.print("3. ✅ Selesai", style="green")
            
            pilihan_status = console.input("\n🎯 Pilih status [1/2/3]: ").strip()
            
            if pilihan_status == "1":
                item["keterangan"] = "pending"
                status_text = "pending"
            elif pilihan_status == "2":
                item["keterangan"] = "proses"
                status_text = "proses"
            elif pilihan_status == "3":
                item["keterangan"] = "selesai"
                status_text = "selesai"
            else:
                print_error("Pilihan tidak valid")
                return
            
            if old_status == status_text:
                print_warning(f"Status sudah '{status_text}', tidak ada perubahan")
                return
            
            with open("transaksi.json", "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            
            anim = start_animation("Menyinkronkan perubahan ke repository")
            repo_path = r"D:\data"
            src = os.path.join(repo_path, "transaksi.json")
            dst = os.path.join(repo_path, "hasil_transaksi.json")
            shutil.copy(src, dst)
            
            try:
                with open(os.devnull, "w") as DEVNULL:
                    subprocess.run(["git","-C",repo_path,"add",dst], stdout=DEVNULL, stderr=DEVNULL, check=True)
                    
                    result = subprocess.run(["git","-C",repo_path,"diff","--cached","--quiet"], 
                                          stdout=DEVNULL, stderr=DEVNULL)
                    
                    if result.returncode == 0:
                        print_warning("Tidak ada perubahan yang perlu di-commit")
                    else:
                        subprocess.run(["git","-C",repo_path,"commit","-m",f"Update status transaksi {id_input} menjadi {status_text}"], 
                                      stdout=DEVNULL, stderr=DEVNULL, check=True)
                        subprocess.run(["git","-C",repo_path,"push","origin","main"], 
                                      stdout=DEVNULL, stderr=DEVNULL, check=True)
                        print_success(f"Status transaksi {id_input} berhasil diubah menjadi {status_text}")
            
            except subprocess.CalledProcessError as e:
                print_error(f"Terjadi kesalahan dalam proses Git: {e}")
            
            stop_animation(anim)
            break
    
    if not found:
        print_error(f"Transaksi dengan ID {id_input} tidak ditemukan")

def run_delete_data():
    if not os.path.exists("transaksi.json"):
        print_error("File transaksi.json tidak ditemukan")
        return
    
    with open("transaksi.json", encoding="utf-8") as f:
        data = json.load(f)
    
    console.print("\n🗑️  Daftar Transaksi yang Dapat Dihapus", style="bold underline")
    table = Table(show_header=True, header_style="bold magenta")
    table.add_column("ID", style="cyan", width=6)
    table.add_column("Tanggal", style="green", width=15)
    table.add_column("Jenis", width=20)
    table.add_column("Paket", width=15)
    table.add_column("Total", width=12)
    table.add_column("Status", width=10)
    
    for item in data:
        paket_display = item["Paket"]
        if "Durasi" in item:
            paket_display = f"{item['Paket']} {item['Durasi']}"
        
        status_color = "green" if item["keterangan"] == "selesai" else "yellow" if item["keterangan"] == "proses" else "red"
        table.add_row(
            item["ID"],
            item["Tanggal"],
            item["Jenis"],
            paket_display,
            f"Rp {item['Total']:,}",
            f"[{status_color}]{item['keterangan']}[/{status_color}]"
        )
    
    console.print(table)
    
    id_input = console.input("\n🎯 Masukkan ID transaksi yang ingin dihapus: ").strip()
    
    found = False
    for i, item in enumerate(data):
        if item["ID"] == id_input:
            found = True
            console.print(f"\n📝 Transaksi yang akan dihapus:", style="bold red")
            console.print(f"ID: {item['ID']}")
            console.print(f"Tanggal: {item['Tanggal']}")
            console.print(f"Jenis: {item['Jenis']}")
            
            paket_display = item["Paket"]
            if "Durasi" in item:
                paket_display = f"{item['Paket']} {item['Durasi']}"
            
            console.print(f"Paket: {paket_display}")
            console.print(f"Total: Rp {item['Total']:,}")
            console.print(f"Status: {item['keterangan']}")
            
            konfirmasi = console.input("\n❓ Apakah Anda yakin ingin menghapus transaksi ini? (y/N): ").strip().lower()
            
            if konfirmasi == 'y':
                del data[i]
                
                final=[]
                for idx, h in enumerate(data, 1):
                    item_data = {
                        "ID":f"{idx:04d}",
                        "Tanggal":h["Tanggal"],
                        "Jenis":h["Jenis"],
                        "Paket":h["Paket"],
                        "Total":h["Total"],
                        "Link":h["Link"],
                        "Supply":h["Supply"],
                        "Untung":h["Untung"],
                        "keterangan":h["keterangan"]
                    }
                    
                    if "ID_Pesanan" in h:
                        item_data["ID_Pesanan"] = h["ID_Pesanan"]
                    
                    if "Durasi" in h:
                        item_data["Durasi"] = h["Durasi"]
                    
                    final.append(item_data)
                
                with open("transaksi.json", "w", encoding="utf-8") as f:
                    json.dump(final, f, ensure_ascii=False, indent=2)
                
                anim = start_animation("Menghapus data dan menyinkronkan ke repository")
                repo_path = r"D:\data"
                src = os.path.join(repo_path, "transaksi.json")
                dst = os.path.join(repo_path, "hasil_transaksi.json")
                shutil.copy(src, dst)
                
                try:
                    with open(os.devnull, "w") as DEVNULL:
                        subprocess.run(["git","-C",repo_path,"add",dst], stdout=DEVNULL, stderr=DEVNULL, check=True)
                        
                        result = subprocess.run(["git","-C",repo_path,"diff","--cached","--quiet"], 
                                              stdout=DEVNULL, stderr=DEVNULL)
                        
                        if result.returncode == 0:
                            print_warning("Tidak ada perubahan yang perlu di-commit")
                        else:
                            subprocess.run(["git","-C",repo_path,"commit","-m",f"Hapus transaksi {id_input}"], 
                                          stdout=DEVNULL, stderr=DEVNULL, check=True)
                            subprocess.run(["git","-C",repo_path,"push","origin","main"], 
                                          stdout=DEVNULL, stderr=DEVNULL, check=True)
                            print_success(f"Transaksi {id_input} berhasil dihapus dan telah disinkronkan")
                
                except subprocess.CalledProcessError as e:
                    print_error(f"Terjadi kesalahan dalam proses Git: {e}")
                
                stop_animation(anim)
            else:
                print_warning("Penghapusan transaksi dibatalkan")
            break
    
    if not found:
        print_error(f"Transaksi dengan ID {id_input} tidak ditemukan")

def run_hitung_keuntungan():
    if not os.path.exists("transaksi.json"):
        print_error("File transaksi.json tidak ditemukan")
        return
    
    with open("transaksi.json", encoding="utf-8") as f:
        data = json.load(f)
    
    anim = start_animation("Menghitung total keuntungan")
    
    total_penjualan = 0
    total_supply = 0
    total_untung = 0
    
    for item in data:
        if item["keterangan"] == "selesai":
            total_penjualan += item["Total"]
            total_supply += item["Supply"]
            total_untung += item["Untung"]
    
    stop_animation(anim)
    
    console.print("\n💰 LAPORAN KEUANGAN", style="bold underline")
    console.print("="*40, style="bold blue")
    console.print(f"📈 Total Penjualan: Rp {total_penjualan:,}", style="bold green")
    console.print(f"📉 Total Modal/Supply: Rp {total_supply:,}", style="bold yellow")
    console.print(f"💵 Total Keuntungan Bersih: Rp {total_untung:,}", style="bold cyan")
    console.print("="*40, style="bold blue")
    
    if total_penjualan > 0:
        margin = (total_untung / total_penjualan) * 100
        console.print(f"📊 Margin Keuntungan: {margin:.2f}%", style="bold white")

def main_menu():
    while True:
        print_header()
        console.print("📋 Menu Utama", style="bold underline")
        console.print("1. 🔄 Update Data Transaksi", style="bold yellow")
        console.print("2. 📝 Update Status Transaksi", style="bold cyan")
        console.print("3. 🗑️  Hapus Data Transaksi", style="bold red")
        console.print("4. 💰 Hitung Keuntungan", style="bold green")
        console.print("5. ❌ Keluar", style="bold magenta")
        
        pilihan = console.input("\n🎯 Pilih menu [1/2/3/4/5]: ").strip()
        
        if pilihan == "1":
            run_update_data()
        elif pilihan == "2":
            run_update_status()
        elif pilihan == "3":
            run_delete_data()
        elif pilihan == "4":
            run_hitung_keuntungan()
        elif pilihan == "5":
            console.print("\n" + "="*60, style="bold blue")
            console.print("✨ Terima kasih telah menggunakan sistem ini", style="bold white on blue", justify="center")
            console.print("="*60 + "\n", style="bold blue")
            break
        else:
            print_error("Pilihan tidak valid.")
        
        if pilihan != "5":
            lanjut = console.input("\n🔄 Apakah ingin melanjutkan ke menu lain? (y/N): ").strip().lower()
            if lanjut != 'y':
                console.print("\n" + "="*60, style="bold blue")
                console.print("✨ Terima kasih telah menggunakan sistem ini", style="bold white on blue", justify="center")
                console.print("="*60 + "\n", style="bold blue")
                break

if __name__ == "__main__":
    done = False
    main_menu()
const platformSelect = document.getElementById('platform');
const serviceSelect = document.getElementById('service');
const pricingOptions = document.getElementById('pricingOptions');
const pricingGrid = document.getElementById('pricingGrid');
const accountLinkGroup = document.getElementById('accountLinkGroup');
const videoLinkGroup = document.getElementById('videoLinkGroup');
const pricingDisplay = document.getElementById('pricingDisplay');
const totalPriceElement = document.getElementById('totalPrice');
const orderBtn = document.getElementById('orderBtn');
const activeOrderList = document.getElementById('activeOrderList');
const orderListBody = document.getElementById('orderListBody');
const orderSearch = document.getElementById('orderSearch');
const statusFilter = document.getElementById('statusFilter');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');
const darkModeToggle = document.getElementById('darkModeToggle');
const servicesSection = document.getElementById('servicesSection');
const orderFormSection = document.getElementById('orderFormSection');
const fullOrderList = document.getElementById('fullOrderList');
const viewAllOrders = document.getElementById('viewAllOrders');
const pageTitle = document.getElementById('pageTitle');
const navItems = document.querySelectorAll('.nav-item');
const promoSection = document.getElementById('promoSection');
const premiumAppsSection = document.getElementById('premiumAppsSection');
const premiumAppsGrid = document.getElementById('premiumAppsGrid');
const notificationModal = document.getElementById('notificationModal');
const closeModal = document.getElementById('closeModal');
const understandBtn = document.getElementById('understandBtn');

const WHATSAPP_NUMBER = '6281324919799';

const orderData = [
    { id: 'jashub0001', kategori: 'Tiktok Followers', layanan: 110, tanggal: '2025-06-13 11:00:00', status: 'Success' },
    { id: 'jashub0002', kategori: 'Tiktok Followers', layanan: 120, tanggal: '2025-06-13 12:00:00', status: 'Success' },
    { id: 'jashub0003', kategori: 'Tiktok Followers', layanan: 130, tanggal: '2025-06-13 13:00:00', status: 'Success' },
    { id: 'jashub0004', kategori: 'Tiktok Followers', layanan: 140, tanggal: '2025-06-14 10:00:00', status: 'Success' },
    { id: 'jashub0005', kategori: 'Tiktok Followers', layanan: 150, tanggal: '2025-06-14 11:00:00', status: 'Success' },
    { id: 'jashub0006', kategori: 'Tiktok Followers', layanan: 300, tanggal: '2025-06-14 08:13:00', status: 'Success' },
    { id: 'jashub0007', kategori: 'Tiktok Likes', layanan: 200, tanggal: '2025-06-14 06:37:02', status: 'Success' },
    { id: 'jashub0008', kategori: 'Tiktok Followers', layanan: 100, tanggal: '2025-06-13 18:16:59', status: 'Success' },
    { id: 'jashub0009', kategori: 'Tiktok Followers', layanan: 100, tanggal: '2025-06-17 11:30:52', status: 'Success' },
    { id: 'jashub0010', kategori: 'Tiktok Followers', layanan: 100, tanggal: '2025-06-17 11:19:42', status: 'Success' },
    { id: 'jashub0011', kategori: 'Tiktok Followers', layanan: 600, tanggal: '2025-06-17 13:48:07', status: 'Success' },
    { id: 'jashub0012', kategori: 'Tiktok Likes', layanan: 100, tanggal: '2025-06-17 14:27:29', status: 'Success' },
    { id: 'jashub0013', kategori: 'Tiktok Followers', layanan: 600, tanggal: '2025-06-17 21:53:43', status: 'Success' },
    { id: 'jashub0014', kategori: 'Instagram Followers', layanan: 100, tanggal: '2025-06-18 11:24:30', status: 'Success' },
    { id: 'jashub0015', kategori: 'Instagram Followers', layanan: 300, tanggal: '2025-06-18 10:37:14', status: 'Success' },
    { id: 'jashub0016', kategori: 'Instagram Followers', layanan: 200, tanggal: '2025-06-18 14:48:08', status: 'Success' },
    { id: 'jashub0017', kategori: 'Tiktok Followers', layanan: 700, tanggal: '2025-06-18 15:29:33', status: 'Success' },
    { id: 'jashub0018', kategori: 'Tiktok Followers', layanan: 100, tanggal: '2025-06-18 21:00:33', status: 'Success' },
    { id: 'jashub0019', kategori: 'Tiktok Followers', layanan: 200, tanggal: '2025-06-18 21:02:34', status: 'Success' },
    { id: 'jashub0020', kategori: 'Instagram Followers', layanan: 300, tanggal: '2025-06-19 13:15:14', status: 'Success' },
    { id: 'jashub0021', kategori: 'Instagram Followers', layanan: 400, tanggal: '2025-06-19 20:54:29', status: 'Success' },
    { id: 'jashub0022', kategori: 'Instagram Followers', layanan: 400, tanggal: '2025-06-19 22:34:37', status: 'Success' },
    { id: 'jashub0023', kategori: 'Instagram Followers', layanan: 400, tanggal: '2025-06-19 22:38:12', status: 'Success' },
    { id: 'jashub0024', kategori: 'Tiktok Followers', layanan: 200, tanggal: '2025-06-20 17:47:18', status: 'Success' },
    { id: 'jashub0025', kategori: 'Tiktok Followers', layanan: 300, tanggal: '2025-06-22 22:11:19', status: 'Success' },
    { id: 'jashub0026', kategori: 'Tiktok Likes', layanan: 50, tanggal: '2025-06-22 22:51:58', status: 'Success' },
    { id: 'jashub0027', kategori: 'Tiktok Followers', layanan: 100, tanggal: '2025-06-23 15:49:08', status: 'Success' },
    { id: 'jashub0028', kategori: 'Tiktok Followers', layanan: 400, tanggal: '2025-06-24 11:32:40', status: 'Success' },
    { id: 'jashub0029', kategori: 'Tiktok Followers', layanan: 200, tanggal: '2025-06-24 17:04:27', status: 'Success' },
    { id: 'jashub0030', kategori: 'Tiktok Likes', layanan: 150, tanggal: '2025-06-24 20:28:23', status: 'Success' },
    { id: 'jashub0031', kategori: 'Tiktok Followers', layanan: 700, tanggal: '2025-06-24 20:51:12', status: 'Success' },
    { id: 'jashub0032', kategori: 'Tiktok Followers', layanan: 100, tanggal: '2025-06-24 20:59:43', status: 'Success' },
    { id: 'jashub0033', kategori: 'Tiktok Likes', layanan: 100, tanggal: '2025-06-24 21:06:10', status: 'Success' },
    { id: 'jashub0034', kategori: 'Tiktok Likes', layanan: 100, tanggal: '2025-06-24 21:21:17', status: 'Success' },
    { id: 'jashub0035', kategori: 'Tiktok Likes', layanan: 700, tanggal: '2025-06-25 05:49:18', status: 'Success' },
    { id: 'jashub0036', kategori: 'Tiktok Likes', layanan: 200, tanggal: '2025-06-25 05:52:01', status: 'Success' },
    { id: 'jashub0037', kategori: 'Tiktok Views', layanan: 20000, tanggal: '2025-06-25 05:53:16', status: 'Success' },
    { id: 'jashub0038', kategori: 'Tiktok Followers', layanan: 1010, tanggal: '2025-06-26 13:38:23', status: 'Success' },
    { id: 'jashub0039', kategori: 'Tiktok Views', layanan: 30000, tanggal: '2025-06-26 14:55:12', status: 'Success' },
    { id: 'jashub0040', kategori: 'Tiktok Likes', layanan: 3000, tanggal: '2025-06-26 15:02:06', status: 'Success' },
    { id: 'jashub0041', kategori: 'Instagram Followers', layanan: 100, tanggal: '2025-06-26 16:58:19', status: 'Success' },
    { id: 'jashub0042', kategori: 'Instagram Likes', layanan: 2000, tanggal: '2025-06-26 17:02:04', status: 'Success' },
    { id: 'jashub0043', kategori: 'Tiktok Likes', layanan: 200, tanggal: '2025-06-26 17:40:10', status: 'Success' },
    { id: 'jashub0044', kategori: 'Tiktok Likes', layanan: 200, tanggal: '2025-06-26 17:40:45', status: 'Success' },
    { id: 'jashub0045', kategori: 'Instagram Followers', layanan: 400, tanggal: '2025-06-26 19:50:23', status: 'Success' },
    { id: 'jashub0046', kategori: 'Tiktok Views', layanan: 16000, tanggal: '2025-06-26 20:19:15', status: 'Success' },
    { id: 'jashub0047', kategori: 'Instagram Followers', layanan: 20, tanggal: '2025-06-27 05:37:02', status: 'Success' },
    { id: 'jashub0048', kategori: 'Tiktok Followers', layanan: 360, tanggal: '2025-06-27 10:47:30', status: 'Success' },
    { id: 'jashub0049', kategori: 'Instagram Followers', layanan: 100, tanggal: '2025-06-27 10:51:03', status: 'Success' }
];

orderData.sort((a, b) => {
    const numA = parseInt(a.id.replace('jashub', ''));
    const numB = parseInt(b.id.replace('jashub', ''));
    return numB - numA;
});

const pricingData = {
    'Instagram': {
        'Followers': [
            { quantity: 50, price: 3000 },
            { quantity: 100, price: 6000 },
            { quantity: 200, price: 9000 },
            { quantity: 300, price: 12000 },
            { quantity: 400, price: 14000 },
            { quantity: 500, price: 16000 },
            { quantity: 600, price: 18000 },
            { quantity: 700, price: 20000 },
            { quantity: 800, price: 22000 },
            { quantity: 900, price: 25000 },
            { quantity: 1000, price: 27000 },
            { quantity: 3000, price: 70000 }
        ],
        'Likes': [
            { quantity: 150, price: 2000 },
            { quantity: 200, price: 3000 },
            { quantity: 300, price: 4000 },
            { quantity: 400, price: 5000 },
            { quantity: 500, price: 6000 },
            { quantity: 600, price: 7000 },
            { quantity: 700, price: 8000 },
            { quantity: 800, price: 9000 },
            { quantity: 900, price: 10000 },
            { quantity: 1000, price: 11000 },
            { quantity: 3000, price: 23000 }
        ],
        'Views': [
            { quantity: 15000, price: 3000 },
            { quantity: 20000, price: 4000 },
            { quantity: 30000, price: 5000 },
            { quantity: 40000, price: 6000 },
            { quantity: 50000, price: 7000 },
            { quantity: 70000, price: 8000 },
            { quantity: 100000, price: 13000 }
        ]
    },
    'Tiktok': {
        'Followers': [
            { quantity: 50, price: 3000 },
            { quantity: 100, price: 7000 },
            { quantity: 200, price: 12000 },
            { quantity: 300, price: 16000 },
            { quantity: 400, price: 21000 },
            { quantity: 500, price: 25000 },
            { quantity: 600, price: 27000 },
            { quantity: 700, price: 32000 },
            { quantity: 800, price: 36000 },
            { quantity: 900, price: 41000 },
            { quantity: 1000, price: 46000 },
            { quantity: 3000, price: 125000 }
        ],
        'Likes': [
            { quantity: 150, price: 2000 },
            { quantity: 200, price: 3000 },
            { quantity: 300, price: 4000 },
            { quantity: 400, price: 5000 },
            { quantity: 500, price: 6000 },
            { quantity: 600, price: 7000 },
            { quantity: 700, price: 8000 },
            { quantity: 800, price: 9000 },
            { quantity: 900, price: 10000 },
            { quantity: 1000, price: 11000 },
            { quantity: 3000, price: 23000 }
        ],
        'Views': [
            { quantity: 1000, price: 2000 },
            { quantity: 2000, price: 3000 },
            { quantity: 5000, price: 4000 },
            { quantity: 10000, price: 6000 },
            { quantity: 15000, price: 7000 },
            { quantity: 20000, price: 8000 },
            { quantity: 30000, price: 9000 },
            { quantity: 40000, price: 10000 },
            { quantity: 50000, price: 11000 },
            { quantity: 70000, price: 13000 },
            { quantity: 100000, price: 15000 }
        ],
        'Live Views': [
            { quantity: 50, price: 4000 },
            { quantity: 100, price: 5000 },
            { quantity: 150, price: 6000 },
            { quantity: 200, price: 7000 },
            { quantity: 250, price: 8000 },
            { quantity: 300, price: 9000 },
            { quantity: 350, price: 10000 },
            { quantity: 400, price: 11000 },
            { quantity: 450, price: 12000 },
            { quantity: 500, price: 13000 },
            { quantity: 550, price: 14000 },
            { quantity: 600, price: 15000 },
            { quantity: 650, price: 16000 },
            { quantity: 700, price: 17000 },
            { quantity: 750, price: 18000 },
            { quantity: 800, price: 19000 },
            { quantity: 850, price: 20000 },
            { quantity: 900, price: 21000 },
            { quantity: 950, price: 22000 },
            { quantity: 1000, price: 23000 }
        ]
    },
    'YouTube': {
        'Subscribers': [
            { quantity: 50, price: 6000 },
            { quantity: 100, price: 16000 },
            { quantity: 200, price: 24000 },
            { quantity: 300, price: 32000 },
            { quantity: 400, price: 40000 },
            { quantity: 500, price: 48000 },
            { quantity: 600, price: 58000 },
            { quantity: 700, price: 69000 },
            { quantity: 800, price: 78000 },
            { quantity: 900, price: 85000 },
            { quantity: 1000, price: 93000 },
            { quantity: 3000, price: 270000 }
        ],
        'Shares': [
            { quantity: 500, price: 6000 },
            { quantity: 600, price: 7000 },
            { quantity: 700, price: 8000 },
            { quantity: 800, price: 9000 },
            { quantity: 900, price: 10000 },
            { quantity: 1000, price: 11000 },
            { quantity: 2000, price: 13000 },
            { quantity: 3000, price: 14000 },
            { quantity: 4000, price: 15000 },
            { quantity: 5000, price: 16000 },
            { quantity: 10000, price: 20000 }
        ],
        'Views': [
            { quantity: 1000, price: 14000 },
            { quantity: 2000, price: 23000 },
            { quantity: 5000, price: 46000 },
            { quantity: 10000, price: 97000 },
            { quantity: 15000, price: 139000 },
            { quantity: 20000, price: 190000 },
            { quantity: 30000, price: 285000 },
            { quantity: 40000, price: 378000 },
            { quantity: 50000, price: 450000 },
            { quantity: 70000, price: 656000 },
            { quantity: 100000, price: 937000 }
        ]
    },
    'Shopee': {
        'Followers': [
            { quantity: 50, price: 6000 },
            { quantity: 100, price: 7000 },
            { quantity: 150, price: 8000 },
            { quantity: 200, price: 9000 },
            { quantity: 250, price: 9500 },
            { quantity: 300, price: 10000 },
            { quantity: 350, price: 10500 },
            { quantity: 400, price: 11000 },
            { quantity: 450, price: 11500 },
            { quantity: 500, price: 12000 },
            { quantity: 550, price: 13000 },
            { quantity: 600, price: 13500 },
            { quantity: 650, price: 14000 },
            { quantity: 700, price: 14500 },
            { quantity: 750, price: 15000 },
            { quantity: 800, price: 15500 },
            { quantity: 850, price: 16000 },
            { quantity: 900, price: 16500 },
            { quantity: 950, price: 17000 },
            { quantity: 1000, price: 18000 }
        ]
    },
    'Premium Apps': {
        'ChatGPT': [
            { quantity: '1 Bulan 5U (Sharing)', price: 18000 },
            { quantity: '1 Minggu (Sharing)', price: 22000 },
            { quantity: '1 Bulan 10U', price: 34000 },
            { quantity: '1 Bulan 8U', price: 40000 }
        ],
        'YouTube Premium': [
            { quantity: '1 Bulan (Famplan)', price: 8500 },
            { quantity: '1 Bulan (Individu)', price: 11500 },
            { quantity: '3 Bulan (Individu)', price: 26000 },
            { quantity: '3 Bulan (Inplan Promo)', price: 23000 }
        ],
        'Canva Pro': [
            { quantity: '1 Bulan', price: 3000 },
            { quantity: '3 Bulan', price: 7000 },
            { quantity: '1 Tahun', price: 15000 },
            { quantity: 'EDU Lifetime', price: 22650 }
        ],
        'CapCut Pro': [
            { quantity: '1 Minggu', price: 10000 },
            { quantity: '1 Bulan (Garansi 7 hari)', price: 15000 },
            { quantity: '1 Bulan (Full Garansi)', price: 17000 }
        ],
        'Spotify Premium': [
            { quantity: '1 Bulan', price: 18000 },
            { quantity: '2 Bulan', price: 22000 }
        ],
        'Vidio': [
            { quantity: '1 Bulan (Sharing)', price: 18500 },
            { quantity: '1 Bulan (Private All Device)', price: 28000 },
            { quantity: '1 Tahun (Private TV Only)', price: 11725 }
        ],
        'Netflix Premium': [
            { quantity: '1P1U - 1 Minggu', price: 14850 },
            { quantity: '1P1U - 1 Bulan', price: 25000 },
            { quantity: '1P2U - 1 Minggu', price: 13650 },
            { quantity: '1P2U - 1 Bulan', price: 20000 },
            { quantity: 'Private - 1 Bulan', price: 100000 }
        ],
        'Remini': [
            { quantity: '1 Bulan (Web Sharing)', price: 12500 },
            { quantity: '1 Tahun (App Android PRO)', price: 38750 }
        ],
        'Disney+ Hotstar': [
            { quantity: '1 Minggu (Sharing)', price: 16000 },
            { quantity: '1 Bulan (Sharing)', price: 23000 },
            { quantity: '1 Bulan (Private)', price: 65000 }
        ],
        'IQIYI': [
            { quantity: '1 Bulan (Sharing)', price: 10475 },
            { quantity: '1 Bulan (Private)', price: 31000 }
        ],
        'Zoom Meeting Pro': [
            { quantity: '14 Hari', price: 11250 }
        ],
        'WeTV VIP': [
            { quantity: '1 Bulan (Sharing)', price: 13000 },
            { quantity: '1 Bulan (Private)', price: 32000 }
        ],
        'VSCO': [
            { quantity: '1 Tahun', price: 21250 }
        ],
        'VIU Premium': [
            { quantity: '1 Tahun (Anti Limit)', price: 7000 },
            { quantity: '150 Akun', price: 20000 }
        ],
        'Vision+': [
            { quantity: '1 Bulan (Sharing)', price: 11000 },
            { quantity: '1 Bulan (Code Redeem)', price: 10625 },
            { quantity: '1 Bulan (Private)', price: 13000 }
        ],
        'RCTI+': [
            { quantity: '1 Bulan (Sharing)', price: 17000 },
            { quantity: '1 Bulan (Private)', price: 28000 }
        ],
        'Picsart': [
            { quantity: '1 Bulan (Private)', price: 10000 }
        ],
        'Meitu': [
            { quantity: '1 Bulan (Sharing)', price: 18000 },
            { quantity: '1 Bulan (Private)', price: 33000 }
        ],
        'HBO': [
            { quantity: '1 Bulan (Sharing Max)', price: 20000 },
            { quantity: '1 Bulan (Sharing GO)', price: 16250 },
            { quantity: '1 Bulan (Private Max)', price: 48000 }
        ],
        'GetContact Premium': [
            { quantity: '1 Bulan', price: 13000 }
        ],
        'Amazon Prime Video': [
            { quantity: '1 Bulan (Sharing)', price: 12000 },
            { quantity: '1 Bulan (Private)', price: 15000 }
        ],
        'Apple Music': [
            { quantity: '1 Bulan (Famplan)', price: 9700 },
            { quantity: '2 Bulan (Famplan)', price: 12975 },
            { quantity: '3 Bulan (Famplan)', price: 20750 },
            { quantity: '1 Bulan (Famhead)', price: 14000 }
        ],
        'BStation': [
            { quantity: '1 Bulan', price: 11100 },
            { quantity: '3 Bulan', price: 14900 },
            { quantity: '1 Tahun', price: 17300 }
        ],
        'Dramabox': [
            { quantity: '1 Bulan', price: 12200 },
            { quantity: '3 Bulan', price: 23500 }
        ],
        'Instagram Followers': [
            { quantity: '100 Followers', price: 14500 }
        ],
        'TikTok Followers': [
            { quantity: '100 Followers', price: 14500 }
        ],
        'Adobe Creative Cloud': [
            { quantity: 'Semua Versi', price: 'Chat admin untuk tanya harga' }
        ],
        'Microsoft 365': [
            { quantity: 'Semua Paket', price: 'Chat admin untuk tanya harga' }
        ],
        'Google One': [
            { quantity: 'Semua Penyimpanan', price: 'Chat admin untuk tanya harga' }
        ],
        'Turnitin': [
            { quantity: 'Cek Plagiarisme', price: 'Chat admin untuk tanya harga' }
        ],
        'Grammarly Premium': [
            { quantity: 'Semua Durasi', price: 'Chat admin untuk tanya harga' }
        ],
        'WPS Premium': [
            { quantity: 'Semua Versi', price: 'Chat admin untuk tanya harga' }
        ],
        'Windows 10/11 Pro': [
            { quantity: 'Lisensi Asli', price: 'Chat admin untuk tanya harga' }
        ],
        'Office 2019/2021': [
            { quantity: 'Paket Lengkap', price: 'Chat admin untuk tanya harga' }
        ],
        'CapCut Web Premium': [
            { quantity: 'Unlock Template', price: 'Chat admin untuk tanya harga' }
        ],
        'Alight Motion Pro': [
            { quantity: 'Semua Fitur', price: 'Chat admin untuk tanya harga' }
        ],
        'Lightroom Premium': [
            { quantity: '1 Tahun', price: 'Chat admin untuk tanya harga' }
        ],
        'Picsay Pro': [
            { quantity: 'Unlock All', price: 'Chat admin untuk tanya harga' }
        ],
        'Hosting Domain': [
            { quantity: 'Custom Domain & Hosting', price: 'Chat admin untuk tanya harga' }
        ]
    }
};

let currentPage = 1;
const ordersPerPage = 10;
let filteredOrders = [...orderData];

function initApp() {
    setupEventListeners();
    hideLinkInputs();
    renderOrderList();
    renderActiveOrders();
    checkDarkModePreference();
    setupServiceCards();
    renderPremiumApps();
    showNotification();
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
}

function renderPremiumApps() {
    premiumAppsGrid.innerHTML = '';

    const premiumCategories = {
        'Streaming': ['YouTube Premium', 'Netflix Premium', 'Disney+ Hotstar', 'Vidio', 'IQIYI', 'WeTV VIP', 'VIU Premium', 'Vision+', 'RCTI+', 'HBO', 'Amazon Prime Video'],
        'Produktivitas': ['ChatGPT', 'Canva Pro', 'Grammarly Premium', 'Turnitin', 'Microsoft 365', 'Office 2019/2021', 'WPS Premium', 'Google One', 'Adobe Creative Cloud', 'Zoom Meeting Pro'],
        'Editing': ['CapCut Pro', 'Lightroom Premium', 'Picsart', 'VSCO', 'Meitu', 'Remini', 'Alight Motion Pro', 'Picsay Pro', 'CapCut Web Premium'],
        'Musik': ['Spotify Premium', 'Apple Music'],
        'Lainnya': ['Windows 10/11 Pro', 'Hosting Domain', 'GetContact Premium', 'BStation', 'Dramabox']
    };

    for (const [category, apps] of Object.entries(premiumCategories)) {
        const categorySection = document.createElement('div');
        categorySection.className = 'premium-category';
        categorySection.innerHTML = `<h3 class="category-title">${category}</h3>`;

        const appsContainer = document.createElement('div');
        appsContainer.className = 'premium-apps-container';

        apps.forEach(appName => {
            const appCard = document.createElement('div');
            appCard.className = 'premium-app-card';
            appCard.dataset.platform = 'Premium Apps';
            appCard.dataset.service = appName;

            let iconClass = 'fas fa-crown';
            switch (appName) {
                case 'YouTube Premium':
                    iconClass = 'fab fa-youtube';
                    break;
                case 'Netflix Premium':
                    iconClass = 'fas fa-film';
                    break;
                case 'Disney+ Hotstar':
                    iconClass = 'fas fa-hat-wizard';
                    break;
                case 'Vidio':
                    iconClass = 'fas fa-tv';
                    break;
                case 'IQIYI':
                    iconClass = 'fas fa-play-circle';
                    break;
                case 'WeTV VIP':
                    iconClass = 'fas fa-video';
                    break;
                case 'VIU Premium':
                    iconClass = 'fas fa-video-slash';
                    break;
                case 'Vision+':
                    iconClass = 'fas fa-eye';
                    break;
                case 'RCTI+':
                    iconClass = 'fas fa-broadcast-tower';
                    break;
                case 'HBO':
                    iconClass = 'fas fa-h-square';
                    break;
                case 'Amazon Prime Video':
                    iconClass = 'fab fa-amazon';
                    break;
                case 'ChatGPT':
                    iconClass = 'fas fa-comment-alt';
                    break;
                case 'Canva Pro':
                    iconClass = 'fas fa-palette';
                    break;
                case 'Grammarly Premium':
                    iconClass = 'fas fa-spell-check';
                    break;
                case 'Turnitin':
                    iconClass = 'fas fa-file-alt';
                    break;
                case 'Microsoft 365':
                    iconClass = 'fab fa-microsoft';
                    break;
                case 'Office 2019/2021':
                    iconClass = 'fas fa-file-word';
                    break;
                case 'WPS Premium':
                    iconClass = 'fas fa-file-powerpoint';
                    break;
                case 'Google One':
                    iconClass = 'fab fa-google-drive';
                    break;
                case 'Adobe Creative Cloud':
                    iconClass = 'fab fa-adobe';
                    break;
                case 'Zoom Meeting Pro':
                    iconClass = 'fas fa-video';
                    break;
                case 'CapCut Pro':
                    iconClass = 'fas fa-cut';
                    break;
                case 'Lightroom Premium':
                    iconClass = 'fas fa-camera-retro';
                    break;
                case 'Picsart':
                    iconClass = 'fas fa-image';
                    break;
                case 'VSCO':
                    iconClass = 'fas fa-sliders-h';
                    break;
                case 'Meitu':
                    iconClass = 'fas fa-magic';
                    break;
                case 'Remini':
                    iconClass = 'fas fa-image-portrait';
                    break;
                case 'Alight Motion Pro':
                    iconClass = 'fas fa-film';
                    break;
                case 'Picsay Pro':
                    iconClass = 'fas fa-paint-brush';
                    break;
                case 'CapCut Web Premium':
                    iconClass = 'fas fa-laptop';
                    break;
                case 'Spotify Premium':
                    iconClass = 'fab fa-spotify';
                    break;
                case 'Apple Music':
                    iconClass = 'fab fa-apple';
                    break;
                case 'Windows 10/11 Pro':
                    iconClass = 'fab fa-windows';
                    break;
                case 'Hosting Domain':
                    iconClass = 'fas fa-server';
                    break;
                case 'GetContact Premium':
                    iconClass = 'fas fa-address-book';
                    break;
                case 'BStation':
                    iconClass = 'fas fa-bolt';
                    break;
                case 'Dramabox':
                    iconClass = 'fas fa-theater-masks';
                    break;
            }

            appCard.innerHTML = `
                <div class="app-icon">
                    <i class="${iconClass}"></i>
                </div>
                <div class="app-name">${appName}</div>
            `;

            appCard.addEventListener('click', function() {
                document.getElementById('orderFormSection').classList.remove('hidden');
                premiumAppsSection.classList.add('hidden');
                servicesSection.classList.add('hidden');
                document.querySelector('.active-orders').classList.add('hidden');
                fullOrderList.classList.add('hidden');
                promoSection.classList.add('hidden');
                pageTitle.textContent = 'Buat Pesanan';

                platformSelect.value = this.dataset.platform;
                platformSelect.dispatchEvent(new Event('change'));

                setTimeout(() => {
                    serviceSelect.value = this.dataset.service;
                    serviceSelect.dispatchEvent(new Event('change'));
                }, 100);
            });

            appsContainer.appendChild(appCard);
        });

        categorySection.appendChild(appsContainer);
        premiumAppsGrid.appendChild(categorySection);
    }
}

function setupServiceCards() {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            const platform = this.dataset.platform;
            const service = this.dataset.service;

            document.getElementById('orderFormSection').classList.remove('hidden');
            document.querySelector('.services-section').classList.add('hidden');
            document.querySelector('.active-orders').classList.add('hidden');
            fullOrderList.classList.add('hidden');
            promoSection.classList.add('hidden');
            premiumAppsSection.classList.add('hidden');
            pageTitle.textContent = 'Buat Pesanan';

            platformSelect.value = platform;
            platformSelect.dispatchEvent(new Event('change'));

            setTimeout(() => {
                serviceSelect.value = service;
                serviceSelect.dispatchEvent(new Event('change'));
            }, 100);
        });
    });
}

function setupEventListeners() {
    platformSelect.addEventListener('change', function() {
        if (this.value) {
            serviceSelect.disabled = false;
            serviceSelect.value = '';
            hideLinkInputs();
        } else {
            serviceSelect.disabled = true;
            hideLinkInputs();
        }
    });

    serviceSelect.addEventListener('change', function() {
        if (this.value && platformSelect.value) {
            showPricingOptions(platformSelect.value, this.value);
        } else {
            hideLinkInputs();
        }
    });

    orderBtn.addEventListener('click', placeOrder);
    orderSearch.addEventListener('input', filterOrders);
    statusFilter.addEventListener('change', filterOrders);
    prevPageBtn.addEventListener('click', goToPrevPage);
    nextPageBtn.addEventListener('click', goToNextPage);

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            const target = this.dataset.target;
            document.querySelectorAll('.services-section, .active-orders, .order-form-section, .full-order-list, .promo-section, .premium-apps-section').forEach(section => {
                section.classList.add('hidden');
            });

            if (target === 'home') {
                servicesSection.classList.remove('hidden');
                document.querySelector('.active-orders').classList.remove('hidden');
                pageTitle.textContent = 'Pembelian Follower';
            } else if (target === 'orders') {
                fullOrderList.classList.remove('hidden');
                pageTitle.textContent = 'Daftar Pesanan';
            } else if (target === 'promo') {
                promoSection.classList.remove('hidden');
                pageTitle.textContent = 'Promo Spesial';
            } else if (target === 'premium') {
                premiumAppsSection.classList.remove('hidden');
                pageTitle.textContent = 'Aplikasi Premium';
            }
        });
    });

    viewAllOrders.addEventListener('click', function(e) {
        e.preventDefault();
        fullOrderList.classList.remove('hidden');
        servicesSection.classList.add('hidden');
        document.querySelector('.active-orders').classList.add('hidden');
        promoSection.classList.add('hidden');
        premiumAppsSection.classList.add('hidden');
        pageTitle.textContent = 'Daftar Pesanan';
        navItems.forEach(nav => nav.classList.remove('active'));
        document.querySelector('.nav-item[data-target="orders"]').classList.add('active');
    });

    darkModeToggle.addEventListener('click', toggleDarkMode);

    document.querySelector('.promo-order-btn').addEventListener('click', function() {
        const link = document.getElementById('promoAccountLink').value.trim();

        if (!link) {
            alert('Silakan masukkan link akun Anda terlebih dahulu.');
            return;
        }

        let message = `╭❀「 *PROMO CASHBACK* 」\n`;
        message += `├ ❖ _Cashback Rp5.000 untuk order di atas Rp50.000_\n`;
        message += `├ ❖ _Tanpa kode promo (otomatis)_\n`;
        message += `├ ❖ _Saldo masuk ke akun setelah order valid_\n`;
        message += `╰───────────────\n\n`;

        message += `╭❀「 *LINK AKUN* 」\n`;
        message += `├ ❖ ${link}\n`;
        message += `╰───────────────\n\n`;

        message += `╭❀「 *PERHATIAN* 」\n`;
        message += `├ ❖ _Promo hanya berlaku hingga akhir bulan ini_\n`;
        message += `├ ❖ _Cashback tidak berlaku kelipatan_\n`;
        message += `╰───────────────\n\n`;

        message += `╭❀「 *KONFIRMASI* 」\n`;
        message += `├ ❖ _Saya ingin mengikuti promo ini dan melakukan pemesanan_\n`;
        message += `╰───────────────`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    });

    closeModal.addEventListener('click', function() {
        notificationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        localStorage.setItem('hasSeenNotification', 'true');
    });

    understandBtn.addEventListener('click', function() {
        notificationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        localStorage.setItem('hasSeenNotification', 'true');
    });

    notificationModal.addEventListener('click', function(e) {
        if (e.target === notificationModal) {
            notificationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            localStorage.setItem('hasSeenNotification', 'true');
        }
    });
}

function checkDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('darkMode', 'disabled');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

function hideLinkInputs() {
    accountLinkGroup.classList.add('hidden');
    videoLinkGroup.classList.add('hidden');
    pricingOptions.classList.add('hidden');
    pricingDisplay.style.display = 'none';
    orderBtn.disabled = true;
}

function showPricingOptions(platform, service) {
    pricingOptions.classList.remove('hidden');
    pricingGrid.innerHTML = '';

    const packages = pricingData[platform][service];

    packages.forEach(pkg => {
        const option = document.createElement('div');
        option.className = 'pricing-option';
        option.dataset.price = pkg.price;
        option.dataset.quantity = pkg.quantity;
        option.dataset.service = service;
        option.innerHTML = `
            <div class="quantity">${pkg.quantity}</div>
            <div class="price">Rp${pkg.price.toLocaleString('id-ID')}</div>
        `;

        option.addEventListener('click', function() {
            document.querySelectorAll('.pricing-option').forEach(el => el.classList.remove('selected'));
            this.classList.add('selected');

            totalPriceElement.textContent = `Rp${pkg.price.toLocaleString('id-ID')}`;
            pricingDisplay.style.display = 'block';

            accountLinkGroup.classList.add('hidden');
            videoLinkGroup.classList.add('hidden');

            if (service === 'Followers' || service === 'Subscribers') {
                accountLinkGroup.classList.remove('hidden');
            } else if (service === 'Likes' || service === 'Views' || service === 'Shares' || service === 'Live Views') {
                videoLinkGroup.classList.remove('hidden');
            }

            orderBtn.disabled = false;
        });

        pricingGrid.appendChild(option);
    });
}

function formatIndonesianDate(date) {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${dayName}, ${day} ${month} ${year} ${hours}:${minutes}`;
}

function placeOrder() {
    if (!validateForm()) {
        alert('Silakan lengkapi semua data pemesanan terlebih dahulu');
        return;
    }

    const platform = platformSelect.options[platformSelect.selectedIndex].text;
    const service = serviceSelect.options[serviceSelect.selectedIndex].text;
    const selectedOption = document.querySelector('.pricing-option.selected');
    const price = selectedOption.dataset.price;
    const quantity = selectedOption.dataset.quantity;
    const currentDate = formatIndonesianDate(new Date());

    let message = `╭❀「 *DATA PESANAN* 」\n`;
    message += `├ ❖ _Tanggal_ : ${currentDate}\n`;
    message += `├ ❖ _Jenis_   : ${service} ${platform}\n`;
    message += `├ ❖ _Paket_   : ${quantity}\n`;
    message += `├ ❖ _Total_   : Rp${Number(price).toLocaleString('id-ID')}\n`;
    message += `╰───────────────\n\n`;

    if (platformSelect.value !== 'Premium Apps') {
        const isAccountBased = (service === 'Followers' || service === 'Subscribers');
        const targetLink = isAccountBased ?
            document.getElementById('accountLinkInput').value.trim() :
            document.getElementById('videoLinkInput').value.trim();
        const targetLabel = isAccountBased ? 'Akun' : 'Vidio';

        message += `╭❀「 *TARGET ${targetLabel} 」\n`;
        message += `├ ❖ _Link_:\n`;
        message += `├ ❖ ${targetLink}\n`;
        message += `╰───────────────\n\n`;
    }

    message += `╭❀「 *PERHATIAN* 」\n`;
    if (platformSelect.value === 'Premium Apps') {
        message += `├ ❖ _Akun akan dikirim via WhatsApp setelah pembayaran_\n`;
        message += `├ ❖ _Proses aktivasi 1-12 jam setelah pembayaran_\n`;
    } else {
        message += `├ ❖ _Akun tidak boleh_ *private*\n`;
        message += `├ ❖ _Jangan ganti_ *username*\n`;
    }
    message += `├ ❖ _Batas_ *min & max* _berlaku_\n`;
    message += `╰───────────────\n\n`;

    message += `╭❀「 *GRUP GARANSI* 」\n`;
    message += `├ ❖ _Untuk info & komplain_:\n`;
    message += `├ ❖ https://chat.whatsapp.com/Js1OixDAAsUA8ZqHQvP84P\n`;
    message += `╰───────────────\n\n`;

    message += `╭❀「 *TERIMA KASIH* 」\n`;
    message += `├ ❖ _Sudah order di layanan kami_\n`;
    message += `├ ❖ _Butuh bantuan?_ Chat admin di grup\n`;
    message += `╰───────────────\n`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
}

function validateForm() {
    if (!platformSelect.value || !serviceSelect.value || !document.querySelector('.pricing-option.selected')) {
        return false;
    }

    const service = serviceSelect.value;

    if (platformSelect.value === 'Premium Apps') {
        return true;
    }

    const accountLink = document.getElementById('accountLinkInput').value;
    const videoLink = document.getElementById('videoLinkInput').value;

    if (service === 'Followers' || service === 'Subscribers') {
        return accountLink.trim() !== '';
    } else if (service === 'Likes' || service === 'Views' || service === 'Shares' || service === 'Live Views') {
        return videoLink.trim() !== '';
    }

    return false;
}

function copyToClipboard(id) {
    const input = document.getElementById(id);
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);

    const copyBtn = input.nextElementSibling;
    copyBtn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => {
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    }, 2000);
}

function renderActiveOrders() {
    const activeOrders = [{
            id: 'jashub0038',
            service: 'Tiktok Followers',
            quantity: 1010,
            progress: 500,
            date: '2025-06-26'
        },
        {
            id: 'jashub0039',
            service: 'Tiktok Views',
            quantity: 30000,
            progress: 15000,
            date: '2025-06-26'
        }
    ];

    activeOrderList.innerHTML = '';

    activeOrders.forEach(order => {
        const progressPercent = Math.round((order.progress / order.quantity) * 100);

        const orderEl = document.createElement('div');
        orderEl.className = 'order-item';
        orderEl.innerHTML = `
            <div class="order-info">
                <div class="service-icon">
                    <i class="fab fa-tiktok"></i>
                </div>
                <div>
                    <h4>${order.service}</h4>
                    <p>No. Order ${order.id}</p>
                </div>
            </div>
            <div class="order-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressPercent}%"></div>
                </div>
                <div class="progress-text">${order.progress.toLocaleString()} / ${order.quantity.toLocaleString()}</div>
            </div>
        `;

        activeOrderList.appendChild(orderEl);
    });

    setTimeout(() => {
        document.querySelectorAll('.progress-fill').forEach(bar => {
            bar.style.transition = 'width 1.5s ease';
        });
    }, 100);
}

function filterOrders() {
    const searchTerm = orderSearch.value.toLowerCase();
    const statusFilterValue = statusFilter.value;

    filteredOrders = orderData.filter(order => {
        const matchesSearch = order.id.toLowerCase().includes(searchTerm) ||
            order.kategori.toLowerCase().includes(searchTerm);

        const matchesStatus = statusFilterValue === 'all' ||
            order.status === statusFilterValue;

        return matchesSearch && matchesStatus;
    });

    currentPage = 1;
    renderOrderList();
}

function renderOrderList() {
    const startIndex = (currentPage - 1) * ordersPerPage;
    const endIndex = startIndex + ordersPerPage;
    const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

    orderListBody.innerHTML = '';

    if (paginatedOrders.length === 0) {
        orderListBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 20px;">
                    Tidak ada data order yang ditemukan
                </td>
            </tr>
        `;
    } else {
        paginatedOrders.forEach(order => {
            const row = document.createElement('tr');
            const date = new Date(order.tanggal);
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.kategori}</td>
                <td>${order.layanan.toLocaleString('id-ID')}</td>
                <td>${formattedDate}</td>
                <td class="${order.status === 'Success' ? 'status-success' : 'status-cancel'}">${order.status}</td>
            `;

            orderListBody.appendChild(row);
        });
    }

    updatePaginationControls();
}

function updatePaginationControls() {
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

    pageInfo.textContent = `Halaman ${currentPage} dari ${totalPages}`;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
}

function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderOrderList();
    }
}

function goToNextPage() {
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        renderOrderList();
    }
}

function showNotification() {
    const hasSeenNotification = localStorage.getItem('hasSeenNotification');

    if (!hasSeenNotification) {
        notificationModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

document.addEventListener('DOMContentLoaded', initApp);

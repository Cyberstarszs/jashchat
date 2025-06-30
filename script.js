// DOM Elements
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

// WhatsApp number
const WHATSAPP_NUMBER = '6281324919799';

// Order data
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

// Pricing data
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
            { quantity: 3000, price: 15000 }
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
            { quantity: 100, price: 6000 },
            { quantity: 200, price: 10000 },
            { quantity: 300, price: 15000 },
            { quantity: 400, price: 17000 },
            { quantity: 500, price: 21000 },
            { quantity: 600, price: 25000 },
            { quantity: 700, price: 27000 },
            { quantity: 800, price: 30000 },
            { quantity: 900, price: 33000 },
            { quantity: 1000, price: 37000 },
            { quantity: 3000, price: 96000 }
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
            { quantity: 3000, price: 15000 }
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
    }
};

// Pagination variables
let currentPage = 1;
const ordersPerPage = 10;
let filteredOrders = [...orderData];

// Initialize the app
function initApp() {
    setupEventListeners();
    hideLinkInputs();
    renderOrderList();
    renderActiveOrders();
    checkDarkModePreference();
    setupServiceCards();

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
}

// Setup service card click handlers
function setupServiceCards() {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            const platform = this.dataset.platform;
            const service = this.dataset.service;

            // Show order form section
            document.getElementById('orderFormSection').classList.remove('hidden');
            document.querySelector('.services-section').classList.add('hidden');
            document.querySelector('.active-orders').classList.add('hidden');
            fullOrderList.classList.add('hidden');
            promoSection.classList.add('hidden');
            pageTitle.textContent = 'Buat Pesanan';

            // Set platform and service selections
            platformSelect.value = platform;
            platformSelect.dispatchEvent(new Event('change'));

            setTimeout(() => {
                serviceSelect.value = service;
                serviceSelect.dispatchEvent(new Event('change'));
            }, 100);
        });
    });
}

// Setup all event listeners
function setupEventListeners() {
    // Form event listeners
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

    // Order list event listeners
    orderSearch.addEventListener('input', filterOrders);
    statusFilter.addEventListener('change', filterOrders);
    prevPageBtn.addEventListener('click', goToPrevPage);
    nextPageBtn.addEventListener('click', goToNextPage);

    // Navigation event listeners
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            const target = this.dataset.target;
            document.querySelectorAll('.services-section, .active-orders, .order-form-section, .full-order-list, .promo-section').forEach(section => {
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
            }
        });
    });

    // View all orders handler
    viewAllOrders.addEventListener('click', function(e) {
        e.preventDefault();
        fullOrderList.classList.remove('hidden');
        servicesSection.classList.add('hidden');
        document.querySelector('.active-orders').classList.add('hidden');
        promoSection.classList.add('hidden');
        pageTitle.textContent = 'Daftar Pesanan';

        // Update navigation
        navItems.forEach(nav => nav.classList.remove('active'));
        document.querySelector('.nav-item[data-target="orders"]').classList.add('active');
    });

    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Promo order button
    document.querySelector('.promo-order-btn').addEventListener('click', function() {
        const message = `✅ *PESAN PROMO 15rb DAPAT 1000 FOLLOWER TIKTOK*\n\n` +
            `❗ *SYARAT DAN KETENTUAN:*\n` +
            `- HARUS SEDANG LIVE SAAT ORDER\n` +
            `- TIDAK ADA REFUND/REFILL JIKA TIDAK LIVE\n\n` +
            `🔹 *Target:* Username\n` +
            `🔹 *Start:* 0-10 menit\n` +
            `🔹 *Speed:* 200k/hari\n` +
            `🔹 *Refill:* 30 Hari\n` +
            `🔹 *Quality:* HQ Profile\n\n` +
            `Silakan reply dengan username TikTok Anda yang sedang LIVE:`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    });
}

// Dark mode functions
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

// Hide link inputs and pricing display
function hideLinkInputs() {
    accountLinkGroup.classList.add('hidden');
    videoLinkGroup.classList.add('hidden');
    pricingOptions.classList.add('hidden');
    pricingDisplay.style.display = 'none';
    orderBtn.disabled = true;
}

// Show pricing options for selected service
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
            <div class="quantity">${pkg.quantity.toLocaleString('id-ID')}</div>
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
            } else if (service === 'Likes' || service === 'Views' || service === 'Shares') {
                videoLinkGroup.classList.remove('hidden');
            }

            orderBtn.disabled = false;
        });

        pricingGrid.appendChild(option);
    });
}

// Format date to Indonesian format
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

// Place order function
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
    const accountLink = document.getElementById('accountLinkInput').value;
    const videoLink = document.getElementById('videoLinkInput').value;
    const currentDate = formatIndonesianDate(new Date());

    let message = `╭❀「 DATA PESANAN 」\n`;
    message += `├ Tanggal : ${currentDate}\n`;
    message += `├ Jenis   : ${service} ${platform}\n`;
    message += `├ Jumlah  : ${quantity}\n`;
    message += `├ Total   : Rp${Number(price).toLocaleString('id-ID')}\n`;
    message += `╰───────────────\n\n`;

    message += `╭❀「 TARGET ${service === 'Subscribers' ? 'CHANNEL' : 'AKUN'} 」\n`;
    message += `├ Link:\n`;
    message += `├ ${accountLink || videoLink}\n`;
    message += `╰───────────────\n`;

    if (service === 'Likes' || service === 'Views' || service === 'Shares') {
        message += `📹: ${videoLink || 'Tidak diisi'}\n`;
    }

    message += `╭❀「 PERHATIAN 」\n`;
    message += `├ Akun tidak boleh *private*\n`;
    message += `├ Jangan ganti *username*\n`;
    message += `├ Batas *min & max* berlaku\n`;
    message += `├ Proses bertahap, ±30 menit – beberapa jam\n`;
    message += `╰───────────────\n\n`;

    message += `╭❀「 GRUP GARANSI 」\n`;
    message += `├ Untuk info & komplain:\n`;
    message += `├ https://chat.whatsapp.com/Js1OixDAAsUA8ZqHQvP84P\n`;
    message += `╰───────────────\n\n`;

    message += `╭❀「 TERIMA KASIH 」\n`;
    message += `├ Sudah order di layanan kami\n`;
    message += `├ Butuh bantuan? Chat admin di grup\n`;
    message += `╰───────────────\n`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
}

// Validate form before placing order
function validateForm() {
    if (!platformSelect.value || !serviceSelect.value || !document.querySelector('.pricing-option.selected')) {
        return false;
    }

    const service = serviceSelect.value;
    const accountLink = document.getElementById('accountLinkInput').value;
    const videoLink = document.getElementById('videoLinkInput').value;

    if (service === 'Followers' || service === 'Subscribers') {
        return accountLink.trim() !== '';
    } else if (service === 'Likes' || service === 'Views' || service === 'Shares') {
        return videoLink.trim() !== '';
    }

    return false;
}

// Copy to clipboard function
function copyToClipboard(id) {
    const input = document.getElementById(id);
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);

    // Show feedback
    const copyBtn = input.nextElementSibling;
    copyBtn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => {
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    }, 2000);
}

// Render active orders
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

    // Animate progress bars
    setTimeout(() => {
        document.querySelectorAll('.progress-fill').forEach(bar => {
            bar.style.transition = 'width 1.5s ease';
        });
    }, 100);
}

// Filter orders based on search and status
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

// Render order list with pagination
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

// Update pagination controls
function updatePaginationControls() {
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

    pageInfo.textContent = `Halaman ${currentPage} dari ${totalPages}`;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Go to previous page
function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderOrderList();
    }
}

// Go to next page
function goToNextPage() {
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        renderOrderList();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

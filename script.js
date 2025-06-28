const platformSelect = document.getElementById('platform');
const serviceSelect = document.getElementById('service');
const pricingOptions = document.getElementById('pricingOptions');
const pricingGrid = document.getElementById('pricingGrid');
const accountLinkGroup = document.getElementById('accountLinkGroup');
const videoLinkGroup = document.getElementById('videoLinkGroup');
const accountLinkInput = document.getElementById('account-link');
const videoLinkInput = document.getElementById('video-link');
const pricingDisplay = document.getElementById('pricingDisplay');
const totalPriceElement = document.getElementById('totalPrice');
const orderBtn = document.getElementById('orderBtn');

// Order list elements
const orderListBody = document.getElementById('orderListBody');
const orderSearch = document.getElementById('orderSearch');
const statusFilter = document.getElementById('statusFilter');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');

const WHATSAPP_NUMBER = '6281324919799';

// Order data from your YAML file (converted to JSON)
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



// Pagination variables
let currentPage = 1;
const ordersPerPage = 10;
let filteredOrders = [...orderData];

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

function initApp() {
    setupEventListeners();
    hideLinkInputs();
    renderOrderList();
}

function hideLinkInputs() {
    accountLinkGroup.classList.add('hidden');
    videoLinkGroup.classList.add('hidden');
    pricingOptions.classList.add('hidden');
    pricingDisplay.classList.remove('active');
    orderBtn.disabled = true;
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

    // Order list event listeners
    orderSearch.addEventListener('input', filterOrders);
    statusFilter.addEventListener('change', filterOrders);
    prevPageBtn.addEventListener('click', goToPrevPage);
    nextPageBtn.addEventListener('click', goToNextPage);
}

function showPricingOptions(platform, service) {
    pricingOptions.classList.remove('hidden');
    pricingGrid.innerHTML = '';

    const packages = pricingData[platform][service];

    packages.forEach(pkg => {
        const option = document.createElement('div');
        option.className = 'pricing-option';
        option.dataset.price = pkg.price;
        option.dataset.service = service;
        option.innerHTML = `
            <div class="quantity">${pkg.quantity.toLocaleString('id-ID')}</div>
            <div class="price">Rp${pkg.price.toLocaleString('id-ID')}</div>
        `;

        option.addEventListener('click', function() {
            document.querySelectorAll('.pricing-option').forEach(el => el.classList.remove('selected'));
            this.classList.add('selected');

            totalPriceElement.textContent = `Rp${pkg.price.toLocaleString('id-ID')}`;
            pricingDisplay.classList.add('active');

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

function formatIndonesianDate(date) {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${month} ${year}`;
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
    const quantity = selectedOption.querySelector('.quantity').textContent;
    const accountLink = accountLinkInput.value;
    const videoLink = videoLinkInput.value;
    const currentDate = formatIndonesianDate(new Date());

    let message = `✅ *PENGISIAN DATA PESANAN*\n\n`;
    message += `${currentDate}\n\n`;
    message += `*Jenis Pesanan:* ${service} ${platform}\n`;
    message += `*Jumlah:* ${quantity}\n`;
    message += `*Total:* Rp${price}\n\n`;
    message += `*Target ${service === 'Subscribers' ? 'Channel' : 'Akun'}*:\n\n`;
    message += `🔗: ${accountLink}\n`;

    if (service === 'Likes' || service === 'Views' || service === 'Shares') {
        message += `📹: ${videoLink || 'Tidak diisi'}\n`;
    }

    message += `\n⚠️ *PERHATIAN SEBELUM MELAKUKAN PEMESANAN🔥*\n`;
    message += `──────────────────────────────\n`;
    message += `🔹 Akun jangan *private*.\n`;
    message += `🔹 Jangan ganti *username* saat proses masih berjalan.\n`;
    message += `🔹 Setiap layanan punya batas *minimum & maksimum order*.\n`;
    message += `\n⏳ Proses followers TikTok tidak instan.\n`;
    message += `🔹 Followers masuk bertahap agar aman dan tidak mudah hilang.\n`;
    message += `🔹 Estimasi waktu: 30 menit – beberapa jam (tergantung antrian & kondisi akun).\n`;
    message += `──────────────────────────────\n\n`;

    message += `*Grup Garansi & Layanan Lain:*\n`;
    message += `https://chat.whatsapp.com/Js1OixDAAsUA8ZqHQvP84P\n\n`;
    message += `Terima kasih telah menggunakan layanan kami!\n`;
    message += `❓ Kendala? Hubungi admin via grup garansi.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
}

function validateForm() {
    if (!platformSelect.value || !serviceSelect.value ||
        !document.querySelector('.pricing-option.selected')) {
        return false;
    }

    const service = serviceSelect.value;

    if (service === 'Followers' || service === 'Subscribers') {
        return accountLinkInput.value.trim() !== '';
    } else if (service === 'Likes' || service === 'Views' || service === 'Shares') {
        return videoLinkInput.value.trim() !== '';
    }

    return false;
}

// Order list functions
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
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.kategori}</td>
                <td>${order.layanan}</td>
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

document.addEventListener('DOMContentLoaded', initApp);

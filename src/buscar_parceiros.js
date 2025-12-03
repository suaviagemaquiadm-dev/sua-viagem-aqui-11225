import { db, collection, query, where, getDocs } from './firebase.js';

// --- DOM Elements ---
const grid = document.getElementById('partners-grid');
const loadingContainer = document.getElementById('loading-container');
const noResultsMessage = document.getElementById('no-results-message');
const searchInput = document.getElementById('search-text');
const categoryFilter = document.getElementById('filter-category');
const clearFiltersBtn = document.getElementById('clear-filters-btn');
const clearFiltersBtnEmpty = document.getElementById('clear-filters-btn-empty');

// --- State ---
let allPartners = [];
let map;
let markers = [];

// --- Functions ---

/**
 * Initializes the Leaflet map.
 */
function initMap() {
    if (typeof L !== 'undefined') {
        map = L.map('map').setView([-14.235, -51.925], 4); // Center of Brazil
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }).addTo(map);
    } else {
        document.getElementById('map').innerHTML = '<p class="text-slate-500">Erro ao carregar o mapa. Tente recarregar a página.</p>';
    }
}

/**
 * Creates an HTML element for a partner card.
 * @param {object} partner - The partner data.
 * @returns {HTMLElement} - The card element.
 */
function createPartnerCard(partner) {
    const card = document.createElement('div');
    card.className = 'glass-effect rounded-2xl overflow-hidden shadow-lg border border-slate-700/50 transform hover:-translate-y-1 transition-transform duration-300';
    
    const imageUrl = partner.image || 'https://placehold.co/400x300/1e293b/fcd34d?text=Parceiro';

    card.innerHTML = `
        <a href="/public_partner_details.html?id=${partner.id}" class="block">
            <div class="h-48 bg-cover bg-center" style="background-image: url('${imageUrl}')"></div>
            <div class="p-5">
                <div class="flex justify-between items-start">
                    <div>
                        <p class="text-xs text-amber-400 font-bold uppercase tracking-wider">${partner.category.replace(/_/g, ' ')}</p>
                        <h3 class="text-xl font-bold text-white mt-1">${partner.businessName}</h3>
                    </div>
                    <div class="flex items-center bg-slate-900/50 text-amber-400 px-2 py-1 rounded-full text-sm font-bold">
                        <i class="fas fa-star mr-1"></i>
                        <span>${partner.rating || 'Novo'}</span>
                    </div>
                </div>
                <p class="text-slate-400 text-sm mt-2 flex items-center">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    ${partner.city}, ${partner.state}
                </p>
            </div>
        </a>
    `;
    return card;
}

/**
 * Updates the map with markers for the filtered partners.
 * @param {Array<object>} filteredPartners - The partners to display on the map.
 */
function updateMapMarkers(filteredPartners) {
    if (!map) return;

    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    // Add new markers
    filteredPartners.forEach(partner => {
        // Use mock location if not available
        const lat = partner.latitude || -22.9068 + (Math.random() - 0.5);
        const lng = partner.longitude || -43.1729 + (Math.random() - 0.5);

        const customIcon = L.divIcon({
            className: 'custom-map-marker',
            html: `<div class="p-2 bg-amber-500 rounded-full shadow-lg"><i class="fas fa-map-marker-alt text-slate-900 text-xs"></i></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
        marker.bindPopup(`
            <div class="text-slate-900">
                <h4 class="font-bold">${partner.businessName}</h4>
                <p>${partner.city}</p>
                <a href="/public_partner_details.html?id=${partner.id}" class="text-amber-600 font-semibold">Ver detalhes</a>
            </div>
        `);
        markers.push(marker);
    });
}

/**
 * Filters and renders the partners based on current filter values.
 */
function filterAndRender() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filtered = allPartners.filter(partner => {
        const nameMatch = partner.businessName.toLowerCase().includes(searchTerm);
        const categoryMatch = category ? partner.category === category : true;
        return nameMatch && categoryMatch;
    });

    grid.innerHTML = '';
    if (filtered.length > 0) {
        grid.classList.remove('hidden');
        noResultsMessage.classList.add('hidden');
        filtered.forEach(partner => {
            const card = createPartnerCard(partner);
            grid.appendChild(card);
        });
    } else {
        grid.classList.add('hidden');
        noResultsMessage.classList.remove('hidden');
    }
    
    updateMapMarkers(filtered);
}

/**
 * Fetches all approved partners from Firestore.
 */
async function fetchPartners() {
    loadingContainer.classList.remove('hidden');
    grid.classList.add('hidden');
    noResultsMessage.classList.add('hidden');

    try {
        const q = query(collection(db, 'partners'), where('status', '==', 'aprovado'));
        const querySnapshot = await getDocs(q);
        allPartners = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Initial Render
        filterAndRender();

    } catch (error) {
        console.error('Error fetching partners:', error);
        noResultsMessage.classList.remove('hidden');
        noResultsMessage.querySelector('h3').innerText = 'Erro ao carregar parceiros';
        noResultsMessage.querySelector('p').innerText = 'Houve um problema ao conectar com o servidor. Tente novamente mais tarde.';
    } finally {
        loadingContainer.classList.add('hidden');
    }
}

/**
 * Sets initial filter values from URL parameters.
 */
function applyUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get('q');
    const categoryParam = params.get('category');

    if (queryParam) {
        searchInput.value = queryParam;
    }
    if (categoryParam) {
        categoryFilter.value = categoryParam;
    }
}

// --- Event Listeners ---
searchInput.addEventListener('input', filterAndRender);
categoryFilter.addEventListener('change', filterAndRender);

const clear = () => {
    searchInput.value = '';
    categoryFilter.value = '';
    filterAndRender();
};

clearFiltersBtn.addEventListener('click', clear);
clearFiltersBtnEmpty.addEventListener('click', clear);

// --- Initial Load ---
applyUrlParameters();
initMap();
fetchPartners();

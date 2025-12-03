import 'font-awesome/css/font-awesome.css';
import showdown from 'showdown';
import DOMPurify from 'dompurify';
import { ChatbotComponent } from './components/Chatbot.js';
import { initializeChatbot } from './chatbot.js';

// HOTFIX: Expose libraries to global scope for legacy scripts
window.showdown = showdown;
window.DOMPurify = DOMPurify;

import './css/styles.css';
import { db, auth, onAuthStateChanged, collection, getDocs, query, where, limit, doc, getDoc } from "./firebase.js";

// --- CHATBOTS ---
const luaConfig = {
    idPrefix: 'lua',
    name: 'Luá',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=faces',
    position: 'bottom-left',
    placeholderText: 'Pergunte para a Luá...'
};

const victorConfig = {
    idPrefix: 'victor',
    name: 'Victor',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&fit=crop&crop=faces',
    position: 'bottom-right',
    placeholderText: 'Pergunte para o Victor...'
};

// Injeta o HTML dos chatbots no body
document.body.insertAdjacentHTML('beforeend', ChatbotComponent(luaConfig));
document.body.insertAdjacentHTML('beforeend', ChatbotComponent(victorConfig));

// Inicializa a lógica de cada chatbot
initializeChatbot('lua');
initializeChatbot('victor');

// --- FIM CHATBOTS ---

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Auth State UI Update
onAuthStateChanged(auth, async (user) => {
    const authButtons = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');
    
    if (user) {
        authButtons.classList.add('hidden');
        authButtons.classList.remove('lg:flex');

        let profileLink = 'perfil.html';
        let dashboardText = 'Meu Perfil';
        
        try {
            const partnerSnap = await getDoc(doc(db, "partners", user.uid));
            if (partnerSnap.exists()) {
                profileLink = 'painel_anunciante.html';
                dashboardText = 'Painel Parceiro';
            }
        } catch(e) { console.log("Check user type error", e); }

        userMenu.innerHTML = `
            <a href="${profileLink}" class="flex items-center text-slate-300 hover:text-white mr-4">
                <span class="hidden md:inline mr-2">Olá, ${user.displayName || 'Viajante'}</span>
                <div class="w-8 h-8 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
                    ${(user.displayName || 'U').charAt(0).toUpperCase()}
                </div>
            </a>
            <a href="${profileLink}" class="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-full border border-slate-600 text-sm font-bold transition">
                ${dashboardText}
            </a>
        `;
        userMenu.classList.remove('hidden');
    } else {
        authButtons.classList.remove('hidden');
        authButtons.classList.add('lg:flex');
        userMenu.classList.add('hidden');
    }
});

// Helper: Render Card
function createPartnerCard(id, data, style = 'standard') {
    const isPremium = style === 'premium';
    const divClass = isPremium 
        ? "min-w-[300px] md:min-w-[350px] bg-slate-800/80 backdrop-blur rounded-2xl overflow-hidden border border-amber-500/30 shadow-xl snap-center transform hover:scale-[1.02] transition duration-300 cursor-pointer group"
        : "min-w-[300px] md:min-w-[350px] bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-lg snap-center transform hover:scale-[1.02] transition duration-300 cursor-pointer group";

    const el = document.createElement('div');
    el.className = divClass;
    el.onclick = () => window.location.href = `public_partner_details.html?id=${id}`;

    const img = data.image || 'https://placehold.co/400x300/1e293b/fcd34d?text=Parceiro';
    const badge = isPremium ? '<div class="absolute top-4 left-4 bg-amber-500 text-slate-900 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">Premium</div>' : '';

    el.innerHTML = `
        <div class="h-48 overflow-hidden relative">
            <img src="${img}" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt="${data.businessName}">
            ${badge}
            <div class="absolute top-4 right-4 bg-slate-900/80 backdrop-blur text-amber-400 px-2 py-1 rounded text-xs font-bold flex items-center">
                <i class="fas fa-star mr-1"></i> ${data.rating || 'Novo'}
            </div>
        </div>
        <div class="p-6">
            <div class="text-xs text-slate-400 uppercase font-bold mb-1 tracking-wide">${(data.category || 'Geral').replace('_', ' ')}</div>
            <h3 class="text-xl font-bold text-white mb-2 truncate">${data.businessName}</h3>
            <div class="flex items-center text-slate-400 text-sm mb-4">
                <i class="fas fa-map-marker-alt mr-2 text-amber-500"></i> ${data.city}, ${data.state}
            </div>
            <button class="w-full py-2 bg-slate-700 hover:bg-amber-500 hover:text-slate-900 text-white rounded-lg font-bold transition">
                Ver Detalhes
            </button>
        </div>
    `;
    return el;
}

function createGuideCard(guide) {
    const el = document.createElement('div');
    el.className = "glass-effect p-6 rounded-2xl text-center border border-slate-700/50 hover:border-amber-500/30 transition transform hover:-translate-y-1";
    el.innerHTML = `
        <div class="relative w-24 h-24 mx-auto mb-4">
            <img src="${guide.image || 'https://placehold.co/150x150'}" class="w-full h-full rounded-full object-cover border-4 border-slate-700 group-hover:border-amber-500 transition">
            <div class="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-slate-900"></div>
        </div>
        <h3 class="text-lg font-bold text-white mb-1">${guide.businessName}</h3>
        <p class="text-slate-400 text-xs uppercase tracking-wider mb-3">${guide.city}, ${guide.state}</p>
        <div class="flex justify-center space-x-1 text-amber-400 text-xs mb-4">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <a href="public_partner_details.html?id=${guide.id}" class="block w-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold py-2 rounded-lg transition">Ver Perfil</a>
    `;
    return el;
}

// Load Data
async function loadContent() {
    const featuredContainer = document.getElementById('featured-partners');
    const premiumContainer = document.getElementById('premium-partners');
    const freeGrid = document.getElementById('free-partners-grid');
    const guidesGrid = document.getElementById('guides-grid');
    
    try {
        // 1. Featured (Approved Partners)
        const qFeatured = query(collection(db, "partners"), where("status", "==", "aprovado"), limit(6));
        const snapFeatured = await getDocs(qFeatured);
        
        if (!snapFeatured.empty) {
            featuredContainer.innerHTML = '';
            premiumContainer.innerHTML = ''; // Usar lógica similar ou filtrar por plano
            freeGrid.innerHTML = '';
            guidesGrid.innerHTML = '';

            snapFeatured.forEach(doc => {
                const data = doc.data();
                const id = doc.id;
                
                // Distribuição simulada baseada no plano (ou mock se dados faltarem)
                if (data.plan === 'advance' || data.plan === 'plus') {
                    premiumContainer.appendChild(createPartnerCard(id, data, 'premium'));
                    // Também adiciona aos destaques
                    featuredContainer.appendChild(createPartnerCard(id, data));
                } else {
                    // Free/Basic
                    const miniCard = document.createElement('a');
                    miniCard.href = `public_partner_details.html?id=${id}`;
                    miniCard.className = "block bg-slate-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-amber-500 transition";
                    miniCard.innerHTML = `
                        <img src="${data.image || 'https://placehold.co/200'}" class="w-full h-24 object-cover">
                        <div class="p-3">
                            <h4 class="text-white font-bold text-sm truncate">${data.businessName}</h4>
                            <p class="text-slate-500 text-xs truncate">${data.city}</p>
                        </div>
                    `;
                    freeGrid.appendChild(miniCard);
                }

                if (data.category === 'guias') {
                    guidesGrid.appendChild(createGuideCard({id, ...data}));
                }
            });
        } else {
            renderMocks(featuredContainer, premiumContainer, freeGrid, guidesGrid);
        }

    } catch (error) {
        console.error("Error loading data:", error);
        renderMocks(featuredContainer, premiumContainer, freeGrid, guidesGrid);
    }
}

function renderMocks(feat, prem, free, guides) {
    if (!feat || !prem || !free || !guides) return;
    feat.innerHTML = ''; prem.innerHTML = ''; free.innerHTML = ''; guides.innerHTML = '';
    
    const mocks = [
        { id: 'm1', businessName: 'EcoTour Jalapão', category: 'ecoturismo', city: 'Mateiros', state: 'TO', plan: 'advance', image: 'https://images.unsplash.com/photo-1533106418989-88406e76827a?w=500' },
        { id: 'm2', businessName: 'Pousada Villa', category: 'hospedagem', city: 'Búzios', state: 'RJ', plan: 'plus', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500' },
        { id: 'm3', businessName: 'Guia João Silva', category: 'guias', city: 'Salvador', state: 'BA', plan: 'basic', image: 'https://images.unsplash.com/photo-1485893086445-ed75865eb095?w=500' },
        { id: 'm4', businessName: 'Transfer VIP', category: 'transfer', city: 'São Paulo', state: 'SP', plan: 'free', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500' }
    ];

    mocks.forEach(m => {
        if (m.plan === 'advance' || m.plan === 'plus') {
            prem.appendChild(createPartnerCard(m.id, m, 'premium'));
            feat.appendChild(createPartnerCard(m.id, m));
        } else {
            const miniCard = document.createElement('div');
            miniCard.className = "bg-slate-800 rounded-xl overflow-hidden hover:opacity-80 transition cursor-pointer";
            miniCard.onclick = () => window.location.href = `public_partner_details.html?id=${m.id}`;
            miniCard.innerHTML = `
                <img src="${m.image}" class="w-full h-32 object-cover">
                <div class="p-3">
                    <h4 class="text-white font-bold text-sm truncate">${m.businessName}</h4>
                    <p class="text-slate-500 text-xs truncate">${m.city}</p>
                </div>
            `;
            free.appendChild(miniCard);
        }
        if(m.category === 'guias') guides.appendChild(createGuideCard(m));
    });
}

(async () => {
    await loadContent();
})();

const testimonialsTrack = document.querySelector('.testimonials-track');
if (testimonialsTrack) {
    const testimonialsPrevBtn = document.querySelector('.testimonials-prev-btn');
    const testimonialsNextBtn = document.querySelector('.testimonials-next-btn');
    let testimonialsIndex = 0;

    testimonialsPrevBtn.addEventListener('click', () => {
        testimonialsIndex = Math.max(testimonialsIndex - 1, 0);
        updateTestimonials();
    });

    testimonialsNextBtn.addEventListener('click', () => {
        const numItems = testimonialsTrack.children.length;
        testimonialsIndex = Math.min(testimonialsIndex + 1, numItems - 1);
        updateTestimonials();
    });

    function updateTestimonials() {
        const itemWidth = testimonialsTrack.children[0].offsetWidth;
        const offset = -testimonialsIndex * (itemWidth + 24); // 24px is the gap
        testimonialsTrack.style.transform = `translateX(${offset}px)`;
    }
}

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(err => {
                console.error('Service Worker registration failed:', err);
            });
    });
}

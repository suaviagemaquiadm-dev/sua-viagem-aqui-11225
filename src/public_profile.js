import { db, auth, doc, getDoc, onAuthStateChanged } from "./firebase.js";

let currentProfileId = null;
let currentUser = null;
let isFollowing = false;

// Badge Icons Map
const badgesMap = {
    'explorer': { icon: 'fa-compass', color: 'text-blue-400', label: 'Explorador' },
    'photographer': { icon: 'fa-camera', color: 'text-purple-400', label: 'Fotógrafo' },
    'foodie': { icon: 'fa-utensils', color: 'text-orange-400', label: 'Gastronómico' },
    'vip': { icon: 'fa-crown', color: 'text-amber-400', label: 'VIP' },
    'verified': { icon: 'fa-check-circle', color: 'text-green-400', label: 'Verificado' }
};

async function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (!id) {
        // Fallback para perfil de teste se não houver ID na URL
        currentProfileId = 'demo_user';
        // Normalmente redirecionaríamos para home ou erro, mas para demo carregamos um mock se falhar
    } else {
        currentProfileId = id;
    }

    // Auth State
    onAuthStateChanged(auth, (user) => {
        currentUser = user;
        checkIfFollowing();
    });

    await loadProfile(currentProfileId);
}

async function loadProfile(uid) {
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            renderProfile(docSnap.data());
            await loadItineraries(uid);
        } else {
            // Tentar carregar mock se for demo
            if(uid === 'demo_user' || !uid) {
                renderMockProfile();
            } else {
                showError();
            }
        }
    } catch (error) {
        console.error("Erro ao carregar perfil:", error);
        renderMockProfile(); // Fallback visual para demo
    }
}

function renderMockProfile() {
    const mockData = {
        displayName: "Viajante Exemplo",
        photoURL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        bio: "Amante da natureza, fotógrafo amador e caçador de pores do sol. Sempre em busca da próxima aventura na América do Sul.",
        role: "traveler_plus",
        followers: new Array(128),
        following: new Array(45),
        badges: ['explorer', 'photographer', 'verified'],
        interests: ['Ecoturismo', 'Praia', 'Fotografia', 'Camping']
    };
    renderProfile(mockData);
    renderMockItineraries();
}

function renderProfile(data) {
    document.getElementById('loading-container').classList.add('hidden');
    document.getElementById('profile-content').classList.remove('hidden');

    document.getElementById('profile-picture').src = data.photoURL || 'https://placehold.co/150x150/1f2937/fcd34d?text=SVA';
    document.getElementById('user-name').innerText = data.displayName || 'Utilizador SVA';
    document.getElementById('user-bio').innerText = data.bio || 'Sem biografia.';
    
    if (data.role === 'traveler_plus') {
        document.getElementById('user-badge').classList.remove('hidden');
    }

    document.getElementById('followers-count').innerText = (data.followers?.length || 0);
    document.getElementById('following-count').innerText = (data.following?.length || 0);

    // Render Badges
    const badgesGrid = document.getElementById('badges-grid');
    badgesGrid.innerHTML = '';
    if (data.badges && data.badges.length > 0) {
        data.badges.forEach(badgeKey => {
            const badge = badgesMap[badgeKey] || { icon: 'fa-star', color: 'text-slate-400', label: 'Conquista' };
            const div = document.createElement('div');
            div.className = 'badge-card flex flex-col items-center p-3 bg-slate-800 rounded-xl border border-slate-700/50';
            div.innerHTML = `
                <i class="fas ${badge.icon} ${badge.color} text-2xl mb-2"></i>
                <span class="text-xs text-slate-300 font-medium">${badge.label}</span>
            `;
            badgesGrid.appendChild(div);
        });
    } else {
        document.getElementById('no-badges-message').classList.remove('hidden');
    }

    // Render Interests
    const interestsList = document.getElementById('interests-list');
    interestsList.innerHTML = '';
    if (data.interests && data.interests.length > 0) {
        data.interests.forEach(interest => {
            const span = document.createElement('span');
            span.className = 'bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-600';
            span.innerText = interest;
            interestsList.appendChild(span);
        });
    } else {
        document.getElementById('no-interests-message').classList.remove('hidden');
    }
}

async function loadItineraries(uid) {
    // Simulação de roteiros públicos
    // Em produção: const q = query(collection(db, "roteiros"), where("authorId", "==", uid), where("public", "==", true));
    renderMockItineraries();
}

function renderMockItineraries() {
    const grid = document.getElementById('itineraries-grid');
    grid.innerHTML = '';
    
    const mocks = [
        { title: 'Fim de semana em Paraty', image: 'https://images.unsplash.com/photo-1595239541358-a70b81d42959?w=500', days: 3, category: 'Praia' },
        { title: 'Rota do Vinho', image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=500', days: 2, category: 'Gastronomia' },
        { title: 'Chapada dos Veadeiros', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500', days: 5, category: 'Aventura' }
    ];

    document.getElementById('trips-count').innerText = mocks.length;

    mocks.forEach((trip, index) => {
        const card = document.createElement('a');
        card.href = `public_roteiro.html?id=mock${index}`; // Link para o roteiro
        card.className = 'bg-slate-800 rounded-xl overflow-hidden border border-slate-700 group hover:border-amber-400/50 transition-all hover:-translate-y-1';
        card.innerHTML = `
            <div class="relative h-48 overflow-hidden">
                <img src="${trip.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute top-2 right-2 bg-black/60 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded">
                    ${trip.days} Dias
                </div>
            </div>
            <div class="p-5">
                <div class="text-xs text-amber-400 mb-1 uppercase font-bold tracking-wider">${trip.category}</div>
                <h3 class="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">${trip.title}</h3>
            </div>
        `;
        grid.appendChild(card);
    });
}

function showError() {
    document.getElementById('loading-container').classList.add('hidden');
    document.getElementById('error-container').classList.remove('hidden');
}

// Follow Logic
const followBtn = document.getElementById('follow-btn');

async function checkIfFollowing() {
    if (!currentUser || !currentProfileId) return;
    // Simulação: Em produção verificaria array 'following' do currentUser
}

followBtn.addEventListener('click', async () => {
    if (!currentUser) {
        alert("Faça login para seguir viajantes.");
        window.location.href = 'pagina_login.html';
        return;
    }
    
    // Toggle UI state
    isFollowing = !isFollowing;
    if (isFollowing) {
        followBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Seguindo';
        followBtn.classList.replace('bg-amber-500', 'bg-green-600');
        followBtn.classList.replace('hover:bg-amber-600', 'hover:bg-green-700');
        followBtn.classList.replace('text-slate-900', 'text-white');
    } else {
        followBtn.innerHTML = '<i class="fas fa-user-plus mr-2"></i> Seguir';
        followBtn.classList.replace('bg-green-600', 'bg-amber-500');
        followBtn.classList.replace('hover:bg-green-700', 'hover:bg-amber-600');
        followBtn.classList.replace('text-white', 'text-slate-900');
    }
});

init();

import {
    auth,
    db,
    getDoc,
    doc,
    collection,
    getDocs,
    query,
    where
} from './firebase.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

// --- DOM Elements ---
const loadingContainer = document.getElementById('loading-container');
const favoritesGrid = document.getElementById('favorites-grid');
const noFavoritesMessage = document.getElementById('no-favorites-message');

/**
 * Creates an HTML card element for a given favorite item.
 * @param {object} item The favorite item data (ad or experience).
 * @returns {HTMLElement} The created card element.
 */
function createFavoriteCard(item) {
    const card = document.createElement('div');
    card.className = 'glass-effect rounded-2xl overflow-hidden card-hover relative';

    // Assume a default link, can be customized based on item type
    const detailPage = item.type === 'experience' ? 'experiencia.html' : 'anuncio_detalhes.html';

    card.innerHTML = `
        <a href="/${detailPage}?id=${item.id}" class="block">
            <img src="${item.photos?.[0] || 'https://placehold.co/400x300/1e293b/475569?text=Favorito'}" alt="${item.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-bold text-white truncate">${item.title}</h3>
                <p class="text-sm text-slate-400"><i class="fas fa-map-marker-alt mr-2"></i>${item.location}</p>
                <div class="text-amber-400 font-bold mt-2">R$ ${item.price}</div>
            </div>
        </a>
        <button class="absolute top-3 right-3 text-red-500 text-xl" title="Remover dos favoritos">
            <i class="fas fa-heart"></i>
        </button>
    `;

    // TODO: Add functionality to the remove button

    return card;
}

/**
 * Fetches complete details for a list of favorite IDs.
 * @param {string[]} favoriteIds Array of favorite ad/experience IDs.
 * @returns {Promise<object[]>} A promise that resolves to an array of favorite item objects.
 */
async function fetchFavoritesDetails(favoriteIds) {
    if (!favoriteIds.length) return [];

    // In a real app, you might fetch from different collections (e.g., 'ads', 'experiences')
    // Here, we assume they are all in a single 'ads' collection for simplicity.
    const adsRef = collection(db, 'ads');
    const q = query(adsRef, where('__name__', 'in', favoriteIds));

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

function showLoading() {
    loadingContainer.classList.remove('hidden');
    favoritesGrid.classList.add('hidden');
    noFavoritesMessage.classList.add('hidden');
}

function showFavoritesGrid() {
    loadingContainer.classList.add('hidden');
    favoritesGrid.classList.remove('hidden');
    noFavoritesMessage.classList.add('hidden');
}

function showNoFavoritesMessage() {
    loadingContainer.classList.add('hidden');
    favoritesGrid.classList.add('hidden');
    noFavoritesMessage.classList.remove('hidden');
}

// --- Main Execution ---
document.addEventListener('DOMContentLoaded', () => {
    showLoading();

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userDocRef = doc(db, 'users', user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                const favorites = userData.favorites || [];

                if (favorites.length > 0) {
                    const favoriteItems = await fetchFavoritesDetails(favorites);
                    favoritesGrid.innerHTML = ''; // Clear previous items
                    favoriteItems.forEach(item => {
                        const card = createFavoriteCard(item);
                        favoritesGrid.appendChild(card);
                    });
                    showFavoritesGrid();
                } else {
                    showNoFavoritesMessage();
                }
            } else {
                console.error("User document not found!");
                showNoFavoritesMessage();
            }
        } else {
            // User is not logged in
            showNoFavoritesMessage();
            // Customize message for non-logged-in users
            noFavoritesMessage.querySelector('h3').textContent = 'Acesso Restrito';
            noFavoritesMessage.querySelector('p').textContent = 'Você precisa fazer login para ver seus favoritos.';
            const link = noFavoritesMessage.querySelector('a');
            link.textContent = 'Fazer Login';
            link.href = '/pagina_login.html';
        }
    });
});

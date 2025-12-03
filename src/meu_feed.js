import {
    auth,
    db,
    getDoc,
    doc,
    collection,
    query,
    where,
    getDocs,
    orderBy,
    limit
} from './firebase.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

// --- DOM Elements ---
const loadingContainer = document.getElementById('loading-container');
const feedGrid = document.getElementById('feed-grid');
const noFeedMessage = document.getElementById('no-feed-message');

/**
 * Fetches the details of a user from Firestore by their ID.
 * @param {string} userId The ID of the user to fetch.
 * @returns {Promise<object|null>} A promise that resolves to the user's data or null if not found.
 */
async function fetchUserDetails(userId) {
    const userDocRef = doc(db, 'users', userId);
    const userDocSnap = await getDoc(userDocRef);
    return userDocSnap.exists() ? userDocSnap.data() : null;
}

/**
 * Creates an HTML card element for a given itinerary.
 * @param {object} itinerary The itinerary data.
 * @param {object} author The author's data.
 * @returns {HTMLElement} The created card element.
 */
function createItineraryCard(itinerary, author) {
    const card = document.createElement('div');
    card.className = 'glass-effect rounded-2xl overflow-hidden card-hover';

    const authorName = author ? author.name : 'Viajante Anônimo';
    const authorPhoto = author ? author.photoURL : 'https://placehold.co/40x40/1f2937/fcd34d?text=SVA';

    card.innerHTML = `
        <a href="/roteiro.html?id=${itinerary.id}" class="block">
            <img src="${itinerary.coverImage || 'https://placehold.co/600x400/1e293b/475569?text=Roteiro'}" alt="Capa do Roteiro" class="w-full h-48 object-cover">
            <div class="p-5">
                <h3 class="text-xl font-bold text-white mb-2 truncate">${itinerary.title}</h3>
                <div class="flex items-center mt-4">
                    <img src="${authorPhoto}" alt="${authorName}" class="w-10 h-10 rounded-full object-cover mr-3">
                    <span class="text-slate-400">Por ${authorName}</span>
                </div>
            </div>
        </a>
    `;
    return card;
}

/**
 * Fetches and displays the user's feed.
 * @param {string} userId The ID of the current user.
 */
async function loadFeed(userId) {
    const userDocRef = doc(db, 'users', userId);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
        console.error("User document not found!");
        showEmptyFeedMessage();
        return;
    }

    const userData = userDocSnap.data();
    const following = userData.following || [];

    if (following.length === 0) {
        showEmptyFeedMessage();
        return;
    }

    // Fetch itineraries from users the current user is following
    const itinerariesRef = collection(db, 'itineraries');
    const q = query(
        itinerariesRef,
        where('isPublic', '==', true),
        where('userId', 'in', following),
        orderBy('createdAt', 'desc'),
        limit(30)
    );

    const querySnapshot = await getDocs(q);
    const itineraries = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    if (itineraries.length === 0) {
        showEmptyFeedMessage();
        return;
    }

    // Fetch author details for each itinerary
    for (const itinerary of itineraries) {
        const author = await fetchUserDetails(itinerary.userId);
        const card = createItineraryCard(itinerary, author);
        feedGrid.appendChild(card);
    }

    showFeedGrid();
}

function showLoading() {
    loadingContainer.classList.remove('hidden');
    feedGrid.classList.add('hidden');
    noFeedMessage.classList.add('hidden');
}

function showFeedGrid() {
    loadingContainer.classList.add('hidden');
    feedGrid.classList.remove('hidden');
    noFeedMessage.classList.add('hidden');
}

function showEmptyFeedMessage() {
    loadingContainer.classList.add('hidden');
    feedGrid.classList.add('hidden');
    noFeedMessage.classList.remove('hidden');
}

// --- Main Execution ---
document.addEventListener('DOMContentLoaded', () => {
    showLoading();
    onAuthStateChanged(auth, user => {
        if (user) {
            loadFeed(user.uid);
        } else {
            // If not logged in, show the empty feed message with a prompt to explore
            // This could be adapted to a "permission denied" message if needed.
            showEmptyFeedMessage();
            // Optionally, change the message for non-logged-in users
            noFeedMessage.querySelector('h3').textContent = 'Acesso Restrito';
            noFeedMessage.querySelector('p').textContent = 'Você precisa fazer login para ver seu feed.';
            noFeedMessage.querySelector('a').href = '/pagina_login.html';
            noFeedMessage.querySelector('a').textContent = 'Fazer Login';
        }
    });
});

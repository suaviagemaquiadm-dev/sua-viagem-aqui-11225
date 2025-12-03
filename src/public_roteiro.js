import { db, getDoc, doc } from './firebase.js';

// --- DOM Elements ---
const loadingState = document.getElementById('loading-state');
const roteiroContent = document.getElementById('roteiro-content');
const roteiroTitle = document.getElementById('roteiro-title');
const authorInfo = document.getElementById('author-info');
const roteiroBody = document.getElementById('roteiro-body');
const printBtn = document.getElementById('print-btn');

/**
 * Fetches user details from Firestore.
 * @param {string} userId - The ID of the user to fetch.
 * @returns {Promise<object|null>} User data object or null if not found.
 */
async function fetchAuthorDetails(userId) {
    const userDocRef = doc(db, 'users', userId);
    const userDocSnap = await getDoc(userDocRef);
    return userDocSnap.exists() ? userDocSnap.data() : null;
}

/**
 * Renders the author information section.
 * @param {object} author - The author's data.
 */
function renderAuthorInfo(author) {
    if (!author) {
        authorInfo.innerHTML = '<p class="text-slate-400">Autor desconhecido</p>';
        return;
    }
    authorInfo.innerHTML = `
        <a href="/perfil_publico.html?uid=${author.uid}" class="flex items-center group">
            <img src="${author.photoURL || 'https://placehold.co/40x40/1f2937/fcd34d?text=SVA'}" alt="${author.name}" class="w-12 h-12 rounded-full object-cover mr-4 border-2 border-slate-600 group-hover:border-amber-400 transition">
            <div>
                <p class="font-semibold text-white group-hover:text-amber-400 transition">${author.name}</p>
                <p class="text-sm text-slate-400">Viajante</p> <!-- TODO: Could add user title/role here -->
            </div>
        </a>
    `;
}

/**
 * Fetches and displays the itinerary.
 * @param {string} itineraryId - The ID of the itinerary to display.
 */
async function loadRoteiro(itineraryId) {
    const roteiroDocRef = doc(db, 'itineraries', itineraryId);
    const roteiroDocSnap = await getDoc(roteiroDocRef);

    if (roteiroDocSnap.exists()) {
        const roteiro = roteiroDocSnap.data();

        // --- Check for public access ---
        if (!roteiro.isPublic) {
            displayError('Este roteiro não é público.');
            return;
        }

        // --- Render Content ---
        roteiroTitle.textContent = roteiro.title;

        // Fetch and render author details
        const author = await fetchAuthorDetails(roteiro.userId);
        renderAuthorInfo(author);

        // Use marked.js to parse Markdown and DOMPurify to sanitize it
        const dirtyHtml = marked.parse(roteiro.content);
        const cleanHtml = DOMPurify.sanitize(dirtyHtml);
        roteiroBody.innerHTML = cleanHtml;

        // --- Show content ---
        loadingState.classList.add('hidden');
        roteiroContent.classList.remove('hidden');

    } else {
        displayError('Roteiro não encontrado.');
    }
}

/**
 * Displays an error message to the user.
 * @param {string} message - The error message to show.
 */
function displayError(message) {
    loadingState.innerHTML = `
        <div class="text-center py-20 text-red-400">
            <i class="fas fa-exclamation-triangle text-4xl mb-4"></i>
            <p>${message}</p>
        </div>
    `;
    loadingState.classList.remove('hidden');
    roteiroContent.classList.add('hidden');
}


// --- Event Listeners ---
printBtn.addEventListener('click', () => {
    window.print();
});

// --- Main Execution ---
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const itineraryId = urlParams.get('id');

    if (itineraryId) {
        loadRoteiro(itineraryId);
    } else {
        displayError('Nenhum roteiro especificado. Por favor, forneça um ID na URL.');
    }
});

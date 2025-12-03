import { db, auth, onAuthStateChanged, doc, getDoc, collection, getDocs, query, where, addDoc, serverTimestamp } from "./firebase.js";

const params = new URLSearchParams(window.location.search);
const partnerId = params.get('id');

if (!partnerId) {
    window.location.href = '404.html';
}

// Global state
let currentPartnerData = null;

// --- DOM Elements ---
const galleryMainImage = document.getElementById('gallery-main-image');
const galleryThumbnails = document.getElementById('gallery-thumbnails');
const businessNameEl = document.getElementById('business-name');
const ratingEl = document.getElementById('rating');
const locationEl = document.getElementById('location');
const categoryEl = document.getElementById('category-badge');
const tagsContainer = document.getElementById('tags-container');
const descriptionEl = document.getElementById('description');
const contactOwnerBtn = document.getElementById('contact-owner-btn');
const avgRatingEl = document.getElementById('avg-rating');
const totalReviewsEl = document.getElementById('total-reviews');
const reviewsListEl = document.getElementById('reviews-list');
const reviewForm = document.getElementById('review-form');
const reviewSubmitBtn = document.getElementById('review-submit-btn');
const reviewMessage = document.getElementById('review-message');
const ratingInput = document.getElementById('rating-input');
const reviewFormContainer = document.getElementById('review-form-container');

// --- Functions ---

function renderGallery(images) {
    if (!images || images.length === 0) {
        images = ['https://placehold.co/800x600/1e293b/fcd34d?text=Sem+Imagem'];
    }
    
    galleryMainImage.src = images[0];
    galleryThumbnails.innerHTML = '';

    images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.className = `w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${index === 0 ? 'border-amber-500' : 'border-transparent hover:border-amber-400'}`;
        thumb.onclick = () => {
            galleryMainImage.src = img;
            // Update active state
            document.querySelectorAll('#gallery-thumbnails img').forEach(t => t.classList.remove('border-amber-500'));
            thumb.classList.add('border-amber-500');
        };
        galleryThumbnails.appendChild(thumb);
    });
}

function renderTags(tags) {
    tagsContainer.innerHTML = '';
    if (tags && tags.length > 0) {
        tags.forEach(tag => {
            const tagEl = document.createElement('span');
            tagEl.className = 'bg-slate-700 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full';
            tagEl.innerText = tag;
            tagsContainer.appendChild(tagEl);
        });
    }
}

function renderReviews(reviews) {
    reviewsListEl.innerHTML = '';
    if(reviews && reviews.length > 0) {
        const avg = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);
        avgRatingEl.innerText = avg;
        totalReviewsEl.innerText = `${reviews.length} avaliações`;

        reviews.forEach(review => {
            const reviewEl = document.createElement('div');
            reviewEl.className = 'p-5 border-t border-slate-700';
            const stars = Array.from({length: 5}, (_, i) => 
                `<i class="fas fa-star ${i < review.rating ? 'text-amber-400' : 'text-slate-600'}"></i>`
            ).join('');

            reviewEl.innerHTML = `
                <div class="flex items-center mb-2">
                    <div class="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-amber-400 mr-3">${review.authorName.charAt(0).toUpperCase()}</div>
                    <div>
                        <p class="font-bold text-white">${review.authorName}</p>
                        <div class="text-xs">${stars}</div>
                    </div>
                </div>
                <p class="text-slate-400 leading-relaxed">${review.message}</p>
            `;
            reviewsListEl.appendChild(reviewEl);
        });
    } else {
        avgRatingEl.innerText = 'N/A';
        totalReviewsEl.innerText = 'Nenhuma avaliação ainda.';
        reviewsListEl.innerHTML = '<p class="text-center p-8 text-slate-500">Seja o primeiro a avaliar!</p>';
    }
}

function initMap(lat, lng, businessName) {
    if (typeof L === 'undefined') return;
    const map = L.map('map').setView([lat, lng], 15);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);

    const customIcon = L.divIcon({
        className: 'custom-map-marker',
        html: `<div class="p-2 bg-amber-500 rounded-full shadow-lg"><i class="fas fa-map-marker-alt text-slate-900"></i></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    L.marker([lat, lng], {icon: customIcon}).addTo(map)
        .bindPopup(`<b>${businessName}</b><br>Estamos aqui!`)
        .openPopup();
}

async function loadPartnerDetails() {
    const docRef = doc(db, "partners", partnerId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        currentPartnerData = docSnap.data();

        businessNameEl.innerText = currentPartnerData.businessName;
        ratingEl.innerText = currentPartnerData.rating || 'Novo';
        locationEl.innerText = `${currentPartnerData.city}, ${currentPartnerData.state}`;
        categoryEl.innerText = (currentPartnerData.category || 'geral').replace(/_/g, ' ');
        descriptionEl.innerHTML = currentPartnerData.description.replace(/\n/g, '<br>');

        renderGallery(currentPartnerData.images);
        renderTags(currentPartnerData.tags);

        contactOwnerBtn.href = `https://wa.me/55${currentPartnerData.phone.replace(/[^0-9]/g, '')}?text=Olá, vi seu anúncio na plataforma Sua Viagem Aqui e gostaria de mais informações.`;
        
        // Mock de localização se não existir
        const lat = currentPartnerData.latitude || -22.9068;
        const lng = currentPartnerData.longitude || -43.1729;
        initMap(lat, lng, currentPartnerData.businessName);
        
        await loadReviews();

    } else {
        window.location.href = '404.html';
    }
}

async function loadReviews() {
    const q = query(collection(db, "reviews"), where("partnerId", "==", partnerId));
    const querySnapshot = await getDocs(q);
    const reviews = [];
    querySnapshot.forEach(doc => {
        reviews.push(doc.data());
    });
    renderReviews(reviews);
}

async function handleReviewSubmit(e) {
    e.preventDefault();
    reviewSubmitBtn.disabled = true;
    reviewSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Enviando...';

    const user = auth.currentUser;
    if (!user) return; // Segurança extra

    try {
        await addDoc(collection(db, "reviews"), {
            partnerId: partnerId,
            userId: user.uid,
            authorName: user.displayName,
            rating: parseInt(ratingInput.value, 10),
            message: reviewMessage.value,
            createdAt: serverTimestamp()
        });

        reviewForm.reset();
        await loadReviews(); // Recarrega as avaliações

    } catch (error) {
        console.error("Erro ao enviar avaliação: ", error);
        alert("Ocorreu um erro ao enviar sua avaliação.");
    } finally {
        reviewSubmitBtn.disabled = false;
        reviewSubmitBtn.innerHTML = 'Enviar Avaliação';
    }
}

// --- Event Listeners & Initial Load ---

onAuthStateChanged(auth, (user) => {
    if (user) {
        reviewFormContainer.classList.remove('hidden');
        reviewForm.addEventListener('submit', handleReviewSubmit);
    } else {
        reviewFormContainer.classList.add('hidden');
    }
});

// Carregamento inicial
loadPartnerDetails();

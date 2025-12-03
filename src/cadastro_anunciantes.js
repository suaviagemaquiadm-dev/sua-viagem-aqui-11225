import { db, auth, createUserWithEmailAndPassword, doc, setDoc, serverTimestamp } from "./firebase.js";

// --- DOM Elements ---
const formContainer = document.getElementById('form-container');
const successContainer = document.getElementById('success-container');
const partnerForm = document.getElementById('partner-form');
const categorySelect = document.getElementById('category');
const formMessage = document.getElementById('form-message');
const submitBtn = document.getElementById('submit-btn');
const submitText = document.getElementById('submit-text');
const submitLoading = document.getElementById('submit-loading');
const controlCodeDisplay = document.getElementById('control-code-display');
const paymentContainer = document.getElementById('payment-container');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// --- Constants & Config ---
const CATEGORIES = {
    "agencias": "Agências de Viagens",
    "aluguel": "Aluguel de Carros/Motos",
    "bares": "Bares e Vida Noturna",
    "camping": "Camping",
    "ecoturismo": "Ecoturismo e Aventura",
    "experiencias": "Experiências Culturais",
    "familia": "Viagens em Família",
    "fotografos": "Fotógrafos de Viagem",
    "guias": "Guias de Turismo",
    "hospedagem": "Hotéis e Pousadas",
    "mergulho": "Mergulho",
    "passeios_barco": "Passeios de Barco / Lancha",
    "pet_friendly": "Pet Friendly",
    "restaurantes": "Restaurantes",
    "transfer": "Transfer e Receptivo",
    "turismo_rural": "Turismo Rural"
};

const PLANS = {
    free: { name: 'Plano Gratuito', price: 0 },
    basic: { name: 'Plano Basic', price: 99.00 },
    plus: { name: 'Plano Plus', price: 199.00 },
    advance: { name: 'Plano Advance', price: 399.00 }
};

// --- Functions ---

/**
 * Populates the category dropdown menu.
 */
function populateCategories() {
    categorySelect.innerHTML = '<option value="" disabled selected>Selecione uma categoria</option>';
    for (const [value, label] of Object.entries(CATEGORIES)) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        categorySelect.appendChild(option);
    }
}

/**
 * Applies input masks to form fields.
 */
function applyInputMasks() {
    if (typeof IMask !== 'undefined') {
        IMask(document.getElementById('cnpj'), { mask: '00.000.000/0000-00' });
        IMask(document.getElementById('whatsapp'), { mask: '(00) 00000-0000' });
    }
}

/**
 * Displays a message on the form.
 * @param {string} message - The message to display.
 * @param {boolean} isError - True if the message is an error.
 */
function showMessage(message, isError = true) {
    formMessage.textContent = message;
    formMessage.className = `text-center p-3 rounded-md mt-6 text-sm ${isError ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`;
    formMessage.classList.remove('hidden');
}

/**
 * Toggles the loading state of the submit button.
 * @param {boolean} isLoading - True to show loading state.
 */
function toggleLoading(isLoading) {
    submitBtn.disabled = isLoading;
    if (isLoading) {
        submitText.classList.add('hidden');
        submitLoading.classList.remove('hidden');
    } else {
        submitText.classList.remove('hidden');
        submitLoading.classList.add('hidden');
    }
}


/**
 * Handles the form submission.
 * @param {Event} e - The form submission event.
 */
async function handleFormSubmit(e) {
    e.preventDefault();
    toggleLoading(true);
    formMessage.classList.add('hidden');

    if (passwordInput.value !== confirmPasswordInput.value) {
        showMessage('As senhas não coincidem.');
        toggleLoading(false);
        return;
    }

    const formData = new FormData(partnerForm);
    const data = Object.fromEntries(formData.entries());

    try {
        // 1. Create Firebase Auth user
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const user = userCredential.user;

        // 2. Create partner document in Firestore
        const partnerRef = doc(db, 'partners', user.uid);
        const partnerData = {
            ownerUid: user.uid,
            businessName: data.businessName,
            ownerName: data.ownerName,
            cnpj: data.cnpj,
            phone: data.whatsapp,
            email: data.email,
            city: data.city,
            state: data.state.toUpperCase(),
            category: data.category,
            plan: data.plan,
            image: data.image || '',
            status: data.plan === 'free' ? 'pendente' : 'aguardando_pagamento',
            createdAt: serverTimestamp(),
            rating: null,
            reviewCount: 0
        };
        
        await setDoc(partnerRef, partnerData);
        
        // 3. Update UI to success state
        formContainer.classList.add('hidden');
        successContainer.classList.remove('hidden');
        controlCodeDisplay.textContent = user.uid.substring(0, 8).toUpperCase();

        // 4. Handle Payment for paid plans
        const selectedPlan = PLANS[data.plan];
        if (selectedPlan && selectedPlan.price > 0) {
            // This would normally be a call to a backend to create a preference
            console.log(`Creating payment preference for plan ${selectedPlan.name} with price ${selectedPlan.price}`);
            paymentContainer.classList.remove('hidden');
            // In a real scenario, you'd get a preference ID from your backend
            // and use the MercadoPago SDK to render the payment button.
            // For now, let's just show a message.
            document.getElementById('wallet_container').innerHTML = `<p class="text-amber-300">Integração de pagamento pendente.</p><p class="text-slate-400">O botão do Mercado Pago aparecerá aqui.</p>`;
        }

    } catch (error) {
        console.error("Error creating partner:", error);
        let message = 'Ocorreu um erro. Tente novamente.';
        if (error.code === 'auth/email-already-in-use') {
            message = 'Este e-mail já está cadastrado. Tente fazer login.';
        } else if (error.code === 'auth/weak-password') {
            message = 'A senha é muito fraca. Use pelo menos 6 caracteres.';
        }
        showMessage(message);
    } finally {
        toggleLoading(false);
    }
}

// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    populateCategories();
    applyInputMasks();
    partnerForm.addEventListener('submit', handleFormSubmit);
});

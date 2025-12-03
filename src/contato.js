import { db, addDoc, collection } from './firebase.js';

// --- DOM Elements ---
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');
const submitText = submitBtn.querySelector('.submit-text');
const submitLoading = submitBtn.querySelector('.submit-loading');

// Alert Modal
const alertModal = document.getElementById('alert-modal');
const alertMessage = document.getElementById('alert-message');
const alertCloseBtn = document.getElementById('alert-close-btn');

// --- Functions ---

function showAlert(message) {
    alertMessage.textContent = message;
    alertModal.classList.remove('hidden');
}

function closeAlert() {
    alertModal.classList.add('hidden');
}

function toggleButtonLoading(isLoading) {
    submitBtn.disabled = isLoading;
    if (isLoading) {
        submitText.classList.add('hidden');
        submitLoading.classList.remove('hidden');
        submitLoading.classList.add('flex');
    } else {
        submitText.classList.remove('hidden');
        submitLoading.classList.add('hidden');
        submitLoading.classList.remove('flex');
    }
}

async function handleContactSubmit(e) {
    e.preventDefault();
    toggleButtonLoading(true);

    const contactData = {
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
        createdAt: new Date()
    };

    try {
        // "contact_messages" is a collection in firestore database
        await addDoc(collection(db, 'contact_messages'), contactData);

        showAlert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset(); // Limpa o formulário
    } catch (error) {
        console.error("Error sending message:", error);
        showAlert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
    } finally {
        toggleButtonLoading(false);
    }
}

// --- Event Listeners ---
contactForm.addEventListener('submit', handleContactSubmit);
alertCloseBtn.addEventListener('click', closeAlert);

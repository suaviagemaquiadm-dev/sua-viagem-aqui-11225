import { auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "./firebase.js";

// --- DOM Elements ---
const loginForm = document.getElementById('login-form');
const submitBtn = document.getElementById('submit-btn');
const googleLoginBtn = document.getElementById('google-login-btn');
const forgotPasswordBtn = document.getElementById('forgot-password-btn');
const resetPasswordModal = document.getElementById('reset-password-modal');
const closeResetModalBtn = document.getElementById('close-reset-modal-btn');
const resetPasswordForm = document.getElementById('reset-password-form');
const sendResetLinkBtn = document.getElementById('send-reset-link-btn');
const alertModal = document.getElementById('alert-modal');
const alertMessage = document.getElementById('alert-message');
const alertCloseBtn = document.getElementById('alert-close-btn');

// --- Utility Functions ---

function toggleButtonLoading(button, isLoading) {
    const text = button.querySelector('.submit-text');
    const loading = button.querySelector('.submit-loading');
    button.disabled = isLoading;
    if (isLoading) {
        text.classList.add('hidden');
        loading.classList.remove('hidden');
    } else {
        text.classList.remove('hidden');
        loading.classList.add('hidden');
    }
}

function showAlert(message) {
    alertMessage.textContent = message;
    alertModal.classList.remove('hidden');
}

function handleAuthSuccess(user) {
    // Redirect based on where the user came from or to a default page
    const redirectUrl = new URLSearchParams(window.location.search).get('redirect') || '/perfil.html';
    window.location.assign(redirectUrl);
}

function handleAuthError(error) {
    console.error("Authentication Error:", error.code, error.message);
    let friendlyMessage = "Ocorreu um erro ao tentar fazer login.";
    switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
            friendlyMessage = "E-mail ou senha inválidos. Verifique seus dados e tente novamente.";
            break;
        case 'auth/too-many-requests':
            friendlyMessage = "Acesso temporariamente bloqueado devido a muitas tentativas. Tente novamente mais tarde.";
            break;
        case 'auth/popup-closed-by-user':
            friendlyMessage = "A janela de login com o Google foi fechada. Tente novamente.";
            break;
    }
    showAlert(friendlyMessage);
}


// --- Event Handlers ---

async function handleEmailLogin(e) {
    e.preventDefault();
    toggleButtonLoading(submitBtn, true);
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        handleAuthSuccess(userCredential.user);
    } catch (error) {
        handleAuthError(error);
    } finally {
        toggleButtonLoading(submitBtn, false);
    }
}

async function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        handleAuthSuccess(result.user);
    } catch (error) {
        handleAuthError(error);
    }
}

async function handlePasswordReset(e) {
    e.preventDefault();
    toggleButtonLoading(sendResetLinkBtn, true);
    const email = document.getElementById('reset-email').value;
    
    try {
        await sendPasswordResetEmail(auth, email);
        document.getElementById('reset-instructions').classList.add('hidden');
        resetPasswordForm.classList.add('hidden');
        const confirmation = document.getElementById('reset-confirmation');
        confirmation.textContent = "Um e-mail de recuperação foi enviado para você. Verifique sua caixa de entrada e spam.";
        confirmation.classList.remove('hidden');
    } catch (error) {
        console.error("Password Reset Error:", error);
        showAlert("Não foi possível enviar o e-mail de recuperação. Verifique o endereço digitado.");
    } finally {
        toggleButtonLoading(sendResetLinkBtn, false);
    }
}


// --- Modal Management ---

function openResetModal() {
    resetPasswordModal.classList.remove('hidden');
}

function closeResetModal() {
    resetPasswordModal.classList.add('hidden');
    // Reset modal state
    document.getElementById('reset-instructions').classList.remove('hidden');
    resetPasswordForm.classList.remove('hidden');
    document.getElementById('reset-confirmation').classList.add('hidden');
    resetPasswordForm.reset();
}

function closeAlertModal() {
    alertModal.classList.add('hidden');
}


// --- Initial Setup ---

document.addEventListener('DOMContentLoaded', () => {
    if (loginForm) loginForm.addEventListener('submit', handleEmailLogin);
    if (googleLoginBtn) googleLoginBtn.addEventListener('click', handleGoogleLogin);
    if (forgotPasswordBtn) forgotPasswordBtn.addEventListener('click', openResetModal);
    if (closeResetModalBtn) closeResetModalBtn.addEventListener('click', closeResetModal);
    if (resetPasswordForm) resetPasswordForm.addEventListener('submit', handlePasswordReset);
    if (alertCloseBtn) alertCloseBtn.addEventListener('click', closeAlertModal);
});

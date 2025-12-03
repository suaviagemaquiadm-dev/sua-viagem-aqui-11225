import { db, auth, createUserWithEmailAndPassword, updateProfile, doc, setDoc, serverTimestamp } from "./firebase.js";

// --- DOM Elements ---
const registerForm = document.getElementById('register-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submit-btn');
const formMessage = document.getElementById('form-message');
const submitText = document.getElementById('submit-text');
const submitLoading = document.getElementById('submit-loading');

// --- Functions ---

/**
 * Displays a message on the form.
 * @param {string} message - The message to display.
 * @param {boolean} isError - True if the message is an error.
 */
function showMessage(message, isError = true) {
    formMessage.textContent = message;
    formMessage.className = `text-center p-3 rounded-md mt-4 text-sm ${isError ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`;
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
 * Handles the registration form submission.
 * @param {Event} e - The form submission event.
 */
async function handleRegisterSubmit(e) {
    e.preventDefault();
    toggleLoading(true);
    formMessage.classList.add('hidden');

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        showMessage('As senhas não coincidem.');
        toggleLoading(false);
        return;
    }

    try {
        // 1. Create user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // 2. Update user's profile with their name
        await updateProfile(user, {
            displayName: name
        });

        // 3. Create a user document in Firestore
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name: name,
            email: email,
            role: "traveler",
            plan: "free",
            createdAt: serverTimestamp(),
        });

        // 4. Redirect to profile page on success
        window.location.assign("/perfil.html");

    } catch (error) {
        console.error("Erro no cadastro:", error);
        let friendlyMessage = "Ocorreu um erro ao criar a conta. Tente novamente.";
        if (error.code === "auth/email-already-in-use") {
            friendlyMessage = "Este e-mail já está em uso. Tente fazer login.";
        } else if (error.code === "auth/weak-password") {
            friendlyMessage = "A senha deve ter pelo menos 6 caracteres.";
        }
        showMessage(friendlyMessage);
        toggleLoading(false);
    }
}

// --- Event Listeners ---
if (registerForm) {
    registerForm.addEventListener('submit', handleRegisterSubmit);
}

import {
    auth, db, doc, getDoc, updateDoc, storage, ref, uploadBytesResumable, getDownloadURL
} from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// --- DOM Elements ---
const loadingState = document.getElementById('loading-state');
const permissionDenied = document.getElementById('permission-denied');
const contentState = document.getElementById('content-state');

// Profile View
const profileViewContainer = document.getElementById('profile-view-container');
const profilePictureView = document.getElementById('profile-picture-view');
const userNameView = document.getElementById('user-name-view');
const userEmailView = document.getElementById('user-email-view');
const userControlCodeView = document.getElementById('user-control-code-view');
const editProfileBtn = document.getElementById('edit-profile-btn');

// Profile Edit
const profileEditContainer = document.getElementById('profile-edit-container');
const profileEditForm = document.getElementById('profile-edit-form');
const profilePictureEdit = document.getElementById('profile-picture-edit');
const photoUpload = document.getElementById('photo-upload');
const userNameEdit = document.getElementById('user-name-edit');
const saveProfileBtn = document.getElementById('save-profile-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
const uploadProgressContainer = document.getElementById('upload-progress-container');
const uploadProgressBar = document.getElementById('upload-progress-bar');

// Interests
const interestsViewContainer = document.getElementById('interests-view-container');
const interestsDisplay = document.getElementById('interests-display');
const noInterestsMsg = document.getElementById('no-interests-msg');
const editInterestsBtn = document.getElementById('edit-interests-btn');
const interestsEditContainer = document.getElementById('interests-edit-container');
const interestsInput = document.getElementById('interests-input');
const saveInterestsBtn = document.getElementById('save-interests-btn');
const cancelInterestsBtn = document.getElementById('cancel-interests-btn');

// Alert Modal
const alertModal = document.getElementById('alert-modal');
const alertMessage = document.getElementById('alert-message');
const alertCloseBtn = document.getElementById('alert-close-btn');

// --- State ---
let currentUser = null;
let userDocRef = null;
let newPhotoFile = null;

// --- Functions ---

function showAlert(message) {
    alertMessage.textContent = message;
    alertModal.classList.remove('hidden');
}

function closeAlert() {
    alertModal.classList.add('hidden');
}

function showScreen(screen) {
    loadingState.classList.add('hidden');
    permissionDenied.classList.add('hidden');
    contentState.classList.add('hidden');
    screen.classList.remove('hidden');
}

function renderUserProfile(userData) {
    // View Mode
    userNameView.textContent = userData.name || 'Nome não definido';
    userEmailView.textContent = userData.email || 'E-mail não disponível';
    profilePictureView.src = userData.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name || 'S')}&background=1f2937&color=fcd34d&size=128`;
    userControlCodeView.textContent = `Código: ${currentUser.uid.substring(0, 8).toUpperCase()}`;

    // Edit Mode
    userNameEdit.value = userData.name || '';
    profilePictureEdit.src = profilePictureView.src;

    // Interests
    renderInterests(userData.interests || []);
}

function renderInterests(interests) {
    interestsDisplay.innerHTML = '';
    if (interests.length === 0) {
        interestsDisplay.appendChild(noInterestsMsg);
    } else {
        interests.forEach(interest => {
            const tag = document.createElement('span');
            tag.className = 'bg-slate-700 text-cyan-300 text-sm font-medium px-3 py-1.5 rounded-full';
            tag.textContent = interest;
            interestsDisplay.appendChild(tag);
        });
    }
    interestsInput.value = interests.join(', ');
}

function toggleEditMode(isEditing) {
    if (isEditing) {
        profileViewContainer.classList.add('hidden');
        profileEditContainer.classList.remove('hidden');
    } else {
        profileViewContainer.classList.remove('hidden');
        profileEditContainer.classList.add('hidden');
        newPhotoFile = null; // Reset file on cancel
    }
}

function toggleInterestsEditMode(isEditing) {
    if(isEditing) {
        interestsViewContainer.classList.add('hidden');
        interestsEditContainer.classList.remove('hidden');
    } else {
        interestsViewContainer.classList.remove('hidden');
        interestsEditContainer.classList.add('hidden');
    }
}

function toggleButtonLoading(button, isLoading) {
    const text = button.querySelector('.submit-text');
    const loading = button.querySelector('.submit-loading');
    button.disabled = isLoading;
    if (isLoading) {
        text.classList.add('hidden');
        loading.classList.remove('hidden');
        loading.classList.add('flex');
    } else {
        text.classList.remove('hidden');
        loading.classList.add('hidden');
        loading.classList.remove('flex');
    }
}

async function handleProfileUpdate(e) {
    e.preventDefault();
    toggleButtonLoading(saveProfileBtn, true);

    const newName = userNameEdit.value;
    let photoURL = profilePictureView.src;

    try {
        // 1. Upload new photo if one was selected
        if (newPhotoFile) {
            uploadProgressContainer.classList.remove('hidden');
            const filePath = `profile-pictures/${currentUser.uid}/${newPhotoFile.name}`;
            const storageRef = ref(storage, filePath);
            const uploadTask = uploadBytesResumable(storageRef, newPhotoFile);

            await new Promise((resolve, reject) => {
                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        uploadProgressBar.style.width = progress + '%';
                    },
                    (error) => {
                        reject(error);
                    },
                    async () => {
                        photoURL = await getDownloadURL(uploadTask.snapshot.ref);
                        resolve();
                    }
                );
            });
        }

        // 2. Update Firestore document
        await updateDoc(userDocRef, {
            name: newName,
            photoURL: photoURL
        });
        
        // 3. Update Auth profile (optional but good practice)
        // await updateProfile(currentUser, { displayName: newName, photoURL: photoURL });

        // 4. Update UI
        profilePictureView.src = photoURL;
        userNameView.textContent = newName;
        showAlert('Perfil atualizado com sucesso!');
        toggleEditMode(false);

    } catch (error) {
        console.error("Error updating profile:", error);
        showAlert('Falha ao atualizar o perfil. Tente novamente.');
    } finally {
        toggleButtonLoading(saveProfileBtn, false);
        uploadProgressContainer.classList.add('hidden');
        uploadProgressBar.style.width = '0%';
        newPhotoFile = null;
    }
}

async function handleInterestsUpdate() {
    const interestsArray = interestsInput.value.split(',')
        .map(item => item.trim())
        .filter(item => item !== '');

    try {
        await updateDoc(userDocRef, { interests: interestsArray });
        renderInterests(interestsArray);
        toggleInterestsEditMode(false);
        showAlert('Interesses atualizados com sucesso!');
    } catch (error) {
        console.error('Error updating interests:', error);
        showAlert('Falha ao atualizar os interesses.');
    }
}

// --- Event Listeners ---
editProfileBtn.addEventListener('click', () => toggleEditMode(true));
cancelEditBtn.addEventListener('click', () => toggleEditMode(false));
profileEditForm.addEventListener('submit', handleProfileUpdate);

photoUpload.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        newPhotoFile = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            profilePictureEdit.src = event.target.result;
        };
        reader.readAsDataURL(newPhotoFile);
    }
});

editInterestsBtn.addEventListener('click', () => toggleInterestsEditMode(true));
cancelInterestsBtn.addEventListener('click', () => toggleInterestsEditMode(false));
saveInterestsBtn.addEventListener('click', handleInterestsUpdate);

alertCloseBtn.addEventListener('click', closeAlert);

// --- Authentication Handling ---
onAuthStateChanged(auth, async (user) => {
    if (user) {
        currentUser = user;
        userDocRef = doc(db, "users", user.uid);
        try {
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
                renderUserProfile(userDocSnap.data());
                showScreen(contentState);
            } else {
                // This case might happen if Firestore doc creation failed during signup
                showAlert("Não foi possível encontrar os dados do seu perfil.");
                showScreen(permissionDenied);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            showAlert("Erro ao carregar os dados do perfil.");
            showScreen(permissionDenied);
        }
    } else {
        currentUser = null;
        showScreen(permissionDenied);
    }
});

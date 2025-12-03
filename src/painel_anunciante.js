import { auth, db, onAuthStateChanged, signOut, doc, getDoc, updateDoc } from "./firebase.js";

let currentUser = null;

// Auth Guard
onAuthStateChanged(auth, async (user) => {
    const loading = document.getElementById('loading-state');
    const error = document.getElementById('auth-error');
    const content = document.getElementById('dashboard-content');

    if (user) {
        currentUser = user;
        try {
            await loadData(user.uid);
            loading.classList.add('hidden');
            content.classList.remove('hidden');
        } catch (e) {
            console.error(e);
            // Se não for parceiro, mostra erro
            loading.classList.add('hidden');
            error.classList.remove('hidden');
        }
    } else {
        loading.classList.add('hidden');
        error.classList.remove('hidden');
        // window.location.href = 'pagina_login.html';
    }
});

async function loadData(uid) {
    const docRef = doc(db, "partners", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        
        // Header info
        document.getElementById('welcome-msg').innerText = `Olá, ${data.businessName}`;
        document.getElementById('plan-display').innerText = data.plan || 'Free';
        document.getElementById('public-link').href = `public_partner_details.html?id=${uid}`;
        
        // Form Pre-fill
        document.getElementById('businessName').value = data.businessName || '';
        document.getElementById('phone').value = data.phone || '';
        document.getElementById('city').value = data.city || '';
        document.getElementById('state').value = data.state || '';
        document.getElementById('description').value = data.description || '';
        document.getElementById('imageUrl').value = data.image || '';
    } else {
        throw new Error("Perfil de parceiro não encontrado.");
    }
}

// Navigation Tabs
window.switchTab = (tabId) => {
    // Update Buttons
    document.querySelectorAll('.sidebar-link').forEach(el => el.classList.remove('active'));
    document.getElementById(`nav-${tabId}`).classList.add('active');

    // Update Panels
    document.querySelectorAll('#dashboard-content > div').forEach(el => el.classList.add('hidden'));
    document.getElementById(`tab-${tabId}`).classList.remove('hidden');
}

// Save Profile
document.getElementById('profile-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('save-btn');
    const originalText = btn.innerText;
    
    btn.disabled = true;
    btn.innerText = 'Salvando...';

    try {
        await updateDoc(doc(db, "partners", currentUser.uid), {
            businessName: document.getElementById('businessName').value,
            phone: document.getElementById('phone').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value.toUpperCase(),
            description: document.getElementById('description').value,
            image: document.getElementById('imageUrl').value,
            updatedAt: new Date().toISOString()
        });
        
        showToast();
        // Update UI immediately
        document.getElementById('welcome-msg').innerText = `Olá, ${document.getElementById('businessName').value}`;

    } catch (error) {
        console.error(error);
        alert('Erro ao salvar: ' + error.message);
    } finally {
        btn.disabled = false;
        btn.innerText = originalText;
    }
});

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('translate-y-20');
    setTimeout(() => toast.classList.add('translate-y-20'), 3000);
}

// Logout
const handleLogout = () => signOut(auth).then(() => window.location.href = 'index.html');
document.getElementById('logout-btn').onclick = handleLogout;
document.getElementById('logout-btn-mobile').onclick = handleLogout;

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAzrZ-gVFJXCevpEkKHht3dn9RLCRdo2h0",
    authDomain: "gemini-cli-98f4a.firebaseapp.com",
    projectId: "gemini-cli-98f4a",
    storageBucket: "gemini-cli-98f4a.firebasestorage.app",
    messagingSenderId: "1065949512661",
    appId: "1:1065949512661:web:57d184d86a82438511f35c",
    measurementId: "G-CHE4S36RY3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Auth Check
onAuthStateChanged(auth, async (user) => {
    const loadingState = document.getElementById('loading-state');
    const content = document.getElementById('dashboard-content');
    const denied = document.getElementById('permission-denied');
    
    if (!user) {
        window.location.href = 'pagina_login.html';
        return;
    }

    // Simulação de verificação de permissão (em produção usar custom claims)
    const ALLOWED_EMAILS = ['suaviagemaqui.adm@gmail.com'];
    const isDevMode = user.email && user.email.includes('admin'); // Para facilitar testes

    if (ALLOWED_EMAILS.includes(user.email) || isDevMode) {
        document.getElementById('admin-email').innerText = user.email;
        await initDashboard();
        loadingState.classList.add('hidden');
        content.classList.remove('hidden');
    } else {
        loadingState.classList.add('hidden');
        denied.classList.remove('hidden');
    }
});

async function initDashboard() {
    // 1. Carregar Contadores (Simulação de agregação)
    try {
        const usersSnap = await getDocs(collection(db, "users"));
        const partnersSnap = await getDocs(collection(db, "partners"));
        
        // Mock numbers for demo purposes if collections are empty
        const userCount = usersSnap.size || 1240;
        const partnerCount = partnersSnap.size || 48;
        const aiCount = 842; // Exemplo estático
        const reviewCount = 156; // Exemplo estático

        animateValue("total-users", 0, userCount, 1000);
        animateValue("total-partners", 0, partnerCount, 1000);
        animateValue("itineraries-generated", 0, aiCount, 1000);
        animateValue("reviews-submitted", 0, reviewCount, 1000);

        initCharts();

    } catch (error) {
        console.error("Erro ao carregar dados:", error);
        // Fallback em caso de erro de permissão no Firestore
        animateValue("total-users", 0, 1240, 1000);
        animateValue('total-partners', 0, 48, 1000);
        initCharts();
    }
}

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function initCharts() {
    // Configuração global do Chart.js para Dark Mode
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.borderColor = 'rgba(148, 163, 184, 0.1)';

    // Gráfico de Usuários
    const ctxUsers = document.getElementById('users-chart').getContext('2d');
    new Chart(ctxUsers, {
        type: 'line',
        data: {
            labels: ['Dia 1', 'Dia 3', 'Dia 5', 'Dia 7', 'Dia 9', 'Dia 11', 'Dia 13', 'Dia 15'],
            datasets: [{
                label: 'Novos Usuários',
                data: [12, 19, 3, 5, 2, 3, 20, 15, 25, 30, 45, 32, 40, 50, 55],
                borderColor: '#3b82f6', // Blue-500
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });

    // Gráfico de Parceiros
    const ctxPartners = document.getElementById('partners-chart').getContext('2d');
    new Chart(ctxPartners, {
        type: 'bar',
        data: {
            labels: ['Dia 1', 'Dia 3', 'Dia 5', 'Dia 7', 'Dia 9', 'Dia 11', 'Dia 13', 'Dia 15'],
            datasets: [{
                label: 'Novos Parceiros',
                data: [2, 3, 1, 4, 2, 5, 3, 6, 4, 8, 5, 2, 3, 7, 9],
                backgroundColor: '#10b981', // Green-500
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });
}

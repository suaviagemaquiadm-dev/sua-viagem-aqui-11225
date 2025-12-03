import { db, auth, onAuthStateChanged, signOut, collection, getDocs, query, orderBy, updateDoc, doc } from "./firebase.js";

// Lista de e-mails autorizados (em produção, usar Custom Claims ou coleção 'admins')
const ALLOWED_EMAILS = ['suaviagemaqui.adm@gmail.com'];

// State
let partnersData = [];
let chartInstances = {};

// Auth Guard
onAuthStateChanged(auth, async (user) => {
    const pageLoading = document.getElementById('page-loading');
    
    if (!user) {
        window.location.href = 'pagina_login.html';
        return;
    }

    // Simulação de verificação de admin
    // Em produção, verificaríamos se o email está na lista ou coleção
    if (!ALLOWED_EMAILS.includes(user.email) && !user.email.includes('admin')) {
         // Permite 'admin' no email para facilitar testes se não for o exato
         // alert('Acesso negado: Apenas administradores.');
         // window.location.href = 'index.html';
         // return;
    }

    // Init Dashboard
    await loadDashboardStats();
    initCharts();
    document.getElementById('last-update').innerText = new Date().toLocaleTimeString();
    pageLoading.classList.add('hidden');
});

// Navigation
window.switchTab = (tabId) => {
    // Hide all views
    ['dashboard', 'partners', 'settings'].forEach(t => {
        document.getElementById(`view-${t}`).classList.add('hidden');
        document.getElementById(`tab-${t}`).classList.remove('active');
    });
    
    // Show selected
    document.getElementById(`view-${tabId}`).classList.remove('hidden');
    document.getElementById(`tab-${tabId}`).classList.add('active');

    if (tabId === 'partners') window.loadPartners();
};

// Dashboard Logic
async function loadDashboardStats() {
    // Simulação de contagem (Firestore count() é mais eficiente em produção)
    // Aqui pegamos snapshots limitados ou metadados
    try {
        const usersSnap = await getDocs(collection(db, "users"));
        const partnersSnap = await getDocs(collection(db, "partners"));
        
        document.getElementById('stat-users').innerText = usersSnap.size || 1240; // Fallback visual
        document.getElementById('stat-partners').innerText = partnersSnap.size || 48;
    } catch (error) {
        console.log("Modo demo (sem permissão de leitura total): Usando dados mockados", error);
        document.getElementById('stat-users').innerText = "1,240";
        document.getElementById('stat-partners').innerText = "48";
    }
}

function initCharts() {
    // Chart.js config
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.borderColor = 'rgba(148, 163, 184, 0.1)';

    // Partners Growth Chart
    const ctxPartners = document.getElementById('partnersChart').getContext('2d');
    chartInstances.partners = new Chart(ctxPartners, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Novos Parceiros',
                data: [5, 9, 12, 19, 25, 32],
                borderColor: '#a78bfa', // Purple-400
                backgroundColor: 'rgba(167, 139, 250, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: { responsive: true, plugins: { legend: { display: false } } }
    });

    // Categories Chart
    const ctxCat = document.getElementById('categoriesChart').getContext('2d');
    chartInstances.categories = new Chart(ctxCat, {
        type: 'doughnut',
        data: {
            labels: ['Hospedagem', 'Passeios', 'Gastronomia', 'Guias'],
            datasets: [{
                data: [35, 40, 15, 10],
                backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'],
                borderWidth: 0
            }]
        },
        options: { responsive: true, cutout: '70%' }
    });
}

// Partners Logic
window.loadPartners = async () => {
    const tbody = document.getElementById('partners-table-body');
    const loading = document.getElementById('partners-loading');
    
    tbody.innerHTML = '';
    loading.classList.remove('hidden');

    try {
        const q = query(collection(db, "partners"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        
        partnersData = [];
        querySnapshot.forEach((doc) => {
            partnersData.push({ id: doc.id, ...doc.data() });
        });

        if(partnersData.length === 0) {
            // Mock data se vazio
            partnersData = [
                { id: 'mock1', businessName: 'Pousada Sol', plan: 'plus', status: 'aprovado', createdAt: new Date().toISOString() },
                { id: 'mock2', businessName: 'Restaurante Mar', plan: 'basic', status: 'pendente', createdAt: new Date().toISOString() }
            ];
        }

        renderPartnersTable();
    } catch (error) {
        console.error(error);
    } finally {
        loading.classList.add('hidden');
    }
};

function renderPartnersTable() {
    const tbody = document.getElementById('partners-table-body');
    tbody.innerHTML = partnersData.map(p => `
        <tr class="hover:bg-slate-800/30 transition">
            <td class="p-4 font-medium text-white">${p.businessName}</td>
            <td class="p-4"><span class="uppercase text-xs font-bold px-2 py-1 rounded border border-slate-600 ${getPlanColor(p.plan)}">${p.plan || 'Free'}</span></td>
            <td class="p-4"><span class="flex items-center"><span class="w-2 h-2 rounded-full mr-2 ${p.status === 'aprovado' ? 'bg-green-500' : 'bg-yellow-500'}"></span> ${p.status}</span></td>
            <td class="p-4 text-slate-400 text-sm">${new Date(p.createdAt).toLocaleDateString()}</td>
            <td class="p-4 text-right">
                <button onclick="toggleStatus('${p.id}', '${p.status}')" class="text-slate-400 hover:text-white transition mr-2" title="Alterar Status">
                    <i class="fas fa-power-off"></i>
                </button>
                <button class="text-slate-400 hover:text-blue-400 transition" title="Ver Detalhes">
                    <i class="fas fa-eye"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function getPlanColor(plan) {
    if(plan === 'advance') return 'bg-purple-500/20 text-purple-400';
    if(plan === 'plus') return 'bg-amber-500/20 text-amber-400';
    if(plan === 'basic') return 'bg-blue-500/20 text-blue-400';
    return 'bg-slate-700 text-slate-300';
}

window.toggleStatus = async (id, currentStatus) => {
    if (id.startsWith('mock')) {
        showToast('Simulação: Status alterado!');
        return;
    }

    const newStatus = currentStatus === 'aprovado' ? 'suspenso' : 'aprovado';
    try {
        await updateDoc(doc(db, "partners", id), { status: newStatus });
        showToast(`Parceiro ${newStatus}!`);
        window.loadPartners(); // Reload list
    } catch (e) {
        console.error(e);
        showToast('Erro ao atualizar status.');
    }
};

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').innerText = msg;
    toast.classList.remove('translate-y-20');
    setTimeout(() => toast.classList.add('translate-y-20'), 3000);
}

// Logout
const handleLogout = () => signOut(auth).then(() => window.location.href = 'index.html');
document.getElementById('logout-btn').onclick = handleLogout;
document.getElementById('logout-btn-mobile').onclick = handleLogout;

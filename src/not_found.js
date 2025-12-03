import { auth, db, doc, getDoc, onAuthStateChanged } from "./firebase.js";

const userActions = document.getElementById('user-actions');

onAuthStateChanged(auth, async (user) => {
    if (user) {
        // Verifica tipo de utilizador para link correto
        let profileLink = 'perfil.html'; // Default para user
        const partnerRef = doc(db, "partners", user.uid);
        const partnerSnap = await getDoc(partnerRef);
        
        if (partnerSnap.exists()) {
            profileLink = 'painel_anunciante.html';
        }

        userActions.innerHTML = `
            <a href="${profileLink}" class="flex items-center bg-slate-700 text-white px-4 py-2 rounded-full hover:bg-slate-600 transition-all border border-slate-600">
                <i class="fas fa-user-circle text-lg mr-2"></i>
                <span class="hidden sm:inline font-bold">Meu Painel</span>
            </a>
        `;
    } else {
        userActions.innerHTML = `
            <a href="pagina_login.html" class="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-2 px-6 rounded-full transition shadow-lg shadow-amber-500/20">
                Login
            </a>
        `;
    }
});

import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as x,d as f,a as i,g as m,c as L,q as y,v as D,e as S,w as h,f as b}from"./main-DHtEt640.js";import"./layout-Bzk_Fs54.js";import{onAuthStateChanged as q}from"https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";const l=document.getElementById("loading-container"),c=document.getElementById("feed-grid"),o=document.getElementById("no-feed-message");async function C(e){const s=f(i,"users",e),t=await m(s);return t.exists()?t.data():null}function I(e,s){const t=document.createElement("div");t.className="glass-effect rounded-2xl overflow-hidden card-hover";const r=s?s.name:"Viajante Anônimo",a=s?s.photoURL:"https://placehold.co/40x40/1f2937/fcd34d?text=SVA";return t.innerHTML=`
        <a href="/roteiro.html?id=${e.id}" class="block">
            <img src="${e.coverImage||"https://placehold.co/600x400/1e293b/475569?text=Roteiro"}" alt="Capa do Roteiro" class="w-full h-48 object-cover">
            <div class="p-5">
                <h3 class="text-xl font-bold text-white mb-2 truncate">${e.title}</h3>
                <div class="flex items-center mt-4">
                    <img src="${a}" alt="${r}" class="w-10 h-10 rounded-full object-cover mr-3">
                    <span class="text-slate-400">Por ${r}</span>
                </div>
            </div>
        </a>
    `,t}async function R(e){const s=f(i,"users",e),t=await m(s);if(!t.exists()){console.error("User document not found!"),d();return}const a=t.data().following||[];if(a.length===0){d();return}const g=L(i,"itineraries"),p=y(g,h("isPublic","==",!0),h("userId","in",a),S("createdAt","desc"),D(30)),u=(await b(p)).docs.map(n=>({id:n.id,...n.data()}));if(u.length===0){d();return}for(const n of u){const v=await C(n.userId),w=I(n,v);c.appendChild(w)}$()}function E(){l.classList.remove("hidden"),c.classList.add("hidden"),o.classList.add("hidden")}function $(){l.classList.add("hidden"),c.classList.remove("hidden"),o.classList.add("hidden")}function d(){l.classList.add("hidden"),c.classList.add("hidden"),o.classList.remove("hidden")}document.addEventListener("DOMContentLoaded",()=>{E(),q(x,e=>{e?R(e.uid):(d(),o.querySelector("h3").textContent="Acesso Restrito",o.querySelector("p").textContent="Você precisa fazer login para ver seu feed.",o.querySelector("a").href="/pagina_login.html",o.querySelector("a").textContent="Fazer Login")})});

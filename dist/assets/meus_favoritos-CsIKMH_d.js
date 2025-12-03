import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as u,d as m,a as c,g as v,c as p,q as g,w as x,f as L}from"./main-DHtEt640.js";import"./layout-Bzk_Fs54.js";import{onAuthStateChanged as y}from"https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";const d=document.getElementById("loading-container"),n=document.getElementById("favorites-grid"),a=document.getElementById("no-favorites-message");function b(e){var i;const t=document.createElement("div");t.className="glass-effect rounded-2xl overflow-hidden card-hover relative";const s=e.type==="experience"?"experiencia.html":"anuncio_detalhes.html";return t.innerHTML=`
        <a href="/${s}?id=${e.id}" class="block">
            <img src="${((i=e.photos)==null?void 0:i[0])||"https://placehold.co/400x300/1e293b/475569?text=Favorito"}" alt="${e.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-bold text-white truncate">${e.title}</h3>
                <p class="text-sm text-slate-400"><i class="fas fa-map-marker-alt mr-2"></i>${e.location}</p>
                <div class="text-amber-400 font-bold mt-2">R$ ${e.price}</div>
            </div>
        </a>
        <button class="absolute top-3 right-3 text-red-500 text-xl" title="Remover dos favoritos">
            <i class="fas fa-heart"></i>
        </button>
    `,t}async function w(e){if(!e.length)return[];const t=p(c,"ads"),s=g(t,x("__name__","in",e));return(await L(s)).docs.map(o=>({id:o.id,...o.data()}))}function q(){d.classList.remove("hidden"),n.classList.add("hidden"),a.classList.add("hidden")}function C(){d.classList.add("hidden"),n.classList.remove("hidden"),a.classList.add("hidden")}function r(){d.classList.add("hidden"),n.classList.add("hidden"),a.classList.remove("hidden")}document.addEventListener("DOMContentLoaded",()=>{q(),y(u,async e=>{if(e){const t=m(c,"users",e.uid),s=await v(t);if(s.exists()){const o=s.data().favorites||[];if(o.length>0){const l=await w(o);n.innerHTML="",l.forEach(h=>{const f=b(h);n.appendChild(f)}),C()}else r()}else console.error("User document not found!"),r()}else{r(),a.querySelector("h3").textContent="Acesso Restrito",a.querySelector("p").textContent="Você precisa fazer login para ver seus favoritos.";const t=a.querySelector("a");t.textContent="Fazer Login",t.href="/pagina_login.html"}})});

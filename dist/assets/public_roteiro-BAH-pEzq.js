import"./modulepreload-polyfill-B5Qt9EMX.js";import{d as a,g as d,a as c}from"./main-DHtEt640.js";import"./layout-Bzk_Fs54.js";const r=document.getElementById("loading-state"),l=document.getElementById("roteiro-content"),f=document.getElementById("roteiro-title"),s=document.getElementById("author-info"),h=document.getElementById("roteiro-body"),g=document.getElementById("print-btn");async function x(t){const e=a(c,"users",t),o=await d(e);return o.exists()?o.data():null}function y(t){if(!t){s.innerHTML='<p class="text-slate-400">Autor desconhecido</p>';return}s.innerHTML=`
        <a href="/perfil_publico.html?uid=${t.uid}" class="flex items-center group">
            <img src="${t.photoURL||"https://placehold.co/40x40/1f2937/fcd34d?text=SVA"}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover mr-4 border-2 border-slate-600 group-hover:border-amber-400 transition">
            <div>
                <p class="font-semibold text-white group-hover:text-amber-400 transition">${t.name}</p>
                <p class="text-sm text-slate-400">Viajante</p> <!-- TODO: Could add user title/role here -->
            </div>
        </a>
    `}async function b(t){const e=a(c,"itineraries",t),o=await d(e);if(o.exists()){const n=o.data();if(!n.isPublic){i("Este roteiro não é público.");return}f.textContent=n.title;const m=await x(n.userId);y(m);const u=marked.parse(n.content),p=DOMPurify.sanitize(u);h.innerHTML=p,r.classList.add("hidden"),l.classList.remove("hidden")}else i("Roteiro não encontrado.")}function i(t){r.innerHTML=`
        <div class="text-center py-20 text-red-400">
            <i class="fas fa-exclamation-triangle text-4xl mb-4"></i>
            <p>${t}</p>
        </div>
    `,r.classList.remove("hidden"),l.classList.add("hidden")}g.addEventListener("click",()=>{window.print()});document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search).get("id");e?b(e):i("Nenhum roteiro especificado. Por favor, forneça um ID na URL.")});

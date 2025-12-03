import"./modulepreload-polyfill-B5Qt9EMX.js";import{q as g,c as y,a as v,w as b,f as x}from"./main-DHtEt640.js";import"./layout-Bzk_Fs54.js";const o=document.getElementById("partners-grid"),p=document.getElementById("loading-container"),r=document.getElementById("no-results-message"),d=document.getElementById("search-text"),l=document.getElementById("filter-category"),E=document.getElementById("clear-filters-btn"),w=document.getElementById("clear-filters-btn-empty");let h=[],c,u=[];function k(){typeof L<"u"?(c=L.map("map").setView([-14.235,-51.925],4),L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}).addTo(c)):document.getElementById("map").innerHTML='<p class="text-slate-500">Erro ao carregar o mapa. Tente recarregar a página.</p>'}function M(e){const t=document.createElement("div");t.className="glass-effect rounded-2xl overflow-hidden shadow-lg border border-slate-700/50 transform hover:-translate-y-1 transition-transform duration-300";const a=e.image||"https://placehold.co/400x300/1e293b/fcd34d?text=Parceiro";return t.innerHTML=`
        <a href="/public_partner_details.html?id=${e.id}" class="block">
            <div class="h-48 bg-cover bg-center" style="background-image: url('${a}')"></div>
            <div class="p-5">
                <div class="flex justify-between items-start">
                    <div>
                        <p class="text-xs text-amber-400 font-bold uppercase tracking-wider">${e.category.replace(/_/g," ")}</p>
                        <h3 class="text-xl font-bold text-white mt-1">${e.businessName}</h3>
                    </div>
                    <div class="flex items-center bg-slate-900/50 text-amber-400 px-2 py-1 rounded-full text-sm font-bold">
                        <i class="fas fa-star mr-1"></i>
                        <span>${e.rating||"Novo"}</span>
                    </div>
                </div>
                <p class="text-slate-400 text-sm mt-2 flex items-center">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    ${e.city}, ${e.state}
                </p>
            </div>
        </a>
    `,t}function I(e){c&&(u.forEach(t=>c.removeLayer(t)),u=[],e.forEach(t=>{const a=t.latitude||-22.9068+(Math.random()-.5),s=t.longitude||-43.1729+(Math.random()-.5),n=L.divIcon({className:"custom-map-marker",html:'<div class="p-2 bg-amber-500 rounded-full shadow-lg"><i class="fas fa-map-marker-alt text-slate-900 text-xs"></i></div>',iconSize:[24,24],iconAnchor:[12,12]}),i=L.marker([a,s],{icon:n}).addTo(c);i.bindPopup(`
            <div class="text-slate-900">
                <h4 class="font-bold">${t.businessName}</h4>
                <p>${t.city}</p>
                <a href="/public_partner_details.html?id=${t.id}" class="text-amber-600 font-semibold">Ver detalhes</a>
            </div>
        `),u.push(i)}))}function m(){const e=d.value.toLowerCase(),t=l.value,a=h.filter(s=>{const n=s.businessName.toLowerCase().includes(e),i=t?s.category===t:!0;return n&&i});o.innerHTML="",a.length>0?(o.classList.remove("hidden"),r.classList.add("hidden"),a.forEach(s=>{const n=M(s);o.appendChild(n)})):(o.classList.add("hidden"),r.classList.remove("hidden")),I(a)}async function T(){p.classList.remove("hidden"),o.classList.add("hidden"),r.classList.add("hidden");try{const e=g(y(v,"partners"),b("status","==","aprovado"));h=(await x(e)).docs.map(a=>({id:a.id,...a.data()})),m()}catch(e){console.error("Error fetching partners:",e),r.classList.remove("hidden"),r.querySelector("h3").innerText="Erro ao carregar parceiros",r.querySelector("p").innerText="Houve um problema ao conectar com o servidor. Tente novamente mais tarde."}finally{p.classList.add("hidden")}}function B(){const e=new URLSearchParams(window.location.search),t=e.get("q"),a=e.get("category");t&&(d.value=t),a&&(l.value=a)}d.addEventListener("input",m);l.addEventListener("change",m);const f=()=>{d.value="",l.value="",m()};E.addEventListener("click",f);w.addEventListener("click",f);B();k();T();

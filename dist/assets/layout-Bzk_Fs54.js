import{F as n}from"./main-DHtEt640.js";function l(){return`
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <a href="/index.html" class="flex items-center group">
          <svg class="h-10 w-10 mr-3 text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21s-8-4.5-8-11.8A8 8 0 0112 3a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span class="text-2xl font-bold text-white">Sua Viagem <span class="text-amber-400">Aqui</span></span>
        </a>
        <nav class="hidden md:flex items-center space-x-8">
            <a href="/index.html#como-funciona" class="text-slate-300 hover:text-amber-400 transition-colors font-semibold">Como Funciona</a>
            <a href="/index.html#planos" class="text-slate-300 hover:text-amber-400 transition-colors font-semibold">Planos</a>
        </nav>
        <div id="user-actions" class="flex items-center space-x-2 md:space-x-4">
          <!-- User actions will be dynamically inserted here -->
        </div>
      </div>
    </div>
  `}function c(){return`
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Sua Viagem Aqui</h3>
          <p class="text-slate-400 text-sm">
            A plataforma definitiva para agências de viagens e parceiros
            premium.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Links Rápidos</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/sobre_nos.html" class="text-slate-400 hover:text-amber-400 transition-colors">Sobre Nós</a></li>
            <li><a href="/contato.html" class="text-slate-400 hover:text-amber-400 transition-colors">Contato</a></li>
            <li><a href="/termos_de_servico.html" class="text-slate-400 hover:text-amber-400 transition-colors">Termos de Serviço</a></li>
            <li><a href="/politica_de_privacidade.html" class="text-slate-400 hover:text-amber-400 transition-colors">Política de Privacidade</a></li>
            <li><a href="/codigo_de_conduta.html" class="text-slate-400 hover:text-amber-400 transition-colors">Código de Conduta</a></li>
            <li><a href="/faq.html" class="text-slate-400 hover:text-amber-400 transition-colors">FAQ</a></li>
            <li><a href="/chat.html" class="text-slate-400 hover:text-amber-400 transition-colors">Guia Virtual</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Siga-nos</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-slate-400 hover:text-amber-400 transition-colors" aria-label="Facebook"><i class="fab fa-facebook-f fa-lg"></i></a>
            <a href="#" class="text-slate-400 hover:text-amber-400 transition-colors" aria-label="Instagram"><i class="fab fa-instagram fa-lg"></i></a>
            <a href="#" class="text-slate-400 hover:text-amber-400 transition-colors" aria-label="TikTok"><i class="fab fa-tiktok fa-lg"></i></a>
            <a href="#" class="text-slate-400 hover:text-amber-400 transition-colors" aria-label="Twitter"><i class="fab fa-twitter fa-lg"></i></a>
          </div>
        </div>
      </div>
      <div class="mt-8 border-t border-slate-700 pt-4 text-center text-sm text-slate-500">
        <p>&copy; 2024 Sua Viagem Aqui. Todos os direitos reservados.</p>
        <p class="mt-2">A plataforma atua como intermediadora. A negociação é direta com o fornecedor.</p>
      </div>
    </div>
  `}function d(){return`
    <div id="alert-modal" class="hidden fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div class="bg-slate-800 rounded-2xl shadow-xl p-8 max-w-sm w-full text-center border border-slate-600">
        <p id="alert-message" class="text-white text-lg mb-6"></p>
        <button id="alert-close-btn" class="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition">OK</button>
      </div>
    </div>
    `}function r(e,t){const s=document.querySelector(e);s?s.innerHTML=t():console.warn(`Target element '${e}' not found for component.`)}function m(){const e=document.getElementById("cookie-consent-banner"),t=document.getElementById("accept-cookies-btn");e&&t&&(setTimeout(()=>{localStorage.getItem("cookieConsent")||e.classList.remove("hidden")},1e3),t.addEventListener("click",()=>{localStorage.setItem("cookieConsent","true"),e.classList.add("hidden")}))}function h(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("Service Worker registrado com sucesso:",e)}).catch(e=>{console.error("Falha ao registrar o Service Worker:",e)})})}async function f(){try{const e=["lua","victor"],t=e.map(o=>fetch(`/components/chat${o}.html`).then(a=>{if(!a.ok)throw new Error(`Failed to load chat${o}.html: ${a.statusText}`);return a.text()}));(await Promise.all(t)).forEach((o,a)=>{document.body.insertAdjacentHTML("beforeend",o),n(e[a])})}catch(e){console.error("Error loading chatbot components:",e)}}async function i(){r("#main-header",l),r("#main-footer",c),await f(),document.body.insertAdjacentHTML("beforeend",d()),m(),h()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i();

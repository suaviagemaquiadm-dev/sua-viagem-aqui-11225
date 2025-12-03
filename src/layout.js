
import { initApp } from "./app.js";
import { HeaderComponent } from "./components/Header.js";
import { FooterComponent } from "./components/Footer.js";
import { initializeChatbot } from "./chatbot.js";
import { AlertModalComponent } from "./components/AlertModal.js";

function renderComponent(selector, componentFn) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = componentFn();
  } else {
    console.warn(`Target element '${selector}' not found for component.`);
  }
}

function initCookieBanner() {
  const banner = document.getElementById("cookie-consent-banner");
  const acceptBtn = document.getElementById("accept-cookies-btn");
  if (banner && acceptBtn) {
    setTimeout(() => {
      if (!localStorage.getItem("cookieConsent")) {
        banner.classList.remove("hidden");
      }
    }, 1000);
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "true");
      banner.classList.add("hidden");
    });
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("Service Worker registrado com sucesso:", registration);
        })
        .catch((error) => {
          console.error("Falha ao registrar o Service Worker:", error);
        });
    });
  }
}

// Loads chatbot HTML components and initializes them
async function loadChatbotComponents() {
  try {
    const chatComponents = ['lua', 'victor'];
    const fetchPromises = chatComponents.map(name => 
      fetch(`/components/chat${name}.html`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to load chat${name}.html: ${response.statusText}`);
          }
          return response.text();
        })
    );

    const htmlContents = await Promise.all(fetchPromises);

    htmlContents.forEach((html, index) => {
      document.body.insertAdjacentHTML('beforeend', html);
      initializeChatbot(chatComponents[index]);
    });

  } catch (error) {
    console.error('Error loading chatbot components:', error);
  }
}

async function initLayout() {
  renderComponent("#main-header", HeaderComponent);
  renderComponent("#main-footer", FooterComponent);

  await loadChatbotComponents();
  
  document.body.insertAdjacentHTML("beforeend", AlertModalComponent());

  initApp();
  initCookieBanner();
  registerServiceWorker();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLayout);
} else {
  initLayout();
}

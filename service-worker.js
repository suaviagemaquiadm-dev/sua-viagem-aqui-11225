/*
This service worker follows a **Network First** strategy.

- It always tries to fetch the latest content from the network.
- If the network request fails (e.g., offline), it serves the content from the cache.
- For navigation requests (HTML pages) that are not in the cache and fail, it serves a generic offline fallback page.
*/

const CACHE_NAME = 'sua-viagem-aqui-cache-v1';
const OFFLINE_URL = '/offline.html';

// These are the core files that make the app work. They will be cached on install.
const APP_SHELL_URLS = [
    '/', // Alias for index.html
    '/index.html',
    '/offline.html',
    '/manifest.json',
    '/css/styles.css',
    '/src/layout.js',
    '/src/firebase.js',
    '/src/auth.js',
    '/pagina_login.html',
    '/buscar_parceiros.html',
    '/contato.html',
    '/meus_favoritos.html',
    '/meu_feed.html',
    '/codigo_de_conduta.html',
    '/politica_de_privacidade.html', // Assuming this page exists
    // External resources can also be cached
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
];

// 1. Install Event: Cache the App Shell
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Install');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching App Shell...');
            // Cache the offline page first
            const offlineRequest = new Request(OFFLINE_URL, { cache: 'reload' });
            return cache.add(offlineRequest).then(() => {
                return cache.addAll(APP_SHELL_URLS);
            });
        })
    );
    self.skipWaiting(); // Force the new service worker to become active
});

// 2. Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activate');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim(); // Take control of all open clients
});

// 3. Fetch Event: Intercept network requests
self.addEventListener('fetch', (event) => {
    const { request } = event;

    // For navigation requests (HTML pages), use Network First, then Cache, then Offline Fallback
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    // If the request is successful, update the cache
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, response.clone());
                        return response;
                    });
                })
                .catch(() => {
                    // If network fails, try the cache
                    return caches.match(request).then((cachedResponse) => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }
                        // If not in cache, show the offline fallback page
                        return caches.match(OFFLINE_URL);
                    });
                })
        );
    } else {
        // For other requests (CSS, JS, images), use Cache First, then Network
        event.respondWith(
            caches.match(request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(request).then((response) => {
                     // If the request is successful, update the cache for future use
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, response.clone());
                        return response;
                    });
                });
            })
        );
    }
});

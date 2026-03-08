// Un Service Worker di base necessario per l'installazione PWA
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // Non fa nulla di speciale, ma serve per superare i requisiti PWA
});rt
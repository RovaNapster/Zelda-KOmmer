const CACHE_NAME = 'creed-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './creed_data.json'
];

// Installera och cacha filer
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Network-first strategi för att alltid ha senaste guldpris/likviditet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

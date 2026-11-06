/* Offline support scoped to /reversi-lab/ only. */
const CACHE = 'reversi-lab-standalone-20261107';
const CORE = ['./', './index.html'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('reversi-lab-standalone-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.registration.scope)) return;
  e.respondWith(fetch(e.request).then(response => {
    if (response.ok) { const copy=response.clone(); caches.open(CACHE).then(c => c.put(e.request,copy)).catch(() => {}); }
    return response;
  }).catch(() => caches.match(e.request)));
});

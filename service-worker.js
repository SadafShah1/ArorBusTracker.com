self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('aror-tracker-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/js/main.js',
        '/js/firebase-config.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

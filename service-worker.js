self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('times-table-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './clap.mp3',
        './wrong.mp3',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
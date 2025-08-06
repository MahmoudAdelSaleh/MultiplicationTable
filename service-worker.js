self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('times-table-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './styles.css', // ملف CSS
        './clap.mp3',
        './wrong.mp3',
        './true.mp3',  // ملف صوتي مفقود
        './icon-192.png',
        './icon-512.png',
        './splash.png'  // صورة مفقودة
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

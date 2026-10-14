// Generado por vite.config.ts. No editar.
const CACHE = 'acordes-1.215.0';
const ARCHIVOS = ["./","./assets/index-BfXFP5De.js","./assets/AcordesPage-ncgj6l7a.js","./assets/AfinadorPage-B9n4cUzI.js","./assets/Aprender-B3Dzi5oD.js","./assets/ChordDiagram-Beo20OdN.js","./assets/CirculoPage-D6gmB_1o.js","./assets/CursoPage-DsNBqwNQ.js","./assets/MetronomePage-CZDNSvGI.js","./assets/OidoPage-CUAXjGn4.js","./assets/ScalesPage-CsCqgDAu.js","./assets/audio-BbazzTko.js","./assets/jsx-runtime-QtymfJMM.js","./assets/music-B8Yr91nf.js","./assets/useSonarAcordes-17YgQqaj.js","./assets/index-gi63L1eU.css"];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// La página, primero de la red: una guardada vieja apunta a archivos que ya
// no existen y la app quedaba en blanco. Y sin la caché HTTP: GitHub Pages
// la manda con max-age=600, y "Actualizar" recargaba la versión vieja
// durante diez minutos (se vio con la duplicación del iPhone). Sin red, la guardada. El resto
// (archivos con el hash en el nombre) nunca cambia: primero lo guardado.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => caches.match('./')));
    return;
  }
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});

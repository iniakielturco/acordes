// Generado por vite.config.ts. No editar.
const CACHE = 'acordes-1.198.0';
const ARCHIVOS = ["./","./assets/index-_MTu22Ze.js","./assets/AcordesPage-CDiKL43q.js","./assets/AfinadorPage-D3tWmZAq.js","./assets/Aprender-un_ai_fO.js","./assets/ChordDiagram-wwfpgDGU.js","./assets/CirculoPage-TNbcE8nH.js","./assets/MetronomePage-DXQov9Px.js","./assets/OidoPage-DJcN0ogc.js","./assets/ScalesPage-WgRcBjTO.js","./assets/audio-PWoMgh92.js","./assets/music-B8Yr91nf.js","./assets/useSonarAcordes-Cyt8fIRN.js","./assets/index-DLj3TU4h.css"];

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

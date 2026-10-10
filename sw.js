// Generado por vite.config.ts. No editar.
const CACHE = 'acordes-1.114.0';
const ARCHIVOS = ["./","./assets/index-DjfnSF1N.js","./assets/AcordesPage-BNaib67U.js","./assets/AfinadorPage-bPQirVo3.js","./assets/Aprender-B3Dzi5oD.js","./assets/ChordDiagram-Beo20OdN.js","./assets/CirculoPage-DgJdTdl0.js","./assets/MetronomePage-K5aNhnh_.js","./assets/OidoPage-DiNGHpXd.js","./assets/ScalesPage-CesH9uir.js","./assets/jsx-runtime-QtymfJMM.js","./assets/music-B8Yr91nf.js","./assets/useSonarAcordes-CztUabkY.js","./assets/index-Dp41w0PR.css"];

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
// no existen y la app quedaba en blanco. Sin red, la guardada. El resto
// (archivos con el hash en el nombre) nunca cambia: primero lo guardado.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(() => caches.match('./')));
    return;
  }
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});

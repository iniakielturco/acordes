// Generado por vite.config.ts. No editar.
const CACHE = 'acordes-1.116.0';
const ARCHIVOS = ["./","./assets/index-Y5EI9zMq.js","./assets/AcordesPage-CDiKL43q.js","./assets/AfinadorPage-BctK0yGA.js","./assets/Aprender-un_ai_fO.js","./assets/ChordDiagram-wwfpgDGU.js","./assets/CirculoPage-DoCADf8r.js","./assets/MetronomePage-KKSVAEgf.js","./assets/OidoPage-CiDjAOEr.js","./assets/ScalesPage-DOOrMITc.js","./assets/audio-PWoMgh92.js","./assets/music-B8Yr91nf.js","./assets/useSonarAcordes-Cyt8fIRN.js","./assets/index-Dp41w0PR.css"];

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

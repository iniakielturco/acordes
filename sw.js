// Generado por vite.config.ts. No editar.
const CACHE = 'acordes-1.234.0';
const ARCHIVOS = ["./","./assets/index-BX4cc8IK.js","./assets/AcordesPage-DiaH7Th4.js","./assets/AfinadorPage-DqUHswL5.js","./assets/Aprender-B3Dzi5oD.js","./assets/ChordDiagram-CP_XUY_0.js","./assets/CirculoPage-pRMP0rKG.js","./assets/CursoPage-CRXM8u14.js","./assets/EscrituraPage-DLftjg59.js","./assets/MetronomePage-CLutDTr5.js","./assets/OidoPage-CR7FstuG.js","./assets/ScalesPage-D5qVFM6u.js","./assets/TallerPage-Bm4nt7zQ.js","./assets/audio-BbazzTko.js","./assets/curso-t8qC70hq.js","./assets/jsx-runtime-QtymfJMM.js","./assets/music-l1KWLI62.js","./assets/useSonarAcordes-DMcFEFJz.js","./assets/index-eN-qaVmR.css"];

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

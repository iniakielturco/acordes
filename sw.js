// Generado por vite.config.ts. No editar.
const CACHE = 'acordes-1.225.0';
const ARCHIVOS = ["./","./assets/index-BCnVIz7P.js","./assets/AcordesPage-BmI84Mfo.js","./assets/AfinadorPage-Crd365qn.js","./assets/Aprender-B3Dzi5oD.js","./assets/ChordDiagram-FNHZXPDJ.js","./assets/CirculoPage-CHF6qBCi.js","./assets/CursoPage-DQwG5Hum.js","./assets/EscrituraPage-BiArlsvl.js","./assets/MetronomePage-BDNctECl.js","./assets/OidoPage-ojI2EEoP.js","./assets/ScalesPage-JSHf3o-T.js","./assets/audio-BbazzTko.js","./assets/curso-nTsXxR8t.js","./assets/jsx-runtime-QtymfJMM.js","./assets/music-aKeSDmjq.js","./assets/useSonarAcordes-CMwPIzqn.js","./assets/index-BF_GY6ws.css"];

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

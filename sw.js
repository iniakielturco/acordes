// Generado por vite.config.ts. No editar.
const CACHE = 'acordes-1.236.0';
const ARCHIVOS = ["./","./assets/index-De3FHLa3.js","./assets/AcordesPage-DiaH7Th4.js","./assets/AfinadorPage-9DfWHl9m.js","./assets/Aprender-B3Dzi5oD.js","./assets/ChordDiagram-CP_XUY_0.js","./assets/CirculoPage-Cxiwsv-L.js","./assets/CursoPage-BucIF85f.js","./assets/EscrituraPage-CFMzLbcI.js","./assets/MetronomePage-Cxwwqmn0.js","./assets/OidoPage-CVvz8qg2.js","./assets/ScalesPage-DgQV6gVx.js","./assets/TallerPage-Ns5IWKdx.js","./assets/audio-BbazzTko.js","./assets/curso-t8qC70hq.js","./assets/jsx-runtime-QtymfJMM.js","./assets/music-l1KWLI62.js","./assets/useSonarAcordes-DMcFEFJz.js","./assets/index-BgC-0Jls.css"];

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

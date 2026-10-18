// Generado por vite.config.ts. No editar.
const CACHE = 'acordes-1.229.0';
const ARCHIVOS = ["./","./assets/index-DhhYgOp3.js","./assets/AcordesPage-BmI84Mfo.js","./assets/AfinadorPage-_myworN2.js","./assets/Aprender-B3Dzi5oD.js","./assets/ChordDiagram-FNHZXPDJ.js","./assets/CirculoPage-BOA-T8NJ.js","./assets/CursoPage-CupKbY_9.js","./assets/EscrituraPage-CduHsSHH.js","./assets/MetronomePage-s_5BvwbK.js","./assets/OidoPage-Br4E-M_8.js","./assets/ScalesPage-IEusuANr.js","./assets/TallerPage-BXa0e_UI.js","./assets/audio-BbazzTko.js","./assets/curso-D2VAJEo3.js","./assets/jsx-runtime-QtymfJMM.js","./assets/music-aKeSDmjq.js","./assets/parse-BPSq8GVB.js","./assets/useSonarAcordes-CMwPIzqn.js","./assets/index-CWLF36fm.css"];

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

// Generado por vite.config.ts. No editar.
const CACHE = 'acordes-1.266.0';
const ARCHIVOS = ["./","./assets/index-3FNdUUGi.js","./assets/AcordesPage-CPrLWyTF.js","./assets/AfinadorPage-v9U6y9Fs.js","./assets/Aprender-Ixkin3nO.js","./assets/CirculoPage-BHEoIo4z.js","./assets/CursoPage-CcIL6o3-.js","./assets/EscrituraPage-DYRsRdjh.js","./assets/MetronomePage-B8DgVT48.js","./assets/OidoPage-IBc3i7VA.js","./assets/ScalesPage-CzDqbfih.js","./assets/TallerPage-B3xZKRmh.js","./assets/audio-BbazzTko.js","./assets/curso-B9BZPTfg.js","./assets/ejemplosDeCurso-Ce3yiBsX.js","./assets/guitar-CxhYRH74.js","./assets/jsx-runtime-Am8b9ysO.js","./assets/metronome-Do87B1Bf.js","./assets/music-GOzvHbSp.js","./assets/useSonarAcordes-EirdyuMu.js","./assets/index-CBNdsAuP.css","./assets/inter-latin-wght-normal-Dx4kXJAl.woff2","./assets/jetbrains-mono-latin-ext-wght-normal-DBQx-q_a.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2"];

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

// Generado por vite.config.ts. No editar.
const CACHE = 'acordes-1.255.0';
const ARCHIVOS = ["./","./assets/index-CHhA7vhC.js","./assets/AcordesPage-Dy_0DcRA.js","./assets/AfinadorPage-peJt9XDt.js","./assets/Aprender-B3Dzi5oD.js","./assets/ChordDiagram-BR2HrZSm.js","./assets/CirculoPage-BRhkbuON.js","./assets/CursoPage-y5uEnKOK.js","./assets/EscrituraPage-DWEGqGca.js","./assets/MetronomePage-DKuRuq0f.js","./assets/OidoPage-CD0mwIC-.js","./assets/ScalesPage-esKpiNWf.js","./assets/TallerPage-DcXIR-Ie.js","./assets/audio-BbazzTko.js","./assets/curso-_WCYULGX.js","./assets/ejemplosDeCurso-Cp8Rd3_x.js","./assets/guitar-CxhYRH74.js","./assets/jsx-runtime-QtymfJMM.js","./assets/metronome-Do87B1Bf.js","./assets/music-ChOugd0y.js","./assets/useSonarAcordes-B-yP03T9.js","./assets/index-DZLwBuxy.css","./assets/inter-latin-wght-normal-Dx4kXJAl.woff2","./assets/jetbrains-mono-latin-ext-wght-normal-DBQx-q_a.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2"];

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

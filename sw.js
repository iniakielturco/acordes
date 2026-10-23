// Generado por vite.config.ts. No editar.
const CACHE = 'acordes-1.248.0';
const ARCHIVOS = ["./","./assets/index-Wb69a5LJ.js","./assets/AcordesPage-Dy_0DcRA.js","./assets/AfinadorPage-BtYdB8r4.js","./assets/Aprender-B3Dzi5oD.js","./assets/ChordDiagram-BR2HrZSm.js","./assets/CirculoPage-BR9v52IV.js","./assets/CursoPage-CFslqjaf.js","./assets/EscrituraPage-B4Mnp1sc.js","./assets/MetronomePage-C58R30yM.js","./assets/OidoPage-DOtqwlZg.js","./assets/ScalesPage-BPWcK6IW.js","./assets/TallerPage-CajMI4GG.js","./assets/audio-BbazzTko.js","./assets/curso-D9ZJb2GO.js","./assets/ejemplosDeCurso-Cp8Rd3_x.js","./assets/guitar-CxhYRH74.js","./assets/jsx-runtime-QtymfJMM.js","./assets/music-ChOugd0y.js","./assets/useSonarAcordes-B-yP03T9.js","./assets/index-DdsCCxT6.css","./assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","./assets/inter-latin-wght-normal-Dx4kXJAl.woff2","./assets/jetbrains-mono-latin-ext-wght-normal-DBQx-q_a.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2"];

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

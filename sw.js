// Generado por vite.config.ts. No editar.
const CACHE = 'acordes-1.245.0';
const ARCHIVOS = ["./","./assets/index-Cb0R-vN4.js","./assets/AcordesPage-DiaH7Th4.js","./assets/AfinadorPage-B2-Ssc1h.js","./assets/Aprender-B3Dzi5oD.js","./assets/ChordDiagram-CP_XUY_0.js","./assets/CirculoPage-Bno4Lmgx.js","./assets/CursoPage-BdKqhsyW.js","./assets/EscrituraPage-BI78T5wA.js","./assets/MetronomePage-Do1fhuqr.js","./assets/OidoPage-CP0cKnpm.js","./assets/ScalesPage-Cw5liGE8.js","./assets/TallerPage-DSVMZkaD.js","./assets/audio-BbazzTko.js","./assets/curso-Bony7b_N.js","./assets/ejemplosDeCurso-CmnoY6wS.js","./assets/jsx-runtime-QtymfJMM.js","./assets/music-l1KWLI62.js","./assets/useSonarAcordes-DMcFEFJz.js","./assets/index-BlHM1JQh.css","./assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","./assets/inter-latin-wght-normal-Dx4kXJAl.woff2","./assets/jetbrains-mono-latin-ext-wght-normal-DBQx-q_a.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2"];

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

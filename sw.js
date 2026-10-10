// Generado por vite.config.ts. No editar.
const CACHE = 'acordes-1.109.0';
const ARCHIVOS = ["./","./assets/index-BzrceVBd.js","./assets/AcordesPage-BNaib67U.js","./assets/AfinadorPage-DC0PtxNw.js","./assets/Aprender-B3Dzi5oD.js","./assets/ChordDiagram-Beo20OdN.js","./assets/CirculoPage-BHcb-fNH.js","./assets/MetronomePage-C-bvNyOI.js","./assets/OidoPage-ButwwhQx.js","./assets/ScalesPage-ETCbRrdk.js","./assets/jsx-runtime-QtymfJMM.js","./assets/music-B8Yr91nf.js","./assets/useSonarAcordes-CztUabkY.js","./assets/index-D_JvOsd0.css"];

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

// Primero lo guardado: la app es la misma hasta que se publique otra versión,
// y así abre al instante aunque no haya red.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  const pedido = e.request.mode === 'navigate' ? './' : e.request;
  e.respondWith(caches.match(pedido).then((r) => r || fetch(e.request)));
});

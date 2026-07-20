// Tombstone for the Create React App service worker that shipped with the
// previous version of this site (2021). Returning visitors still have that SW
// registered at scope "/", and it would keep serving the old cached site.
// The browser re-fetches this file when checking for SW updates; this version
// clears every cache, unregisters itself, and reloads open tabs.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      for (const client of clients) {
        client.navigate(client.url);
      }
    })(),
  );
});

const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/vite.svg",
  "/product",
  "/order",
  // Add more URLs of static assets to cache (e.g., CSS, images, fonts)
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache opened");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  // Check if the network is available
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Cache hit - return the response
        if (response) {
          return response;
        }
        // If not in cache, return an offline page or handle as necessary
      })
    );
  } else {
    // If network is available, perform the fetch request as usual
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Check if we received a valid response
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }
          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Handle fetch errors or serve cached responses
          return caches.match(event.request);
        })
    );
  }
});

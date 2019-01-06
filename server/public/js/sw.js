const cacheName = "latestVersion-1";

self.addEventListener('install ', event => {
    event.waitUntill(caches.open(cacheName)
        .then(cache => cache.addAll(
            [
                './main.js',
                '../index.html',
                '../images/homescreen.png',
                '../images/homescreen-144.jpg',
            ]
        )
        )
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(response => {
            if (response)
                return response;

            let fetchResponse = event.request.clone();

            return fetch(fetchResponse).then(response => {
                if (!response || response.status !== 200) {
                    return response;
                }

                let responseToCache = response.clone();
                caches.open(cacheName).then(cache => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            }).catch(err => {
                console.log(err);
            });
        }))
});
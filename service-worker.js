const staticAssets=[
    './',
    './style.min.css',
    './app.min.js',
    './manifest.json',
    './service-worker.js',
    './assets/particles.json',
    './css/bootstrap.min.css',
    './css/colors/default.css',
    './images/aiicb.webp',
    './images/aimg.webp',
    './images/asm.webp',
    './images/bgimg.webp',
    './images/data-science.webp',
    './images/ecs.webp',
    './images/footer-cloud.svg',
    './images/gist.webp',
    './images/HackerRank.webp',
    './images/hacktoberfest2020.webp',
    './images/monkey.webp',
    './images/Profile-pic.webp',
    './images/favicon.ico',
    './images/quote-img.webp',
    './images/sda.webp',
    './images/us.webp',
    './js/bootstrap.bundle.min.js',
    './js/jquery.easing.min.js',
    './js/particles.min.js',
    './js/scrollspy.min.js',
    './js/dark-light-theme.min.js',
    './js/typed.init.js',
    './js/typed.min.js',
    './js/vanilla-tilt.min.js'
];

var cacheName = 'cache-2';
self.addEventListener('install', async ()=>{
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
        if (response !== undefined) {
            return response;
        } else {
            return fetch(event.request).then(function (response) {
                let responseClone = response.clone();

                caches.open(cacheName).then(function (cache) {
                    cache.put(event.request, responseClone);
                });
                return response;
            }).catch(function () {
                return caches.match('/');
            });
        }
    }));
});
self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});
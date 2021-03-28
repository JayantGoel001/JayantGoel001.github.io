const staticAssets=['./', './index.html', './css/styles.min.css', './js/app.min.js', './manifest.json', './service-worker.js', './assets/particles.json', './images/aiicb.webp', './images/aimg.webp','./images/asm.webp', './images/bgimg.webp', './images/data-science.webp', './images/ecs.webp', './images/footer-cloud.svg', './images/gist.webp', './images/HackerRank.webp', './images/hacktoberfest2020.webp', './images/monkey.webp', './images/Profile-pic.webp', './images/profile-icon.ico', './images/quote-img.webp', './images/sda.webp', './images/us.webp', './images/about-bg.svg', './images/about-bg-sm.svg', './js/bootstrap.bundle.min.js', './js/jquery.easing.min.js', './js/particles.min.js', './js/scrollspy.min.js', './js/dark-light-theme.min.js', './js/typed.init.js', './js/typed.min.js', './js/vanilla-tilt.min.js', './404.html', './css/404.min.css', './js/404.min.js', './images/404.webp','./js/jquery-3.5.1.min.js'];
var cacheName = 'cache-0';
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            staticAssets.forEach(function (url) {
                cache.add(url).catch(console.log(url));
            });
        })
    );
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
                console.log("Here");
                return caches.match('./');
            });
        }
    }));
});
self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});
const staticAssets=[
    './',
    './style.css',
    './app.js',
    './assets/particles.json',
    './css/bootstrap.min.css',
    './css/colors/default.css',
    './images/aiicb.webp',
    './images/aimg.webp',
    './images/asm.webp',
    './images/bgimg.webp',
    './images/data-science.webp',
    './images/ecs.webp',
    './images/footer-cloud.webp',
    './images/gist.webp',
    './images/HackerRank.webp',
    './images/hacktoberfest2020.webp',
    './images/monkey.webp',
    './images/Profile-pic.webp',
    './images/Profile-pic.png',
    './images/Profile-pic-512x512.png',
    './images/Profile-pic-1024.png',
    './images/quote-img.webp',
    './images/sda.webp',
    './images/us.webp',
    './js/bootstrap.bundle.min.js',
    './js/jquery.easing.min.js',
    './js/particles.min.js',
    './js/scrollspy.min.js',
    './js/typed.init.js',
    './js/typed.min.js',
    './js/vanilla-tilt.min.js'
];

self.addEventListener('install', async ()=>{
    const cache = await caches.open('static-cache');
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    if(url.origin === location.url){
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req){
    const cachedResponse = caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req){
    const cache = await caches.open('dynamic-cache');

    try {
        const res = await fetch(req);
        cache.put(req, res.clone())
        return res;
    } catch (error) {
        return await cache.match(req);
    }
}
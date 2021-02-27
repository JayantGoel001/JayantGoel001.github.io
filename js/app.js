! function($) {
    "use strict";
    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

        if (scroll+50 >= window.innerHeight) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });
    $('.navbar-nav a').on('click', function(event) {
        const $anchor = $(this);
        $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top - 0}, 1500, 'easeInOutExpo');
        $( ' .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
        $( this ).parent( 'li' ).addClass( 'active' );
        event.preventDefault();
    });
    $("#navbarCollapse").scrollspy({
        offset: 70
    });
}(jQuery);
let newWorker;

document.getElementById('reload').addEventListener('click', function(){
    newWorker.postMessage({ action: 'skipWaiting' });
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(reg => {
        reg.addEventListener('updatefound', () => {
            newWorker = reg.installing;
            newWorker.addEventListener('statechange', () => {
                switch (newWorker.state) {
                    case 'installed':
                        if (navigator.serviceWorker.controller) {
                            let notification = document.getElementById('notification');
                            notification.className = 'show';
                        }
                        break;
                }
            });
        });
    });
}
let refreshing;
navigator.serviceWorker.addEventListener('controllerchange', function () {
    if (refreshing) return;
    window.location.reload();
    refreshing = true;
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" })
})

particlesJS.load('particles-js', './assets/particles.json', function() {});
particlesJS.load('particles-js2', './assets/particles.json', function() {});

VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 25,
    speed: 400
});

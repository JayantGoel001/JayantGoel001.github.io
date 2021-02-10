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
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $("#navbarCollapse").scrollspy({
        offset: 70
    });
}(jQuery);


particlesJS.load('particles-js', './assets/particles.json', function() {});
particlesJS.load('particles-js2', './assets/particles.json', function() {});

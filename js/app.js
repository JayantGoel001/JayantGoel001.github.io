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
    setTimeout(function() {
        $('#image-firework').fireworks();
    });

}(jQuery);


$(function () {
    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" })
})

particlesJS.load('particles-js', './assets/particles.json', function() {});
particlesJS.load('particles-js2', './assets/particles.json', function() {});

VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 25,
    speed: 400
});


function loadAnimations() {
    let wow = new WOW({boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: false});
    particlesJS.load('particles-js', './assets/particles.json', function() {});
    particlesJS.load('particles-js2', './assets/particles.json', function() {});
    wow.init();
}
! function($) {
    "use strict";
    $('body').css("background-color","#090909");
    let loadingContent = ['.navbar','#home','#about','.quote-section','#portfolio','#trainings','#achievements','#contact','.footer'];
    for (const content of loadingContent) {
        $(content).css("display","none");
    }
    setTimeout(() => {
        $('.loader').fadeOut();
        for (const content of loadingContent) {
            $(content).fadeIn();
        }
        loadAnimations();
        setTimeout(()=>{
            $('body').fadeIn().css("background-color","#fff");
        },350);
    }, 2000);

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
    let newWorker;
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(reg => {
            reg.addEventListener('updatefound', () => {
                newWorker = reg.installing;
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
    VanillaTilt.init(document.querySelectorAll(".box"), {
        max: 25,
        speed: 400
    });
}(jQuery);
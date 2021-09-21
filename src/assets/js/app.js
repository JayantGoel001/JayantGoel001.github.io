! function($) {
    "use strict";
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

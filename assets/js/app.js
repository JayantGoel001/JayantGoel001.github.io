! function($) {
    "use strict";
    $(function () {
        $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" })
    })
	navigator.serviceWorker.register('/ngsw-worker.js').then(()=>{});
}(jQuery);

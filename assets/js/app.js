! function($) {
    "use strict";
    $("#navbarCollapse").scrollspy({
        offset: 70
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" })
    })
}(jQuery);

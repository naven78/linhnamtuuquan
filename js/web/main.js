$(document).ready((function() {
    $(window).scroll((function() {
        $(window).scrollTop() >= 30 ? $(".navbar-finalstyle").addClass("active-menu") : $(".navbar-finalstyle").removeClass("active-menu")
    })), new Mmenu(document.querySelector("#menu-mobile")), $("#change_locale").on("change", (function() {
        window.location = $(this).val()
    }))
}));
//# sourceMappingURL=main.js.map
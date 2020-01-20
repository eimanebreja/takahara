(function () {
    $('.menu-button').on('click', function () {
        $('.hamburger').toggleClass('is-active');
        $('.menu-wrap').toggleClass('onn');
    })
})();

$(document).ready(function () {
    $(window).scroll(function () {
        $(".nav-content").toggleClass("navbar-shrink", $(this).scrollTop() > 50)
    });
});
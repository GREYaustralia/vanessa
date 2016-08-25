$(document).ready(function () {
    $('.hamburger').on('click', function () {
        $(this).toggleClass('open');
        $('ul.menu').toggleClass('open');
    });

    $('main, ul.menu a').on('click', function () {
        $('.hamburger').removeClass('open');
        $('ul.menu').removeClass('open');
    });
});
$(document).ready(function () {
    $('.hamburger').on('click', function () {
        $(this).toggleClass('open');
        $('ul.menu').toggleClass('open');
    });

    $('main, ul.menu a').on('click', function () {
        $('.hamburger').removeClass('open');
        $('ul.menu').removeClass('open');
    });

    $('body').focusin(function(e){
        if (!$(e.target).parent().is('ul.menu li')) {
            $('.hamburger').removeClass('open');
            $('ul.menu').removeClass('open');
        }
    })
    $('ol.sr-hidden').find('a[href="#nav"]').on('click', function(){
        $('.hamburger').focus();
    })
    $('ol.sr-hidden').find('a[href="#about"]').on('click', function(){
        $('#about').focus();
    })


    // $('.search input').on('focus', function(){
    //   $('.social-media-icons').hide()
    // }).on('focusout', function(){
    //   $('.social-media-icons').show()
    // })
});
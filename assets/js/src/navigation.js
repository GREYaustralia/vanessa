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
    var sections = $('section').map(function () {
        return '#' + this.id;
    });
    $('.skip_nav').on('click', function(){
        $('.hamburger').focus();
    })
    $('.skip_content').on('click', function(){
        content = sections[0]
        $(content).focus();
    })
    $('.skip_footer').on('click', function(){
        $('footer').focus();
    })

});
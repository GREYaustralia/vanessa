var $body = $('main');
var $navbar = document.querySelector('nav');

// Get scroll position from session storage
$body.scrollTop(sessionStorage.scrollPos || 0);


/*
 var init = function () {
 $body.scrollTop(sessionStorage.scrollPos || 0);
 };

 window.onload = init;
 */

function anchorScrollUp(navButton, sections) {
    var secondSection = sections[1];

    if (topOfPage()) {
        navButton.fadeOut();
    }

    if ($(secondSection).offset().top - $navbar.clientHeight <= 0) {
        navButton.fadeIn();
    }
}

function anchorScrollDown(navButton, sections) {
    var firstSection = sections[0];
    var lastSection = sections.slice(-1)[0];

    if (topOfPage()) {
        navButton.fadeIn().attr('href', firstSection);
    }

    if (bottomOfPage()) {
        navButton.fadeOut();
    }

    if ($(window).height() < $(lastSection).offset().top) {
        navButton.fadeIn();
    }
}

function topOfPage() {
    return $body.scrollTop() === 0;
}

function bottomOfPage() {
    return $(window).height() - $navbar.clientHeight === Math.floor($('footer').offset().top);
}

function calculateNavButtons(sections) {
    var navButtonUp = $('.nav-btn--up');
    var navButtonDown = $('.nav-btn--down');

    $(sections).each(function (index, element) {
        var fractions = $(element).fracs();
        if (fractions.visible === 1) {
            var prevElement = $(element).prev();
            var nextElement = $(element).next();

            var prevId = prevElement.attr('id');
            var nextId = nextElement.attr('id');

            navButtonUp.attr('href', '#' + prevId);
            navButtonDown.attr('href', '#' + nextId);
        }
    });
}
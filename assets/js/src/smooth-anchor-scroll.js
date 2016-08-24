$(document).ready(function () {
    var $navbar = document.querySelector('nav');
    var $root = $('html, body');
    var $body = $('.main');

    // Smooth scroll to section on non-mobiles
    var isMobile = window.matchMedia('only screen and (max-width: 26.6em)');
    if (!isMobile.matches) {
        $root.on('click', 'a[href*="#"]:not([href="#"])', function () {
            var element = $(this).attr('href');

            $body.stop().animate({
                scrollTop: $(element).offset().top - $navbar.clientHeight + $body.scrollTop()
            }, 500);

            return false;
        });
    }

    // Enable double clicks to see the text overlay on tablets and mobiles
    var isTabletOrSmaller = window.matchMedia('only screen and (max-width: 48em)');
    if (isTabletOrSmaller.matches) {
        $('#social a').on('click', function (e) {
            e.preventDefault();

            // Get this links click count
            var clicked = $(this).data('clicked');

            // Reset all links click count
            $('#social a').data('clicked', 0);

            // Restore this links click count
            $(this).data('clicked', clicked);

            if (clicked) {
                window.open($(this).attr('href'));
            } else {
                $(this).data('clicked', 1);
            }
        });
    }

    // Vertical navigation arrows
    var navButtonUp = $('.nav-btn--up');
    var navButtonDown = $('.nav-btn--down');

    // Dynamically fetch the section id's
    var sections = $('section').map(function () {
        return '#' + this.id;
    });

    calculateNavButtons(sections);

    var secondSection = sections[1];
    if (secondSection) {
        if ($(secondSection).offset().top - $navbar.clientHeight <= 0) {
            navButtonUp.fadeIn();
        }
    }

    if (bottomOfPage()) {
        navButtonDown.fadeOut();
    }

    var backToTop = $('.btn--back-to-top');

    $body.scroll(function () {
        if (navButtonUp.length) {
           anchorScrollUp(navButtonUp, sections);
        }

        if (navButtonDown.length) {
            anchorScrollDown(navButtonDown, sections);
        }

        calculateNavButtons(sections);

        if (topOfPage()) {
            setTimeout(function () {
                backToTop.removeClass('visible');
            }, 250);
        }

        if (bottomOfPage()) {
            setTimeout(function () {
                backToTop.addClass('visible');
            }, 500);
        }
    });

    // Need to remove navbar height in order to align section correctly
    if (window.location.hash) {
        var lastSection = sections.slice(-1)[0];

        if (window.location.hash != lastSection) {
            window.scrollBy(0, -$navbar.clientHeight);
        }
    }
});

$(document).ready(function () {
    var $body = $('main');

    // Faking a file input (see: contact-us-html)
    $('[data-for]').on('click', function () {
        var element = $(this).data('for');
        $(element).click();
    });

    var hasShownFleetAnimation = false;

    $body.scroll(function () {
        // Newsletter modal should appear after the first scroll down
        var mantraElement = $('#about').fracs();
        if (mantraElement) {
            if (mantraElement.visible >= 0.9) {
                setTimeout(function () {
                    $('.newsletter-modal').addClass('visible');
                }, 500);
            }
        }

        // Animate fleet hover on first view
        var fleetElement = $('#fleet').fracs();
        if (fleetElement) {
            if (fleetElement.visible >= 0.90 && !hasShownFleetAnimation) {
                $('.van, .bus, .car').delay(500).queue(function () {
                    $(this).addClass('hover').dequeue();
                }).delay(1500).queue(function () {
                    $(this).removeClass('hover').dequeue();
                });

                hasShownFleetAnimation = true;
            }
        }

        // Save scroll position in session storage
        sessionStorage.scrollPos = $body.scrollTop();
    });

    // Dynamically change text content depending on select value
    $('#contact-us select').on('change', function () {
        var value = $(this).val();
        $('.subject').hide();
        $('.subject--' + value).show();

        var textarea = $('#contact-us textarea');

        var placeholder = textarea.data('placeholder-' + value);
        textarea.attr('placeholder', placeholder);
    });

    // Javascript back button
    $('.js-back-history').on('click', function (e) {
        e.preventDefault();

        window.history.back();
    });

    // Fleet vehicle click
    $('[data-href]' ).on('click', function() {
        var href = $(this).data('href');

        window.location.href = href;
    });
});
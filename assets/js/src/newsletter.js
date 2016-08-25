$(document).ready(function () {
    // Close newsletter modal
    $('.newsletter-modal .close, .btn--close-modal').on('click', function () {
        $('.newsletter-modal').removeClass('visible');
        sessionStorage.setItem('newsletter-modal', 'true')
        setTimeout(function () {
            $('.newsletter-modal').remove();
        }, 200);
    });

    // Submit newsletter form
    $('.newsletter-modal form').on('submit', function (e) {
        // if ($(this).valid()){
            e.preventDefault();

        // Send ajax post request
            $.post('ajax.php', $(this).serialize());

            // Hide form
            $('.newsletter-modal--form').hide();

            // Show confirmation text
            $('.newsletter-modal--confirmation').show();
        // }
    });
});
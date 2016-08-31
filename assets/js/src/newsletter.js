$(document).ready(function () {
    // Close newsletter modal
    $('.newsletter-modal .close, .btn--close-modal').on('click', function () {
        $('.newsletter-modal').removeClass('visible');
        sessionStorage.setItem('newsletter-modal', 'true')
        setTimeout(function () {
            $('.newsletter-modal').remove();
        }, 200);
    });

    $('.news').on('click', function(){
        sessionStorage.setItem('newsletter-modal', 'false')
        $('.newsletter-modal').addClass('visible');
    })

    // Submit newsletter form
    $('.newsletter-modal form').on('submit', function (e) {
        e.preventDefault();
        sessionStorage.setItem('newsletter-modal', 'true')

        // Send ajax post request
        $.post('ajax.php', $(this).serialize());


            // Hide form
        if ($(this).valid()){
            $('.newsletter-modal--form').hide();

            // Show confirmation text
            $('.newsletter-modal--confirmation').show();
        }
    });
});
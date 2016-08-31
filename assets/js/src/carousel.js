$(document).ready(function () {
    var video = document.getElementById('crowd');

    $('.carousel').flexslider({
        selector: ".carousel__slides > li",
        animation: "slide",
        animationLoop: true,
        controlNav: false,
        directionNav: true,
        prevText: "",
        nextText: "",
        slideshow: false,
        slideshowSpeed: 3500,
        smoothHeight: true,
        pauseOnHover: true,
        useCSS: false,
        touch: true,
        video: true,
        start: function () {
            video.play();
        },
        after: function (index) {},
    });


    // var mediaPlayer = $('#crowd');
    $('.element__toggle').on('click', function(){
        if (video.paused === false) {
            video.pause();
            $('.element__toggle').empty()
            $('.element__toggle').html('&#xf04b')
        } else {
            video.play();
            $('.element__toggle').empty()
            $('.element__toggle').html('&#xf04c')
        }
    })
});

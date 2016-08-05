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
});
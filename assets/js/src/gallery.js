$(document).ready(function () {
    // Blog post gallery
    $('.gallery').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
        prevArrow: '<button class="gallery__navigation gallery__navigation--prev" title="Last Entries"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="gallery__navigation gallery__navigation--next" title="Next Entries"><i class="fa fa-angle-right"></i></button>',
        responsive: [

            {
                breakpoint:1210,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
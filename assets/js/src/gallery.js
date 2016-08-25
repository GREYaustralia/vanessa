$(document).ready(function () {
    // Blog post gallery
    $('.gallery').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
        prevArrow: '<button class="gallery__navigation gallery__navigation--prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="gallery__navigation gallery__navigation--next"><i class="fa fa-angle-right"></i></button>',
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

    // Vehicles gallery
    $('.vehicles__gallery').slick({
        centerMode: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="vehicles__gallery__navigation vehicles__gallery__navigation--prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="vehicles__gallery__navigation vehicles__gallery__navigation--next"><i class="fa fa-angle-right"></i></button>',
    });
});
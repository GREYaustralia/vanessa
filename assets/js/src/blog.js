$(document).ready(function () {
    height = $(window).height();
    width = $(window).width();
    // Blog post gallery
    $('.blog__gallery').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: false,
        prevArrow: '<button class="blog__navigation blog__navigation--prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="blog__navigation blog__navigation--next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
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

    $('.blog__entries').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
        prevArrow: '<button class="blog__navigation blog__navigation--prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="blog__navigation blog__navigation--next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
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

    $(window).on('resize', function(){
        var resizeHeight = $(window).height();
        var heightChange = resizeHeight - height
        console.log(heightChange)
        // $('.blog__hero img').css('height', '' heightChange)

    });
});
$(document).ready(function () {
    // Blog post gallery
    $('.blog__gallery').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: false,
        prevArrow: '<button class="blog__navigation blog__navigation--prev" title="Last Entries"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="blog__navigation blog__navigation--next" title="Next Entries"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    $('.blog__entries').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button class="blog__navigation blog__navigation--prev" title="Last Entries"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="blog__navigation blog__navigation--next" title="Next Entries"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    blogPageImage();
    $(window).on('resize', function(){
        blogPageImage();
    });
})

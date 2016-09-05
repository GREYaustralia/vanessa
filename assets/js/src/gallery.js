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

    // Vehicles gallery
        // $('.vehicles__gallery').slick({
        //     centerMode: false,
        //     infinite: true,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     prevArrow: '<button class="vehicles__gallery__navigation vehicles__gallery__navigation--prev" title="Last Vehicle"><i class="fa fa-angle-left"></i></button>',
        //     nextArrow: '<button class="vehicles__gallery__navigation vehicles__gallery__navigation--next" title="Next Vehicle"><i class="fa fa-angle-right"></i></button>',
        // });


  function carosel(){
    if ($(window).width() < 800 ) {
      $('.fleet-main').find('text-box').hide();
      $('.fleet-main').find('vehicles').hide();
      $('.vehicles__gallery').show();
      $('.vehicles__gallery').not('.slick-initialized').slick({
        dots: true,
        infinite: true,
        draggable: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }else{
      $('.fleet-main').find('text-box').show();
      $('.fleet-main').find('vehicles').show();
      $('.vehicles__gallery').hide();
    }
  };
  carosel();

});
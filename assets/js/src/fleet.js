$(document).ready(function () {
    carosel();
    $(window).on('resize', function(){
      carosel();
      fleetHeight();
    });
function fleetHeight(){
    if($(window).height() < 600){
        $('.fleet-main .text-box p').css('color', '#ff4a00')
    }else{
        $('.fleet-main .text-box p').css('color', '#FFF')
    }
}

});
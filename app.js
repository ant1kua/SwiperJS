$(document).ready(function(){
    //initialize swiper when document ready
    var swiper = new Swiper ('.swiper-container', {

        // Optional parameters
        direction: 'horizontal',
        autoplay: 5000,
        speed: 1400,
        autoplayDisableOnInteraction: true,
        loop: true,
        parallax: true,

        // Pagination
        pagination: '.swiper-pagination',
        paginationClickable: true,
    })

    $('.swiper-container').hover(function () {
      swiper.stopAutoplay();
    }, function () {
      swiper.startAutoplay();
    });
});

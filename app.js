$(document).ready(function(){
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {

        // Optional parameters
        direction: 'horizontal',
        autoplay: 5000,
        speed: 1400,
        autoplayDisableOnInteraction: false,
        loop: true,
        parallax: true,

        // Pagination
        pagination: '.swiper-pagination',
        paginationClickable: false
    })
});

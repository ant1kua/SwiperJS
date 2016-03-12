$(document).ready(function(){
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {

        // Optional parameters
        direction: 'horizontal',
        autoplay: 5000,
        speed: 2000,
        loop: true,
        parallax: true,

        // Pagination
        pagination: '.swiper-pagination',
        paginationClickable: true
    })
});

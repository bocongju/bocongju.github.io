$(document).ready(function(){
    // slick
    var $prev = $('.slick-prev.right-arrow');
    var $next = $('.slick-next.left-arrow');
    $('.slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,   
        prevArrow: $prev, 
        nextArrow: $next,
    }); 
})
$(function(){
    $('.slider__inner').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });


$('.works__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="../icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="../icons/arrow-right.svg" alt=""></button>',
})

});
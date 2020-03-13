$(document).ready(function() {
    $('.under__aboutus__img').slick({
        dots: true,
        // autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
    });
});



    $('.person__slider').slick({
        dots: true,
        // autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.whatsay__slider'
    });


    $('.whatsay__slider').slick({
        dots: false,
        // autoplay: true,
        arrows: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.person__slider'
    });

    document.querySelector('.overlay').classList.add('close')

//--menu-mobile--//
const menu = document.querySelector(".header-mobile>i")
menu.addEventListener("click",function() {
    document.querySelector(".header-mobile ul").style.transform = "translateX(0%)"
    document.querySelector(".header-mobile ul").style.opacity = "1"
})

const closemenu = document.querySelector(".header-mobile ul i")
closemenu.addEventListener("click",function() {
    document.querySelector(".header-mobile ul").style.transform = "translateX(-100%)"
    document.querySelector(".header-mobile ul").style.opacity = "0"
})

//--prioritized--//
$(document).ready(function(){
    $(".prioritized-content").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        draggble: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                }
            },

            {
                breakpoint: 739,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  infinite: false,
                }
            },
        ]
    });
});

//--slider--//
$(document).ready(function(){
    $(".img-slider-content").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        draggble: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                }
            },

            {
                breakpoint: 739,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  infinite: false,
                }
            },
        ]
    });
});

//--slider-mobile--//
$(document).ready(function(){
    $(".img-slider-mobile-content").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        draggble: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                  slidesToShow: 1,
                }
            },

            {
                breakpoint: 739,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]
    });
});

//--product-slider--//
$(document).ready(function(){
    $(".product-new-ivy-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        draggble: false,
        prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                  slidesToShow: 3,
                }
            },

            {
                breakpoint: 739,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                }
            },
        ]
    });
});

//--product--//
$(document).ready(function(){
    $('.product-new-ivy-content').hide();
    $('.product-new-ivy-content').fadeIn();
    $('.product-new-ivy-content2').fadeOut();
    $('.product-new-ivy-content3').fadeOut();
    $('.product-new-ivy-list li').click(function(){
        $('.product-new-ivy-list li').removeClass('active');
        $(this).addClass("active");
        let id_tab = $(this).children('a').attr('href');
        $('.product-new-ivy-content').hide();
        $('.product-new-ivy-content2').hide();
        $('.product-new-ivy-content3').hide();
        $(id_tab).fadeIn();
        return false;
    });
});

//--gallery--//
$(document).ready(function(){
    $(".gallery-content").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        draggble: false,
        prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                  slidesToShow: 3,
                }
            },

            {
                breakpoint: 739,
                settings: {
                  slidesToShow: 2,
                }
            },
        ]
    });
});

//--footer--//
$(document).ready(function(){
   $('.footer-intro-content.active2 .footer-intro-list').slideDown();
   $('.footer-intro-text').click(function(){
        $(this).parent().toggleClass('active2');
        $(this).parent().children('.footer-intro-list').slideToggle();
   });
});


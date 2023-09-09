$(function () {

    $('.video__slider').slick({
        autoplay: true,
        autoplaySpeed: 90000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.article__slider-row').slick({
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/content/article-slider/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/content/article-slider/arrow-right.svg" alt=""></button>',
    });

   

     $('.contact-slider-row').slick({
         dots: true,
         arrows: false,
         slidesToShow: 10,
         slidesToScroll: 10,

         responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 7,
                }
            },
    
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 5,
                }
            },
    
        ]
        
     });

    let mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
    });

})

Fancybox.bind("[data-fancybox]", {

});
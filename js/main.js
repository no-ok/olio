$(document).ready(function(){
    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button class="prev-arrow arrows"> <span class="icon-s-arrow-l"></span></button>',
        nextArrow:'<button class="next-arrow arrows"> <span class="icon-s-arrow-r"></span></button>',
        dots:true,
        autoplay:true,
        autoplaySpeed:10000,
        fade:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    $('.main-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var oldSlide = $(slick.$slides[currentSlide]);

        oldSlide.addClass('slick-prev');
        oldSlide.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
            oldSlide.removeClass('slick-prev');
        });
    });

    $('.styler ').styler();

    $('.about__slider ,.our-menu__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button class="prev-arrow arrows"> <span class="icon-s-arrow-l"></span></button>',
        nextArrow:'<button class="next-arrow arrows"> <span class="icon-s-arrow-r"></span></button>',
    });

    $('.our-team__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:'<button class="prev-arrow arrows"> <span class="icon-s-arrow-l"></span></button>',
        nextArrow:'<button class="next-arrow arrows"> <span class="icon-s-arrow-r"></span></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.partners__slider').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow:'<button class="prev-arrow arrows"> <span class="icon-s-arrow-l"></span></button>',
        nextArrow:'<button class="next-arrow arrows"> <span class="icon-s-arrow-r"></span></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    //

    $('.accordion__btn').click(function(){
        $(this).parents('.accordion__item').toggleClass('active').find('.accordion__dropdown').slideToggle();
        $(this).parents('.accordion__item').siblings('.accordion__item').removeClass('active').find('.accordion__dropdown').slideUp();
    });

    //
    $('#btn-mob').click(function(e){
        e.preventDefault();

        $(this).toggleClass('active');

        $('.main-nav-wraper').toggleClass('active');
        $('#overlay').fadeToggle();
    });

    $('#overlay').click(function(){
        $('#btn-mob,.main-nav-wraper').removeClass('active');

        $(this).fadeOut();
    });

    //

    $('.about-block__read-more').readmore({
        speed: 75,
        moreLink: '<div><a href="" class="read-more">Читать полностью</a></div>',
        lessLink: '<div><a href="" class="read-more">Скрыть текст</a></div>',
        afterToggle: function() {
            $('.about-block__read-more').toggleClass('active');

        }
    });

    $('.about__read-more_btn').click(function(e){
        e.preventDefault();

        $(this).toggleClass('active');
        $('.about__read-more .text-block').toggleClass('active');
        $('.about__footer').fadeToggle(100);
    });

    //
    $('.fancybox-popup').fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        },
        wrapCSS:'popup-wrap',
        padding:0
    });
});
$(function() {
    $('.menu-btn').on('click', function() {
        $('.navigation__list').slideToggle();
        $(this).toggleClass('active');
    });

    

    // Main screen checkboxes /

    $('.main-slider__form-area-btn').on('click', function() {
        $('.main-slider__form-area').toggleClass('active');
    });

    $('.main-slider__form-price-btn').on('click', function() {
        $('.main-slider__form-price').toggleClass('active');
    });

    $(document).on('click', function(e){
        if (!(e.target.closest('.main-slider__form-area'))) {
            $('.main-slider__form-area').removeClass('active');
        }
        if (!(e.target.closest('.main-slider__form-price'))) {
            $('.main-slider__form-price').removeClass('active');
        }
    });

    var mySwiper = new Swiper('.works__slider', {
        // Optional parameters
        loop: true,
        // If we need pagination
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
        },

        breakpoints: {
            // when window width is >= 320px
            300: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
            },
            // when window width is >= 769
            769: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: false,
                },
            }
        }
    });

});
// const { active } = require("browser-sync");

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

    var worksSlider = new Swiper('.works__slider', {
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
                initialSlide: 3
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
                initialSlide: 0
            }
        }
    });

    var reviewsSlider = new Swiper('.reviews__slider', {
        // Optional parameters
        loop: true,
        // If we need pagination
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },

    });

    var mainSlider = new Swiper('.main-slider__inner', {
        effect: 'fade',
        crossFade: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
                renderFraction: function (currentClass, totalClass, index, total) {
                    return '<span class="' + currentClass + '">0 ' + index + ' </span>' +
                        '  ' +
                        '<span class="' + totalClass + '">0 ' + total + ' </span>';
                },
                formatFractionCurrent: function (number) {
                    if (number < 10) {
                        number = '0' + number;
                    }
                    return number;
                },
                formatFractionTotal: function (number) {
                    if (number < 10) {
                        number = '0' + number;
                    }
                    return number;
                },
        },


    });

    var scrollBarStep = 0;
    
    mainSlider.on('slideNextTransitionStart', function () {
        scrollBarStep += 20;
        $('.slider-scrollbar span').css('transform', 'translateY('+scrollBarStep+'px)');
    });

    mainSlider.on('slidePrevTransitionStart', function () {
        scrollBarStep -= 20;
        $('.slider-scrollbar span').css('transform', 'translateY('+scrollBarStep+'px)');
    });

    mainSlider.on('slideChange', function () {
        if (this.activeIndex === this.slides.length - 1) {
            $('.swiper-pagination-total').css('opacity', '1');
            $('.swiper-pagination-total').css('font-size', '26px');
            $('.swiper-pagination-current').css('opacity', '0.5');
            $('.swiper-pagination-current').css('font-size', '22px');
        } else {
            $('.swiper-pagination-total').css('opacity', '0.5');
            $('.swiper-pagination-total').css('font-size', '22px');
            $('.swiper-pagination-current').css('opacity', '1');
            $('.swiper-pagination-current').css('font-size', '26px');
        }
    });

    document.querySelectorAll('.questions__item span').forEach(function(item) {
        item.addEventListener('click', function() {
            document.querySelectorAll('.questions__item').forEach(function(block) {
                block.classList.remove('active');
            });
            item.parentElement.classList.add('active');
        });
    });

    // Works slider

    var galleryThumbs = new Swiper('.about-works__slider-thumbs', {
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.about-works__slider-top', {
        navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
        },
        thumbs: {
        swiper: galleryThumbs
        }
    });

});
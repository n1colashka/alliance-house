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

});
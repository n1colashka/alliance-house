$(function() {
    $('.menu-btn').on('click', function() {
        $('.navigation__list').slideToggle();
        $(this).toggleClass('active');
    });
});
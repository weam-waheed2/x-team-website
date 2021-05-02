$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.nav-1').addClass('black');
    }
    else {
        $('.nav-1').removeClass('black');
    }
});

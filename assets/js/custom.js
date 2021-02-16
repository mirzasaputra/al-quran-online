$('.back-to-top').hide();

$(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
        $('.navbar').addClass('bg-light navbar-fixed shadow-sm');
        $('.back-to-top').show();
    } else {
        $('.navbar').removeClass('bg-light navbar-fixed shadow-sm');
        $('.back-to-top').hide();
    }
})

$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
})

$(window).on('load', function () {
    $('.pre-loader').addClass('hide');
})
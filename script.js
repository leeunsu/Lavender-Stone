$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
        $('.footer').fadeIn();
    } else {
        $('.footer').fadeOut();
    }

});
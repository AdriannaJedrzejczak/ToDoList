var footer = $('.footer');

var h = $(window).height() - footer.height();
footer.css('top', h);

$(window).resize(function() {
    h = $(window).height() - footer.height();
    footer.css('top', h);
})


// AUTO SCROLL AFTER CHANGE HEIGHT
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

var sectionHeight = $(".main").outerHeight();
var actualSection = 0;
var height = 0, isAnimate = false;

if(!isMobile) {
    $(window).scroll(function() {
        height = $(window).scrollTop();

        if((height  > actualSection * sectionHeight + 20) && !isAnimate) {
            actualSection += 1;
            isAnimate = true;
            $('html, body').animate({ scrollTop: sectionHeight * actualSection + 'px' }, 900, 'swing', function() {
                isAnimate = false;
            });
        }

        if((height  < actualSection * sectionHeight - 20) && !isAnimate) {
            actualSection -= 1;
            isAnimate = true;
            $('html, body').animate({ scrollTop: sectionHeight * actualSection + 'px' }, 900, 'swing', function() {
                isAnimate = false;
            });
        }
    });
}



/*var footer = $('.footer');

var footerPosition = $(document).height() - 2 * footer.height() -10;
footer.css('top', footerPosition);

$(window).resize(function() {
    footerPosition = $(document).height() - footer.height();
    footer.css('top', footerPosition);
})
*/

// AUTO SCROLL AFTER CHANGE HEIGHT
/*
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
*/

/*
var sections = $(".main");
var actualSection = 0;
var height = 0, isAnimate = false;
var actualHeight = 0;

$(window).scroll(function() {
    height = $(window).scrollTop();
    var sectionHeight = $(sections[actualSection]).outerHeight();

    if((height  > actualHeight + sectionHeight - $(window).height() + 20) && !isAnimate) {
        actualHeight +=  sectionHeight;
        actualSection += 1;
        isAnimate = true;
        $('html, body').animate({ scrollTop: actualSection * sectionHeight + 'px' }, 900, 'swing', function() {
            isAnimate = false;
        });
    }

    if((height  < actualHeight - 20) && !isAnimate) {
        actualSection -= 1;
        isAnimate = true;
        $('html, body').animate({ scrollTop: actualHeight - $(sections[actualSection]).outerHeight()  + 'px' }, 900, 'swing', function() {
            isAnimate = false;
            actualHeight = height;
        });
    }
    
});
*/


$('#fullpage').fullpage({
    'sectionsColor': ['#fff', '#0079bf'],
    'verticalCentered': true,
    'navigation': true,
    'navigationPosition': 'right',
    'loopBottom': true
});
var footer = $('.footer');

var h = $(window).height() - footer.height();
footer.css('top', h);


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




var hamburger = $("#menu-hamburger");
var menu = $("#menu");

hamburger.on('click', function() {
    menu.slideToggle();
})
var modalWrapper = $("#modalWrapper");
var modalLists = $(".modalClicker");
var modalBtnCancel = $(".modalCancel");
var modalContent = $(".modal__content");
var contentElements = [$('.navigation'), $('.main'), $('.footer')];

modalLists.on('click', function() {
    addBlur(contentElements);
    modalContent.removeClass("in");
    modalWrapper.fadeIn('fast');
    let content = $($(this).data("modal"));
    content.addClass("in");
})

modalBtnCancel.on('click', closeModal)

modalWrapper.on('click', function(e) {
    if(this === e.target) {
        closeModal();
    }
})

function closeModal() {
    removeBlur(contentElements);
    modalContent.removeClass("in");
    modalWrapper.fadeOut('fast');
}

function addBlur(items) {
    $(items).each(function(){
        this.addClass("blured");
    });
}

function removeBlur(items) {
    $(items).each(function(){
        this.removeClass("blured");
    });
}
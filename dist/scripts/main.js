var footer = $('.footer');

var h = $(window).height() - footer.height();
footer.css('top', h);

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

modalBtnCancel.on('click', function() {
    removeBlur(contentElements);
    modalContent.removeClass("in");
    modalWrapper.fadeOut('fast');
})

function addBlur(items) {
    $(items).each(function(){
        this.css('filter', 'blur(3px)')
    });
}

function removeBlur(items) {
    $(items).each(function(){
        this.css('filter', 'blur(0)')
    });
}
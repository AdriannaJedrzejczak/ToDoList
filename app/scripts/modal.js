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
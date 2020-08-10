function scrollAnimation() {
    for (let i = 1; i < 4; i++) {
        $(function() {
            $(`.nbi${i}`).on('click', function(e) {
                $('html,body').stop().animate({
                    scrollTop: $(`#page-${i}`).offset().top
                }, 1500);
                e.preventDefault();
            });

        });
    }
}
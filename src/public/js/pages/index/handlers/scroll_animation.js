function scrollAnimation() {
    let $page = $('html,body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 100);
        return false;
    });
}
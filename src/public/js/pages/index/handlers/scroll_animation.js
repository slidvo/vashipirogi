function scrollAnimation() {
    let st = 'selected'
    let $page = $('html,body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 100);
    });

    $('div.navbar_item').click(function() {
        removeClassNameFromNodeList($('div.navbar_item'), st);
        !isSelected(this, st) ? this.classList.add(st) : ''
        return false
    })
}
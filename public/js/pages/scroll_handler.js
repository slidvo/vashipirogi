function scrollHandler() {
    let page2 = document.querySelector('div.page-2');

    let p2Link = document.querySelector('div.navbar_item_page-2');


    window.addEventListener('scroll', function(e) {
        let a = getBodyScrollTop();
        let b = Math.trunc(getCoords(page2).top);
        console.log(a + " : " + b);
    });

    function getCoords(elem) { // кроме IE8-
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
        };

    }

    function getBodyScrollTop() {
        return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    }

}
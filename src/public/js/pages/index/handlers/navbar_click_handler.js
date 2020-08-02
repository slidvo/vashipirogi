function navbarClickHandler(st) {
    let navbar = document.querySelector('div.navbar');
    let links = navbar.querySelectorAll('div.navbar_links div.navbar_item');

    Array.from(links).forEach(function(elt) {
        elt.addEventListener('click', function(e) {
            removeClassNameFromNodeList(links, st);

            if (!isSelected(elt, st)) {
                elt.classList.add(st);
            }
        });
    });
}
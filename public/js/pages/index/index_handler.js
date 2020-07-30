function indexHandler() {
    const st = 'selected';

    productCardHandler(st);

    navbarClickHandler(st);

    bascketHandler(st);

    // setTimeout(function() {
    //     alertCookie();
    // }, 1000)
}

//delete classname from nodelist
function removeClassNameFromNodeList(nodeList, classElt) {
    Array.from(nodeList).forEach(elt => {
        if (elt.classList.contains(classElt)) {
            elt.classList.remove(classElt);
        }
    })
}

function isSelected(elt, st) {
    return elt.classList.contains(st);
}
indexHandler();
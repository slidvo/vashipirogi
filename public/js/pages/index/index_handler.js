function indexHandler() {
    const st = 'selected';
    let productList = document.querySelector('div.basket_info div.product_list');
    let totalPriceItem = document.querySelector('div.basket_info div.total_price div.total_price__item');

    productCardHandler(productList, totalPriceItem, st);

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
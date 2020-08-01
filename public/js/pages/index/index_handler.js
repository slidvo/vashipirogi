function indexHandler() {
    const st = 'selected';
    let productList = document.querySelector('div.basket_info div.product_list');
    let totalPriceItem = document.querySelector('div.basket_info div.total_price div.total_price__item');
    let deliveryCost = 120;
    productCardHandler(productList, totalPriceItem, st);

    navbarClickHandler(st);

    bascketHandler(productList, deliveryCost, st);

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

function removeChildren(pl) {
    let basketInfo = pl.parentElement;
    let totalPrice = basketInfo.querySelector("div.total_price__item");
    // console.log(totalPrice.textContent);
    while (pl.firstChild) {
        pl.removeChild(pl.firstChild);
    }
    totalPrice.textContent = 0;

    let btnSelected = document.querySelectorAll("div.btn_add_text");
    Array.from(btnSelected).forEach(function(elt) {
        if (isSelected(elt, 'selected')) {
            elt.classList.remove('selected'); //TODO : Must add const st
            elt.textContent = 'Выбрать';
        }
    });

}

function basketFilling(pl, tPi, product) { //sp.id name weight price
    let productListItem = document.createElement('div');
    productListItem.classList.add('product_list__item');
    let elt_remove = document.createElement("div");
    elt_remove.classList.add('elt_remove');
    let img = document.createElement('img');
    img.src = "images/quit.png";
    elt_remove.appendChild(img);
    eltRemoveListener(elt_remove, tPi);

    productListItem.appendChild(elt_remove);

    let elt_name = document.createElement('div');
    let elt_weight = document.createElement('div');
    let elt_price = document.createElement('div');

    elt_name.classList.add('elt_name');
    elt_weight.classList.add('elt_weight');
    elt_price.classList.add('elt_price');

    elt_name.appendChild(document.createTextNode(product.name));
    elt_weight.appendChild(document.createTextNode(product.weight));
    elt_price.appendChild(document.createTextNode(product.price));

    productListItem.setAttribute('data-id', product.id);
    productListItem.setAttribute('data-weight', product.weight);
    productListItem.appendChild(elt_name);
    productListItem.appendChild(elt_weight);
    productListItem.appendChild(elt_price);

    pl.appendChild(productListItem);

    let result = Number(product.price) + Number(tPi.textContent);
    tPi.textContent = result;

}

function eltRemoveListener(elt, tPi) {
    elt.addEventListener('click', function(e) {
        let plItem = elt.parentElement;
        let itemCost = plItem.querySelector("div.elt_price");
        let parent = plItem.parentElement;
        tPi.textContent = Number(tPi.textContent) - Number(itemCost.textContent);
        parent.removeChild(plItem);
        if (!parent.firstChild) {
            let p4 = document.querySelector('.page-4');
            p4.classList.remove('show');
            p4.classList.add('close');
            tPi.textContent = 0;
        }
    });
}


indexHandler();
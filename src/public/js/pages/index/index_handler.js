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

function removeBasketChildren(pl) {
    let basketInfo = pl.parentElement;
    let totalPrice = basketInfo.querySelector("div.total_price__item");

    removeChildren(pl);
    totalPrice.textContent = 0;

    let btnSelected = document.querySelectorAll("div.btn_add_text");
    //TODO Function for change statuses of buttons
    Array.from(btnSelected).forEach(function(elt) {
        if (isSelected(elt, 'selected')) {
            elt.classList.remove('selected'); //TODO : Must add const st
            elt.textContent = 'Выбрать';
        }
    });

}

function removeChildren(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild)
    }
}
//TODO оптимизировать функцию
function basketFilling(pl, tPi, product) { //sp.id name weight price
    let productListItem = document.createElement('div');
    productListItem.classList.add('product_list__item');
    let elt_remove = document.createElement("div");
    elt_remove.classList.add('elt_remove');

    elt_remove
        .insertAdjacentHTML('afterbegin', '<img src="images/quit.png" alt="X">')

    eltRemoveListener(elt_remove, tPi);

    productListItem.appendChild(elt_remove);

    let text = `<div class="elt_name">${product.name}</div>
    <div class="elt_weight">${product.weight}</div>    
    <div class="elt_price">${product.price}</div>`


    productListItem.setAttribute('data-id', product.id);
    productListItem.setAttribute('data-weight', product.dWeight);

    productListItem.insertAdjacentHTML('beforeend', text)

    pl.appendChild(productListItem);

    let result = Number(product.price) + Number(tPi.textContent);
    tPi.textContent = result;

    //cart_count
    let cartCount = document.querySelector('.cart_count')
    cartCount.innerHTML = Number(cartCount.textContent) + 1
}

function eltRemoveListener(elt, tPi) {
    let dlCost = document.querySelector('div.dlCost')
    let dlCurr = document.querySelector('div.dlInfo-2')
    elt.addEventListener('click', () => {
        let plItem = elt.parentElement;
        let parent = plItem.parentElement;
        let pid = plItem.getAttribute('data-id');
        tPi.textContent = Number(tPi.textContent) - Number(plItem.querySelector("div.elt_price").textContent);

        document
            .querySelector(`#pid-${pid} div.button-add div.btn_add_text`)
            .classList
            .remove('selected')

        parent.removeChild(plItem);
        setDeliveryPrice(tPi.textContent, dlCost, dlCurr)

        document
            .getElementById('page-4')
            .style
            .display = !parent.firstChild ? 'none' : ''

        //cart_count
        let cartCount = document.querySelector('.cart_count')
        cartCount.innerHTML = Number(cartCount.textContent) - 1


    });
}

function closeRegisterOrderPage() {
    document.getElementById('register_order').style.display = "none";
    document.getElementById('page-4').style.display = "grid";
}

function setDeliveryPrice(total, dlCost, dlCurr) {
    if (total >= 1000) {
        if (dlCost.textContent != 0) {
            dlCost.innerHTML = '0';
            dlCurr.innerHTML = 'р. '
        }
    } else if (dlCost.textContent != 150) {
        dlCost.innerHTML = '150'
        dlCurr.innerHTML = ' р. '
    }
}

function closeCookieMsg() {
    document.getElementById('cmsgc').parentNode.parentNode.style.display = "none"
}


//Entry point main()
(() => {
    let productList = document.querySelector('div.basket_info div.product_list');
    let totalPriceItem = document.querySelector('div.basket_info div.total_price div.total_price__item');
    productCardHandler(productList, totalPriceItem);
    scrollAnimation();
    bascketHandler(productList);
})()
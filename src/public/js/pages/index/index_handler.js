function indexHandler() {
    const st = 'selected';
    let productList = document.querySelector('div.basket_info div.product_list');
    let totalPriceItem = document.querySelector('div.basket_info div.total_price div.total_price__item');
    let deliveryCost = 150;
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

function removeBasketChildren(pl) {
    let basketInfo = pl.parentElement;
    let totalPrice = basketInfo.querySelector("div.total_price__item");
    // console.log(totalPrice.textContent);
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

    elt_remove.insertAdjacentHTML('afterbegin', '<img src="images/quit.png" alt="X">')
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
    elt.addEventListener('click', function(e) {
        let plItem = elt.parentElement;
        let itemCost = plItem.querySelector("div.elt_price");
        let parent = plItem.parentElement;
        tPi.textContent = Number(tPi.textContent) - Number(itemCost.textContent);
        parent.removeChild(plItem);

        //TODO : Update delivery value FUNCTION!!!!        
        if (Number(tPi.textContent) >= 1000) {
            if (dlCost.textContent != 0) {
                dlCost.innerHTML = '0';
                dlCurr.innerHTML = 'р. '
            }
        } else if (dlCost.textContent != 150) {
            dlCost.innerHTML = '150'
            dlCurr.innerHTML = ' р. '
        }

        if (parent.firstChild === null) {
            let p4 = document.getElementById('page-4');
            p4.style.display = 'none'
        }

        //cart_count
        let cartCount = document.querySelector('.cart_count')
        cartCount.innerHTML = Number(cartCount.textContent) - 1
    });
}

function closeRegisterOrderPage() {
    let basketPage = document.getElementById('page-4');
    let ropage = document.getElementById('register_order');
    ropage.style.display = "none";
    basketPage.style.display = "grid";
}
indexHandler();
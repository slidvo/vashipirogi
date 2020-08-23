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
    let btnSelected = document.querySelectorAll("div.btn_add_text.selected");

    removeChildren(pl);
    totalPrice.innerHTML = 0;

    Array.from(btnSelected).forEach(elt => {
        elt.classList.remove('selected'); //TODO : Must add const st
        elt.innerHTML = 'Выбрать';
    });
}

function removeChildren(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild)
    }
}

function basketFilling(pl, tPi, product) {
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
    cartCounter(document.querySelector('.cart_count'), '+')
}

function cartCounter(cart_count, sign) {
    switch (sign) {
        case '+':
            cart_count.innerHTML = parseInt(cart_count.textContent) + 1
            break
        case '-':
            cart_count.innerHTML = parseInt(cart_count.textContent) - 1
            break
        default:
            console.log(`This sign ${sign} does not supporting`)
    }
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

        document.getElementById('page-4').style.display = !parent.firstChild ? 'none' : ''

        //cart_count
        cartCounter(document.querySelector('.cart_count'), '-')


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

function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function phoneMask() {
    let pn = document.getElementById("phone")
    pn.addEventListener('blur', () => {
        let res = '';
        let t = pn.value.split(' ');
        t.forEach(e => { res += e })
        if (t[0] != pn.value) {
            console.log(t)
            pn.value = res;
        }
    }, false)
}

//Entry point main()
(() => {
    let productList = document.querySelector('div.basket_info div.product_list');
    let totalPriceItem = document.querySelector('div.basket_info div.total_price div.total_price__item');
    productCardHandler(productList, totalPriceItem);
    scrollAnimation();
    bascketHandler(productList);
    cookieCloseMsg();
    phoneMask();
})()
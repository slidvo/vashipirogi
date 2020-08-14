// page-4 handler
function bascketHandler(pl) {
    let btn = document.querySelector('div.button_basket');
    let p4 = document.querySelector('.page-4');
    let b1 = p4.querySelector('button.b1');
    let b2 = p4.querySelector('button.b2');
    let b3 = p4.querySelector('button.b3');

    btn.addEventListener('click', () => {
        if (pl.firstChild) {
            p4.style.display = 'grid';
            //TODO : Update delivery value FUNCTION!!!!
            let dlCost = document.querySelector('div.dlCost')
            let dlCurr = document.querySelector('div.dlInfo-2')
            let basketTotalPrice = document.querySelector('.total_price__item')

            setDeliveryPrice(basketTotalPrice.textContent, dlCost, dlCurr)

        } else {
            alert("Корзина пустая :(")
        }
    });

    b1.addEventListener('click', () => {
        p4.style.display = 'none';
    })

    b2.addEventListener('click', () => {
        let cartCount = document.querySelector('.cart_count')
        let dlCost = document.querySelector('.dlCost')
        removeBasketChildren(pl);
        removeChildren(document.querySelector('.ro_send_products'))
            //cart_count reset
        cartCount.innerHTML = 0;
        dlCost.innerHTML = 0;
        document.getElementById('page-4').style.display = 'none';

    })

    b3.addEventListener('click', () => {
        let registerOrderPage = document.getElementById("register_order");
        if (pl.firstChild) {
            let registerOrderProductList = document.querySelector("div.register_order__info div.ro_product_list");
            let plItems = pl.querySelectorAll("div.product_list__item");
            let roSendProducts = document.querySelector('.ro_send_products');

            p4.style.display = 'none';
            registerOrderPage.style.display = "grid";

            removeChildren(registerOrderProductList);
            removeChildren(roSendProducts);
            registerOrderProductsFilling(plItems, registerOrderProductList, roSendProducts);
            roFillTotal(pl, registerOrderPage);
        }
    })
}

function registerOrderProductsFilling(plItems,
    registerOrderProductList,
    roSendProducts) {
    Array.from(plItems).forEach(elt => {
        let id = elt.getAttribute('data-id');
        let weight = elt.getAttribute('data-weight');
        let name = elt.querySelector("div.elt_name");
        let eWeight = elt.querySelector("div.elt_weight");
        let cost = elt.querySelector("div.elt_price");

        roSendProducts
            .insertAdjacentHTML('afterbegin',
                `<input type="text" hidden name="order[]" value={"id":"${id}","weight":"${weight}"}></input>`);

        let roProductListItem = `
            <div class="ro_product_list__item" data-id="${id}" data-weight="${weight}">
            <div class="elt_name">${name.textContent}</div>
            <div class="elt_weight">${eWeight.textContent}</div>
            <div class="elt_price">${cost.textContent}</div>
        </div>`
        registerOrderProductList.insertAdjacentHTML('afterbegin', roProductListItem);
    });
}

function roFillTotal(pl, registerOrderPage) {
    let plTp = pl.parentElement.querySelector("div.total_price .total_price__item");
    let roInf = registerOrderPage.querySelector("div.register_order__info");

    let roTc = roInf.querySelector("span.ro_total_cost__summ");
    let roTotal = Number(plTp.textContent);
    roTc.innerHTML = roTotal;

    let rodp = roInf.querySelector("div.ro_delivery_price");
    let rodpSumm = rodp.querySelector('.ro_delivery_price__summ');
    let rodpCurr = rodp.querySelector('.ro_delivery__curr');


    if (roTotal >= 1000) {
        rodpSumm.innerHTML = "Бесплатно";
        rodpCurr.innerHTML = "";
    } else {
        rodpSumm.innerHTML = 150;
        roTc.innerHTML = roTotal + Number(rodpSumm.textContent);
        rodpCurr.innerHTML = ' руб.'
    }
}
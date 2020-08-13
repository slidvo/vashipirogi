// page-4 handler
function bascketHandler(pl) {
    let btn = document.querySelector('div.button_basket');
    let p4 = document.querySelector('.page-4');
    let b1 = p4.querySelector('button.b1');
    let b2 = p4.querySelector('button.b2');
    let b3 = p4.querySelector('button.b3');

    btn.addEventListener('click', function(e) {
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
        e.stopPropagation()
    }, false);

    b1.addEventListener('click', function(e) {
        p4.style.display = 'none';
        e.stopPropagation()
    }, false)

    b2.addEventListener('click', function(e) {
        //TODO Оптимизировать
        removeBasketChildren(pl);
        //cart_count reset
        let cartCount = document.querySelector('.cart_count')
        cartCount.innerHTML = 0;
        let dlCost = document.querySelector('.dlCost')
        dlCost.innerHTML = 0;

        document.getElementById('page-4').style.display = 'none';
        e.stopPropagation();
    }, false)

    b3.addEventListener('click', function(e) {
        let registerOrderPage = document.getElementById("register_order");
        if (pl.firstChild) {
            p4.style.display = 'none';
            registerOrderPage.style.display = "grid";
            let registerOrderProductList = document.querySelector("div.register_order__info div.ro_product_list");

            let plItems = pl.querySelectorAll("div.product_list__item");
            let roSendProducts = document.querySelector('.ro_send_products');
            removeChildren(registerOrderProductList);
            registerOrderProductsFilling(plItems, registerOrderProductList, roSendProducts);

            roFillTotal(pl, registerOrderPage);
        }
        e.stopPropagation()
    }, false)
}

function registerOrderProductsFilling(plItems, registerOrderProductList, roSendProducts) {
    Array.from(plItems).forEach(function(elt) {
        //TODO OPTIMIZIROVATb!!!
        let id = elt.getAttribute('data-id');
        let weight = elt.getAttribute('data-weight');
        let name = elt.querySelector("div.elt_name");
        let eWeight = elt.querySelector("div.elt_weight");
        let cost = elt.querySelector("div.elt_price");

        let ro_name = document.createElement('div');
        ro_name.classList.add('elt_name');
        ro_name.appendChild(document.createTextNode(name.textContent));

        let ro_eWeight = document.createElement('div');
        ro_eWeight.classList.add('elt_weight');
        ro_eWeight.appendChild(document.createTextNode(eWeight.textContent));

        let ro_cost = document.createElement('div');
        ro_cost.classList.add('elt_price');
        ro_cost.appendChild(document.createTextNode(cost.textContent));



        let order = document.createElement('input');
        order.setAttribute('type', 'text');
        order.hidden = true;
        order.setAttribute('name', 'order[]');
        order.setAttribute("value", `{"id":"${id}","weight":"${weight}"}`)
        roSendProducts.appendChild(order);


        let roProductListItem = document.createElement('div');
        roProductListItem.classList.add('ro_product_list__item');

        roProductListItem.appendChild(ro_name);
        roProductListItem.appendChild(ro_eWeight);
        roProductListItem.appendChild(ro_cost);
        roProductListItem.setAttribute('data-id', id);
        roProductListItem.setAttribute('data-weight', weight);
        registerOrderProductList.appendChild(roProductListItem);
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
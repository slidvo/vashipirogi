// page-4 handler
function bascketHandler(pl, dc, st) {
    let btn = document.querySelector('div.button_basket');
    let p4 = document.querySelector('.page-4');
    let b1 = p4.querySelector('button.b1');
    let b2 = p4.querySelector('button.b2');
    let b3 = p4.querySelector('button.b3');

    btn.addEventListener('click', function(e) {
        if (pl.firstChild) {
            p4.style.display = 'grid';
        } else {
            alert("Корзина пустая :(")
        }
    });

    b1.addEventListener('click', function(e) {
        p4.style.display = 'none';
        btn.classList.remove(st);
    })

    b2.addEventListener('click', function(e) {
        removeChildren(pl);
    })

    b3.addEventListener('click', function(e) {
        let registerOrderPage = document.getElementById("register_order");
        if (pl.firstChild) {
            p4.style.display = 'none';
            registerOrderPage.style.display = "grid";
            let registerOrderProductList = document.querySelector("div.register_order__info div.ro_product_list");
            let plItems = pl.querySelectorAll("div.product_list__item");
            let roSendProducts = document.querySelector('.ro_send_products');

            registerOrderProductsFilling(plItems, registerOrderProductList, roSendProducts);

            roFillTotal(pl, registerOrderPage)


        }
    })
}

function registerOrderProductsFilling(plItems, registerOrderProductList, roSendProducts) {
    Array.from(plItems).forEach(function(elt) {
        let id = elt.getAttribute('data-id');
        let weight = elt.getAttribute('data-weight');
        let name = elt.querySelector("div.elt_name");

        let order = document.createElement('input');
        order.setAttribute('type', 'text');
        order.hidden = true;
        order.setAttribute('name', 'order[]');
        order.setAttribute("value", `{"id":"${id}","weight":"${weight}"}`)
        roSendProducts.appendChild(order);

        let eWeight = elt.querySelector("div.elt_weight");
        let cost = elt.querySelector("div.elt_price");
        let roProductListItem = document.createElement('div');
        roProductListItem.classList.add('ro_product_list__item');

        roProductListItem.appendChild(name);
        roProductListItem.appendChild(eWeight);
        roProductListItem.appendChild(cost);
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
    roTc.textContent = roTotal;

    let rodp = roInf.querySelector("div.ro_delivery_price");
    let rodpSumm = document.createElement('span');
    let rodpCurr = document.createElement('span');
    rodpSumm.classList.add('ro_delivery_price__summ');
    rodpCurr.classList.add('ro_delivery_price__curr');

    if (roTotal > 1000) {
        rodpSumm.textContent = "Бесплатно";
        rodp.appendChild(rodpSumm);
    } else {
        rodpSumm.textContent = 150;
        roTc.textContent = roTotal + Number(rodpSumm.textContent);
        rodpCurr.textContent = ' руб'
        rodp.appendChild(rodpSumm);
        rodp.appendChild(rodpCurr);
    }



}
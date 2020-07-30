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

            let totalPrice = p4.querySelector('div.total_price__item');
            totalPrice.textContent = Number(totalPrice.textContent) + dc;

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
            let registerOrderProductList = document.querySelector("div.register_order__info div.product_list");
            let plItems = pl.querySelectorAll("div.product_list__item");

            Array.from(plItems).forEach(function(elt) {
                let id = elt.getAttribute('data-id');
                let weight = elt.getAttribute('data-weight');
                let name = elt.querySelector("div.elt_name");
                let eWeight = elt.querySelector("div.elt_weight");
                let cost = elt.querySelector("div.elt_price");
                let roProductListItem = document.createElement('div');
                roProductListItem.classList.add('product_list__item');

                roProductListItem.appendChild(name);
                roProductListItem.appendChild(eWeight);
                roProductListItem.appendChild(cost);
                roProductListItem.setAttribute('data-id', id);
                roProductListItem.setAttribute('data-weight', weight);
                registerOrderProductList.appendChild(roProductListItem);
            });


        }
    })
}
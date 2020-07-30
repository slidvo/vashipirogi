function buttonAddProductToCartHandler(productList, totalPriceItem, button,
    weightButtons,
    productName,
    text,
    pid,
    st) {
    button.addEventListener("click", function(e) {

        if (!text.classList.contains(st)) {

            weightButtons.forEach(function(elt) {
                if (isSelected(elt, st)) {
                    text.classList.add(st);
                    text.textContent = 'В корзине';
                    basketFilling(productList, totalPriceItem, {
                        "id": pid,
                        "name": productName,
                        'weight': elt.innerText,
                        "price": elt.getAttribute('data-price'),
                    });
                }
            });
        }

    });
}


function basketFilling(pl, tPi, sp) { //sp.id name weight price
    let productListItem = document.createElement('div');
    productListItem.classList.add('product_list__item');
    let elt_remove = document.createElement("div");
    elt_remove.classList.add('elt_remove');
    let img = document.createElement('img');
    img.src = "images/quit.png";
    elt_remove.appendChild(img);

    productListItem.appendChild(elt_remove);

    let elt_name = document.createElement('div');
    let elt_weight = document.createElement('div');
    let elt_price = document.createElement('div');

    elt_name.classList.add('elt_name');
    elt_weight.classList.add('elt_weight');
    elt_price.classList.add('elt_price');

    elt_name.appendChild(document.createTextNode(sp.name));
    elt_weight.appendChild(document.createTextNode(sp.weight));
    elt_price.appendChild(document.createTextNode(sp.price));

    productListItem.appendChild(elt_name);
    productListItem.appendChild(elt_weight);
    productListItem.appendChild(elt_price);

    pl.appendChild(productListItem);
    console.log(sp);

    let result = Number(sp.price) + Number(tPi.textContent);
    tPi.textContent = result;

}
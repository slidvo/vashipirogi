function buttonAddProductToCartHandler(button,
    weightButtons,
    productName,
    selectedProducts,
    text,
    pid,
    st) {
    button.addEventListener("click", function(e) {

        if (!text.classList.contains(st)) {

            weightButtons.forEach(function(elt) {
                if (isSelected(elt, st)) {
                    text.classList.add(st);
                    text.textContent = 'В корзине';
                    basketFilling({
                        "id": pid,
                        "name": productName,
                        'weight': elt.innerText,
                        "price": elt.getAttribute('data-price'),
                    });
                }
            });
            console.log('\n');
            selectedProducts.forEach(function(e) {
                console.log(e['id'] + ":" + e['name'] + " " + e['weight'] + " " + e['price']);
            });
        }

    });
}


function basketFilling(sp) { //sp.id name weight price
    let productList = document.querySelector('div.basket_info div.product_list');
    console.log("productList : " + productList)

}
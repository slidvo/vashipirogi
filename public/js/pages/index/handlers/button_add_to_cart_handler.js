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
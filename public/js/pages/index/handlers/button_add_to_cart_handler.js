function buttonAddProductToCartHandler(button,
    weightButtons,
    productName,
    selectedProducts,
    text,
    st) {
    button.addEventListener("click", function(e) {
        weightButtons.forEach(function(elt) {
            if (isSelected(elt, st)) {
                text.classList.add(st);
                text.textContent = 'В корзине';
                selectedProducts.push({
                    "name": productName,
                    'weight': elt.innerText,
                    "price": elt.getAttribute('data-price'),
                });
            }
        });
        console.log('\n');
        selectedProducts.forEach(function(e) {
            console.log(e['name'] + " " + e['weight'] + " " + e['price']);
        });

    });
}
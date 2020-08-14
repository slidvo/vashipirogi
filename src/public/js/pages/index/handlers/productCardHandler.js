function productCardHandler(productList, totalPriceItem) {
    let st = "selected"
    let prCards = document.querySelectorAll("div.product-card");
    Array.from(prCards).forEach((productCard) => {
        let pid = productCard.getAttribute('data-pid');
        let productName = productCard.querySelector("div.product_name").innerText;
        let node_weights = productCard.querySelectorAll("div.weights div.weights_item");
        let weightButtons = Array.from(node_weights);

        let buttonAdd = productCard.querySelector("div.button-add");
        let buttonAddValue = buttonAdd.querySelector('div.btn_add_text');
        let priceForWeight = buttonAdd.querySelector("div.tp-price");

        buttonWeightHandler(weightButtons,
            priceForWeight,
            node_weights,
            buttonAddValue,
            st);

        buttonAddProductToCartHandler(productList, totalPriceItem, buttonAdd,
            weightButtons,
            productName,
            buttonAddValue,
            pid,
            st);
    });
}
function buttonWeightHandler(weightButtons,
    priceForWeight,
    node_weights,
    buttonAddValue, st) {

    weightButtons.forEach((elt) => {
        //click to a weight
        if (!isSelected(elt, st)) {
            elt.addEventListener("click", e => {
                e.stopPropagation()
                let price = elt.getAttribute("data-price");
                if (price) {
                    priceForWeight.textContent = price;
                } else {
                    priceForWeight.textContent = 'unkonwn';
                }
                removeClassNameFromNodeList(node_weights, st);
                elt.classList.add(st);

                if (buttonAddValue.classList.contains(st)) {
                    buttonAddValue.classList.remove(st)
                    buttonAddValue.textContent = 'Выбрать';
                }

            });
        }
    });
}
function buttonWeightHandler(weightButtons,
    priceForWeight,
    node_weights,
    buttonAddValue, st) {

    weightButtons.forEach(elt => {
        if (!isSelected(elt, st)) {
            elt.addEventListener("click", e => {
                priceForWeight.textContent = elt.getAttribute("data-price");
                removeClassNameFromNodeList(node_weights, st);
                elt.classList.add(st);
                buttonAddValue.classList.remove(st)
                buttonAddValue.textContent = 'Выбрать';
            });
        }
    });
}
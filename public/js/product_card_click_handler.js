function main() {

    let nodes = document.querySelectorAll("div.product-card");
    //every single card
    Array.from(nodes).forEach((node) => {
        let cart = [];
        //console.log(node);
        let node_weights = node.querySelectorAll("div.weights div.weights_item");
        let node_weights_arr = Array.from(node_weights);

        let btnAdd = node.querySelector("div.button-add");
        let btnAddText = btnAdd.querySelector('div.btn_add_text');
        let node_weights_price = btnAdd.querySelector("div.tp-price");


        node_weights_arr.forEach((elt) => {
            //click to a weight
            if (!isSelected(elt)) {
                elt.addEventListener("click", e => {
                    let price = elt.getAttribute("data-price");
                    if (price) {
                        node_weights_price.textContent = price;
                    } else {
                        node_weights_price.textContent = 'unkonwn';
                    }
                    delClassElt(node_weights, 'selected');
                    elt.classList.add('selected');

                    if (btnAddText.classList.contains('selected')) {
                        btnAddText.classList.remove('selected')
                        btnAddText.textContent = 'В корзину';
                    }

                })
            }
        })

        //btnAdd handler
        btnAdd.addEventListener("click", e => {

            node_weights_arr.forEach(elt => {
                if (isSelected(elt)) {
                    btnAddText.classList.add('selected');
                    btnAddText.textContent = 'Выбрано'
                }
            })
        });
    })

}

function showCart(cart) {
    console.log(cart)
}
//delete classname from nodelist
function delClassElt(nodeList, classElt) {
    Array.from(nodeList).forEach(elt => {
        if (elt.classList.contains(classElt)) {
            elt.classList.remove(classElt);
        }
    })
}

function isSelected(elt) {
    return elt.classList.contains('selected');
}

main();
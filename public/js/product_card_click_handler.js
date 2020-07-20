function main() {

    let nodes = document.querySelectorAll("div.product-card");
    //every single card
    Array.from(nodes).forEach((node) => {
        let cart = [];
        //console.log(node);
        let nodeW = node.querySelectorAll("div.weights div.weights_item");
        let btnAdd = node.querySelector("div.button-add");
        let btnAddText = btnAdd.querySelector('div.btn_add_text');
        let nodeW_price = btnAdd.querySelector("div.tp-price");


        Array.from(nodeW).forEach((elt) => {
            //click to a weight
            elt.addEventListener("click", e => {
                let price = elt.getAttribute("data-price");
                if (price) {
                    nodeW_price.textContent = price;
                } else {
                    nodeW_price.textContent = 'unkonwn';
                }
                delClassElt(nodeW, 'selected');
                elt.classList.add('selected');

                if (btnAddText.classList.contains('selected')) {
                    btnAddText.classList.remove('selected')
                    btnAddText.textContent = 'В корзину';
                }
            })
        })

        //btnAdd handler
        btnAdd.addEventListener("click", e => {
            btnAddText.classList.add('selected');
            btnAddText.textContent = 'Выбрано'
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

main();
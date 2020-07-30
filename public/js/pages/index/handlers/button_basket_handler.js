// page-4 handler
function bascketHandler(pl, dc, st) {
    let btn = document.querySelector('div.button_basket');
    let p4 = document.querySelector('.page-4');
    let b1 = p4.querySelector('button.b1');
    let b2 = p4.querySelector('button.b2');

    btn.addEventListener('click', function() {
        if (pl.firstChild) {
            p4.classList.remove('close');
            p4.classList.add('show');

            let totalPrice = p4.querySelector('div.total_price__item');
            totalPrice.textContent = Number(totalPrice.textContent) + dc;

        } else {
            alert("Корзина пустая :(")
        }
    });

    b1.addEventListener('click', function() {
        p4.classList.remove('show');
        p4.classList.add('close');
        btn.classList.remove(st);
    })

    b2.addEventListener('click', function() {
        removeChildren(pl);
    })
}
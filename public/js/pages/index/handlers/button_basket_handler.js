// page-4 handler
function bascketHandler(st) {
    let btn = document.querySelector('div.button_basket');
    let p4 = document.querySelector('.page-4');
    let b1 = document.querySelector('button.b1');
    let b2 = document.querySelector('button.b2');

    btn.addEventListener('click', function(e) {
        p4.classList.remove('close');
        p4.classList.add('show');

    });

    b1.addEventListener('click', function() {
        p4.classList.remove('show');
        p4.classList.add('close');
        btn.classList.remove(st);
    })
}
function bascketHandler() {
    let btn = document.querySelector('div.button_basket');
    let p4 = document.querySelector('.page-4')
    btn.addEventListener('click', function(e) {
        p4.classList.remove('close');
        p4.classList.add('show');
    });

    p4.addEventListener('click', function() {
        p4.classList.remove('show');
        p4.classList.add('close');
    })
}
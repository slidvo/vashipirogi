function indexHandler() {
    const st = 'selected';

    productCardHandler(st);

    navbarClickHandler(st);

    setTimeout(function() {
        alertCookie();
    }, 1000)
}

indexHandler();
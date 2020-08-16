function cookieCloseMsg() {
    let cmsg = getCookie('cmsg');
    if (cmsg == 'true' || cmsg == undefined) {
        document
            .querySelector(".cookies_msg__close")
            .addEventListener('click', () => {
                document
                    .getElementById('cmsgc')
                    .parentNode
                    .parentNode
                    .style
                    .display = "none"

                document.cookie = "cmsg=false"
            }, false)
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let timeout;
    let lst;
    let check = true;

    let iml = document.querySelectorAll("img.lazy");
    let num = document.getElementById('num');
    let images = document.getElementsByTagName('img');


    function lazyload() {
        if (timeout)
            clearTimeout(timeout);

        timeout = setTimeout(function () {
            let scrollTop = window.pageYOffset;
            iml.forEach(function (img) {
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    lst = document.getElementsByClassName('lazy');
                    num.innerHTML = '';
                    num.insertAdjacentHTML('beforeend', `${images.length - lst.length}`);
                    if (check && lst.length === 0) {
                        check = false;
                        let label = document.getElementsByTagName('label')[0];
                        label.classList.add('finish');
                        setTimeout(function () {
                            label.style.display = 'none';
                        }, 3000);
                    }
                }
            });
            if (iml.length == 0) {
                document.removeEventListener("scroll", lazyload);
            }
        }, 250);
    }

    document.addEventListener("scroll", lazyload);
});
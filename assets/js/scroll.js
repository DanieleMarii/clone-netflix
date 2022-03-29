window.addEventListener('scroll', function () {
    let menu = document.querySelector("header");
    let numPx = 30;
    if (window.scrollY > numPx) {
        menu.classList.add('mudaCor');
    }else{
        menu.classList.remove('mudaCor');
    }
})
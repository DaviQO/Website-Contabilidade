function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu.png"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/fechar.png"
    }
}

// CARDS POPUP



// LGPD

const open = document.getElementById('open')
const modal_container = document.getElementById('modal_container')
const close = document.getElementById('close')

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});
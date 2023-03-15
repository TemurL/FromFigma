const menuBtn = document.getElementById('menu-btn');
const header = document.querySelector('header');
const mediaQ = window.matchMedia('(max-width: 450px)')

function mobHead () {
    if (header.style.marginLeft === '' || header.style.marginLeft === '100vw') {
        header.style.marginLeft = '0';
        menuBtn.setAttribute('src', '/img/Groupcross.svg')
        menuBtn.style.transform = 'rotate(180deg)';
    } else {
        header.style.marginLeft = '100vw';
        menuBtn.setAttribute('src', '/img/Group 3menu.svg')
        menuBtn.style.transform = 'rotate(0deg)';
    }
}

menuBtn.addEventListener('click', mobHead);

header.addEventListener('click', () => {
    if (mediaQ.matches) {
        header.style.marginLeft = '100vw';
        menuBtn.setAttribute('src', '/img/Group 3menu.svg');
        menuBtn.style.transform = 'rotate(0deg)';
    }
});
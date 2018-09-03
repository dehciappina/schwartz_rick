let mobileMenu = document.querySelector('.hamburguer');
let hiddenMobileNav = document.querySelector('.main_section header nav');
let hamburguer_div1 = document.querySelector('.hamburguer_1');
let hamburguer_div2 = document.querySelector('.hamburguer_2');
let hamburguer_div3 = document.querySelector('.hamburguer_3');

mobileMenu.addEventListener('click', function() {
    console.log('NSDKKPSANDASP')
    hiddenMobileNav.classList.toggle('main_section_header_nav_APPEAR');

    hamburguer_div1.classList.toggle('hamburguer_1X');
    hamburguer_div2.classList.toggle('hamburguer_2X');
    hamburguer_div3.classList.toggle('hamburguer_3X');
})

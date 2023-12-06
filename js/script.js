const navbarList = document.querySelector('.navbar__list');
const openMenuIcon = document.querySelector('.gamburger-menu img');

function openMenu() {
    navbarList.classList.toggle('navbarAdded');
    if (navbarList.classList.contains('navbarAdded')) {
        openMenuIcon.src = './assets/images/icon__xmark.svg';
    } else {
        openMenuIcon.src = './assets/images/icon__menu-bars.svg';
    }

}

var swiper = new Swiper(".mySwiperDesktop", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// var swiper = new Swiper(".mySwiperMobile", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
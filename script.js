const navBar = document.querySelector('.menu-nav');
const menuBtn = document.querySelector('.fa-solid');
const closeMenuBtn = document.querySelector('.mobile-btn').children[0];

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    closeMenuBtn.classList.toggle('fa-bars');
    closeMenuBtn.classList.toggle('fa-times');
})
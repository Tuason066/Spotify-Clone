
const openNavToggle = document.querySelector('.open-nav-toggle');
const closeNavToggle = document.querySelector('.close-nav-toggle');

openNavToggle.addEventListener('click', e => animateButton(e.currentTarget));
closeNavToggle.addEventListener('click', e => animateButton(e.currentTarget));

const animateButton = (button) => {

    const navbar = document.querySelector('nav');
    const linksList = navbar.querySelectorAll('.links li');
    const brand = document.querySelector('.nav-brand');

    if(!button.classList.contains('slide-navbar')) {
        openNavToggle.classList.add('slide-navbar');
        closeNavToggle.classList.add('slide-navbar');

        const openBurgerLines = openNavToggle.querySelectorAll('.burger-line');
        const closeBurgerLines = closeNavToggle.querySelectorAll('.burger-line');

        openBurgerLines[0].style.transform = `rotate(-40deg)`;
        openBurgerLines[1].style.opacity = 0;
        openBurgerLines[2].style.transform = `rotate(40deg)`;

        closeBurgerLines[0].style.transform = `rotate(-40deg)`;
        closeBurgerLines[1].style.opacity = 0;
        closeBurgerLines[2].style.transform = `rotate(40deg)`;

        navbar.style.transform = `translateX(0)`;
        navbar.style.opacity = 1;

        linksList.forEach(link => {
            link.style.transform = `translateX(0)`;
            link.style.opacity = 1;
        });

        brand.style.transform = `translateX(0)`;
        brand.style.opacity = 1;

    } else {
        openNavToggle.classList.remove('slide-navbar');
        closeNavToggle.classList.remove('slide-navbar');

        const openBurgerLines = openNavToggle.querySelectorAll('.burger-line');
        const closeBurgerLines = closeNavToggle.querySelectorAll('.burger-line');

        openBurgerLines[0].style.transform = `rotate(0deg)`;
        openBurgerLines[1].style.opacity = 1;
        openBurgerLines[2].style.transform = `rotate(0deg)`;

        closeBurgerLines[0].style.transform = `rotate(0deg)`;
        closeBurgerLines[1].style.opacity = 1;
        closeBurgerLines[2].style.transform = `rotate(0deg)`;

        navbar.style.transform = `translateX(100%)`;
        navbar.style.opacity = 0;

        linksList.forEach(link => {
            link.style.transform = `translateX(2.5rem)`;
            link.style.opacity = 0;
        })

        brand.style.transform = `translateX(2.5rem)`;
        brand.style.opacity = 0;
    }

    

}
"use strict";

//burger menu
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
if (burger) {
    burger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        navbar.classList.toggle('_active');
    })
}

//scroll on click
const navLinks = document.querySelectorAll('.btn[data-goto]');
if (navLinks.length > 0) {
    navLinks.forEach(navLink => {
        navLink.addEventListener("click", onNavLinkClick);
    });

    function onNavLinkClick(e) {
        const navLink = e.target;
        if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
            const gotoBlock = document.querySelector(navLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (burger.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                burger.classList.remove('_active');
                navbar.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth",
            });
            e.preventDefault();
        }
    }
}


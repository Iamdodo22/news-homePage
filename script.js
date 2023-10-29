"use strict";
const menuOpen = document.querySelector('.menuOpen');
const menuClose = document.querySelector('.menuClose');

const navLinks = document.querySelector('.nav-links');

menuOpen.addEventListener('click', e => {
    navLinks.style.width = '75vw';
    menuClose.style.display = 'block'
})

menuClose.addEventListener('click', e => {
    navLinks.style.width = '0';
    e.target.style.display = 'none'
})
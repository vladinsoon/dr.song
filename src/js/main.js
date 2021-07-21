'use strict';

import ScrollReveal from 'scrollreveal';
import simpleParallax from 'simple-parallax-js';
import Glide from '@glidejs/glide'


//Parallax effect
const parallaxImages = document.querySelectorAll('.parallax');
const parallaxImagesNoScale = document.querySelectorAll('.parallax-no-scale');


//Variables
const productImgLength = document.querySelectorAll('.product_main--center img').length;
const bulletWrap = document.querySelector('.glide__bullets');
const btnIngredientsMore = document.querySelector('.btn_ingredients--more');
const ingredientsList = document.querySelector('.product_ingredients--list');


if (btnIngredientsMore && ingredientsList) {
    btnIngredientsMore.addEventListener('click', e => {
        e.preventDefault();
        if (ingredientsList.classList.contains('active')) {
            ingredientsList.style.maxHeight = `90px`;
            btnIngredientsMore.querySelector('span').innerHTML = 'See full ingredients'
        } else {
            ingredientsList.style.maxHeight = `${ingredientsList.querySelector('ul').offsetHeight}px`;
            btnIngredientsMore.querySelector('span').innerHTML = 'Hide ingredients'
        }
        ingredientsList.classList.toggle('active');
    })
}


new simpleParallax(parallaxImages, {
    delay: 0,
    orientation: 'down',
    scale: 1.3,
});

new simpleParallax(parallaxImagesNoScale, {
    delay: 0,
    orientation: 'down',
    scale: 1.2,
    overflow: true
});


//Scroll effect
function animation() {
    ScrollReveal().reveal('.up', {
        distance: '100px',
        interval: 200,
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
    });

    ScrollReveal().reveal('.opacity', {
        distance: '0px',
        opacity: 0,
        interval: 200,
        duration: 2000,
        delay: 200,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
    });

    ScrollReveal().reveal('.up-delay', {
        distance: '100px',
        interval: 400,
        duration: 1700,
        delay: 3000,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
    });

    ScrollReveal().reveal('.opacity-delay', {
        distance: '0px',
        opacity: 0,
        interval: 700,
        duration: 3700,
        delay: 3000,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
    });
}

animation();

if (productImgLength > 0) {
    for (let i = 0; i < productImgLength; i++) {
        const bulletDiv = document.createElement('div');
        bulletDiv.classList.add('glide__bullet');
        bulletDiv.setAttribute('data-glide-dir', `=${i}`);
        bulletWrap.appendChild(bulletDiv);
    }
}

const glide = new Glide('.product_main--image', {
    perView: 1,
    animationDuration: 500
})

glide.mount();

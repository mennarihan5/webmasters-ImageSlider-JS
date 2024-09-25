const imgs = document.getElementsByTagName('img');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

let currentImg = 0;

imgs[currentImg].classList.add('active');

const nextImg = () => {
    imgs[currentImg].classList.remove('active');
    currentImg = currentImg - 1;

    if (currentImg < 0) {
        currentImg = imgs.length -1;
    }

    imgs[currentImg].classList.add('active');
}

const prevImg = () => {
    imgs[currentImg].classList.remove('active');

    currentImg = currentImg + 1;
    if (currentImg > imgs.length - 1) {
        currentImg = 0;
    }

    imgs[currentImg].classList.add('active');
}

const autoMaticSlide = () => {
    intervalId = setInterval(nextImg, 3000);
}
const stopAutoSlide = () => {
    clearInterval(intervalId);
}

for (let img of imgs) {
    img.addEventListener('mouseover', stopAutoSlide);
    img.addEventListener('mouseout', autoMaticSlide);
}

arrowLeft.addEventListener('click', nextImg);
arrowRight.addEventListener('click', prevImg);

window.addEventListener('DOMContentLoaded', autoMaticSlide());

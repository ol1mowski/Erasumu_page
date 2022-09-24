let activeSlideNumber = 1;
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

let dot1 = document.querySelector('#dot1');
let dot2 = document.querySelector('#dot2');

let slide1 = document.querySelector('#slide1');
let slide2 = document.querySelector('#slide2');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
};

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
};

let showNextSlide = () => {
    if (activeSlideNumber == 2) {
        activeSlideNumber = 1
    }
    else {
        activeSlideNumber = activeSlideNumber + 1;
    }
    showSlide(activeSlideNumber);
};

let showPreviousSlide = () => {
    if (activeSlideNumber == 1)
    {
        activeSlideNumber = 2;
    }
    else {
        activeSlideNumber = activeSlideNumber - 1;
    }
    showSlide(activeSlideNumber);
}

let showSlide1 = () => {
    showSlide(1);
}

let showSlide2 = () => {
    showSlide(2);
}

dot1.addEventListener('click', showSlide1);
dot2.addEventListener('click', showSlide2);

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSlide);
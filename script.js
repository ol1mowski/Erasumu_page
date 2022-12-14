//Slider
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
//Timer
let pokazGodzine = () => {
    let data = new Date();

    let sekunda = data.getSeconds();
    let minuta = data.getMinutes();
    let godzina = data.getHours();

    if (sekunda < 10) {
        sekunda = '0' + sekunda;
    }

    if (minuta < 10) {
        minuta = '0' + minuta;
    }

    if (godzina < 10) {
        godzina = '0' + godzina;
    }

    let czas = godzina + ':' + minuta + ':' + sekunda;
    document.getElementById('czas').innerHTML = czas;
};

pokazGodzine();
setInterval("pokazGodzine()", 1000);
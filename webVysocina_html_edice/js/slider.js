const carouselSlideZero = document.querySelectorAll('#years-preview-zero .years-item-container');
const carouselSlideFirst = document.querySelectorAll('#years-preview-first .years-item-container');
const carouselSlideThird = document.querySelectorAll('#years-preview-third .years-item-container');
const prevBtn = document.querySelectorAll('.prevBtn');
const nextBtn = document.querySelectorAll('.nextBtn');

const nextButtonZero = nextBtn[0];
const prevButtonZero = prevBtn[0];
const nextButtonFirst = nextBtn[1];
const prevButtonFirst = prevBtn[1];
const nextButtonThird = nextBtn[2];
const prevButtonThird = prevBtn[2];
console.log(prevBtn);

let counter = 0;


nextButtonZero.addEventListener('click', () => {
    counter++;
    for (let i of carouselSlideZero) {
        if (counter == 0) {
            i.style.transform = 'translateX(' + (0) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter == 1) {
            i.style.transform = 'translateX(' + (-590) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter == 2) {
            i.style.transform = 'translateX(' + (-1180) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter > 2) { counter = 2; }
    }
});

prevButtonZero.addEventListener('click', () => {
    counter--;
    for (let i of carouselSlideZero) {
        if (counter == 0) {
            i.style.transform = 'translateX(' + (0) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter == 1) {
            i.style.transform = 'translateX(' + (-590) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter == 2) {
            i.style.transform = 'translateX(' + (-1180) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter < 0) { counter = 0; }
    };
});

nextButtonFirst.addEventListener('click', () => {
    counter++;
    for (let i of carouselSlideFirst) {
        if (counter == 0) {
            i.style.transform = 'translateX(' + (0) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter == 1) {
            i.style.transform = 'translateX(' + (-590) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter == 2) {
            i.style.transform = 'translateX(' + (-1180) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter > 2) { counter = 2; }
    }
});

prevButtonFirst.addEventListener('click', () => {
    counter--;
    for (let i of carouselSlideFirst) {
        if (counter == 0) {
            i.style.transform = 'translateX(' + (0) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter == 1) {
            i.style.transform = 'translateX(' + (-590) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter == 2) {
            i.style.transform = 'translateX(' + (-1180) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter < 0) { counter = 0; }
    };
});

nextButtonThird.addEventListener('click', () => {
    counter++;
    for (let i of carouselSlideThird) {
        if (counter == 0) {
            i.style.transform = 'translateX(' + (0) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter == 1) {
            i.style.transform = 'translateX(' + (-590) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter == 2) {
            i.style.transform = 'translateX(' + (-1180) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter > 2) { counter = 2; }
    }
});

prevButtonThird.addEventListener('click', () => {
    counter--;
    for (let i of carouselSlideThird) {
        if (counter == 0) {
            i.style.transform = 'translateX(' + (0) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter == 1) {
            i.style.transform = 'translateX(' + (-590) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter == 2) {
            i.style.transform = 'translateX(' + (-1180) + 'px)';
            i.style.transition = "transform 0.4s ease-in-out";
        }
        if (counter < 0) { counter = 0; }
    };
});
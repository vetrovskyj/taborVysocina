const carouselSlide = document.querySelector('.fotka');
const carouselImages = document.querySelectorAll('.fotka img');
const dots = document.querySelectorAll('.tecka input');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 2;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

/*carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});*/

dot[2].style.opacity = "0.3"; 

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length -1) return;
    dot[counter].style.opacity = "1";
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    dot[counter].style.opacity = "0.3";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if(counter <= 3){
    carouselImages[counter - 1].style.opacity = "0.3";
    carouselImages[counter + 1].style.opacity = "0.3";
    carouselImages[counter].style.opacity = "1";}
    if(counter === 4){carouselImages[counter].style.opacity = "1"; carouselImages[counter - 1].style.opacity = "0.3";}
    console.log(counter);
    
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    dot[counter].style.opacity = "1";
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    dot[counter].style.opacity = "0.3";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if(counter >= 1){
    carouselImages[counter + 1].style.opacity = "0.3";
    carouselImages[counter - 1].style.opacity = "0.3";
    carouselImages[counter].style.opacity = "1";}
    if(counter === 0){carouselImages[counter].style.opacity = "1"; carouselImages[counter + 1].style.opacity = "0.3";}
});

dot[0].addEventListener('click', () => { 
    dot[counter].style.opacity = "1"; 
    carouselImages[counter].style.opacity = "0.3";
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * 0) + 'px)';
    counter = 0;
    carouselImages[counter].style.opacity = "1";
    dot[0].style.opacity = "0.3"; 
});

dot[1].addEventListener('click', () => { 
    dot[counter].style.opacity = "1"; 
    carouselImages[counter].style.opacity = "0.3";
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * 1) + 'px)';
    counter = 1;
    carouselImages[counter].style.opacity = "1";
    dot[1].style.opacity = "0.3"; 
});

dot[2].addEventListener('click', () => {
    dot[counter].style.opacity = "1"; 
    carouselImages[counter].style.opacity = "0.3";
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * 2) + 'px)';
    counter = 2;
    carouselImages[counter].style.opacity = "1";
    dot[2].style.opacity = "0.3"; 
});

dot[3].addEventListener('click', () => { 
    dot[counter].style.opacity = "1"; 
    carouselImages[counter].style.opacity = "0.3";
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * 3) + 'px)';
    counter = 3;
    carouselImages[counter].style.opacity = "1";
    dot[3].style.opacity = "0.3"; 
});

dot[4].addEventListener('click', () => { 
    dot[counter].style.opacity = "1"; 
    carouselImages[counter].style.opacity = "0.3";
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * 4) + 'px)';
    counter = 4;
    carouselImages[counter].style.opacity = "1";
    dot[4].style.opacity = "0.3"; 
});
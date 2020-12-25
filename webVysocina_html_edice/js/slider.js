const carousel = document.querySelectorAll('.years-preview');

for (var i = 0; i < carousel.length; i++) {

    const carouselSlide = document.querySelectorAll('.years-item-container');
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');

    let counter = 0;

    nextBtn.addEventListener('click', () => {
        counter++;
        for (let i of carouselSlide) {
            if (counter == 0) {
                i.style.transform = 'translateX(' + (0) + 'px)';
                i.style.transition = "transform 0.4s ease-in-out";
            }
            if (counter == 1) {
                i.style.transform = 'translateX(' + (-570) + 'px)';
                i.style.transition = "transform 0.4s ease-in-out";
            }
            if (counter == 2) {
                i.style.transform = 'translateX(' + (-1160) + 'px)';
                i.style.transition = "transform 0.4s ease-in-out";
            }
            if (counter > 2) { counter = 2; }
        }
    });

    prevBtn.addEventListener('click', () => {
        counter--;
        for (let i of carouselSlide) {
            if (counter == 0) {
                i.style.transform = 'translateX(' + (0) + 'px)';
                i.style.transition = "transform 0.4s ease-in-out";
            }
            if (counter == 1) {
                i.style.transform = 'translateX(' + (-570) + 'px)';
                i.style.transition = "transform 0.4s ease-in-out";
            }
            if (counter == 2) {
                i.style.transform = 'translateX(' + (-1160) + 'px)';
                i.style.transition = "transform 0.4s ease-in-out";
            }
            if (counter < 0) { counter = 0; }
        }
    });
}
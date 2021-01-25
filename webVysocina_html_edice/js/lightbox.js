const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');

const prev = document.createElement('img');
prev.src = './images/leva.png';
prev.id = 'prev';
document.body.appendChild(prev);

const next = document.createElement('img');
next.src = './images/prava.png';
next.id = 'next';
document.body.appendChild(next);

let arr = [];
for (let i = 0, len = images.length; i < len; i++) {
    (function(index) {
        images[i].onclick = function() {
            arr = [];
            arr.push(index);
        };
    })(i);
};

function nextItem() {
    let i = arr[0];
    i = i + 1; // increase i by one
    arr = [];
    arr.push(i);
    i = i % images.length; // if we've gone too high, start from `0` again
    return images[i]; // give us back the item of where we are now
};

function prevItem() {
    let i = arr[0];
    if (i === 0) { // i would become 0
        i = images.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    arr = [];
    arr.push(i);
    return images[i]; // give us back the item of where we are now
}

images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        next.classList.add('active');
        prev.classList.add('active');
        let img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        };
        lightbox.appendChild(img);
    });
});

let img = document.createElement('img');
console.log(images);

prev.addEventListener('click', e => {
    img.src = prevItem().src;
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
    };
    lightbox.appendChild(img);
});

next.addEventListener('click', e => {
    img.src = nextItem().src;
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
    };
    lightbox.appendChild(img);
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active');
    prev.classList.remove('active');
    next.classList.remove('active');
});
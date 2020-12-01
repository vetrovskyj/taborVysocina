// Allow assets directory listings
let folder = "./images/Album";
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

$.ajax({
    url: folder,
    success: function(data) {
        $(data).find("a").attr("href", function(i, val) {
            if (val.match(/\.(jpe?g|png|gif)$/)) {
                const div = document.createElement('div');
                div.classList.add('grid-item');
                $(".grid").append(div);
                div.addEventListener('click', e => {
                    lightbox.classList.add('active');
                });
                const img = document.createElement('img');
                img.setAttribute('src', val);
                img.setAttribute('height', 400);
                img.setAttribute('alt', 'foto');
                div.appendChild(img);

                img.addEventListener('click', e => {
                    const image = document.createElement('img');
                    image.src = img.src;
                    while (lightbox.firstChild) {
                        lightbox.removeChild(lightbox.firstChild);
                    };
                    lightbox.appendChild(image);
                });
                //div.append("<img src='" + val + "' height='400' class='galerie-obrazek'>");
            };
        });
    }
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active');
});
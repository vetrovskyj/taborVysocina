// Allow assets directory listings
var folder = "./images/Album";

$.ajax({
    url: folder,
    success: function(data) {
        $(data).find("a").attr("href", function(i, val) {
            if (val.match(/\.(jpe?g|png|gif)$/)) {
                const div = document.createElement('div');
                div.classList.add('grid-item');
                $(".grid").append(div);
                const img = document.createElement('img');
                img.setAttribute('src', val);
                img.setAttribute('height', 400);
                img.setAttribute('alt', 'foto');
                div.appendChild(img);
                //div.append("<img src='" + val + "' height='400' class='galerie-obrazek'>");
            }
        });
    }
});
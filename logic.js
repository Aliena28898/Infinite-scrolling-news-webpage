
$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/Aliena28898/Infinite-scrolling-news-webpage/8c584b7/newsdefault.json", function (data) {
        //en aquest punt l'objecte jsonObject correspon al fitxer
        pintar(data);
    });
});




function pintar(json){
    var arr = json;

    for (var i = 0; i < arr.length; i++) {

    var noticias = $('#newsContainer');
    var div = document.createElement('div');
    div.setAttribute('class','noticia');
    div.setAttribute('onclick','abrirNoticia(this)');
    noticias.append(div);

    var img = document.createElement('img');
    img.setAttribute("src",arr[i].imgbig);
    img.setAttribute("class","imgTitle");
    div.appendChild(img);

    var title = document.createElement('h2');
    title.innerHTML=arr[i].title;
    title.setAttribute("class","noticiaTitle");
    div.appendChild(title);

    var subtitle = document.createElement('p');
    subtitle.innerHTML=arr[i].subtitle;
    subtitle.setAttribute("class","noticiaSubTitle");
    div.appendChild(subtitle);
    }
}

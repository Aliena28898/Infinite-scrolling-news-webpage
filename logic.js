var noticiacount = 0;
$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/Aliena28898/Infinite-scrolling-news-webpage/8c584b7/newsdefault.json", function (data) {
        //en aquest punt l'objecte jsonObject correspon al fitxer
        pintar(data);
    });
    $.getJSON("https://raw.githubusercontent.com/Aliena28898/Infinite-scrolling-news-webpage/8c584b7/newsdefault.json", function (data2) {
        //en aquest punt l'objecte jsonObject correspon al fitxer

        $(window).scroll(function () {
            addNews(data2);
        });
    });
});


function addNews(data) {
    var arr = [];
    for (var i = noticiacount; i < noticiacount + 3; i++) {
        if (i < data.length) {
            arr.push(data[i]);
        }
    }
    noticiacount += 3;
    pintar(arr);
}

function pintar(json) {
    var arr = json;

    for (var i = 0; i < arr.length; i++) {

        var noticias = $('#newsContainer');
        var div = document.createElement('div');
        div.setAttribute('class', 'noticia');
        div.setAttribute('data-toggle', 'modal');
        div.setAttribute('data-target', '#' + arr[i].id);
        div.setAttribute('onclick', 'openModal('+ arr[i].id+')');
        noticias.append(div);

        var img = document.createElement('img');
        img.setAttribute("src", arr[i].imgbig);
        img.setAttribute("class", "imgTitle");
        div.appendChild(img);

        var title = document.createElement('h2');
        title.innerHTML = arr[i].title;
        title.setAttribute("class", "noticiaTitle");
        div.appendChild(title);

        var subtitle = document.createElement('p');
        subtitle.innerHTML = arr[i].subtitle;
        subtitle.setAttribute("class", "noticiaSubTitle");
        div.appendChild(subtitle);

        var modal = document.createElement('div');
        modal.setAttribute("id", arr[i].id);
        modal.setAttribute("class", "modal fade");
        modal.setAttribute("role", "dialog");
        noticias.append(modal);

        var modaldia = document.createElement('div');
        modaldia.setAttribute("class", "modal-content");
        modal.appendChild(modaldia);

        var modalhead = document.createElement('div');
        modalhead.setAttribute("class", "modal-header");
        modaldia.appendChild(modalhead);

        var modtitle = document.createElement('h4');
        modtitle.setAttribute("class", "modal-title");
        modtitle.innerHTML = arr[i].title;
        modalhead.appendChild(modtitle);

        var button = document.createElement('button');
        button.setAttribute("class", "close");
        button.setAttribute("data-dismiss", "modal");
        button.setAttribute('data-target', '#' + arr[i].id);
        button.setAttribute("onclick", "closeModal(" + arr[i].id + ")");
        button.innerHTML = "&times;";
        modalhead.appendChild(button);

        var modalbody = document.createElement('div');
        modalbody.setAttribute("class", "modal-body");
        modaldia.appendChild(modalbody);

        var modalimgbig = document.createElement('img');
        modalimgbig.setAttribute("src", arr[i].imgbig);
        modalimgbig.setAttribute("class", "imgTitle");
        modalbody.appendChild(modalimgbig);

        modalsubtitle = document.createElement('p');
        modalsubtitle.innerHTML = arr[i].subtitle;
        modalsubtitle.setAttribute("class", "noticiaSubTitle");
        modalbody.appendChild(modalsubtitle);

        var modalimgmid = document.createElement('img');
        modalimgmid.setAttribute("src", arr[i].imgmid);
        modalimgmid.setAttribute("class", "imgmid");
        modalbody.appendChild(modalimgmid);

        var modaltext = document.createElement('p');
        modaltext.innerHTML = arr[i].text;
        modaltext.setAttribute("class", "noticiatext");
        modalbody.appendChild(modaltext);

        var video = document.createElement('iframe');
        var url = arr[i].video;
        url = url.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
        video.setAttribute("src", url);
        video.setAttribute('class', 'video');
        modalbody.appendChild(video);

        var modalfooter = document.createElement('div');
        modalfooter.setAttribute("class", "modal-footer");
        modaldia.appendChild(modalfooter);

        var buttonfoot = document.createElement('button');
        buttonfoot.setAttribute("class", "close");
        buttonfoot.setAttribute("data-dismiss", "modal");
        buttonfoot.setAttribute('data-target', '#' + arr[i].id);
        buttonfoot.setAttribute("onclick", "closeModal(" + arr[i].id + ")");
        buttonfoot.innerHTML = "Cerrar";
        modalfooter.appendChild(buttonfoot);
    }
}

function openModal(id){
    document.getElementById(id).style.display="initial";
}
function closeModal(id) {
    //document.getElementById(id).removeClass("in");
    $(".modal-backdrop").remove();
    $('body').removeClass('modal-open');
    $('body').css('padding-right', '0px');
    //document.getElementById(id).style.display = "none";
}

function abrirNoticia(id) {
    window.open('noticia.html', '_blank');
}



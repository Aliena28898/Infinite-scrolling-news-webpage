
$(document).ready(function () {
    $.getJSON("newsdefault.json", function (data) {
        //en aquest punt l'objecte jsonObject correspon al fitxer
        pintar(data);
    });
});




function pintar(json){
    $.each( json, function( i, empleado ) {
        $("#out").append(noticia["title"]);
    });
}
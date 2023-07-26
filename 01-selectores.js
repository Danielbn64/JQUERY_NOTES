$(document).ready(function(){
    //console.log("Jquery se a cargado correctamente")
    //Selector de id
    $("#rojo").css("background","red")
    .css("color", "white");

    $("#amarillo").css("background","yellow")
    .css("color", "green")
    
    $("#verde").css("background","green")
    .css("color", "white")

    //Selectores de clases
    var mi_clase = $(".zebra").css("padding","5px");
    //console.log(miclase[0]);
    console.log(mi_clase.eq(1));
    //mi_clase.css("border", "5px dashed black")

    $(".sin_borde").click(function(){
        //$(this).css("border", "5px dashed black");
        $(this).addClass("zebra");
    });

    //Selectores de etiqueta
    var parrafos = $("p").css("cursor","pointer");
    parrafos.click(function(){
        var este = $(this);
        if(!este.hasClass("grande")){
            este.addClass("grande");
        }else{
            este.removeClass("grande")
        }
    });

    //Selectores de atributos
    $('[title="google"]').css("background","#ccc");
    $('[title="facebook"]').css("background","blue");

    //Otros
    //$("p,a").addClass("margen-superior");
    //var busqueda = $("#caja").find(".resaltado");
    //var busqueda = $("#caja .resaltado").eq(0).parent().parent().find('[title="google"]');
    var busqueda = $("#elemento2").parent().parent().find('.resaltado');
    console.log(busqueda)
});
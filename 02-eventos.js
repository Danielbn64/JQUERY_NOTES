$(document).ready(function(){
    var caja = $("#caja");
    //Mouseover y mouseout
    /*
    caja.mouseover(function(){
        $(this).css("background","red");
    })
    caja.mouseout(function(){
       $(this).css("background","yellow");
    });
    */
    function cambiaRojo(){
        $(this).css("background","red");
    }

    function cambiaAmarillo(){
        $(this).css("background","yellow");
     }
    //Hover
    caja.hover(cambiaRojo,cambiaAmarillo);

    //Click, Doble click
    caja.click(function(){
        $(this).css("background", "blue")
        .css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("background", "pink")
        .css("color", "yellow");
    });

    //Focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos");
    nombre.focus(function(){
        $(this).css("border", "2px solid green");
    });

    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc");
        datos.text($(this).val()).show();
    });

    //Mousedown y mouseup
    datos.mousedown(function(){
        $(this).css("border-color", "lightgreen");
    });

    datos.mouseup(function(){
        $(this).css("border-color", "black");
    });

    //Mousemove
    $(document).mousemove(function(){
        //console.log(event.clientX);
        //console.log(event.clientY);
        //$("body").css("cursor","none");
        $("#sigueme").css("left",event.clientX)
        .css("top",event.clientY);
    });
});
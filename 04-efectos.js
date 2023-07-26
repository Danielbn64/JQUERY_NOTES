$(document).ready(function(){
    var caja = $("#caja");
    $("#mostrar").hide();
    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        //$("#caja").fadeIn("fast");
        //$("#caja").fadeTo("slow",1);
        //$("#caja").fadeIn("slow");
        //$("#caja").show("fast");
        //$("#caja").show("normal");
        $("#caja").slideDown("slow",1);
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        //$("#caja").fadeOut("fast");
        //$("#caja").fadeOut("slow");
        //$("#caja").hide("fast");
        //$("#caja").hide("normal");
        //$("#caja").fadeTo("slow",0);
        caja.slideUp("slow",0);
    });

    $("#todoenuno").click(function(){
        //$("#caja").toggle("fast");
        //$("#caja").fadeToggle("fast");
        //$("#caja").slideToggle("fast");
        caja.slideToggle("fast");
    });

    $("#animar").click(function(){
        caja.animate({
            marginLeft: "500px",
            fontSize: "50px",
            height: "110px"
            }, "fast")
        .animate({
            borderRadius: "800px",
            //marginTop: "50px"
        },"fast")
        .animate({
            borderRadius: "0px",
            marginLeft: "0px"
        },"fast")
        .animate({
            borderRadius: "800px",
            marginTop: "0px"
        },"fast")
    });
});
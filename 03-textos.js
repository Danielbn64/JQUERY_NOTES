$(document).ready(function(){
    console.log($("a").length);
    reloadLinks();
    $('#add_button')
        .removeAttr("disabled")
        .click(function(){
        //$("#menu").append('<li><a href="'+$("#add_link").val()+'"></a></li>');
        $("#menu").prepend('<li><a href="'+$("#add_link").val()+'"></a></li>');
        //$("#menu").before('<li><a href="'+$("#add_link").val()+'"></a></li>');
        $("#add_link").val("")
        reloadLinks();
    });
});

function reloadLinks(){
    $("a").each(function(){
        console.log($(this));
        console.log($(this).attr("href"));
        var these = $(this);
        var enlace = these.attr("href");
        these.attr('target','_black')
        these.removeAttr()
        these.text(enlace);
    });
}
$(document).ready(function(){
    //evebto mouseover y mouseout
    var caja=$("#caja");
  /*  caja.mouseover(function(){
        $(this).css("background","green");
    });

    caja.mouseout(function(){
        $(this).css("background","blue");
    });
*/
    function cambiarVerde(){
        $(this).css("background","green");
    }
    function cambiarAzul(){
        $(this).css("background","blue");
    }
    //evento hover
    caja.hover(cambiarVerde,cambiarAzul);

    //evento click
    caja.click(function(){
        $(this).css("background","pink");
    });

    //doble click
    caja.dblclick(function(){
        $(this).css("background","red");
    });
    //eventos focus-blur
    var nombre=$("#nombre");
    var datos=$("#datos");
    nombre.focus(function(){
        $(this).css("border","2px solid blue");
    });

    nombre.blur(function(){
        $(this).css("border","2px solid red");
    });

    datos.mousedown(function(){
        $(this).css("border-color","green");
    });

    datos.mouseup(function(){
        $(this).css("border-color","red");
    });

    //mousemove
    $(document).mousemove(function(){
        $('body').css("cursor","none");
        $('#sigueme').css("left",event.clientX)
                     .css("top",event.clientY);
    });
    

});
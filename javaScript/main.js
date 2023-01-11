//Eventos
//Cuando el usuario da click
var boton = document.querySelector("#boton");
var boton2n = document.querySelector("#boton2");

console.log(boton);

function cambiarColor(){
    var bg = boton.style.background;
    if(bg == "blue"){
        boton.style.background = "red";
        boton.style.padding = "10px";

    }else {
        boton.style.background = "blue";
        boton.style.padding = "5px";
    }

}

//Evento Click

boton2.addEventListener('click', function(){
    this.style.border = "10px solid black";
})

//Evento mouseover
boton2.addEventListener('mouseover', function(){
    this.style.background = "yellow";
})

//Evento mouseout
boton2.addEventListener('mouseout', function(){
    this.style.background = "pink";
})

//Evento focus
var input = document.querySelector("#nombre");
input.addEventListener('focus', function(){
    console.log("Estoy dentro del input");
})

//Evento blur
input.addEventListener('blur', function(){
    console.log("Estoy fuera del input");
})

//Evento Keydown
input.addEventListener('keydown', function(){
    console.log("Estoy presionando la tecla", String.fromCharCode(event.keyCode));
})

//Evento Keypress
input.addEventListener('keydown', function(){
    console.log("Estoy presionando la tecla", String.fromCharCode(event.keyCode));
})

//Evento Keyup
input.addEventListener('keydown', function(){
    console.log("Estoy soltando la tecla", String.fromCharCode(event.keyCode));
})
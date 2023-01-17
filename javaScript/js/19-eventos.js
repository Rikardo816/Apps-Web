'use strict'
window.addEventListener('load',()=>{

//eventos cuando el usuario da click o pasa el mouse por el elemento
var boton=document.querySelector("#boton");
var boton2=document.querySelector("#boton2");
console.log(boton);
function cambiarColor(){
    var bg=boton.style.background;
    if(bg=="blue"){
        boton.style.background="red";
        boton.style.padding="10px";
    }else{
        boton.style.background="blue";
        boton.style.padding="5px";
    }
}
//evento click
boton2.addEventListener('click',function(){
    this.style.border="10px solid black";
});
//evento mouseover
boton2.addEventListener('mouseover',function(){
    this.style.background="yellow";
});

//evento mouseout
boton2.addEventListener('mouseout',function(){
    this.style.background="pink";
});
//evento focus
var input=document.querySelector("#nombre");
input.addEventListener('focus',function(){
    console.log("Estoy dentro del input");
});
//evento blur
input.addEventListener('blur',function(){
    console.log("Estoy fuera del input");
});
//evento keydown
input.addEventListener('keydown',function(){
    console.log("Estoy presionando la tecla",String.fromCharCode(event.keyCode));
});
//evento keypress
input.addEventListener('keypress',function(){
    console.log("Estoy presionando la tecla",String.fromCharCode(event.keyCode));
});
//evento keyup
input.addEventListener('keyup',function(){
    console.log("Estoy soltando la tecla",String.fromCharCode(event.keyCode));
});

});
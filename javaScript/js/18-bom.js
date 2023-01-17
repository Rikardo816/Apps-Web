'use strict'
/*
BOM - Browser Object Model
trabajar con el navegador
*/
function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(screen.height);
    console.log(screen.width);
}
getBom();
function abrirVentana(url){
    window.open(url,"","width=400 height=300");
}
abrirVentana("https://fis.epn.edu.ec");
function redirect(url){
    window.location.href=url;
}
redirect("https://www.epn.edu.ec");
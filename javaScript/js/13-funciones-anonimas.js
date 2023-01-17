'use strict'
/*
funcion anonima es una funcion que no tiene nombre
 *
function nombrePelicula(nombre){
    console.log(nombre);
}
nombrePelicula("Titanic");*/
var pelicula=(nombre)=>{
    return "La pelicula es "+nombre;
}
console.log(pelicula("XMEN"));
function cuadrado(numero){
    console.log(numero*numero);
}
cuadrado(5);

var potencia=(numero)=>{
    console.log("Cuadrado "+(numero*numero));
}
console.log(potencia(3));
function suma(num1,num2){
    console.log("Suma "+(num1+num2));
}
suma(5,6);
var resultado=(num1,num2)=>{
    console.log("Suma "+(num1+num2));
}
console.log(resultado(4,2));
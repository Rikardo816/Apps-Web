'use strict'
/*
sin comillas es numero
con comillas es cadena
las comillas dobles son mas importantes que las simples
*/
var numero=8;
var numero2="5";
console.log(numero);
console.log(numero2);

var suma=numero+numero2;
console.log(suma);
//tipos de datos
//enteros, string, float, booleano, array, objetos
var cadena="Hola, bienvenido";
var verdadero_falso=true;//false 0 o 1
console.log(cadena);
console.log(verdadero_falso);
//funciones de conversion
//convertir de cadena a numero
var numero_falso="3";
console.log(Number(numero_falso));
console.log(+numero_falso)
//convertir de numero a texto
console.log(String(numero));
//conocer el tipo de dato
console.log(typeof numero_falso);
console.log(typeof numero);
console.log(typeof verdadero_falso);

//NaN -> Not a Number
'use strict'
//funciones son un grupo de instrucciones
//que se pueden reutilizar
function mensaje(){
    console.log("Hola");
    alert("Bienvenido");
    return 'ok';
}
//llamar o invocar la funcion
var resultado=mensaje();
console.log(resultado);

//funciones con parametros
function suma(numero1, numero2){
    console.log("Suma "+(numero1+numero2));
}
suma(2,3);

function calculadora(numero1,numero2){
    console.log("Suma "+(numero1+numero2));
    console.log("Resta "+(numero1-numero2));
    console.log("Multiplicacion "+(numero1*numero2));
    console.log("Division "+(numero1/numero2));
}
calculadora(6,2);

//funciones con parametros adicionales
function calculadora2(numero1, numero2, mostrar=false){
    if(mostrar==false){
        console.log("Suma "+(numero1+numero2));
        console.log("Resta "+(numero1-numero2));
        console.log("Multiplicacion "+(numero1*numero2));
        console.log("Division "+(numero1/numero2));
    }else{
        console.log("Suma 2 "+(numero1+numero2));
        console.log("Resta 2 "+(numero1-numero2));
        console.log("Multiplicacion 2 "+(numero1*numero2));
        console.log("Division 2 "+(numero1/numero2));
    }
}
calculadora2(5,2,true);
calculadora2(9,3);
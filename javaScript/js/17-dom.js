'use strict'
/*
DOM - Document Object Model
Todos los elementos que existen en una pagina
Encontrar elementos con un ID concreto
hay 2 formas
var caja=document.getElementById("miCaja");
*/
var caja=document.querySelector("#miCaja");
console.log(caja);
caja.style.background="blue";
caja.style.color="white";
caja.style.padding="15px";
caja.innerHTML="Nuevo texto";
caja.className="test";

//encontrar elementos por su etiqueta
var todosLosDivs=document.getElementsByTagName('div');
console.log(todosLosDivs);

var contenidoDiv2=todosLosDivs[2].textContent;
console.log(contenidoDiv2);

var contenidoDiv=todosLosDivs[3];
contenidoDiv.innerHTML="otro texto";
contenidoDiv.style.background="red";

var seccion=document.querySelector("#miSeccion");
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent=='string'){
        var parrafo=document.createElement('p');
        var texto=document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

var hr=document.createElement('hr');
seccion.append(hr);

//encontrar elementos por su clase
var divRojos=document.getElementsByClassName('rojo');
var divAmarillo=document.getElementsByClassName('amarillo');
console.log(divRojos);
divAmarillo[0].style.background="yellow";

var div;
for(div in divRojos){
    if(divRojos[div].className=='rojo'){
        divRojos[div].style.background='red';
    }
}

//query selector permite selecionar un elemento o el 1er elemento
var id=document.querySelector("#encabezado");
console.log(id);

var claseRojo=document.querySelector(".rojo");
console.log(claseRojo);

var etiqueta=document.querySelector("div");
console.log(etiqueta);
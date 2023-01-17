'use strict'
var categorias=["Accion","Drama","Terror","Comedia"];
var peliculas=["Transformers","La mascara","Titanic","Saw","American Pie"];

var cine=[categorias,peliculas];

console.log(categorias[0]);

console.log(cine[0][1]);
console.log(cine[1][0]);
console.log(cine[1][2]);

//operaciones
//agregar
peliculas.push("La era de hielo");
console.log(peliculas);
//eliminar
var indice=peliculas.indexOf("Saw");
console.log(indice);
if(indice>1){
    peliculas.splice(indice,1);
    console.log(peliculas);
}
//convertir de array a string separado por comas
var peliculas_string=peliculas.join();
console.log(peliculas_string);
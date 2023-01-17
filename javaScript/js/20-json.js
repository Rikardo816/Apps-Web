'use strict'
window.addEventListener('load',()=>{
   var pelicula={
    titulo:"Transformers",
    anio:2019,
    pais:"EEUU",
    idiomas:["Ingles","Español", "Ruso"]
   }; 
   console.log(pelicula);
   console.log(pelicula.titulo);
   pelicula.anio=2023;
   console.log(pelicula);
   //las bdd no relacionales almacenan informacion de esta forma
   var peliculas=[
        {titulo:"XMEN",anio:2019,pais:"EEUU"},
        {titulo:"La era de hielo",anio:2019,pais:"EEUU"},
        {titulo:"La vida es bella",anio:2019,pais:"EEUU"},
        {titulo:"Saw",anio:2019,pais:"EEUU"},
        pelicula
   ];
   console.log(peliculas);
   var divPeliculas=document.querySelector("#peliculas");
   var index;
   for(index in peliculas){
    var parrafo=document.createElement("p");
    parrafo.append(peliculas[index].titulo+"-"+peliculas[index].anio);
    divPeliculas.append(parrafo);
   }
});
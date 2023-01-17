'use strict'
window.addEventListener('load',()=>{
    //localstorage para almacenar informacion de forma local
    if(typeof(Storage)!='undefined'){
        console.log("localstorage disponible");
    }else{
        console.log("localstorage no disponible");
    }
    //guardar datos
    //key-value
    localStorage.setItem("nombre","Aplicaciones Web");
    ///recuperar del localstorage
    console.log(localStorage.getItem("nombre"));
    //guardar un json
    var user={
        nombre:"Daniel",
        correo:"daniel@pen.edu.ec",
        sitio:"fis.epn.edu.ec"
    };
    console.log(user);
    //convertor de json a string
    localStorage.setItem("user",JSON.stringify(user));
    console.log(localStorage.getItem("user"));
    //convertir de string a json
    var users=JSON.parse(localStorage.getItem("user"));
    console.log(users);
    //borrar datos del localstorage
    localStorage.removeItem("user");
    //vaciar todo el localstorage
    localStorage.clear();
});
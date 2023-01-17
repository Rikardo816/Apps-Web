'use strict'
/*
fetch (ajax) permite realizar peticiones a
servicios / api rest -->servicio remoto
se recibe un url que devuelve un json
las promesas permiten capturar datos utilizando en metodo then
si se produce un error lo capturamos con catch
tres: pendiente, cumplida, rechazada
 *
var divUsuarios=document.querySelector("#usuarios");
var usuarios=[];
fetch('https://jsonplaceholder.typicode.com/users')
.then(data=>data.json())//recibir un parametro y convertirlo en JSON
.then(data=>{
    usuarios=data;
    console.log(usuarios);
    usuarios.map((data,i)=>{
        let nombre=document.createElement("h3");
        nombre.innerHTML=i+"-"+data.name+"-"+data.address.street;
        divUsuarios.append(nombre);
    })
})*/
var divUsuarios=document.querySelector("#usuarios");
var divUsuarioGeorge=document.querySelector("#usuarioGeorge");
function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}
function getUsuarioGeorge(){
    return fetch('https://reqres.in/api/users/1');
}
function listadoUsuarios(usuarios){
    usuarios.map((data,i)=>{
        let nombre=document.createElement("h3");
        nombre.innerHTML=i+"-"+data.name+"-"+data.address.street;
        divUsuarios.append(nombre);
        document.querySelector(".loading").style.display='none';
    });
}
function mostrarUsuarioGeorge(usuario){
    let nombre=document.createElement("h3");
    nombre.innerHTML=usuario.data.first_name;
    let avatar=document.createElement("img");
    avatar.src=usuario.data.avatar;
    divUsuarioGeorge.append(nombre);
    divUsuarioGeorge.append(avatar);
    document.querySelector("#usuarioGeorge .loading").style.display='none';
}
getUsuarios()
.then(data=>data.json())
.then(users=>{
    listadoUsuarios(users);
})
.then(data=>{
    return getUsuarioGeorge();
})
.then(data=>data.json())
.then(
    user=>{
        mostrarUsuarioGeorge(user);
    }
)
.catch(error=>{
    alert('Error en la peticion');
})
try {
    var numero=4;
    alert(numero);
    var vector=new Array(9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999);
} catch (error) {
    alert("Error"+error);
}
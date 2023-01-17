'use strict'
//plantillas de texto
var nombre=prompt("Ingrese su nombre");
var apellido=prompt("Ingrese su apellido");
var cadena="<h1>Mi nombre es </h1>"+nombre+
            "<br><h1>Mi apellido es </h1>"+apellido;
document.write(cadena);

var cadena2=`
<h1>Mi nombre es </h1>${nombre}
<br><h1>Mi apellido es </h1>${apellido}
`;
document.write(cadena2);
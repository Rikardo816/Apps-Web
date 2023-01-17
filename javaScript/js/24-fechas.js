'use strict'
var fecha=new Date();
console.log(fecha);
var anio=fecha.getFullYear();
console.log(anio);
var mes=fecha.getMonth();
var dia=fecha.getDate();
console.log(mes);
console.log(dia);
var hora=fecha.getHours();
var textoHora=`
El año es ${anio},
el mes es ${mes},
el dia es ${dia},
la hora es ${hora}
`;
console.log(textoHora);
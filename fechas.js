const fechaActual = new Date()

console.log(fechaActual);

///////////////////////  año mes dia hora min sec
const fecha2 = new Date(1987, 10, 20, 01, 23, 52)
console.log(fecha2);

// dia
console.log(fecha2.getDate());

// mes
console.log(fecha2.getMonth() + 1);

// año
console.log(fecha2.getFullYear());

//
console.log(fecha2.toLocaleString('en-GB'));
console.log(fecha2.toLocaleString('en-US'));


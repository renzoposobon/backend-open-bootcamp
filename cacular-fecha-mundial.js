// Fecha actual
var fechaActual = new Date();

// Fecha futura
var fechaMundial = new Date('2026-06-04');

// Diferencia en milisegundos
var diferencia = fechaMundial.getTime() - fechaActual.getTime();

// Cálculo de días, horas, minutos y segundos
var segundos = Math.floor(diferencia / 1000);
var minutos = Math.floor(segundos / 60);
var horas = Math.floor(minutos / 60);
var dias = Math.floor(horas / 24);

horas %= 24;
minutos %= 60;
segundos %= 60;

// Impresión de resultados
console.log(dias + ' días, ' + horas + ' horas, ' + minutos + ' minutos, ' + segundos + ' segundos.');
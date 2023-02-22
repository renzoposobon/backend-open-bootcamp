const persona = {
    nombre: "Renzo",
    edad: 27
}

console.log(persona);

function obtenerDobleEdad(edad) {
    return edad * 2
}

const dobleEdad = obtenerDobleEdad(persona.edad)

console.log(dobleEdad);
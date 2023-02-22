const miFuncion = val => {
    if (typeof val === "number") {
        return val * 2
    }
    throw new Error("El valor debe ser de tipo número")
}

const numero = "8"

try {
    const doble = miFuncion(numero)
    console.log(doble);
    console.log("Esta ejecutándose de manera correcta");
} catch (e) {
    console.log("ERROR!");
    console.error(typeof(e));
} finally {
    console.log("Termine, esto se ejecuta siempre");
}
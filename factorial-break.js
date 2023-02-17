let contador = 0

while (contador != 10) {
    contador++
    if (contador === 5) {
        console.log(contador);
        console.log("C'est fini");
        break
    }
    console.log(contador);
}
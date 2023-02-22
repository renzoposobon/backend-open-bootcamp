class Persona {
  // PRIVADO #
  #nombre
  #edad
  // Protegida
  _isDeveloper = true
  constructor (nombre, edad, isDeveloper) {
    this.#nombre = nombre,
    this.#edad = edad,
    this._isDeveloper = isDeveloper
  }
  saludo() {
    console.log(`Hola, mi nombre es ${this.#nombre} y tengo ${this.#edad}`);
  }

  getNombre() {
    return this.#nombre
  }
  setNombre(nuevonombre) {
    this.#nombre = nuevonombre
  }

  getEdad() {
    return this.#edad
  }
  setEdad(nuevaedad) {
    this.#edad = nuevaedad
  }

  getDev() {
    return this._isDeveloper
  }
}
  
const jorge = new Persona("Jorge", 50, false)

// console.log(jorge);
// console.log(jorge.edad);
// console.log(jorge.saludo());
// jorge.edad = 27
// console.log(jorge.getEdad());
// console.log(jorge.getDev());




jorge.setEdad(35)
// console.log(jorge.getEdad());





class Desarrollador extends Persona {
  constructor(nombre, edad, isDeveloper, lenguaje) {
    super(nombre, edad, isDeveloper)
    this.lenguaje = lenguaje
  }

  saludo() { // Override
    super.saludo()
    console.log(`Y soy desarrollador de ${this.lenguaje}`);
  }
}

const nuevoDev = new Desarrollador("Renzo", 27, true, "Javascript")
// console.log(nuevoDev.getNombre(), nuevoDev.getEdad());
nuevoDev.saludo()
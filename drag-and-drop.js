const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
  let inicialText = parrafo.innerHTML

  parrafo.addEventListener("dragstart", event => {
    parrafo.innerHTML = "Me estas arrastrando..."
    parrafo.classList.add("dragging")
    event.dataTransfer.setData("id", parrafo.id)

    const elem_fantasma = document.querySelector(".imagen-fantasma")
    event.dataTransfer.setDragImage(elem_fantasma, 0, 0)
  })
  parrafo.addEventListener("dragend", () => {
    parrafo.innerHTML = inicialText
    parrafo.classList.remove("dragging")
  })
})

secciones.forEach(seccion => {
  seccion.addEventListener("dragover", event => {
    event.preventDefault()
    // seccion.classList.add("drop")
    event.dataTransfer.dropEffect = "move"
  })

  seccion.addEventListener("drop", event => {
    // seccion.classList.remove("drop")
    const id_parrafo = event.dataTransfer.getData("id")

    // console.log("Párrafo id: ", id_parrafo)

    const parrafo = document.getElementById(id_parrafo)
    seccion.appendChild(parrafo)
  })
})
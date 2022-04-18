//Creación de clases de animales individuales
import Leon from "./leon.js"
import Lobo from "./lobo.js"
import Oso from "./oso.js"
import Serpiente from "./serpiente.js"
import Aguila from "./aguila.js"

//Levantamiento de variables para la manipulación del DOM y mostrar en la tabla los animales registrados con el formulario.
//Se hace el levantamiento de acuerdo con la estructura de index.html
//Registro de animales
let select = document.querySelector(`#animal`)
let edad = document.querySelector(`#edad`) //Aparece un cadro amarillo entre ` y #. No afecta la ejecución del programa
const comentarios = document.getElementById(`comentarios`)
let imagenAnimal = document.querySelector(`#preview`)
const registro = document.querySelector(`#btnRegistrar`)
//Animales en investigación
const animales = document.getElementById(`Animales`)

//función asíncrona haciendo uso de Async/Await y el método fetch para el acceso al canal animales.json, y así obtener los recursos, de forma asíncrona, de los recursos de las especies animales.
const animalData = async (nombre) => {

    let animalesData = await fetch('/animales.json')
    let animalesFromJson = await animalesData.json()
    let animalArray = animalesFromJson.animales

    // Elemento seleccionado en el Select de Animal
    let selectElement = nombre.target
    let value = selectElement.value

    // Enviando la imagen del animal al ID="preview"
    if (value == animalArray[0].name) {
        imagenAnimal.innerHTML = `<img src="./assets/imgs/${animalArray[0].imagen}" alt="${animalArray[0].name}" class="rounded mx-auto d-block h-100">`
    } else if (value == animalArray[1].name) {
        imagenAnimal.innerHTML = `<img src="./assets/imgs/${animalArray[1].imagen}" alt="${animalArray[1].name}" class="rounded mx-auto d-block h-100">`
    } else if (value == animalArray[2].name) {
        imagenAnimal.innerHTML = `<img src="./assets/imgs/${animalArray[2].imagen}" alt="${animalArray[2].name}" class="rounded mx-auto d-block h-100">`
    } else if (value == animalArray[3].name) {
        imagenAnimal.innerHTML = `<img src="./assets/imgs/${animalArray[3].imagen}" alt="${animalArray[3].name}" class="rounded mx-auto d-block h-100">`
    } else
        imagenAnimal.innerHTML = `<img src="./assets/imgs/${animalArray[4].imagen}" alt="${animalArray[4].name}" class="rounded mx-auto d-block h-100">`
}

//Función para:
//validación de datos del formulario
//Instanciar
//Imprimesión de los datos en DOM
//limpiar datos de formulario
const addData = (event) => {
    event.preventDefault()

    //Datos seleccionados por el usuario desde el formulario
    let selectedAnimal = animal.options[animal.selectedIndex].value
    let selectedEdad = edad.options[edad.selectedIndex].value

    // Validación de datos. No pueden haber campos sin selección o en blanco para agregarlos a Animales en Investigación
    if (selectedAnimal == "Seleccione un animal" || selectedEdad == "Seleccione un rango de años" || comentarios.value == "") {
        return alert(`Estimado(a) "Wild Animal Lover", usted de ingresar todos los datos del formulario`)
    }

    let previewImage = document.querySelector("#preview").getAttribute("src")

    // Instanciando y agregando datos a la función de impresión de Card y Modal
    switch (selectedAnimal) {
        case "Leon":
            let leonData = new Leon(selectedAnimal, selectedEdad, previewImage, comentarios.value, "Rugido.mp3")
            printModal(0, selectedEdad, comentarios.value, leonData.sonido)
            break;
        case "Lobo":
            let loboData = new Lobo(selectedAnimal, selectedEdad, previewImage, comentarios.value, "Aullido.mp3")
            printModal(1, selectedEdad, comentarios.value, loboData.sonido)
            break;
        case "Oso":
            let osoData = new Oso(selectedAnimal, selectedEdad, previewImage, comentarios.value, "Gruñido.mp3")
            printModal(2, selectedEdad, comentarios.value, osoData.sonido)
            break;
        case "Serpiente":
            let serpienteData = new Serpiente(selectedAnimal, selectedEdad, previewImage, comentarios.value, "Siseo.mp3")
            printModal(3, selectedEdad, comentarios.value, serpienteData.sonido)
            break;
        case "Aguila":
            let aguilaData = new Aguila(selectedAnimal, selectedEdad, previewImage, comentarios.value, "Chillido.mp3")
            printModal(4, selectedEdad, comentarios.value, aguilaData.sonido)
            break;
        default:
            break;
    }

    //IIFE para limpieza de los parametros del formulario
    (function resetForm() {
        document.getElementById("comentarios").value = ""
        imagenAnimal.innerHTML = ``
        select.getElementsByTagName('option')[0].selected = 'selected'
        edad.getElementsByTagName('option')[0].selected = 'selected'
    })()
}

//Función asíncrona para:
//acceder al canal animales.json haciendo uso de Async/Await y método fetch y obtener los recursos de las especies animales
//impresión HTML de la tarjeta del animal seleccionado
//impresión del modal
//reproducción del audio del animal seleccionado, por medio de evento click
async function printModal(index, edad, comentarios, sonido) {

    let animalesData = await fetch('/animales.json')
    let animalesFromJson = await animalesData.json()
    let animalArray = animalesFromJson.animales


    //Formato de la tarjeta y el modal para enviar al DOM
    let animalCard = `<div class="card mt-1 mx-1 text-light bg-secondary">
    <img data-toggle="modal" data-target="#exampleModal${edad}${comentarios}${animalArray[index].name}" id="imagenAnimal" src="./assets/imgs/${animalArray[index].imagen}" class="card-img-top" alt="${animalArray[index].name}" style="width: 18rem; height: 24rem; object-fit: cover">
    <div class="card-body">
      <input class="audioAnimal${animalArray[index].name}" type="image" src="./assets/imgs/audio.svg" width="16px" height="16px" alt="icono">
      <audio type="audio/mp3" id="${animalArray[index].name}" src="./assets/sounds/${sonido}"></audio>
      <div class="modal fade" id="exampleModal${edad}${comentarios}${animalArray[index].name}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog w-25">
          <div class="modal-content text-light bg-dark">
            <div class="modal-header text-center">
              <img src="./assets/imgs/${animalArray[index].imagen}" class="img-fluid rounded mx-auto d-block" alt="${animalArray[index].name}">
            </div>
            <div class="modal-body">
              <div class="h5 font-weight-bold">${edad}<br>
              </div>
              <hr>
              <div class="font-weight-bold">Comentarios:</div>
              <div class="modal-body">${comentarios}</div>
            </div>
          </div>
        </div>`

    //Tarjeta y Modal a ser insertados en el DOM                            
    let cardModal = document.createElement("div")
    cardModal.innerHTML = animalCard
    animales.appendChild(cardModal)

    //Captura el botón de audio de los animales
    let audioButton = document.querySelector(`.audioAnimal${animalArray[index].name}`)

    //Reproducción del sonido de los animales ante evento de Click
    function playAudio(event) {
        event.preventDefault()

        switch (animalArray[index].name) {
            case "Leon":
                document.getElementById("Leon").play()
                break;
            case "Lobo":
                document.getElementById("Lobo").play()
                break;
            case "Oso":
                document.getElementById("Oso").play()
                break;
            case "Serpiente":
                document.getElementById("Serpiente").play()
                break;
            case "Aguila":
                document.getElementById("Aguila").play()
                break;
        }
    }
    audioButton.addEventListener("click", playAudio)
}

//Eventos del formulario de animales (change: cambio de datos de animal; click: evento sobre botón de registro)
select.addEventListener("change", animalData)
registro.addEventListener("click", addData)

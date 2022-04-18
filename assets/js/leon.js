//Clase Animal iportada desde animal.js como clase padre
import Animal from "./animal.js";

//Clase León
class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    rugir() {
        return "./assets\sounds\Rugido.mp3"
    }
}

export default Leon
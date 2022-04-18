//Clase Animal iportada desde animal.js como clase padre
import Animal from "./animal.js";

//Clase Serpiente
class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    sisear() {
        return "./assets\sounds\Siseo.mp3"
    }
}

export default Serpiente 
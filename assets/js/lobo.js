//Clase Animal iportada desde animal.js como clase padre
import Animal from "./animal.js";

//Clase Lobo
class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar() {
        return "./assets\sounds\Aullido.mp3"
    }
}

export default Lobo
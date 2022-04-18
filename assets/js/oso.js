//Clase Animal iportada desde animal.js como clase padre
import Animal from "./animal.js";

//Clase Oso
class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    gruñir() {
        return "./assets\sounds\Gruñido.mp3"
    }
}


export default Oso
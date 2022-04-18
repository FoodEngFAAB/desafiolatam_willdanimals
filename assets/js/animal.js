class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre
        this._edad = edad
        this._img = img
        this._comentarios = comentarios
        this._sonido = sonido
    }

    //Método getter
    get nombre() {
        return this._nombre
    }
    get edad() {
        return this._edad
    }
    get img() {
        return this._img
    }
    get sonido() {
        return this._sonido
    }

    //Método setter
    set comentarios(newcomentario) {
        return this._comentarios = newcomentario
    }

    playerPlay() {
        const player = document.getElementById("player")
        player.setAttribute("src", `./assets/sounds/${this._sonido}`)
        player.load()
        player.play()
    }
}

//Exportar desde la Clase Animal (Padre)
export default Animal

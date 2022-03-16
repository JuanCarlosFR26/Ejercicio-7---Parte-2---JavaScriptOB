
class Coche {
    #peso;
    #potencia;
    #marca;
    
    setPeso(peso) {
        this.#peso = peso;
    }

    setPotencia(potencia) {
        this.#potencia = potencia;
    }

    setMarca(marca) {
        this.#marca = marca;
    }

    getPeso() {
        return this.#peso;
    }

    getPotencia() {
        return this.#potencia
    }

    getMarca() {
        return this.#marca;
    }
}


const ford = new Coche();
ford.setMarca("Ford");
console.log(ford.getMarca());
class Nodo{
    constructor(valor){
        this.valor = valor;
        this.nodoAnterior = null;
    }
}

class PilaNodo{
    constructor(){
        this.tope = null;
    }

    // Método push()
    agregar(valor){
        let nuevoNodo = new Nodo(valor);
        nuevoNodo.nodoAnterior = this.tope;
        this.tope = nuevoNodo;
    }

    // Método peek()
    mostrarTope(){
        if(this.tope === null){
            return null;
        }
        return this.tope.valor;
    }

    // Método pop()
    eliminar(){
        if(this.tope === null){
            return null;
        }

        let valorTope = this.tope.valor;
        this.tope = this.tope.nodoAnterior;
        return valorTope;
    }

}

let pilaNodo1 = new PilaNodo();

pilaNodo1.agregar(1);
pilaNodo1.agregar(2);
pilaNodo1.agregar(3);
pilaNodo1.agregar(4);
pilaNodo1.agregar("cinco");

console.log(pilaNodo1.mostrarTope());
pilaNodo1.eliminar();

console.log(pilaNodo1.mostrarTope());
pilaNodo1.eliminar();

console.log(pilaNodo1.mostrarTope());
pilaNodo1.eliminar();

console.log(pilaNodo1.mostrarTope());
pilaNodo1.eliminar();

console.log(pilaNodo1.mostrarTope());
pilaNodo1.eliminar();

if(pilaNodo1.mostrarTope() === null){
    console.log("Pila vacía");
}else{
    console.log(pilaNodo1.mostrarTope());
}

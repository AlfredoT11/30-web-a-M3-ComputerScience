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

//Tabla Hash

class TablaHashResiduo{

    constructor(n){
        this.n = n;
        this.tabla = new Array(n);
    }

    // Regresa el índice donde se debe almacenar el valor de entrada.
    // En este caso utilizamos la función módulo (%)
    hash(valor){
        return valor % this.n;
    }

    insertar(valor){
        let indice = this.hash(valor);

        if(this.tabla[indice] === undefined){
            this.tabla[indice] = [];
        }

        this.tabla[indice].push(valor);
    }

    buscar(valor){
        let indice = this.hash(valor);

        if(this.tabla[indice] === undefined){
            return false;
        }

        for(let i = 0; i < this.tabla[indice].length; i++){
            if(this.tabla[indice][i] === valor){
                return true;
            }
        }

        return false;
    }

    mostrarTabla(){
        for(let i = 0; i < this.n; i++){
            console.log(`${i} : ${this.tabla[i]}`);
        }
    }

}

let tablaHash = new TablaHashResiduo(13);

tablaHash.insertar(7);
tablaHash.insertar(32);
tablaHash.insertar(14);
tablaHash.insertar(1000000);

for(let i = 0; i < 100; i++){
    tablaHash.insertar(Math.floor(Math.random() * 1000));
}

tablaHash.mostrarTabla();

let valorABuscar = 1000000;
if(tablaHash.buscar(valorABuscar)){
    console.log(`El valor ${valorABuscar} SÍ está en la tabla`);
}else{
    console.log(`El valor ${valorABuscar} NO está en la tabla`);
}

valorABuscar = 42;
if(tablaHash.buscar(valorABuscar)){
    console.log(`El valor ${valorABuscar} SÍ está en la tabla`);
}else{
    console.log(`El valor ${valorABuscar} NO está en la tabla`);
}

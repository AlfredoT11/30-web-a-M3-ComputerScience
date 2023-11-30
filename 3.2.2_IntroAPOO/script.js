class Persona{

    constructor(nombreNuevo='Pedrito', edad, genero, nacionalidad, peso=85){
        this.nombre = nombreNuevo;
        this.edad = edad;
        this.genero = genero;
        this.nacionalidad = nacionalidad;
        this.peso = peso;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }

    comer(aumentoPeso){
        console.log(`Peso antes de comer: ${this.peso}`);
        this.peso += aumentoPeso;
        console.log(`Peso después de comer: ${this.peso}`);
    }

}

// Creando un objeto de tipo Persona.
// Si quieres trabajar con valores por defecto, podemos usar undefined como valor.
let persona1 = new Persona(undefined, 29, 'Masculino', 'Mexicana');

// Cómo acceder a un método.
persona1.saludar();

persona1.comer(10);

// Cómo acceder a los atributos.
console.log(`El peso de ${persona1.nombre} es de ${persona1.peso} kg`);

// Cuando asignados un objeto a una variable, no se crea una copia del objeto,
// si no que se crea una referencia a ese objeto.
let referenciaPersona1 = persona1;

console.log(`Persona 1: ${persona1.nombre}`);
console.log(`Referencia de persona 1: ${referenciaPersona1.nombre}`);

persona1.nombre = 'Edwin';

console.log(`Persona 1: ${persona1.nombre}`);
console.log(`Referencia de persona 1: ${referenciaPersona1.nombre}`);

/*
Ejercicio:
Crear una clase llamada  Contacto con los siguientes datos
Nombre 
Apellidos
Telefono

Después crear una clase que sea ListaContactos la cual tendrá dos métodos
Agregar un contacto
Buscar un contacto por nombre

Prueba que tus clases funcionen correctamente.
*/

class Contacto{
    constructor(nombre, apellido, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
}

class ListaContacto{
    constructor(){
        this.lista = [];
    }

    agregarContacto(nuevoContacto){
        this.lista.push(nuevoContacto);
    }

    buscarContacto(nombreABuscar){
        for(let i = 0; i < this.lista.length; i++){
            if(this.lista[i].nombre == nombreABuscar){
                return this.lista[i];
            }
        }
        return null;
    }
}

let contacto1 = new Contacto('Alfredo', 'Díaz', 5533526589);
let contacto2 = new Contacto('Malinali', 'Becerril', 5501234567);

let listaContactos = new ListaContacto();

listaContactos.agregarContacto(contacto1);
listaContactos.agregarContacto(contacto2);

console.log(listaContactos);

let mensaje = (listaContactos.buscarContacto('Alfredo') !== null) ? 'El contacto SÍ existe' : 'El contacto NO existe';
console.log(mensaje);

mensaje = (listaContactos.buscarContacto('Iván') !== null) ? 'El contacto sí existe' : 'El contacto NO existe';
console.log(mensaje);

/*if(listaContactos.buscarContacto('Alfredo') !== null){
    console.log('El contacto sí existe');
}*/

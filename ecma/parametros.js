/* function greeting(nombre) {
    console.log('Hola ' + nombre)
}

let user = {
    // username: 'Yaxche',
    password: 'contrasena',
}

greeting(user.username)
greeting('Alberto')
greeting() */


function greeting(nombre) {
    /* if (!nombre) {
        nombre = 'usuario';
    } */
    // nombre = nombre ? nombre : 'usuario';
    // nombre = nombre || 'usuario';
    console.log('Hola ' + nombre)
}

greeting('Alberto')
greeting()

function greeting2(nombre = 'usuario') {
    console.log(`Hola ${nombre}`);
}

greeting2('Alberto')
greeting2()

//operador ternario:
// ... ? ... : ...
// Establece un mensaje diciendo si la persona toma agua o vino dependiendo de si es mayor de edad o no

// Tienes x años y por tanto te vamos a servir 
// vino/awita

let edad = 20;
/* let bebida = '';

if (edad >= 18) {
    bebida = 'vino';
} else {
    bebida = 'awita';
} */

let bebida = edad >= 18 ? 'vino' : 'awita';
console.log(`Tienes ${edad} años y por tanto te vamos a servir ${bebida}`)

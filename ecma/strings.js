let text = 'Hola'
console.log(text.repeat(2))

/* 
Monica      |11223344
Rachel      |22334455
Joey        |33445566 */

const SPACES = 12;
const space = ' ';
let names = ['Monica', 'Rachel', 'Joey'];
let phones = [11223344, 22334455, 33445566];

for (let i = 0; i < names.length; i++) {
    let dif = SPACES - names[i].length;
    console.log(
        names[i] +
        space.repeat(dif) +
        '|' +
        phones[i])
}

for (let i = 0; i < names.length; i++) {
    console.log(
        names[i].padEnd(SPACES, space) +
        '|' +
        phones[i])
}

const firstName = 'Yaxche';
let phone = '11-22-33-44-55';
console.log('Mi nombre es ' + firstName +
    '\n y mi número telefónico es ' + phone);

console.log(`Mi nombre es ${firstName} 
y mi número telefónico es ${phone}`);

let innerHTML = `<h1>Hola!</h1>
    <p>Este es un páarafo</p>`;
console.log(innerHTML);

let numero1 = 612735;
console.log(numero1);



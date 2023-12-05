let arr = [1, 2, 3, 4, 5, 6, 7];

// O(7)
/* for (let i = 0; i < arr.length; i++) {
    console.log(i);
} */


//O(1)
for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
        console.log(i);
        break;
    }
}

let persona1 = {
    firsName: 'Yaxche',
}

let persona2 = persona1;

console.log(`persona1 tiene nombre: ${persona1.firsName}`);
console.log(`persona2 tiene nombre: ${persona2.firsName}`);

persona1.firsName = 'Tona';

console.log(`persona1 tiene nombre: ${persona1.firsName}`);
console.log(`persona2 tiene nombre: ${persona2.firsName}`);
// LINEAR SEARCH - BÚSQUEDA LINEAL
// Para arreglos desordenados


//                      paramatros
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        console.log('iteración! - linear');
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let array = [11, 3, 23, 7, 5];
let array2 = [15, 51, 9, 65, 6];

const target = 3;
// debugger
//                                  argumentos
const indexFound = linearSearch(array, 10);
console.log(indexFound);

// Big O notation O(n) - lineal

// Binary search - Búsqueda binaria
// Pra arrgelos ordenados!

function binarySearch(arr, target) {
    let indexIzq = 0;
    let indexDer = arr.length - 1;
    while (indexIzq <= indexDer) {
        console.log('iteración! - Binary');
        let indexMitad = Math.trunc((indexIzq + indexDer) / 2)
        if (target === arr[indexMitad]) {
            return indexMitad;
        }
        if (target < arr[indexMitad]) {
            indexDer = indexMitad - 1;
        } else if (target > arr[indexMitad]) {
            indexIzq = indexMitad + 1;
        }
    }
    return -1;
}

const sortedArray = [-5, -1, 8, 10, 54, 65, 89, 93, 105];
// debugger
const indexFound1 = binarySearch(sortedArray, 10);
console.log(indexFound1)

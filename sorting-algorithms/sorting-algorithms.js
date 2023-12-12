function bubbleSort(arr) {
    let intercambio = null;
    do {
        intercambio = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                intercambio = true;
            }
        }
    }
    while (intercambio === true);
}

// Truthy y falsy?
// Falsy: 0, '', undefined, NaN, false, null
// Boolean(intercambio)

let array = [-8, 64, 5, -4, 65, -5];
console.log(array)

// debugger
bubbleSort(array)
console.log(array)
// Big O notation: O(n2)
/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3,3,1]

console.log(myArray)







myArray2 = new Array(2,2)


console.log(myArray)
console.log(myArray2)

myArray = [1,3, 4]
myArray2 = new Array(1, 2, 3, 4)
myArray2.push(4);


console.log(myArray2)


console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = ["kdkdj"]

// push y pop

myArray.push("Brais")
console.log(myArray)
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift
//shift elimina el primer elemento ylo develve 

console.log(myArray.shift())
console.log(myArray)

//unshif agrega elemento a el inicio
myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice
//no modifica el array original, sino que crea una copia con una parte del array.

myArray = ["Brais", "Moure", "mouredev", 37, true]

const hdhd = myArray.slice()
console.log(hdhd);

let myNewArray;

console.log(myArray)
console.log(myNewArray)

// splice
//sirve para eliminar o reemplazar elementos de un array a partir de una posición específica.
//array.splice(inicio, cantidad, elemento1, elemento2, ...)
myArray.splice(3,3)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada", "Otra entrada", "Otra más")


console.log(myArray)

function myFunction(primero,segundo) {
    console.log(`este es mi primer valor ${primero}`);
    console.log(`este es mi segundo valor ${segundo}`);
}

myFunction("hola","mundo");
/*
Clase 29 - Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=11575
*/

// Loops o bucles

// for

console.log("Hola")
console.log("Hola")
console.log("Hola")
console.log("Hola")
console.log("Hola")

for (let i = 0; i <= 5; i++) {
    console.log('hola')
}






let lol = "lol";
console.log(lol[1])


for (let i = 0; i <= 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8,2,3,3]



for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0
while (i < 23 ){
    console.log("hola")
    i++
}



// while(true) {
// }

// do while

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

// for of

const myArray = [1, 2, 3, 4]

const mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

const myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

const myString = "¡Hola, JavaScript!"

for (let numero of myArray) {
    console.log(numero)
}

for (let value of mySet) {
    console.log(value)
}

for (let value of myMap) {
    console.log(value)
}

for (let value of myString) {
    console.log(value)
}

// break y continue

for (let i = 0; i < 10; i++) {
    if (i == 8) {
        break
    }
    console.log(`Hola ${i}`)
}



const myArray4 = [1, 2, 3, 4, 5, 6, 7, 8];

myArray4.forEach((numero,i) => {
    console.log(numero,i)
});
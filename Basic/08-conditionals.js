/*
Clase 23 - Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=7277
*/

// if, else if, else

// if (si)

let age = 37

if (age == 37) {
    console.log("La edad es 37")
}

// else (si no)

if (age == 37) {
    console.log("La edad es 37")
} else {
    console.log("La edad no es 37")
}

// else if (si no, si)

if (age == 37) {
    console.log("La edad es 37")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 37 ni es menor de edad")
}

// Operador ternario
age = 35

const message = age == 38 ? "La edad es 37" : "La edad no es 37"
console.log(message)

const message2 = age == 38? "la edad es 38" : age == 37?  "la edad es 37" : age == 36 ? "la edad es 36" : age == 35? "la edad es 35" : "la edad es menor a 35 o mayor a 38"

console.log(message2)


// switch

let day = 1
let dayName 

// console.log(typeof dayName)

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)
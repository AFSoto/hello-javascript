/*
Clase 33 - Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=14229
*/

// Objetos

// Sintaxis

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

let persona = [
    "Brais",
    37,
    "MoureDev"
]
console.log(persona.length)
console.log(person.name)
console.log(person.alias)

// Acceso a propiedades

// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["name"])

// Modificación de propiedades

person.name = "Brais Moure"
console.log(person.name)

console.log(typeof person.age)
person.age = "37"
console.log(person.age)
console.log(typeof person.age)

// Eliminación de propiedades

delete person.age

console.log(person)

// Nueva propiedad

person.email = "braismoure@mouredev.com"
person["age"] = 37

person.nun = 22;

console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    }
}
person2.walk()

// Anidación de objetos

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        },
        familia:{
            name_hermano: "titi",
            name_primo: "toto"
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()
console.log(person3.job.familia.name_hermano)

// Igualdad de objetos

let person4 = {
    name: "Brais Moure",
    alias: "MoureDev",
    email: "braismoure@mouredev.com",
    age: 37
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(typeof person);
console.log(typeof person4);
console.log(person === person4)

console.log(person.name == person4.name)

// Iteración




for (let key in person4) {
    console.log( person4[key])
}

// Funciones como objetos

function Person(name, age) { // Debería ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Brais", 37)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)
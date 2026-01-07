/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
const animal = {
    especie: "Perro",
    raza: "Labrador",
    edad: 5
}


// 2. Accede y muestra su valor
console.log(animal['especie'])
console.log(animal['raza'])
console.log(animal['edad'])

// 3. Agrega una nueva propiedad
animal.name = "lukas";
console.log(animal);

// 4. Elimina una de las 3 primeras propiedades
// delete animal.hermano.age;
console.log(animal);


// 5. Agrega una función e invócala

animal.caminar = () => `estoy caminando y soy ${animal.especie}`;

console.log(animal.caminar());

// 6. Itera las propiedades del objeto
for (let key in animal){
    console.log(key + ": " + animal[key]  );
}

// 7. Crea un objeto anidado

// 8. Accede y muestra el valor de las propiedades anidadas

// 9. Comprueba si los dos objetos creados son iguales

// 10. Comprueba si dos propiedades diferentes son iguales


let producto = Object.create(null);
producto.nombre = "Laptop";
producto.precio = 1500;
/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = ['leon','tigre','pantera','jaguar','pinguino']

// 2. Añade dos más. Uno al principio y otro al final

animales.push('caracol');
console.log(animales)

animales.unshift('gato');
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2,1);
console.log(animales);

// 4. Crea un set que almacene cinco libros

let libros = new Set();
libros.add('libro1');
libros.add('libro2');
libros.add('libro3');
libros.add('libro4');
libros.add('libro5');

console.log(libros);


// 5. Añade dos más. Uno de ellos repetido

libros.add('libro2');
console.log(libros);

// 6. Elimina uno concreto a tu elección

libros.delete('libro3');
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    [1,'enero'],
    [2,'febrero'],
    [3,'marzo'],
    [4,'abril'],
    [5,'mayo'],
    [6,'junio'],
    [7,'julio'],
    [8,'agosto'],
    [9,'septiembre'],
    [10,'octubre'],
    [11,'noviembre'],
    [12,'diciembre']
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

meses.has(5);
console.log(meses.get(5));


// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set(13,['julio','agosto','septiembre']);
console.log(meses);

console.log(meses.get(13));



// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array = [1,2,3,4,5,6,7,8,9,10];

let set = new Set(array);

console.log(set);

let map = new Map(Array.from(set,valor=>[valor,valor]));

console.log(map);
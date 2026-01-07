/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let texto = "hsky";
let texto2 = "kjsdhfl";

console.log(texto+ " " +texto2);


// 2. Muestra la longitud de una cadena de texto

console.log(texto.length);

// 3. Muestra el primer y último carácter de un string

console.log(texto[0]);
console.log(texto[texto.length-1]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

let cadenaTexto = `
we
wet
wt`

console.log(cadenaTexto);

// 6. Interpola el valor de una variable en un string

let nombre = "Brais";
console.log(`Hola ${nombre}`);


// 7. Reemplaza todos los espacios en blanco de un string por guiones

let textof = "esto es un contexto";

console.log(textof.replaceAll(" ","-"));


// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(textof.includes("contexto"));


// 9. Comprueba si dos strings son iguales

let string1 = "jj";
let string2 = "jj";

console.log(string1===string2);


// 10. Comprueba si dos strings tienen la misma longitud

console.log(string1.length===string2.length);


//
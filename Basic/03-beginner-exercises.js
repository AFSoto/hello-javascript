/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//este es uncomentario de una linea

// 2. Escribe un comentario en varias líneas
/*
este 
es un comentarios de varias 
lineas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos



let cadenaTexto = "hola mundo";
let numeroEntero = 42;
let nemeroDecimal = 3.4;
let boolean = true;
let undefined;
let nulo = null;
let simbolo = Symbol("miSimbolo");
let bigInt = 1234567890123456789012345678901234567890n;
let otroBigInt = BigInt("1234567890123456789012345678901234567890");


// 4. Imprime por consola el valor de todas las variables
console.log(cadenaTexto);
console.log(numeroEntero);
console.log(nemeroDecimal);
console.log(boolean);
console.log(undefined);
console.log(nulo);
console.log(simbolo);
console.log(bigInt);
console.log(otroBigInt);


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof cadenaTexto);
console.log(typeof numeroEntero);
console.log(typeof nemeroDecimal);
console.log(typeof boolean);
console.log(typeof undefined);
console.log(typeof nulo);
console.log(typeof simbolo);
console.log(typeof bigInt);
console.log(typeof otroBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

cadenaTexto = "hola de nuevo";
numeroEntero = 100;
nemeroDecimal = 5.6;
boolean = false;
undefined = "ahora tiene valor";
nulo = "ahora tiene valor";
simbolo = Symbol("otroSimbolo");
bigInt = 9876543210987654321098765432109876543210n;
otroBigInt = BigInt("9876543210987654321098765432109876543210");

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

cadenaTexto = 123;
numeroEntero = "cien";
nemeroDecimal = true;
boolean = 0;
undefined = null;
nulo = undefined;
simbolo = "no es un simbolo";
bigInt = 12345;
otroBigInt = "no es un bigInt";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const constCadenaTexto = "const hola mundo";
const constNumeroEntero = 42;
const constNemeroDecimal = 3.4;
const constBoolean = true;
const constUndefined = undefined;
const constNulo = null;
const constSimbolo = Symbol("miSimbolo");
const constBigInt = 1234567890123456789012345678901234567890n;
const constOtroBigInt = BigInt("1234567890123456789012345678901234567890");

// 9. A continuación, modifica los valores de las constantes

// constCadenaTexto = "nuevo valor";
// constNumeroEntero = 100;
// constNemeroDecimal = 5.6;
// constBoolean = false;
// constUndefined = "ahora tiene valor";
// constNulo = "ahora tiene valor";
// constSimbolo = Symbol("otroSimbolo");
// constBigInt = 9876543210987654321098765432109876543210n;
// constOtroBigInt = BigInt("9876543210987654321098765432109876543210");


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse


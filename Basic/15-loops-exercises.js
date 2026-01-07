/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0;

for (let numero = 0; numero <= 100; numero++) {
    suma += numero;
}

console.log(suma);


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let number = 1;

while (number >= 1 && number <=50) {
    if (number%2 == 0) {
        console.log(number)
    }
    number++;
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ['andres','yeison','lukas','juan']

for (const nombre of nombres) {
    console.log(nombre);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = "hola bebe";
let numero_letras = 0;

for (let i = 0; i < texto.length; i++) {

    let letra = texto[i];
    

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        numero_letras += 1;
    }
    
}

console.log(numero_letras);


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numbers = [1,2,3,4,5];
let producto = 1;

for (const numero of numbers) {
    producto *= numero;
}
console.log(producto);



// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let i = 1;
let tabla = 5;


while (i<=10) {
    console.log(`5 x ${i} = ${tabla*i}`);
    i++;
}


// 8. Usa un bucle para invertir una cadena de texto

let cadena_texto = "hola";
let invertida = "";

for (let i = 0; i < cadena_texto.length; i++) {
    invertida += cadena_texto[cadena_texto.length - 1 - i];
}
console.log(invertida);


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let numero_1 = 0;
let numero_2 = 1;
let siguiente;
let cantidad = 10;


for (let i = 0; i <= 10; i++) {
    console.log(numero_1);
    siguiente = numero_1 + numero_2;
    numero_1 = numero_2;
    numero_2 = siguiente;
    
}







// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numeros = [1,2,3,4,5,12];
let array = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        array.push(numeros[i]);
    }
    
}

console.log(array);

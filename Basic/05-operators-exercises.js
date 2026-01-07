/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let Suma = 5 + 10
let Resta = 15 - 20
let Multiplicacion = 5 * 10
let Division = 15 / 20
let Modulo = 5 % 10
let Exponente = 5 ** 10


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let numero = 5;

let asignacionResta = numero -= Resta;
let asignacionSuma = numero += Suma;
let asignacionMultiplicacion = numero *= Resta;
let asignacionDivision = numero /= Multiplicacion;
let asignacionModulo = numero %= Modulo;
let asignacionExponente = numero **= Exponente;



// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5>10);
console.log(4==4);
console.log(4==="4");
console.log(5=="5");
console.log(4!="4");

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(""===0);
console.log(0!=0);
console.log(""==1);
console.log(3!==3);
console.log(4!="4");


// 5. Utiliza el operador lógico and

console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);

// 6. Utiliza el operador lógico or

console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);


// 7. Combina ambos operadores lógicos

console.log(5 > 10 && 15 > 20 || 30 < 40);


// 8. Añade alguna negación

console.log(!(5 > 10 && 15 > 20));


// 9. Utiliza el operador ternario

let temperatura = 20

temperatura >=50 ? "hace mucho calor" : temperatura >=30? "hace calor" : "hace frio";


// 10. Combina operadores aritméticos, de comparáción y lógicas

let respuesta =  ((5+4) > 6) && (4>=8);



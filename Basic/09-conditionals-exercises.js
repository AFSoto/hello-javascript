/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "andres";

if (nombre) {
    console.log(nombre);
}



// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "andres";
let contraseña = "12345";

if (usuario === "andres" && contraseña === "12345") {
    console.log("acceso permitido");
}else{
    console.log("acceso denegado");
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let num = 2;

if (num>0) {
    console.log("el numero es positivo");
}else if(num<0){
    console.log("el numero es negotivo");
}else if(num==0){
    console.log("el numero es cero");
}else{
    console.log("error a el ingresar numero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan


let edad = 12;

if (edad>=18) {
    console.log("puedes botar");
}else{
    console.log(`te faltan ${18-edad} años para poder botar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let age = 18;
let estado = age >= 18? "adulto" : "menor";
console.log(estado)




// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"


let mes = 1;
let estacion

switch (mes) {
    case 1:
        estacion = "invierno";
        break;
    case 2:
        estacion = "primavera";
        break;
    case 3:
        estacion = "verano";
        break;
    case 4:
        estacion = "otoño";
        break;
    case 5:
        estacion = "invierno";
        break;
    case 6:
        estacion = "primavera";
        break;
    case 7:
        estacion = "verano";
        break;
    case 8:
        estacion = "otoño";
        break;
    case 9:
        estacion = "invierno";
        break;
    case 10:
        estacion = "primavera";
        break;
    case 11:
        estacion = "verano";
        break;
    case 12:
        estacion = "otoño";
        break;

    default:
        console.log("ha ocurrido un error, intenta de nuevo")
        break;
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch
let numeroDias;

switch (mes) {
    case 1:
        numeroDias = 31;
        break;
    case 2:
        numeroDias = 28;
        break;
    case 3:
        numeroDias = 31;
        break;
    case 4:
        numeroDias = 30;
        break;
    case 5:
        numeroDias = 31;
        break;
    case 6:
        numeroDias = 30;
        break;
    case 7:
        numeroDias = 31;
        break;
    case 8:
        numeroDias = 31;
        break;
    case 9:
        numeroDias = 30;
        break;
    case 10:
        numeroDias = 31;
        break;
    case 11:
        numeroDias = 30;
        break;
    case 12:
        numeroDias = 31;
        break;

    default:
        console.log("ha ocurrido un error, intenta de nuevo")
        break;
}





// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "español";
let mensaje;

switch (idioma) {
    case "español":
        mensaje = "hola";
        break;
    case "english":
        mensaje = "hello";
        break;
    case "francés":
        mensaje = "bonjour";
        break;

    default:
        console.log("ha ocurrido un error, intenta de nuevo")
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6



// 10. Usa un switch para hacer de nuevo el ejercicio 7
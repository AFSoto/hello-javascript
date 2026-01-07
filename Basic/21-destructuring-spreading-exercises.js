/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

const array = [1,2,3,4];

const [a,b] = array;
console.log(a,b);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

const [ , , , ,c=2] = array;
console.log(c)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

const objeto = {
    'name' : 'andres',
    'lastname':'soto'
}

const {name,lastname} = objeto;
console.log(name);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

const {name:name2,lastname:lastname2} = objeto;
console.log(name2);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

const pelicula = {
    'titulo' : 'los bebes',
    'fecha':'2015',
    'actores':{
        'edad':12,
        'lugar':'medellin'
    }
}

const {actores:{edad}} = pelicula;
console.log(edad)

// 6. Usa propagación para combinar dos arrays en uno nuevo
const array2 = [1,2,3];
const array3 = [4,5,6];
const array4 = [...array2,...array3];
console.log(array4);

// 7. Usa propagación para crear una copia de un array
const array5 = [...array3];
console.log(array5);


// 8. Usa propagación para combinar dos objetos en uno nuevo
const animal1 = {
    'edad':29,
    'name':'jeje'
}

const animal2 = {
    'lugar':23,
    'jsj':'efvrv'
}

const animal3 = {...animal1,...animal2};
console.log(animal3);

// 9. Usa propagación para crear una copia de un objeto

const ciudad = {
    'name' : 'bogota'
}

const ciudad2 = {...ciudad};
console.log(ciudad2);

// 10. Combina desestructuración y propagación

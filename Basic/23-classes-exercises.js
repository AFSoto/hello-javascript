/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función
// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático
class Persona {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    saludar(){
        return `hola ${this.name} tienes ${this.age} años`;
    }

    static hablar(){
        return "estoy hablando";
    }
    
}
console.log(Persona.hablar());



const persona1 = new Persona('andres',34);
console.log(persona1.name);
console.log(persona1.saludar());
console.log(persona1.age);
// 6. Crea una clase que haga uso de herencia

class Empledo extends Persona{

    constructor(fechaDeIngreso){
        super();
        this.fechaDeIngreso = fechaDeIngreso;
    }
    cobrar(){
        return "quiero mi sueldo";
    }
    saludar() {
        return "estoy saludando desde la claase empleado";
    }
}

const empleado = new Empledo('2020-01-01');
// console.log(empleado.saludar());
console.log(empleado.fechaDeIngreso);

// 7. Crea una clase que haga uso de getters y setters

class Animal {

    #edad3;

    constructor(nombre,edad){

        this.nombre = nombre;
        this.#edad3 = edad;
    }

    set edad3(edad){
        this.#edad3 = edad;
    }

    get edad3(){
        return this.#edad3;
    }

}

const animal1 = new Animal('princesa',23);

console.log(animal1.edad3);

animal1.edad3 = 24;

console.log(animal1.edad3);
// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 
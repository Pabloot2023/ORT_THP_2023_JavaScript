/*Enunciado
    Realizá un programa que permita ingresar una edad (entre 1 y 120 años)
    y un género ( F para mujeres, M para hombres).
    En caso de haber ingresado valores erróneos (edad fuera de rango o género inválido), 
    informar tal situación y terminar el programa. 
    Si los datos están bien ingresados el programa debe indicar,
    sabiendo que las mujeres se jubilan con 60 años o más y los hombres con 65 años o más, 
    si la persona está en edad de jubilarse.
*/

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntarEdad() {
    return new Promise((resolve) => {
        miTeclado.question("Ingrese la edad: ", (input) => {
            const edad = parseInt(input);
            if (!isNaN(edad)) {
                resolve(edad);
            } else {
                console.log("Los valores ingresados son inválidos.");
                preguntarEdad().then(resolve);
            }
        });
    });
}

function preguntarGenero() {
    return new Promise((resolve) => {
        miTeclado.question("Ingrese el género (F/M): ", (input) => {
            const genero = input.trim().toUpperCase();
            if (genero === 'F' || genero === 'M') {
                resolve(genero);
            } else {
                console.log("El género ingresado es inválido.");
                preguntarGenero().then(resolve);
            }
        });
    });
}

(async () => {
    const edad = await preguntarEdad();
    const genero = await preguntarGenero();

    if ((genero === 'F' && edad >= 60) || (genero === 'M' && edad >= 65)) {
        console.log("Está en edad de jubilarse.");
    } else {
        console.log("No está en edad de jubilarse.");
    }

    miTeclado.close();
})();

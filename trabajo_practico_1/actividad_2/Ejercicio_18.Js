/*Enunciado
    Realizá un programa que permita al usuario 
    ingresar dos números enteros.
    La computadora debe indicar si el mayor es divisible por el menor.
    (Un número entero a es divisible por un número entero b cuando el resto de la división entre a y b es 0)
*/

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1;
let num2;
let mayor;
let menor;

// Solicitar el primer número al usuario
miTeclado.question("Ingrese el primer número: ", (input1) => {
    num1 = parseInt(input1);

    // Solicitar el segundo número al usuario
    miTeclado.question("Ingrese el segundo número: ", (input2) => {
        num2 = parseInt(input2);

        mayor = Math.max(num1, num2);
        menor = Math.min(num1, num2);

        if (mayor % menor === 0) {
            console.log("\n El mayor (" + mayor + ") es divisible por el menor (" + menor + ")");
        } else {
            console.log("\n El mayor (" + mayor + ") no es divisible por el menor (" + menor + ")");
        }

        miTeclado.close();
    });
});
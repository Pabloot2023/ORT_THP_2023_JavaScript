/*Enunciado
 Realizá un programa que permita ingresar valores del mismo tipo para las variables num1 y num2.
 Una vez cargadas, mostrar ambas variables por pantalla, intercambiá sus valores 
 (que lo cargado en num1 quede en num2, y viceversa) y volvé a mostrarlas actualizadas. [EC]
 */

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num0 = 0;
let num1 = 0;
let num2 = 0;

console.log("Ingrese un primer numero:");
miTeclado.once('line', function (line) {
    num1 = parseInt(line);

    console.log("Ingrese un segundo numero:");
    miTeclado.once('line', function (line) {
        num2 = parseInt(line);
        
        console.log("------------------------------");
        console.log("El primer numero es " + num1 + " y el segundo numero es " + num2);

        num0 = num1;
        num1 = num2;
        num2 = num0;

        console.log("El primer numero actualizado es " + num1 + " y el segundo numero actualizado es " + num2);
        console.log("------------------------------");

        miTeclado.close();
    });
});
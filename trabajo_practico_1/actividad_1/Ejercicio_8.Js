/*Enunciado
	Realizá un programa que permita ingresar dos números naturales.
	Debes mostrar los resultados para las 4 operaciones matemáticas básicas con los números ingresados. [EC] 
*/

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = 0;
let num2 = 0;
let suma = 0;
let resta = 0;
let multiplicacion = 0;
let division = 0;

console.log("Ingrese el primer numero:");
miTeclado.once('line', function (line1) {
    num1 = parseInt(line1);

    console.log("Ingrese el segundo numero:");
    miTeclado.once('line', function (line2) {
        num2 = parseInt(line2);

        suma = num1 + num2;
        resta = num1 - num2;
        multiplicacion = num1 * num2;
        division = num1 / num2;

        console.log("Suma: " + suma);
        console.log("Resta: " + resta);
        console.log("Multiplicacion: " + multiplicacion);
        console.log("Division: " + division);

        miTeclado.close();
    });
});

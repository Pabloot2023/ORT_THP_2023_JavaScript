/*Enunciado
 	Realizó un programa que permita ingresar dos números enteros e 
 	indique cuál de ellos es el mayor. [EC] 
*/

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = 0;
let num2 = 0;

console.log("Ingrese un numero entero");
miTeclado.once('line', function (line1) {
    num1 = parseInt(line1);

    console.log("Ingrese otro numero entero");
    miTeclado.once('line', function (line2) {
        num2 = parseInt(line2);

        if (num1 === num2) {
            console.log("Ambos numeros son iguales");
        } else {
            if (num1 >= num2) {
                console.log("El primer valor es mayor al segundo");
            } else {
                console.log("El segundo valor es mayor");
            }
        }

        miTeclado.close();
    });
});
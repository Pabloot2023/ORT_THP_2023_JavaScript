/*Enunciado
	Realizá un programa que permita ingresar dos números enteros 
	y la operación a realizar (' + ', -', '”’, / ). 
	Debe mostrarse el resultado para la operación ingresada.
	Considerar que no se puede dividir por cero (en ese caso mostrar el texto ERROR ' ). [EC]
*/

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1;
let num2;
let resultado;
let operacion;

// Solicitar el primer número al usuario
miTeclado.question("Ingrese el primer número: ", (input1) => {
    num1 = parseInt(input1);

    // Solicitar el segundo número al usuario
    miTeclado.question("Ingrese el segundo número: ", (input2) => {
        num2 = parseInt(input2);

        // Solicitar la operación a realizar
        miTeclado.question("Ingrese la operación a realizar (+, -, *, /): ", (inputOperacion) => {
            operacion = inputOperacion.charAt(0);

            switch (operacion) {
                case '+':
                    resultado = num1 + num2;
                    console.log("\n" + "El resultado de la suma es: " + resultado);
                    break;
                case '-':
                    resultado = num1 - num2;
                    console.log("\n" + "El resultado de la resta es: " + resultado);
                    break;
                case '*':
                    resultado = num1 * num2;
                    console.log("\n" + "El resultado de la multiplicación es: " + resultado);
                    break;
                case '/':
                    if (num2 === 0) {
                        console.log("\n" + "ERROR: No se puede dividir por cero.");
                    } else {
                        resultado = num1 / num2;
                        console.log("\n" + "El resultado de la división es: " + resultado);
                    }
                    break;
                default:
                    console.log("ERROR: Operación inválida.");
                    break;
            }

            miTeclado.close();
        });
    });
});

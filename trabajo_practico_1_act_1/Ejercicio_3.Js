/*Enunciado
Realiza un programa que permita ingresar un numero entero. Debe mostrarse el numero ingresado:
Multiplicado por 5.
Dividido por 2.
*/

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numero = 0;

console.log("Ingrese un numero entero: ");
miTeclado.once('line', function (line) {
    numero = parseFloat(line.replace(',', '.'));

    console.log("------------------------------");
    console.log("El numero ingresado es: " + numero + "\n");
    console.log("El numero multiplicado por 5 es: " + (numero * 5));
    console.log("El numero dividido por 2 es: " + (numero / 2));
    console.log("------------------------------");
    
    miTeclado.close();
});
// Realizá un programa que permita ingresar un número entero. Debe mostrarse el número ingresado:
// Multiplicado por 5.
// Dividido por 2.

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numero = 0;

console.log("Ingrese un numero entero: ");
miTeclado.once('line', function (line) {
    numero = parseFloat(line.replace(',', '.'));

    console.log("\n El numero ingresado es: " + numero);

    console.log("\n El numero multiplicado por 5 es: " + (numero * 5));

    console.log("\n El numero dividido por 2 es: " + (numero / 2));


    miTeclado.close();
});

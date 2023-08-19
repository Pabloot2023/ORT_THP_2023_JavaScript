/*Enunciado
 Realizá un programa que permita ingresar el monto total de las ventas realizadas por un vendedor durante el mes,
 de quien se sabe que gana un sueldo fijo de 44000 pesos más el 16 por ciento del monto total vendido. 
 Con tales datos debes calcular y mostrar el importe a cobrar por el vendedor.
 */

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const CARTEL = "Bienvenido";
let ventasTot = 0;
const SUELDOFIJO = 44000;
const COMISION = 16;

console.log(CARTEL);
console.log("Ingrese el monto total de las ventas realizadas:");
miTeclado.once('line', function (line) {
    ventasTot = parseInt(line);

console.log("------------------------------");
    console.log("El monto a cobrar por el vendedor es de: $" + (SUELDOFIJO + (ventasTot * COMISION / 100)));
console.log("------------------------------");    

    miTeclado.close();
});
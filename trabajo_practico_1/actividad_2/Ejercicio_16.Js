/*Enunciado
    Realizá un programa que permita ingresar la cantidad de inscriptos a una conferencia
    y la cantidad de asientos disponibles en el auditorio. 
    Debes indicar si alcanzan los asientos, Si los asientos no alcanzaran 
    indicar cuántos faltan para que todos los inscriptos puedan sentarse.
*/

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inscriptos;
let asientosDisponibles;
let faltantes;

console.log("Ingrese la cantidad de inscriptos: ");
miTeclado.once('line', function (line) {
    inscriptos = parseInt(line);
    console.log("Ingrese la cantidad de asientos disponibles en el auditorio: ");
    miTeclado.once('line', function (line) {
        asientosDisponibles = parseInt(line);

        if (inscriptos <= asientosDisponibles) {
            console.log("Hay suficientes asientos para todos los inscriptos.");
        } else {
            faltantes = inscriptos - asientosDisponibles;
            console.log("\n" + "No hay suficientes asientos para todos los inscriptos.");
            console.log("Faltan " + faltantes + " asientos.");
        }

        // Cerrar la interfaz de entrada/salida
        miTeclado.close();
    });
});

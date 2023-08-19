/*Enunciado
 Realizá un programa que permita ingresar el ancho y el largo de un terreno en metros 
 y el valor del metro cuadrado de tierra. Debe mostrarse el valor total del terreno 
 y la cantidad de metros de alambre para cercarlo completamente a tres alturas distintas.

 TESTEAR!!
 */

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ancho;
let largo;
let valorM2;

console.log("Ingrese el ancho del terreno:");
miTeclado.once('line', function (line1) {
    ancho = parseInt(line1);

    console.log("Ingrese el largo del terreno:");
    miTeclado.once('line', function (line2) {
        largo = parseInt(line2);

        console.log("Ingrese el valor del metro cuadrado de tierra:");
        miTeclado.once('line', function (line3) {
            valorM2 = parseInt(line3);

            console.log("\nEl valor total del terreno es de: $" + (ancho * largo * valorM2));
            console.log("Se precisan " + (ancho * largo * 1) + " metros de alambre para cercar por completo en una altura");
            console.log("Se precisan " + (ancho * largo * 2) + " metros de alambre para cercar por completo en dos alturas");
            console.log("Se precisan " + (ancho * largo * 3) + " metros de alambre para cercar por completo en tres alturas");

            miTeclado.close();
        });
    });
});

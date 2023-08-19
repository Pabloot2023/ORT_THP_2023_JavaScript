/*Enunciado
 	Realizá un programa que permita ingresar dos números 
 	que representan las medidas en grados de dos ángulos interiores de cierto triángulo.
 	A partir de los valores de estos dos ángulos el programa debe mostrar el valor en grados del ángulo restante. 
 	Recorda que la suma de los ángulos interiores de todo triángulo es de 180º.
*/

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let angulo1 = 0;
let angulo2 = 0;

console.log("Ingrese el valor del primer angulo:");
miTeclado.once('line', function (line1) {
    angulo1 = parseInt(line1);

    console.log("Ingrese el valor del segundo angulo:");
    miTeclado.once('line', function (line2) {
        angulo2 = parseInt(line2);

        const angulo3 = 180 - angulo1 - angulo2;

        console.log("\n" + "El valor del tercer angulo es de " + angulo3 + " grados");

        miTeclado.close();
    });
});
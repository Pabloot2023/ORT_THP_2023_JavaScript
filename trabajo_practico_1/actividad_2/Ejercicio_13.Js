/*Enunciado
 	Realizó un programa para ingresar tres números enteros e indique 
 	cuál de ellos es el mayor y su valor. [EC]
*/

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
let mayor = 0;

console.log("Ingrese el primer numero: ");
miTeclado.once('line', function (line1) {
    numero1 = parseInt(line1);

    console.log("Ingrese el segundo numero: ");
    miTeclado.once('line', function (line2) {
        numero2 = parseInt(line2);

        console.log("Ingrese el tercer numero: ");
        miTeclado.once('line', function (line3) {
            numero3 = parseInt(line3);

            mayor = numero1;

            if (numero2 > mayor) {
                mayor = numero2;
            }

            if (numero3 > mayor) {
                mayor = numero3;
            }

			/*	    else if (numero3 > mayor) {
			        mayor = numero3;  
					}
			*/	    

            console.log("El numero mayor es: " + mayor);

            miTeclado.close();
        });
    });
});

/*Enunciado
 	Realizá un programa que permita ingresar un número entero e indique si se trata de un número par o impar. [EC]
*/

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num = 0;
let esPar = false;

console.log("Ingrese un numero entero, le dire si es par o impar");
miTeclado.once('line', function (line) {
    num = parseInt(line);

    if (num % 2 === 0) {
        console.log("\n" + num + " es un numero par");
    } else {
        console.log("\n" + num + " es un numero impar");
    }

    miTeclado.close();
});

/* otra forma de hacer lo mismo
if (num % 2 == 0) {
    esPar = true;
} else {
    esPar = false;
}

if (esPar == true) {
    console.log("\n" + num + " es un numero par");
} else {
    console.log("\n" + num + " es un numero impar");
}
*/

/* otra forma de hacer lo mismo.MAS OPTIMO	  
esPar = num % 2 == 0;

if (esPar == true) {
    console.log("\n" + num + " es un numero par");
} else {
    console.log("\n" + num + " es un numero impar");
}
*/

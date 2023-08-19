/*Enunciado
	Para entrar a la montaña rusa interno en las alturas se requiere
 	tener al menos 7 años Y medir más de 1,50 metros. 
 	Completá el siguiente cuadro a mano según los requisitos 
 	y luego escribí el programa que permita, ejecutándolo cada vez para cada niño 
 	y según las edades y estaturas ingresadas por el usuario, 
 	obtener los mismos resultados para los siguientes datos: [EC]
 	
 	Nombre
 	Edad
 	Altura
 	¿Entra al juego? (V/F)
 	
 	Juan   María   Luis  Ana
 	5      7       8     9
 	1.45   1.23    1.51  1.39
*/

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nombre;
let EDAD = 6;
let ALTURA = 1.5;
let podriaEntrar;
let Juan;
let Maria;
let Luis;
let Ana;

// Juan
nombre = "Juan";
console.log("Ingrese la edad de: " + nombre);
miTeclado.once('line', function (line) {
    EDAD = parseInt(line);
    console.log("Ingrese la altura de: " + nombre);
    miTeclado.once('line', function (line) {
        ALTURA = parseFloat(line);
        podriaEntrar = EDAD >= 7 && ALTURA > 1.5;
        Juan = (nombre + " tiene " + EDAD + " años, mide " + ALTURA + " metros y " + (podriaEntrar ? "puede" : "no puede") + " entrar al juego.");

        // Maria
        nombre = "Maria";
        console.log("\n" + "Ingrese la edad de Maria: ");
        miTeclado.once('line', function (line) {
            EDAD = parseInt(line);
            console.log("Ingrese la altura de Maria: ");
            miTeclado.once('line', function (line) {
                ALTURA = parseFloat(line);
                podriaEntrar = EDAD >= 7 && ALTURA > 1.5;
                Maria = (nombre + " tiene " + EDAD + " años, mide " + ALTURA + " metros y " + (podriaEntrar ? "puede" : "no puede") + " entrar al juego.");

                // Luis
                nombre = "Luis";
                console.log("\n" + "Ingrese la edad de Luis: ");
                miTeclado.once('line', function (line) {
                    EDAD = parseInt(line);
                    console.log("Ingrese la altura de Luis: ");
                    miTeclado.once('line', function (line) {
                        ALTURA = parseFloat(line);
                        podriaEntrar = EDAD >= 7 && ALTURA > 1.5;
                        Luis = (nombre + " tiene " + EDAD + " años, mide " + ALTURA + " metros y " + (podriaEntrar ? "puede" : "no puede") + " entrar al juego.");

                        // Ana
                        nombre = "Ana";
                        console.log("\n" + "Ingrese la edad de Ana: ");
                        miTeclado.once('line', function (line) {
                            EDAD = parseInt(line);
                            console.log("Ingrese la altura de Ana: ");
                            miTeclado.once('line', function (line) {
                                ALTURA = parseFloat(line);
                                podriaEntrar = EDAD >= 7 && ALTURA > 1.5;
                                Ana = (nombre + " tiene " + EDAD + " años, mide " + ALTURA + " metros y " + (podriaEntrar ? "puede" : "no puede") + " entrar al juego.");

                                // Mostrar resultados
                                console.log("\n" + Juan + "\n");
                                console.log(Maria + "\n");
                                console.log(Luis + "\n");
                                console.log(Ana + "\n");

                                // Cerrar la interfaz de entrada/salida
                                miTeclado.close();
                            });
                        });
                    });
                });
            });
        });
    });
});

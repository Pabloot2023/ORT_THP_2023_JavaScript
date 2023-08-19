/*Enunciado
 	Realizá un programa que permita resolver el siguiente problema: 
 	Tres personas aportan diferente capital a una sociedad y desean saber el valor total aportado
 	y qué porcentaje aportó cada una (indicando nombre y porcentaje). 
 	Solicitar la carga por teclado del nombre de cada socio, su capital aportado 
 	y a partir de esto calcular e informar lo requerido previamente.
*/

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const CARTEL_NOMBRE = "Estimado Socio, por favor ingrese su nombre";
const CARTEL_APORTE = "Indique su capital aportado";
let user1 = "x";
let user11 = 0;
let user2 = "y";
let user22 = 0;
let user3 = "z";
let user33 = 0;

let totalFondo = user11 + user22 + user33;
let p1 = 0;
let p2 = 0;
let p3 = 0;

console.log("\n" + CARTEL_NOMBRE);
miTeclado.question("", function (line1) {
    user1 = line1;
    console.log(CARTEL_APORTE);
    miTeclado.question("", function (line11) {
        user11 = parseInt(line11);

        console.log("\n" + CARTEL_NOMBRE);
        miTeclado.question("", function (line2) {
            user2 = line2;
            console.log(CARTEL_APORTE);
            miTeclado.question("", function (line22) {
                user22 = parseInt(line22);

                console.log("\n" + CARTEL_NOMBRE);
                miTeclado.question("", function (line3) {
                    user3 = line3;
                    console.log(CARTEL_APORTE);
                    miTeclado.question("", function (line33) {
                        user33 = parseInt(line33);

                        totalFondo = user11 + user22 + user33;
                        p1 = (user11 * 100) / totalFondo;
                        p2 = (user22 * 100) / totalFondo;
                        p3 = (user33 * 100) / totalFondo;

                        console.log("---------------------------------------------------------");
                        console.log("------------DETALLES CONTABLES DE LA SOCIEDAD------------");
                        console.log("---------------------------------------------------------" + "\n");

                        console.log(user1 + " aporto: " + user11 + " pesos representando el " + p1.toFixed(2) + "% del Total de la Sociedad" + "\n");
                        console.log(user2 + " aporto: " + user22 + " pesos representando el " + p2.toFixed(2) + "% del Total de la Sociedad" + "\n");
                        console.log(user3 + " aporto: " + user33 + " pesos representando el " + p3.toFixed(2) + "% del Total de la Sociedad" + "\n");

                        miTeclado.close();
                    });
                });
            });
        });
    });
});



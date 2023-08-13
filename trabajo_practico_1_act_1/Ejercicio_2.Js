// Realizá un programa que permita ingresar 3 notas pertenecientes a tres trimestres distintos
// para cierto alumno de nivel secundario.Debe calcularse y mostrarse la nota promedio. [EC]

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let notaparcial1 = 0;
let notaparcial2 = 0;
let notaparcial3 = 0;
let sumatoriaDeNotas = 0;
let promedio = 0;
let nombre = "Juan";

console.log("Ingrese el Nombre del Alumno: ");
miTeclado.once('line', function (line) {
    nombre = line;
    pedirPrimerNota();
});

function pedirPrimerNota() {
    console.log("\n Ingrese la primer nota: ");
    miTeclado.once('line', function (line) {
        notaparcial1 = parseFloat(line.replace('.', ','));
        pedirSegundaNota();
    });
}

function pedirSegundaNota() {
    console.log("\n Ingrese la segunda nota: ");
    miTeclado.once('line', function (line) {
        notaparcial2 = parseFloat(line.replace('.', ','));
        pedirTerceraNota();
    });
}

function pedirTerceraNota() {
    console.log("\n Ingrese la tercera nota: ");
    miTeclado.once('line', function (line) {
        notaparcial3 = parseFloat(line.replace('.', ','));
    });
}

sumatoriaDeNotas = notaparcial1 + notaparcial2 + notaparcial3;
promedio = sumatoriaDeNotas / 3;

console.log("\n" + "Hola " + nombre + "!!");
console.log("La nota del primer parcial es: " + notaparcial1.toFixed(2));
console.log("La nota del segundo parcial es: " + notaparcial2.toFixed(2));
console.log("La nota del tercer parcial es: " + notaparcial3.toFixed(2) + "\n");
console.log("El Promedio es: " + promedio.toFixed(2) + "\n");

if (promedio >= 4) {
    console.log("Felicitaciones has aprobado!!!" + "\n");
} else {
    console.log("Lamentablemente no has aprobado..." + "\n");
}

miTeclado.close();
}
}

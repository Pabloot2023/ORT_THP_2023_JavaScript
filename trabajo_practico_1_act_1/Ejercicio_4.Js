/*Enunciado
 Realizá un programa que permita ingresar el valor monetario de una hora de trabajo
  y la cantidad de horas trabajadas por día por un trabajador. Debes mostrar el valor del salario semanal, 
  sabiendo que trabaja todos los días hábiles y la mitad de las horas del día hábil los sábados. 
  (Todas las horas valen lo mismo.)
 */

  const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let valorHora = 2;
let cantHora = 3;
let pagoDia = valorHora * cantHora;
let pagoSem = pagoDia * 5;
let horaSab = Math.floor(cantHora / 2) * valorHora;

console.log("Ingrese el valor monetario de una hora de trabajo: ");
miTeclado.once('line', function (line) {
    valorHora = parseFloat(line);
    pedirCantidadHoras();
});

function pedirCantidadHoras() {
    console.log("\nIngrese la cantidad de horas trabajadas por día del trabajador: ");
    miTeclado.once('line', function (line) {
        cantHora = parseInt(line);
        calcularSalario();
    });
}

function calcularSalario() {
    pagoDia = valorHora * cantHora;
    pagoSem = pagoDia * 7;
    horaSab = Math.floor(cantHora / 2) * valorHora;

    console.log("\nEl valor del salario semanal es:");
    console.log("$ " + pagoSem);

    console.log("\nEl valor del salario semanal incluyendo media jornada del sábado es:");
    console.log("$ " + (pagoSem + horaSab));

    miTeclado.close();
}

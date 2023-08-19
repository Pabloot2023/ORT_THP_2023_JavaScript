/*Enunciado
    Existen dos reglas que identifican dos conjuntos de valores:
    El número es de un solo dígito
    El número es impar.
    A partir de estas reglas, realizá un programa que permita 
    ingresar un número entero. Debe asignar el valor que corresponda a las variables 
    booleanas esDeUnSoloDigito, eslmpar, estaEnAmbosGrupos y noEstaEnNingunGrupo
    el valor Verdadero o Falso, según corresponda,
    para indicar si el valor número ingresado pertenece o no a cada conjunto.
    AI terminar el programa debe informar el número cargado y las cuatros variables lógicas.
    Definí un lote de prueba de varios números y probá el algoritmo,
    escribiendo los resultados tal como se hizo en los ejercicios anteriores.
*/

const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num;
let esDeUnSoloDigito;
let esImpar;
let estaEnAmbosGrupos;
let noEstaEnNingunGrupo;

// Solicitar un número entero al usuario
miTeclado.question("Ingrese un número entero: ", (input) => {
    num = parseInt(input);

    esDeUnSoloDigito = (num >= 0 && num <= 9);
    esImpar = (num % 2 !== 0);
    estaEnAmbosGrupos = (esDeUnSoloDigito && esImpar);
    noEstaEnNingunGrupo = (!esDeUnSoloDigito && !esImpar);

    console.log("\n" + "Es de un solo dígito: " + (esDeUnSoloDigito ? "Verdadero" : "Falso"));
    console.log("Es impar: " + (esImpar ? "Verdadero" : "Falso"));
    console.log("Está en ambos grupos: " + (estaEnAmbosGrupos ? "Verdadero" : "Falso"));
    console.log("No está en ningun grupo: " + (noEstaEnNingunGrupo ? "Verdadero" : "Falso"));

    miTeclado.close();
});

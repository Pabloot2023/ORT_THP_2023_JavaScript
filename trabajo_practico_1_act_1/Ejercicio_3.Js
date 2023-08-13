// Realizá un programa que permita que el usuario ingrese su nombre. 
// El programa debe emitir una salida con un mensaje de bienvenida que incluya el nombre ingresado. [EC]

console.log("\n Bienvenidos a THP!!!!!!");
console.log("\n Aprenderemos a programar muchas cosas!!!!!");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\n Por favor, ingrese su nombre: ', function(nombre) {
    console.log(`\n ¡Bienvenido, ${nombre}! \n`);
  rl.close();
});

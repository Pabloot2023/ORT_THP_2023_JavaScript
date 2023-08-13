// Ejercicio_1.js

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

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
      valorHora = parseFloat(line.replace(',', '.'));
      pedirCantidadHoras();
  });
  
  function pedirCantidadHoras() {
      console.log("\nIngrese la cantidad de horas trabajadas por día del trabajador: ");
      miTeclado.once('line', function (line) {
          cantHora = parseInt(line);
          calcularSalario();
      });
  }
  
  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      // ver comentario al pie sobre funcionamiento de linea 36
  }
  
  function calcularSalario() {
      pagoDia = valorHora * cantHora;
      pagoSem = pagoDia * 7;
      horaSab = Math.floor(cantHora / 2) * valorHora;
  
      console.log("------------------------------");
      console.log("El valor del salario semanal es:");
      console.log("$ " + numberWithCommas(pagoSem));
  
      console.log("-------");
  
      console.log("El valor del salario semanal incluyendo media jornada del sábado es:");
      console.log("$ " + numberWithCommas(pagoSem + horaSab));
      console.log("------------------------------");
      
      miTeclado.close();
  }

  /*Explicacion de   linea 36     ---- return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");  -----

   ----> x.toString(): Esta parte convierte el número x a su representación en formato de cadena de texto.

   ----> .replace(): Esta es una función que trabaja en cadenas de texto y busca un patrón especificado 
            y lo reemplaza por otro valor. En este caso, se utiliza una expresión regular como patrón.

   ---->  /\B(?=(\d{3})+(?!\d))/g: Esta es la expresión regular que busca un punto en la cadena 
            donde se debe insertar el separador de miles. Aquí se descompone la expresión en partes:

   ----> \B: Esto coincide con una posición que no está en el límite de una palabra.

   ----> (?=(\d{3})+(?!\d)): Esto se llama una "lookahead assertion" y se utiliza para buscar 
            una posición en la cadena donde después de ella haya un múltiplo de 3 dígitos. Esto asegura que estamos en un punto donde se debe insertar un separador de miles.

   ----> (\d{3})+: Esto captura grupos de 3 dígitos consecutivos.

   ----> (?!\d): Esto es una "negative lookahead assertion" y asegura que no haya otro dígito 
            después del grupo de 3 dígitos.

   ----> g: Esto es una bandera que se utiliza con la función replace para que busque y 
            reemplace todas las coincidencias en toda la cadena.

   ----> ".": Esto es lo que se usará como reemplazo en el lugar de la coincidencia
             es decir, se insertará un punto en ese lugar.

  */
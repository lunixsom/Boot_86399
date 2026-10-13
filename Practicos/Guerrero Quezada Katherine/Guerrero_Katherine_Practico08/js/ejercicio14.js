/*
  Ejercicio 20: Calculadora con operador
  ========================================
  Pedir al usuario que ingrese 2 números y un operador matemático, luego mostrar el resultado de la operación.
  Crear tres variables: `numero1`, `operador` y `numero2`.

  Realizar la operación matemática indicada por `operador` y mostrar el resultado.

  const numero1 = 10;
  const operador = "*";
  const numero2 = 5;

  Resultado esperado:
    10 * 5 = 50

  Operadores posibles: "+", "-", "*", "/"

  Si el operador no existe:
    Operador no reconocido.

  Si el operador es "/" y numero2 es 0:
    No se puede dividir por cero.

  Requisitos técnicos:
    - Usar switch / case para seleccionar la operación
    - Verificar la división por cero dentro del case "/"
    - Usar template literal para mostrar el resultado: "10 * 5 = 50"
*/

console.log("============ EJERCICIO 14: CALCULADORA CON OPERADOR ============");

let numero1 = Number(prompt("Ingresa el primer número:"));
let numero2 = Number(prompt("Ingresa el segundo número:"));
let operador = prompt("Ingresa el operador (+, -, *, /):");
let resultado;

switch (operador) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  case "/":
    if (numero2 === 0) {
      resultado = "No se puede dividir por cero.";
    } else {
      resultado = numero1 / numero2;
    }
    break;
  default:
    resultado = "Operador no reconocido.";
    break;
}

console.log(`${numero1} ${operador} ${numero2} = ${resultado}`);


/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/

console.log("============ EJERCICIO 7: PAGO EN CUOTAS ============")

let importeOriginal = Number(prompt("Ingresa el importe de tu compra:"));
let cantidadCuotas = Number(prompt("Ingresa la cantidad de cuotas:"));

let tasaInteres = 0.20;
let interesAplicado = importeOriginal * tasaInteres;

let importeTotalConInteres = importeOriginal + interesAplicado;

let importeCuota = importeTotalConInteres / cantidadCuotas;

console.log(`El importe original de la compra es: $${importeOriginal}`);
console.log(`El interés aplicado (20%): $${interesAplicado}`);
console.log(`El importe total con interés es: $${importeTotalConInteres}`);
console.log(`Cantidad de cuotas: ${cantidadCuotas}`);
console.log(`El importe de cada cuota es: $${importeCuota.toFixed(2)}`);
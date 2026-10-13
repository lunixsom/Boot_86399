/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/

let importeCompra = Number(prompt("Ingresa el importe de tu compra:"));
let cantidadCuotas = Number(prompt("Ingresa la cantidad de cuotas:"));
let porcentajeInteres = 20;

let interesAplicado = importeCompra * porcentajeInteres / 100;
let totalConInteres = importeCompra + interesAplicado;
let importeCuota = totalConInteres / cantidadCuotas;

console.log(`Importe total de la compra: $${importeCompra}`);
console.log(`Interés aplicado (${porcentajeInteres}%): $${interesAplicado}`);
console.log(`Total con interés: $${totalConInteres}`);
console.log(`Importe de cada cuota: $${importeCuota.toFixed(2)}`);

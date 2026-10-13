/*
  ============ EJERCICIO 7: PAGO EN CUOTAS ============
  Pedir al usuario que ingrese el importe de su compra.
  Pedir además la cantidad de cuotas en las que desea pagar.

  Calcular el importe de cada cuota teniendo en cuenta que el interés por realizar el pago en cuotas es del 20% sobre el importe total de la compra.

  Mostrar por consola el importe total de la compra, el interés aplicado, y el importe de cada cuota.
*/

let importeCompra = Number(prompt("Ingresá el importe de tu compra:"));
let cantidadCuotas = Number(prompt("¿En cuántas cuotas querés pagar?"));

let porcentajeInteres = 20;

let interesAplicado = (importeCompra * porcentajeInteres) / 100;
let importeTotal = importeCompra + interesAplicado;
let importePorCuota = importeTotal / cantidadCuotas;

console.log(`Importe de la compra: $${importeCompra}`);
console.log(`Interés aplicado (${porcentajeInteres}%): $${interesAplicado}`);
console.log(`Importe total con interés: $${importeTotal}`);
console.log(`Importe de cada cuota (${cantidadCuotas} cuotas): $${importePorCuota.toFixed(2)}`);

/*
  ============ EJERCICIO 10: PRESUPUESTO MENSUAL PERSONAL ============

  Pedir al usuario que ingrese:

  - Su ingreso mensual
  - Gasto en alquiler
  - Gasto en comida
  - Gasto en transporte
  - Gasto en servicios
  - Gasto en entretenimiento

  Calcular:

  - El total de gastos mensuales
  - El dinero restante al finalizar el mes
  - El porcentaje del ingreso que fue utilizado en gastos

  Antes de mostrar el resultado, usar confirm() con el siguiente mensaje:

  ¿Deseás ver el resumen de tu presupuesto mensual?

  Guardar la respuesta en una variable llamada `quiereVerResumen`.

  Mostrar por consola:

  Ingreso mensual: $500000
  Total de gastos: $350000
  Dinero restante: $150000
  Porcentaje gastado: 70%
  ¿El usuario quiso ver el resumen?: true

  Mostrar también un alert() con el resumen del presupuesto.

  Importante:
  En este ejercicio todavía no hace falta usar if/else.
  El valor de confirm() se guarda y se muestra como true o false.

  Extra:
  Redondear el porcentaje gastado a dos decimales.
*/

let ingresoMensual = Number(prompt("Ingresa tu ingreso mensual:"));
let gastoAlquiler = Number(prompt("Ingresa tu gasto en alquiler:"));
let gastoComida = Number(prompt("Ingresa tu gasto en comida:"));
let gastoTransporte = Number(prompt("Ingresa tu gasto en transporte:"));
let gastoServicios = Number(prompt("Ingresa tu gasto en servicios:"));
let gastoEntretenimiento = Number(prompt("Ingresa tu gasto en entretenimiento:"));

let totalGastos = gastoAlquiler + gastoComida + gastoTransporte + gastoServicios + gastoEntretenimiento;
let dineroRestante = ingresoMensual - totalGastos;
let porcentajeGastado = totalGastos / ingresoMensual * 100;
let quiereVerResumen = confirm("¿Deseás ver el resumen de tu presupuesto mensual?");

console.log(`Ingreso mensual: $${ingresoMensual}`);
console.log(`Total de gastos: $${totalGastos}`);
console.log(`Dinero restante: $${dineroRestante}`);
console.log(`Porcentaje gastado: ${porcentajeGastado}%`);
console.log(`¿El usuario quiso ver el resumen?: ${quiereVerResumen}`);
console.log(`Porcentaje gastado redondeado: ${porcentajeGastado.toFixed(2)}%`);

// La consigna pide mostrar el resumen sin usar if/else.
alert(`Ingreso mensual: $${ingresoMensual}
Total de gastos: $${totalGastos}
Dinero restante: $${dineroRestante}
Porcentaje gastado: ${porcentajeGastado.toFixed(2)}%`);

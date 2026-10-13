/*
  ============ EJERCICIO OPCIONAL: PRESUPUESTO PARA PINTAR UNA HABITACIÓN ============

  Pedir al usuario que ingrese:

  - El largo de la habitación
  - El ancho de la habitación
  - La altura de las paredes
  - El precio de un litro de pintura

  - Crear otra variable llamada `rendimientoPorLitro` y asignarle el valor de 6, que representa la cantidad de metros cuadrados que se pueden pintar con un litro de pintura.

  Calcular:

  - El perímetro de la habitación
  - La cantidad de metros cuadrados de pared
  - La cantidad de litros de pintura necesarios
  - El costo total de la pintura

  Fórmulas sugeridas:

  perímetro = 2 x (largo + ancho)
  metrosCuadradosPared = perímetro x altura
  litrosNecesarios = metrosCuadradosPared / rendimientoPorLitro
  costoTotal = litrosNecesarios x precioPorLitro

  Mostrar por consola:

  Perímetro de la habitación: 18 metros
  Metros cuadrados de pared: 45 m2
  Litros necesarios: 7.5
  Costo total de pintura: $37500

  Antes de mostrar el alert(), usar confirm():

  ¿Deseás ver el resumen del presupuesto?

  Guardar la respuesta en una variable llamada `quiereVerResumen`.

  Mostrar por consola el valor de esa variable.

  Importante:
  Todavía no hace falta usar if/else.
  El confirm() solamente se guarda como true o false.

  Extra:
  Redondear los litros necesarios y el costo total a dos decimales.
*/

let largo = Number(prompt("Ingresa el largo de la habitación en metros:"));
let ancho = Number(prompt("Ingresa el ancho de la habitación en metros:"));
let altura = Number(prompt("Ingresa la altura de las paredes en metros:"));
let precioPorLitro = Number(prompt("Ingresa el precio de un litro de pintura:"));
let rendimientoPorLitro = 6;

let perimetro = 2 * (largo + ancho);
let metrosCuadradosPared = perimetro * altura;
let litrosNecesarios = metrosCuadradosPared / rendimientoPorLitro;
let costoTotal = litrosNecesarios * precioPorLitro;
let quiereVerResumen = confirm("¿Deseás ver el resumen del presupuesto?");

console.log(`Perímetro de la habitación: ${perimetro} metros`);
console.log(`Metros cuadrados de pared: ${metrosCuadradosPared} m2`);
console.log(`Litros necesarios: ${litrosNecesarios}`);
console.log(`Costo total de pintura: $${costoTotal}`);
console.log(`¿El usuario quiso ver el resumen?: ${quiereVerResumen}`);
console.log(`Litros necesarios redondeados: ${litrosNecesarios.toFixed(2)}`);
console.log(`Costo total redondeado: $${costoTotal.toFixed(2)}`);

alert(`Perímetro de la habitación: ${perimetro} metros
Metros cuadrados de pared: ${metrosCuadradosPared} m2
Litros necesarios: ${litrosNecesarios.toFixed(2)}
Costo total de pintura: $${costoTotal.toFixed(2)}`);

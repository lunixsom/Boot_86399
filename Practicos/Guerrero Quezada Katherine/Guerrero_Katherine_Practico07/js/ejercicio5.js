/*
========= Ejercicio 5: Precio final con IVA, ganancia y descuento =========

Crear una variable llamada `precioProducto`, otra variable llamada `ganancia` y una variable descuento con los valores que se detallan a continuación:

A. Calcular el precio final sumando un IVA del 21% al precio original, sumarle la ganancia del 40%, y mostrar el resultado por consola. 
B. Luego, calcular el precio final con un descuento del 10% y mostrar el resultado por consola.

Mostrar por consola:

El precio original es: $1000
El precio con IVA es: $1210
El precio final es: $1694
El precio final con descuento es: $1524.6

Calcular:
- El monto descontado
- El precio final

Mostrar por consola:

El descuento es de: $169.4
El precio final es: $1524.6

Extra: Redondear el precio final a dos decimales y mostrarlo por consola.

*/
console.log("========= Ejercicio 5: Precio final con IVA, ganancia y descuento =========")

const precioProducto = 1000;
const ganancia = 0.40;  // 40%
const descuento = 0.10; // 10%
const iva = 0.21;       // 21%

let precioConIva = precioProducto * (1 + iva);
let precioConGanancia = precioConIva * (1 + ganancia);

console.log(`El precio original es: $${precioProducto}`);
console.log(`El precio con IVA es: $${precioConIva}`);
console.log(`El precio final es: $${precioConGanancia}`);


let montoDescontado = precioConGanancia * descuento;
let precioFinalConDescuento = precioConGanancia - montoDescontado;

console.log(`El descuento es de: $${montoDescontado}`);
console.log(`El precio final es: $${precioFinalConDescuento}`);

console.log(`El precio final redondeado es: $${precioFinalConDescuento.toFixed(2)}`);
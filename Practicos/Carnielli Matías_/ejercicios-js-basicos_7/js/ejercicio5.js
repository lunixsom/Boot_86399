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

let precioProducto = 1000;
let iva = 21;        // porcentaje
let ganancia = 40;   // porcentaje
let descuento = 10;  // porcentaje

// A. Precio con IVA y ganancia
let precioConIva = precioProducto + (precioProducto * iva) / 100;
let precioFinal = precioConIva + (precioConIva * ganancia) / 100;

console.log(`El precio original es: $${precioProducto}`);
console.log(`El precio con IVA es: $${precioConIva}`);
console.log(`El precio final es: $${precioFinal}`);

// B. Precio con descuento
let montoDescontado = (precioFinal * descuento) / 100;
let precioFinalConDescuento = precioFinal - montoDescontado;

console.log(`El precio final con descuento es: $${precioFinalConDescuento}`);

console.log(`El descuento es de: $${montoDescontado}`);
console.log(`El precio final es: $${precioFinalConDescuento}`);

// Extra: redondeo a dos decimales
let precioFinalRedondeado = precioFinalConDescuento.toFixed(2);
console.log(`El precio final redondeado es: $${precioFinalRedondeado}`);

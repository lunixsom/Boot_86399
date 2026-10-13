/*
  ========= Ejercicio 6: Conversor de horas =========

Pedir al usuario que ingrese una cantidad de horas.

Calcular cuántos segundos equivalen a esa cantidad de horas.
Calcular cuántos minutos equivalen a esa cantidad de horas.

Ejemplo:

const horas = 3;

3 horas equivalen a 10800 segundos.
3 horas equivalen a 180 minutos.

*/

let horas = Number(prompt("Ingresá una cantidad de horas:"));

let segundosPorHora = 3600;
let minutosPorHora = 60;

let segundos = horas * segundosPorHora;
let minutos = horas * minutosPorHora;

console.log(`${horas} horas equivalen a ${segundos} segundos.`);
console.log(`${horas} horas equivalen a ${minutos} minutos.`);

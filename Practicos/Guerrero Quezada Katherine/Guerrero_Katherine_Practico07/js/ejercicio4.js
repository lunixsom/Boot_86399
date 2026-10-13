/* 
========= Ejercicio 4: Promedio de notas =========
  
Crear 5 variables:

let nota1 = 8;
let nota2 = 7;
let nota3 = 10;
let nota4 = 9;
let nota5 = 6;

Calcular el promedio de las cinco notas.

Mostrar por consola:
  El promedio es: X.XX

Extra: Buscar en internet cómo redondear el resultado a dos decimales y mostrar el resultado redondeado por consola.

*/

console.log("========= Ejercicio 4: Promedio de notas =========")

let nota1 = 8;
let nota2 = 7;
let nota3 = 10;
let nota4 = 9;
let nota5 = 6;

let suma = nota1 + nota2 + nota3 + nota4 + nota5;
let promedio = suma / 5;

console.log(`El promedio es: ${promedio.toFixed(2)}`);
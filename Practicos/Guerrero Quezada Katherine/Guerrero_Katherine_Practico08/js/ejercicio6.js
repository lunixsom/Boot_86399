/*
  Ejercicio 6: Acceso con rol
  ============================
  Crear dos variables: `rol` y `estaActivo`.

  Un usuario puede acceder al panel si:
    - Su rol es "admin", Y
    - Su cuenta está activa

  let rol = "admin";
  let estaActivo = true;

  Resultado esperado:
    Acceso permitido.

*/

console.log("============ EJERCICIO 6: ACCESO CON ROL ============");

let rol = "admin";
let estaActivo = true;

if (rol === "admin" && estaActivo) {
  console.log("Acceso permitido.");
  alert("Acceso permitido.");
} else {
  console.log("Acceso denegado.");
  alert("Acceso denegado.");
}

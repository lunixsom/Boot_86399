/* ========================================
   John Doe Portfolio — script.js
   Validación de formulario, colapso de navbar
   en móvil y botón "volver arriba".
======================================== */

document.addEventListener('DOMContentLoaded', function () {
  initFormValidation();
  initNavbarAutoCollapse();
  initBackToTop();
});

/* ----------------------------------------
   Validación del formulario de contacto
   (patrón oficial de Bootstrap 5)
---------------------------------------- */
function initFormValidation() {
  var form = document.getElementById('contactForm');
  if (!form) {
    return;
  }

  var successBox = document.getElementById('formSuccess');

  form.addEventListener(
    'submit',
    function (event) {
      event.preventDefault();
      event.stopPropagation();

      form.classList.add('was-validated');

      if (form.checkValidity()) {
        // No hay backend: simulamos el envío exitoso.
        if (successBox) {
          successBox.classList.remove('d-none');
        }

        setTimeout(function () {
          form.reset();
          form.classList.remove('was-validated');
          if (successBox) {
            successBox.classList.add('d-none');
          }
        }, 3000);
      }
    },
    false
  );
}

/* ----------------------------------------
   Cierra el navbar colapsado (mobile) al
   hacer clic en un link de navegación
---------------------------------------- */
function initNavbarAutoCollapse() {
  var navbarCollapse = document.getElementById('navbarMain');
  if (!navbarCollapse || typeof bootstrap === 'undefined') {
    return;
  }

  var navLinks = navbarCollapse.querySelectorAll('.nav-link, .btn-contact');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbarCollapse.classList.contains('show')) {
        var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });
}

/* ----------------------------------------
   Botón flotante "Volver arriba"
---------------------------------------- */
function initBackToTop() {
  var button = document.getElementById('backToTop');
  if (!button) {
    return;
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      button.classList.add('is-visible');
    } else {
      button.classList.remove('is-visible');
    }
  });

  button.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

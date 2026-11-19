(function () {
  'use strict';

  var cfg = window.X3_CONFIG || {};
  var number = String(cfg.whatsapp || '').replace(/\D/g, '');

  function waUrl(text) {
    return 'https://wa.me/' + number + '?text=' + encodeURIComponent(text);
  }

  // Enlaces de WhatsApp: toman el número de config.js
  document.querySelectorAll('.js-wa').forEach(function (a) {
    var msg = a.getAttribute('data-msg') || 'Hola XTres60, quiero información.';
    a.href = waUrl(msg);
    a.target = '_blank';
    a.rel = 'noopener';
  });
  document.querySelectorAll('.js-wa-label').forEach(function (el) {
    if (cfg.whatsappLabel) el.textContent = cfg.whatsappLabel;
  });

  // Menú en celular
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    var close = function () {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
    };
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  }

  // Filtro de casos de éxito
  var filters = document.querySelectorAll('.filter');
  var cases = document.querySelectorAll('.case');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');
      filters.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      cases.forEach(function (c) { c.hidden = !(f === 'todos' || c.getAttribute('data-kind') === f); });
    });
  });

  // Servicios del formulario (selección múltiple)
  var chips = document.querySelectorAll('.chip');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chip.setAttribute('aria-pressed', String(chip.getAttribute('aria-pressed') !== 'true'));
    });
  });

  // Formulario: valida y abre WhatsApp con el proyecto
  var form = document.getElementById('lead-form');
  if (form) {
    var fields = document.getElementById('form-fields');
    var success = document.getElementById('form-success');
    var error = document.getElementById('form-error');
    var retry = document.getElementById('wa-retry');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nombre = form.nombre.value.trim();
      var tel = form.whatsapp.value.replace(/\D/g, '');
      var okNombre = nombre.length >= 2;
      var okTel = tel.length >= 10;
      form.nombre.setAttribute('aria-invalid', String(!okNombre));
      form.whatsapp.setAttribute('aria-invalid', String(!okTel));
      if (!(okNombre && okTel)) {
        error.hidden = false;
        (okNombre ? form.whatsapp : form.nombre).focus();
        return;
      }
      error.hidden = true;

      var servicios = Array.prototype.filter.call(chips, function (c) {
        return c.getAttribute('aria-pressed') === 'true';
      }).map(function (c) { return c.textContent.trim(); });
      var empresa = form.empresa.value.trim();
      var mensaje = form.mensaje.value.trim();

      var text = 'Hola XTres60, quiero cotizar un proyecto.\n' +
        'Nombre: ' + nombre + '\n' +
        (empresa ? 'Marca: ' + empresa + '\n' : '') +
        'WhatsApp: ' + tel + '\n' +
        'Me interesa: ' + (servicios.length ? servicios.join(', ') : 'Por definir') +
        (mensaje ? '\nProyecto: ' + mensaje : '');
      var url = waUrl(text);
      if (retry) retry.href = url;

      fields.hidden = true;
      success.hidden = false;
      window.open(url, '_blank', 'noopener');
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

// Formulario de cotización de redes sociales (redes-sociales.html)
(function () {
  'use strict';
  var form = document.getElementById('redes-form');
  if (!form) return;
  var cfg = window.X3_CONFIG || {};
  var number = String(cfg.whatsapp || '').replace(/\D/g, '');
  var fields = document.getElementById('redes-fields');
  var success = document.getElementById('redes-success');
  var error = document.getElementById('redes-error');
  var retry = document.getElementById('redes-retry');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nombre = form.nombre.value.trim();
    var tel = form.whatsapp.value.replace(/\D/g, '');
    var okNombre = nombre.length >= 2;
    var okTel = tel.length >= 10;
    form.nombre.setAttribute('aria-invalid', String(!okNombre));
    form.whatsapp.setAttribute('aria-invalid', String(!okTel));
    if (!(okNombre && okTel)) {
      error.hidden = false;
      (okNombre ? form.whatsapp : form.nombre).focus();
      return;
    }
    error.hidden = true;
    var marca = form.marca.value.trim();
    var redes = form.redes.value.trim();
    var mensaje = form.mensaje.value.trim();
    var text = 'Hola XTres60, quiero cotizar la gestión de redes sociales.\n' +
      'Nombre: ' + nombre + '\n' +
      (marca ? 'Marca: ' + marca + '\n' : '') +
      'WhatsApp: ' + tel +
      (redes ? '\nRedes que uso: ' + redes : '') +
      (mensaje ? '\nObjetivo: ' + mensaje : '');
    var url = 'https://wa.me/' + number + '?text=' + encodeURIComponent(text);
    if (retry) retry.href = url;
    fields.hidden = true;
    success.hidden = false;
    window.open(url, '_blank', 'noopener');
  });
})();

// Formulario de cotización de desarrollo web (desarrollo-web.html)
(function () {
  'use strict';
  var form = document.getElementById('web-form');
  if (!form) return;
  var cfg = window.X3_CONFIG || {};
  var number = String(cfg.whatsapp || '').replace(/\D/g, '');
  var fields = document.getElementById('web-fields');
  var success = document.getElementById('web-success');
  var error = document.getElementById('web-error');
  var retry = document.getElementById('web-retry');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nombre = form.nombre.value.trim();
    var tel = form.whatsapp.value.replace(/\D/g, '');
    var okNombre = nombre.length >= 2;
    var okTel = tel.length >= 10;
    form.nombre.setAttribute('aria-invalid', String(!okNombre));
    form.whatsapp.setAttribute('aria-invalid', String(!okTel));
    if (!(okNombre && okTel)) {
      error.hidden = false;
      (okNombre ? form.whatsapp : form.nombre).focus();
      return;
    }
    error.hidden = true;
    var tipos = Array.prototype.filter.call(form.querySelectorAll('.chip'), function (c) {
      return c.getAttribute('aria-pressed') === 'true';
    }).map(function (c) { return c.textContent.trim(); });
    var marca = form.marca.value.trim();
    var sitio = form.sitio.value.trim();
    var mensaje = form.mensaje.value.trim();
    var text = 'Hola XTres60, quiero cotizar un proyecto de desarrollo web o software.\n' +
      'Nombre: ' + nombre + '\n' +
      (marca ? 'Empresa: ' + marca + '\n' : '') +
      'WhatsApp: ' + tel + '\n' +
      'Necesito: ' + (tipos.length ? tipos.join(', ') : 'Por definir') +
      (sitio ? '\nSitio actual: ' + sitio : '') +
      (mensaje ? '\nProyecto: ' + mensaje : '');
    var url = 'https://wa.me/' + number + '?text=' + encodeURIComponent(text);
    if (retry) retry.href = url;
    fields.hidden = true;
    success.hidden = false;
    window.open(url, '_blank', 'noopener');
  });
})();

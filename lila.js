/**
 * Lila CSS Framework JS Helper (Alias to Blue Bird CSS)
 * @param {string|object} component - Component name or options
 * @param {object} [options] - Component configuration options
 */
function lila(component, options) {
  if (typeof bluebird === 'function') {
    bluebird(component, options);
  }
}

function snackbar(options) {
  if (typeof bluebird === 'function') {
    bluebird('snackbar', options);
  }
}
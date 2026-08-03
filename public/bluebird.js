/**
 * Blue Bird CSS Framework JS Helper
 * @param {string|object} component - Component name or options
 * @param {object} [options] - Component configuration options
 */
function bluebird(component, options) {
  if (typeof component === 'object') {
    options = component;
    component = 'snackbar';
  }
  if (component === 'snackbar') {
    let snackbarEl = document.getElementById('snackbar');

    if (!snackbarEl) {
      snackbarEl = document.createElement('div');
      snackbarEl.id = 'snackbar';
      document.body.appendChild(snackbarEl);
    }

    snackbarEl.className = 'show';

    if (options && options.type) {
      snackbarEl.classList.add(options.type);
    } else {
      snackbarEl.classList.add('info');
    }

    snackbarEl.textContent = (options && options.message) || '';
    setTimeout(() => {
      snackbarEl.classList.add('show');
    }, 10);

    const duration = (options && options.duration) || 3000;
    if (snackbarEl.timeoutId) {
      clearTimeout(snackbarEl.timeoutId);
    }

    snackbarEl.timeoutId = setTimeout(function () {
      snackbarEl.className = '';
    }, duration);
  }
}

/**
 * Global alias for snackbar
 * @param {object} options - Snackbar configuration options
 */
function snackbar(options) {
  bluebird('snackbar', options);
}

/**
 * Backward compatibility alias
 */
var lila = bluebird;

document.addEventListener('click', function (e) {
  const btn = e.target.closest("button, a[role='button']");
  if (!btn || btn.classList.contains('fab')) return;

  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';

  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
});

(function () {
  /**
   * Initializes mobile drawer navigation
   */
  function initDrawer() {
    const mainEl = document.querySelector('main');
    const aside = mainEl ? mainEl.querySelector(':scope > aside') : null;
    if (!aside || document.querySelector('.bluebird-drawer, .lila-drawer')) return;

    const overlay = document.createElement('div');
    overlay.className = 'bluebird-drawer-overlay lila-drawer-overlay';
    document.body.appendChild(overlay);

    const drawer = document.createElement('div');
    drawer.className = 'bluebird-drawer lila-drawer';
    drawer.innerHTML = aside.innerHTML;
    document.body.appendChild(drawer);

    const toggle = document.createElement('button');
    toggle.className = 'bluebird-drawer-toggle lila-drawer-toggle';
    toggle.innerHTML = '☰';
    toggle.setAttribute('aria-label', 'Toggle navigation menu');

    const header = document.querySelector('header');
    if (header) {
      const nav = header.querySelector('nav');
      if (nav) {
        nav.insertBefore(toggle, nav.firstChild);
      } else {
        header.prepend(toggle);
      }
    } else {
      document.body.prepend(toggle);
    }

    function openDrawer() {
      drawer.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    overlay.addEventListener('click', closeDrawer);

    drawer.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        closeDrawer();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(initDrawer, 100);
    });
  } else {
    setTimeout(initDrawer, 100);
  }

  let debounceTimer;
  const observer = new MutationObserver(function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      const drawer = document.querySelector('.bluebird-drawer, .lila-drawer');
      const aside = document.querySelector('main > aside');
      if (drawer && aside) {
        drawer.innerHTML = aside.innerHTML;
      }
    }, 200);
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();

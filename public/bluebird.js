/**
 * Blue Bird CSS Framework JS Helper
 * @param {string|object} component - Component name ('snackbar', 'drawer', 'carousel') or options
 * @param {object} [options] - Component configuration options
 */
function bluebird(component, options) {
  if (typeof component === 'object') {
    options = component;
    component = 'snackbar';
  }

  // --- SNACKBAR COMPONENT ---
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

  // --- STANDALONE DRAWER COMPONENT ---
  if (component === 'drawer') {
    cleanupOrphanedBackdrops();

    const id = options && options.id;
    const action = (options && options.action) || 'toggle';
    if (!id) return;

    const drawerEl = document.getElementById(id);
    if (!drawerEl) return;

    let overlay = document.querySelector(`.drawer-backdrop[data-for="${id}"]`);
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'drawer-backdrop';
      overlay.setAttribute('data-for', id);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => {
        bluebird('drawer', { id, action: 'close' });
      });
    }

    const isOpen = drawerEl.classList.contains('open') || drawerEl.classList.contains('active');

    if (action === 'open' || (action === 'toggle' && !isOpen)) {
      drawerEl.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else if (action === 'close' || (action === 'toggle' && isOpen)) {
      drawerEl.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => {
        if (overlay && overlay.parentNode && !drawerEl.classList.contains('open')) {
          overlay.remove();
        }
      }, 300);
    }
  }

  // --- CAROUSEL COMPONENT ---
  if (component === 'carousel') {
    const selector = (options && options.selector) || '.carousel';
    const carousels = document.querySelectorAll(selector);
    carousels.forEach(carousel => initSingleCarousel(carousel, options));
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
 * Remove backdrops whose target drawer no longer exists in DOM
 */
function cleanupOrphanedBackdrops() {
  document.querySelectorAll('.drawer-backdrop[data-for]').forEach(backdrop => {
    const targetId = backdrop.getAttribute('data-for');
    if (!document.getElementById(targetId)) {
      backdrop.remove();
    }
  });
}

function initMobileDrawer() {
  const mainEl = document.querySelector('main');
  const aside = mainEl ? mainEl.querySelector(':scope > aside') : null;
  if (!aside) return;

  let overlay = document.querySelector('.bluebird-drawer-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'bluebird-drawer-overlay';
    document.body.appendChild(overlay);
  }

  let drawer = document.querySelector('.bluebird-drawer');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.className = 'bluebird-drawer';
    document.body.appendChild(drawer);
  }

  drawer.innerHTML = aside.innerHTML;

  let toggle = document.querySelector('.bluebird-drawer-toggle');
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.className = 'bluebird-drawer-toggle';
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
  }
}

// Global click listener for Material Ripples, Mobile Navigation Drawer, and Declarative Data Attributes
document.addEventListener('click', function (e) {
  // 1. Mobile Navigation Toggle Button Click
  const mobileToggle = e.target.closest('.bluebird-drawer-toggle');
  if (mobileToggle) {
    e.preventDefault();
    e.stopPropagation();
    initMobileDrawer();
    const drawer = document.querySelector('.bluebird-drawer');
    const overlay = document.querySelector('.bluebird-drawer-overlay');
    if (drawer && overlay) {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      } else {
        drawer.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }
    return;
  }

  // 2. Mobile Navigation Overlay Click
  if (e.target.closest('.bluebird-drawer-overlay')) {
    const drawer = document.querySelector('.bluebird-drawer');
    const overlay = document.querySelector('.bluebird-drawer-overlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
    return;
  }

  // 3. Mobile Navigation Drawer Link Click
  if (e.target.closest('.bluebird-drawer a')) {
    const drawer = document.querySelector('.bluebird-drawer');
    const overlay = document.querySelector('.bluebird-drawer-overlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Material Ripple Effect
  const btn = e.target.closest("button, a[role='button']");
  if (btn && !btn.classList.contains('fab') && !btn.classList.contains('carousel-nav') && !btn.classList.contains('bluebird-drawer-toggle')) {
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
  }

  // Declarative Standalone Drawer Triggers
  const drawerTrigger = e.target.closest('[data-drawer-target]');
  if (drawerTrigger) {
    const id = drawerTrigger.getAttribute('data-drawer-target');
    bluebird('drawer', { id, action: 'toggle' });
  }

  const drawerClose = e.target.closest('[data-drawer-close]');
  if (drawerClose) {
    const drawerEl = drawerClose.closest('.drawer');
    if (drawerEl && drawerEl.id) {
      bluebird('drawer', { id: drawerEl.id, action: 'close' });
    }
  }
});

/**
 * Single Carousel Initialization logic with Touch/Swipe, Drag & Arrow Controls
 */
function initSingleCarousel(carousel, opts = {}) {
  if (carousel._bb_initialized) return;
  carousel._bb_initialized = true;

  const track = carousel.querySelector('.carousel-track');
  if (!track) return;

  const items = Array.from(track.querySelectorAll('.carousel-item, .carousel-card'));
  if (items.length === 0) return;

  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  let indicatorsContainer = carousel.querySelector('.carousel-indicators');

  let currentSlideIndex = 0;

  if (indicatorsContainer && indicatorsContainer.children.length === 0) {
    items.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSlide(idx);
      });
      indicatorsContainer.appendChild(dot);
    });
  }

  function scrollToSlide(index) {
    if (index < 0) index = 0;
    if (index >= items.length) index = items.length - 1;
    currentSlideIndex = index;
    const targetItem = items[index];
    if (targetItem) {
      track.scrollTo({
        left: targetItem.offsetLeft - track.offsetLeft,
        behavior: 'smooth'
      });
      updateIndicators(index);
    }
  }

  function updateIndicators(activeIndex) {
    if (!indicatorsContainer) return;
    const dots = Array.from(indicatorsContainer.children);
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  }

  let scrollTimeout;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const trackLeft = track.scrollLeft;
      let closestIndex = 0;
      let minDistance = Infinity;

      items.forEach((item, idx) => {
        const distance = Math.abs(item.offsetLeft - track.offsetLeft - trackLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      currentSlideIndex = closestIndex;
      updateIndicators(closestIndex);
    }, 40);
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      scrollToSlide(currentSlideIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      scrollToSlide(currentSlideIndex + 1);
    });
  }

  // Mobile Touch Swipe & Desktop Mouse Drag
  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 35) {
      if (diffX > 0) {
        scrollToSlide(currentSlideIndex + 1);
      } else {
        scrollToSlide(currentSlideIndex - 1);
      }
    }
  });

  track.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
    track.style.cursor = 'grabbing';
  });

  track.addEventListener('mouseleave', () => {
    isDragging = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    track.style.cursor = 'grab';
    const endX = e.clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 35) {
      if (diffX > 0) {
        scrollToSlide(currentSlideIndex + 1);
      } else {
        scrollToSlide(currentSlideIndex - 1);
      }
    }
  });

  const isAutoplay = (opts && opts.autoplay) || carousel.getAttribute('data-autoplay') === 'true';
  const intervalTime = parseInt((opts && opts.interval) || carousel.getAttribute('data-interval') || 3500, 10);

  if (isAutoplay) {
    let autoInterval = setInterval(() => {
      const nextIdx = (currentSlideIndex + 1) % items.length;
      scrollToSlide(nextIdx);
    }, intervalTime);

    carousel.addEventListener('mouseenter', () => clearInterval(autoInterval));
    carousel.addEventListener('mouseleave', () => {
      autoInterval = setInterval(() => {
        const nextIdx = (currentSlideIndex + 1) % items.length;
        scrollToSlide(nextIdx);
      }, intervalTime);
    });
  }
}

// Auto Setup Helper Elements on DOMReady
(function () {
  function init() {
    cleanupOrphanedBackdrops();
    initMobileDrawer();
    document.querySelectorAll('.carousel').forEach(c => initSingleCarousel(c));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(init, 100));
  } else {
    setTimeout(init, 100);
  }
})();

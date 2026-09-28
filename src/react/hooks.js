'use client';

import { useCallback, useEffect } from 'react';

/**
 * SSR-safe hook for Blue Bird Toast notifications
 */
export function useToast() {
  const showToast = useCallback((optionsOrMessage) => {
    if (typeof window === 'undefined') return null;

    let opts = optionsOrMessage;
    if (typeof optionsOrMessage === 'string') {
      opts = { title: optionsOrMessage };
    }

    if (window.toast) {
      return window.toast(opts);
    } else if (window.bluebird) {
      return window.bluebird('toast', opts);
    } else {
      console.warn('[Blue Bird CSS] Toast is not loaded. Ensure bluebird.js is imported or included via <Script />.');
      return null;
    }
  }, []);

  const dismiss = useCallback((toastEl) => {
    if (typeof window === 'undefined' || !toastEl) return;
    if (window.dismissToast) {
      window.dismissToast(toastEl);
    } else {
      toastEl.classList.add('fade-out');
      setTimeout(() => toastEl.remove(), 300);
    }
  }, []);

  return { toast: showToast, dismiss };
}

/**
 * SSR-safe hook for Blue Bird Snackbar notifications
 */
export function useSnackbar() {
  const showSnackbar = useCallback((message, type = 'info', duration = 3000) => {
    if (typeof window === 'undefined') return;

    if (window.snackbar) {
      window.snackbar({ message, type, duration });
    } else if (window.bluebird) {
      window.bluebird('snackbar', { message, type, duration });
    } else {
      console.warn('[Blue Bird CSS] Snackbar is not loaded. Ensure bluebird.js is imported.');
    }
  }, []);

  return { snackbar: showSnackbar };
}

/**
 * Automatically initializes and attaches the mobile slide-out drawer on mount
 */
export function useDrawer() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.initMobileDrawer) {
      window.initMobileDrawer();
    }
  }, []);
}

/**
 * Hook to initialize a Blue Bird touch carousel on a given ref
 */
export function useCarousel(ref, options = {}) {
  useEffect(() => {
    if (typeof window === 'undefined' || !ref?.current) return;
    if (window.initSingleCarousel) {
      window.initSingleCarousel(ref.current, options);
    }
  }, [ref, options]);
}

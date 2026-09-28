'use client';
import React, { createContext, useContext, useEffect, useState, useMemo, useCallback, useSyncExternalStore, forwardRef, useRef } from 'react';

// --- ThemeProvider ---
const ThemeContext = createContext({
  theme: 'system',
  resolvedTheme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
  isDark: false,
  mounted: false,
});

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

const themeListeners = new Set();
const notifyThemeListeners = () => themeListeners.forEach((fn) => fn());

/**
 * ThemeProvider for Next.js & React
 * Handles 'light', 'dark', and 'system' themes with localStorage persistence
 * and sets Blue Bird CSS data-theme attribute on <html>.
 * Fully SSR-safe and optimized for React 18/19 hydration.
 */
export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'bluebird-theme',
  attribute = 'data-theme',
  enableSystem = true,
  disableTransitionOnChange = false,
}) {
  const mounted = useMounted();

  const theme = useSyncExternalStore(
    (callback) => {
      themeListeners.add(callback);
      if (typeof window !== 'undefined') {
        const handleStorage = (e) => {
          if (!e || e.key === storageKey) callback();
        };
        window.addEventListener('storage', handleStorage);
        return () => {
          themeListeners.delete(callback);
          window.removeEventListener('storage', handleStorage);
        };
      }
      return () => themeListeners.delete(callback);
    },
    () => {
      try {
        return localStorage.getItem(storageKey) || defaultTheme;
      } catch {
        return defaultTheme;
      }
    },
    () => defaultTheme
  );

  const systemTheme = useSyncExternalStore(
    (callback) => {
      if (!enableSystem || typeof window === 'undefined') return () => {};
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      if (mq.addEventListener) {
        mq.addEventListener('change', callback);
        return () => mq.removeEventListener('change', callback);
      } else if (mq.addListener) {
        mq.addListener(callback);
        return () => mq.removeListener(callback);
      }
      return () => {};
    },
    () => {
      if (!enableSystem || typeof window === 'undefined') return 'light';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },
    () => 'light'
  );

  const resolvedTheme = useMemo(() => {
    if (theme === 'system') return systemTheme;
    return theme;
  }, [theme, systemTheme]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;

    let styleEl = null;
    if (disableTransitionOnChange) {
      styleEl = document.createElement('style');
      styleEl.appendChild(
        document.createTextNode(
          '*, *::before, *::after { -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; -ms-transition: none !important; transition: none !important; }'
        )
      );
      document.head.appendChild(styleEl);
    }

    if (attribute === 'class') {
      root.classList.remove('light', 'dark');
      root.classList.add(resolvedTheme);
    } else {
      root.setAttribute(attribute, resolvedTheme);
    }

    if (styleEl) {
      const _ = window.getComputedStyle(styleEl).opacity;
      document.head.removeChild(styleEl);
    }
  }, [resolvedTheme, attribute, disableTransitionOnChange]);

  const setTheme = useCallback(
    (newTheme) => {
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // Ignore local storage errors in private/restricted environments
      }
      notifyThemeListeners();
    },
    [storageKey]
  );

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
      isDark: resolvedTheme === 'dark',
      mounted,
    }),
    [theme, resolvedTheme, setTheme, toggleTheme, mounted]
  );

  return React.createElement(ThemeContext.Provider, { value }, children);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a <ThemeProvider>');
  }
  return context;
}

// --- ThemeToggle ---
/**
 * Pre-built Theme Toggle button for Next.js & React
 * Uses Blue Bird styling and renders clean SVG sun/moon icons.
 */
export function ThemeToggle({
  className = '',
  ariaLabel = 'Toggle theme (light or dark)',
  showLabel = false,
  lightLabel = 'Light',
  darkLabel = 'Dark',
  renderIcon,
  ...props
}) {
  const { toggleTheme, isDark, mounted } = useTheme();

  // If not mounted yet (SSR or initial client hydration), render a stable neutral placeholder to avoid mismatch
  if (!mounted) {
    return React.createElement(
      'button',
      {
        type: 'button',
        className: `btn-secondary inline-flex items-center gap-2 cursor-pointer ${className}`.trim(),
        'aria-label': ariaLabel,
        title: 'Toggle theme',
        ...props,
      },
      React.createElement('span', {
        style: { width: '18px', height: '18px', display: 'inline-block' },
        'aria-hidden': 'true',
      }),
      showLabel ? React.createElement('span', null, lightLabel) : null
    );
  }

  const iconElement = renderIcon
    ? renderIcon(isDark)
    : isDark
    ? React.createElement(
        'svg',
        {
          width: '18',
          height: '18',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': 'true',
        },
        React.createElement('path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' })
      )
    : React.createElement(
        'svg',
        {
          width: '18',
          height: '18',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': 'true',
        },
        React.createElement('circle', { cx: '12', cy: '12', r: '4' }),
        React.createElement('path', { d: 'M12 2v2' }),
        React.createElement('path', { d: 'M12 20v2' }),
        React.createElement('path', { d: 'm4.93 4.93 1.41 1.41' }),
        React.createElement('path', { d: 'm17.66 17.66 1.41 1.41' }),
        React.createElement('path', { d: 'M2 12h2' }),
        React.createElement('path', { d: 'M20 12h2' }),
        React.createElement('path', { d: 'm6.34 17.66-1.41 1.41' }),
        React.createElement('path', { d: 'm19.07 4.93-1.41 1.41' })
      );

  return React.createElement(
    'button',
    {
      type: 'button',
      onClick: toggleTheme,
      className: `btn-secondary inline-flex items-center gap-2 cursor-pointer ${className}`.trim(),
      'aria-label': ariaLabel,
      title: isDark ? lightLabel : darkLabel,
      ...props,
    },
    iconElement,
    showLabel ? React.createElement('span', null, isDark ? darkLabel : lightLabel) : null
  );
}

// --- Hooks ---
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

// --- Components ---
/* eslint-disable react-hooks/refs */


/**
 * Button component with Blue Bird CSS styling and variants
 */
export const Button = forwardRef(function Button(
  {
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    as: Component = 'button',
    ...props
  },
  ref
) {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    destructive: 'btn-destructive',
    outline: 'outline',
    ghost: 'ghost',
    fill: 'fill',
    cyberpunk: 'cyber-btn',
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  const vClass = variantClasses[variant] || '';
  const sClass = sizeClasses[size] || '';
  const computedClass = `btn ${vClass} ${sClass} ${className}`.trim();

  const spinner = loading
    ? React.createElement(
        'svg',
        {
          className: 'animate-spin -ml-1 mr-2 size-4',
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          'aria-hidden': 'true',
        },
        React.createElement('circle', {
          className: 'opacity-25',
          cx: '12',
          cy: '12',
          r: '10',
          stroke: 'currentColor',
          strokeWidth: '4',
        }),
        React.createElement('path', {
          className: 'opacity-75',
          fill: 'currentColor',
          d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
        })
      )
    : null;

  return React.createElement(
    Component,
    {
      ref,
      className: computedClass,
      disabled: disabled || loading,
      role: Component !== 'button' ? 'button' : undefined,
      ...props,
    },
    spinner,
    children
  );
});

/**
 * Card Component & Sub-components
 */
export const Card = forwardRef(function Card(
  { children, className = '', hoverable = false, glass = false, ...props },
  ref
) {
  const hoverClass = hoverable ? 'hover-lift' : '';
  const glassClass = glass ? 'glass-card' : 'card';
  return React.createElement(
    'article',
    {
      ref,
      className: `${glassClass} ${hoverClass} ${className}`.trim(),
      ...props,
    },
    children
  );
});

export const CardHeader = forwardRef(function CardHeader({ children, className = '', ...props }, ref) {
  return React.createElement(
    'header',
    {
      ref,
      className: `card-header mb-3 ${className}`.trim(),
      ...props,
    },
    children
  );
});

export const CardTitle = forwardRef(function CardTitle({ children, className = '', as: Component = 'h3', ...props }, ref) {
  return React.createElement(
    Component,
    {
      ref,
      className: `card-title text-xl font-semibold mb-1 ${className}`.trim(),
      ...props,
    },
    children
  );
});

export const CardDescription = forwardRef(function CardDescription({ children, className = '', ...props }, ref) {
  return React.createElement(
    'p',
    {
      ref,
      className: `card-description text-sm text-secondary ${className}`.trim(),
      ...props,
    },
    children
  );
});

export const CardContent = forwardRef(function CardContent({ children, className = '', ...props }, ref) {
  return React.createElement(
    'div',
    {
      ref,
      className: `card-content ${className}`.trim(),
      ...props,
    },
    children
  );
});

export const CardFooter = forwardRef(function CardFooter({ children, className = '', ...props }, ref) {
  return React.createElement(
    'footer',
    {
      ref,
      className: `card-footer mt-4 pt-3 border-t flex items-center justify-between ${className}`.trim(),
      ...props,
    },
    children
  );
});

/**
 * Container component
 */
export const Container = forwardRef(function Container({ children, className = '', ...props }, ref) {
  return React.createElement(
    'div',
    {
      ref,
      className: `container mx-auto ${className}`.trim(),
      ...props,
    },
    children
  );
});

/**
 * Badge Component
 */
export const Badge = forwardRef(function Badge(
  { children, className = '', variant = 'default', ...props },
  ref
) {
  const variantClasses = {
    default: 'badge',
    primary: 'badge bg-primary text-on-primary',
    secondary: 'badge bg-secondary text-secondary',
    success: 'badge bg-green-500 text-white',
    warning: 'badge bg-yellow-500 text-white',
    error: 'badge bg-red-500 text-white',
    outline: 'badge border',
  };

  const vClass = variantClasses[variant] || 'badge';
  return React.createElement(
    'span',
    {
      ref,
      className: `${vClass} ${className}`.trim(),
      ...props,
    },
    children
  );
});

/**
 * Alert Component
 */
export const Alert = forwardRef(function Alert(
  { children, className = '', type = 'info', title, ...props },
  ref
) {
  const titleEl = title
    ? React.createElement('h5', { className: 'font-semibold mb-1' }, title)
    : null;
  const contentEl = React.createElement('div', { className: 'text-sm' }, children);

  return React.createElement(
    'div',
    {
      ref,
      role: 'alert',
      className: `alert alert-${type} p-4 rounded-lg border mb-4 ${className}`.trim(),
      ...props,
    },
    titleEl,
    contentEl
  );
});

/**
 * Native HTML5 <dialog> wrapper with backdrop & escape key support
 */
export const Dialog = forwardRef(function Dialog(
  { open = false, onClose, children, className = '', ...props },
  ref
) {
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => dialogRef.current);

  useEffect(() => {
    const dialogEl = dialogRef.current;
    if (!dialogEl) return;

    if (open) {
      if (!dialogEl.open) {
        dialogEl.showModal();
      }
    } else {
      if (dialogEl.open) {
        dialogEl.close();
      }
    }
  }, [open]);

  useEffect(() => {
    const dialogEl = dialogRef.current;
    if (!dialogEl) return;

    const handleCancel = (e) => {
      e.preventDefault();
      if (onClose) onClose();
    };

    const handleClickOutside = (e) => {
      if (e.target === dialogEl && onClose) {
        onClose();
      }
    };

    dialogEl.addEventListener('cancel', handleCancel);
    dialogEl.addEventListener('click', handleClickOutside);
    return () => {
      dialogEl.removeEventListener('cancel', handleCancel);
      dialogEl.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return React.createElement(
    'dialog',
    {
      ref: dialogRef,
      className: `rounded-xl p-6 ${className}`.trim(),
      ...props,
    },
    children
  );
});

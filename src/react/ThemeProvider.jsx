'use client';

import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';

const ThemeContext = createContext({
  theme: 'system',
  resolvedTheme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
  isDark: false,
});

/**
 * ThemeProvider for Next.js & React
 * Handles 'light', 'dark', and 'system' themes with localStorage persistence
 * and sets Blue Bird CSS data-theme attribute on <html>.
 */
export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'bluebird-theme',
  attribute = 'data-theme',
  enableSystem = true,
  disableTransitionOnChange = false,
}) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return defaultTheme;
    try {
      const stored = localStorage.getItem(storageKey);
      return stored || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const [systemTheme, setSystemTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (!enableSystem || typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [enableSystem]);

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
      setThemeState(newTheme);
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // Ignore local storage errors in private/restricted environments
      }
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
    }),
    [theme, resolvedTheme, setTheme, toggleTheme]
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

import React, { createContext, useContext, useEffect, useMemo, useCallback, useSyncExternalStore } from 'react';

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

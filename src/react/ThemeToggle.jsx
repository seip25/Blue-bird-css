'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

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

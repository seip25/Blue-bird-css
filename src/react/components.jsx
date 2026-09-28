/* eslint-disable react-hooks/refs */
import React, { forwardRef, useEffect, useRef, useImperativeHandle } from 'react';

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

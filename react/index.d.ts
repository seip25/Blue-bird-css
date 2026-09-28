import React from 'react';

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
  mounted: boolean;
}

export declare function ThemeProvider(props: ThemeProviderProps): React.JSX.Element;
export declare function useTheme(): ThemeContextValue;

export interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  ariaLabel?: string;
  showLabel?: boolean;
  lightLabel?: string;
  darkLabel?: string;
  renderIcon?: (isDark: boolean) => React.ReactNode;
}

export declare function ThemeToggle(props: ThemeToggleProps): React.JSX.Element;

export interface ToastOptions {
  title?: string;
  description?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
  duration?: number;
}

export declare function useToast(): {
  toast: (options: ToastOptions | string) => HTMLElement | null;
  dismiss: (toastEl: HTMLElement) => void;
};

export declare function useSnackbar(): {
  snackbar: (message: string, type?: 'info' | 'success' | 'warning' | 'error', duration?: number) => void;
};

export declare function useDrawer(): void;

export declare function useCarousel(
  ref: React.RefObject<HTMLElement | null>,
  options?: { autoplay?: boolean; interval?: number; loop?: boolean }
): void;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'fill' | 'cyberpunk';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  as?: React.ElementType;
  href?: string;
}

export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<any>>;

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  hoverable?: boolean;
  glass?: boolean;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLElement>>;
export declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
export declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & { as?: React.ElementType } & React.RefAttributes<any>>;
export declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;

export declare const Container: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
}
export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;

export interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  open?: boolean;
  onClose?: () => void;
}
export declare const Dialog: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<HTMLDialogElement>>;

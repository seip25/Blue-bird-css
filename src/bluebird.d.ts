/**
 * Blue Bird CSS Framework — TypeScript Definitions
 * Package: @seip/blue-bird
 */

export interface ToastOptions {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  dismissible?: boolean;
}

export interface SnackbarOptions {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
}

export interface CarouselOptions {
  autoplay?: boolean;
  interval?: number;
  loop?: boolean;
}

export interface DataTableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: any) => string | HTMLElement;
}

export interface DataTableOptions {
  data: any[];
  columns: DataTableColumn[];
  pagination?: boolean;
  pageSize?: number;
  searchable?: boolean;
}

export declare class ResponsiveDataTable {
  constructor(container: HTMLElement | string, options: DataTableOptions);
  updateData(newData: any[]): void;
  updateColumns(newColumns: DataTableColumn[]): void;
  updateTable(): void;
}

export declare function toast(options: ToastOptions | string): HTMLElement;
export declare function snackbar(options: SnackbarOptions | string): HTMLElement;
export declare function dismissToast(toastEl: HTMLElement): void;
export declare function initMobileDrawer(): void;
export declare function initSingleCarousel(carousel: HTMLElement, opts?: CarouselOptions): void;
export declare function getUrlParameter(name: string): string | null;
export declare function lang(l?: string): void;
export declare function bluebird(component: string | object, options?: Record<string, any>): any;

export declare const Http: {
  get(url: string, headers?: Record<string, string>): Promise<any>;
  post(url: string, data?: any, headers?: Record<string, string>): Promise<any>;
  put(url: string, data?: any, headers?: Record<string, string>): Promise<any>;
  delete(url: string, headers?: Record<string, string>): Promise<any>;
};

declare global {
  interface Window {
    bluebird: typeof bluebird;
    toast: typeof toast;
    snackbar: typeof snackbar;
    dismissToast: typeof dismissToast;
    initMobileDrawer: typeof initMobileDrawer;
    initSingleCarousel: typeof initSingleCarousel;
    ResponsiveDataTable: typeof ResponsiveDataTable;
    Http: typeof Http;
    getUrlParameter: typeof getUrlParameter;
    lang: typeof lang;
  }
}

export default bluebird;

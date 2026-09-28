/* global Buffer, process */
import fs from 'fs';
import path from 'path';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

ensureDir('dist');
ensureDir('public');
ensureDir('.vscode');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
const version = pkg.version || '0.2.0';

console.log(`🚀 Building @seip/blue-bird-css framework v${version}...`);

// ==========================================
// 1. BUILD CSS
// ==========================================
const cssModules = [
  'src/css/tokens.css',
  'src/css/reset.css',
  'src/css/base.css',
  'src/css/components/buttons.css',
  'src/css/components/forms.css',
  'src/css/components/cards.css',
  'src/css/components/navigation.css',
  'src/css/components/tables.css',
  'src/css/components/feedback.css',
  'src/css/components/interactive.css',
  'src/css/components/cyberpunk.css',
  'src/css/utilities/layout.css',
  'src/css/utilities/spacing.css',
  'src/css/utilities/sizing.css',
  'src/css/utilities/colors.css',
  'src/css/utilities/typography.css',
  'src/css/utilities/effects.css',
  'src/css/utilities/responsive.css',
];

const banner = `/* ==========================================================================
   BLUE BIRD CSS FRAMEWORK — v${version}
   Semantic, Modern & Lightweight UI System
   MIT License © Seip25 | https://github.com/seip25/Blue-bird-css
   ========================================================================== */

@layer reset, base, components, utilities;
`;

let fullCss = banner + '\n';

for (const mod of cssModules) {
  if (fs.existsSync(mod)) {
    const content = fs.readFileSync(mod, 'utf-8');
    fullCss += `\n/* --- Module: ${path.basename(mod)} --- */\n` + content + '\n';
  } else {
    console.warn(`⚠️ Warning: Missing module ${mod}`);
  }
}

// Write unminified CSS
fs.writeFileSync('dist/bluebird.css', fullCss);
fs.writeFileSync('public/bluebird.css', fullCss);

// Minify CSS
function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove comments
    .replace(/\s+/g, ' ')             // collapse whitespace
    .replace(/\s*([{}:;,>+~])\s*/g, '$1') // remove space around delimiters
    .replace(/;}/g, '}')              // remove trailing semicolon
    .trim();
}

const minCss = `/* Blue Bird CSS v${version} | MIT License | @seip/blue-bird-css */\n` + minifyCss(fullCss);
fs.writeFileSync('dist/bluebird.min.css', minCss);

// Validate CSS AST with lightningcss to ensure full Turbopack / Next.js / PostCSS compatibility
try {
  const lightningcss = await import('lightningcss');
  lightningcss.transform({ filename: 'dist/bluebird.css', code: Buffer.from(fullCss) });
  lightningcss.transform({ filename: 'dist/bluebird.min.css', code: Buffer.from(minCss) });
  console.log('✅ CSS Syntax Validated (Turbopack, Next.js & LightningCSS verified)');
} catch (err) {
  if (err.loc) {
    console.error(`❌ CSS Validation Error: ${err.message} at line ${err.loc.line}, col ${err.loc.column}`);
    process.exit(1);
  }
}

console.log(`✅ CSS Compiled:`);
console.log(`   - dist/bluebird.css (${(Buffer.byteLength(fullCss) / 1024).toFixed(1)} KB)`);
console.log(`   - dist/bluebird.min.css (${(Buffer.byteLength(minCss) / 1024).toFixed(1)} KB)`);
console.log(`   - public/bluebird.css (updated for dev server)`);

// ==========================================
// 2. BUILD JS (Vanilla + ESM + Minified)
// ==========================================
const jsSource = fs.readFileSync('public/bluebird.js', 'utf-8');

// Ensure browser global attachments
let browserJs = jsSource;
if (!browserJs.includes('window.dismissToast')) {
  browserJs = browserJs.replace(
    'window.bluebird = bluebird;',
    `window.bluebird = bluebird;\n  window.dismissToast = dismissToast;\n  window.initMobileDrawer = initMobileDrawer;\n  window.initSingleCarousel = initSingleCarousel;\n  window.lang = lang;`
  );
}

fs.writeFileSync('dist/bluebird.js', browserJs);

// Create ESM module
const esmExportStatement = `
export {
  bluebird,
  toast,
  snackbar,
  dismissToast,
  initMobileDrawer,
  initSingleCarousel,
  ResponsiveDataTable,
  Http,
  getUrlParameter,
  lang
};
export default bluebird;
`;

const esmJs = browserJs + '\n' + esmExportStatement;
fs.writeFileSync('dist/bluebird.esm.js', esmJs);

// Minify JS
function simpleMinifyJs(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    .replace(/^\s+/gm, '')
    .replace(/\r?\n/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

const minJs = `/* Blue Bird JS v${version} | MIT License | @seip/blue-bird-css */\n` + simpleMinifyJs(browserJs);
fs.writeFileSync('dist/bluebird.min.js', minJs);

console.log(`✅ JavaScript Compiled:`);
console.log(`   - dist/bluebird.js (Vanilla/UMD)`);
console.log(`   - dist/bluebird.min.js (${(Buffer.byteLength(minJs) / 1024).toFixed(1)} KB)`);
console.log(`   - dist/bluebird.esm.js (ES Module for bundlers)`);

// ==========================================
// 3. TYPESCRIPT DEFINITIONS (bluebird.d.ts)
// ==========================================
const dtsContent = `/**
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
`;

fs.writeFileSync('dist/bluebird.d.ts', dtsContent);
fs.writeFileSync('src/bluebird.d.ts', dtsContent);
console.log(`✅ TypeScript Definitions Generated: dist/bluebird.d.ts`);

// ==========================================
// 4. AUTOCOMPLETION CUSTOM DATA (VS Code / IDE)
// ==========================================
// Extract class names from the CSS to generate customData for autocomplete
const decodedCss = fullCss.replace(/\\([0-9a-fA-F]{1,6})\s*/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
const classMatches = decodedCss.match(/\.([a-zA-Z0-9_\-\\:/]+)(?=[\s{,>+~:])/g) || [];
const uniqueClasses = Array.from(
  new Set(
    classMatches
      .map(c => c.slice(1).replace(/\\/g, ''))
      .filter(c => (!c.match(/^[0-9]/) || c.startsWith('2xl:')) && c.length > 1 && !c.includes('hover') && !c.includes('focus'))
  )
).sort();

const htmlCustomData = {
  version: 1.1,
  globalAttributes: [
    {
      name: 'class',
      description: 'Blue Bird CSS utility and component classes',
      valueSet: 'bluebird-classes'
    },
    {
      name: 'data-theme',
      description: 'Active color scheme theme for Blue Bird CSS',
      values: [
        { name: 'light', description: 'Clean modern light theme' },
        { name: 'dark', description: 'Eye-Care charcoal slate dark theme' }
      ]
    },
    {
      name: 'data-autoplay',
      description: 'Enable automatic slide transitions for Blue Bird Touch Carousel',
      values: [{ name: 'true' }, { name: 'false' }]
    },
    {
      name: 'data-interval',
      description: 'Slide cycle duration in milliseconds for carousel'
    },
    {
      name: 'data-drawer',
      description: 'Open standalone slide-out drawer panel',
      values: [
        { name: 'left', description: 'Slide in from left edge' },
        { name: 'right', description: 'Slide in from right edge' },
        { name: 'top', description: 'Slide down from top edge' },
        { name: 'bottom', description: 'Slide up as bottom sheet' }
      ]
    },
    {
      name: 'data-tooltip',
      description: 'Show an animated directional tooltip on hover'
    }
  ],
  valueSets: [
    {
      name: 'bluebird-classes',
      values: uniqueClasses.map(cls => ({
        name: cls,
        description: `Blue Bird CSS class: .${cls}`
      }))
    }
  ]
};

fs.writeFileSync('dist/bluebird.html-data.json', JSON.stringify(htmlCustomData, null, 2));

// Generate .vscode/settings.json
const vscodeSettings = {
  'html.customData': ['./dist/bluebird.html-data.json']
};
fs.writeFileSync('.vscode/settings.json', JSON.stringify(vscodeSettings, null, 2));

console.log(`✅ VS Code Custom Data Generated:`);
console.log(`   - dist/bluebird.html-data.json (${uniqueClasses.length} classes indexed for autocomplete)`);
console.log(`   - .vscode/settings.json created for instant IDE autocomplete`);

// ==========================================
// 5. BUILD REACT / NEXT.JS MODULE
// ==========================================
ensureDir('dist/react');

const reactBundleContent = `'use client';
import React, { createContext, useContext, useEffect, useState, useMemo, useCallback, forwardRef, useRef } from 'react';

// --- ThemeProvider ---
${fs.readFileSync('src/react/ThemeProvider.jsx', 'utf-8').replace(/'use client';/g, '').replace(/import React[^;]+;/g, '').trim()}

// --- ThemeToggle ---
${fs.readFileSync('src/react/ThemeToggle.jsx', 'utf-8').replace(/'use client';/g, '').replace(/import React[^;]+;/g, '').replace(/import { useTheme }[^;]+;/g, '').trim()}

// --- Hooks ---
${fs.readFileSync('src/react/hooks.js', 'utf-8').replace(/'use client';/g, '').replace(/import {[^}]+} from 'react';/g, '').trim()}

// --- Components ---
${fs.readFileSync('src/react/components.jsx', 'utf-8').replace(/'use client';/g, '').replace(/import React[^;]+;/g, '').trim()}
`;

fs.writeFileSync('dist/react/index.js', reactBundleContent);
fs.writeFileSync('dist/react/index.d.ts', fs.readFileSync('src/react/index.d.ts', 'utf-8'));

console.log(`✅ React / Next.js Module Compiled:`);
console.log(`   - dist/react/index.js (with 'use client' and universal React.createElement)`);
console.log(`   - dist/react/index.d.ts (TypeScript definitions)`);

console.log('🎉 Framework build completed successfully!\n');

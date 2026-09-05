# 🐦 Blue Bird CSS & JS Framework

A lightweight, semantic, modern design framework inspired by modern aesthetics and Tailwind-like utility speed. **Zero build step and zero configuration required**.

📖 **[Live Interactive Documentation](https://seip25.github.io/Blue-bird-css/)**

---

## 📋 Table of Contents

- [⚡ Key Features](#-key-features)
- [🚀 Quick Start (NPM & CDN)](#-quick-start-npm--cdn)
- [✨ VS Code Autocompletion & TypeScript](#-vs-code-autocompletion--typescript)
- [🧠 JavaScript Engine (`bluebird.js`) & API](#-javascript-engine-bluebirdjs--api)
  - [Core `bluebird()` Function](#core-bluebird-function)
  - [Responsive Data Table (`ResponsiveDataTable`)](#responsive-data-table-responsivedatatable)
  - [Toast Notifications (`toast()`)](#toast-notifications-toast)
  - [Snackbar (`snackbar()`)](#snackbar-snackbar)
  - [Command Palette (`Ctrl+K`)](#command-palette-ctrlk)
  - [4-Direction Drawer Panels](#4-direction-drawer-panels)
  - [Interactive Tabs](#interactive-tabs)
  - [Touch & Drag Carousel](#touch--drag-carousel)
  - [Automatic Mobile Navigation](#automatic-mobile-navigation)
  - [HTTP Fetch Client (`Http()`)](#http-fetch-client-http)
  - [URL Parameter Helper (`getUrlParameter()`)](#url-parameter-helper-geturlparameter)
  - [Declarative HTML `data-*` Attributes](#declarative-html-data--attributes)
- [🎨 CSS Components & Utilities](#-css-components--utilities)
  - [Buttons, Soft Tint & Cyberpunk Glow](#buttons-soft-tint--cyberpunk-glow)
  - [Badges & Tooltips](#badges--tooltips)
  - [Forms & Floating Labels](#forms--floating-labels)
  - [Cards](#cards)
  - [Modals (`<dialog>`)](#modals-dialog)
  - [Dropdowns](#dropdowns)
  - [Tables](#tables)
  - [Skeleton Loading Placeholders](#skeleton-loading-placeholders)
  - [Progress Bars, Gauge & Spinners](#progress-bars-gauge--spinners)
  - [Bottom Navigation](#bottom-navigation)
- [📐 Layout System & Grid](#-layout-system--grid)
  - [Containers](#containers)
  - [Grid System (1 to 12 Columns)](#grid-system-1-to-12-columns)
  - [Flexbox & Spacing](#flexbox--spacing)
  - [Responsiveness & Breakpoints](#responsiveness--breakpoints)
- [✨ CSS Animations & Motion Effects](#-css-animations--motion-effects)
- [🎨 Theming & Light / Dark Mode](#-theming--light--dark-mode)
- [📄 License](#-license)

---

## ⚡ Key Features

- **Semantic HTML First**: Automatic out-of-the-box styling for base HTML tags (`button`, `header`, `main`, `aside`, `input`, `select`, `textarea`, `table`, `progress`, `dialog`, `<details><summary>`).
- **Modern Design Language**: Clean borders, consistent rounded corners (`rounded-xl`), sleek dark palettes with high-contrast accents, and subtle glassmorphic shadows.
- **Subtle & Soft Tint Buttons**: Tinted soft background buttons (`bg-primary-subtle`, `bg-blue-subtle`, `bg-green-subtle`, `bg-purple-subtle`, `bg-red-subtle`, `bg-pink-subtle`, etc.).
- **Perfectly Aligned Link Buttons**: Text link buttons (`.btn-link` or `a.link`) engineered to match standard button height and baseline vertical alignment exactly when placed side-by-side with solid buttons.
- **Filled Floating Inputs**: Floating label inputs supporting both Outline style (`.floating`) and Material/Modern filled container style (`.floating-fill`).
- **Cyberpunk Neon & Futuristic Buttons**: Interactive futuristic buttons with multi-layer neon glow shadows, chamfered cut corners (`.btn-cyberpunk-cut`), RGB glitch effects (`.btn-cyberpunk-glitch`), and color palettes (`.btn-cyberpunk-cyan`, `.btn-cyberpunk-blue`, `.btn-cyberpunk-red`, `.btn-cyberpunk-pink`, `.btn-cyberpunk-yellow`, `.btn-cyberpunk-green`, `.btn-cyberpunk-purple`, `.btn-cyberpunk-orange`, `.btn-cyberpunk-indigo`, `.btn-cyberpunk-white`).
- **4-Direction Drawers**: Standalone slide-out panels from `.drawer-left`, `.drawer-right`, `.drawer-top`, or `.drawer-bottom` (mobile bottom sheet).
- **Automatic Mobile Navigation Drawer**: Transforms the desktop `<aside>` sidebar inside `<main>` into a responsive mobile drawer (`☰`) on screens `<768px` via `bluebird.js`.
- **Mobile Touch & Swipe Carousel**: Touch swipe physics, desktop mouse drag, arrow controls, indicator dots, and automatic cycling via `data-autoplay="true"`.
- **Expressive Color Palette**: Solid and subtle color utility classes for Blue, Red, Green, Yellow, Purple, Indigo, Pink, Teal, Orange, Cyan, Lime, Rose, Fuchsia, Emerald, Sky, and Amber.
- **Micro-Interaction Micro-FX**: Material Ripple effect on button clicks, plus CSS keyframe animations (`.animate-spin`, `.animate-pulse`, `.animate-bounce`, `.animate-fade-in`, `.animate-slide-up`, `.animate-float`, `.animate-wiggle`, `.animate-shimmer`).

---

## 🚀 Quick Start (NPM & CDN)

### Option A: Install via NPM (Recommended for modern bundlers)

```bash
npm install @seip/blue-bird
```

In your main entry point (`main.js`, `index.js`, `App.jsx`, etc.):

```javascript
// Import CSS (compiled with @layer for zero specificity conflicts)
import '@seip/blue-bird/css';

// Import JS helpers with full TypeScript autocomplete
import { toast, snackbar, ResponsiveDataTable, bluebird } from '@seip/blue-bird';

// Ready to use!
toast({ message: 'Hello from Blue Bird!', type: 'success' });
```

---

### Option B: Vanilla HTML / JS via CDN (Zero Build Step)

Include the minified stylesheet and JavaScript helper directly in your `<head>`:

```html
<!-- Blue Bird CSS (Minified, only ~113 KB, with Eye-Care Dark Mode & @layer) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@seip/blue-bird@latest/dist/bluebird.min.css" />

<!-- Blue Bird JS Helper (Automatic drawers, toasts, carousels, command palette) -->
<script src="https://cdn.jsdelivr.net/npm/@seip/blue-bird@latest/dist/bluebird.min.js" defer></script>
```

---

## ✨ VS Code Autocompletion & TypeScript

Blue Bird includes first-class autocompletion tools:

### 1. HTML & CSS Class Autocomplete in VS Code
All 700+ utility and component classes are indexed in `dist/bluebird.html-data.json`. To enable instant autocompletion and hover descriptions in your project, add this to `.vscode/settings.json`:

```json
{
  "html.customData": [
    "./node_modules/@seip/blue-bird/dist/bluebird.html-data.json"
  ]
}
```

Now, when you type `class="` in any `.html` or `.jsx` file, VS Code will suggest classes (`btn-primary`, `btn-cyberpunk-cut`, `glow-blue`, `floating-fill`, etc.) with documentation!

### 2. TypeScript Declarations
Blue Bird provides comprehensive typings in `dist/bluebird.d.ts` for all JavaScript functions, components, and DataTable APIs with full IntelliSense.

---

### Complete Basic HTML Example:

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Blue Bird App</title>
  <link rel="stylesheet" href="https://seip25.github.io/Blue-bird-css/bluebird.css" />
  <script src="https://seip25.github.io/Blue-bird-css/bluebird.js"></script>
</head>
<body>
  <!-- Header with Navigation -->
  <header>
    <nav>
      <h2>🐦 Blue Bird App</h2>
      <div class="flex gap-2">
        <button class="bg-blue-subtle">Dashboard</button>
        <button class="primary glow-pulse">Get Started</button>
      </div>
    </nav>
  </header>

  <!-- Main Layout with Responsive Sidebar -->
  <main>
    <aside>
      <h4>Navigation</h4>
      <a href="#">Home</a>
      <a href="#">Components</a>
      <a href="#">Settings</a>
    </aside>

    <div>
      <article class="card">
        <div class="card-header">
          <h3 class="card-title">Modern Web Application</h3>
          <p class="card-description">Clean semantic markup with zero build step overhead.</p>
        </div>
        <div class="card-content">
          <div class="floating-fill mb-4">
            <input type="text" id="username" placeholder=" " />
            <label for="username">Username</label>
          </div>
          <button class="primary" onclick="toast({ title: 'Success!', description: 'Settings saved successfully.', type: 'success' })">
            Save Changes
          </button>
        </div>
      </article>
    </div>
  </main>
</body>
</html>
```

---

## 🧠 JavaScript Engine (`bluebird.js`) & API

`bluebird.js` is a zero-dependency, lightweight JavaScript helper that powers dynamic notifications, tabs, command palettes, touch carousels, and responsive mobile navigation drawers.

### Core `bluebird()` Function

```javascript
// Main entry point signature:
bluebird(component, options);
```

---

### Responsive Data Table (`ResponsiveDataTable`)

`ResponsiveDataTable` is a reactive, dependency-free JavaScript data table component that automatically adapts its layout:
- **Desktop (`>=768px`)**: Renders a standard tabular `<table>` with formatted cells, sortable-ready layout, and actionable buttons.
- **Mobile (`<768px`)**: Seamlessly collapses into a stack of structured, accessible `<article>` cards with header summaries and key-value detail rows.
- **Real-Time Live Search**: Instantly filters across all visible column values as you type.
- **Dynamic Pagination**: Auto-calculates pages with smart ellipsis navigation and configurable page sizes.
- **HTML String Rendering**: Seamlessly parses HTML strings in cell data (such as `<span class="badge">...</span>` or status indicators).
- **Edit & Delete Action Callbacks**: Built-in action triggers with row data payload.

#### Basic Example (HTML & JavaScript)

```html
<!-- 1. HTML Target Container -->
<div id="users-datatable"></div>

<!-- 2. Include Blue Bird CSS & JS -->
<link rel="stylesheet" href="https://seip25.github.io/Blue-bird-css/bluebird.css" />
<script src="https://seip25.github.io/Blue-bird-css/bluebird.js"></script>

<script>
  // 3. Instantiate ResponsiveDataTable
  const datatable = new ResponsiveDataTable('users-datatable', {
    data: [
      { id: 1, name: 'Ana López', email: 'ana@example.com', role: '<span class="badge badge-primary">Admin</span>', status: 'Active' },
      { id: 2, name: 'Luis García', email: 'luis@example.com', role: '<span class="badge badge-secondary">Editor</span>', status: 'Active' },
      { id: 3, name: 'Marta Ruiz', email: 'marta@example.com', role: '<span class="badge badge-outline">Viewer</span>', status: 'Inactive' },
      { id: 4, name: 'Carlos Díaz', email: 'carlos@example.com', role: '<span class="badge badge-secondary">Editor</span>', status: 'Pending' }
    ],
    columns: [
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Full Name' },
      { key: 'email', title: 'Email Address' },
      { key: 'role', title: 'Role' },
      { key: 'status', title: 'Status' }
    ],
    rowsPerPage: 5,
    search: true,            // Live real-time search filter
    pagination: true,        // Page number controls
    summaryFields: ['name'], // Field displayed as card header in mobile view
    edit: (event, id) => toast({ title: 'Edit', description: `Edit user #${id}`, type: 'info' }),
    delete: (event, id) => toast({ title: 'Delete', description: `Deleted user #${id}`, type: 'error' }),
    breakpoint: 768          // Viewport width (px) to switch to mobile cards
  });
</script>
```

#### Initialization via `bluebird('datatable', options)`

```javascript
// Alternatively initialize via the unified bluebird dispatcher:
const table = bluebird('datatable', {
  container: 'users-datatable', // Container ID or DOM element
  data: usersList,
  columns: [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' }
  ],
  rowsPerPage: 10
});
```

#### Configuration Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `data` | `Array<Object>` | `[]` | Array of row objects to display in the table. |
| `columns` | `Array<Object>` | `[]` | Column definitions: `{ key: string, title: string }`. |
| `rowsPerPage` | `number` | `10` | Number of items per page. |
| `search` | `boolean` | `true` | Enables the live instant search input bar above table. |
| `pagination` | `boolean` | `true` | Enables pagination controls below the table. |
| `summaryFields` | `Array<string>` | `['id']` | Column keys displayed in the mobile card title header. |
| `edit` | `boolean \| Function` | `false` | Callback `(event, item) => ...` executed when Edit button is clicked. |
| `delete` | `boolean \| Function` | `false` | Callback `(event, item) => ...` executed when Delete button is clicked. |
| `breakpoint` | `number` | `768` | Screen width in pixels below which table converts to mobile cards. |
| `headerTitles` | `Object` | `{}` | Optional key-to-title dictionary override mapping. |

#### Instance Methods

```javascript
// Update dataset dynamically (resets pagination to page 1):
table.updateData(newUsersArray);

// Update table column structure dynamically:
table.updateColumns([
  { key: 'id', title: 'ID' },
  { key: 'title', title: 'Title' },
  { key: 'category', title: 'Category' }
]);

// Navigate to a specific page programmatically:
table.changePage(2);
```

---

### Toast Notifications (`toast()`)

Stacked, auto-dismissing toast notification system.

```javascript
// Via global toast helper function:
toast({
  title: 'Payment Completed',
  description: 'Your transaction #9402 has been processed.',
  type: 'success', // 'success' | 'error' | 'warning' | 'info'
  position: 'bottom-right', // 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  duration: 4000 // Milliseconds to auto-dismiss (0 for persistent)
});

// Via bluebird function:
bluebird('toast', {
  title: 'Network Error',
  description: 'Could not establish connection to server.',
  type: 'error',
  position: 'top-right'
});
```

---

### Snackbar (`snackbar()`)

Single floating bottom alert bar.

```javascript
// Via global snackbar helper function:
snackbar({
  message: 'Item archived successfully.',
  type: 'info', // 'info' | 'success' | 'warning' | 'error'
  duration: 3000
});

// Via bluebird function:
bluebird('snackbar', {
  message: 'Welcome to Blue Bird CSS!',
  type: 'success'
});
```

---

### Command Palette (`Ctrl+K`)

Fast, keyboard-accessible command menu modal. Press <kbd>Ctrl+K</kbd> or <kbd>Cmd+K</kbd> anywhere on the page to open or close.

```javascript
// Open/close programmatically:
bluebird('command', { action: 'open' }); // 'open' | 'close' | 'toggle'
```

---

### 4-Direction Drawer Panels

Slide-out drawer panels from any direction of the screen.

```html
<!-- HTML Declarative Trigger -->
<button data-drawer-target="my-left-drawer">Open Left Drawer</button>

<div id="my-left-drawer" class="drawer drawer-left">
  <div class="drawer-header">
    <h3>Drawer Navigation</h3>
    <button data-drawer-close class="ghost">&times;</button>
  </div>
  <div class="drawer-body">
    <p>Drawer content goes here...</p>
  </div>
</div>
```

```javascript
// Programmatic JavaScript API:
bluebird('drawer', { id: 'my-left-drawer', action: 'open' });
bluebird('drawer', { id: 'my-left-drawer', action: 'close' });
bluebird('drawer', { id: 'my-left-drawer', action: 'toggle' });
```

---

### Interactive Tabs

Switch active content panels declaratively without writing custom JS event listeners.

```html
<div class="tabs">
  <div class="tab-list">
    <button class="tab-trigger active" data-tab-target="tab-profile">Profile</button>
    <button class="tab-trigger" data-tab-target="tab-security">Security</button>
  </div>

  <div id="tab-profile" class="tab-content active">
    <p>Profile settings content...</p>
  </div>

  <div id="tab-security" class="tab-content">
    <p>Security settings content...</p>
  </div>
</div>
```

```javascript
// Switch tabs programmatically:
bluebird('tab', { id: 'tab-security' });
```

---

### Touch & Drag Carousel

Mobile-first touch swipe, desktop mouse drag, arrow buttons, indicator dots, and optional autoplay.

```html
<div class="carousel" data-autoplay="true" data-interval="3500">
  <button class="carousel-nav carousel-prev">&larr;</button>
  <button class="carousel-nav carousel-next">&rarr;</button>

  <div class="carousel-track">
    <div class="carousel-item responsive-card">Slide Card 1</div>
    <div class="carousel-item responsive-card">Slide Card 2</div>
    <div class="carousel-item responsive-card">Slide Card 3</div>
  </div>

  <div class="carousel-indicators"></div>
</div>
```

```javascript
// Manual initialization if created dynamically:
bluebird('carousel', { selector: '.carousel', autoplay: true, interval: 4000 });
```

---

### Automatic Mobile Navigation

When your page uses standard semantic HTML structure:

```html
<header>
  <nav>...</nav>
</header>
<main>
  <aside>...</aside>
  <div>...</div>
</main>
```

On small viewports (`<768px`), `bluebird.js` automatically hides the desktop `<aside>` sidebar and injects a mobile drawer toggle button (`☰`) into your top `<header><nav>`, providing a slide-over mobile drawer navigation.

---

### HTTP Fetch Client (`Http()`)

A modern `fetch` wrapper with automatic CSRF token detection, JSON payload handling, and structured error throwing.

```javascript
// 1. Basic GET Request
const users = await Http('/api/users');

// 2. POST JSON Request (Automatically attaches X-CSRF-Token if #csrf input exists)
const newUser = await Http('/api/users/create', 'POST', {
  name: 'Alex Johnson',
  email: 'alex@example.com'
});

// 3. Multipart FormData Upload
const form = new FormData();
form.append('avatar', fileInput.files[0]);
const result = await Http('/api/profile/upload', 'POST', false, form);
```

---

### URL Parameter Helper (`getUrlParameter()`)

Easily inspect query parameters from `window.location.search`:

```javascript
// Current URL: https://example.com/dashboard?tab=analytics&user=42
const tab = getUrlParameter('tab');   // "analytics"
const user = getUrlParameter('user'); // "42"
```

---

### Declarative HTML `data-*` Attributes

`bluebird.js` includes built-in declarative event listeners that work directly on HTML markup without writing JavaScript:

| Attribute | Target / Example | Description |
| :--- | :--- | :--- |
| `data-copy` | `<button data-copy="https://myurl.com">Copy Link</button>` | Copies text to clipboard and displays an instant success toast. |
| `data-confirm` | `<button data-confirm="Are you sure you want to delete this record?">Delete</button>` | Prompts user confirmation before action executes. |
| `data-scroll-to` | `<a data-scroll-to="#pricing">View Pricing</a>` | Performs a smooth animated scroll to the target selector. |
| `data-password-toggle` | `<button data-password-toggle="#pass-input">👁️</button>` | Toggles input mask between `password` and `text`. |
| `data-step-up` / `data-step-down` | `<button data-step-up="#qty">+</button>` | Increments or decrements a numeric input. |
| `data-filter-target` | `<input data-filter-target="#users-table" />` | Real-time live filtering on list items, table rows, or cards. |
| `data-auto-resize` | `<textarea data-auto-resize></textarea>` | Auto-expands textarea height to fit content without scrollbars. |
| `data-modal-target` / `data-close-dialog` | `<button data-modal-target="#my-modal">Open</button>` | Opens or closes HTML5 native `<dialog>` modals. |
| `data-toggle="theme"` | `<button data-toggle="theme">Toggle Theme</button>` | Toggles Light/Dark theme and persists preference in `localStorage`. |
| `data-toast` / `data-toast-title` | `<button data-toast="Saved!" data-toast-title="Success">Save</button>` | Triggers a toast notification purely via HTML. |
| `data-snackbar` | `<button data-snackbar="Profile updated">Update</button>` | Triggers a snackbar message on click. |

---

## 🎨 CSS Components & Utilities

### Buttons, Soft Tint & Cyberpunk Glow

#### 1. Core Variants & Sizes

```html
<!-- Base Variants -->
<button>Primary Default</button>
<button class="secondary">Secondary</button>
<button class="outline">Outline</button>
<button class="destructive">Destructive</button>
<button class="ghost">Ghost</button>

<!-- Button Sizes -->
<button class="primary btn-xs">Extra Small (xs)</button>
<button class="primary btn-sm">Small (sm)</button>
<button class="primary btn-md">Medium (md)</button>
<button class="primary btn-lg">Large (lg)</button>
<button class="primary btn-xl">Extra Large (xl)</button>
<button class="primary btn-icon">+</button>
```

#### 2. Soft Tint Buttons (Subtle / Soft Tint)

```html
<button class="bg-primary-subtle">Primary Subtle</button>
<button class="bg-blue-subtle">Blue Subtle</button>
<button class="bg-red-subtle">Red Subtle</button>
<button class="bg-green-subtle">Green Subtle</button>
<button class="bg-yellow-subtle">Yellow Subtle</button>
<button class="bg-purple-subtle">Purple Subtle</button>
<button class="bg-pink-subtle">Pink Subtle</button>
<button class="bg-emerald-subtle">Emerald Subtle</button>
```

#### 3. Perfectly Aligned Link Buttons (`.btn-link` / `a.link`)

```html
<button class="primary">Solid Button</button>
<a href="#" class="btn-link">Link Button (Anchor)</a>
<button class="btn-link">Link Button (Button)</button>
```

#### 4. Neon Cyberpunk & Futuristic Buttons

```html
<!-- Cyberpunk Color Palette -->
<button class="btn-cyberpunk">Neon Cyan</button>
<button class="btn-cyberpunk-blue">Neon Blue</button>
<button class="btn-cyberpunk-red">Neon Red</button>
<button class="btn-cyberpunk-pink">Neon Pink</button>
<button class="btn-cyberpunk-yellow">Neon Yellow</button>
<button class="btn-cyberpunk-green">Neon Green</button>
<button class="btn-cyberpunk-purple">Neon Purple</button>
<button class="btn-cyberpunk-orange">Neon Orange</button>
<button class="btn-cyberpunk-indigo">Neon Indigo</button>

<!-- Chamfered Cut Corner Modifier -->
<button class="btn-cyberpunk-pink btn-cyberpunk-cut">Cut Pink</button>
<button class="btn-cyberpunk-yellow btn-cyberpunk-cut">Cut Yellow</button>

<!-- Glitch & Pulse Effects -->
<button class="btn-cyberpunk btn-cyberpunk-glitch">RGB Glitch</button>
<button class="primary glow-pulse">Energy Pulse</button>
```

---

### Badges & Tooltips

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-pink">Pink</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-destructive">Destructive</span>
<span class="badge badge-outline">Outline</span>

<!-- Hover tooltip via data-tooltip -->
<button class="primary" data-tooltip="Save changes to database">Save</button>
```

---

### Forms & Floating Labels

All form controls (`<input>`, `<select>`, `<textarea>`) are automatically styled out of the box.

#### Standard & Fill Variant (`.fill`)

```html
<!-- Standard inputs -->
<input type="text" placeholder="Standard Text Input" />
<input type="email" placeholder="Email Input" />

<!-- Filled Variant (.fill) -->
<input type="text" class="fill" placeholder="Filled Input" />
<select class="fill">
  <option>Filled Select</option>
</select>
```

#### Floating Labels (Outline & Filled Style)

```html
<!-- Outline Floating Label -->
<div class="floating">
  <input type="email" id="email" placeholder=" " />
  <label for="email">Email Address</label>
</div>

<!-- Filled Container Floating Label (Material Style) -->
<div class="floating-fill">
  <input type="text" id="fullname" placeholder=" " />
  <label for="fullname">Full Name</label>
</div>
```

#### Checkboxes, Radios & Switches

```html
<!-- Checkbox & Radio -->
<label><input type="checkbox" checked /> I agree to terms</label>
<label><input type="radio" name="group1" checked /> Option A</label>

<!-- Standard Pill Switch -->
<label><input type="checkbox" role="switch" checked /> Notifications</label>

<!-- Android Material Switch -->
<label><input type="checkbox" class="switch-android" checked /> Dark Mode</label>
```

---

### Cards

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Header Title</h3>
    <p class="card-description">Subtitle or description text.</p>
  </div>
  <div class="card-content">
    <p>Main card body contents...</p>
  </div>
  <div class="card-footer">
    <button class="primary btn-sm">Action</button>
  </div>
</div>
```

---

### Modals (`<dialog>`)

Uses native HTML5 `<dialog>` elements with backdrop blur and fullscreen support.

```html
<!-- Standard Dialog Modal -->
<dialog id="myModal">
  <article>
    <header class="flex items-center between">
      <h4>Confirm Action</h4>
      <button class="ghost" onclick="myModal.close()">&times;</button>
    </header>
    <p>Are you sure you want to proceed?</p>
    <footer>
      <button class="ghost" onclick="myModal.close()">Cancel</button>
      <button class="primary" onclick="myModal.close()">Confirm</button>
    </footer>
  </article>
</dialog>

<!-- Open via Native JS -->
<button onclick="myModal.showModal()">Open Dialog</button>

<!-- Fullscreen Dialog -->
<dialog id="modalFull" class="dialog-full">
  <article>
    <h4>Immersive Fullscreen Modal</h4>
    <button class="secondary" onclick="modalFull.close()">Close</button>
  </article>
</dialog>
```

---

### Dropdowns

CSS hover/focus dropdown menu without heavy dependencies.

```html
<div class="dropdown">
  <button class="dropdown-toggle">Menu</button>
  <div class="dropdown-content">
    <a href="#" class="dropdown-item">Profile</a>
    <a href="#" class="dropdown-item">Settings</a>
    <a href="#" class="dropdown-item">Logout</a>
  </div>
</div>
```

---

### Tables

```html
<table class="table-striped table-hover">
  <thead>
    <tr>
      <th>User</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sarah Jenkins</td>
      <td>Administrator</td>
      <td><span class="badge badge-success">Active</span></td>
    </tr>
  </tbody>
</table>
```

*Optional table utility classes:* `.table-striped`, `.table-hover`, `.table-bordered`, `.table-compact`.

---

### Skeleton Loading Placeholders

Animated shimmer placeholder elements to indicate loading states during data fetching.

```html
<div class="card p-6">
  <div class="flex items-center gap-4 mb-4">
    <span class="skeleton skeleton-avatar"></span>
    <div class="flex-1">
      <span class="skeleton skeleton-title"></span>
      <span class="skeleton skeleton-text" style="width: 40%"></span>
    </div>
  </div>
  <span class="skeleton skeleton-text"></span>
  <span class="skeleton skeleton-text" style="width: 80%"></span>
  <div class="flex gap-2 mt-4">
    <span class="skeleton skeleton-button"></span>
  </div>
</div>
```

---

### Progress Bars, Gauge & Spinners

```html
<!-- Native HTML5 Progress Element -->
<progress value="60" max="100"></progress>

<!-- Native HTML5 Meter Gauge Element -->
<meter min="0" max="100" value="85" low="33" high="66" optimum="50"></meter>

<!-- Custom Progress Bar -->
<div class="progress">
  <div class="progress-bar bg-purple" style="width: 75%"></div>
</div>

<!-- Indeterminate Spinners -->
<span class="spinner spinner-sm"></span>
<span class="spinner"></span>
<span class="spinner spinner-lg"></span>

<!-- Step Process Control (.steps) -->
<div class="steps">
  <div class="step completed">
    <div class="step-circle">1</div>
    <span class="step-label">Cart</span>
  </div>
  <div class="step active">
    <div class="step-circle">2</div>
    <span class="step-label">Shipping</span>
  </div>
  <div class="step">
    <div class="step-circle">3</div>
    <span class="step-label">Payment</span>
  </div>
</div>
```

---

### Bottom Navigation

Fixed bottom app bar for mobile viewports.

```html
<nav class="bottom-nav">
  <a href="#" class="bottom-nav-item active">
    <span class="bottom-nav-icon">🏠</span>
    <span class="bottom-nav-label">Home</span>
  </a>
  <a href="#" class="bottom-nav-item">
    <span class="bottom-nav-icon">🔍</span>
    <span class="bottom-nav-label">Search</span>
  </a>
  <a href="#" class="bottom-nav-item">
    <span class="bottom-nav-icon">⚙️</span>
    <span class="bottom-nav-label">Settings</span>
  </a>
</nav>
```

---

## 📐 Layout System & Grid

### Containers

```html
<div class="container">Centered Container (max 1200px)</div>
<div class="container-sm">Small Container (max 640px)</div>
<div class="container-md">Medium Container (max 768px)</div>
<div class="container-lg">Large Container (max 1024px)</div>
<div class="container-xl">Extra Large Container (max 1280px)</div>
<div class="container-fluid">Full Width Container (100%)</div>
```

---

### Grid System (1 to 12 Columns)

```html
<!-- 3-column equal grid -->
<div class="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- Custom column spans -->
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-8">Spans 8 columns</div>
  <div class="col-span-4">Spans 4 columns</div>
</div>
```

*Supports:* `.grid-cols-1` through `.grid-cols-12` and `.col-span-1` through `.col-span-12`.

---

### Flexbox & Spacing

- **Flexbox Layout:** `.flex`, `.flex-col`, `.flex-row`, `.flex-wrap`, `.flex-1`, `.items-center`, `.justify-between`, `.justify-center`, `.justify-end`.
- **Gap & Spacing:** `.gap-1` to `.gap-8`, `.m-1` to `.m-8`, `.p-1` to `.p-8`, `.mx-*`, `.my-*`, `.px-*`, `.py-*`.
- **Shadows:** `.shadow-sm`, `.shadow-md`, `.shadow-lg`, `.shadow-xl`, `.shadow-inner`, `.shadow-none`.
- **Borders:** `.border`, `.border-0`, `.border-2`, `.border-b`, `.border-t`, `.border-l`, `.border-r`.
- **Border Radius:** `.rounded-none`, `.rounded-sm`, `.rounded-md`, `.rounded-lg`, `.rounded-xl`, `.rounded-2xl`, `.rounded-full`.

---

### Responsiveness & Breakpoints

- Mobile main breakpoint: `<768px`.
- `.hidden-sm`: Hides elements on mobile screens (`<768px`).
- `.visible-sm`: Shows elements only on mobile screens (`<768px`).

---

## ✨ CSS Animations & Motion Effects

Ready-to-use motion keyframes and utility classes:

```html
<!-- Infinite Spin Loading -->
<span class="animate-spin spinner"></span>

<!-- Ping & Pulse radar -->
<span class="animate-ping bg-blue rounded-full w-3 h-3"></span>
<div class="animate-pulse">Loading data...</div>

<!-- Bounce animation -->
<span class="animate-bounce">↓ Scroll Down</span>

<!-- Smooth Entrances & Float -->
<div class="animate-fade-in">Fade In Entrance</div>
<div class="animate-slide-up">Slide Up Entrance</div>
<div class="animate-float">Floating Bobbing Animation</div>
<div class="animate-wiggle">Wiggle Shake Effect</div>

<!-- Hover lift effect -->
<button class="secondary hover-lift">Hover Lift Button</button>
```

---

## 🎨 Theming & Eye-Care Light / Dark Mode

Blue Bird CSS features an **Eye-Care Dark Mode** crafted to protect your vision during long development and browsing sessions. Instead of harsh `#000000` pitch black and blinding `#ffffff` stark white, it uses soothing charcoal-slate backgrounds (`#101419` and `#171d25`) paired with soft slate-white typography (`#e2e8f0`).

### Automatic OS Detection & Manual Toggle
Blue Bird automatically respects the operating system's `prefers-color-scheme: dark` preference, and allows instant manual toggling via the `data-theme` attribute:

```html
<!-- Forced Dark Theme -->
<html data-theme="dark">

<!-- Forced Light Theme -->
<html data-theme="light">
```

```javascript
// Dynamic toggle function:
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}
```

### Color Palette Shorthands

Apply any solid color (`.bg-blue`, `.bg-red`, `.bg-green`, `.bg-purple`, `.bg-pink`, `.bg-emerald`, `.bg-orange`, `.bg-amber`, etc.) or subtle tint (`.bg-blue-subtle`, `.bg-red-subtle`, `.bg-green-subtle`, etc.) to elements.

---

## 📄 License

MIT © [Seip25](https://github.com/seip25) — Built for modern, fast, and sleek web development.

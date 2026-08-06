# 🐦 Blue Bird CSS

A semantic, lightweight, modern CSS framework built with pure **shadcn/ui design principles** and Tailwind-like utility speed. Zero build step, zero configuration required.

📖 **[Live Documentation & Components](https://seip25.github.io/Blue-bird-css/)**

---

## ⚡ Key Features

- **Semantic HTML First**: Base HTML elements (`button`, `header`, `main`, `article`, `input`, `table`) are styled automatically out of the box.
- **Subtle & Soft Buttons**: Soft tint background buttons (`bg-primary-subtle`, `bg-blue-subtle`, `bg-red-subtle`, `bg-green-subtle`, `bg-purple-subtle`, `bg-yellow-subtle`, `bg-pink-subtle`, etc.) with dark/high-contrast text.
- **Link Buttons**: `.btn-link` / `a.link` classes engineered to match standard button height and baseline vertical alignment.
- **Filled Floating Inputs**: `.floating-fill` Material/Modern container filled inputs with floating label transitions.
- **Cyberpunk Glow Buttons**: `.glow-cyberpunk` and `.glow-pulse` buttons with vibrant neon multi-layer glow box shadows and keyframe energy pulses.
- **4-Direction Drawers**: Standalone slide-out panels from `.drawer-left`, `.drawer-right`, `.drawer-top`, or `.drawer-bottom` (mobile bottom sheet).
- **Automatic Mobile Navigation Drawer**: Desktop `<aside>` sidebar inside `<main>` automatically transforms into a responsive mobile drawer (`☰`) on screens <768px via `bluebird.js`.
- **Mobile Touch & Swipe Carousel**: Touch swipe, indicator dots, arrow controls, and `data-autoplay="true"` option.
- **CSS Keyframe Animations**: Utility classes like `.animate-spin`, `.animate-bounce`, `.animate-pulse`, `.animate-fade-in`, `.animate-slide-up`, `.animate-float`, `.animate-wiggle`, and `.animate-shimmer`.
- **Next.js Ready**: Full step-by-step integration guide for Next.js App Router (`app/layout.jsx`) and Pages Router (`pages/_app.jsx`).

---

## 🚀 Quick Start (CDN)

Include `bluebird.css` and `bluebird.js` directly in your HTML `<head>` or `layout.jsx`:

```html
<link rel="stylesheet" href="https://seip25.github.io/Blue-bird-css/bluebird.css" />
<script src="https://seip25.github.io/Blue-bird-css/bluebird.js"></script>
```

### Basic HTML Example:

```html
<!DOCTYPE html>
<html data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <title>My Blue Bird App</title>
  <link rel="stylesheet" href="bluebird.css" />
  <script src="bluebird.js"></script>
</head>
<body>
  <header>
    <nav>
      <h2>🐦 Blue Bird App</h2>
      <div className="flex gap-2">
        <button class="bg-blue-subtle">Dashboard</button>
        <button class="primary glow-pulse">Get Started</button>
      </div>
    </nav>
  </header>

  <main>
    <article className="card">
      <h1>Modern Web Application</h1>
      <p>Clean semantic markup with zero build step overhead.</p>

      <div className="floating-fill">
        <input type="text" id="username" placeholder=" " />
        <label for="username">Username</label>
      </div>
    </article>
  </main>
</body>
</html>
```

---

## 📄 License

MIT © Seip25

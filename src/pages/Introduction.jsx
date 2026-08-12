import CodeBlock from '../components/CodeBlock';

/**
 * Introduction documentation page component showcasing Blue Bird CSS features
 * @returns {JSX.Element} The rendered Introduction page
 */
export default function Introduction() {
  const handleDownload = () => {
    const cssLink = document.createElement('a');
    cssLink.href = 'bluebird.css';
    cssLink.download = 'bluebird.css';
    document.body.appendChild(cssLink);
    cssLink.click();
    document.body.removeChild(cssLink);

    setTimeout(() => {
      const jsLink = document.createElement('a');
      jsLink.href = 'bluebird.js';
      jsLink.download = 'bluebird.js';
      document.body.appendChild(jsLink);
      jsLink.click();
      document.body.removeChild(jsLink);
    }, 500);
  };

  return (
    <>
      <article className="border rounded-xl text-center p-8 mb-8 shadow-sm bg-surface">
        <h1 className="font-bold text-4xl mb-3 tracking-tight">Blue Bird CSS</h1>
        <p className="text-secondary text-lg max-w-2xl mx-auto mb-6">
          A lightweight, semantic, modern CSS framework built with clean design principles and Tailwind utility power.
        </p>
        <div className="flex justify-center items-center gap-3 flex-wrap my-6">
          <span className="badge badge-primary badge-lg">Semantic HTML</span>
          <span className="badge badge-secondary badge-lg">Modern Design</span>
          <span className="badge badge-outline badge-lg">Tailwind Utilities</span>
          <span className="badge badge-success badge-lg">Zero Build Required</span>
        </div>
        <div className="flex justify-center items-center gap-4 mt-8 flex-wrap">
          <button className="glow hover-lift px-6 py-2" onClick={handleDownload}>
            Download bluebird.css + bluebird.js
          </button>
          <a
            href="https://github.com/seip25/Blue-bird-css"
            role="button"
            className="outline hover-lift px-6 py-2"
            target="_blank"
            rel="noreferrer"
          >
            Star on GitHub
          </a>
        </div>
      </article>

      <article className="glass p-6 rounded-xl mb-6">
        <h2 className="text-2xl font-semibold mb-2">Quick CDN Install</h2>
        <p className="text-muted mb-4">Include Blue Bird CSS directly in your HTML file via CDN:</p>
        <CodeBlock language="html">
          {`<link rel="stylesheet" href="https://seip25.github.io/Blue-bird-css/bluebird.css" />
<script src="https://seip25.github.io/Blue-bird-css/bluebird.js"></script>`}
        </CodeBlock>
        <p className="mt-4 text-muted">Or download files locally and include them in your head tag:</p>
        <CodeBlock language="html">
          {`<link rel="stylesheet" href="bluebird.css" />
<script src="bluebird.js"></script>`}
        </CodeBlock>
      </article>

      <article className="glass p-6 rounded-xl mb-6">
        <h2 className="text-2xl font-semibold mb-2">Semantic HTML First</h2>
        <p className="mb-4">
          Blue Bird CSS is designed around <strong>semantic HTML5 elements</strong>. Base tags (headers, buttons, forms, tables, cards) look stunning out of the box with zero class boilerplate:
        </p>
        <CodeBlock language="html">
          {`<!DOCTYPE html>
<html data-theme="dark">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blue Bird CSS App</title>
    <link rel="stylesheet" href="bluebird.css" />
    <script src="bluebird.js"></script>
</head>
<body>
  <header className="glass">
    <nav className="flex items-center justify-between">
      <h2>App Name</h2>
      <div className="flex items-center gap-2">
        <button className="outline">Login</button>
        <button className="badge-glow">Get Started</button>
      </div>
    </nav>
  </header>

  <main>
    <article className="glass-card">
      <h1 className="text-gradient">Modern CSS Framework</h1>
      <p>Clean semantic markup enhanced with modern design aesthetics.</p>
    </article>
  </main>
</body>
</html>`}
        </CodeBlock>

        <h3 className="text-lg font-bold mt-6 mb-3">Automatic Semantic Enhancements</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th>Element / Selector</th>
              <th>Automatic Enhancement</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>body</code></td><td>Surface background, flex column layout, min-height 100vh</td></tr>
            <tr><td><code>header</code></td><td>Glassmorphism backdrop-blur header with subtle borders</td></tr>
            <tr><td><code>header &gt; nav</code></td><td>Auto-centered container with flex space-between alignment</td></tr>
            <tr><td><code>article / section</code></td><td>Glass card background, smooth border radii &amp; subtle shadows</td></tr>
            <tr><td><code>button</code></td><td>Primary theme styling with interactive material ripple effects</td></tr>
            <tr><td><code>.badge</code></td><td>Pill badge chip with multiple color &amp; glow variants</td></tr>
            <tr><td><code>.avatar</code></td><td>Rounded user avatar container with group overlapping support</td></tr>
            <tr><td><code>[data-tooltip]</code></td><td>Instant CSS-only floating tooltip on hover</td></tr>
          </tbody>
        </table>
      </article>

      <article className="border rounded-xl p-6 mb-6 bg-surface shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">Explore Blue Bird CSS Features</h2>
        <p className="text-muted mb-4">Explore our comprehensive set of UI components, layout tools, and framework guides:</p>

        <div className="grid cols-2 gap-4 my-4">
          <div className="border p-4 rounded-lg bg-background">
            <h3 className="font-bold text-lg mb-1">Next.js Integration</h3>
            <p className="text-sm text-secondary mb-3">Complete guide for zero-config Next.js (App Router &amp; Pages Router) integration.</p>
            <a href="#/nextjs" className="btn-subtle-blue px-3 py-1 text-sm font-medium inline-block">Read Next.js Guide &rarr;</a>
          </div>
          <div className="border p-4 rounded-lg bg-background">
            <h3 className="font-bold text-lg mb-1">Touch Carousel</h3>
            <p className="text-sm text-secondary mb-3">Mobile-first touch swipe &amp; autoplay card carousels for modern web apps.</p>
            <a href="#/carousel" className="btn-subtle-purple px-3 py-1 text-sm font-medium inline-block">Explore Carousel &rarr;</a>
          </div>
          <div className="border p-4 rounded-lg bg-background">
            <h3 className="font-bold text-lg mb-1">4-Direction Drawers</h3>
            <p className="text-sm text-secondary mb-3">Slide-out panels from left, right, top, or bottom with auto-mobile navigation support.</p>
            <a href="#/aside-drawer" className="btn-subtle-green px-3 py-1 text-sm font-medium inline-block">Explore Drawers &rarr;</a>
          </div>
          <div className="border p-4 rounded-lg bg-background">
            <h3 className="font-bold text-lg mb-1">CSS Animations</h3>
            <p className="text-sm text-secondary mb-3">Spin, bounce, pulse, float, slide, shimmer, and cyberpunk glow animations.</p>
            <a href="#/animations" className="btn-subtle-pink px-3 py-1 text-sm font-medium inline-block">Explore Animations &rarr;</a>
          </div>
        </div>
      </article>
    </>
  );
}

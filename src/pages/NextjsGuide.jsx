import CodeBlock from '../components/CodeBlock';

/**
 * Next.js Integration Guide documentation page component
 * @returns {JSX.Element} The rendered NextjsGuide page
 */
export default function NextjsGuide() {
  return (
    <article className="border rounded-xl p-6 mb-6 bg-surface shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Next.js Integration Guide</h2>
      <p className="text-secondary mb-4">
        Blue Bird CSS works seamlessly with <strong>Next.js (App Router &amp; Pages Router)</strong> out of the box with zero build step, zero Tailwind configuration, and full SSR compatibility.
      </p>

      {/* App Router (Next.js 13/14/15) */}
      <h3 className="text-xl font-bold mt-6 mb-2">1. App Router Setup (app/layout.jsx)</h3>
      <p className="text-muted mb-3">
        Copy <code>bluebird.css</code> and <code>bluebird.js</code> into your <code>public/</code> folder or <code>styles/</code> folder, then import CSS in your root <code>layout.jsx</code>:
      </p>

      <CodeBlock language="jsx">
{`// app/layout.jsx
import Script from 'next/script';
import '@/public/bluebird.css'; // Or copy to app/globals.css

export const metadata = {
  title: 'My Next.js Blue Bird App',
  description: 'Built with Blue Bird CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <header className="sticky top-0 z-50 bg-surface border-b">
          <nav className="flex items-center justify-between py-3">
            <h2 className="font-bold text-xl">Next.js + Blue Bird</h2>
            <div className="flex items-center gap-2">
              <button className="bg-primary-subtle">Dashboard</button>
              <button className="primary">Sign In</button>
            </div>
          </nav>
        </header>

        <main>
          {children}
        </main>

        {/* Load Blue Bird JS Helper for Drawers, Snackbar, Touch Carousels */}
        <Script src="/bluebird.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}`}
      </CodeBlock>

      {/* Pages Router */}
      <h3 className="text-xl font-bold mt-8 mb-2">2. Pages Router Setup (pages/_app.jsx)</h3>
      <p className="text-muted mb-3">
        If you are using Next.js Pages Router, simply import <code>bluebird.css</code> in <code>_app.jsx</code>:
      </p>

      <CodeBlock language="jsx">
{`// pages/_app.jsx
import Script from 'next/script';
import '../styles/bluebird.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="/bluebird.js" strategy="lazyOnload" />
    </>
  );
}`}
      </CodeBlock>

      {/* Next.js Component Example */}
      <h3 className="text-xl font-bold mt-8 mb-2">3. Next.js React Component Example</h3>
      <p className="text-muted mb-3">
        Use Blue Bird semantic classes &amp; utilities directly inside Server or Client Components without needing <code>use client</code> for pure CSS:
      </p>

      <CodeBlock language="jsx">
{`// app/page.jsx (Server Component)
export default function HomePage() {
  return (
    <article className="border rounded-xl p-8 bg-surface">
      <span className="badge badge-primary mb-3">Next.js Ready</span>
      <h1 className="text-3xl font-bold">Fast &amp; Modern UI with Zero Overhead</h1>
      <p className="text-secondary my-4">
        Blue Bird CSS provides semantic HTML styling out of the box.
      </p>

      <div className="flex items-center gap-3 flex-wrap my-4">
        <button className="bg-blue-subtle">Blue Soft Button</button>
        <button className="bg-purple-subtle">Purple Soft Button</button>
        <button className="glow-cyberpunk">Cyberpunk Neon</button>
      </div>

      <div className="floating-fill mt-6">
        <input type="text" id="email" placeholder=" " />
        <label htmlFor="email">Your Email Address</label>
      </div>
    </article>
  );
}`}
      </CodeBlock>

      {/* Dark Mode Handling in Next.js */}
      <h3 className="text-xl font-bold mt-8 mb-2">4. Dynamic Dark Mode Toggle in Next.js</h3>
      <CodeBlock language="jsx">
{`'use client';
import { useState } from 'react';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    setIsDark(!isDark);
  };

  return (
    <button className="secondary" onClick={toggleTheme}>
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}`}
      </CodeBlock>
    </article>
  );
}

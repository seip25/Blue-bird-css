import React from 'react';
import CodeBlock from '../components/CodeBlock';

/**
 * Next.js & React Integration documentation page for Blue Bird CSS
 * @returns {JSX.Element} The rendered Next.js documentation page
 */
export default function NextjsDoc() {
  return (
    <div className="container py-6">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="badge bg-primary text-on-primary">Next.js & React</span>
          <span className="badge badge-secondary">Official Integration Guide</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Next.js & React Integration</h1>
        <p className="lead mt-2">
          Step-by-step basic and advanced guide to using <strong>Blue Bird CSS</strong> in Next.js (App Router & Pages Router) and React projects with first-class Tailwind parity, semantic HTML, and pre-built <code>'use client'</code> components.
        </p>
      </div>

      {/* --- SECTION 1: BASIC SETUP --- */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Installation & Basic Setup</h2>
        <p className="mb-4">
          Install the official Blue Bird CSS package from npm:
        </p>
        <CodeBlock language="bash">
          npm install @seip/blue-bird-css
        </CodeBlock>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Next.js App Router (<code>app/layout.tsx</code>)</h3>
          <p className="text-secondary mb-3">
            Import the minified stylesheet directly into your Root Layout:
          </p>
          <CodeBlock language="tsx">
            {`// app/layout.tsx
import type { Metadata } from 'next';
import '@seip/blue-bird-css/css'; // Imports all tokens, components

export const metadata: Metadata = {
  title: 'My Blue Bird App',
  description: 'Fast, semantic web application styled with Blue Bird CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}
          </CodeBlock>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Next.js Pages Router (<code>pages/_app.tsx</code>)</h3>
          <p className="text-secondary mb-3">
            Import the stylesheet once inside your custom App component:
          </p>
          <CodeBlock language="tsx">
            {`// pages/_app.tsx
import type { AppProps } from 'next/app';
import '@seip/blue-bird-css/css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}`}
          </CodeBlock>
        </div>
      </section>

      {/* --- SECTION 2: CLIENT SCRIPTS & JS INTERACTIVITY --- */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. JavaScript Interactivity via Next.js <code>&lt;Script /&gt;</code></h2>
        <p className="mb-4">
          If you want to use Blue Bird's built-in Vanilla JS engine (toasts, command palette with <kbd>Ctrl+K</kbd>, responsive mobile drawer, and touch carousel) via CDN or static asset, use Next.js's native <code>Script</code> component:
        </p>

        <CodeBlock language="tsx">
          {`// app/layout.tsx
import Script from 'next/script';
import '@seip/blue-bird-css/css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Option A: Via jsDelivr CDN */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@seip/blue-bird-css/dist/bluebird.min.js"
          strategy="afterInteractive"
        />

        {/* Option B: Local static file from /public/ */}
        {/* <Script src="/bluebird.min.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}`}
        </CodeBlock>
      </section>

      {/* --- SECTION 3: ADVANCED REACT / NEXT.JS MODULE --- */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Advanced Integration with <code>@seip/blue-bird-css/react</code></h2>
        <p className="mb-4">
          Blue Bird CSS includes a first-class React submodule with a zero-boilerplate <strong>ThemeProvider</strong>, a pre-built <strong>ThemeToggle</strong> button with SVG icons, <strong>SSR-safe hooks</strong>, and typed components marked with <code>'use client'</code>:
        </p>

        <div className="card p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3">A. Configure ThemeProvider in App Router</h3>
          <p className="text-secondary mb-4">
            Wrap your application in <code>ThemeProvider</code> to enable instant, flicker-free switching between Light, Dark, and OS System preference:
          </p>
          <CodeBlock language="tsx">
            {`// app/layout.tsx
import '@seip/blue-bird-css/css';
import { ThemeProvider } from '@seip/blue-bird-css/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="app-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}
          </CodeBlock>
        </div>

        <div className="card p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3">B. Dark Mode Toggle Button (<code>ThemeToggle</code>)</h3>
          <p className="text-secondary mb-4">
            Drop the pre-styled toggle button with animated Sun and Moon icons directly into your navigation bar:
          </p>
          <CodeBlock language="tsx">
            {`// components/Navbar.tsx
'use client';

import { ThemeToggle } from '@seip/blue-bird-css/react';

export function Navbar() {
  return (
    <header className="glass border-b py-3 px-6 flex items-center justify-between sticky top-0 z-50">
      <span className="font-bold text-lg">My Application</span>
      
      <div className="flex items-center gap-3">
        <ThemeToggle showLabel={false} ariaLabel="Toggle theme" />
      </div>
    </header>
  );
}`}
          </CodeBlock>
        </div>

        <div className="card p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3">C. Notification Hooks (<code>useToast</code> &amp; <code>useSnackbar</code>)</h3>
          <p className="text-secondary mb-4">
            Trigger toasts and snackbars from any client component without hydration mismatches or SSR errors:
          </p>
          <CodeBlock language="tsx">
            {`// app/page.tsx
'use client';

import { useToast, useSnackbar, Button } from '@seip/blue-bird-css/react';

export default function HomePage() {
  const { toast } = useToast();
  const { snackbar } = useSnackbar();

  const handleSave = () => {
    toast({
      title: 'Changes saved successfully!',
      description: 'Your profile settings have been updated.',
      type: 'success',
    });
  };

  const handleInfo = () => {
    snackbar('Syncing with server...', 'info');
  };

  return (
    <main className="container py-8 space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="flex gap-3">
        <Button variant="primary" onClick={handleSave}>
          Save Settings
        </Button>
        <Button variant="secondary" onClick={handleInfo}>
          Check Status
        </Button>
      </div>
    </main>
  );
}`}
          </CodeBlock>
        </div>
      </section>

      {/* --- SECTION 4: TAILWIND ➡️ BLUE BIRD CSS TRANSITION --- */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Tailwind CSS ➡️ Blue Bird CSS Parity Guide</h2>
        <p className="mb-4">
          Over <strong>88%+</strong> of standard Tailwind utility classes work identically in Blue Bird CSS. You can write your layouts exactly as you would with Tailwind, while taking advantage of Blue Bird's built-in semantic styling:
        </p>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Tailwind CSS Utility</th>
                <th>Blue Bird CSS Class</th>
                <th>Support Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>flex flex-col md:flex-row items-center justify-between gap-4</code></td>
                <td><code>flex flex-col md:flex-row items-center justify-between gap-4</code></td>
                <td><span className="badge bg-green-500 text-white">100% Identical</span></td>
              </tr>
              <tr>
                <td><code>grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6</code></td>
                <td><code>grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6</code></td>
                <td><span className="badge bg-green-500 text-white">100% Identical</span></td>
              </tr>
              <tr>
                <td><code>text-xs, text-sm, text-base, text-xl, text-3xl</code></td>
                <td><code>text-xs, text-sm, text-base, text-xl, text-3xl</code></td>
                <td><span className="badge bg-green-500 text-white">100% Identical</span></td>
              </tr>
              <tr>
                <td><code>font-light, font-normal, font-semibold, font-bold</code></td>
                <td><code>font-light, font-normal, font-semibold, font-bold</code></td>
                <td><span className="badge bg-green-500 text-white">100% Identical</span></td>
              </tr>
              <tr>
                <td><code>max-w-md, max-w-xl, max-w-4xl, max-w-full</code></td>
                <td><code>max-w-md, max-w-xl, max-w-4xl, max-w-full</code></td>
                <td><span className="badge bg-green-500 text-white">100% Identical</span></td>
              </tr>
              <tr>
                <td><code>min-h-screen, h-screen, w-full, w-1/2</code></td>
                <td><code>min-h-screen, h-screen, w-full, w-1/2</code></td>
                <td><span className="badge bg-green-500 text-white">100% Identical</span></td>
              </tr>
              <tr>
                <td><code>space-y-4, space-x-2, divide-y</code></td>
                <td><code>space-y-4, space-x-2, divide-y</code></td>
                <td><span className="badge bg-green-500 text-white">100% Identical</span></td>
              </tr>
              <tr>
                <td><code>opacity-0, opacity-50, opacity-100</code></td>
                <td><code>opacity-0, opacity-50, opacity-100</code></td>
                <td><span className="badge bg-green-500 text-white">100% Identical</span></td>
              </tr>
              <tr>
                <td><code>sm:hidden, md:block, lg:flex</code></td>
                <td><code>sm:hidden, md:block, lg:flex</code></td>
                <td><span className="badge bg-green-500 text-white">100% Identical</span></td>
              </tr>
              <tr>
                <td><code>sr-only, not-sr-only</code></td>
                <td><code>sr-only, not-sr-only</code></td>
                <td><span className="badge bg-green-500 text-white">100% Identical</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- SECTION 5: NATIVE SEMANTIC HTML --- */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Native Semantic HTML + Blue Bird Utilities</h2>
        <p className="mb-4">
          Unlike pure utility-only frameworks that require verbose class names on every element, Blue Bird styles semantic HTML5 elements cleanly out of the box while letting you compose utilities when needed:
        </p>

        <CodeBlock language="tsx">
          {`// Next.js component combining semantic HTML with Blue Bird utilities
export function ProfileCard() {
  return (
    <article className="card p-6 max-w-md mx-auto hover-lift">
      <header className="flex items-center gap-4 mb-4">
        <figure className="size-12 rounded-full overflow-hidden border">
          <img src="/avatar.jpg" alt="User avatar" className="object-cover size-full" />
        </figure>
        <div>
          <h3 className="font-semibold text-lg">Alex Rivera</h3>
          <time dateTime="2026-09-28" className="text-xs text-secondary">
            Joined 2 weeks ago
          </time>
        </div>
      </header>

      <section className="space-y-3">
        <p className="text-sm text-secondary">
          Frontend engineer passionate about modern UI/UX design and accessible web standards.
        </p>

        {/* Native <progress> element styled automatically */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span>Profile completion</span>
            <span className="font-semibold">80%</span>
          </div>
          <progress value="80" max="100" />
        </div>
      </section>

      <footer className="mt-6 pt-4 border-t flex justify-end gap-2">
        <button className="secondary text-sm">Message</button>
        <button className="text-sm">Follow</button>
      </footer>
    </article>
  );
}`}
        </CodeBlock>
      </section>

      {/* --- SECTION 6: NEXT.CONFIG CONFIGURATION --- */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. Recommended Next.js Configuration</h2>
        <p className="mb-4">
          To ensure Next.js optimizes and transpiles the package imports seamlessly:
        </p>
        <CodeBlock language="javascript">
          {`// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpiles the package if using direct workspace or monorepo links
  transpilePackages: ['@seip/blue-bird-css'],
};

export default nextConfig;`}
        </CodeBlock>
      </section>
    </div>
  );
}

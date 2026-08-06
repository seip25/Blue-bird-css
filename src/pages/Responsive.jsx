import CodeBlock from '../components/CodeBlock';

export default function Responsive() {
  return (
    <article>
      <h2>Responsive Visibility</h2>
      <p>
        Show or hide elements based on screen size. Three breakpoints:
        <strong> SM</strong> (≤640px), <strong>MD</strong> (641–1024px), <strong>LG</strong> (≥1025px).
      </p>

      <h3>Show on Specific Screens</h3>
      <p>Elements with <code>.visible-*</code> are hidden by default and shown only at that breakpoint:</p>
      <div className="example">
        <div className="card bg-green text-white text-center visible-sm p-4">Visible on SM (&le;640px)</div>
        <div className="card bg-blue text-white text-center visible-md p-4">Visible on MD (641–1024px)</div>
        <div className="card bg-violet text-white text-center visible-lg p-4">Visible on LG (&ge;1025px)</div>
      </div>
      <CodeBlock language="html">
{`<!-- Show ONLY on mobile -->
<div class="visible-sm">Mobile only</div>

<!-- Show ONLY on tablet -->
<div class="visible-md">Tablet only</div>

<!-- Show ONLY on desktop -->
<div class="visible-lg">Desktop only</div>`}
      </CodeBlock>

      <h3>Hide on Specific Screens</h3>
      <p>Elements with <code>.hidden-*</code> are visible by default and hidden at that breakpoint:</p>
      <div className="example">
        <div className="card bg-red text-white text-center hidden-sm p-4">Hidden on SM (visible now on MD/LG)</div>
        <div className="card bg-yellow text-center hidden-md p-4">Hidden on MD (visible now on SM/LG)</div>
        <div className="card bg-surface text-center hidden-lg p-4">Hidden on LG (visible now on SM/MD)</div>
      </div>
      <CodeBlock language="html">
{`<!-- Hide on mobile -->
<div class="hidden-sm">Hidden on mobile</div>

<!-- Hide on tablet -->
<div class="hidden-md">Hidden on tablet</div>

<!-- Hide on desktop -->
<div class="hidden-lg">Hidden on desktop</div>`}
      </CodeBlock>

      <h3>Breakpoint Reference</h3>
      <table>
        <thead>
          <tr><th>Breakpoint</th><th>Range</th><th>Show class</th><th>Hide class</th></tr>
        </thead>
        <tbody>
          <tr><td>SM (Mobile)</td><td>≤ 640px</td><td><code>.visible-sm</code></td><td><code>.hidden-sm</code></td></tr>
          <tr><td>MD (Tablet)</td><td>641 – 1024px</td><td><code>.visible-md</code></td><td><code>.hidden-md</code></td></tr>
          <tr><td>LG (Desktop)</td><td>≥ 1025px</td><td><code>.visible-lg</code></td><td><code>.hidden-lg</code></td></tr>
        </tbody>
      </table>

      <h3>Common Patterns</h3>
      <CodeBlock language="html">
{`<!-- Mobile menu button, hidden on desktop -->
<button class="visible-sm">☰ Menu</button>

<!-- Desktop sidebar, hidden on mobile -->
<aside class="hidden-sm">...</aside>

<!-- Show different content per device -->
<img class="visible-sm" src="mobile-hero.jpg">
<img class="hidden-sm" src="desktop-hero.jpg">`}
      </CodeBlock>

      <h3>CSS Applied</h3>
      <CodeBlock language="css">
{`/* Hidden by default, shown at breakpoint */
.visible-sm, .visible-md, .visible-lg {
  display: none !important;
}

@media (max-width: 640px) {
  .visible-sm { display: initial !important; }
  .hidden-sm  { display: none !important; }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .visible-md { display: initial !important; }
  .hidden-md  { display: none !important; }
}

@media (min-width: 1025px) {
  .visible-lg { display: initial !important; }
  .hidden-lg  { display: none !important; }
}`}
      </CodeBlock>
    </article>
  );
}

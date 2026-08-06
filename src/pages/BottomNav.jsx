import CodeBlock from '../components/CodeBlock';

export default function BottomNav() {
  return (
    <article>
      <h2>Bottom Navigation Bar</h2>
      <p>
        A mobile-friendly bottom navigation bar that stays fixed to the bottom of the page.
        Ideal for mobile apps or PWAs. Combine with <code>.visible-sm</code> to show only on mobile.
      </p>

      <h3>Basic Usage</h3>
      <CodeBlock language="html">
{`<nav class="bottom-nav">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/search">Search</a></li>
    <li><a href="/cart">Cart</a></li>
    <li><a href="/account">Account</a></li>
  </ul>
</nav>`}
      </CodeBlock>

      <h3>Mobile Only</h3>
      <p>
        Add <code>.visible-sm</code> to show the bottom nav only on small screens:
      </p>
      <CodeBlock language="html">
{`<nav class="bottom-nav visible-sm">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/search">Search</a></li>
    <li><a href="/cart">Cart</a></li>
    <li><a href="/account">Account</a></li>
  </ul>
</nav>`}
      </CodeBlock>

      <h3>FAB + Bottom Nav</h3>
      <p>
        When a <code>.bottom-nav</code> exists on the page, the FAB (Floating Action Button)
        automatically shifts upward so they don't overlap:
      </p>
      <CodeBlock language="html">
{`<!-- FAB auto-adjusts when bottom-nav is present -->
<button class="fab">+</button>

<nav class="bottom-nav">
  <ul>...</ul>
</nav>`}
      </CodeBlock>

      <h3>CSS Applied</h3>
      <CodeBlock language="css">
{`.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--surface);
  padding: 1rem;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.bottom-nav > ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
}

/* FAB adjusts when bottom-nav present */
body:has(.bottom-nav) .fab {
  bottom: 6rem;
}

/* Body padding to prevent content hiding */
@media (max-width: 768px) {
  body { padding-bottom: 80px; }
}`}
      </CodeBlock>
    </article>
  );
}

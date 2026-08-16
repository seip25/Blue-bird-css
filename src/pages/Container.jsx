import CodeBlock from '../components/CodeBlock';

export default function Container() {
  return (
    <article>
      <h2>Container</h2>
      <p>
        The <code>.container</code> class centers content with a responsive max-width.
        However, <strong>in Blue Bird CSS, you rarely need it</strong> — <code>&lt;main&gt;</code>,
        <code>&lt;header &gt; nav&gt;</code>, and <code>&lt;footer&gt;</code> automatically
        apply container behavior.
      </p>

      <h3>Automatic Containers</h3>
      <p>These elements are containers by default — no class needed:</p>
      <CodeBlock language="html">
{`<!-- These are all automatically centered/constrained -->
<header>
  <nav>My App</nav>  <!-- container behavior -->
</header>
<main>...</main>      <!-- container behavior -->
<footer>...</footer>  <!-- container behavior -->`}
      </CodeBlock>

      <h3>Manual Container</h3>
      <p>Use <code>.container</code> when you need container behavior on other elements:</p>
      <CodeBlock language="html">
{`<div class="container">
  Your content here...
</div>`}
      </CodeBlock>

      <h3>Responsive Breakpoints</h3>
      <table>
        <thead>
          <tr>
            <th>Breakpoint</th>
            <th>Max-width</th>
            <th>Padding</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>≤ 768px</td>
            <td>100%</td>
            <td>0.5rem</td>
          </tr>
          <tr>
            <td>769px — 1440px</td>
            <td>100%</td>
            <td>1rem</td>
          </tr>
          <tr>
            <td>≥ 1440px</td>
            <td>95%</td>
            <td>1rem</td>
          </tr>
        </tbody>
      </table>

      <h3>CSS Definition</h3>
      <CodeBlock language="css">
{`.container {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Same rules apply to main and header > nav */
main, header > nav {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .container, main, header > nav {
    padding: 0 0.5rem;
  }
}

@media (max-width: 1440px) {
  .container, main, header > nav {
    max-width: 100%;
  }
}

@media (min-width: 1440px) {
  .container, main, header > nav {
    max-width: 95%;
  }
}`}
      </CodeBlock>
    </article>
  );
}

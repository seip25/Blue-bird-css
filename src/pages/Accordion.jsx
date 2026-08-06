import CodeBlock from '../components/CodeBlock';

export default function Accordion() {
  return (
    <article>
      <h2>Accordion</h2>
      <p>
        A fully semantic accordion using native <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> elements.
        No JavaScript required — it works purely with HTML.
      </p>

      <h3>Basic Accordion</h3>
      <div className="example">
        <details>
          <summary>What is Blue Bird CSS?</summary>
          <p>Blue Bird CSS is a semantic CSS framework inspired by Pico.css, Material Design and shadcn/ui. It makes your HTML look great with pure semantic HTML tags.</p>
        </details>
        <details>
          <summary>Do I need JavaScript?</summary>
          <p>For basic styling, no. Blue Bird CSS handles everything natively. BlueBird.js adds optional features like ripples, snackbars, toasts, and mobile drawer.</p>
        </details>
        <details>
          <summary>Is it responsive?</summary>
          <p>Yes! Grids collapse on mobile, aside becomes a slide-out drawer, and all elements adapt to screen size.</p>
        </details>
      </div>
      <CodeBlock language="html">
{`<details>
  <summary>What is Lila CSS?</summary>
  <p>Answer goes here...</p>
</details>

<details>
  <summary>Do I need JavaScript?</summary>
  <p>Answer goes here...</p>
</details>`}
      </CodeBlock>

      <h3>Open by Default</h3>
      <p>Add the <code>open</code> attribute to expand an item by default:</p>
      <div className="example">
        <details open>
          <summary>This is open by default</summary>
          <p>This content is visible when the page loads. The user can click to collapse it.</p>
        </details>
      </div>
      <CodeBlock language="html">
{`<details open>
  <summary>Open by default</summary>
  <p>Visible content...</p>
</details>`}
      </CodeBlock>

      <h3>CSS Applied</h3>
      <CodeBlock language="css">
{`details {
  background-color: var(--background);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 1rem;
  margin-bottom: 1rem;
}

details > summary {
  cursor: pointer;
  font-weight: 500;
}

details[open] > summary {
  margin-bottom: 0.5rem;
}`}
      </CodeBlock>
    </article>
  );
}

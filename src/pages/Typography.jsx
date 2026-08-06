import CodeBlock from '../components/CodeBlock';

export default function Typography() {
  return (
    <article>
      <h2>Typography</h2>
      <p>
        All text elements are styled semantically — just use standard HTML tags.
        No classes needed for basic typography.
      </p>

      <h3>Headings</h3>
      <div className="example">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>
      <CodeBlock language="html">
{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
      </CodeBlock>

      <h3>Inline Text Elements</h3>
      <div className="example">
        <p>Regular paragraph text with <strong>bold</strong> and <em>italic</em> content.</p>
        <p>
          Use <mark>marked text</mark> for highlights, <output>Calculated State</output> for form outputs,
          <code>inline code</code> for code snippets, and <kbd>Ctrl</kbd>+<kbd>K</kbd> for keyboard shortcuts.
        </p>
        <p><small>Small text for captions, timestamped <time dateTime="2026-08-06">August 6, 2026</time>.</small></p>
        <p><a href="#">This is a link</a></p>
      </div>
      <CodeBlock language="html">
{`<p>Regular paragraph with <strong>bold</strong> and <em>italic</em>.</p>
<p>Use <mark>marked text</mark>, <output>Form Output</output>, <code>code</code>, and <kbd>Ctrl</kbd>+<kbd>K</kbd>.</p>
<p><small>Small text for fine print on <time datetime="2026-08-06">August 6, 2026</time>.</small></p>
<a href="#">This is a link</a>`}
      </CodeBlock>

      <h3>Blockquote</h3>
      <div className="example">
        <blockquote>
          "Good design is as little design as possible. Less, but better — because it
          concentrates on the essential aspects."
        </blockquote>
      </div>
      <CodeBlock language="html">
{`<blockquote>
  "Good design is as little design as possible."
</blockquote>`}
      </CodeBlock>

      <h3>Lists</h3>
      <div className="example">
        <ul>
          <li>Unordered item 1</li>
          <li>Unordered item 2</li>
          <li>Unordered item 3</li>
        </ul>
        <ol>
          <li>Ordered item 1</li>
          <li>Ordered item 2</li>
          <li>Ordered item 3</li>
        </ol>
      </div>
      <CodeBlock language="html">
{`<ul>
  <li>Unordered item</li>
</ul>
<ol>
  <li>Ordered item</li>
</ol>`}
      </CodeBlock>

      <h3>Horizontal Rule</h3>
      <div className="example">
        <p>Content above</p>
        <hr />
        <p>Content below</p>
      </div>
      <CodeBlock language="html">
{`<hr />`}
      </CodeBlock>

      <h3>Font Utilities</h3>
      <CodeBlock language="html">
{`<span class="font-bold">Bold text</span>
<span class="font-semibold">Semi-bold text</span>
<span class="text-xl">Extra large</span>
<span class="text-center">Centered</span>
<span class="text-muted">Muted color</span>
<span class="text-secondary">Secondary color</span>
<span class="text-success">Success color</span>
<span class="text-error">Error color</span>`}
      </CodeBlock>
    </article>
  );
}

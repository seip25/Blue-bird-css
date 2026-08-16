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

      <h3>Text Gradients</h3>
      <p className="text-secondary mb-3">
        Vibrant multi-stop text gradients designed for hero titles, banners, and feature callouts:
      </p>
      <div className="example flex flex-col gap-3">
        <h2 className="text-3xl font-bold tracking-tight text-gradient">
          Electric Violet Gradient (.text-gradient)
        </h2>
        <h2 className="text-3xl font-bold tracking-tight text-gradient-blue">
          Blue Bird Ocean Gradient (.text-gradient-blue)
        </h2>
        <h2 className="text-3xl font-bold tracking-tight text-gradient-sunset">
          Sunset Radiant Gradient (.text-gradient-sunset)
        </h2>
        <h2 className="text-3xl font-bold tracking-tight text-gradient-emerald">
          Emerald Cyan Gradient (.text-gradient-emerald)
        </h2>
        <h2 className="text-3xl font-bold tracking-tight text-gradient-gold">
          Gold Amber Gradient (.text-gradient-gold)
        </h2>
        <h2 className="text-3xl font-bold tracking-tight text-gradient-dark">
          Monochrome Steel Gradient (.text-gradient-dark)
        </h2>
      </div>
      <CodeBlock language="html">
{`<h1 class="text-gradient">Electric Violet</h1>
<h1 class="text-gradient-blue">Blue Bird Ocean</h1>
<h1 class="text-gradient-sunset">Sunset Radiant</h1>
<h1 class="text-gradient-emerald">Emerald Cyan</h1>
<h1 class="text-gradient-gold">Gold Amber</h1>
<h1 class="text-gradient-dark">Monochrome Steel</h1>`}
      </CodeBlock>

      <h3>Modern Typography Utilities</h3>
      <div className="example flex flex-col gap-4">
        <div>
          <h4 className="text-xs font-semibold uppercase text-muted mb-1">Text Balance &amp; Text Pretty</h4>
          <p className="text-balance text-lg font-medium">
            This headline uses <kbd>.text-balance</kbd> to evenly distribute line breaks across each row without leaving single orphan words at the end.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase text-muted mb-1">Truncate &amp; Line Clamping</h4>
          <p className="truncate border p-2 rounded-lg bg-secondary max-w-sm">
            This long text will automatically truncate with an ellipsis when overflowing: https://github.com/seip25/Blue-bird-css/releases/tag/v1.0.0
          </p>
          <p className="line-clamp-2 border p-2 rounded-lg bg-secondary mt-2">
            This paragraph uses <kbd>.line-clamp-2</kbd> so any text beyond two lines is cleanly clamped with an ellipsis at the end, perfect for card descriptions and preview snippets in dashboards.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase text-muted mb-1">Letter Spacing (Tracking) &amp; Fonts</h4>
          <div className="flex flex-col gap-1">
            <span className="tracking-tight font-semibold">Tight letter spacing (.tracking-tight)</span>
            <span className="tracking-wide uppercase text-xs font-bold text-muted">Wide letter spacing (.tracking-wide)</span>
            <span className="font-mono text-sm">Monospace code font family (.font-mono)</span>
          </div>
        </div>
      </div>
      <CodeBlock language="html">
{`<!-- Balanced & Pretty Text Wrapping -->
<h1 class="text-balance">Headline with balanced lines</h1>
<p class="text-pretty">Paragraph with orphan prevention</p>

<!-- Truncate & Clamping -->
<p class="truncate">Single line ellipsis...</p>
<p class="line-clamp-2">Clamp at 2 lines...</p>
<p class="line-clamp-3">Clamp at 3 lines...</p>

<!-- Letter Spacing & Monospace -->
<h2 class="tracking-tight">Tight heading</h2>
<span class="tracking-widest uppercase">Wide label</span>
<code class="font-mono">monospace text</code>`}
      </CodeBlock>

      <h3>Font &amp; Color Utilities</h3>
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

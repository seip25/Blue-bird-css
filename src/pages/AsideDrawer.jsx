import CodeBlock from '../components/CodeBlock';

/**
 * Aside & Drawer navigation documentation page component
 * @returns {JSX.Element} The rendered AsideDrawer page
 */
export default function AsideDrawer() {
  return (
    <>
      <article className="glass p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">Aside &amp; Drawer</h2>
        <p className="text-secondary mb-4">
          Blue Bird CSS provides native <code>&lt;aside&gt;</code> support inside <code>&lt;main&gt;</code>.
          On desktop, the aside acts as a sticky sidebar. On mobile screens (&lt;768px), the aside
          automatically hides and a slide-in drawer appears via <code>bluebird.js</code>.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Basic Usage</h3>
        <p className="mb-3">
          Simply place an <code>&lt;aside&gt;</code> as a direct child of <code>&lt;main&gt;</code>,
          followed by any content element:
        </p>
        <CodeBlock language="html">
{`<main>
  <aside>
    <h4>Navigation</h4>
    <a href="/page1">Page 1</a>
    <a href="/page2">Page 2</a>
    <a href="/page3">Page 3</a>
  </aside>
  <div>
    <h1>Page Title</h1>
    <p>Content goes here...</p>
  </div>
</main>`}
        </CodeBlock>

        <h3 className="text-xl font-bold mt-6 mb-2">Automatic Mobile Drawer</h3>
        <CodeBlock language="html">
{`<!-- Include bluebird.js for automatic drawer initialization -->
<script src="bluebird.js"><\/script>`}
        </CodeBlock>
      </article>
    </>
  );
}

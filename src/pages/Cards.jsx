import CodeBlock from '../components/CodeBlock';

/**
 * Cards documentation page component displaying standard cards, glassmorphic cards and glow effects
 * @returns {JSX.Element} The rendered Cards page
 */
export default function Cards() {
  return (
    <article className="glass p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-2">Card / Content Block</h2>
      <p className="text-secondary mb-4">
        Semantic <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>.card</code>, and modern <code>.glass-card</code> variants.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2">Glassmorphism &amp; Glow Cards</h3>
      <div className="example grid cols-2 gap-4">
        <article className="glass-card hover-lift border-glow p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="avatar avatar-sm">AI</span>
            <span className="badge badge-glow">Gemini Aesthetic</span>
          </div>
          <h4 className="text-gradient text-xl font-bold">Glassmorphic Card</h4>
          <p className="text-secondary">Subtle blur backdrop filter with smooth borders and glow effects.</p>
        </article>

        <article className="glass-card glow-purple hover-lift p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="badge badge-secondary">Purple Glow</span>
          </div>
          <h4 className="text-xl font-bold">Glow Purple Variant</h4>
          <p className="text-secondary">Glowing shadow borders for key highlight elements and dashboards.</p>
        </article>
      </div>
      <CodeBlock language="html">
{`<!-- Glassmorphic Card -->
<article class="glass-card border-glow p-5">
  <div class="flex items-center gap-2 mb-2">
    <span class="avatar avatar-sm">AI</span>
    <span class="badge badge-glow">Gemini Aesthetic</span>
  </div>
  <h4 class="text-gradient">Glassmorphic Card</h4>
  <p>Content...</p>
</article>

<!-- Glow Purple Variant -->
<article class="glass-card glow-purple p-5">
  <h4 class="text-xl font-bold">Glow Purple</h4>
  <p>Content...</p>
</article>`}
      </CodeBlock>

      <h3 className="text-xl font-bold mt-6 mb-2">Semantic Cards</h3>
      <div className="example grid cols-2 gap-4">
        <article className="hover-lift">
          <h4>Article Card</h4>
          <p>Self-contained content block using <code>&lt;article&gt;</code>.</p>
        </article>
        <section className="hover-lift">
          <h4>Section Card</h4>
          <p>A thematic grouping using <code>&lt;section&gt;</code>.</p>
        </section>
      </div>
      <CodeBlock language="html">
{`<article>
  <h4>Article Card</h4>
  <p>Content...</p>
</article>

<section>
  <h4>Section Card</h4>
  <p>Content...</p>
</section>`}
      </CodeBlock>
    </article>
  );
}

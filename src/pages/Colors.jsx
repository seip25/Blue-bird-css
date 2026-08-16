import CodeBlock from '../components/CodeBlock';

const colorFamilies = [
  { name: 'gray', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'red', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'yellow', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'green', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'blue', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'indigo', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'violet', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
];

export default function Colors() {
  return (
    <article>
      <h2>Color Utilities</h2>
      <p>
        Blue Bird CSS provides three levels of color utilities: <strong>semantic</strong> (theme-aware),
        <strong>shorthand</strong> (use -500 shade), and <strong>full palette</strong> (all shades).
      </p>

      <h3>Semantic Colors</h3>
      <p>These adapt automatically to light/dark theme:</p>
      <div className="example">
        <div className="grid cols-2">
          <div className="card bg-primary text-center"><p>bg-primary</p></div>
          <div className="card bg-secondary text-center"><p>bg-secondary</p></div>
          <div className="card bg-background text-center"><p>bg-background</p></div>
          <div className="card bg-surface text-center"><p>bg-surface</p></div>
        </div>
      </div>
      <CodeBlock language="html">
{`<!-- Background -->
<div class="bg-primary">...</div>
<div class="bg-secondary">...</div>
<div class="bg-background">...</div>
<div class="bg-surface">...</div>

<!-- Text -->
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-muted">Muted text</p>
<p class="text-success">Success text</p>
<p class="text-error">Error text</p>`}
      </CodeBlock>

      <h3>Shorthand Colors</h3>
      <p>
        Quick access to the <code>-500</code> shade of each color. Perfect for buttons, badges, and highlights:
      </p>
      <div className="example">
        <div className="flex flex-wrap gap-2">
          <span className="card bg-red text-center p-2">bg-red</span>
          <span className="card bg-blue text-center p-2">bg-blue</span>
          <span className="card bg-green text-center p-2">bg-green</span>
          <span className="card bg-yellow text-center p-2">bg-yellow</span>
          <span className="card bg-indigo text-center p-2">bg-indigo</span>
          <span className="card bg-violet text-center p-2">bg-violet</span>
          <span className="card bg-gray text-center p-2">bg-gray</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="text-red font-bold">text-red</span>
          <span className="text-blue font-bold">text-blue</span>
          <span className="text-green font-bold">text-green</span>
          <span className="text-yellow font-bold">text-yellow</span>
          <span className="text-indigo font-bold">text-indigo</span>
          <span className="text-violet font-bold">text-violet</span>
          <span className="text-gray font-bold">text-gray</span>
        </div>
      </div>
      <CodeBlock language="html">
{`<!-- Shorthand backgrounds (uses -500 shade) -->
<div class="bg-red">...</div>
<div class="bg-blue">...</div>
<div class="bg-green">...</div>
<div class="bg-yellow">...</div>

<!-- Shorthand text colors (uses -500 shade) -->
<span class="text-red">Red text</span>
<span class="text-blue">Blue text</span>
<span class="text-green">Green text</span>

<!-- Works on buttons too -->
<button class="bg-blue">Blue Button</button>
<button class="outline text-red">Red Outline</button>`}
      </CodeBlock>

      <h3>Full Palette</h3>
      <p>Use any shade from 50–900. Format: <code>.bg-{'{color}'}-{'{shade}'}</code> or <code>.text-{'{color}'}-{'{shade}'}</code></p>
      {colorFamilies.map((family) => (
        <div key={family.name}>
          <h4 className="mt-4" style={{ textTransform: 'capitalize' }}>{family.name}</h4>
          <div className="grid cols-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))' }}>
            {family.shades.map((shade) => (
              <div
                key={shade}
                className={`card bg-${family.name}-${shade} text-center p-2`}
                style={{ marginBottom: '0.25rem' }}
              >
                <small className={`text-${family.name}-${shade >= 500 ? '50' : '900'}`}>{shade}</small>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h3>Full Palette Usage</h3>
      <CodeBlock language="html">
{`<!-- Background with specific shade -->
<div class="bg-blue-100">Light blue</div>
<div class="bg-blue-500">Medium blue</div>
<div class="bg-blue-900">Dark blue</div>

<!-- Text with specific shade -->
<p class="text-red-600">Red text</p>
<p class="text-green-400">Light green text</p>

<!-- Available colors: gray, red, yellow, green, blue, indigo, violet -->
<!-- Available shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 -->`}
      </CodeBlock>

      <h3>Hover Colors</h3>
      <p>Add hover effects with <code>.hover-bg-*</code> and <code>.hover-text-*</code>:</p>
      <CodeBlock language="html">
{`<div class="hover-bg-blue-50">Hover me (light blue bg)</div>
<div class="hover-bg-red-100">Hover me (light red bg)</div>
<span class="hover-text-blue-50">Hover text</span>`}
      </CodeBlock>
    </article>
  );
}

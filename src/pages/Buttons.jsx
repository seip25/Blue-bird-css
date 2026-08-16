import CodeBlock from '../components/CodeBlock';

/**
 * Buttons documentation page component showing button styles, sizes, subtle variants, link buttons, badges and cyberpunk glow effects
 * @returns {JSX.Element} The rendered Buttons page
 */
export default function Buttons() {
  const handleShowSnackbar = () => {
    if (window.bluebird) {
      window.bluebird('snackbar', {
        message: 'Hello! This is a Blue Bird CSS snackbar.',
        type: 'info',
        duration: 3000,
      });
    }
  };

  return (
    <article className="border rounded-xl p-6 mb-6 bg-surface shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Buttons &amp; Badges</h2>
      <p className="text-secondary mb-4">
        Clean button variants, size utilities (`btn-sm` to `btn-xl`), color shorthand buttons, subtle soft tint buttons, link buttons, pill badges, and Cyberpunk glow buttons.
      </p>

      {/* Core Variants & Sizes */}
      <h3 className="text-xl font-bold mt-6 mb-2">1. Core Button Variants &amp; Sizes</h3>
      <p className="text-muted mb-3">
        Base buttons with optional size utilities: <code>.btn-xs</code>, <code>.btn-sm</code>, <code>.btn-md</code>, <code>.btn-lg</code>, <code>.btn-xl</code>, <code>.btn-icon</code>:
      </p>
      <div className="example border p-4 rounded-xl my-4 flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <button  >Primary</button>
          <button className="secondary hover-lift">Secondary</button>
          <button className="outline hover-lift">Outline</button>
          <button className="destructive hover-lift">Destructive</button>
          <button className="ghost hover-lift">Ghost</button>
        </div>
        <div className="flex items-center gap-3 flex-wrap hover-glow">
          <button className="rounded-full">Rounded</button>
          <button className="rounded-full outline hover-lift" data-tooltip="Rounded full">Rounded</button>
          <button className="rounded-full secondary hover-lift" data-tooltip="Rounded full">Rounded</button>
          <button className="rounded-full destructive hover-lift" data-tooltip="Rounded full">Rounded</button>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button className="primary btn-xs hover-lift">Extra Small (xs)</button>
          <button className="primary btn-sm hover-lift">Small (sm)</button>
          <button className="primary btn-md hover-lift">Medium (md)</button>
          <button className="primary btn-lg hover-lift">Large (lg)</button>
          <button className="primary btn-xl hover-lift">Extra Large (xl)</button>
          <button className="primary btn-icon hover-lift" data-tooltip="Icon Button">+</button>
        </div>
      </div>
      <CodeBlock language="html">
        {`<button >Primary</button>
<button class="secondary ">Secondary</button>
<button class="outline">Outline</button>
<button class="destructive">Destructive</button>
<button class="ghost">Ghost</button>
<button class="primary btn-sm">Small Primary</button>
<button class="secondary btn-md">Medium Secondary</button>
<button class="outline btn-lg">Large Outline</button>
<button class="primary btn-icon">+</button>`}
      </CodeBlock>

      {/* Color Shorthand Buttons */}
      <h3 className="text-xl font-bold mt-6 mb-2">2. Color Shorthand Buttons</h3>
      <p className="text-muted mb-3">
        Solid palette color buttons using <code>.bg-*</code> or <code>.btn-*</code>:
      </p>
      <div className="example border p-4 rounded-xl my-4">
        <div className="flex items-center gap-2 flex-wrap">
          <button className="bg-blue hover-lift">Blue</button>
          <button className="bg-red hover-lift">Red</button>
          <button className="bg-green hover-lift">Green</button>
          <button className="bg-yellow hover-lift">Yellow</button>
          <button className="bg-purple hover-lift">Purple</button>
          <button className="bg-indigo hover-lift">Indigo</button>
          <button className="bg-pink hover-lift">Pink</button>
          <button className="bg-teal hover-lift">Teal</button>
          <button className="bg-orange hover-lift">Orange</button>
          <button className="bg-cyan hover-lift">Cyan</button>
          <button className="bg-lime hover-lift">Lime</button>
          <button className="bg-rose hover-lift">Rose</button>
          <button className="bg-fuchsia hover-lift">Fuchsia</button>
          <button className="bg-emerald hover-lift">Emerald</button>
          <button className="bg-sky hover-lift">Sky</button>
          <button className="bg-amber hover-lift">Amber</button>
        </div>
      </div>
      <CodeBlock language="html">
        {`<button class="bg-blue">Blue</button>
<button class="bg-purple">Purple</button>
<button class="bg-emerald">Emerald</button>
<button class="btn-orange">Orange (btn-orange)</button>`}
      </CodeBlock>

      {/* Subtle / Soft Buttons */}
      <h3 className="text-xl font-bold mt-6 mb-2">3. Subtle / Soft Color Buttons</h3>
      <p className="text-muted mb-3">
        Tailwind-inspired soft tint background buttons with strong accent text (<code>bg-*-subtle</code>, <code>bg-*-100</code>, or <code>btn-subtle-*</code>):
      </p>
      <div className="example border p-4 rounded-xl my-4">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <button className="bg-primary-subtle hover-lift">Primary Subtle</button>
          <button className="bg-blue-subtle hover-lift">Blue Subtle</button>
          <button className="bg-red-subtle hover-lift">Red Subtle</button>
          <button className="bg-green-subtle hover-lift">Green Subtle</button>
          <button className="bg-yellow-subtle hover-lift">Yellow Subtle</button>
          <button className="bg-purple-subtle hover-lift">Purple Subtle</button>
          <button className="bg-pink-subtle hover-lift">Pink Subtle</button>
          <button className="bg-teal-subtle hover-lift">Teal Subtle</button>
          <button className="bg-orange-subtle hover-lift">Orange Subtle</button>
          <button className="bg-cyan-subtle hover-lift">Cyan Subtle</button>
          <button className="bg-emerald-subtle hover-lift">Emerald Subtle</button>
          <button className="bg-sky-subtle hover-lift">Sky Subtle</button>
          <button className="bg-amber-subtle hover-lift">Amber Subtle</button>
        </div>
      </div>
      <CodeBlock language="html">
        {`<button class="bg-primary-subtle">Primary Subtle (bg-primary-subtle)</button>
<button class="bg-blue-subtle">Blue Subtle (bg-blue-100)</button>
<button class="btn-subtle-emerald">Emerald Subtle (btn-subtle-emerald)</button>
<button class="btn-subtle-purple">Purple Subtle (btn-subtle-purple)</button>`}
      </CodeBlock>

      {/* Link Buttons Alignment */}
      <h3 className="text-xl font-bold mt-6 mb-2">4. Link Buttons Alignment</h3>
      <p className="text-muted mb-3">
        Text-style link buttons (<code>.btn-link</code> or <code>a.link</code>) engineered to align perfectly next to standard buttons without bloated height:
      </p>
      <div className="example border p-4 rounded-xl my-4 flex items-center gap-3 flex-wrap">
        <button className="primary">Solid Button</button>
        <button className="secondary">Secondary Button</button>
        <a href="#/buttons" className="btn-link">Link Button (Anchor)</a>
        <button className="btn-link">Link Button (Button Tag)</button>
      </div>
      <CodeBlock language="html">
        {`<button class="primary">Solid Button</button>
<a href="#" class="btn-link">Link Button (Anchor)</a>
<button class="btn-link">Link Button (Button)</button>`}
      </CodeBlock>

      {/* Cyberpunk Glow & Futuristic Buttons */}
      <h3 className="text-xl font-bold mt-6 mb-2">5. Cyberpunk Neon &amp; Futuristic Buttons</h3>
      <p className="text-muted mb-3">
        Interactive futuristic buttons with neon Cyberpunk glow shadows, chamfered cut corners (<code>.btn-cyberpunk-cut</code>), RGB glitch effects (<code>.btn-cyberpunk-glitch</code>), and multiple neon color palettes (cyan, blue, red, pink, yellow, green, purple, orange, indigo, white):
      </p>
      <div className="example border p-4 rounded-xl my-4 flex flex-col gap-4 bg-surface">
        <div>
          <h4 className="text-sm font-semibold text-muted mb-2">Standard Neon Glow Colors</h4>
          <div className="flex items-center gap-3 flex-wrap">
            <button className="btn-cyberpunk">Neon Cyan</button>
            <button className="btn-cyberpunk-blue">Neon Blue</button>
            <button className="btn-cyberpunk-red">Neon Red</button>
            <button className="btn-cyberpunk-pink">Neon Pink</button>
            <button className="btn-cyberpunk-yellow">Neon Yellow</button>
            <button className="btn-cyberpunk-green">Neon Green</button>
            <button className="btn-cyberpunk-purple">Neon Purple</button>
            <button className="btn-cyberpunk-orange">Neon Orange</button>
            <button className="btn-cyberpunk-indigo">Neon Indigo</button>
            <button className="btn-cyberpunk-white">Chrome White</button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-muted mb-2">Chamfered Cut Corner Modifier (<code>.btn-cyberpunk-cut</code>)</h4>
          <div className="flex items-center gap-3 flex-wrap">
            <button className="btn-cyberpunk btn-cyberpunk-cut">Cut Cyan</button>
            <button className="btn-cyberpunk-pink btn-cyberpunk-cut">Cut Pink</button>
            <button className="btn-cyberpunk-yellow btn-cyberpunk-cut">Cut Yellow</button>
            <button className="btn-cyberpunk-green btn-cyberpunk-cut">Cut Green</button>
            <button className="btn-cyberpunk-red btn-cyberpunk-cut">Cut Red</button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-muted mb-2">Animations &amp; Special Effects</h4>
          <div className="flex items-center gap-3 flex-wrap">
            <button className="btn-cyberpunk btn-cyberpunk-glitch">RGB Glitch</button>
            <button className="btn-cyberpunk-pink btn-cyberpunk-glitch">Glitch Pink</button>
            <button className="primary glow-pulse">Energy Pulse</button>
          </div>
        </div>
      </div>
      <CodeBlock language="html">
        {`<!-- Cyberpunk Neon Colors -->
<button class="btn-cyberpunk">Neon Cyan</button>
<button class="btn-cyberpunk-blue">Neon Blue</button>
<button class="btn-cyberpunk-red">Neon Red</button>
<button class="btn-cyberpunk-pink">Neon Pink</button>
<button class="btn-cyberpunk-yellow">Neon Yellow</button>
<button class="btn-cyberpunk-green">Neon Green</button>
<button class="btn-cyberpunk-purple">Neon Purple</button>

<!-- Cut Corner Chamfer Modifier -->
<button class="btn-cyberpunk-pink btn-cyberpunk-cut">Cut Corner Pink</button>
<button class="btn-cyberpunk-yellow btn-cyberpunk-cut">Cut Corner Yellow</button>

<!-- RGB Glitch & Pulse Effects -->
<button class="btn-cyberpunk btn-cyberpunk-glitch">RGB Glitch</button>
<button class="primary glow-pulse">Energy Pulse</button>`}
      </CodeBlock>

      <h3 className="text-xl font-bold mt-6 mb-2">Badges &amp; Tooltips</h3>
      <p className="text-muted mb-3">
        Pill badges and status chips with primary and secondary color options:
      </p>
      <div className="example border p-4 rounded-xl my-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="badge badge-primary" data-tooltip="Primary Black/White">Primary</span>
          <span className="badge badge-secondary" data-tooltip="Secondary Soft Gray">Secondary</span>
          <span className="badge badge-pink">Pink</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-destructive">Destructive</span>
          <span className="badge badge-outline">Outline</span>
        </div>
      </div>
      <CodeBlock language="html">
        {`<span class="badge badge-primary">Primary (Black/White)</span>
<span class="badge badge-secondary">Secondary (Soft Gray)</span>
<span class="badge badge-pink">Pink</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>`}
      </CodeBlock>

      <h3 className="text-xl font-bold mt-6 mb-2">Ripple &amp; Interactive Toast Trigger</h3>
      <div className="example border p-4 rounded-xl my-4 flex items-center gap-3 flex-wrap">
        <button className="fab" onClick={handleShowSnackbar} data-tooltip="Trigger Snackbar Toast">+</button>
        <span className="text-sm text-secondary">Click the floating button to launch toast</span>
      </div>
    </article>
  );
}

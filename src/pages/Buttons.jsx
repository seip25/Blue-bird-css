import CodeBlock from '../components/CodeBlock';

/**
 * Buttons documentation page component showing button styles, badges and glow effects
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
    } else if (window.lila) {
      window.lila('snackbar', {
        message: 'Hello! This is a Blue Bird CSS snackbar.',
        type: 'info',
        duration: 3000,
      });
    }
  };

  return (
    <article className="glass p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-2">Buttons &amp; Badges</h2>
      <p className="text-secondary mb-4">
        Various button variants and pill badges designed with modern Gemini glow accents and material ripple animations.
      </p>
      
      <div className="example glass-card p-4 rounded-xl my-4">
        <div className="flex items-center gap-3 flex-wrap">
          <button className="badge-glow hover-lift">Glow Primary</button>
          <button className="primary hover-lift">Primary</button>
          <button className="outline hover-lift">Outline</button>
          <button className="secondary hover-lift">Secondary</button>
          <button className="destructive hover-lift">Destructive</button>
          <button className="ghost hover-lift">Ghost</button>
          <button className="fill hover-lift">Fill</button>
        </div>
      </div>
      <CodeBlock language="html">
{`<button class="badge-glow hover-lift">Glow Primary</button>
<button class="primary hover-lift">Primary</button>
<button class="outline hover-lift">Outline</button>
<button class="secondary hover-lift">Secondary</button>
<button class="destructive hover-lift">Destructive</button>
<button class="ghost hover-lift">Ghost</button>
<button class="fill hover-lift">Fill</button>`}
      </CodeBlock>

      <h3 className="text-xl font-bold mt-6 mb-2">Badges &amp; Tooltips</h3>
      <p className="text-muted mb-3">
        Tailwind-inspired pill badges, status chips and floating hover tooltips:
      </p>
      <div className="example glass-card p-4 rounded-xl my-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="badge badge-glow" data-tooltip="Gemini Glow Badge">Glow Badge</span>
          <span className="badge badge-primary" data-tooltip="Primary Info">Primary</span>
          <span className="badge badge-secondary">Secondary</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-destructive">Destructive</span>
          <span className="badge badge-outline">Outline</span>
        </div>
      </div>
      <CodeBlock language="html">
{`<span class="badge badge-glow" data-tooltip="Gemini Glow Badge">Glow Badge</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-destructive">Destructive</span>
<span class="badge badge-outline">Outline</span>`}
      </CodeBlock>

      <h3 className="text-xl font-bold mt-6 mb-2">Shorthand Color Buttons</h3>
      <div className="example glass-card p-4 rounded-xl my-4">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <button className="bg-blue hover-lift">Blue</button>
          <button className="bg-red hover-lift">Red</button>
          <button className="bg-green hover-lift">Green</button>
          <button className="bg-yellow hover-lift">Yellow</button>
          <button className="bg-indigo hover-lift">Indigo</button>
          <button className="bg-violet hover-lift">Violet</button>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button className="outline text-blue hover-lift">Outline Blue</button>
          <button className="outline text-red hover-lift">Outline Red</button>
          <button className="outline text-green hover-lift">Outline Green</button>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-6 mb-2">Ripple &amp; Interactive Toast Trigger</h3>
      <div className="example glass-card p-4 rounded-xl my-4 flex items-center gap-3 flex-wrap">
        <a role="button" className="hover-lift">Link Button</a>
        <button className="fab badge-glow" onClick={handleShowSnackbar} data-tooltip="Trigger Snackbar Toast">+</button>
      </div>
    </article>
  );
}

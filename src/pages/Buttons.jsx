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
    <article className="border rounded-xl p-6 mb-6 bg-surface shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Buttons &amp; Badges</h2>
      <p className="text-secondary mb-4">
        Clean shadcn button variants, pill badges, and Cyberpunk glow buttons.
      </p>
      
      <div className="example border p-4 rounded-xl my-4">
        <div className="flex items-center gap-3 flex-wrap">
          <button className="primary hover-lift">Primary</button>
          <button className="secondary hover-lift">Secondary</button>
          <button className="outline hover-lift">Outline</button>
          <button className="destructive hover-lift">Destructive</button>
          <button className="ghost hover-lift">Ghost</button>
          <button className="bg-pink hover-lift">Pink</button>
        </div>
      </div>
      <CodeBlock language="html">
{`<button class="primary">Primary</button>
<button class="secondary">Secondary</button>
<button class="outline">Outline</button>
<button class="destructive">Destructive</button>
<button class="ghost">Ghost</button>
<button class="bg-pink">Pink</button>`}
      </CodeBlock>

      <h3 className="text-xl font-bold mt-6 mb-2">Cyberpunk Glow Buttons</h3>
      <p className="text-muted mb-3">
        Interactive buttons with neon Cyberpunk glow shadows:
      </p>
      <div className="example border p-4 rounded-xl my-4">
        <div className="flex items-center gap-3 flex-wrap">
          <button className="bg-blue glow-blue">Glow Blue</button>
          <button className="bg-indigo glow-indigo">Glow Indigo</button>
          <button className="bg-pink glow-pink">Glow Pink</button>
          <button className="bg-red glow-red">Glow Red</button>
          <button className="bg-violet glow-purple">Glow Purple</button>
          <button className="bg-green glow-green">Glow Green</button>
        </div>
      </div>
      <CodeBlock language="html">
{`<button class="bg-blue glow-blue">Glow Blue</button>
<button class="bg-indigo glow-indigo">Glow Indigo</button>
<button class="bg-pink glow-pink">Glow Pink</button>
<button class="bg-red glow-red">Glow Red</button>
<button class="bg-violet glow-purple">Glow Purple</button>
<button class="bg-green glow-green">Glow Green</button>`}
      </CodeBlock>

      <h3 className="text-xl font-bold mt-6 mb-2">Badges &amp; Tooltips</h3>
      <p className="text-muted mb-3">
        Pill badges and status chips with primary (black/white) and secondary (soft gray) options:
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
<span class="badge badge-warning">Warning</span>
<span class="badge badge-destructive">Destructive</span>
<span class="badge badge-outline">Outline</span>`}
      </CodeBlock>

      <h3 className="text-xl font-bold mt-6 mb-2">Shorthand Color Buttons</h3>
      <div className="example border p-4 rounded-xl my-4">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <button className="bg-blue hover-lift">Blue</button>
          <button className="bg-pink hover-lift">Pink</button>
          <button className="bg-red hover-lift">Red</button>
          <button className="bg-green hover-lift">Green</button>
          <button className="bg-yellow hover-lift">Yellow</button>
          <button className="bg-indigo hover-lift">Indigo</button>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button className="outline text-blue hover-lift">Outline Blue</button>
          <button className="outline text-pink hover-lift">Outline Pink</button>
          <button className="outline text-red hover-lift">Outline Red</button>
          <button className="outline text-green hover-lift">Outline Green</button>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-6 mb-2">Ripple &amp; Interactive Toast Trigger</h3>
      <div className="example border p-4 rounded-xl my-4 flex items-center gap-3 flex-wrap">
        <a role="button" className="hover-lift">Link Button</a>
        <button className="fab" onClick={handleShowSnackbar} data-tooltip="Trigger Snackbar Toast">+</button>
      </div>
    </article>
  );
}

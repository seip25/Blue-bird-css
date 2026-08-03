import CodeBlock from '../components/CodeBlock';

/**
 * Snackbar documentation page component showing toast notifications
 * @returns {JSX.Element} The rendered Snackbar page
 */
export default function Snackbar() {
  const showSnackbar = (type) => {
    if (window.bluebird) {
      window.bluebird('snackbar', {
        message: `This is a ${type} snackbar!`,
        duration: 3000,
        type,
      });
    } else if (window.lila) {
      window.lila('snackbar', {
        message: `This is a ${type} snackbar!`,
        duration: 3000,
        type,
      });
    }
  };

  return (
    <article className="glass p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-2">Snackbar</h2>
      <p className="text-secondary mb-4">
        Brief toast notification messages that appear dynamically at the bottom of the screen.
        Powered by <code>bluebird.js</code>. Call <code>bluebird('snackbar', options)</code> or <code>snackbar(options)</code>.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2">Notification Types</h3>
      <p className="mb-3">Click any button to trigger interactive toasts:</p>
      <div className="example glass-card p-4 rounded-xl my-4">
        <div className="flex flex-wrap gap-3">
          <button className="bg-green hover-lift" onClick={() => showSnackbar('success')}>Success</button>
          <button className="bg-red hover-lift" onClick={() => showSnackbar('error')}>Error</button>
          <button className="bg-yellow hover-lift" onClick={() => showSnackbar('warning')}>Warning</button>
          <button className="badge-glow hover-lift" onClick={() => showSnackbar('info')}>Info Glow</button>
          <button className="secondary hover-lift" onClick={() => showSnackbar('secondary')}>Secondary</button>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-6 mb-2">JavaScript API</h3>
      <CodeBlock language="html">
{`<!-- 1. Include bluebird.js -->
<script src="bluebird.js"><\/script>

<!-- 2. Trigger notification -->
<script>
  bluebird('snackbar', {
    message: 'Settings updated successfully!',
    type: 'success',
    duration: 3000
  });
<\/script>`}
      </CodeBlock>
    </article>
  );
}

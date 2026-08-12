import CodeBlock from '../components/CodeBlock';

/**
 * Command Palette (Ctrl+K Modal) documentation page component
 * @returns {JSX.Element} The rendered CommandDoc page
 */
export default function CommandDoc() {
  const triggerCommand = () => {
    if (window.bluebird) {
      window.bluebird('command', { action: 'open' });
    }
  };

  return (
    <article className="border rounded-xl p-6 mb-6 bg-surface shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Command Palette (Ctrl+K Modal)</h2>
      <p className="text-secondary mb-4">
        A fast, keyboard-accessible command menu dialog. Press <kbd>Ctrl+K</kbd> or <kbd>Cmd+K</kbd> anywhere to open.
      </p>

      {/* Interactive Command Trigger */}
      <h3 className="text-xl font-bold mt-6 mb-2">1. Interactive Command Menu</h3>
      <div className="example border p-4 rounded-xl my-4 flex items-center gap-4 flex-wrap">
        <button className="primary" onClick={triggerCommand}>
          Open Command Palette <kbd className="ml-2">Ctrl+K</kbd>
        </button>
      </div>

      <CodeBlock language="javascript">
{`// Open command palette programmatically
bluebird('command', { action: 'open' });

// Listen to keyboard shortcut globally
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    bluebird('command', { action: 'toggle' });
  }
});`}
      </CodeBlock>

      {/* HTML Structure */}
      <h3 className="text-xl font-bold mt-8 mb-2">2. HTML Structure &amp; Keyboard Badge (kbd)</h3>
      <div className="example border p-4 rounded-xl my-4 flex items-center gap-3 flex-wrap">
        <span className="text-sm font-medium">Keyboard Badges:</span>
        <kbd>Ctrl+C</kbd>
        <kbd>Cmd+K</kbd>
        <kbd>Shift+P</kbd>
        <kbd>ESC</kbd>
        <kbd>↵</kbd>
      </div>

      <CodeBlock language="html">
{`<!-- Keyboard Badge -->
<kbd>Ctrl+K</kbd>

<!-- Custom Command Dialog HTML -->
<div class="command-backdrop open">
  <div class="command-dialog">
    <div class="command-input-wrapper">
      <input type="text" class="command-input" placeholder="Type a command..." />
      <kbd>ESC</kbd>
    </div>
    <div class="command-list">
      <div class="command-group-title">Suggestions</div>
      <div class="command-item">
        <span>Search Documentation</span>
        <kbd>↵</kbd>
      </div>
      <div class="command-item">
        <span>Toggle Dark Theme</span>
        <kbd>↵</kbd>
      </div>
    </div>
  </div>
</div>`}
      </CodeBlock>
    </article>
  );
}

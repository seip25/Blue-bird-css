import CodeBlock from '../components/CodeBlock';

/**
 * Toast Notification System documentation page component
 * @returns {JSX.Element} The rendered ToastDoc page
 */
export default function ToastDoc() {
  const triggerToast = (type, position = 'bottom-right') => {
    if (window.bluebird) {
      window.bluebird('toast', {
        title: `${type.charAt(0).toUpperCase() + type.slice(1)} Notification`,
        description: `This is a stacked toast notification positioned at ${position}.`,
        type: type,
        position: position,
        duration: 4000,
      });
    }
  };

  return (
    <article className="border rounded-xl p-6 mb-6 bg-surface shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Multi-Toast System</h2>
      <p className="text-secondary mb-4">
        Stackable, auto-dismissing toast notifications supporting custom positions, titles, descriptions, and color variants.
      </p>

      {/* Toast Variants Demo */}
      <h3 className="text-xl font-bold mt-6 mb-2">1. Toast Variants &amp; Types</h3>
      <p className="text-muted mb-3">Click to trigger stacked toast notifications:</p>
      <div className="example border p-4 rounded-xl my-4 flex items-center gap-3 flex-wrap">
        <button className="bg-green-subtle" onClick={() => triggerToast('success')}>
          Success Toast
        </button>
        <button className="bg-red-subtle" onClick={() => triggerToast('error')}>
          Error / Destructive Toast
        </button>
        <button className="bg-yellow-subtle" onClick={() => triggerToast('warning')}>
          Warning Toast
        </button>
        <button className="bg-blue-subtle" onClick={() => triggerToast('info')}>
          Info Toast
        </button>
      </div>

      <CodeBlock language="javascript">
{`// Trigger success toast
bluebird('toast', {
  title: 'Payment Complete',
  description: 'Your invoice #4082 has been processed.',
  type: 'success',
  position: 'bottom-right',
  duration: 4000
});

// Alias method
toast({
  title: 'Error Occurred',
  description: 'Failed to sync database updates.',
  type: 'error'
});`}
      </CodeBlock>

      {/* Toast Positions Demo */}
      <h3 className="text-xl font-bold mt-8 mb-2">2. Screen Positions</h3>
      <p className="text-muted mb-3">Position toasts anywhere on screen:</p>
      <div className="example border p-4 rounded-xl my-4 flex items-center gap-3 flex-wrap">
        <button className="outline" onClick={() => triggerToast('info', 'top-right')}>
          Top Right
        </button>
        <button className="outline" onClick={() => triggerToast('info', 'top-center')}>
          Top Center
        </button>
        <button className="outline" onClick={() => triggerToast('info', 'top-left')}>
          Top Left
        </button>
        <button className="outline" onClick={() => triggerToast('info', 'bottom-right')}>
          Bottom Right
        </button>
        <button className="outline" onClick={() => triggerToast('info', 'bottom-center')}>
          Bottom Center
        </button>
      </div>

      <CodeBlock language="html">
{`<!-- Static Toast Markup Example -->
<div class="toast-container bottom-right">
  <div class="toast toast-success">
    <div class="toast-content">
      <div class="toast-title">Settings Saved</div>
      <div class="toast-description">Your changes were successfully written to disk.</div>
    </div>
    <button class="toast-close">&times;</button>
  </div>
</div>`}
      </CodeBlock>
    </article>
  );
}

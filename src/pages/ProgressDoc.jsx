import CodeBlock from '../components/CodeBlock';

/**
 * Progress Bars, Steps & Spinners documentation page component
 * @returns {JSX.Element} The rendered ProgressDoc page
 */
export default function ProgressDoc() {
  return (
    <article className="border rounded-xl p-6 mb-6 bg-surface shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Progress, Steps, Spinners &amp; Popovers</h2>
      <p className="text-secondary mb-4">
        Feedback indicators, multi-step progress controls, indeterminate spinners, popovers, and directional hover tooltips.
      </p>

      {/* Progress Bars */}
      <h3 className="text-xl font-bold mt-6 mb-2">1. Progress Bars (Semantic HTML5 &amp; Custom)</h3>
      <div className="example border p-4 rounded-xl my-4 flex flex-col gap-4">
        <div>
          <div className="flex justify-between text-xs text-muted mb-1 font-medium">
            <span>Semantic HTML5 &lt;progress&gt; Element</span>
            <span>45%</span>
          </div>
          <progress value="45" max="100"></progress>
        </div>

        <div>
          <div className="flex justify-between text-xs text-muted mb-1 font-medium">
            <span>Storage Usage</span>
            <span>75%</span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-green" style={{ width: '75%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs text-muted mb-1 font-medium">
            <span>Task Completion</span>
            <span>90%</span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-purple" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>

      <CodeBlock language="html">
        {`<!-- Semantic HTML5 Progress Element -->
<progress value="45" max="100"></progress>

<!-- Custom Utility Progress Bar -->
<div class="progress">
  <div class="progress-bar bg-green" style="width: 75%"></div>
</div>`}
      </CodeBlock>

      {/* Spinners & Steps */}
      <h3 className="text-xl font-bold mt-8 mb-2">2. Spinners &amp; Multi-Step Process (.steps)</h3>
      <div className="example border p-4 rounded-xl my-4">
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <span className="spinner spinner-sm"></span>
            <span className="text-sm">Small Spinner</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="spinner"></span>
            <span className="text-sm">Medium Spinner</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="spinner spinner-lg"></span>
            <span className="text-sm">Large Spinner</span>
          </div>
        </div>

        <h4 className="font-bold text-sm mb-2">Checkout Step Bar:</h4>
        <div className="steps">
          <div className="step completed">
            <div className="step-circle">1</div>
            <span className="step-label">Cart</span>
          </div>
          <div className="step active">
            <div className="step-circle">2</div>
            <span className="step-label">Shipping</span>
          </div>
          <div className="step">
            <div className="step-circle">3</div>
            <span className="step-label">Payment</span>
          </div>
          <div className="step">
            <div className="step-circle">4</div>
            <span className="step-label">Confirmation</span>
          </div>
        </div>
      </div>

      <CodeBlock language="html">
        {`<!-- Indeterminate Spinner -->
<span class="spinner spinner-sm"></span>

<!-- Step Progress -->
<div class="steps">
  <div class="step completed">
    <div class="step-circle">1</div>
    <span class="step-label">Cart</span>
  </div>
  <div class="step active">
    <div class="step-circle">2</div>
    <span class="step-label">Shipping</span>
  </div>
</div>`}
      </CodeBlock>

    </article>
  );
}

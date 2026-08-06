import CodeBlock from '../components/CodeBlock';

/**
 * CSS Keyframe Animations & Utilities documentation page component
 * @returns {JSX.Element} The rendered Animations page
 */
export default function Animations() {
  return (
    <article className="border rounded-xl p-6 mb-6 bg-surface shadow-sm">
      <h2 className="text-2xl font-bold mb-2">CSS Animations &amp; Motion Effects</h2>
      <p className="text-secondary mb-4">
        Blue Bird CSS includes a suite of smooth keyframe animations and utility classes for dynamic micro-interactions, loading states, and cyberpunk glow pulses.
      </p>

      {/* Loading & Spinner Animations */}
      <h3 className="text-xl font-bold mt-6 mb-2">1. Loading &amp; Spin Animations</h3>
      <div className="example border p-4 rounded-xl my-4 flex items-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="animate-spin border-2 border-primary border-t-transparent rounded-full w-5 h-5 inline-block"></span>
          <span className="text-sm font-medium">.animate-spin</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="animate-ping bg-blue rounded-full w-3 h-3 inline-block"></span>
          <span className="text-sm font-medium">.animate-ping</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="animate-pulse bg-primary px-3 py-1 rounded text-xs text-white">.animate-pulse</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="animate-bounce inline-block font-bold">↑↓</span>
          <span className="text-sm font-medium">.animate-bounce</span>
        </div>
      </div>

      <CodeBlock language="html">
{`<span class="animate-spin spinner"></span>
<span class="animate-ping"></span>
<div class="animate-pulse">Loading...</div>
<span class="animate-bounce">Bounce</span>`}
      </CodeBlock>

      {/* Motion & Entrance Animations */}
      <h3 className="text-xl font-bold mt-8 mb-2">2. Motion &amp; Entrance Animations</h3>
      <div className="example border p-4 rounded-xl my-4 flex items-center gap-4 flex-wrap">
        <div className="animate-fade-in border p-3 rounded-lg bg-surface text-sm font-medium">
          .animate-fade-in
        </div>
        <div className="animate-slide-up border p-3 rounded-lg bg-surface text-sm font-medium">
          .animate-slide-up
        </div>
        <div className="animate-float border p-3 rounded-lg bg-surface text-sm font-medium">
          .animate-float
        </div>
        <div className="animate-wiggle border p-3 rounded-lg bg-surface text-sm font-medium">
          .animate-wiggle
        </div>
      </div>

      <CodeBlock language="html">
{`<div class="animate-fade-in">Fade In Element</div>
<div class="animate-slide-up">Slide Up Element</div>
<div class="animate-float">Floating Element</div>
<div class="animate-wiggle">Wiggle Element</div>`}
      </CodeBlock>

      {/* Shimmer & Cyberpunk Glow Pulse */}
      <h3 className="text-xl font-bold mt-8 mb-2">3. Shimmer &amp; Cyberpunk Glow Pulse</h3>
      <div className="example border p-4 rounded-xl my-4 flex items-center gap-4 flex-wrap">
        <div className="animate-shimmer border p-4 rounded-xl w-64 bg-secondary">
          <p className="text-sm font-semibold">Skeleton Shimmer Effect</p>
        </div>

        <button className="primary glow-pulse">
          .glow-pulse (Pulsing Energy)
        </button>

        <button className="glow-cyberpunk">
          .glow-cyberpunk (Neon Cyber)
        </button>
      </div>

      <CodeBlock language="html">
{`<!-- Skeleton Shimmer -->
<div class="animate-shimmer card">Loading Card...</div>

<!-- Cyberpunk Pulsing Button -->
<button class="primary glow-pulse">Pulsing Glow</button>
<button class="glow-cyberpunk">Cyberpunk Neon</button>`}
      </CodeBlock>
    </article>
  );
}

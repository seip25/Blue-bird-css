import CodeBlock from '../components/CodeBlock';

/**
 * Skeleton Loading Placeholders documentation page component
 * @returns {JSX.Element} The rendered SkeletonDoc page
 */
export default function SkeletonDoc() {
  return (
    <article className="border rounded-xl p-6 mb-6 bg-surface shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Skeleton Loading Placeholders</h2>
      <p className="text-secondary mb-4">
        Use animated shimmer skeleton placeholders to indicate loading states for cards, avatars, text, and buttons while asynchronous data is fetching.
      </p>

      {/* Card Skeleton Demo */}
      <h3 className="text-xl font-bold mt-6 mb-2">1. Profile Card Skeleton</h3>
      <div className="example border p-4 rounded-xl my-4">
        <div className="border p-6 rounded-xl bg-background max-w-sm">
          <div className="flex items-center gap-4 mb-4">
            <span className="skeleton skeleton-avatar"></span>
            <div className="flex-1">
              <span className="skeleton skeleton-title"></span>
              <span className="skeleton skeleton-text" style={{ width: '40%' }}></span>
            </div>
          </div>
          <span className="skeleton skeleton-text"></span>
          <span className="skeleton skeleton-text"></span>
          <span className="skeleton skeleton-text" style={{ width: '80%' }}></span>
          <div className="flex items-center gap-2 mt-4">
            <span className="skeleton skeleton-button"></span>
            <span className="skeleton skeleton-button" style={{ width: '5rem' }}></span>
          </div>
        </div>
      </div>

      <CodeBlock language="html">
{`<div class="card p-6">
  <div class="flex items-center gap-4 mb-4">
    <span class="skeleton skeleton-avatar"></span>
    <div class="flex-1">
      <span class="skeleton skeleton-title"></span>
      <span class="skeleton skeleton-text" style="width: 40%"></span>
    </div>
  </div>
  <span class="skeleton skeleton-text"></span>
  <span class="skeleton skeleton-text"></span>
  <div class="flex gap-2 mt-4">
    <span class="skeleton skeleton-button"></span>
  </div>
</div>`}
      </CodeBlock>

      {/* Grid Skeleton Demo */}
      <h3 className="text-xl font-bold mt-8 mb-2">2. Article Grid Skeleton</h3>
      <div className="example border p-4 rounded-xl my-4">
        <div className="grid cols-3 gap-4">
          <div className="border p-4 rounded-xl bg-background">
            <span className="skeleton skeleton-card mb-3" style={{ height: '8rem' }}></span>
            <span className="skeleton skeleton-title"></span>
            <span className="skeleton skeleton-text"></span>
            <span className="skeleton skeleton-text" style={{ width: '70%' }}></span>
          </div>
          <div className="border p-4 rounded-xl bg-background">
            <span className="skeleton skeleton-card mb-3" style={{ height: '8rem' }}></span>
            <span className="skeleton skeleton-title"></span>
            <span className="skeleton skeleton-text"></span>
            <span className="skeleton skeleton-text" style={{ width: '70%' }}></span>
          </div>
          <div className="border p-4 rounded-xl bg-background">
            <span className="skeleton skeleton-card mb-3" style={{ height: '8rem' }}></span>
            <span className="skeleton skeleton-title"></span>
            <span className="skeleton skeleton-text"></span>
            <span className="skeleton skeleton-text" style={{ width: '70%' }}></span>
          </div>
        </div>
      </div>

      <CodeBlock language="html">
{`<div class="grid cols-3 gap-4">
  <div class="card p-4">
    <span class="skeleton skeleton-card mb-3"></span>
    <span class="skeleton skeleton-title"></span>
    <span class="skeleton skeleton-text"></span>
  </div>
</div>`}
      </CodeBlock>
    </article>
  );
}

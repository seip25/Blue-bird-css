import CodeBlock from '../components/CodeBlock';

/**
 * Mobile-First Touch & Swipe Carousel documentation page component
 * @returns {JSX.Element} The rendered CarouselDoc page
 */
export default function CarouselDoc() {
  return (
    <article className="border rounded-xl p-6 mb-6 bg-surface shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Mobile Touch &amp; Swipe Carousel</h2>
      <p className="text-secondary mb-4">
        A lightweight, mobile-first carousel component with CSS scroll snap, native touch swipe physics, arrow controls, indicator dots, and optional autoplay. Inspired by shadcn &amp; Bootstrap, tailored for mobile devices.
      </p>

      {/* Interactive Card Carousel Demo */}
      <h3 className="text-xl font-bold mt-6 mb-2">1. Responsive Card Carousel (Touch/Swipe Supported)</h3>
      <p className="text-muted mb-3">
        Swipe with your finger on mobile or drag/scroll on desktop. Uses <code>.carousel-item.responsive-card</code> for auto-fitted multi-card viewports.
      </p>

      <div className="example border p-4 rounded-xl my-4">
        <div className="carousel" data-autoplay="true" data-interval="4000">
          <button className="carousel-nav carousel-prev" aria-label="Previous Slide">&larr;</button>
          <button className="carousel-nav carousel-next" aria-label="Next Slide">&rarr;</button>
          
          <div className="carousel-track py-2">
            <div className="carousel-item responsive-card p-6 border rounded-xl bg-background shadow-sm">
              <h4 className="font-bold text-lg mb-1">Feature Card #1</h4>
              <p className="text-sm text-secondary">Ultra-fast CSS framework built with zero dependencies.</p>
              <button className="bg-blue-subtle mt-4 text-xs py-1 px-3">Learn More</button>
            </div>

            <div className="carousel-item responsive-card p-6 border rounded-xl bg-background shadow-sm">
              <h4 className="font-bold text-lg mb-1">Feature Card #2</h4>
              <p className="text-sm text-secondary">Pure shadcn/ui design language with vibrant dark mode.</p>
              <button className="bg-purple-subtle mt-4 text-xs py-1 px-3">Explore Design</button>
            </div>

            <div className="carousel-item responsive-card p-6 border rounded-xl bg-background shadow-sm">
              <h4 className="font-bold text-lg mb-1">Feature Card #3</h4>
              <p className="text-sm text-secondary">Mobile-first touch gestures &amp; smooth spring physics.</p>
              <button className="bg-green-subtle mt-4 text-xs py-1 px-3">Mobile Specs</button>
            </div>

            <div className="carousel-item responsive-card p-6 border rounded-xl bg-background shadow-sm">
              <h4 className="font-bold text-lg mb-1">Feature Card #4</h4>
              <p className="text-sm text-secondary">Next.js App Router &amp; Vite ready with instant setup.</p>
              <button className="bg-pink-subtle mt-4 text-xs py-1 px-3">View Integration</button>
            </div>
          </div>

          <div className="carousel-indicators"></div>
        </div>
      </div>

      <CodeBlock language="html">
{`<div class="carousel" data-autoplay="true" data-interval="4000">
  <button class="carousel-nav carousel-prev">&larr;</button>
  <button class="carousel-nav carousel-next">&rarr;</button>
  
  <div class="carousel-track">
    <div class="carousel-item responsive-card card">
      <h4>Card 1</h4>
      <p>Card content...</p>
    </div>
    <div class="carousel-item responsive-card card">
      <h4>Card 2</h4>
      <p>Card content...</p>
    </div>
  </div>

  <div class="carousel-indicators"></div>
</div>

<!-- Include bluebird.js for automatic touch swipe & autoplay controls -->
<script src="bluebird.js"></script>`}
      </CodeBlock>

      {/* Full-width Image Hero Carousel */}
      <h3 className="text-xl font-bold mt-8 mb-2">2. Full-Width Hero Slide Carousel</h3>
      <p className="text-muted mb-3">
        Ideal for product banners or hero sections. Set items to <code>.carousel-item</code> (100% width).
      </p>

      <div className="example border p-4 rounded-xl my-4">
        <div className="carousel border rounded-xl">
          <button className="carousel-nav carousel-prev">&larr;</button>
          <button className="carousel-nav carousel-next">&rarr;</button>

          <div className="carousel-track">
            <div className="carousel-item bg-primary-subtle p-8 text-center rounded-xl">
              <h3 className="text-2xl font-bold text-blue-100 mb-2">Hero Slide #1 — Blue Bird CSS</h3>
              <p className="text-secondary max-w-md mx-auto">Semantic HTML, modern shadcn components, zero config.</p>
            </div>

            <div className="carousel-item bg-purple-subtle p-8 text-center rounded-xl">
              <h3 className="text-2xl font-bold text-purple-100 mb-2">Hero Slide #2 — Cyberpunk Glow</h3>
              <p className="text-secondary max-w-md mx-auto">Vibrant neon shadows and interactive hover effects.</p>
            </div>

            <div className="carousel-item bg-green-subtle p-8 text-center rounded-xl">
              <h3 className="text-2xl font-bold text-green-100 mb-2">Hero Slide #3 — Native Next.js Support</h3>
              <p className="text-secondary max-w-md mx-auto">Works out of the box in layout.jsx with zero extra plugins.</p>
            </div>
          </div>

          <div className="carousel-indicators"></div>
        </div>
      </div>

      <CodeBlock language="html">
{`<div class="carousel">
  <button class="carousel-nav carousel-prev">&larr;</button>
  <button class="carousel-nav carousel-next">&rarr;</button>

  <div class="carousel-track">
    <div class="carousel-item bg-blue-subtle">Slide 1</div>
    <div class="carousel-item bg-purple-subtle">Slide 2</div>
  </div>

  <div class="carousel-indicators"></div>
</div>`}
      </CodeBlock>

      {/* Programmatic JS API */}
      <h3 className="text-xl font-bold mt-6 mb-2">JavaScript API &amp; Parameters</h3>
      <p className="text-secondary mb-3">
        Initialize manually via <code>bluebird('carousel', options)</code> or declaratively with data attributes:
      </p>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th>Attribute / Option</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>data-autoplay</code> / <code>autoplay</code></td><td>boolean</td><td><code>false</code></td><td>Enables automatic slide cycling</td></tr>
          <tr><td><code>data-interval</code> / <code>interval</code></td><td>number</td><td><code>3500</code></td><td>Cycle duration in milliseconds</td></tr>
          <tr><td><code>.responsive-card</code></td><td>CSS Class</td><td>-</td><td>Makes cards fit responsive screen breakpoints (85% mobile, 45% tablet, 30% desktop)</td></tr>
        </tbody>
      </table>

      <CodeBlock language="javascript">
{`// Programmatic initialization
bluebird('carousel', {
  selector: '#custom-carousel',
  autoplay: true,
  interval: 3000
});`}
      </CodeBlock>
    </article>
  );
}

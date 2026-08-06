import CodeBlock from '../components/CodeBlock';

/**
 * Aside & Drawer navigation documentation page component featuring 4-direction drawers and automatic mobile drawer logic
 * @returns {JSX.Element} The rendered AsideDrawer page
 */
export default function AsideDrawer() {
  const triggerDrawer = (id) => {
    if (window.bluebird) {
      window.bluebird('drawer', { id, action: 'toggle' });
    }
  };

  return (
    <>
      <article className="border rounded-xl p-6 mb-6 bg-surface shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Aside &amp; Drawer System</h2>
        <p className="text-secondary mb-4">
          Blue Bird CSS provides two powerful drawer paradigms: <strong>Automatic Responsive Mobile Navigation</strong> and <strong>Custom 4-Direction Standalone Drawers</strong>.
        </p>

        {/* Section 1: Automatic Mobile Navigation Drawer */}
        <h3 className="text-xl font-bold mt-6 mb-2">1. Automatic Mobile Navigation Drawer</h3>
        <p className="mb-3 text-secondary">
          When you place a standard <code>&lt;aside&gt;</code> element inside <code>&lt;main&gt;</code> alongside a <code>&lt;header&gt;&lt;nav&gt;</code> bar, Blue Bird CSS automatically handles responsive behavior:
        </p>
        <ul className="list-disc pl-5 mb-4 text-sm text-secondary gap-1">
          <li><strong>Required HTML Structure:</strong> Wrap your top header in <code>&lt;header&gt;&lt;nav&gt;...&lt;/nav&gt;&lt;/header&gt;</code> directly above <code>&lt;main&gt;&lt;aside&gt;...&lt;/aside&gt;&lt;/main&gt;</code>.</li>
          <li><strong>Desktop (&gt;768px):</strong> The <code>&lt;aside&gt;</code> renders as a fixed/sticky sidebar on the left side of the layout, while top navigation links remain in the header.</li>
          <li><strong>Mobile (&lt;768px):</strong> <code>bluebird.js</code> automatically hides the desktop sidebar and injects the mobile menu toggle button (<code>☰</code>) into your <code>&lt;header&gt;&lt;nav&gt;</code>. Clicking <code>☰</code> opens a smooth slide-over navigation drawer containing your sidebar links.</li>
        </ul>

        <CodeBlock language="html">
{`<!-- 1. Header with <nav> container -->
<header>
  <nav>
    <h2>App Brand</h2>
    <div>
      <a href="/login">Login</a>
    </div>
  </nav>
</header>

<!-- 2. Main layout with <aside> sidebar -->
<main>
  <aside>
    <h4>Navigation</h4>
    <a href="/dashboard">Dashboard</a>
    <a href="/analytics">Analytics</a>
    <a href="/settings">Settings</a>
  </aside>
  <div>
    <h1>Main Content Area</h1>
    <p>Your main page contents go here...</p>
  </div>
</main>

<!-- 3. Include bluebird.js for zero-config mobile drawer handling -->
<script src="bluebird.js"></script>`}
        </CodeBlock>

        {/* Section 2: 4-Direction Standalone Drawers */}
        <h3 className="text-xl font-bold mt-8 mb-2">2. Standalone 4-Direction Drawers</h3>
        <p className="text-secondary mb-4">
          Create slide-out panels from any direction: <strong>Left</strong>, <strong>Right</strong>, <strong>Top</strong>, or <strong>Bottom</strong> (mobile bottom sheets). Trigger them using <code>data-drawer-target="drawer-id"</code> or JavaScript <code>bluebird('drawer', &#123; id: '...', action: 'open' &#125;)</code>.
        </p>

        {/* Interactive Triggers */}
        <div className="example border p-4 rounded-xl my-4">
          <h4 className="font-semibold text-sm mb-3">Interactive Demo — Click to Test Directions:</h4>
          <div className="flex items-center gap-3 flex-wrap">
            <button className="bg-blue-subtle" onClick={() => triggerDrawer('demo-drawer-left')}>
              Open Left Drawer
            </button>
            <button className="bg-purple-subtle" onClick={() => triggerDrawer('demo-drawer-right')}>
              Open Right Drawer
            </button>
            <button className="bg-green-subtle" onClick={() => triggerDrawer('demo-drawer-top')}>
              Open Top Drawer
            </button>
            <button className="bg-pink-subtle" onClick={() => triggerDrawer('demo-drawer-bottom')}>
              Open Bottom Sheet Drawer
            </button>
          </div>
        </div>

        <CodeBlock language="html">
{`<!-- Trigger Buttons -->
<button data-drawer-target="my-left-drawer">Open Left</button>
<button data-drawer-target="my-right-drawer">Open Right</button>

<!-- Standalone Drawer Structure -->
<div id="my-left-drawer" class="drawer drawer-left">
  <div class="drawer-header">
    <h3>Navigation Title</h3>
    <button data-drawer-close class="ghost">&times;</button>
  </div>
  <div class="drawer-body">
    <p>Drawer content goes here...</p>
  </div>
  <div class="drawer-footer">
    <button data-drawer-close class="secondary">Close</button>
  </div>
</div>`}
        </CodeBlock>

        <h3 className="text-xl font-bold mt-6 mb-2">JS Helper API</h3>
        <CodeBlock language="javascript">
{`// Programmatic API
bluebird('drawer', { id: 'my-left-drawer', action: 'open' });
bluebird('drawer', { id: 'my-left-drawer', action: 'close' });
bluebird('drawer', { id: 'my-left-drawer', action: 'toggle' });`}
        </CodeBlock>
      </article>

      {/* Render Demo Drawers */}
      <div id="demo-drawer-left" className="drawer drawer-left">
        <div className="drawer-header">
          <h3 className="font-bold text-lg">Left Side Navigation Panel</h3>
          <button data-drawer-close className="ghost py-1 px-3">&times;</button>
        </div>
        <div className="drawer-body p-4">
          <p className="text-sm text-secondary mb-4">Standard slide-out drawer from the left edge of the screen.</p>
          <div className="flex flex-col gap-2">
            <a href="#/dashboard" className="p-2 rounded hover:bg-secondary">Dashboard</a>
            <a href="#/profile" className="p-2 rounded hover:bg-secondary">User Profile</a>
            <a href="#/settings" className="p-2 rounded hover:bg-secondary">Account Settings</a>
          </div>
        </div>
        <div className="drawer-footer p-4 border-t flex justify-end">
          <button data-drawer-close className="secondary btn-sm">Close Panel</button>
        </div>
      </div>

      <div id="demo-drawer-right" className="drawer drawer-right">
        <div className="drawer-header">
          <h3 className="font-bold text-lg">Right Side Cart / Settings Panel</h3>
          <button data-drawer-close className="ghost py-1 px-3">&times;</button>
        </div>
        <div className="drawer-body p-4">
          <p className="text-sm text-secondary mb-3">Useful for shopping carts, notification panels, and context settings.</p>
        </div>
        <div className="drawer-footer p-4 border-t flex justify-end">
          <button data-drawer-close className="secondary btn-sm">Close</button>
        </div>
      </div>

      <div id="demo-drawer-top" className="drawer drawer-top">
        <div className="drawer-header">
          <h3 className="font-bold text-lg">Top Banner Drawer</h3>
          <button data-drawer-close className="ghost py-1 px-3">&times;</button>
        </div>
        <div className="drawer-body p-4">
          <p className="text-sm text-secondary">Announcement banner slide down from top of screen.</p>
        </div>
      </div>

      <div id="demo-drawer-bottom" className="drawer drawer-bottom">
        <div className="drawer-header">
          <h3 className="font-bold text-lg">Mobile Bottom Sheet Drawer</h3>
          <button data-drawer-close className="ghost py-1 px-3">&times;</button>
        </div>
        <div className="drawer-body p-4">
          <p className="text-sm text-secondary mb-3">Ideal for mobile action sheets, share menus, and modal dialog replacements.</p>
        </div>
        <div className="drawer-footer p-4 border-t flex justify-end">
          <button data-drawer-close className="primary btn-sm">Done</button>
        </div>
      </div>
    </>
  );
}

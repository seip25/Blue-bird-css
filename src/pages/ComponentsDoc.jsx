import { useState } from 'react';
import CodeBlock from '../components/CodeBlock';

/**
 * Comprehensive documentation page component for high-utility shadcn UI & Tailwind components
 * @returns {JSX.Element} The rendered ComponentsDoc page
 */
export default function ComponentsDoc() {
  const [activeTab, setActiveTab] = useState('account');
  const [enabled, setEnabled] = useState(true);

  return (
    <article className="border rounded-xl p-6 mb-6 bg-surface shadow-sm">
      <h2 className="text-2xl font-bold mb-2">High-Utility Components</h2>
      <p className="text-secondary mb-6">
        Essential components inspired by shadcn/ui and Tailwind CSS designed for modern web applications.
      </p>

      {/* Alerts Section */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Alerts &amp; Callouts</h3>
        <p className="text-muted mb-4">
          Provide contextual feedback messages using <code>.alert</code>, <code>.alert-title</code>, and <code>.alert-description</code> with variants:
        </p>
        <div className="flex flex-col gap-3 my-4">
          <div className="alert alert-info">
            <span className="text-xl">ℹ️</span>
            <div>
              <div className="alert-title">Information</div>
              <p className="alert-description">System update scheduled for 02:00 UTC.</p>
            </div>
          </div>
          <div className="alert alert-success">
            <div>
              <div className="alert-title">Success</div>
              <p className="alert-description">Your profile settings have been saved successfully.</p>
            </div>
          </div>
          <div className="alert alert-warning">
            <div>
              <div className="alert-title">Warning</div>
              <p className="alert-description">Your storage capacity is reaching 90% threshold.</p>
            </div>
          </div>
          <div className="alert alert-destructive">
            <div>
              <div className="alert-title">Destructive</div>
              <p className="alert-description">Your subscription has expired. Please renew to continue access.</p>
            </div>
          </div>
        </div>
        <CodeBlock language="html">
{`<div class="alert alert-info">
  <div>
    <div class="alert-title">Information</div>
    <p class="alert-description">System update scheduled.</p>
  </div>
</div>

<div class="alert alert-success">...</div>
<div class="alert alert-warning">...</div>
<div class="alert alert-destructive">...</div>`}
        </CodeBlock>
      </section>

      {/* Tabs Section */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Tabs Navigation</h3>
        <p className="text-muted mb-4">
          Clean tabbed container navigation using <code>.tabs</code>, <code>.tab-list</code>, <code>.tab-trigger</code>, and <code>.tab-content</code>:
        </p>
        <div className="tabs border p-4 rounded-xl my-4">
          <div className="tab-list">
            <button 
              className={`tab-trigger ${activeTab === 'account' ? 'active' : ''}`}
              onClick={() => setActiveTab('account')}
            >
              Account
            </button>
            <button 
              className={`tab-trigger ${activeTab === 'password' ? 'active' : ''}`}
              onClick={() => setActiveTab('password')}
            >
              Password
            </button>
            <button 
              className={`tab-trigger ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 'account' && <p>Account management options and profile details.</p>}
            {activeTab === 'password' && <p>Change your password and security keys.</p>}
            {activeTab === 'settings' && <p>Configure application preferences and theme.</p>}
          </div>
        </div>
        <CodeBlock language="html">
{`<div class="tabs">
  <div class="tab-list">
    <button class="tab-trigger active">Account</button>
    <button class="tab-trigger">Password</button>
  </div>
  <div class="tab-content">
    <!-- Active Tab Content -->
  </div>
</div>`}
        </CodeBlock>
      </section>

      {/* Breadcrumbs Section */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Breadcrumbs</h3>
        <p className="text-muted mb-4">
          Navigation hierarchy links using <code>.breadcrumb</code>, <code>.breadcrumb-item</code>, and <code>.breadcrumb-separator</code>:
        </p>
        <div className="border p-4 rounded-xl my-4">
          <nav className="breadcrumb">
            <a href="#" className="breadcrumb-item">Home</a>
            <span className="breadcrumb-separator">/</span>
            <a href="#" className="breadcrumb-item">Components</a>
            <span className="breadcrumb-separator">/</span>
            <span className="text-primary font-semibold">Breadcrumbs</span>
          </nav>
        </div>
        <CodeBlock language="html">
{`<nav class="breadcrumb">
  <a href="#" class="breadcrumb-item">Home</a>
  <span class="breadcrumb-separator">/</span>
  <a href="#" class="breadcrumb-item">Components</a>
  <span class="breadcrumb-separator">/</span>
  <span class="breadcrumb-item active">Current Page</span>
</nav>`}
        </CodeBlock>
      </section>

      {/* Toggle Switch Section */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Toggle Switch</h3>
        <p className="text-muted mb-4">
          Modern switch control using <code>.switch</code> and <code>.switch-slider</code>:
        </p>
        <div className="border p-4 rounded-xl my-4 flex items-center justify-between">
          <span className="font-medium">Enable Email Notifications</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={enabled} 
              onChange={(e) => setEnabled(e.target.checked)} 
            />
            <span className="switch-slider"></span>
          </label>
        </div>
        <CodeBlock language="html">
{`<label class="switch">
  <input type="checkbox" checked />
  <span class="switch-slider"></span>
</label>`}
        </CodeBlock>
      </section>

      {/* Skeleton Loading Section */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Skeleton Loading</h3>
        <p className="text-muted mb-4">
          Animated placeholder cards using <code>.skeleton</code>, <code>.skeleton-text</code>, and <code>.skeleton-avatar</code>:
        </p>
        <div className="border p-4 rounded-xl my-4 flex items-center gap-4">
          <div className="skeleton skeleton-avatar shrink-0"></div>
          <div className="w-full">
            <div className="skeleton skeleton-text w-full"></div>
            <div className="skeleton skeleton-text w-50"></div>
          </div>
        </div>
        <CodeBlock language="html">
{`<div class="flex items-center gap-4">
  <div class="skeleton skeleton-avatar"></div>
  <div class="w-full">
    <div class="skeleton skeleton-text w-full"></div>
    <div class="skeleton skeleton-text w-50"></div>
  </div>
</div>`}
        </CodeBlock>
      </section>

      {/* Separators & Aspect Ratio Section */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Separators &amp; Aspect Ratio</h3>
        <div className="border p-4 rounded-xl my-4">
          <div className="flex items-center text-sm text-secondary">
            <span>Blog</span>
            <div className="separator separator-vertical"></div>
            <span>Docs</span>
            <div className="separator separator-vertical"></div>
            <span>Community</span>
          </div>
          <div className="separator separator-horizontal"></div>
          <div className="grid cols-2 gap-4 mt-4">
            <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center font-medium">
              16:9 Aspect Video
            </div>
            <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center font-medium">
              1:1 Aspect Square
            </div>
          </div>
        </div>
        <CodeBlock language="html">
{`<!-- Separators -->
<div class="separator separator-horizontal"></div>
<div class="separator separator-vertical"></div>

<!-- Aspect Ratios -->
<div class="aspect-video">16:9 Video</div>
<div class="aspect-square">1:1 Square</div>`}
        </CodeBlock>
      </section>
    </article>
  );
}

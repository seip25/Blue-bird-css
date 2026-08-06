import CodeBlock from '../components/CodeBlock';

/**
 * Tabs documentation page component
 * @returns {JSX.Element} The rendered TabsDoc page
 */
export default function TabsDoc() {
  return (
    <article className=" rounded-xl p-6 mb-6 bg-surface shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Tabs Component</h2>
      <p className="text-secondary mb-4">
        A clean, accessible tabs component inspired by shadcn/ui. Supports pill tabs and line tabs with smooth content switching.
      </p>

      {/* Pill Tabs Demo */}
      <h3 className="text-xl font-bold mt-6 mb-2">1. Default Pill Tabs</h3>
      <div className="example  p-4 rounded-xl my-4">
        <div className="tabs">
          <div className="tab-list">
            <button className="tab-trigger active" data-tab-target="tab-account">Account</button>
            <button className="tab-trigger" data-tab-target="tab-password">Password</button>
            <button className="tab-trigger" data-tab-target="tab-notifications">Notifications</button>
          </div>

          <div id="tab-account" className="tab-content active">
            <h4 className="font-bold text-lg mb-2">Account Settings</h4>
            <p className="text-sm text-secondary mb-3">Manage your public profile and email address.</p>
            <div className="floating mb-3">
              <input type="text" placeholder=" " defaultValue="John Doe" />
              <label>Name</label>
            </div>
            <button className="primary btn-sm">Save Profile</button>
          </div>

          <div id="tab-password" className="tab-content">
            <h4 className="font-bold text-lg mb-2">Password Settings</h4>
            <p className="text-sm text-secondary mb-3">Change your password here. After saving, you will be logged out.</p>
            <div className="floating mb-3">
              <input type="password" placeholder=" " />
              <label>New Password</label>
            </div>
            <button className="secondary btn-sm">Update Password</button>
          </div>

          <div id="tab-notifications" className="tab-content">
            <h4 className="font-bold text-lg mb-2">Notification Preferences</h4>
            <p className="text-sm text-secondary mb-3">Configure how you receive alert updates.</p>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked /> Email Digest Notifications
            </label>
          </div>
        </div>
      </div>

      <CodeBlock language="html">
        {`<div class="tabs">
  <div class="tab-list">
    <button class="tab-trigger active" data-tab-target="tab-account">Account</button>
    <button class="tab-trigger" data-tab-target="tab-password">Password</button>
  </div>

  <div id="tab-account" class="tab-content active">
    <p>Account tab content...</p>
  </div>

  <div id="tab-password" class="tab-content">
    <p>Password tab content...</p>
  </div>
</div>`}
      </CodeBlock>

      {/* Line Tabs Demo */}
      <h3 className="text-xl font-bold mt-8 mb-2">2. Underline Tabs (.tabs-line)</h3>
      <div className="example  p-4 rounded-xl my-4">
        <div className="tabs">
          <div className="tab-list tabs-line">
            <button className="tab-trigger active" data-tab-target="line-overview">Overview</button>
            <button className="tab-trigger" data-tab-target="line-analytics">Analytics</button>
            <button className="tab-trigger" data-tab-target="line-reports">Reports</button>
          </div>

          <div id="line-overview" className="tab-content active p-4">
            <h4 className="font-bold text-base mb-1">Project Overview</h4>
            <p className="text-sm text-secondary">Summary metrics and performance indicators for current quarter.</p>
          </div>

          <div id="line-analytics" className="tab-content p-4">
            <h4 className="font-bold text-base mb-1">Real-time Analytics</h4>
            <p className="text-sm text-secondary">Live visitor metrics, clickthrough rates, and conversion goals.</p>
          </div>

          <div id="line-reports" className="tab-content p-4">
            <h4 className="font-bold text-base mb-1">Generated Reports</h4>
            <p className="text-sm text-secondary">Download monthly PDF and CSV data summaries.</p>
          </div>
        </div>
      </div>

      <CodeBlock language="html">
        {`<div class="tabs">
  <div class="tab-list tabs-line">
    <button class="tab-trigger active" data-tab-target="line-overview">Overview</button>
    <button class="tab-trigger" data-tab-target="line-analytics">Analytics</button>
  </div>

  <div id="line-overview" class="tab-content active">...</div>
  <div id="line-analytics" class="tab-content">...</div>
</div>`}
      </CodeBlock>
    </article>
  );
}

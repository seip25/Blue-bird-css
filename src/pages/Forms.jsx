import CodeBlock from '../components/CodeBlock';

export default function Forms() {
  return (
    <article>
      <h2>Forms</h2>
      <p>
        All form elements — inputs, textareas, selects — are styled automatically.
        Just use standard HTML. No classes needed for the default style. Add <code>.fill</code> for a filled variant.
      </p>

      <h3>Standard Inputs</h3>
      <div className="example">
        <div>
          <label>Label</label>
          <input type="text" placeholder="Text Input" />
        </div>
        <input type="email" placeholder="Email Input" />
        <input type="password" placeholder="Password" />
        <input type="number" placeholder="Number" />
      </div>
      <CodeBlock language="html">
{`<div><label>Label</label><input type="text" placeholder="Text Input" /></div>
<input type="email" placeholder="Email Input">
<input type="password" placeholder="Password">
<input type="number" placeholder="Number">`}
      </CodeBlock>

      <h3>Fill &amp; Outline Variants</h3>
      <p>Add <code>.fill</code> for filled background style or <code>.outline</code> for explicit border style:</p>
      <div className="example">
        <h4 className="text-sm font-semibold mb-2">Fill Variant (.fill)</h4>
        <input type="text" className="fill" placeholder="Fill Input" />
        
        <h4 className="text-sm font-semibold mb-2 mt-4">Outline Variant (.outline)</h4>
        <input type="text" className="outline" placeholder="Outline Input" />
        <select className="outline">
          <option>Outline Select</option>
          <option>Option 2</option>
        </select>
        <textarea className="outline" placeholder="Outline Textarea" rows="2"></textarea>
      </div>
      <CodeBlock language="html">
{`<!-- Fill Variant -->
<input type="text" class="fill" placeholder="Fill Input">

<!-- Outline Variant -->
<input type="text" class="outline" placeholder="Outline Input">
<select class="outline">...</select>
<textarea class="outline" placeholder="Outline Textarea"></textarea>`}
      </CodeBlock>

      <h3>Select</h3>
      <div className="example">
        <select>
          <option>Standard Select</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select className="fill">
          <option>Fill Select</option>
          <option>Option 2</option>
        </select>
      </div>
      <CodeBlock language="html">
{`<select>
  <option>Standard Select</option>
  <option>Option 2</option>
</select>

<select class="fill">
  <option>Fill Select</option>
</select>`}
      </CodeBlock>

      <h3>Textarea</h3>
      <div className="example">
        <textarea placeholder="Write something..." rows="3"></textarea>
      </div>
      <CodeBlock language="html">
{`<textarea placeholder="Write something..." rows="3"></textarea>`}
      </CodeBlock>

      <h3>Floating Labels (Outline &amp; Filled Style)</h3>
      <p>
        Wrap an input + label inside <code>.floating</code> (outline style) or <code>.floating-fill</code> / <code>.floating.fill</code> (filled Material container style).
        The label floats up on focus or when the input has content. Use <code>placeholder=" "</code> (space) for proper detection.
      </p>
      <div className="example">
        <h4 className="text-sm font-semibold mb-3">Outline Floating Inputs</h4>
        <div className="floating">
          <input type="email" id="float-email" placeholder=" " />
          <label htmlFor="float-email">Email Address</label>
        </div>
      </div>
      <CodeBlock language="html">
{`<!-- Outline Floating Input -->
<div class="floating">
  <input type="email" id="email" placeholder=" " />
  <label for="email">Email Address</label>
</div>`}
      </CodeBlock>

      <h3>Checkbox, Radio &amp; Switch Variants</h3>
      <div className="example">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <label><input type="checkbox" /> Standard checkbox</label>
            <label><input type="checkbox" defaultChecked /> Checked checkbox</label>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <label><input type="radio" name="demo" defaultChecked /> Radio option A</label>
            <label><input type="radio" name="demo" /> Radio option B</label>
          </div>
          <div className="flex items-center gap-6 flex-wrap mt-1">
            <label className="flex items-center gap-2">
              <input type="checkbox" role="switch" defaultChecked />
              <span>Standard Pill Switch</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="switch-android" defaultChecked />
              <span>Android Material Switch (.switch-android)</span>
            </label>
          </div>
        </div>
      </div>
      <CodeBlock language="html">
{`<!-- Checkbox & Radio -->
<label><input type="checkbox" checked> Checked</label>
<label><input type="radio" name="group" checked> Option A</label>

<!-- Standard Pill Switch -->
<label><input type="checkbox" role="switch" checked> Pill Switch</label>

<!-- Android Material Switch -->
<label><input type="checkbox" class="switch-android" checked> Android Switch</label>`}
      </CodeBlock>

      <h3>Fieldset & Legend</h3>
      <p>Group related inputs with <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code>:</p>
      <fieldset>
        <legend>Personal Information</legend>
        <div className="floating">
          <input type="text" placeholder=" " class="outline" />
          <label>First Name</label>
        </div>
        <div className="floating">
          <input type="text" placeholder=" " class="outline" />
          <label>Last Name</label>
        </div>
        <div className="floating">
          <input type="email" placeholder=" " class="outline" />
          <label>Email</label>
        </div>
        <button>Submit</button>
      </fieldset>
      <CodeBlock language="html">
{`<fieldset>
  <legend>Personal Information</legend>
  <div class="floating">
    <input type="text" placeholder=" " />
    <label>First Name</label>
  </div>
  <div class="floating">
    <input type="email" placeholder=" " />
    <label>Email</label>
  </div>
  <button>Submit</button>
</fieldset>`}
      </CodeBlock>

      <h3>Specialized Inputs (File, Slider &amp; Color)</h3>
      <div className="example flex flex-col gap-4">
        <div>
          <label className="text-xs font-semibold uppercase text-muted">File Upload (Custom File Selector)</label>
          <input type="file" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-muted">Range Slider</label>
          <input type="range" min="0" max="100" defaultValue="45" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-muted">Color Picker</label>
          <input type="color" defaultValue="#09090b" style={{ width: '5rem' }} />
        </div>
      </div>
      <CodeBlock language="html">
{`<!-- Styled File Input -->
<input type="file">

<!-- Custom Range Slider -->
<input type="range" min="0" max="100" value="45">

<!-- Color Picker -->
<input type="color" value="#09090b">`}
      </CodeBlock>

      <h3>Declarative Data Attributes (Zero JS Required)</h3>
      <p className="text-secondary mb-3">
        BlueBird.js adds powerful data attributes for common UI interactions without writing a single line of JavaScript:
      </p>
      
      {/* 1. Quick Action Triggers */}
      <div className="example flex flex-wrap items-center gap-3">
        <button className="secondary" data-copy="npm install bluebird-css">
          Copy Text (<kbd>data-copy</kbd>)
        </button>
        <button className="secondary" data-toast="Preferences updated successfully!" data-toast-title="Success" data-toast-type="success">
          Trigger Toast (<kbd>data-toast</kbd>)
        </button>
        <button className="secondary" data-snackbar="Profile saved in cloud" data-snackbar-type="success">
          Trigger Snackbar (<kbd>data-snackbar</kbd>)
        </button>
        <button className="outline" data-toggle="theme">
          Toggle Theme (<kbd>data-toggle="theme"</kbd>)
        </button>
        <button className="destructive" data-confirm="Are you sure you want to delete this item?">
          Delete (<kbd>data-confirm</kbd>)
        </button>
      </div>

      {/* 2. Password Toggle & Number Stepper */}
      <h4 className="text-sm font-semibold mt-4 mb-2">Password Unmask &amp; Number Stepper</h4>
      <div className="example flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <label className="text-xs font-semibold uppercase text-muted">Password with Toggle</label>
          <div className="input-group">
            <input type="password" id="demo-pwd" defaultValue="supersecret123" placeholder="Enter password" />
            <button className="secondary" data-password-toggle="#demo-pwd" aria-label="Toggle password visibility">
              👁️
            </button>
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-muted">Number Stepper</label>
          <div className="stepper">
            <button data-step-down="#qty-input">−</button>
            <input type="number" id="qty-input" defaultValue="1" min="1" max="100" />
            <button data-step-up="#qty-input">+</button>
          </div>
        </div>
      </div>

      {/* 3. Auto-Resize Textarea */}
      <h4 className="text-sm font-semibold mt-4 mb-2">Auto-Expanding Textarea (<kbd>data-auto-resize</kbd>)</h4>
      <div className="example">
        <label className="text-xs font-semibold uppercase text-muted">Type multiple lines to expand smoothly:</label>
        <textarea data-auto-resize placeholder="Type something here, press enter multiple times..."></textarea>
      </div>

      {/* 4. Real-Time Search Filter (ComboBox / Live List Filter) */}
      <h4 className="text-sm font-semibold mt-4 mb-2">Real-Time Search Filter (<kbd>data-filter-target</kbd>)</h4>
      <p className="text-muted text-sm mb-3">
        Type in the input to filter list items or table rows instantly in real time (works like a live filter, Datalist, or Select2 dropdown):
      </p>
      <div className="example flex flex-col gap-3">
        <input 
          type="text" 
          data-filter-target="#filterable-list" 
          placeholder="Filter frameworks (e.g. React, Vue, Svelte, Tailwind)..." 
        />
        <ul id="filterable-list" className="border rounded-xl p-2 flex flex-col gap-1 bg-surface">
          <li className="p-2 rounded-lg hover:bg-secondary cursor-pointer flex justify-between">
            <span>React.js</span> <span className="badge badge-secondary">Library</span>
          </li>
          <li className="p-2 rounded-lg hover:bg-secondary cursor-pointer flex justify-between">
            <span>Vue.js</span> <span className="badge badge-secondary">Framework</span>
          </li>
          <li className="p-2 rounded-lg hover:bg-secondary cursor-pointer flex justify-between">
            <span>Svelte &amp; SvelteKit</span> <span className="badge badge-secondary">Compiler</span>
          </li>
          <li className="p-2 rounded-lg hover:bg-secondary cursor-pointer flex justify-between">
            <span>Tailwind CSS</span> <span className="badge badge-secondary">Utility CSS</span>
          </li>
          <li className="p-2 rounded-lg hover:bg-secondary cursor-pointer flex justify-between">
            <span>Next.js App Router</span> <span className="badge badge-secondary">Fullstack</span>
          </li>
          <li className="p-2 rounded-lg hover:bg-secondary cursor-pointer flex justify-between">
            <span>Astro</span> <span className="badge badge-secondary">Static Site</span>
          </li>
          <li className="no-filter-results">No matching results found</li>
        </ul>
      </div>

      <CodeBlock language="html">
{`<!-- 1. Real-time Live Filter / Searchable Dropdown -->
<input type="text" data-filter-target="#my-list" placeholder="Search...">
<ul id="my-list">
  <li>React.js</li>
  <li>Vue.js</li>
  <li>Next.js</li>
  <li class="no-filter-results">No results found</li>
</ul>

<!-- 2. Password show/hide toggle -->
<div class="input-group">
  <input type="password" id="pwd">
  <button data-password-toggle="#pwd">👁️</button>
</div>

<!-- 3. Auto-expanding textarea -->
<textarea data-auto-resize placeholder="Auto expands..."></textarea>

<!-- 4. Number Stepper -->
<div class="stepper">
  <button data-step-down="#qty">−</button>
  <input type="number" id="qty" value="1" min="1" max="10">
  <button data-step-up="#qty">+</button>
</div>

<!-- 5. Prompt Confirmation before Action -->
<button class="destructive" data-confirm="Are you sure you want to delete?">Delete</button>

<!-- 6. Smooth Scroll to Element -->
<button data-scroll-to="#section-id">Scroll to Top</button>`}
      </CodeBlock>

      <h3>Validation States</h3>
      <CodeBlock language="html">
{`<!-- Invalid select -->
<select aria-invalid="true">
  <option>Please select...</option>
</select>

<!-- Disabled fieldset -->
<fieldset disabled>
  <legend>Disabled form</legend>
  <input type="text" placeholder="Can't edit">
  <button>Can't click</button>
</fieldset>`}
      </CodeBlock>
    </article>
  );
}

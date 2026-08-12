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
        <input type="text" placeholder="Text Input" />
        <input type="email" placeholder="Email Input" />
        <input type="password" placeholder="Password" />
        <input type="number" placeholder="Number" />
      </div>
      <CodeBlock language="html">
{`<input type="text" placeholder="Text Input">
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
          <input type="text" placeholder=" " />
          <label>First Name</label>
        </div>
        <div className="floating">
          <input type="text" placeholder=" " />
          <label>Last Name</label>
        </div>
        <div className="floating">
          <input type="email" placeholder=" " />
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

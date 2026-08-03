import CodeBlock from '../components/CodeBlock';

/**
 * Flex and Sizing utilities documentation page component
 * @returns {JSX.Element} The rendered FlexSizing page
 */
export default function FlexSizing() {
  return (
    <article className="glass p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-2">Flex &amp; Sizing Utilities</h2>
      <p className="text-secondary mb-4">
        Complete Tailwind-inspired flexbox layout, alignment, gap, and sizing utilities.
      </p>

      <h3>Flex Container</h3>
      <div className="example">
        <div className="flex items-center bg-surface p-4 rounded">
          <span>Item 1</span>
          <span>Item 2</span>
          <span>Item 3</span>
        </div>
      </div>
      <CodeBlock language="html">
{`<!-- Basic flex (includes gap: 1rem) -->
<div class="flex">...</div>

<!-- Flex column -->
<div class="flex flex-col">...</div>

<!-- Flex with wrap -->
<div class="flex flex-wrap">...</div>

<!-- Flex without gap -->
<div class="flex no-gap">...</div>`}
      </CodeBlock>

      <h3>Alignment</h3>
      <div className="example">
        <div className="flex between items-center bg-surface p-4 rounded">
          <span>Left</span>
          <span>Center (between)</span>
          <span>Right</span>
        </div>
      </div>
      <CodeBlock language="html">
{`<!-- Justify -->
<div class="flex justify-start">...</div>
<div class="flex justify-center">...</div>
<div class="flex justify-end">...</div>
<div class="flex justify-between">...</div>
<div class="flex justify-around">...</div>
<div class="flex justify-evenly">...</div>
<div class="flex between">...</div>  <!-- shorthand -->

<!-- Align Items -->
<div class="flex items-start">...</div>
<div class="flex items-center">...</div>
<div class="flex items-end">...</div>
<div class="flex items-stretch">...</div>
<div class="flex items-baseline">...</div>

<!-- Self Alignment -->
<div class="self-start">...</div>
<div class="self-center">...</div>
<div class="self-end">...</div>
<div class="self-stretch">...</div>`}
      </CodeBlock>

      <h3>Flex Children</h3>
      <div className="example">
        <div className="flex bg-surface p-2 rounded">
          <div className="card flex-1 text-center p-2">.flex-1</div>
          <div className="card flex-1 text-center p-2">.flex-1</div>
          <div className="card flex-none text-center p-2">.flex-none</div>
        </div>
      </div>
      <CodeBlock language="html">
{`<div class="flex-1">...</div>       <!-- flex: 1 1 0% -->
<div class="flex-auto">...</div>    <!-- flex: 1 1 auto -->
<div class="flex-initial">...</div> <!-- flex: 0 1 auto -->
<div class="flex-none">...</div>    <!-- flex: none -->`}
      </CodeBlock>

      <h3>Sizing</h3>
      <CodeBlock language="html">
{`<!-- Width -->
.w-full       /* width: 100% */
.w-screen     /* width: 100vw */
.w-auto       /* width: auto */

<!-- Height -->
.h-full       /* height: 100% */
.h-screen     /* height: 100vh */
.h-auto       /* height: auto */
.min-h-screen /* min-height: 100vh */

<!-- Max Width -->
.max-w-10   .max-w-25   .max-w-50   .max-w-75   .max-w-100`}
      </CodeBlock>

      <h3>Display & Visibility</h3>
      <CodeBlock language="html">
{`.flex         /* display: flex + gap: 1rem */
.inline-flex  /* display: inline-flex */
.block        /* display: block */
.inline-block /* display: inline-block */
.inline       /* display: inline */
.hidden       /* display: none */`}
      </CodeBlock>

      <h3>Overflow</h3>
      <CodeBlock language="html">
{`.overflow-hidden   .overflow-auto   .overflow-scroll
.overflow-x-auto   .overflow-y-auto`}
      </CodeBlock>

      <h3>Positioning</h3>
      <CodeBlock language="html">
{`.relative   .absolute   .fixed   .sticky
.top-0   .bottom-0   .left-0   .right-0
.z-0   .z-10   .z-20   .z-30   .z-40   .z-50`}
      </CodeBlock>

      <h3>Cursor</h3>
      <CodeBlock language="html">
{`.cursor-pointer
.cursor-not-allowed
.cursor-default`}
      </CodeBlock>
    </article>
  );
}

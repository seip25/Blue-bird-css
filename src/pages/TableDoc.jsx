import { useEffect, useRef, useState } from 'react';
import CodeBlock from '../components/CodeBlock';

const sampleUsers = [
  { id: 1, name: 'Ana López', email: 'ana.lopez@example.com', role: '<span class="badge badge-primary">Admin</span>', status: '<span class="badge badge-success">Active</span>' },
  { id: 2, name: 'Luis García', email: 'luis.garcia@example.com', role: '<span class="badge badge-secondary">Editor</span>', status: '<span class="badge badge-success">Active</span>' },
  { id: 3, name: 'Marta Ruiz', email: 'marta.ruiz@example.com', role: '<span class="badge badge-outline">Viewer</span>', status: '<span class="badge badge-destructive">Inactive</span>' },
  { id: 4, name: 'Carlos Díaz', email: 'carlos.diaz@example.com', role: '<span class="badge badge-secondary">Editor</span>', status: '<span class="badge badge-warning">Pending</span>' },
  { id: 5, name: 'Elena Gómez', email: 'elena.gomez@example.com', role: '<span class="badge badge-primary">Admin</span>', status: '<span class="badge badge-success">Active</span>' },
  { id: 6, name: 'Javier Morales', email: 'javier.m@example.com', role: '<span class="badge badge-outline">Viewer</span>', status: '<span class="badge badge-success">Active</span>' },
  { id: 7, name: 'Sofía Vargas', email: 'sofia.v@example.com', role: '<span class="badge badge-secondary">Editor</span>', status: '<span class="badge badge-destructive">Inactive</span>' },
  { id: 8, name: 'Diego Torres', email: 'diego.t@example.com', role: '<span class="badge badge-outline">Viewer</span>', status: '<span class="badge badge-warning">Pending</span>' },
  { id: 9, name: 'Lucía Fernández', email: 'lucia.f@example.com', role: '<span class="badge badge-primary">Admin</span>', status: '<span class="badge badge-success">Active</span>' },
  { id: 10, name: 'Mateo Castillo', email: 'mateo.c@example.com', role: '<span class="badge badge-outline">Viewer</span>', status: '<span class="badge badge-success">Active</span>' },
  { id: 11, name: 'Valeria Mendoza', email: 'valeria.m@example.com', role: '<span class="badge badge-secondary">Editor</span>', status: '<span class="badge badge-success">Active</span>' },
  { id: 12, name: 'Andrés Silva', email: 'andres.s@example.com', role: '<span class="badge badge-outline">Viewer</span>', status: '<span class="badge badge-warning">Pending</span>' },
];

export default function TableDoc() {
  const tableContainerRef = useRef(null);
  const datatableInstanceRef = useRef(null);
  const [activeTab, setActiveTab] = useState('interactive');

  useEffect(() => {
    if (activeTab === 'interactive' && tableContainerRef.current) {
      // Clear container before re-initializing
      tableContainerRef.current.innerHTML = '';

      if (window.ResponsiveDataTable) {
        datatableInstanceRef.current = new window.ResponsiveDataTable(tableContainerRef.current, {
          data: sampleUsers,
          columns: [
            { key: 'id', title: 'ID' },
            { key: 'name', title: 'User Name' },
            { key: 'email', title: 'Email Address' },
            { key: 'role', title: 'Role' },
            { key: 'status', title: 'Status' },
          ],
          rowsPerPage: 5,
          search: true,
          pagination: true,
          summaryFields: ['name'],
          edit: (event, id) => {
            if (window.toast) {
              window.toast({
                title: 'Edit Action',
                description: `Editing record with ID: ${id}`,
                type: 'info',
              });
            }
          },
          delete: (event, id) => {
            if (window.toast) {
              window.toast({
                title: 'Delete Action',
                description: `Record with ID ${id} deleted (demo).`,
                type: 'error',
              });
            }
          },
          breakpoint: 768,
        });
      }
    }
  }, [activeTab]);

  return (
    <article className="border rounded-xl p-6 mb-8 bg-surface shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
        <div>
          <h2 className="text-3xl font-bold mb-1">Tables &amp; ResponsiveDataTable</h2>
          <p className="text-secondary">
            Semantic HTML tables with clean borders and automatic hover effects, plus a dynamic JavaScript-powered responsive data table with instant search, pagination, and mobile card transformation.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className={`btn-sm ${activeTab === 'interactive' ? 'primary' : 'outline'}`}
            onClick={() => setActiveTab('interactive')}
          >
            Interactive DataTable
          </button>
          <button
            className={`btn-sm ${activeTab === 'semantic' ? 'primary' : 'outline'}`}
            onClick={() => setActiveTab('semantic')}
          >
            Semantic Table
          </button>
        </div>
      </div>

      {activeTab === 'interactive' && (
        <>
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Live Demo: ResponsiveDataTable</h3>
              <span className="badge badge-primary badge-sm">bluebird.js</span>
            </div>
            <p className="text-muted text-sm mb-4">
              Try typing in the search box, navigating through pages, clicking <strong>Edit / Delete</strong>, or resizing your browser window under <code>768px</code> to see it seamlessly transform into a mobile-friendly card feed!
            </p>

            <div className="">
              <div ref={tableContainerRef} id="datatable-demo" className="w-full"></div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Basic HTML &amp; Vanilla JavaScript Usage</h3>
            <p className="text-muted mb-4">
              Create an empty container <code>&lt;div id=&quot;my-datatable&quot;&gt;&lt;/div&gt;</code> and initialize it with <code>new ResponsiveDataTable()</code> or <code>bluebird(&#39;datatable&#39;, options)</code>:
            </p>
            <CodeBlock language="html">
              {`<!-- Container Element in your HTML -->
<div id="my-datatable"></div>

<!-- Include Blue Bird CSS & JS -->
<link rel="stylesheet" href="https://seip25.github.io/Blue-bird-css/bluebird.css" />
<script src="https://seip25.github.io/Blue-bird-css/bluebird.js"></script>
              `}
            </CodeBlock>
            <CodeBlock language="javascript">
              {`
    // Initialize ResponsiveDataTable
  const table = new ResponsiveDataTable('my-datatable', {
    data: [
      { id: 1, name: 'Ana López', role: 'Admin', status: 'Active' },
      { id: 2, name: 'Luis García', role: 'Editor', status: 'Active' },
      { id: 3, name: 'Marta Ruiz', role: 'Viewer', status: 'Inactive' },
      { id: 4, name: 'Carlos Díaz', role: 'Editor', status: 'Pending' }
    ],
    columns: [
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'User Name' },
      { key: 'role', title: 'Role' },
      { key: 'status', title: 'Status' }
    ],
    rowsPerPage: 5,
    search: true,        // Live instant search
    pagination: true,    // Automatic page numbers & controls
    summaryFields: ['name'], // Field shown in header when in mobile card view
    edit: (event, id) => console.log('Edit clicked for ID:', id),
    delete: (event, id) => console.log('Delete clicked for ID:', id),
    breakpoint: 768      // Screen width (px) to switch between table and card view
  });
  `}
            </CodeBlock>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Using `bluebird(&#39;datatable&#39;, options)` Helper</h3>
            <p className="text-muted mb-4">
              You can also use the unified <code>bluebird()</code> dispatcher function:
            </p>
            <CodeBlock language="javascript">
              {`// Initialize via global bluebird() function:
const table = bluebird('datatable', {
  container: 'my-datatable', // Container ID or DOM Element
  data: usersList,
  columns: [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' }
  ],
  rowsPerPage: 10,
  search: true,
  pagination: true
});`}
            </CodeBlock>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Configuration Options</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>data</code></td>
                    <td><code>Array&lt;Object&gt;</code></td>
                    <td><code>[]</code></td>
                    <td>Array of row objects to display in the table.</td>
                  </tr>
                  <tr>
                    <td><code>columns</code></td>
                    <td><code>Array&lt;Object&gt;</code></td>
                    <td><code>[]</code></td>
                    <td>Column definitions: <code>&#123; key: string, title: string &#125;</code>.</td>
                  </tr>
                  <tr>
                    <td><code>rowsPerPage</code></td>
                    <td><code>number</code></td>
                    <td><code>10</code></td>
                    <td>Number of records per page.</td>
                  </tr>
                  <tr>
                    <td><code>search</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Enables the real-time search input bar above the table.</td>
                  </tr>
                  <tr>
                    <td><code>pagination</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Enables pagination controls below the table.</td>
                  </tr>
                  <tr>
                    <td><code>summaryFields</code></td>
                    <td><code>Array&lt;string&gt;</code></td>
                    <td><code>['id']</code></td>
                    <td>Column keys displayed prominently in the mobile card title header.</td>
                  </tr>
                  <tr>
                    <td><code>edit</code></td>
                    <td><code>boolean | Function</code></td>
                    <td><code>false</code></td>
                    <td>Callback function <code>(event, item) =&gt; ...</code> when Edit is clicked.</td>
                  </tr>
                  <tr>
                    <td><code>delete</code></td>
                    <td><code>boolean | Function</code></td>
                    <td><code>false</code></td>
                    <td>Callback function <code>(event, item) =&gt; ...</code> when Delete is clicked.</td>
                  </tr>
                  <tr>
                    <td><code>breakpoint</code></td>
                    <td><code>number</code></td>
                    <td><code>768</code></td>
                    <td>Viewport width (in px) under which the table switches to mobile cards.</td>
                  </tr>
                  <tr>
                    <td><code>headerTitles</code></td>
                    <td><code>Object</code></td>
                    <td><code>&#123;&#125;</code></td>
                    <td>Optional key-to-title dictionary override (e.g. <code>&#123; email: 'Correo' &#125;</code>).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Instance Methods</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Parameters</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>table.updateData(newData)</code></td>
                    <td><code>Array&lt;Object&gt;</code></td>
                    <td>Replaces table data, updates search filter cache, and resets to page 1.</td>
                  </tr>
                  <tr>
                    <td><code>table.updateColumns(newColumns)</code></td>
                    <td><code>Array&lt;Object&gt;</code></td>
                    <td>Reconfigures table columns dynamically.</td>
                  </tr>
                  <tr>
                    <td><code>table.changePage(pageNumber)</code></td>
                    <td><code>number</code></td>
                    <td>Navigates to a specific pagination page index.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}

      {activeTab === 'semantic' && (
        <>
          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">Basic Semantic Table</h3>
            <p className="text-muted mb-4">
              Pure HTML <code>&lt;table&gt;</code> elements are automatically styled with modern typography, subtle borders, and smooth row hover transitions.
            </p>
            <div className="example p-4 rounded-xl border mb-4">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ana López</td>
                    <td><span className="badge badge-primary">Admin</span></td>
                    <td><span className="text-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Luis García</td>
                    <td><span className="badge badge-secondary">Editor</span></td>
                    <td><span className="text-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Marta Ruiz</td>
                    <td><span className="badge badge-outline">Viewer</span></td>
                    <td><span className="text-error">Inactive</span></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Carlos Díaz</td>
                    <td><span className="badge badge-secondary">Editor</span></td>
                    <td><span className="text-yellow">Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <CodeBlock language="html">
              {`<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>User</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ana López</td>
      <td><span class="badge badge-primary">Admin</span></td>
      <td class="text-success">Active</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Luis García</td>
      <td><span class="badge badge-secondary">Editor</span></td>
      <td class="text-success">Active</td>
    </tr>
  </tbody>
</table>`}
            </CodeBlock>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold mb-2">CSS Applied Out of the Box</h3>
            <CodeBlock language="css">
              {`table {
  width: 100%;
  border-collapse: collapse;
}

td, th {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

tbody tr:hover {
  background-color: var(--gray-50);
}`}
            </CodeBlock>
          </section>
        </>
      )}
    </article>
  );
}

import { NavLink } from 'react-router-dom';

const sections = [
  {
    title: 'Getting Started',
    links: [
      { to: '/', label: 'Introduction' },
    ],
  },
  {
    title: 'Elements',
    links: [
      { to: '/buttons', label: 'Buttons' },
      { to: '/forms', label: 'Forms' },
      { to: '/typography', label: 'Typography' },
      { to: '/table', label: 'Table' },
    ],
  },
  {
    title: 'Layout',
    links: [
      { to: '/container', label: 'Container' },
      { to: '/grid', label: 'Grid System' },
      { to: '/spacing', label: 'Spacing' },
    ],
  },
  {
    title: 'Components',
    links: [
      { to: '/cards', label: 'Card Content Block' },
      { to: '/components-doc', label: 'shadcn Components' },
      { to: '/accordion', label: 'Accordion' },
      { to: '/dialog', label: 'Dialog (Modal)' },
      { to: '/dropdown', label: 'Dropdown' },
      { to: '/snackbar', label: 'Snackbar' },
      { to: '/aside-drawer', label: 'Aside & Drawer' },
    ],
  },
  {
    title: 'Utilities',
    links: [
      { to: '/flex-sizing', label: 'Flex & Sizing' },
      { to: '/responsive', label: 'Responsive Visibility' },
      { to: '/colors', label: 'Colors' },
      { to: '/shadows', label: 'Shadows' },
      { to: '/borders', label: 'Borders' },
      { to: '/bottom-nav', label: 'Bottom Nav' },
    ],
  },
];

/**
 * Documentation navigation sidebar component
 * @returns {JSX.Element} The rendered sidebar component
 */
export default function Sidebar() {
  return (
    <aside className="glass p-4 rounded-xl border">
      {sections.map((section) => (
        <div key={section.title} className="mb-4">
          <h4 className="text-xs uppercase tracking-wider text-muted font-bold mb-2">{section.title}</h4>
          {section.links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => isActive ? 'active badge-glow' : 'hover-lift'}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  );
}

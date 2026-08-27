import { NavLink } from 'react-router-dom';

const sections = [
  {
    title: 'Getting Started',
    links: [
      { to: '/', label: 'Introduction' },
      { to: '/nextjs', label: 'Next.js Guide' },
    ],
  },
  {
    title: 'Elements',
    links: [
      { to: '/buttons', label: 'Buttons' },
      { to: '/forms', label: 'Forms' },
      { to: '/typography', label: 'Typography' },
      { to: '/table', label: 'Table & Datatable' },
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
      { to: '/components-doc', label: 'Modern Components' },
      { to: '/tabs', label: 'Tabs System' },
      { to: '/skeleton', label: 'Skeleton Loading' },
      { to: '/toast', label: 'Multi-Toast System' },
      { to: '/command', label: 'Command Palette (Ctrl+K)' },
      { to: '/progress', label: 'Progress, Steps & Spinners' },
      { to: '/carousel', label: 'Touch Carousel' },
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
      { to: '/animations', label: 'CSS Animations' },
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
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  );
}

import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useLocation, useNavigate } from 'react-router-dom';
import 'highlight.js/styles/atom-one-dark.css';
import './App.css';

import Sidebar from './components/Sidebar';
import Introduction from './pages/Introduction';
import Buttons from './pages/Buttons';
import Forms from './pages/Forms';
import Typography from './pages/Typography';
import TableDoc from './pages/TableDoc';
import Container from './pages/Container';
import Grid from './pages/Grid';
import Spacing from './pages/Spacing';
import Cards from './pages/Cards';
import Accordion from './pages/Accordion';
import Dialog from './pages/Dialog';
import Dropdown from './pages/Dropdown';
import Snackbar from './pages/Snackbar';
import FlexSizing from './pages/FlexSizing';
import Responsive from './pages/Responsive';
import Colors from './pages/Colors';
import Shadows from './pages/Shadows';
import Borders from './pages/Borders';
import BottomNav from './pages/BottomNav';
import AsideDrawer from './pages/AsideDrawer';
import ComponentsDoc from './pages/ComponentsDoc';
import NextjsGuide from './pages/NextjsGuide';
import CarouselDoc from './pages/CarouselDoc';
import Animations from './pages/Animations';
import TabsDoc from './pages/TabsDoc';
import SkeletonDoc from './pages/SkeletonDoc';
import ToastDoc from './pages/ToastDoc';
import CommandDoc from './pages/CommandDoc';
import ProgressDoc from './pages/ProgressDoc';

// const themes = [
//   { value: 'bluebird.css', label: 'Default' },
// ];

/**
 * Main Application Layout component featuring glassmorphic navigation header
 */
function Layout() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#/')) {
        const path = window.location.hash.slice(1);
        navigate(path);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [navigate]);

  const toggleMode = () => {
    const html = document.documentElement;
    const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    setIsDark(newTheme === 'dark');
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-surface">
        <nav className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-xl tracking-tight">Blue Bird CSS</h2>
            <span className="badge badge-secondary badge-sm hidden-sm">v1.0</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button 
              className="secondary flex items-center gap-2 text-sm text-muted"
              onClick={() => window.bluebird && window.bluebird('command', { action: 'open' })}
              style={{ padding: '0.35rem 0.75rem' }}
            >
              <span>Search docs...</span>
              <kbd>Ctrl+K</kbd>
            </button>
            <a
              href="https://github.com/seip25/Blue-bird-css"
              target="_blank"
              rel="noreferrer"
              role='button'
              className="outline flex items-center gap-1 rounded-full text-sm"
            >
              <span>GitHub</span>
            </a>
            <button className="outline rounded-full text-sm" onClick={toggleMode}>
              {isDark ? 'Light' : 'Dark'}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </main>

      <footer>
        <p className="text-muted">Blue Bird CSS © {new Date().getFullYear()} — Built for modern &amp; sleek web development</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Introduction />} />
        <Route path="/nextjs" element={<NextjsGuide />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/table" element={<TableDoc />} />
        <Route path="/container" element={<Container />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/spacing" element={<Spacing />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/components-doc" element={<ComponentsDoc />} />
        <Route path="/tabs" element={<TabsDoc />} />
        <Route path="/skeleton" element={<SkeletonDoc />} />
        <Route path="/toast" element={<ToastDoc />} />
        <Route path="/command" element={<CommandDoc />} />
        <Route path="/progress" element={<ProgressDoc />} />
        <Route path="/carousel" element={<CarouselDoc />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/dialog" element={<Dialog />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/snackbar" element={<Snackbar />} />
        <Route path="/aside-drawer" element={<AsideDrawer />} />
        <Route path="/animations" element={<Animations />} />
        <Route path="/flex-sizing" element={<FlexSizing />} />
        <Route path="/responsive" element={<Responsive />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/shadows" element={<Shadows />} />
        <Route path="/borders" element={<Borders />} />
        <Route path="/bottom-nav" element={<BottomNav />} />
      </Route>
    </Routes>
  );
}

export default App;

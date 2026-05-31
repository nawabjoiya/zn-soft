import { useEffect, useState } from 'react';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import { PrimaryButton } from '../ui/PrimaryButton';
import TopBar from './TopBar';

const TOPBAR_H = 44;
const NAV_H = 80;

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

/* STATIC NAVIGATION */
const NAVIGATION = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    children: [
      { label: 'Web Development', to: '/services/web-development' },
      { label: 'Mobile Apps', to: '/services/mobile-apps' },
      { label: 'UI/UX Design', to: '/services/ui-ux-design' },
      { label: 'Cloud Solutions', to: '/services/cloud-solutions' },
    ],
  },
  {
    label: 'Projects',
    children: [
      { label: 'Web Projects', to: '/projects/web' },
      { label: 'Mobile Projects', to: '/projects/mobile' },
    ],
  },
  { label: 'Blog', to: '/blog' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

function MenuItem({ item, onNavigate }) {
  const hasChildren = item.children?.length;

  if (!hasChildren) {
    return (
      <NavLink
        to={item.to}
        end={item.to === '/'}
        onClick={onNavigate}
        className={({ isActive }) =>
          cx(
            'relative py-1 text-sm font-medium uppercase tracking-wide transition',
            isActive ? 'text-brand' : 'text-white hover:text-brand'
          )
        }
      >
        {item.label}
        <span className="nav-link-accent" aria-hidden />
      </NavLink>
    );
  }

  return (
    <div className="group relative flex h-20 items-center">
      <span className="flex cursor-default items-center gap-1 text-sm font-medium uppercase tracking-wide text-white">
        {item.label}
        <FaChevronDown className="text-[10px] transition group-hover:rotate-180" />
      </span>

      <div className="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-2 border-t-2 border-brand bg-white py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {item.children.map((child) => (
          <NavLink
            key={child.to}
            to={child.to}
            onClick={onNavigate}
            className="block px-4 py-2.5 text-sm text-dark transition hover:bg-gray-100 hover:text-brand"
          >
            {child.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

function MobileItem({ item, depth = 0, onClose }) {
  const hasChildren = item.children?.length;
  const pad = { paddingLeft: `${depth * 12 + 8}px` };

  if (!hasChildren) {
    return (
      <NavLink
        to={item.to}
        style={pad}
        onClick={onClose}
        className={({ isActive }) =>
          cx(
            'block py-2.5 text-sm transition',
            isActive ? 'text-brand' : 'text-white hover:text-brand'
          )
        }
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div>
      <p style={pad} className="py-2 text-xs font-bold uppercase tracking-wider text-gray-400">
        {item.label}
      </p>

      {item.children.map((child) => (
        <MobileItem
          key={child.to}
          item={child}
          depth={depth + 1}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

export default function SiteHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const [menu, setMenu] = useState({ open: false, path: pathname });
  const [scrolled, setScrolled] = useState(false);

  const open = menu.open && menu.path === pathname;
  const showTopBar = isHome && !scrolled;

  const closeMobile = () =>
    setMenu({ open: false, path: pathname });

  const toggleMobile = () =>
    setMenu((cur) => ({
      open: !(cur.open && cur.path === pathname),
      path: pathname,
    }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  return (
    <>
      {/* TOP BAR */}
      <div
        className="fixed left-0 right-0 top-0 z-[9998]"
        style={{ height: showTopBar ? TOPBAR_H : 0 }}
      >
        {showTopBar && (
          <TopBar
            settings={{
              phone: '+92 300 1234567',
              email: 'info@znsoftsolutions.com',
            }}
          />
        )}
      </div>

      {/* HEADER */}
      <header
        className={cx(
          'fixed left-0 right-0 z-[9999] w-full transition duration-500',
          scrolled || !isHome ? 'bg-dark shadow-lg' : 'bg-transparent',
          open && 'bg-dark'
        )}
        style={{
          top: showTopBar ? TOPBAR_H : 0,
          height: NAV_H,
        }}
      >
        <div className="container-site flex h-20 items-center justify-between">

          <Logo light />

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-6 lg:flex">
            {NAVIGATION.map((item) => (
              <MenuItem
                key={item.label}
                item={item}
                onNavigate={closeMobile}
              />
            ))}
          </nav>

          {/* CTA */}
          <PrimaryButton to="/contact" className="hidden lg:inline-flex">
            Get Free Quote
          </PrimaryButton>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="text-2xl text-white lg:hidden"
            onClick={toggleMobile}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-dark px-4 py-4 lg:hidden">
            {NAVIGATION.map((item) => (
              <MobileItem
                key={item.label}
                item={item}
                onClose={closeMobile}
              />
            ))}

            <Link
              to="/contact"
              onClick={closeMobile}
              className="zn-btn mt-4 block text-center"
            >
              Get Free Quote
            </Link>
          </div>
        )}
      </header>

      {/* SPACER */}
      <div
        className="pointer-events-none fixed left-0 right-0 top-0 z-[9997]"
        style={{ height: showTopBar ? TOPBAR_H + NAV_H : NAV_H }}
      />
    </>
  );
}

export { TOPBAR_H, NAV_H };
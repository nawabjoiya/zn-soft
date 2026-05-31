import { Outlet, useLocation } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import Footer from './Footer';
import BackToTop from '../ui/BackToTop';

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="flex min-h-screen flex-col">

      {/* HEADER */}
      <SiteHeader />

      {/* MAIN */}
      <main
        className="flex-1"
        style={{ paddingTop: isHome ? 0 : 90 }}
      >
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* BACK TO TOP */}
      <BackToTop />

    </div>
  );
}
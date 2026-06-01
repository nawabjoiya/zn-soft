import { Link } from 'react-router-dom';
import AnimateIn from '../animation/AnimateIn';
import { Stagger, StaggerItem } from '../animation/Stagger';
import Logo from '../ui/Logo';

const gallery = Array.from(
  { length: 6 },
  (_, i) => `/assets/images/project/footer-widget-Gallery-img-${i + 1}.jpg`
);

export default function Footer() {
  return (
    <footer className="bg-dark pt-16 text-gray-300">

      <div className="container-site">

        <Stagger className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-12" stagger={0.08}>

          {/* ABOUT */}
          <StaggerItem className="lg:col-span-3">
            <div className="[&_span]:text-white">
              <Logo light />
            </div>

            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              ZN Soft Solutions is a modern software agency delivering web
              development, mobile apps, UI/UX design, and digital solutions
              for startups and enterprises worldwide.
            </p>

            <h4 className="mb-3 mt-6 text-lg font-semibold text-white">
              Follow Us
            </h4>

            <div className="flex gap-2">
              {[
                { label: 'f', href: '#' },
                { label: 't', href: '#' },
                { label: 'in', href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs uppercase transition hover:bg-brand"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </StaggerItem>

          {/* LINKS */}
          <StaggerItem className="lg:col-span-2">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Useful Links
            </h4>

            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/team" className="transition hover:text-brand">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-brand">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="transition hover:text-brand">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="transition hover:text-brand">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-brand">
                  Contact
                </Link>
              </li>
            </ul>
          </StaggerItem>

          {/* NEWSLETTER */}
          <StaggerItem className="lg:col-span-3">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Newsletter
            </h4>

            <p className="mb-4 text-sm text-gray-400">
              Subscribe to ZN Soft Solutions newsletter for updates, insights,
              and latest tech trends.
            </p>

            <form
              className="flex overflow-hidden rounded-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter Email Address"
                className="min-w-0 flex-1 bg-white px-4 py-3 text-sm text-dark outline-none"
              />
              <button
                type="submit"
                className="bg-brand px-4 text-white transition hover:bg-brand-dark"
              >
                →
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-400">
              Call Anytime
              <br />
              <span className="font-semibold text-white">
                +92 3029124692
              </span>
            </p>
          </StaggerItem>

          {/* GALLERY */}
          <StaggerItem className="lg:col-span-4">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Gallery
            </h4>

            <div className="grid grid-cols-3 gap-2">
              {gallery.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="ZN project"
                  className="aspect-square rounded-sm object-cover transition hover:opacity-80"
                />
              ))}
            </div>
          </StaggerItem>

        </Stagger>
      </div>

      {/* COPYRIGHT */}
      <AnimateIn
        variant="fadeInUp"
        className="border-t border-white/10 py-6 text-center text-sm text-gray-500"
      >
        Copyright © 2026 ZN Soft Solutions. All Rights Reserved.
      </AnimateIn>
    </footer>
  );
}
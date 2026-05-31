import { Link } from 'react-router-dom';
import AnimateIn from '../animation/AnimateIn';
import { Stagger, StaggerItem } from '../animation/Stagger';
import { fadeInLeft, fadeInRight } from '../animation/variants';
import SectionBadge from '../ui/SectionBadge';
import {
  CodeMonitorIcon,
  PenToolIcon,
  StrategyIcon,
  TilesIcon,
} from '../ui/LineIcons';

const icons = [
  CodeMonitorIcon,
  PenToolIcon,
  TilesIcon,
  StrategyIcon,
];

const SERVICES = [
  {
    id: 1,
    slug: 'web-development',
    title: 'Web Development',
    excerpt:
      'We build fast, responsive, and scalable web applications using modern technologies like React, Node.js, and Tailwind CSS.',
    image: '/assets/images/services/services-1-1.jpg',
  },
  {
    id: 2,
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    excerpt:
      'We design user-friendly interfaces focused on engagement, usability, and conversion optimization.',
    image: '/assets/images/services/services-1-2.jpg',
  },
  {
    id: 3,
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    excerpt:
      'We create high-performance mobile applications for Android and iOS using modern frameworks.',
    image: '/assets/images/services/services-1-3.jpg',
  },
  {
    id: 4,
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    excerpt:
      'We help businesses grow online through SEO, social media marketing, and performance campaigns.',
    image: '/assets/images/services/services-1-4.jpg',
  },
];

export default function ServicesSection() {
  const displayServices = SERVICES.slice(0, 4);

  return (
    <section className="relative bg-white py-20 md:py-[120px]">

      {/* Background Text */}
      <h3 className="pointer-events-none absolute bottom-[307px] left-[-73px] hidden select-none text-[100px] font-extrabold uppercase leading-none tracking-[0.1em] text-[#f4f1ee] rotate-90 xl:block">
        ZN Soft Solutions
      </h3>

      <div className="container-site">

        {/* HEADER */}
        <AnimateIn variant="fadeInUp" className="mb-12 text-center">
          <SectionBadge>Our Services</SectionBadge>

          <h2 className="mt-2 text-[26px] font-semibold leading-[36px] text-dark md:text-[45px] md:leading-[55px]">
            What We Are Offering
          </h2>
        </AnimateIn>

        {/* GRID */}
        <Stagger
          className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-4"
          stagger={0.12}
        >
          {displayServices.map((service, i) => {
            const Icon = icons[i % icons.length];

            return (
              <StaggerItem
                key={service.id}
                variant={i < 2 ? fadeInLeft : fadeInRight}
              >
                <article className="group relative">

                  {/* IMAGE */}
                  <div className="relative overflow-hidden isolate">

                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50 pointer-events-none z-10" />

                    <img
                      src={service.image}
                      alt={service.title}
                      className="block w-full transition-transform duration-1000 ease-in-out group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="relative mx-[5px] -mt-10 z-20">

                    {/* ICON */}
                    <div className="absolute left-[30px] top-[-15px] z-20 flex h-12 w-12 items-center justify-center bg-brand text-white transition-transform duration-500 group-hover:scale-90">
                      <Icon className="h-8 w-8" aria-hidden />
                    </div>

                    {/* BOX */}
                    <div
                      className="relative bg-[#dadcdc] px-7 pb-6 pt-11"
                      style={{
                        clipPath: 'polygon(0 0,100% 15%,100% 100%,0 100%)',
                      }}
                    >
                      <div
                        className="absolute inset-[2px] bg-white"
                        style={{
                          clipPath: 'polygon(0 0,100% 15%,100% 100%,0 100%)',
                        }}
                      />

                      <div className="relative z-10">
                        <h3 className="mb-3 text-2xl font-semibold leading-8">
                          <Link
                            to={`/services/${service.slug}`}
                            className="transition-colors duration-300 hover:text-brand"
                          >
                            {service.title}
                          </Link>
                        </h3>

                        <p className="text-[15px] leading-[26px] text-[#6c6b6f]">
                          {service.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>

                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
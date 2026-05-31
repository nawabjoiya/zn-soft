import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import PageHero from '../components/ui/PageHero';
import { Stagger, StaggerItem } from '../components/animation/Stagger';
import {
  CodeMonitorIcon,
  PenToolIcon,
  StrategyIcon,
  TilesIcon,
} from '../components/ui/LineIcons';

import servicesData from '../data/Services';

const icons = [CodeMonitorIcon, PenToolIcon, TilesIcon, StrategyIcon];

export default function Services() {
  const services = servicesData;

  return (
    <>
      <PageHero title="Services" />

      <section className="py-20">
        <Stagger className="container-site grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, i) => {
            const Icon = icons[i % icons.length];

            return (
              <StaggerItem key={service.id}>

                <motion.div
                  className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm"
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                  }}
                >

                  {/* ICON */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-9 w-9" aria-hidden />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-dark">
                    {service.title}
                  </h3>

                  {/* EXCERPT */}
                  <p className="mt-3 text-sm text-gray-500">
                    {service.excerpt}
                  </p>

                  {/* LINK */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-brand"
                  >
                    Read More →
                  </Link>

                </motion.div>

              </StaggerItem>
            );
          })}

        </Stagger>
      </section>
    </>
  );
}
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimateIn from '../animation/AnimateIn';

const ctaData = {
  title: 'Ready to Build Your Next Digital Product with ZN Soft Solutions?',
  subtitle:
    'We help businesses turn ideas into scalable software solutions using modern technologies, clean UI/UX, and reliable architecture.',
};

export default function CtaSection() {
  const { title, subtitle } = ctaData;

  return (
    <section className="relative overflow-hidden bg-brand py-20">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-15 bg-hero-pattern bg-dots"
        animate={{ backgroundPosition: ['0px 0px', '24px 24px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container-site relative z-10 text-center">
        <AnimateIn variant="zoomIn">
          <h3 className="mx-auto max-w-3xl text-2xl font-bold leading-snug text-white md:text-4xl">
            {title}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 md:text-base">
            {subtitle}
          </p>

          <motion.div
            className="mt-8 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              className="inline-flex rounded-sm bg-white px-10 py-3.5 text-sm font-semibold uppercase tracking-wide text-brand transition hover:bg-gray-100"
            >
              Get Free Quote
            </Link>
          </motion.div>
        </AnimateIn>
      </div>
    </section>
  );
}
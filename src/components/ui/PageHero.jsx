import { motion } from 'framer-motion';
import { easeOut, duration } from '../animation/variants';

export default function PageHero({ title, breadcrumb = 'Home' }) {
  return (
    <section className="relative overflow-hidden bg-dark bg-hero-pattern bg-dots py-24">
      <div className="container-site relative z-10 text-center">
        <motion.h1
          className="text-4xl font-bold text-white md:text-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, ease: easeOut }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-3 text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.normal, ease: easeOut, delay: 0.2 }}
        >
          <span className="text-brand">{breadcrumb}</span> / {title}
        </motion.p>
      </div>
      <motion.div
        className="hero-wave"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: easeOut, delay: 0.25 }}
      >
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-full w-full">
          <path fill="#ffffff" d="M0,40 C480,80 960,0 1440,50 L1440,80 L0,80 Z" />
        </svg>
      </motion.div>
    </section>
  );
}

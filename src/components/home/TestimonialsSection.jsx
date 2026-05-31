import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import AnimateIn from '../animation/AnimateIn';
import SectionBadge from '../ui/SectionBadge';

/* -------------------- STATIC DATA -------------------- */

const settings = {
  testimonials_badge: 'Testimonials',
  testimonials_title: 'What Our Clients Say',
};

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Designer',
    image: '/assets/images/testimonial/1.jpg',
    content:
      'This service completely transformed the way we work. The experience was smooth, fast, and incredibly professional.',
  },
  {
    id: 2,
    name: 'Michael Lee',
    role: 'Startup Founder',
    image: '/assets/images/testimonial/2.jpg',
    content:
      'Absolutely outstanding quality and attention to detail. I would highly recommend them to anyone building a product.',
  },
  {
    id: 3,
    name: 'Ayesha Khan',
    role: 'Marketing Lead',
    image: '/assets/images/testimonial/3.jpg',
    content:
      'We saw immediate improvements in engagement and performance after working with this team.',
  },
];

/* -------------------- TEXT ANIMATION -------------------- */

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const dropItem = {
  hidden: {
    y: -70,
    opacity: 0,
    filter: 'blur(6px)',
  },
  show: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: [0.175, 0.885, 0.32, 1.275],
    },
  },
};

/* -------------------- IMAGE ANIMATION (FIXED) -------------------- */

const imageAnim = {
  hidden: {
    x: '-120vw',
    opacity: 0,
    scale: 0.95,
    filter: 'blur(12px)',
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    x: '-80vw',
    opacity: 0,
    filter: 'blur(10px)',
    transition: { duration: 0.6 },
  },
};

/* -------------------- COMPONENT -------------------- */

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const t = testimonials[index];

  const splitWords = (text = '') => text.split(' ');

  /* AUTO SLIDER */
  useEffect(() => {
    if (!testimonials.length || paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  if (!t) return null;

  return (
    <section className="bg-[#f4f4f4] py-20 md:py-28 overflow-hidden">
      <div className="container-site">

        {/* HEADER */}
        <AnimateIn variant="fadeInUp" className="text-center">
          <SectionBadge>{settings.testimonials_badge}</SectionBadge>
          <h2 className="mt-2 text-[38px] font-semibold text-[#141414] md:text-[52px]">
            {settings.testimonials_title}
          </h2>
        </AnimateIn>

        {/* CONTENT */}
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">

          {/* IMAGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              variants={imageAnim}
              initial="hidden"
              animate="show"
              exit="exit"
              className="relative overflow-hidden"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="absolute -inset-6 rounded-[30px] bg-brand/5 blur-2xl" />

              {/* FIXED SIZE CONTAINER */}
              <div className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden rounded-[28px]">
                <motion.img
                  src={t.image}
                  alt={t.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id + '-text'}
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 20 }}
              className="text-left"
            >
              <div className="mb-6">
                <motion.div
                  variants={dropItem}
                  className="h-[2px] w-14 bg-brand mb-4"
                />

                <motion.h3
                  variants={dropItem}
                  className="text-[26px] font-semibold text-[#141414]"
                >
                  {t.name}
                </motion.h3>

                <motion.p
                  variants={dropItem}
                  className="text-brand text-sm uppercase tracking-widest font-semibold"
                >
                  {t.role}
                </motion.p>
              </div>

              {/* WORD ANIMATION */}
              <motion.p
                variants={container}
                className="flex flex-wrap gap-x-[6px] text-[16px] leading-[32px] text-[#555]"
              >
                {splitWords(t.content).map((word, i) => (
                  <motion.span key={i} variants={dropItem}>
                    {word}
                  </motion.span>
                ))}
              </motion.p>

              {/* INDICATORS */}
              <div className="mt-6 flex gap-2">
                {testimonials.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 w-6 rounded-full transition ${
                      i === index ? 'bg-brand' : 'bg-brand/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
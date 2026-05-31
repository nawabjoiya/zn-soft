import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { PrimaryButton } from '../ui/PrimaryButton';
import 'swiper/css';
import 'swiper/css/effect-fade';

const SLIDES = [
  {
    id: 1,
    title: 'Build Scalable Digital Products with',
    highlight: 'ZN Soft Solutions',
    subtitle:
      'We design and develop modern web applications, mobile apps, and digital platforms that help businesses grow faster.',
    button_text: 'Get Free Quote',
    button_url: '/contact',
    image: '/assets/images/backgrounds/slider-1-1.jpg',
  },
  {
    id: 2,
    title: 'Transform Your Ideas into',
    highlight: 'Powerful Software',
    subtitle:
      'From UI/UX design to full-stack development, we deliver end-to-end software solutions tailored for your business.',
    button_text: 'Our Services',
    button_url: '/services',
    image: '/assets/images/backgrounds/slider-1-2.jpg',
  },
  {
    id: 3,
    title: 'Grow Your Business with',
    highlight: 'Smart Technology',
    subtitle:
      'Leverage modern technologies like React, Node.js, and cloud solutions to scale your business efficiently.',
    button_text: 'View Projects',
    button_url: '/projects',
    image: '/assets/images/backgrounds/slider-1-3.jpg',
  },
];

function SlideContent({ slide, isActive }) {
  const reduceMotion = useReducedMotion();

  const content = (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
        {slide.title}{' '}
        <span className="text-brand">{slide.highlight}</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg text-gray-300">
        {slide.subtitle}
      </p>

      <PrimaryButton to={slide.button_url} className="mt-8">
        {slide.button_text}
      </PrimaryButton>
    </div>
  );

  if (reduceMotion) return content;

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ duration: 0.6 }}
    >
      {content}
    </motion.div>
  );
}

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-dark">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {SLIDES.map((slide, index) => {
          const isActive = activeIndex === index;

          return (
            <SwiperSlide key={slide.id}>
              <div className="relative min-h-screen">

                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-dark/75 bg-hero-pattern bg-dots" />

                {/* Content */}
                <div className="container-site relative z-10 flex min-h-screen items-center py-28">
                  <SlideContent slide={slide} isActive={isActive} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
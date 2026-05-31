import { motion } from 'framer-motion';
import AnimateIn from '../animation/AnimateIn';
import SectionBadge from '../ui/SectionBadge';
import { Stagger, StaggerItem } from '../animation/Stagger';
import { AnalyticsIcon, TilesIcon } from '../ui/LineIcons';

const icons = [TilesIcon, AnalyticsIcon];

const FEATURES = [
  {
    id: 1,
    title: 'Custom Web Solutions',
    description:
      'We build scalable, high-performance websites tailored to your business goals using modern technologies.',
  },
  {
    id: 2,
    title: 'Data-Driven Strategy',
    description:
      'We use analytics and insights to create smart digital strategies that improve conversions and growth.',
  },
];

export default function WorkSection() {
  return (
    <section className="relative overflow-hidden bg-[#1c1b1f] py-16 md:py-20">

      {/* BACKGROUND EFFECT */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03] mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('/assets/images/backgrounds/team-one-bg.jpg')",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 border border-white/[0.03]"
        aria-hidden
      />

      <div className="container-site relative grid items-center gap-10 lg:grid-cols-[5fr_7fr]">

        {/* LEFT CONTENT */}
        <AnimateIn variant="fadeInLeft" className="pb-8 lg:pb-12">

          <SectionBadge>Who We Are</SectionBadge>

          <h2 className="mt-[7px] max-w-[560px] text-[32px] font-semibold leading-[42px] text-white md:text-[50px] md:leading-[60px]">
            Work That Meets Your Expectations
          </h2>

          <p className="mt-6 max-w-[650px] text-[15px] leading-[28px] text-[#a8a8ad]">
            We are a creative software agency focused on delivering modern,
            scalable, and user-friendly digital solutions for startups and businesses.
          </p>

          {/* FEATURES */}
          <Stagger className="mt-6 space-y-[20px]" stagger={0.15}>
            {FEATURES.map((item, i) => {
              const Icon = icons[i % icons.length];

              return (
                <StaggerItem key={item.id}>
                  <motion.div className="group flex gap-5" whileHover={{ x: 6 }}>

                    <div className="mt-1 flex h-[48px] w-[48px] shrink-0 items-center justify-center text-brand transition-transform duration-300 group-hover:scale-90">
                      <Icon className="h-10 w-10" aria-hidden />
                    </div>

                    <div>
                      <h3 className="text-[20px] font-semibold leading-7 text-white md:text-[22px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 max-w-[590px] text-[14px] leading-[26px] text-[#a8a8ad]">
                        {item.description}
                      </p>
                    </div>

                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>

        </AnimateIn>

        {/* RIGHT IMAGE */}
        <AnimateIn variant="slideInRight" delay={0.2} className="relative hidden lg:block">

          <div
            className="absolute bottom-6 right-[15%] h-20 w-40 bg-[radial-gradient(circle,currentColor_2px,transparent_2px)] bg-[length:12px_12px] text-white/70"
            aria-hidden
          />

          <motion.img
            src="/assets/images/resources/why-we-are-img-1.png"
            alt="Why we are"
            className="relative z-10 ml-auto block w-full max-w-[420px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />

        </AnimateIn>

      </div>
    </section>
  );
}
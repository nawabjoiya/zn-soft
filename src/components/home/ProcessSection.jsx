import AnimateIn from '../animation/AnimateIn';
import { Stagger, StaggerItem } from '../animation/Stagger';
import SectionBadge from '../ui/SectionBadge';
import {
  CodeMonitorIcon,
  PenToolIcon,
  StrategyIcon,
  ThumbLineIcon,
} from '../ui/LineIcons';

const icons = [
  CodeMonitorIcon,
  PenToolIcon,
  ThumbLineIcon,
  StrategyIcon,
];

const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Requirement Analysis',
    description:
      'We analyze your business needs, goals, and target audience to define a clear project roadmap.',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description:
      'Our designers create modern, user-friendly interfaces focused on engagement and conversion.',
  },
  {
    id: 3,
    title: 'Development',
    description:
      'We build scalable, secure, and high-performance web and mobile applications using modern technologies.',
  },
  {
    id: 4,
    title: 'Deployment & Support',
    description:
      'We deploy your project and provide ongoing support, maintenance, and improvements.',
  },
];

const processReveal = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProcessSection() {
  if (!PROCESS_STEPS.length) return null;

  return (
    <section className="relative z-[1] overflow-hidden bg-white py-20 md:pb-[100px] md:pt-[120px]">
      <div className="container-site">

        {/* HEADER */}
        <AnimateIn variant="fadeInUp" className="mb-16 text-center">
          <SectionBadge>Our Process</SectionBadge>

          <h2 className="mt-3 text-[30px] font-semibold leading-tight text-[#141414] md:text-[48px] md:leading-[58px]">
            4 Easy Working Steps
          </h2>
        </AnimateIn>

        {/* STEPS */}
        <Stagger
          stagger={0.15}
          className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 xl:grid-cols-4"
        >
          {PROCESS_STEPS.map((step, i) => {
            const Icon = icons[i % icons.length];

            return (
              <StaggerItem key={step.id} variant={processReveal}>
                <div className="group relative">

                  {/* Connector */}
                  <div
                    className="
                      absolute left-8 right-8 top-10 bottom-[-12px]
                      -z-10 rounded-[24px]
                      border-2 border-dashed border-brand/40
                      transition-all duration-700
                      group-hover:scale-105
                      group-hover:border-brand
                    "
                  />

                  <article
                    className="
                      relative z-[1]
                      overflow-visible
                      rounded-[24px]
                      bg-white
                      px-8
                      pb-14
                      pt-10
                      text-center
                      shadow-[0_10px_60px_rgba(0,0,0,0.07)]
                      transition-all duration-500
                      hover:-translate-y-4
                      hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]
                    "
                  >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 rounded-[24px] bg-[#141414] opacity-0 transition-all duration-500 group-hover:opacity-100" />

                    {/* Glow Overlay */}
                    <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-brand/10 via-transparent to-brand/10 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                    {/* Pattern */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[24px] bg-cover bg-center bg-no-repeat opacity-[0.03] transition-all duration-500 group-hover:opacity-[0.06]"
                      style={{
                        backgroundImage:
                          "url('/assets/images/resources/process-one-single-bg.jpg')",
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">

                      <div className="relative mx-auto mb-6 h-[70px] w-[70px] text-brand transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="h-full w-full" />
                      </div>

                      <h3 className="mb-4 text-[22px] font-semibold leading-[32px] text-[#141414] transition-colors duration-500 group-hover:text-white">
                        {step.title}
                      </h3>

                      <p className="text-[15px] leading-[28px] text-[#6c6b6f] transition-colors duration-500 group-hover:text-[#b8b8b8]">
                        {step.description}
                      </p>

                    </div>

                    {/* Step Number */}
                    <div className="absolute bottom-[-43px] left-1/2 flex h-[74px] w-[74px] -translate-x-1/2 items-center justify-center rounded-full border-[10px] border-[#141414] bg-white text-[22px] font-semibold text-brand transition-all duration-500 group-hover:scale-110 group-hover:border-brand">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </article>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
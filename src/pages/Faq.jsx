import { useState } from 'react';
import PageHero from '../components/ui/PageHero';
import TeamSection from '../components/home/TeamSection';
import AnimateIn from '../components/animation/AnimateIn';

// 🔥 static FAQs (NO backend)
const FAQS = [
  {
    q: 'What services do you offer?',
    a: 'We provide digital marketing, web design, SEO, app development, and business consulting tailored to your goals.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most projects range from 4–12 weeks depending on scope, revisions, and content readiness.',
  },
  {
    q: 'Do you offer free consultation?',
    a: 'Yes. Book a free consultation through our contact page and we respond within 24 hours.',
  },
  {
    q: 'Can you work with startups?',
    a: 'Absolutely. We specialize in scalable solutions for startups and growing businesses.',
  },
];

// 🔥 static team (optional fallback if you still want it on FAQ page)
const TEAM = [
  {
    id: 1,
    name: 'Ali Raza',
    role: 'Full Stack Developer',
    image: '/assets/images/team/team-1-1.jpg',
  },
  {
    id: 2,
    name: 'Sara Khan',
    role: 'UI/UX Designer',
    image: '/assets/images/team/team-1-2.jpg',
  },
  {
    id: 3,
    name: 'Hassan Ahmed',
    role: 'Mobile App Developer',
    image: '/assets/images/team/team-1-3.jpg',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero title="FAQ" breadcrumb="Pages" />

      <section className="py-20">
        <div className="container-site max-w-3xl">

          {/* FAQ LIST */}
          {FAQS.map((item, i) => (
            <AnimateIn
              key={item.q}
              variant="fadeInUp"
              delay={i * 0.08}
            >
              <div className="mb-4 overflow-hidden rounded-lg border border-gray-100 shadow-sm">

                <button
                  type="button"
                  className="flex w-full items-center justify-between bg-white px-6 py-4 text-left font-semibold text-dark hover:text-brand"
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  {item.q}
                  <span className="text-brand text-xl">
                    {open === i ? '−' : '+'}
                  </span>
                </button>

                {open === i && (
                  <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 text-sm text-gray-600">
                    {item.a}
                  </div>
                )}

              </div>
            </AnimateIn>
          ))}

        </div>
      </section>

      {/* TEAM SECTION (fully frontend now) */}
      <TeamSection team={TEAM} />
    </>
  );
}
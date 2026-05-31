import AnimateIn from '../animation/AnimateIn';

const MARQUEE_ITEMS = [
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Cloud Solutions',
  'Digital Marketing',
  'Software Development',
  'E-Commerce Solutions',
];

export default function MarqueeSection() {
  if (!MARQUEE_ITEMS.length) return null;

  return (
    <AnimateIn variant="fadeInUp" duration={0.7}>
      <section className="overflow-hidden border-y border-gray-100 bg-white py-8">

        {/* TRACK */}
        <div className="flex w-max animate-marquee items-center whitespace-nowrap hover:[animation-play-state:paused]">

          {/* FIRST SET */}
          <div className="flex items-center gap-10 pr-10">
            {MARQUEE_ITEMS.map((item, i) => (
              <div
                key={`a-${i}`}
                className="flex items-center gap-4 text-xl font-bold uppercase tracking-wide text-dark/90"
              >
                <span
                  className="h-3 w-3 rotate-45 bg-brand"
                  aria-hidden
                />
                {item}
              </div>
            ))}
          </div>

          {/* DUPLICATE SET */}
          <div className="flex items-center gap-10 pr-10" aria-hidden="true">
            {MARQUEE_ITEMS.map((item, i) => (
              <div
                key={`b-${i}`}
                className="flex items-center gap-4 text-xl font-bold uppercase tracking-wide text-dark/90"
              >
                <span
                  className="h-3 w-3 rotate-45 bg-brand"
                  aria-hidden
                />
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>
    </AnimateIn>
  );
}
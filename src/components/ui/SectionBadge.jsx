export default function SectionBadge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-[15px] text-base font-medium uppercase tracking-[0.1em] text-brand ${className}`}>
      <img
        src="/assets/images/shapes/section-title-tagline-shape.png"
        alt=""
        className="h-4 w-4 object-contain"
        aria-hidden
      />
      {children}
    </span>
  );
}

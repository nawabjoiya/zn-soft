import { Link } from 'react-router-dom';

export default function Logo({ light = false, className = '' }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-10 w-10 items-center justify-center bg-brand text-sm font-extrabold tracking-tight text-white">
        ZN
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 bg-white/90 rotate-45" aria-hidden />
      </span>
      <span className={`text-2xl font-bold tracking-tight ${light ? 'text-white' : 'text-dark'}`}>
        ZN<span className="text-brand">.</span>
      </span>
    </Link>
  );
}

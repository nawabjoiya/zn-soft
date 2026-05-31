import { Link } from 'react-router-dom';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function PrimaryButton({ to, href, children, className, type = 'button', onClick }) {
  const classes = cx('zn-btn group', className);

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
        →
      </span>
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

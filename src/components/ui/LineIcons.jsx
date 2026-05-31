const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: 1.75,
  vectorEffect: 'non-scaling-stroke',
  viewBox: '0 0 64 64',
};

  
export function TilesIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M32 8 56 20 32 32 8 20 32 8Z" />
      <path d="M32 32v25" />
      <path d="M8 20v18l24 12 24-12V20" opacity=".5" />
      <path d="M14 28 32 37 50 28" />
      <path d="M14 38 32 47 50 38" />
      <path d="M14 48 32 57 50 48" />
    </svg>
  );
}

export function AnalyticsIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="8" y="8" width="48" height="48" rx="6" />

      <path d="M16 46V30" />
      <path d="M28 46V20" />
      <path d="M40 46V26" />
      <path d="M52 46V14" />

      <path d="M14 18 28 24 40 18 52 26" opacity=".6" />
    </svg>
  );
}

export function CodeMonitorIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="8" y="10" width="48" height="30" rx="4" />

      <path d="M8 18h48" opacity=".5" />

      <circle cx="14" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="22" cy="14" r="1" fill="currentColor" stroke="none" />

      <path d="M24 24 18 29l6 5" />
      <path d="M40 24 46 29l-6 5" />
      <path d="M35 21 29 37" />

      <path d="M24 54h16" />
      <path d="M32 40v14" />
    </svg>
  );
}

export function PenToolIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="42" cy="8" r="3" />
      <circle cx="56" cy="22" r="3" />
      <circle cx="28" cy="50" r="3" />

      <path d="M42 8 56 22 28 50" opacity=".5" />

      <path d="M42 8 56 22 28 50 10 56l6-18L42 8Z" />
      <path d="M36 14 50 28" />
      <path d="M16 38 28 50" />
      <path d="M24 30 34 40" />
    </svg>
  );
}

export function ThumbLineIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="10" y="28" width="12" height="25" rx="2" />

      <path d="M22 31c7-4 9-10 10-20 0-3 2-5 5-5 5 0 7 5 6 10l-2 10h9c4 0 7 3 6 7l-4 15c-1 4-4 6-8 6H22" />

      <path d="M14 33v15" opacity=".5" />
    </svg>
  );
}

export function StrategyIcon(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 43h10l28 9V12l-28 9H12v22Z" />

      <path d="M22 21v22" />

      <path d="M28 28h10" opacity=".7" />
      <path d="M28 36h14" opacity=".7" />

      <circle cx="54" cy="22" r="2" />
      <circle cx="58" cy="32" r="2" />
      <circle cx="54" cy="42" r="2" />

      <path d="M18 43l5 12" />
    </svg>
  );
}
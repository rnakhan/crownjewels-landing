type IconProps = { className?: string };

const base = "shrink-0";

export const SparkleIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M19 4l.7 2 2 .7-2 .7L19 9l-.7-1.6-2-.7 2-.7L19 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const GemIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <path d="M3.5 9l3-4h11l3 4M3.5 9l8.5 11M3.5 9h17M20.5 9l-8.5 11M8 9l4 11M16 9l-4 11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const TrendIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <path d="M3 17l5-5 4 4 8-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 7h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const InventoryIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <rect x="3.5" y="6" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3.5 10h17M9 6V4.5a1 1 0 011-1h4a1 1 0 011 1V6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const WrenchIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <path d="M14.7 6.3a4 4 0 015 5l-9.5 9.5a2.1 2.1 0 11-3-3l9.5-9.5a4 4 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const HeartIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <path d="M12 20s-7-4.4-7-10.2A4.3 4.3 0 0112 6a4.3 4.3 0 017 3.8C19 15.6 12 20 12 20z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const ChatIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <path d="M4 5h16a1 1 0 011 1v10a1 1 0 01-1 1H9l-5 4V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="9" cy="11" r="0.9" fill="currentColor" />
    <circle cx="12" cy="11" r="0.9" fill="currentColor" />
    <circle cx="15" cy="11" r="0.9" fill="currentColor" />
  </svg>
);

export const ShieldIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BellIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <path d="M6 17V11a6 6 0 1112 0v6l1.5 2h-15L6 17z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10 21a2 2 0 004 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BotIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <rect x="4" y="7" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 4v3M9 12v1M15 12v1M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const PenIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
    <path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

interface IconProps {
  className?: string;
}

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconSteam({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...base}>
      <path d="M16 38c0-5 4-7 4-12s-3-6-3-10" />
      <path d="M24 40c0-6 4-8 4-14s-3-7-3-12" />
      <path d="M32 38c0-5 4-7 4-12s-3-6-3-10" />
      <path d="M12 42h24" />
    </svg>
  );
}

export function IconSauna({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...base}>
      <path d="M10 40V22a14 14 0 0 1 28 0v18" />
      <path d="M10 40h28" />
      <path d="M18 40V28h12v12" />
      <path d="M24 8v4" />
      <path d="M12.5 12.5l2.5 2.5" />
      <path d="M35.5 12.5 33 15" />
    </svg>
  );
}

export function IconDuo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...base}>
      <path d="M18 30a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
      <path d="M30 30a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
      <path d="M6 40c1.5-6 6-9 12-9s10.5 3 12 9" />
      <path d="M24 40c1.2-4.5 4.5-7 9-7 3.5 0 6.5 1.5 8.2 4" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} strokeWidth={2}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconAlert({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" {...base}>
      {/* deslop-ignore-next-line 24 — стандартная иконка «внимание в круге» */}
      <circle cx="10" cy="10" r="8" />
      <path d="M10 6.5v4.5" />
      <path d="M10 13.5h.01" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" {...base}>
      {/* deslop-ignore-next-line 24 — стандартная иконка часов */}
      <circle cx="10" cy="10" r="8" />
      <path d="M10 6v4l2.5 2" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" {...base}>
      <path d="M4 10h12" />
      <path d="m11 5 5 5-5 5" />
    </svg>
  );
}

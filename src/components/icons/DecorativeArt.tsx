export function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 34" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M47 5.3C46.4 3 44.6 1.2 42.3.6 38.3 0 24 0 24 0S9.7 0 5.7.6C3.4 1.2 1.6 3 1 5.3 0 9.4 0 17 0 17s0 7.6 1 11.7c.6 2.3 2.4 4.1 4.7 4.7 4 .6 18.3.6 18.3.6s14.3 0 18.3-.6c2.3-.6 4.1-2.4 4.7-4.7C48 24.6 48 17 48 17s0-7.6-1-11.7Z"
        fill="currentColor"
      />
      <path d="M19 24.3 32 17l-13-7.3v14.6Z" fill="white" />
    </svg>
  );
}

export function LotusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 60C50 60 20 45 20 25C20 15 30 8 38 15C43 19 47 27 50 35C53 27 57 19 62 15C70 8 80 15 80 25C80 45 50 60 50 60Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M50 60C50 60 30 40 30 20C30 11 38 6 45 12C48 15 50 20 50 28C50 20 52 15 55 12C62 6 70 11 70 20C70 40 50 60 50 60Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M50 55C50 55 42 38 42 22C42 14 46 9 50 9C54 9 58 14 58 22C58 38 50 55 50 55Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

export function DiyaArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="flame" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffe3ab" />
          <stop offset="100%" stopColor="#e2973f" />
        </radialGradient>
        <radialGradient id="glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#e2973f" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#e2973f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="120" r="115" fill="url(#glow)" />
      <path
        d="M40 150C40 150 70 168 120 168C170 168 200 150 200 150C195 175 165 195 120 195C75 195 45 175 40 150Z"
        fill="#c2650b"
      />
      <ellipse cx="120" cy="150" rx="80" ry="18" fill="#e2973f" />
      <path
        d="M120 85C130 105 138 118 138 132C138 145 130 152 120 152C110 152 102 145 102 132C102 118 110 105 120 85Z"
        fill="url(#flame)"
      />
    </svg>
  );
}

export function PanchKoshRings({ className }: { className?: string }) {
  const radii = [90, 72, 54, 36, 18];
  const opacities = [0.15, 0.25, 0.4, 0.6, 0.85];
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {radii.map((r, i) => (
        <circle
          key={r}
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity={opacities[i]}
        />
      ))}
      <circle cx="100" cy="100" r="6" fill="currentColor" />
    </svg>
  );
}

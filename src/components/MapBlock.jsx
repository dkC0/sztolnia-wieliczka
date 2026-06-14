/**
 * Custom-styled "map" of historic Wieliczka — Tunnel Black / Salt Crystal /
 * Ember Copper tones, with a copper pin marking Sztolnia near the Salt Mine.
 * A real embed risks scroll-trapping on mobile, so this stylised,
 * brand-consistent SVG doubles as the visual and links out to Google Maps
 * for directions.
 */
export default function MapBlock({ className = '' }) {
  return (
    <a
      href="https://www.google.com/maps/search/?api=1&query=Zamkowa+5+Wieliczka+Sztolnia"
      target="_blank"
      rel="noreferrer"
      className={`group block border border-salt/15 rounded-sm relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden ${className}`}
      aria-label="Otwórz mapę — ul. Zamkowa 5, Wieliczka (Google Maps)"
    >
      <svg viewBox="0 0 800 600" className="w-full h-full" role="img" aria-hidden="true">
        <rect width="800" height="600" fill="#15120F" />
        {/* street grid — historic core */}
        <g stroke="#6B645B" strokeWidth="2" opacity="0.4">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={`h${i}`} x1="0" y1={i * 100} x2="800" y2={i * 100} />
          ))}
        </g>
        {/* Salt Mine block */}
        <rect x="120" y="180" width="180" height="160" fill="#1C1611" stroke="#E8A23D" strokeWidth="2" opacity="0.7" />
        <text x="210" y="270" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" letterSpacing="2" fill="#E8A23D">KOPALNIA SOLI</text>
        {/* Sztolnia block */}
        <rect x="430" y="230" width="160" height="140" fill="#1C1611" stroke="#C9743A" strokeWidth="2" opacity="0.85" />
        <text x="510" y="310" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" letterSpacing="2" fill="#EDE7DD">UL. ZAMKOWA</text>
      </svg>
      <div className="absolute" style={{ left: '64%', top: '47%', transform: 'translate(-50%, -100%)' }}>
        <span className="block w-4 h-4 rounded-full bg-copper ring-4 ring-copper/25" aria-hidden="true" />
      </div>
      <div className="absolute inset-0 flex items-end justify-end p-4">
        <span className="label bg-tunnel/85 text-salt px-3 py-2 rounded-sm transition-colors duration-300 group-hover:bg-copper">
          Otwórz w Google Maps
        </span>
      </div>
    </a>
  );
}

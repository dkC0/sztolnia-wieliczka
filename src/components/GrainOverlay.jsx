/**
 * Fine mineral grain overlay — a salt-crystal texture that unifies the dark
 * "Tunnel Black" sections. Implemented as inline SVG feTurbulence via a CSS
 * data-URI background (zero extra HTTP requests), ~4.5% opacity.
 */
export default function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[60] mix-blend-overlay"
      style={{
        opacity: 0.045,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'repeat',
        backgroundSize: '220px 220px',
      }}
      aria-hidden="true"
    />
  );
}

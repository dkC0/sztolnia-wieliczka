import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/menu', label: 'Menu' },
  { to: '/o-nas', label: 'O nas' },
  { to: '/destylarnia', label: 'Destylarnia' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/kontakt', label: 'Kontakt' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-descent ${
        solid ? 'bg-tunnel/95 sm:backdrop-blur-sm border-b border-salt/10' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between" aria-label="Główna nawigacja">
        <Link
          to="/"
          className="font-display text-lg sm:text-xl tracking-[0.06em] text-salt"
          aria-label="Sztolnia — strona główna"
        >
          SZTOLNIA
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `label salt-link relative py-1 transition-colors duration-300 ${
                    isActive ? 'text-copper' : 'text-salt/80 hover:text-salt'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/kontakt#rezerwacja"
              className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-sm bg-copper text-salt font-body font-medium text-sm tracking-wide transition-all duration-300 ease-descent hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(201,116,58,0.35)] active:scale-[0.97]"
            >
              Zarezerwuj stolik
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden relative inline-flex items-center justify-center w-11 h-11 text-salt"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative w-6 h-4" aria-hidden="true">
            <span
              className="absolute left-0 top-0 w-6 h-[1.5px] bg-current transition-all duration-300 ease-descent"
              style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'translateY(0) rotate(0)' }}
            />
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[1.5px] bg-current transition-all duration-300 ease-descent"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-0 bottom-0 w-6 h-[1.5px] bg-current transition-all duration-300 ease-descent"
              style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'translateY(0) rotate(0)' }}
            />
          </span>
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-tunnel transition-opacity duration-400 ease-descent ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-10 flex flex-col gap-1 h-full">
          {LINKS.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-4 text-3xl font-display border-b border-salt/10 transition-all duration-400 ease-descent ${
                  isActive ? 'text-copper' : 'text-salt'
                }`
              }
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(-10px)',
                transitionDelay: open ? `${100 + i * 60}ms` : '0ms',
              }}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/kontakt#rezerwacja"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center min-h-[48px] rounded-sm bg-copper text-salt font-body font-medium text-base tracking-wide transition-all duration-400 ease-descent active:scale-[0.97]"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(-10px)',
              transitionDelay: open ? `${100 + LINKS.length * 60}ms` : '0ms',
            }}
          >
            Zarezerwuj stolik
          </Link>
          <a
            href="tel:+48518962722"
            className="mt-4 text-salt/60 font-body text-sm tracking-wide transition-all duration-400 ease-descent"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(-10px)',
              transitionDelay: open ? `${100 + (LINKS.length + 1) * 60}ms` : '0ms',
            }}
          >
            +48 518 962 722
          </a>
        </div>
      </div>
    </header>
  );
}

import { Link } from 'react-router-dom';
import HoursTable from './HoursTable';

/**
 * "The Way Back to the Surface" — footer.
 * Intentionally still: no animation, the settled end-state of the journey.
 */
export default function Footer() {
  return (
    <footer className="section-dark section-pad !py-12 sm:!py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 text-center sm:text-left">
          <div className="flex flex-col gap-3 items-center sm:items-start">
            <Link to="/" className="font-display text-xl tracking-[0.06em] text-salt">
              SZTOLNIA
            </Link>
            <p className="text-sm text-salt/65 leading-relaxed max-w-xs">
              ul. Zamkowa 5<br />32-020 Wieliczka
            </p>
            <a href="tel:+48518962722" className="salt-link text-sm text-salt/85">
              +48 518 962 722
            </a>
            <a href="mailto:sztolniawieliczka@gmail.com" className="salt-link text-sm text-salt/85">
              sztolniawieliczka@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-3">
            <span className="label text-stone">Godziny</span>
            <HoursTable compact dark />
          </div>

          <div className="flex flex-col items-center sm:items-start gap-3">
            <span className="label text-stone">Nawigacja</span>
            <nav aria-label="Linki w stopce" className="flex flex-col items-center sm:items-start gap-2 text-sm">
              <Link to="/menu" className="salt-link text-salt/85">Menu</Link>
              <Link to="/o-nas" className="salt-link text-salt/85">O nas</Link>
              <Link to="/destylarnia" className="salt-link text-salt/85">Destylarnia</Link>
              <Link to="/galeria" className="salt-link text-salt/85">Galeria</Link>
              <Link to="/kontakt" className="salt-link text-salt/85">Kontakt</Link>
            </nav>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-3">
            <span className="label text-stone">Rezerwacja i social</span>
            <nav aria-label="Rezerwacja i media społecznościowe" className="flex flex-col items-center sm:items-start gap-2 text-sm">
              <Link to="/kontakt#rezerwacja" className="salt-link text-salt/85">Zarezerwuj stolik</Link>
              <a href="https://www.facebook.com/sztolnia.wieliczka/" target="_blank" rel="noreferrer" className="salt-link text-salt/85">Facebook</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="salt-link text-salt/85">Instagram</a>
            </nav>
          </div>
        </div>

        <div className="border-t border-salt/10 mt-10 sm:mt-12" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-center sm:text-left">
          <p className="accent-line text-lg text-salt/80">
            Wieliczka, gdzie wszystko, co warto znaleźć, było kiedyś pod ziemią.
          </p>
          <p className="text-xs text-salt/40">&copy; {new Date().getFullYear()} Sztolnia Wieliczka. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}

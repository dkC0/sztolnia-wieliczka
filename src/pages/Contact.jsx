import { useState } from 'react';
import Reveal from '../components/Reveal';
import HoursTable from '../components/HoursTable';
import MapBlock from '../components/MapBlock';
import { images } from '../lib/images';

/**
 * Contact / Reservation page — full form (with click-to-call as the
 * primary, more-reliable path for international visitors), custom-styled
 * map, address, hours, and a peak-times note.
 */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newErrors = {};
    if (!form.get('name')?.trim()) newErrors.name = 'Podaj imię i nazwisko.';
    if (!form.get('phone')?.trim() && !form.get('email')?.trim()) {
      newErrors.contact = 'Podaj telefon lub e-mail kontaktowy.';
    }
    if (!form.get('date')) newErrors.date = 'Wybierz datę.';
    if (!form.get('guests')) newErrors.guests = 'Podaj liczbę osób.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      <header className="relative pt-32 sm:pt-40 pb-14 sm:pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #C9743A 0%, #A8612F 100%)', color: 'var(--tunnel)' }}>
        <img
          src={images.contact.hero}
          alt=""
          aria-hidden="true"
          loading="eager"
          width="2000"
          height="1333"
          className="photo-backdrop opacity-15"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal tone="arrival">
            <span className="label text-tunnel/70">Kontakt &amp; rezerwacja</span>
            <h1 className="font-display mt-3" style={{ fontSize: 'clamp(2.75rem, 8vw, 6rem)', lineHeight: 1.02 }}>
              Wróćcie na&nbsp;powierzchnię.
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-tunnel/80 leading-relaxed">
              Stoliki wypełniają się szybko po wycieczkach do kopalni — szczególnie wieczorami i w weekendy. Zadzwońcie lub napiszcie, a zarezerwujemy wam miejsce.
            </p>
          </Reveal>

          {/* Tap-to-call, prominent above the fold for mobile/international visitors */}
          <Reveal tone="arrival" delay={120} className="mt-8">
            <a
              href="tel:+48518962722"
              className="warm-hover inline-flex items-center justify-center min-h-[48px] px-7 rounded-sm bg-tunnel text-salt font-body font-medium text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03]"
            >
              Zadzwoń: +48 518 962 722
            </a>
          </Reveal>
        </div>
      </header>

      <section id="rezerwacja" className="relative section-pad" style={{ backgroundColor: 'var(--salt)', color: 'var(--tunnel)' }} aria-label="Formularz rezerwacji">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
          <Reveal tone="descent">
            <span className="label text-copper">Zarezerwuj stolik</span>
            <h2 className="font-display mt-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
              Powiedzcie nam, kiedy przychodzicie.
            </h2>

            {submitted ? (
              <div role="status" className="mt-8 border border-copper/30 bg-copper/5 rounded-sm p-6">
                <p className="font-display text-xl">Dziękujemy za zgłoszenie.</p>
                <p className="mt-2 text-tunnel/70 leading-relaxed">
                  Skontaktujemy się z wami, aby potwierdzić rezerwację. Jeśli termin jest na już — najlepiej zadzwońcie: <a href="tel:+48518962722" className="ember-link text-copper">+48 518 962 722</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Imię i nazwisko" name="name" required error={errors.name} />
                  <Field label="Liczba osób" name="guests" type="number" min="1" max="30" required error={errors.guests} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Data" name="date" type="date" required error={errors.date} />
                  <Field label="Godzina" name="time" type="time" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Telefon" name="phone" type="tel" />
                  <Field label="E-mail" name="email" type="email" />
                </div>
                {errors.contact && (
                  <p className="text-sm text-beet" role="alert">{errors.contact}</p>
                )}
                <Field label="Uwagi (opcjonalnie)" name="notes" textarea />

                <button
                  type="submit"
                  className="warm-hover self-start mt-2 inline-flex items-center justify-center min-h-[48px] px-7 rounded-sm bg-copper text-salt font-body font-medium text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03]"
                >
                  Wyślij zapytanie o rezerwację
                </button>
                <p className="text-xs text-tunnel/45 max-w-md">
                  To zapytanie nie jest jeszcze potwierdzoną rezerwacją — skontaktujemy się, aby ją potwierdzić. Dla rezerwacji w ostatniej chwili prosimy o telefon.
                </p>
              </form>
            )}
          </Reveal>

          <Reveal tone="descent" delay={120} className="flex flex-col gap-8">
            <div>
              <span className="label text-copper">Adres</span>
              <p className="mt-2 text-lg">
                ul. Zamkowa 5<br />32-020 Wieliczka
              </p>
              <p className="mt-4 text-sm text-tunnel/60 leading-relaxed max-w-sm">
                Kilka minut pieszo od wejścia do Kopalni Soli w Wieliczce — idealnie po wycieczce pod ziemię.
              </p>
            </div>

            <HoursTable />

            <MapBlock />

            <div>
              <span className="label text-copper">Pisz do nas</span>
              <p className="mt-2">
                <a href="mailto:sztolniawieliczka@gmail.com" className="ember-link text-tunnel">sztolniawieliczka@gmail.com</a>
              </p>
              <div className="mt-3 flex gap-4">
                <a href="https://www.facebook.com/sztolnia.wieliczka/" target="_blank" rel="noreferrer" className="ember-link text-tunnel">Facebook</a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="ember-link text-tunnel">Instagram</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = 'text', required, error, textarea, ...rest }) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div className={textarea ? 'sm:col-span-2' : ''}>
      <label htmlFor={id} className="label text-tunnel/60 block mb-2">
        {label}{required && <span aria-hidden="true"> *</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={3}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : undefined}
          className="w-full rounded-sm border border-tunnel/15 bg-white/60 px-4 py-3 text-base text-tunnel transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-copper/50"
          {...rest}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : undefined}
          className="w-full rounded-sm border border-tunnel/15 bg-white/60 px-4 py-3 text-base text-tunnel transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-copper/50"
          {...rest}
        />
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-beet" role="alert">{error}</p>
      )}
    </div>
  );
}

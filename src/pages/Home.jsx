import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import HoursTable from '../components/HoursTable';
import { images } from '../lib/images';
import { MENU } from '../lib/menuData';

const REVIEWS = [
  { quote: 'Najlepszy burger w Wieliczce — camembert, gruszka i buraczany ketchup to połączenie, którego się nie zapomina.', author: 'Gość z Krakowa' },
  { quote: 'Wróciliśmy z kopalni zmarznięci i głodni, a Sztolnia dała nam dokładnie to, czego potrzebowaliśmy — ogień, ciepło i żeberka, które rozpływają się w ustach.', author: 'Turysta z Niemiec' },
  { quote: 'Nie wiedzieliśmy, że mają własną destylarnię, dopóki kelner nie zaproponował degustacji. Czuliśmy się jak odkrywcy.', author: 'Para z Warszawy' },
  { quote: 'Czarne ravioli z dorszem zaskoczyło całą naszą grupę — to nie jest typowa karczma przy atrakcji turystycznej.', author: 'Grupa zorganizowana' },
  { quote: 'Atmosfera trzech pięter, ciepłe światło i dym z grilla Josper — to miejsce ma duszę.', author: 'Lokalny gość' },
  { quote: '4.7 gwiazdki w pełni zasłużone. Wracamy z każdą wizytą w Wieliczce.', author: 'Stały gość' },
];

// Featured signature dishes for "What the Fire Gives Back"
const SIGNATURES = [
  {
    name: 'Burger Sztolnia',
    description: 'Wołowina z grilla Josper, camembert, gruszka, karmelizowana cebula i buraczany ketchup — nasz podpis, niespotykany gdzie indziej w Wieliczce.',
    price: '46',
    tag: 'Z grilla Josper',
    image: images.dishes.burger,
    imageAlt: 'Burger Sztolnia z camembertem, gruszką i buraczanym ketchupem, przekrój widoczny',
    beet: true,
  },
  {
    name: 'Żeberka BBQ',
    description: 'Żeberka wieprzowe wolno grillowane na węglu drzewnym, glazurowane sosem BBQ, podane ze słodkimi ziemniakami.',
    price: '64',
    tag: 'Z grilla Josper',
    image: images.dishes.ribs,
    imageAlt: 'Żeberka BBQ pokrojone na drewnianej desce, intensywnie przyrumienione',
  },
  {
    name: 'Czarne ravioli z dorszem',
    description: 'Czarne ravioli nadziewane dorszem i porem, w aksamitnej maślanej emulsji — danie, które zaskakuje gości spoza Wieliczki.',
    price: '58',
    image: images.dishes.raviolli,
    imageAlt: 'Czarne ravioli z dorszem i porem w maślanym sosie',
  },
  {
    name: 'Pierogi z kaczką',
    description: 'Domowe pierogi nadziewane konfitowaną kaczką, podane z masłem i prażoną cebulką.',
    price: '46',
    image: images.dishes.dumplings,
    imageAlt: 'Talerz pierogów z kaczką podanych z masłem i ziołami',
  },
  {
    name: 'Tiramisu pistacjowe',
    description: 'Warstwy biszkoptu, kremu mascarpone i pistacji — nasza autorska reinterpretacja klasyku.',
    price: '28',
    tag: 'Deser',
    image: images.dishes.tiramisu,
    imageAlt: 'Tiramisu pistacjowe w szklance, z widocznymi warstwami kremu',
  },
];

const BUILDING_FLOORS = [
  {
    title: 'Parter — ogień i bar',
    description: 'Energia grilla Josper widoczna z sali, bar z autorskimi drinkami i destylatami, gwar pierwszych wrażeń po wyjściu z kopalni.',
    image: images.building.groundFloor,
    alt: 'Sala restauracyjna na parterze z ciepłym oświetleniem i drewnianymi stołami',
  },
  {
    title: 'Piętro — dla grup',
    description: 'Przestronna sala dla większych grup i rodzin, z widokiem na historyczną zabudowę Wieliczki za oknem.',
    image: images.building.upperFloor,
    alt: 'Górna sala restauracji z rzędami stołów przygotowanych dla grupy gości',
  },
  {
    title: 'Sztolnia Destylarnia — w głębi',
    description: 'Najbardziej intymna część budynku — tu produkujemy własne destylaty, idealna na degustacje i mniejsze wydarzenia.',
    image: images.building.cellar,
    alt: 'Ciemne, kameralne wnętrze z barem i rzędem butelek, ciepłe oświetlenie żarówkowe',
  },
];

/**
 * Homepage — the full "Descent and the Fire" journey, 11 sections.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Tension />
      <Threshold />
      <Kitchen />
      <SignatureDishes />
      <Distillery />
      <Building />
      <Reviews />
      <ReservationCTA />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Hero — "What Lies Beneath the Town"                              */
/* ------------------------------------------------------------------ */
function Hero() {
  const [carved, setCarved] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const t = setTimeout(() => setCarved(true), prefersReduced || !isDesktop ? 0 : 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="section-dark relative min-h-screen flex items-end overflow-hidden" aria-label="Sekcja powitalna">
      <img
        src={images.hero}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        width="2200"
        height="1467"
        className="photo-backdrop cool-grade opacity-50"
      />
      <div className="photo-overlay" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-20 sm:pb-28 pt-40 w-full">
        <div className="absolute top-6 right-5 sm:right-8 hidden sm:flex flex-col items-end gap-1 text-right">
          <span className="label text-stone">ul. Zamkowa 5, Wieliczka</span>
          <span className="label text-stone">Otwarte codziennie</span>
        </div>

        <div className="max-w-3xl">
          <h1
            className="font-display font-black leading-[0.95] text-salt"
            style={{
              fontSize: 'clamp(3.5rem, 14vw, 9rem)',
              letterSpacing: '-0.02em',
              opacity: carved ? 1 : 0,
              filter: carved ? 'blur(0px)' : 'blur(10px)',
              transform: carved ? 'translateY(0)' : 'translateY(14px)',
              transition: 'opacity 0.9s cubic-bezier(0.25,0.1,0.25,1), filter 0.9s cubic-bezier(0.25,0.1,0.25,1), transform 0.9s cubic-bezier(0.25,0.1,0.25,1)',
            }}
          >
            SZTOLNIA
          </h1>
          <p
            className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-salt/75 leading-relaxed"
            style={{
              opacity: carved ? 1 : 0,
              transform: carved ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.8s cubic-bezier(0.25,0.1,0.25,1) 0.25s, transform 0.8s cubic-bezier(0.25,0.1,0.25,1) 0.25s',
            }}
          >
            <span className="font-medium text-salt">rzeczownik.</span> poziomy korytarz wykuty w skale, prowadzący do tego, co znajduje się w jej wnętrzu.
          </p>
          <p
            className="accent-line mt-6 text-lg sm:text-xl text-amber/90"
            style={{
              opacity: carved ? 1 : 0,
              transform: carved ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.8s cubic-bezier(0.25,0.1,0.25,1) 0.45s, transform 0.8s cubic-bezier(0.25,0.1,0.25,1) 0.45s',
            }}
          >
            Restauracja przy Kopalni Soli w Wieliczce.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-stone motion-safe:animate-none">
        <span className="label">Schodzimy</span>
        <span className="block w-px h-10 bg-salt/30" aria-hidden="true" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. The Tension — "700 Years Underground"                            */
/* ------------------------------------------------------------------ */
function Tension() {
  return (
    <section className="section-dark relative" aria-label="700 lat pod ziemią">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 section-pad grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        <Reveal className="lg:col-span-3 order-1" tone="descent">
          <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-sm cool-hover">
            <img
              src={images.tension}
              alt="Wnętrze przemysłowe z drewnianymi belkami i kamiennymi ścianami w chłodnym świetle"
              loading="lazy"
              width="1800"
              height="2400"
              className="w-full h-full object-cover cool-grade"
              style={{ animation: 'none' }}
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-2 order-2" tone="descent" delay={120}>
          <span className="label text-stone">700 lat pod ziemią</span>
          <h2 className="font-display mt-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}>
            Wieliczka oddycha solą.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-salt/75 leading-relaxed">
            Od XIII wieku mieszkańcy Wieliczki schodzili w głąb ziemi, by wydobyć to, co dało miastu istnienie — sól, wykuwaną w sztolniach, poziomych korytarzach prowadzących do bogatych żył minerału. Każde pokolenie kontynuowało tę pracę, tworząc labirynt komór, który dziś jest wpisany na listę UNESCO.
          </p>
          <p className="accent-line mt-6 text-lg sm:text-xl text-salt/85">
            Każda sztolnia była wykuta, by wynieść na powierzchnię coś wartościowego.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. The Threshold — "Above Ground" — the ignition transition         */
/* ------------------------------------------------------------------ */
function Threshold() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0); // 0 (cool/dark) -> 1 (warm/lit)
  const [ignited, setIgnited] = useState(false);
  const prefersReducedRef = useRef(false);

  useEffect(() => {
    prefersReducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const node = ref.current;
    if (!node) return;

    if (prefersReducedRef.current || !isDesktop) {
      // Mobile / reduced-motion: simple two-stage reveal via IntersectionObserver
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setProgress(1);
            setIgnited(true);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(node);
      return () => observer.disconnect();
    }

    // Desktop: scroll-scrubbed transition tied to section position
    let rafId = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const rect = node.getBoundingClientRect();
        const vh = window.innerHeight;
        // Progress 0 when section top reaches viewport bottom,
        // progress 1 when section top reaches viewport top.
        const raw = (vh - rect.top) / (rect.height * 0.7 + vh * 0.0001);
        const clamped = Math.min(1, Math.max(0, raw));
        setProgress(clamped);
        if (clamped > 0.92 && !ignited) setIgnited(true);
        if (clamped < 0.85 && ignited) setIgnited(false);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Interpolated colors: Tunnel Black -> Ember Copper-tinted warmth
  const bgColor = mixColor('#15120F', '#3A2415', progress);
  const overlayOpacity = 0.55 - progress * 0.35;

  return (
    <section
      ref={ref}
      className="relative min-h-[120vh] lg:min-h-[160vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
      aria-label="Powyżej ziemi — przejście"
    >
      <img
        src={images.threshold}
        alt="Płonący grill Josper z widocznym ogniem i żarem, przygotowane mięso"
        loading="lazy"
        width="2200"
        height="1467"
        className="photo-backdrop"
        style={{
          filter: `saturate(${0.7 + progress * 0.5}) brightness(${0.55 + progress * 0.55}) contrast(${1.0 + progress * 0.1})`,
          transition: prefersReducedRef.current ? 'filter 0.6s ease' : 'none',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(21,18,15,${overlayOpacity}) 0%, rgba(21,18,15,${Math.min(0.95, overlayOpacity + 0.3)}) 100%)`,
          transition: prefersReducedRef.current ? 'background 0.6s ease' : 'none',
        }}
        aria-hidden="true"
      />

      {/* Ignition glow bloom — appears once, ignition easing curve */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 55%, rgba(201,116,58,0.55) 0%, rgba(201,116,58,0) 60%)',
          opacity: ignited ? 1 : 0,
          transform: ignited ? 'scale(1)' : 'scale(0.7)',
          transition: 'opacity 0.9s cubic-bezier(0.34,1.56,0.64,1), transform 0.9s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <p
          className="font-display text-salt"
          style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', lineHeight: 1.15 }}
        >
          Widzieliście, co ziemia daje pod ziemią.
        </p>
        <p
          className="accent-line mt-5 text-amber"
          style={{
            fontSize: 'clamp(1.5rem, 4.5vw, 3.25rem)',
            opacity: progress > 0.4 ? 1 : 0,
            transform: progress > 0.4 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s cubic-bezier(0.25,0.1,0.25,1), transform 0.7s cubic-bezier(0.25,0.1,0.25,1)',
          }}
        >
          Teraz spróbujcie, co daje na powierzchni.
        </p>
      </div>
    </section>
  );
}

/** Linear-interpolate two hex colors by t (0-1). */
function mixColor(hexA, hexB, t) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const r = Math.round(a.r + (b.r - a.r) * t);
  const g = Math.round(a.g + (b.g - a.g) * t);
  const bl = Math.round(a.b + (b.b - a.b) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}
function hexToRgb(hex) {
  const v = hex.replace('#', '');
  return {
    r: parseInt(v.substring(0, 2), 16),
    g: parseInt(v.substring(2, 4), 16),
    b: parseInt(v.substring(4, 6), 16),
  };
}

/* ------------------------------------------------------------------ */
/* 5. The Kitchen — "Fire as Craft"                                    */
/* ------------------------------------------------------------------ */
function Kitchen() {
  return (
    <section className="section-cellar relative" aria-label="Kuchnia — ogień jako rzemiosło">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 lg:pt-28">
        <Reveal tone="arrival">
          <span className="label text-amber">Ogień jako rzemiosło</span>
          <h2 className="font-display mt-3 max-w-2xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}>
            Każde danie zaczyna się od ognia.
          </h2>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-salt/75 leading-relaxed">
            Grill Josper to hiszpański piec na węgiel drzewny, który osiąga temperatury niedostępne dla zwykłego grilla — zamknięte ognisko, otwarty teatr. Płomień widać z sali, dym czuć od wejścia, a mięso nabiera głębi smaku, której nie da żadna inna metoda.
          </p>
        </Reveal>
      </div>

      <Reveal tone="arrival" delay={120} className="mt-10 sm:mt-14">
        <div className="snap-row pl-5 sm:pl-8 pb-6" role="list" aria-label="Galeria kuchni">
          {images.kitchen.map((img, i) => (
            <figure key={i} role="listitem" className="warm-hover relative aspect-[3/4] rounded-sm overflow-hidden last:mr-5 sm:last:mr-8">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width="1800"
                height="2400"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tunnel/50 via-transparent to-transparent" aria-hidden="true" />
            </figure>
          ))}
        </div>
      </Reveal>
      <div className="h-10 sm:h-16" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Signature Dishes — "What the Fire Gives Back"                    */
/* ------------------------------------------------------------------ */
function SignatureDishes() {
  return (
    <section className="section-cellar relative section-pad !pt-0" aria-label="Dania sygnaturowe">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal tone="arrival">
          <span className="label text-amber">To, co daje ogień</span>
          <h2 className="font-display mt-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}>
            Dania, które zapadają w pamięć.
          </h2>
        </Reveal>

        <div className="mt-12 sm:mt-16 flex flex-col gap-16 sm:gap-24">
          {SIGNATURES.map((dish, i) => (
            <Reveal
              key={dish.name}
              tone="arrival"
              delay={Math.min(i * 60, 180)}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className={`relative aspect-[4/5] rounded-sm overflow-hidden ${dish.beet ? 'ring-1 ring-beet/40' : ''} warm-hover`}>
                <img
                  src={dish.image}
                  alt={dish.imageAlt}
                  loading="lazy"
                  width="1600"
                  height="2000"
                  className="w-full h-full object-cover"
                />
                {dish.beet && (
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-beet" aria-hidden="true" />
                )}
              </div>
              <div>
                {dish.tag && <span className="label text-amber">{dish.tag}</span>}
                <h3 className="font-display mt-3" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.1 }}>
                  {dish.name}
                </h3>
                <p className="mt-4 text-base sm:text-lg text-salt/75 leading-relaxed max-w-md">
                  {dish.description}
                </p>
                <p className={`mt-6 label ${dish.beet ? 'text-beet' : 'text-copper'}`}>{dish.price} zł</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal tone="arrival" className="mt-16 sm:mt-20 text-center">
          <Link
            to="/menu"
            className="warm-hover inline-flex items-center justify-center min-h-[48px] px-7 rounded-sm border border-amber/40 text-amber font-body font-medium text-sm tracking-wide transition-colors duration-300 hover:bg-amber/10"
          >
            Zobacz całe menu
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7. The Distillery — "The Secret Beneath the Restaurant"             */
/* ------------------------------------------------------------------ */
function Distillery() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#1C1611', color: 'var(--salt)' }} aria-label="Sztolnia Destylarnia">
      {/* Slow amber glow pulse — the only "living light" on the site */}
      <div
        aria-hidden="true"
        className="amber-glow absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[640px] max-h-[640px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,162,61,0.35) 0%, rgba(232,162,61,0) 70%)' }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 section-pad text-center">
        <Reveal tone="arrival">
          <span className="label text-amber">Sekret pod restauracją</span>
          <h2 className="font-display mt-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05 }}>
            Sztolnia Destylarnia
          </h2>
          <p className="accent-line mt-6 text-lg sm:text-xl text-amber/90">
            Nie każdy, kto tu jada, wie, co powstaje piętro niżej.
          </p>
          <p className="mt-6 text-base sm:text-lg text-salt/75 leading-relaxed">
            W naszej własnej destylarni produkujemy nalewki, whisky i destylaty leżakowane w dębowych beczkach — rzemiosło, które rzadko spotkasz w restauracji przy atrakcji turystycznej. Spróbuj degustacji trzech autorskich destylatów albo poproś kelnera o parowanie z daniem.
          </p>
        </Reveal>

        <Reveal tone="arrival" delay={120} className="mt-10">
          <div className="relative aspect-[16/10] rounded-sm overflow-hidden warm-hover">
            <img
              src={images.distillery[0].src}
              alt={images.distillery[0].alt}
              loading="lazy"
              width="1800"
              height="1125"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal tone="arrival" delay={180} className="mt-10">
          <Link
            to="/destylarnia"
            className="warm-hover inline-flex items-center justify-center min-h-[48px] px-7 rounded-sm bg-amber/90 text-tunnel font-body font-medium text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03]"
          >
            Odkryj destylarnię
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8. The Building — "Three Floors, One Passage"                       */
/* ------------------------------------------------------------------ */
function Building() {
  return (
    <section className="section-cellar relative section-pad" aria-label="Budynek — trzy piętra, jedna sztolnia">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal tone="arrival">
          <span className="label text-amber">Trzy piętra, jedna sztolnia</span>
          <h2 className="font-display mt-3 max-w-2xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}>
            Jeden budynek, trzy nastroje.
          </h2>
        </Reveal>

        <div className="mt-12 sm:mt-16 flex flex-col gap-6 sm:gap-8">
          {BUILDING_FLOORS.map((floor, i) => (
            <Reveal
              key={floor.title}
              tone="arrival"
              delay={i * 80}
              className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] rounded-sm overflow-hidden border border-salt/10 warm-hover"
            >
              <div className="relative aspect-[16/10] sm:aspect-auto sm:h-full min-h-[220px]">
                <img
                  src={floor.image}
                  alt={floor.alt}
                  loading="lazy"
                  width="1800"
                  height="1125"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-10 flex flex-col justify-center bg-tunnel/40">
                <span className="label text-stone">{`0${3 - i}`}</span>
                <h3 className="font-display mt-2" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
                  {floor.title}
                </h3>
                <p className="mt-3 text-base text-salt/75 leading-relaxed max-w-md">
                  {floor.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 9. Reviews — "What People Carry Out With Them"                      */
/* ------------------------------------------------------------------ */
function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % REVIEWS.length);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative section-pad" style={{ backgroundColor: 'var(--stone)', color: 'var(--tunnel)' }} aria-label="Opinie gości">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <Reveal tone="arrival">
          <p className="font-display" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1 }}>
            4.7
          </p>
          <p className="label mt-2 text-tunnel/60">z ponad 3800 opinii</p>
        </Reveal>

        <div className="mt-10 sm:mt-14 min-h-[8rem] sm:min-h-[6rem] flex items-center justify-center" role="region" aria-live="polite" aria-label="Cytat z opinii gościa">
          {REVIEWS.map((r, i) => (
            <blockquote
              key={i}
              className="accent-line absolute max-w-2xl px-4 transition-opacity duration-[1500ms]"
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                lineHeight: 1.5,
                opacity: i === index ? 1 : 0,
                position: i === index ? 'relative' : 'absolute',
                pointerEvents: i === index ? 'auto' : 'none',
              }}
              aria-hidden={i !== index}
            >
              &bdquo;{r.quote}&rdquo;
              <footer className="mt-4 not-italic label text-tunnel/55">{r.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 10. Reservation — "Reserve Your Table at the Surface"               */
/* ------------------------------------------------------------------ */
function ReservationCTA() {
  return (
    <section
      className="relative overflow-hidden section-pad"
      style={{ background: 'linear-gradient(135deg, #C9743A 0%, #A8612F 100%)', color: 'var(--salt)' }}
      aria-label="Rezerwacja stolika"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
        <Reveal tone="arrival">
          <span className="label text-tunnel/70">Zaproszenie</span>
          <h2 className="font-display mt-3 text-tunnel" style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)', lineHeight: 1.05 }}>
            Zarezerwuj stolik na powierzchni.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-tunnel/80 leading-relaxed max-w-md">
            Stoliki wypełniają się szybko po wycieczkach do kopalni — szczególnie wieczorami i w weekendy.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+48518962722"
              className="warm-hover inline-flex items-center justify-center min-h-[48px] px-7 rounded-sm bg-tunnel text-salt font-body font-medium text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03]"
            >
              Zadzwoń: +48 518 962 722
            </a>
            <Link
              to="/kontakt#rezerwacja"
              className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-sm border border-tunnel/40 text-tunnel font-body font-medium text-sm tracking-wide transition-colors duration-300 hover:bg-tunnel/10"
            >
              Napisz do nas
            </Link>
          </div>
        </Reveal>

        <Reveal tone="arrival" delay={120}>
          <div className="bg-tunnel/90 rounded-sm p-6 sm:p-8">
            <HoursTable dark />
            <div className="mt-5 pt-5 border-t border-salt/10 text-sm text-salt/75">
              ul. Zamkowa 5, 32-020 Wieliczka
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

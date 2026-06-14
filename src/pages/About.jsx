import Reveal from '../components/Reveal';
import { images } from '../lib/images';

/**
 * About / Story page — extended version of "The Tension" + "The Threshold"
 * narrative: the building's history (former MAXIM), renovation, the
 * relationship to Karczma pod Wielką Solą, and the meaning of "sztolnia",
 * plus a short "How the Josper Works" explainer.
 */
export default function About() {
  return (
    <>
      <header className="section-dark relative pt-32 sm:pt-40 pb-14 sm:pb-20 overflow-hidden">
        <img
          src={images.about.hero}
          alt=""
          aria-hidden="true"
          loading="eager"
          width="2000"
          height="1333"
          className="photo-backdrop cool-grade opacity-40"
        />
        <div className="photo-overlay" aria-hidden="true" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal tone="descent">
            <span className="label text-stone">O nas</span>
            <h1 className="font-display mt-3" style={{ fontSize: 'clamp(2.75rem, 8vw, 6rem)', lineHeight: 1.02 }}>
              Sztolnia, czyli&nbsp;korytarz do&nbsp;wnętrza.
            </h1>
            <p className="accent-line mt-5 max-w-xl text-lg sm:text-xl text-salt/80">
              Nazwa, która niesie w sobie całą historię miasta.
            </p>
          </Reveal>
        </div>
      </header>

      {/* The meaning of the name */}
      <section className="section-dark relative" aria-label="Znaczenie nazwy">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 section-pad grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-3 order-1" tone="descent">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-sm cool-hover">
              <img
                src={images.about.tension}
                alt="Przemysłowe wnętrze z drewnianymi belkami i kamiennymi ścianami w chłodnym świetle"
                loading="lazy"
                width="1800"
                height="2400"
                className="w-full h-full object-cover cool-grade"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-2 order-2" tone="descent" delay={120}>
            <span className="label text-stone">Sztolnia (rzeczownik)</span>
            <h2 className="font-display mt-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}>
              Korytarz wykuty, by dotrzeć do wnętrza.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-salt/75 leading-relaxed">
              Sztolnia to poziomy korytarz wykuty w skale — drąży się go, by dotrzeć do bogatej żyły soli ukrytej w głębi. Przez 700 lat takie korytarze budowały gospodarkę i tożsamość Wieliczki, dziś wpisaną na listę światowego dziedzictwa UNESCO. Nasza restauracja nosi to imię nie jako metaforę, lecz jako fakt — jesteśmy częścią tej samej historii, tylko nad ziemią.
            </p>
            <p className="accent-line mt-6 text-lg sm:text-xl text-salt/85">
              Żadna inna restauracja w Wieliczce nie może powiedzieć, że jej nazwa jest dosłownym terminem architektonicznym, na którym zbudowano całe miasto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The building / renovation / sister venue */}
      <section className="section-cellar relative section-pad" aria-label="Budynek i historia">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal tone="arrival">
            <span className="label text-amber">Budynek</span>
            <h2 className="font-display mt-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05 }}>
              Dawny MAXIM, na nowo odkryty.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-salt/75 leading-relaxed">
              Sztolnia zajmuje odnowiony budynek w samym centrum historycznej Wieliczki — wcześniej znany jako MAXIM. Podczas renowacji odsłoniliśmy to, co budynek skrywał: cegłę, drewniane belki, kamienne sklepienia. Nie projektowaliśmy wnętrza w stylu industrialnym — odkryliśmy je pod warstwami tynku, tak jak odkrywa się żyłę soli pod warstwami skały.
            </p>
            <p className="mt-5 text-base sm:text-lg text-salt/75 leading-relaxed">
              Sztolnia jest siostrzaną restauracją Karczmy pod Wielką Solą — uznanego miejsca z wieloletnią tradycją w Wieliczce. Dzielimy dziedzictwo kulinarne i doświadczenie gospodarzy, ale Sztolnia ma swój własny charakter: ogień, dym i nowoczesna kuchnia europejska, z grillem Josper jako centralnym punktem.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How the Josper works */}
      <section className="relative section-pad" style={{ background: 'linear-gradient(135deg, #1C1611 0%, #2A1C13 100%)', color: 'var(--salt)' }} aria-label="Jak działa grill Josper">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal tone="arrival">
            <span className="label text-amber">Jak działa grill Josper</span>
            <h2 className="font-display mt-3" style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)', lineHeight: 1.05 }}>
              Zamknięty ogień, otwarty teatr.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-salt/75 leading-relaxed">
              Josper to hiszpański grill-piekarnik na węgiel drzewny, łączący zamknięte ognisko z otwartym rożnem. Wysoka temperatura — często ponad 350°C — zapieka mięso z zewnątrz, zachowując sok w środku, a dym z drewna i węgla wnika głęboko w strukturę. To metoda wymagająca rzemiosła: każdy kawałek mięsa wymaga innego czasu i odległości od żaru.
            </p>
            <p className="mt-5 text-base sm:text-lg text-salt/75 leading-relaxed">
              U nas grill stoi tak, by płomień był widoczny z sali — teatr ognia jest częścią doświadczenia, nie tylko techniką kuchenną.
            </p>
          </Reveal>
          <Reveal tone="arrival" delay={120}>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden warm-hover">
              <img
                src={images.about.threshold}
                alt="Płonący grill Josper z widocznym ogniem i żarem, przygotowane mięso"
                loading="lazy"
                width="1800"
                height="2250"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

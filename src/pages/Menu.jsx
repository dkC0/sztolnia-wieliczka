import { useEffect, useRef, useState } from 'react';
import Reveal from '../components/Reveal';
import MenuCard from '../components/MenuCard';
import { MENU } from '../lib/menuData';
import { images } from '../lib/images';

/**
 * Full menu, organized by category with sticky category navigation.
 * Featured items get full MenuCard treatment with photography; the rest
 * are editorial list rows — avoids "photo per item" visual clutter.
 */
export default function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className="section-dark relative pt-32 sm:pt-40 pb-14 sm:pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal tone="descent">
            <span className="label text-stone">Menu</span>
            <h1 className="font-display mt-3" style={{ fontSize: 'clamp(2.75rem, 8vw, 6rem)', lineHeight: 1.02 }}>
              Co ogień daje&nbsp;dziś.
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-salt/75 leading-relaxed">
              Menu sezonowe, oparte na grillu Josper i kuchni europejskiej. Ceny w złotych polskich.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Sticky category navigation */}
      <nav
        className="sticky top-16 sm:top-20 z-30 bg-stone/95 backdrop-blur-sm border-b border-tunnel/10"
        aria-label="Kategorie menu"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ul className="flex gap-6 sm:gap-8 overflow-x-auto py-3 text-sm" style={{ scrollbarWidth: 'none' }}>
            {MENU.map((cat) => (
              <li key={cat.id} className="flex-shrink-0">
                <button
                  type="button"
                  onClick={() => scrollTo(cat.id)}
                  className={`label py-1 transition-colors duration-300 whitespace-nowrap ${
                    active === cat.id ? 'text-copper' : 'text-tunnel/60 hover:text-tunnel'
                  }`}
                  aria-current={active === cat.id ? 'true' : undefined}
                >
                  {cat.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div style={{ backgroundColor: 'var(--salt)', color: 'var(--tunnel)' }}>
        {MENU.map((cat, catIndex) => (
          <section
            key={cat.id}
            id={cat.id}
            ref={(el) => (sectionRefs.current[cat.id] = el)}
            className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20 border-b border-tunnel/10 last:border-b-0"
            aria-label={cat.title}
          >
            <Reveal tone="descent">
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.05 }}>
                {cat.title}
              </h2>
              <p className="accent-line mt-1 text-stone text-base sm:text-lg">{cat.subtitle}</p>
            </Reveal>

            {/* Featured dishes with photography */}
            {cat.items.some((it) => it.featured && it.image) && (
              <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {cat.items
                  .filter((it) => it.featured && it.image)
                  .map((dish, i) => (
                    <Reveal key={dish.name} tone="descent" delay={i * 60}>
                      <MenuCard dish={dish} />
                    </Reveal>
                  ))}
              </div>
            )}

            {/* Remaining items — editorial list rows */}
            <ul className="mt-8 sm:mt-10 flex flex-col">
              {cat.items
                .filter((it) => !(it.featured && it.image))
                .map((item, i) => (
                  <Reveal key={item.name} tone="descent" delay={i * 40} as="li">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4 border-t border-tunnel/10 first:border-t-0">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <h3 className="font-display text-lg sm:text-xl">{item.name}</h3>
                          {item.featured && (
                            <span className="label text-copper">Polecane</span>
                          )}
                        </div>
                        <p className="mt-1 text-sm sm:text-base text-tunnel/65 leading-relaxed max-w-2xl">
                          {item.description}
                        </p>
                      </div>
                      <div className="label text-copper whitespace-nowrap sm:pl-6">
                        {item.price} zł{item.note ? <span className="text-tunnel/45"> &middot; {item.note}</span> : ''}
                      </div>
                    </div>
                  </Reveal>
                ))}
            </ul>

            {/* Occasional full-width photo break between select categories */}
            {catIndex === 1 && (
              <Reveal tone="descent" className="mt-10 sm:mt-14">
                <div className="relative aspect-[16/7] rounded-sm overflow-hidden warm-hover">
                  <img
                    src={images.threshold}
                    alt="Płonący grill Josper z żarem i grillowanym mięsem"
                    loading="lazy"
                    width="2200"
                    height="963"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            )}
          </section>
        ))}
      </div>
    </>
  );
}

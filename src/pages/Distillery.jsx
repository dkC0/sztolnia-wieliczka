import Reveal from '../components/Reveal';
import { images } from '../lib/images';
import { MENU } from '../lib/menuData';

/**
 * Distillery page — the strongest unique-content/SEO opportunity.
 * Deep-dive into production, spirits offered, and tasting notes.
 */
export default function Distillery() {
  const spirits = MENU.find((c) => c.id === 'destylarnia')?.items ?? [];

  return (
    <>
      <header className="relative pt-32 sm:pt-40 pb-14 sm:pb-20 overflow-hidden" style={{ backgroundColor: '#1C1611', color: 'var(--salt)' }}>
        <img
          src={images.distilleryPage.hero}
          alt=""
          aria-hidden="true"
          loading="eager"
          width="2000"
          height="1333"
          className="photo-backdrop opacity-35"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(28,22,17,0.3) 0%, rgba(28,22,17,0.92) 100%)' }} aria-hidden="true" />

        {/* Slow amber glow pulse */}
        <div
          aria-hidden="true"
          className="amber-glow absolute top-1/4 right-0 w-[50vw] h-[50vw] max-w-[560px] max-h-[560px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,162,61,0.3) 0%, rgba(232,162,61,0) 70%)' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal tone="arrival">
            <span className="label text-amber">Sekret pod restauracją</span>
            <h1 className="font-display mt-3" style={{ fontSize: 'clamp(2.75rem, 8vw, 6rem)', lineHeight: 1.02 }}>
              Sztolnia Destylarnia
            </h1>
            <p className="accent-line mt-5 max-w-xl text-lg sm:text-xl text-amber/90">
              Nie każdy, kto tu jada, wie, co powstaje piętro niżej.
            </p>
          </Reveal>
        </div>
      </header>

      {/* The story */}
      <section className="relative section-pad" style={{ backgroundColor: '#1C1611', color: 'var(--salt)' }} aria-label="Historia destylarni">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <Reveal tone="arrival">
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
              Rzemiosło, którego nie znajdziesz w żadnym przewodniku.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-salt/75 leading-relaxed">
              W trzewiach budynku, niedaleko miejsca, gdzie ogień grilla Josper rozświetla salę, prowadzimy własną, niewielką destylarnię. Produkujemy nalewki na bazie miodu i ziół, domowe whisky oraz destylaty leżakowane w dębowych beczkach — tak jak robiono to w regionie od pokoleń, tylko na mniejszą, rzemieślniczą skalę.
            </p>
            <p className="mt-5 text-base sm:text-lg text-salt/75 leading-relaxed">
              To craft distillery w mieście, które słynie z wydobycia — soli pod ziemią, a teraz i smaku nad ziemią. Niewiele restauracji w okolicy Krakowa może zaproponować degustację własnych destylatów przy stole.
            </p>
          </Reveal>
        </div>

        <Reveal tone="arrival" delay={120} className="mt-12 sm:mt-16 max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {images.distillery.map((img, i) => (
              <div key={i} className="relative aspect-[4/5] rounded-sm overflow-hidden warm-hover">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width="1800"
                  height="2250"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Spirits / tasting notes */}
      <section className="relative section-pad" style={{ backgroundColor: 'var(--salt)', color: 'var(--tunnel)' }} aria-label="Karta destylatów">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal tone="descent">
            <span className="label text-copper">Karta destylatów</span>
            <h2 className="font-display mt-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
              Co produkujemy na miejscu.
            </h2>
          </Reveal>

          <ul className="mt-10 flex flex-col">
            {spirits.map((item, i) => (
              <Reveal key={item.name} tone="descent" delay={i * 50} as="li">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-5 border-t border-tunnel/10 first:border-t-0">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h3 className="font-display text-lg sm:text-xl">{item.name}</h3>
                      {item.featured && <span className="label text-copper">Polecane</span>}
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

          <Reveal tone="descent" delay={200} className="mt-10 text-center">
            <p className="accent-line text-lg sm:text-xl text-stone">
              Zapytaj kelnera o degustację lub parowanie destylatów z daniem.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import Reveal from '../components/Reveal';
import { images } from '../lib/images';

/**
 * Gallery page — grouped into "Descent" (interior/architecture, cool tones)
 * and "Arrival" (food/fire/drinks, warm tones), echoing the homepage's
 * core narrative even here. Editorial masonry-style grid, not a lightbox.
 */
export default function Gallery() {
  return (
    <>
      <header className="section-dark relative pt-32 sm:pt-40 pb-14 sm:pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal tone="descent">
            <span className="label text-stone">Galeria</span>
            <h1 className="font-display mt-3" style={{ fontSize: 'clamp(2.75rem, 8vw, 6rem)', lineHeight: 1.02 }}>
              Z głębi i&nbsp;z&nbsp;ognia.
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-salt/75 leading-relaxed">
              Dwa rejestry jednej historii — kamienne wnętrza budynku i ciepło, które czeka w środku.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Descent — cool, architectural */}
      <section className="section-dark relative pb-14 sm:pb-20" aria-label="Galeria — Zejście">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal tone="descent">
            <span className="label text-stone">Zejście</span>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {images.gallery.descent.map((img, i) => (
              <Reveal
                key={i}
                tone="descent"
                delay={(i % 4) * 60}
                className={i === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}
              >
                <div className={`relative rounded-sm overflow-hidden cool-hover ${i === 0 ? 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-square' : 'aspect-[4/5]'}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width="1600"
                    height="2000"
                    className="w-full h-full object-cover cool-grade"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Arrival — warm, alive */}
      <section className="section-cellar relative section-pad" aria-label="Galeria — Powrót">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal tone="arrival">
            <span className="label text-amber">Powrót</span>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.gallery.arrival.map((img, i) => (
              <Reveal
                key={i}
                tone="arrival"
                delay={(i % 3) * 60}
                className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <div className={`relative rounded-sm overflow-hidden warm-hover ${i === 0 ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/5]'}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width="1600"
                    height="2000"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Large dish card for the "Kitchen" / signature dishes rows — 3:4 photo,
 * Fraunces name, Inter description and price. The "warm-hover" glow lives
 * in index.css and is reserved for arrival-half interactive elements.
 */
export default function MenuCard({ dish }) {
  return (
    <article className="warm-hover flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
        <img
          src={dish.image}
          alt={dish.imageAlt || dish.name}
          loading="lazy"
          width="900"
          height="1200"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pt-4 flex flex-col gap-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl sm:text-2xl">{dish.name}</h3>
          <span className="label text-copper whitespace-nowrap mt-1">{dish.price} zł</span>
        </div>
        <p className="text-sm text-tunnel/70 leading-relaxed">{dish.description}</p>
      </div>
    </article>
  );
}

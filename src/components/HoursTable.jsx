import { HOURS, getOpenStatus } from '../lib/hoursData';

/**
 * Visual weekly hours table with a live "open now / closed" status line.
 * `compact` renders a condensed 2-row grouping for tight spaces (footer);
 * default renders the full 7-row table.
 */
export default function HoursTable({ compact = false, className = '', dark = false }) {
  const { dayIndex, isOpen } = getOpenStatus();
  const mutedText = dark ? 'text-salt/50' : 'text-tunnel/50';

  if (compact) {
    return (
      <dl className={`text-sm ${dark ? 'text-salt/70' : 'text-tunnel/70'} grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 mx-auto w-fit ${className}`}>
        <dt className={mutedText}>Pon&ndash;Czw, Niedz</dt><dd>12:00&ndash;22:00</dd>
        <dt className={mutedText}>Pt&ndash;Sob</dt><dd>12:00&ndash;23:00</dd>
      </dl>
    );
  }

  return (
    <div className={`border border-salt/15 rounded-sm p-5 sm:p-6 ${dark ? 'bg-tunnel/40' : 'bg-salt/60'} ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-xl">Godziny otwarcia</h3>
        <span
          className={`label inline-flex items-center gap-2 ${isOpen ? 'text-copper' : (dark ? 'text-salt/45' : 'text-tunnel/45')}`}
          role="status"
        >
          <span
            className={`w-2 h-2 rounded-full ${isOpen ? 'bg-copper' : (dark ? 'bg-salt/30' : 'bg-tunnel/30')}`}
            aria-hidden="true"
          />
          {isOpen ? 'Otwarte teraz' : 'Zamknięte teraz'}
        </span>
      </div>
      <table className="w-full text-sm">
        <tbody>
          {HOURS.map((row, i) => (
            <tr
              key={row.day}
              className={`border-t ${dark ? 'border-salt/10' : 'border-stone/20'} first:border-t-0 ${
                i === dayIndex ? 'font-medium' : (dark ? 'text-salt/70' : 'text-tunnel/70')
              }`}
            >
              <th scope="row" className="text-left font-normal py-2">
                {row.day}
                {i === dayIndex && <span className="sr-only"> (dziś)</span>}
              </th>
              <td className="text-right font-sans py-2">
                {row.open}&ndash;{row.close}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

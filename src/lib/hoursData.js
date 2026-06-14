// Sztolnia Wieliczka — opening hours.
export const HOURS = [
  { day: 'Poniedziałek', open: '12:00', close: '22:00' },
  { day: 'Wtorek', open: '12:00', close: '22:00' },
  { day: 'Środa', open: '12:00', close: '22:00' },
  { day: 'Czwartek', open: '12:00', close: '22:00' },
  { day: 'Piątek', open: '12:00', close: '23:00' },
  { day: 'Sobota', open: '12:00', close: '23:00' },
  { day: 'Niedziela', open: '12:00', close: '22:00' },
];

/**
 * Returns the index (0=Mon..6=Sun) of "today" plus whether the venue is
 * currently open, based on local time against the HOURS table above.
 */
export function getOpenStatus() {
  const now = new Date();
  const jsDay = now.getDay(); // 0=Sun..6=Sat
  const dayIndex = jsDay === 0 ? 6 : jsDay - 1; // 0=Mon..6=Sun
  const row = HOURS[dayIndex];
  const [openH, openM] = row.open.split(':').map(Number);
  const [closeH, closeM] = row.close.split(':').map(Number);
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const minutesOpen = openH * 60 + openM;
  const minutesClose = closeH * 60 + closeM;
  const isOpen = minutesNow >= minutesOpen && minutesNow < minutesClose;
  return { dayIndex, isOpen };
}

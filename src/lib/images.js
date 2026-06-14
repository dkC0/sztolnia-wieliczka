// Curated real photography (Unsplash), verified HTTP 200, organized into the
// two visual registers from "THE DESCENT AND THE FIRE": cool/mineral "Descent"
// and warm/alive "Arrival". Genuine salt-mine-chamber photography does not
// exist on Unsplash — the closest available substitutes are cool-toned stone,
// brick, and industrial-loft interiors, color-graded via .cool-grade in CSS.
const u = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // Loader / Hero — Tunnel Black background, near-static, cool industrial bar
  hero: u('photo-1432139509613-5c4255815697', 2200),

  // The Tension — tall cool-toned image (industrial loft with hanging shelves)
  // Substitution note: stands in for a "deep mine chamber" — closest available
  // cool, vertical, architectural interior.
  tension: u('photo-1521017432531-fbd92d768814', 1800),

  // The Threshold — Josper grill reveal, flames/char visible
  threshold: u('photo-1544025162-d76694265947', 2200),

  // The Kitchen gallery — fire/grill/plating moments
  kitchen: [
    { src: u('photo-1544025162-d76694265947', 1800), alt: 'Płonący grill Josper z węglem drzewnym i przyrumienionym mięsem' },
    { src: u('photo-1555939594-58d7cb561ad1', 1800), alt: 'Mieszany grill z szaszłykami, warzywami i kiełbaskami na blasze' },
    { src: u('photo-1551218372-a8789b81b253', 1800), alt: 'Kotlet z grilla z pieczonymi ziemniakami i zieloną brokułką' },
    { src: u('photo-1572715376701-98568319fd0b', 1800), alt: 'Szef kuchni dekoruje talerz w ciemnej, przemysłowej kuchni' },
  ],

  // Signature dishes
  dishes: {
    burger: u('photo-1551782450-a2132b4ba21d', 1600),
    burgerCrossSection: u('photo-1532980400857-e8d9d275d858', 1600),
    ribs: u('photo-1529193591184-b1d58069ecdd', 1600),
    raviolli: u('photo-1525351484163-7529414344d8', 1600),
    dumplings: u('photo-1604908176997-125f25cc6f3d', 1600),
    tiramisu: u('photo-1565299624946-b28f40a0ae38', 1600),
    salmon: u('photo-1574484284002-952d92456975', 1600),
    spread: u('photo-1546833999-b9f581a1996d', 1600),
  },

  // The Distillery — bottles, pours, warm cellar tones
  distillery: [
    { src: u('photo-1569529465841-dfecdab7503b', 1800), alt: 'Butelka whisky i szklanka drinka na blacie, ciepłe światło baru' },
    { src: u('photo-1514362545857-3bc16c4c7d1b', 1800), alt: 'Bursztynowy drink z lodem i rozmarynem na drewnianej tacy' },
    { src: u('photo-1481833761820-0509d3217039', 1800), alt: 'Przemysłowy bar z rzędem butelek i ciepłym oświetleniem żarówkowym' },
  ],

  // The Building — three floors, industrial-rustic dining rooms
  building: {
    groundFloor: u('photo-1544148103-0773bf10d330', 1800),
    upperFloor: u('photo-1521133573892-e44906baee46', 1800),
    cellar: u('photo-1481833761820-0509d3217039', 1800),
  },

  // The Square / Reservation backdrop — warm dining room at dusk
  reservation: u('photo-1544148103-0773bf10d330', 2200),

  // Gallery — full set across both registers
  gallery: {
    descent: [
      { src: u('photo-1521017432531-fbd92d768814', 1600), alt: 'Przemysłowe wnętrze z drewnianymi półkami i ciemnym oświetleniem' },
      { src: u('photo-1517677208171-0bc6725a3e60', 1600), alt: 'Ciemny bar z rzędem butelek i wisiącymi żarówkami' },
      { src: u('photo-1538485399081-7191377e8241', 1600), alt: 'Wnętrze restauracji z ciemnym drewnem i mosiężnymi lampami' },
      { src: u('photo-1604147706283-d7119b5b822c', 1800), alt: 'Bar z wisiącymi żarówkami w stylu loftowym, ciepłe światło' },
    ],
    arrival: [
      { src: u('photo-1544025162-d76694265947', 1600), alt: 'Płonący grill Josper z węglem i mięsem' },
      { src: u('photo-1555939594-58d7cb561ad1', 1600), alt: 'Mieszany grill z szaszłykami i warzywami' },
      { src: u('photo-1551782450-a2132b4ba21d', 1600), alt: 'Burger z frytkami na ciemnym talerzu' },
      { src: u('photo-1529193591184-b1d58069ecdd', 1600), alt: 'Żeberka BBQ pokrojone na drewnianej desce' },
      { src: u('photo-1569529465841-dfecdab7503b', 1600), alt: 'Butelka whisky i drink na barze' },
      { src: u('photo-1546833999-b9f581a1996d', 1600), alt: 'Stół pełen dań z grilla, widok z góry' },
    ],
  },

  // About page
  about: {
    hero: u('photo-1432139509613-5c4255815697', 2000),
    tension: u('photo-1521017432531-fbd92d768814', 1800),
    threshold: u('photo-1544025162-d76694265947', 1800),
  },

  // Distillery page
  distilleryPage: {
    hero: u('photo-1569529465841-dfecdab7503b', 2000),
  },

  // Contact / Reservation page
  contact: {
    hero: u('photo-1544148103-0773bf10d330', 2000),
  },
};

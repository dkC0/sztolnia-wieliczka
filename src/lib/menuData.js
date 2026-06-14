// Sztolnia Wieliczka — full menu, structured by category.
// Prices reflect the "accessible premium" tier (PLN 30-90 per main).
import { images } from './images';

export const MENU = [
  {
    id: 'przystawki',
    title: 'Przystawki',
    subtitle: 'Starters — before the descent',
    items: [
      {
        name: 'Deska wędlin i serów',
        description: 'Wybór lokalnych wędlin i serów, marynowane warzywa, chleb na zakwasie i miodowa musztarda.',
        price: '46',
      },
      {
        name: 'Krem z pieczonych warzyw',
        description: 'Aksamitny krem z sezonowych warzyw korzeniowych, grzanki czosnkowe i olej ziołowy.',
        price: '22',
      },
      {
        name: 'Carpaccio z buraka',
        description: 'Cienko krojony pieczony burak, kozi ser, orzechy włoskie i vinaigrette malinowy — echo regionalnych smaków.',
        price: '32',
      },
      {
        name: 'Tatar wołowy',
        description: 'Tatar z polskiej wołowiny, żółtko, kapary, cebula i grzyby marynowane.',
        price: '44',
      },
      {
        name: 'Krewetki z chorizo',
        description: 'Krewetki podsmażone z chorizo, czosnkiem i białym winem, podane z chlebem.',
        price: '48',
      },
    ],
  },
  {
    id: 'josper',
    title: 'Z grilla Josper',
    subtitle: 'From the Josper — fire as craft',
    items: [
      {
        name: 'Żeberka BBQ',
        description: 'Żeberka wieprzowe wolno grillowane na węglu drzewnym, glazurowane sosem BBQ, podane ze słodkimi ziemniakami.',
        price: '64',
        featured: true,
        image: images.dishes.ribs,
        imageAlt: 'Żeberka BBQ pokrojone na drewnianej desce, intensywnie przyrumienione',
      },
      {
        name: 'Antrykot z grilla Josper',
        description: 'Antrykot wołowy grillowany na żarze, masło ziołowe, frytki z batatów.',
        price: '89',
      },
      {
        name: 'Kotlet wieprzowy z ogniska',
        description: 'Gruby kotlet wieprzowy z grilla, pieczone ziemniaki, brokułka i sos na bazie jabłka.',
        price: '58',
        image: images.dishes.salmon,
        imageAlt: 'Grillowany kotlet z pieczonymi ziemniakami i zieloną brokułką',
      },
      {
        name: 'Łosoś z grilla',
        description: 'Łosoś grillowany na żarze, szparagi i sos Bearnaise.',
        price: '69',
      },
      {
        name: 'Kurczak z rożna',
        description: 'Połówka kurczaka marynowanego w ziołach, grillowana na węglu, podana z pieczonymi warzywami.',
        price: '52',
      },
    ],
  },
  {
    id: 'dania-europejskie',
    title: 'Dania europejskie',
    subtitle: 'European mains — beyond the grill',
    items: [
      {
        name: 'Czarne ravioli z dorszem',
        description: 'Czarne ravioli nadziewane dorszem i porem, w aksamitnej maślanej emulsji — danie, które zaskakuje gości spoza Wieliczki.',
        price: '58',
        featured: true,
        image: images.dishes.raviolli,
        imageAlt: 'Czarne ravioli z dorszem i porem w maślanym sosie',
      },
      {
        name: 'Pierogi z kaczką',
        description: 'Domowe pierogi nadziewane konfitowaną kaczką, podane z masłem i prażoną cebulką.',
        price: '46',
        featured: true,
        image: images.dishes.dumplings,
        imageAlt: 'Talerz pierogów z kaczką podanych z masłem i ziołami',
      },
      {
        name: 'Kaczka pieczona',
        description: 'Pieczona kaczka z sosem wiśniowym, kasza gryczana i buraczki.',
        price: '64',
      },
      {
        name: 'Risotto z grzybami leśnymi',
        description: 'Kremowe risotto z grzybami leśnymi, parmezanem i oliwą truflową.',
        price: '48',
      },
      {
        name: 'Żurek staropolski',
        description: 'Tradycyjny żurek na zakwasie żytnim, z białą kiełbasą i jajkiem.',
        price: '26',
      },
    ],
  },
  {
    id: 'burgery',
    title: 'Burgery',
    subtitle: 'Burgers — what the fire gives back',
    items: [
      {
        name: 'Burger Sztolnia',
        description: 'Wołowina z grilla Josper, camembert, gruszka, karmelizowana cebula i buraczany ketchup — nasz podpis, niespotykany gdzie indziej w Wieliczce.',
        price: '46',
        featured: true,
        image: images.dishes.burger,
        imageAlt: 'Burger Sztolnia z camembertem, gruszką i buraczanym ketchupem',
      },
      {
        name: 'Burger BBQ z boczkiem',
        description: 'Wołowina, wędzony boczek, cheddar, sos BBQ i krążki cebulowe.',
        price: '44',
      },
      {
        name: 'Burger wegetariański',
        description: 'Kotlet z ciecierzycy i warzyw, awokado, rukola i sos jogurtowy.',
        price: '38',
      },
      {
        name: 'Burger z kurczakiem',
        description: 'Grillowany kurczak, ostra majonezowa salsa, sałata i pomidor.',
        price: '40',
      },
    ],
  },
  {
    id: 'desery',
    title: 'Desery',
    subtitle: 'Desserts — the warm finish',
    items: [
      {
        name: 'Tiramisu pistacjowe',
        description: 'Warstwy biszkoptu, kremu mascarpone i pistacji — nasza autorska reinterpretacja klasyku.',
        price: '28',
        featured: true,
        image: images.dishes.tiramisu,
        imageAlt: 'Tiramisu pistacjowe w szklance, z widocznymi warstwami kremu',
      },
      {
        name: 'Szarlotka na ciepło',
        description: 'Cynamonowe jabłka pod kruszonką, podana na ciepło z lodami waniliowymi.',
        price: '24',
      },
      {
        name: 'Crème brûlée',
        description: 'Klasyczny krem waniliowy z karmelizowaną skórką.',
        price: '26',
      },
      {
        name: 'Tarta czekoladowa',
        description: 'Gorzka czekolada, chrupiący spód i morska sól.',
        price: '26',
      },
    ],
  },
  {
    id: 'destylarnia',
    title: 'Drinki i Destylarnia',
    subtitle: 'Drinks & Distillery — the secret beneath',
    items: [
      {
        name: 'Degustacja Sztolnia Destylarnia',
        description: 'Trzy autorskie destylaty produkowane na miejscu — od czystych nalewek po beczkowe leżakowanie. Notatki degustacyjne podaje kelner.',
        price: '54',
        featured: true,
      },
      {
        name: 'Nalewka miodowa Sztolnia',
        description: 'Domowa nalewka na bazie miodu i ziół, leżakowana w dębowych beczkach.',
        price: '18',
        note: '50 ml',
      },
      {
        name: 'Old Fashioned z destylarni',
        description: 'Whisky własnej produkcji, cukier, gorzkie aromaty i skórka pomarańczy.',
        price: '36',
      },
      {
        name: 'Piwo rzemieślnicze',
        description: 'Wybór lokalnych piw rzemieślniczych, sezonowo zmieniany.',
        price: '16–24',
      },
      {
        name: 'Lampka wina (czerwone / białe)',
        description: 'Karta win europejskich dopasowana do sezonu.',
        price: '18–32',
      },
    ],
  },
];

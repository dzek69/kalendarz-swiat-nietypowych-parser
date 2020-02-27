# Kalendarz Świąt Nietypowych Fetcher & Parser

(**English**: Nothing useful here for non-polish speakers.)

Automat do pobierania i parsowania Kalendarza Świąt Nietypowych z Nonsensopedii. Większość dat jest zbierana automatem, parę jest
parsowanych "z pomocą". Daty "ustalane" są ignorowane.

## Wymagania

W miarę nowy Node.js

## Sposób użycia

```javascript
const fetchCalendar = require("kalendarz-swiat-nietypowych-parser");

(async () => {
    const list = await fetchCalendar(YEAR);
    // array with objects like:
    // { month: 2, day: 2, year: 2020, name: 'Światowy Dzień Mokradeł' }
})();
```

## Znane problemy

- Bałagan w kodzie parsującym
- Parser nie rozróżnia czy przecinek jest formą w zdaniu czy rozdziela święto, np:
"Dzień Dzieci, Które Zastępują Żołnierzy" jest dzielone na "Dzień Dzieci" i "Które Zastępują Żołnierzy"

## Do zrobienia

- Naprawić znane problemy
- Ogarnąć @todo w kodzie
- Wyeliminować wszystkie "typowe" święta, takie jak "Boże Narodzenie", które nijak jest nietypowe i będzie się
duplikowało z ew. "wbudowanymi" świętami w określonych kalendarzach

## FAQ

- Po co to, skoro Nonsensopedia udostępnia to samo? https://s.o7o.pl/rKpr6L

To nie jest to samo - zdaje się, że brakuje tam świąt, dodatkowo do wpisów są pododawane jakieś bzdury.

## Licencja

MIT

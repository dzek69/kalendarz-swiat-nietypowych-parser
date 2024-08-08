# Kalendarz Świąt Nietypowych Fetcher & Parser

(**English**: Nothing useful here for non-polish speakers.)

Automat do pobierania i parsowania Kalendarza Świąt Nietypowych z Nonsensopedii. Uwzględnia święta ruchome! (z paroma
wyjątkami).

## Wymagania

W miarę nowy Node.js

## Sposób użycia

Jeżeli po prostu chcesz listę do zaimportowania do kalendarza to
[spójrz na to repo](https://github.com/dzek69/kalendarz-swiat-nietypowych-ics-google-exporter).

```javascript
const fetchCalendar = require("kalendarz-swiat-nietypowych-parser");

(async () => {
    const list = await fetchCalendar(YEAR);
    // array with objects like:
    // { month: 2, day: 2, year: 2020, name: 'Światowy Dzień Mokradeł' }
})();
```

## Do zrobienia

- Ogarnąć bałagan w kodzie
- Ogarnąć @todo w kodzie

## Nie działa!

Jak nie działa, to proszę zgłosić, naprawię :)

## Licencja

MIT

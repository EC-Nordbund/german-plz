# Postleitzahlen

> This package includes all German Postleitzahlen so this file is german.

## Woher kommen die Daten?
Die Daten kommen von OpenStreetMaps und wurden von https://www.suche-postleitzahl.org/ aufbereitet und von mir in ein JSON Format gebracht.

## Welche Daten haben wir?
Wir haben 3 besondere Dateien und ansonsten für jede PLZ eine Datei:

```js
// Array aller Orte der entsprechenden PLZ.
require('postleitzahlen/data/12345.json')

// Array aller PLZ
require('postleitzahlen/data/plz.json')

// Orte zu PLZ zuordnung
require('postleitzahlen/data/ort.json')
// Hat folgende Form:
const data = {
  'Kassel': ['12345', '12346'],
  // ...
}

// PLZ zu Orte zuordnung
require('postleitzahlen/data/plz.full.json')
// Hat folgende Form:
const data = {
  '12345': ['Musterstadt', 'Musterdorf'],
  // ...
}


```

## Lizenz
Diese Daten liegen stehen unter der Open Database Licence frei zur Verfügung. Quelle der Rohdaten: © OpenStreetMap contributors.

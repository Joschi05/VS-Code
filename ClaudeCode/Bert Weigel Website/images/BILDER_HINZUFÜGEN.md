# Bilder für die Website

Lege die Bilder in den jeweiligen Unterordnern ab.
Die Website funktioniert sofort — Karten zeigen einen farbigen Gradient-Platzhalter,
bis das echte Bild gefunden wird.

## Hero-Bild (Startseite)

```
images/
  hero.jpg          ← Eines der Gemälde als bildschirmfüllendes Hero (empfohlen: Darß 3 o.ä.)
```

## Heiligendamm

```
images/heiligendamm/
  heiligendamm.jpg
  hohes-ufer.jpg
  grandhotel.jpg
  buhnen.jpg
  strandkoerbe.jpg
```

## Darß

```
images/darss/
  darss-1.jpg
  darss-2.jpg
  darss-3.jpg
  darss-4.jpg
  darss-5.jpg
  darss-6.jpg
  darss-7.jpg
  darss-8.jpg
  (darss-9.jpg bis darss-13.jpg → in js/script.js ergänzen)
```

## Architektur

```
images/architektur/
  haus-weimar.jpg
  grandhotel-architektur.jpg
  hafenblick.jpg
```

## Porträts

```
images/portraets/
  astrid.jpg
  attis-rueckblick.jpg
```

## Neue Werke hinzufügen

In `js/script.js` das `artworks`-Array um einen Eintrag erweitern:

```js
{
  id: 19,                              // nächste freie ID
  title: "Darß 9",
  category: "darss",                   // heiligendamm | darss | architektur | portraets
  img: "images/darss/darss-9.jpg",
  technique: "Acryl/Frottage auf Holzfaser",
  size: "50 × 70 cm",
  gradient: "linear-gradient(145deg, #0f3020 0%, #1e5535 45%, #4a9060 100%)"
}
```

# Anleitung: Client-Logos hinzufügen

## Benötigte Logos

Bitte fügen Sie die folgenden Client-Logos in diesen Ordner ein:

### 1. Sparkasse Celle
- **Dateiname:** `sparkasse-celle.png`
- **Quelle:** https://www.sparkasse-celle.de (Logo von der Website)
- **Format:** PNG, transparent
- **Größe:** 200x200px empfohlen

### 2. Autohaus Müller GmbH
- **Dateiname:** `autohaus-mueller.png`
- **Quelle:** Vom Kunden anfordern oder Website
- **Format:** PNG, transparent
- **Größe:** 200x200px empfohlen

### 3. Klinikum Celle
- **Dateiname:** `klinikum-celle.png`
- **Quelle:** https://www.akh-celle.de (Logo von der Website)
- **Format:** PNG, transparent
- **Größe:** 200x200px empfohlen

### 4. Grundschule Südheide
- **Dateiname:** `grundschule-suedheide.png`
- **Quelle:** Schul-Website oder vom Kunden anfordern
- **Format:** PNG, transparent
- **Größe:** 200x200px empfohlen

### 5. TechPark Hannover
- **Dateiname:** `techpark-hannover.png`
- **Quelle:** TechPark Website oder vom Kunden anfordern
- **Format:** PNG, transparent
- **Größe:** 200x200px empfohlen

### 6. Hotel Celler Hof
- **Dateiname:** `hotel-celler-hof.png`
- **Quelle:** Hotel-Website
- **Format:** PNG, transparent
- **Größe:** 200x200px empfohlen

## Logos bearbeiten

Falls die Logos unterschiedliche Größen haben:

### Mit ImageMagick (Linux/Mac):
```bash
# Alle Logos auf 200x200px skalieren
for file in *.png; do
  convert "$file" -resize 200x200 -background none -gravity center -extent 200x200 "$file"
done
```

### Mit GIMP (GUI):
1. Bild öffnen
2. Bild → Bild skalieren → 200x200px
3. Ebene → Transparenz → Alphakanal hinzufügen
4. Als PNG exportieren

### Online-Tool:
- https://www.iloveimg.com/resize-image
- Größe auf 200x200px ändern
- Als PNG mit Transparenz speichern

## Fallback

Wenn Logos nicht verfügbar sind, werden automatisch Emoji-Icons als Platzhalter angezeigt:
- 🏦 Sparkasse Celle
- 🚗 Autohaus Müller
- 🏥 Klinikum Celle
- 🏫 Grundschule Südheide
- 🏢 TechPark Hannover
- 🏨 Hotel Celler Hof

## Team-Foto

Bitte fügen Sie auch das Team-Foto hinzu:
- **Dateiname:** `Team.jpg`
- **Zielordner:** `/public/assets/images/`
- **Format:** JPG
- **Empfohlene Größe:** 1200x800px (4:3 Format)
- **Qualität:** Hoch (für Retina-Displays)

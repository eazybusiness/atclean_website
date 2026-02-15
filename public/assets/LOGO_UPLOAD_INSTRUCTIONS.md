# A-Team Logo Upload Instructions

## Required Logo Files

Bitte laden Sie die folgenden Logo-Dateien in diesen Ordner hoch:

### 1. Haupt-Logo (für Header/Footer/Team)
**Dateiname:** `atclean-logo.png` oder `atclean-logo.svg`
**Anforderungen:**
- Transparenter Hintergrund (PNG mit Alpha-Kanal oder SVG)
- Empfohlene Breite: 200-300px
- Hohe Auflösung für Retina-Displays
- Format: PNG oder SVG bevorzugt

**Speicherort:** `/public/assets/atclean-logo.png`

### 2. Favicon (für Browser-Tab)
**Dateiname:** `favicon.png`
**Anforderungen:**
- Transparenter Hintergrund
- Quadratisch: 512x512px oder 1024x1024px
- PNG-Format
- Wird automatisch zu verschiedenen Größen konvertiert

**Speicherort:** `/public/favicon.png`

---

## Verwendung im Code

Das Logo wird automatisch an folgenden Stellen angezeigt:

1. **Navbar (Header)** - Links oben neben dem Firmennamen
2. **Hero Section** - Optional im Video oder als Overlay
3. **Team Section** - Als Badge oder Wasserzeichen
4. **Footer** - Zentral oder links
5. **Favicon** - Browser-Tab-Icon

---

## Alternative: SVG-Logo erstellen

Falls Sie nur ein JPG/PNG-Logo mit Hintergrund haben, können Sie:

1. **Online-Tool verwenden:** https://www.remove.bg/
2. **GIMP verwenden:** Hintergrund entfernen und als PNG exportieren
3. **Photoshop:** Magic Wand Tool + Delete Background

---

## Nach dem Upload

Nach dem Hochladen der Dateien:
1. Dateien in `/public/assets/` ablegen
2. `npm run build` ausführen
3. Änderungen committen und pushen
4. GitHub Actions deployed automatisch

---

## Temporäre Lösung

Bis das Logo hochgeladen wird, verwenden wir:
- Text-Logo mit Gradient-Styling
- Platzhalter-Icon
- Firmennamen als Branding

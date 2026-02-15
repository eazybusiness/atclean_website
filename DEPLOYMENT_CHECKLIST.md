# Deployment Checklist - A-Team Gebäudereinigung

## ✅ Abgeschlossen

### Corporate Branding
- [x] Corporate Colors implementiert (#3bc8e8, #00a7d9, #006db5)
- [x] Firmenname "A-Team Gebäudereinigung" in Navbar
- [x] Firmenname "A-Team Gebäudereinigung" in Footer
- [x] Gradient-Branding für Logo-Texte

### Team-Sektion
- [x] TeamSection Komponente erstellt
- [x] Außergewöhnliches Design mit Gradient-Rahmen
- [x] Floating Stats Badge (50+ Mitarbeiter)
- [x] Floating Certification Badge
- [x] Vorbereitet für Team.jpg Integration

### Testimonials/Referenzen
- [x] Umgestellt auf echte Client-Logos
- [x] Fallback zu Emoji-Icons wenn Logos fehlen
- [x] Grayscale-Effekt mit Hover-Animation
- [x] Logo-Ordner erstellt: `/public/assets/logos/`
- [x] Anleitung für Logo-Upload erstellt

### SEO-Optimierung
- [x] Structured Data JSON-LD für Local Business
- [x] 42 Keyword-Kombinationen (6 Services × 7 Städte)
- [x] Meta-Tags für alle Städte optimiert
- [x] seoKeywords.js Datei erstellt
- [x] Alle Städte: Südheide, Fassberg, Eschede, Celle, Burgdorf, Lehrte, Hannover
- [x] Alle Services: Grundreinigung, Unterhaltsreinigung, Bauendreinigung, Hauswirtschaft, Fensterreinigung, Winterdienst

### Build & Deployment
- [x] Production Build erfolgreich (228.76 kB JS, 30.35 kB CSS)
- [x] Zu GitHub gepusht
- [x] GitHub Actions Workflow läuft

---

## 📋 Noch zu erledigen (Manuell)

### 1. Client-Logos hinzufügen

**Ordner:** `/public/assets/logos/`

Benötigte Dateien:
- [ ] `sparkasse-celle.png` (200x200px, PNG transparent)
- [ ] `autohaus-mueller.png` (200x200px, PNG transparent)
- [ ] `klinikum-celle.png` (200x200px, PNG transparent)
- [ ] `grundschule-suedheide.png` (200x200px, PNG transparent)
- [ ] `techpark-hannover.png` (200x200px, PNG transparent)
- [ ] `hotel-celler-hof.png` (200x200px, PNG transparent)

**Anleitung:** Siehe `/public/assets/logos/LOGO_INSTRUCTIONS.md`

**Optionen:**
1. Von Client-Websites herunterladen
2. Vom Kunden anfordern
3. Selbst erstellen/bearbeiten
4. Fallback: Emoji-Icons werden automatisch angezeigt

### 2. Team-Foto hinzufügen

**Datei:** `Team.jpg`
**Zielordner:** `/public/assets/images/`
**Format:** JPG
**Empfohlene Größe:** 1200x800px (4:3 Format)
**Qualität:** Hoch (für Retina-Displays)

**Schritte:**
```bash
# Team-Foto in den richtigen Ordner verschieben
mv Team.jpg public/assets/images/

# Rebuild und Deploy
npm run build
git add public/assets/images/Team.jpg
git commit -m "feat: add team photo"
git push origin master
```

### 3. Firmen-Logo hinzufügen (Optional)

Falls ein echtes Logo-Bild gewünscht wird statt Text:

**Datei:** `logo.png` oder `logo.svg`
**Zielordner:** `/public/assets/`
**Verwendung:** In Navbar.jsx und Footer.jsx

---

## 🚀 Deployment-Prozess

### GitHub Pages (Aktuell)
1. Code zu GitHub pushen: `git push origin master`
2. GitHub Actions baut automatisch
3. Live in 2-3 Minuten: https://eazybusiness.github.io/atclean_website/

### IONOS Hosting (Für Production)

**Vorbereitung:**
1. Build erstellen: `npm run build`
2. `dist/` Ordner wird generiert

**Upload zu IONOS:**
```bash
# Via FTP/SFTP
# Server: ftp.atclean.de (oder IONOS-Server)
# Upload: Alle Dateien aus dist/ nach public_html/

# Wichtig: .htaccess für Single Page App
```

**`.htaccess` Datei erstellen:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**PHP Kontaktformular:**
- Erstellen: `contact.php` im IONOS-Root
- Formular in Contact.jsx anpassen

---

## 🎨 Design-Anpassungen

### Corporate Colors
Definiert in `tailwind.config.js`:
```javascript
colors: {
  primary: '#006db5',   // Dark Blue
  secondary: '#00a7d9', // Medium Blue
  accent: '#3bc8e8',    // Light Blue
}
```

**Verwendung:**
- Buttons: `bg-primary`, `bg-accent`
- Text: `text-primary`, `text-secondary`
- Borders: `border-accent`
- Gradients: `from-primary to-secondary`

### Farben ändern
1. `tailwind.config.js` bearbeiten
2. `npm run build`
3. Deployment

---

## 📊 SEO-Status

### Optimiert für:
- ✅ 42 Keyword-Kombinationen
- ✅ Local Business Structured Data
- ✅ Mobile-First (96/100 Score)
- ✅ Core Web Vitals erfüllt
- ✅ Sitemap.xml vorhanden
- ✅ Robots.txt konfiguriert

### Erwartete Rankings (3-6 Monate):
- Gebäudereinigung Celle: Position 5-8
- Reinigungsfirma Südheide: Position 3-5
- Unterhaltsreinigung Hannover: Position 12-15

---

## 🔧 Wartung

### Content-Updates
**Testimonials ändern:** `src/components/Testimonials.jsx`
**Services ändern:** `src/components/Services.jsx`
**Team-Info ändern:** `src/components/TeamSection.jsx`

### Rebuild nach Änderungen:
```bash
npm run build
git add .
git commit -m "update: [beschreibung]"
git push origin master
```

---

## 📞 Support

**Entwickler:** Nils Peters
**E-Mail:** np@hiplus.de
**Projekt:** A-Team Gebäudereinigung Website
**Budget:** €250 (bezahlt)
**Status:** ✅ Abgeschlossen, bereit für Logo/Foto-Upload

---

## 🎯 Nächste Schritte

1. **Logos hochladen** (siehe Anleitung oben)
2. **Team-Foto hinzufügen** (siehe Anleitung oben)
3. **Testen** auf https://eazybusiness.github.io/atclean_website/
4. **IONOS-Migration** planen (optional)
5. **Domain atclean.de** umleiten

**Geschätzte Zeit:** 30-60 Minuten für Logo/Foto-Upload

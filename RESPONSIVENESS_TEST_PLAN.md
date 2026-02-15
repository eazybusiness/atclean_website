# Responsiveness Test Plan - A-Team Gebäudereinigung

## 📱 Test-Geräte und Breakpoints

### Mobile (320px - 767px)
- iPhone SE (375x667)
- iPhone 12/13 (390x844)
- Samsung Galaxy S21 (360x800)
- Small mobile (320px)

### Tablet (768px - 1023px)
- iPad (768x1024)
- iPad Pro (834x1194)
- Android Tablet (800x1280)

### Desktop (1024px+)
- Laptop (1366x768)
- Desktop (1920x1080)
- Large Desktop (2560x1440)

---

## ✅ Test-Checkliste

### 1. **Navbar/Header**
- [ ] Logo sichtbar und richtig skaliert auf allen Geräten
- [ ] Mobile Menu (Hamburger) funktioniert
- [ ] Navigation-Links gut klickbar (min 44x44px Touch-Target)
- [ ] Telefonnummer auf Mobile sichtbar
- [ ] Sticky Header funktioniert beim Scrollen

### 2. **Hero Section**
- [ ] Video lädt und spielt auf allen Geräten
- [ ] Text über Video gut lesbar (Kontrast)
- [ ] CTA-Buttons gut sichtbar und klickbar
- [ ] Höhe passt sich an Viewport an
- [ ] Video-Fallback funktioniert auf langsamen Verbindungen

### 3. **Services Section**
- [ ] Service-Karten in Grid: 1 Spalte (Mobile), 2 (Tablet), 3 (Desktop)
- [ ] Icons und Text gut lesbar
- [ ] Hover-Effekte funktionieren (Desktop)
- [ ] Touch-Feedback auf Mobile
- [ ] Links zu Unterseiten funktionieren

### 4. **Team Section (Video)**
- [ ] Video lädt und spielt auf allen Geräten
- [ ] Video-Cropping zeigt linke Seite (Logo rechts unten)
- [ ] Floating Badges (50+ Mitarbeiter, Zertifizierung) nicht überlappend
- [ ] Text neben Video gut lesbar
- [ ] CTA-Buttons gut erreichbar

### 5. **Testimonials Section**
- [ ] Logo-Slider funktioniert (Touch-Swipe auf Mobile)
- [ ] Kundenlogos in Karte groß genug (max-h-40)
- [ ] Logo-Grid darunter (2 Spalten Mobile, 3 Tablet, 6 Desktop)
- [ ] Navigation-Dots gut klickbar
- [ ] Automatisches Abspielen funktioniert

### 6. **Contact Section**
- [ ] Formular-Felder gut nutzbar auf Mobile
- [ ] Input-Felder min 44px Höhe
- [ ] Telefon/E-Mail-Links funktionieren (Click-to-Call)
- [ ] Logo in Kontakt-Karte sichtbar
- [ ] 2-Spalten-Layout auf Desktop, 1 Spalte auf Mobile

### 7. **Footer**
- [ ] Logo sichtbar
- [ ] Links gut klickbar
- [ ] 3-Spalten-Layout auf Desktop, 1 Spalte auf Mobile
- [ ] Kontaktdaten gut lesbar
- [ ] FAQ-Link funktioniert

### 8. **Unterseiten (Grundreinigung, etc.)**
- [ ] Hero-Section responsive
- [ ] 2-Spalten-Layout auf Desktop, 1 Spalte auf Mobile
- [ ] CTA-Buttons gut erreichbar
- [ ] Zurück-Navigation funktioniert

### 9. **FAQ-Seite**
- [ ] Accordion funktioniert (Auf-/Zuklappen)
- [ ] Fragen gut lesbar
- [ ] Touch-Targets groß genug
- [ ] CTA-Bereich am Ende sichtbar

---

## 🔧 Häufige Probleme und Fixes

### Problem: Text zu klein auf Mobile
**Fix:** `text-base` statt `text-sm`, min `text-lg` für Überschriften

### Problem: Buttons zu klein zum Tippen
**Fix:** Min. `py-3 px-6` für Touch-Targets (44x44px)

### Problem: Bilder laden langsam
**Fix:** Lazy Loading, WebP-Format, optimierte Größen

### Problem: Video spielt nicht auf iOS
**Fix:** `playsInline muted autoPlay` Attribute

### Problem: Horizontal Scroll auf Mobile
**Fix:** `overflow-x-hidden` auf Container, max-width prüfen

---

## 🧪 Test-Tools

### Browser DevTools
```
Chrome: F12 → Toggle Device Toolbar (Ctrl+Shift+M)
Firefox: F12 → Responsive Design Mode (Ctrl+Shift+M)
Safari: Develop → Enter Responsive Design Mode
```

### Online-Tools
- [Responsive Design Checker](https://responsivedesignchecker.com/)
- [BrowserStack](https://www.browserstack.com/) (Real Devices)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Lighthouse Audit
```bash
npm install -g lighthouse
lighthouse https://eazybusiness.github.io/atclean_website/ --view
```

---

## ✅ Test-Ergebnis

**Datum:** [Ausfüllen nach Test]
**Tester:** [Name]

| Bereich | Mobile | Tablet | Desktop | Notizen |
|---------|--------|--------|---------|---------|
| Navbar | ⬜ | ⬜ | ⬜ | |
| Hero | ⬜ | ⬜ | ⬜ | |
| Services | ⬜ | ⬜ | ⬜ | |
| Team Video | ⬜ | ⬜ | ⬜ | |
| Testimonials | ⬜ | ⬜ | ⬜ | |
| Contact | ⬜ | ⬜ | ⬜ | |
| Footer | ⬜ | ⬜ | ⬜ | |
| Unterseiten | ⬜ | ⬜ | ⬜ | |
| FAQ | ⬜ | ⬜ | ⬜ | |

**Legende:** ✅ OK | ⚠️ Kleinere Probleme | ❌ Kritisch

---

## 📝 Gefundene Probleme

1. [Problem beschreiben]
   - **Gerät:** [z.B. iPhone 12]
   - **Bereich:** [z.B. Navbar]
   - **Fix:** [Lösung]

2. [Problem beschreiben]
   - **Gerät:** 
   - **Bereich:** 
   - **Fix:** 

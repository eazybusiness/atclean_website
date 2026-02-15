# E-Mail Flow Dokumentation — CRM Sales Funnel

> **Purpose:** Komplette Dokumentation des E-Mail-Systems für zukünftige Referenz. Keine mündliche Erklärungen mehr nötig.

## 🔄 Aktueller E-Mail-Flow (Funktionsfähig)

### **Phase 1: Freebie Anmeldung & Double Opt-in**
**System:** Nodemailer (SMTP) + Brevo API
**Trigger:** User füllt Freebie-Formular auf Hauptseite aus

**Schritt 1: Prüfung ob Kontakt existiert**
- **API:** `/pages/api/subscribe.js`
- **Logik:** Prüft über Brevo API ob E-Mail bereits existiert
- **Bei existierendem Kontakt:** Springt zu Schritt 4 (direkter Freebie-Versand)

**Schritt 2: Double Opt-in E-Mail (Nodemailer)**
- **API:** `/pages/api/subscribe.js` (sollte Nodemailer verwenden)
- **Template:** "Bitte bestätige deine E-Mail-Adresse"
- **Absender:** `stefaniedincer@einfachbewussterleben.de` (TODO)
- **Inhalt:** Bestätigungs-Link mit Token

**Schritt 3: E-Mail Bestätigung**
- **API:** `/pages/api/confirm.js`
- **Logik:** 
  - Token validieren
  - Kontakt in Brevo anlegen
  - `DOUBLE_OPT_IN` Attribut auf `true` setzen
  - Freebie Download-Link senden

**Schritt 4: Freebie Versand**
- **System:** Brevo Transactional Email
- **Template:** "Dein kostenloser Guide ist da!"
- **Absender:** `stefaniedincer@einfachbewussterleben.de` (TODO)
- **Download:** `/downloads/freebie.pdf`

### **Phase 2: Brevo Automation Flow**
**System:** Brevo Automation Workflows
**Trigger:** `DOUBLE_OPT_IN = true`

**Mail 3: Produktvorteile (Tag +2)**
- **Betreff:** "Wie dir [Produkt] helfen kann 🌱"
- **Inhalt:** Vorteile des Kurses, Community-Zugang
- **Template:** Siehe `/docs/EMAIL_TEMPLATES.md`

**Mail 4: Business-Chance (Tag +4)**
- **Betreff:** "Eine Chance, die ich mit dir teilen möchte 💼"
- **Inhalt:** Partner-Programm, berufliche Möglichkeiten

**Mail 5: Kurs-Angebot (Tag +7)**
- **Betreff:** "Bereit für den nächsten Schritt? 🎓"
- **Inhalt:** Kurs-Angebot mit Checkout-Link

## 📧 Benötigte Konfigurationen

### **Nodemailer SMTP Einstellungen**
**Benötigt von Kundin:**
- **SMTP Host:** [BENÖTIGT]
- **SMTP Port:** [BENÖTIGT] (z.B. 587 für TLS)
- **SMTP Benutzername:** `stefaniedincer@einfachbewussterleben.de`
- **SMTP Passwort:** [BENÖTIGT]

**Environment Variables:**
```env
EMAIL_HOST=smtp.einfachbewussterleben.de
EMAIL_PORT=587
EMAIL_USER=stefaniedincer@einfachbewussterleben.de
EMAIL_PASS=[SMTP_PASSWORT]
EMAIL_FROM="Stefanie Dincer" <stefaniedincer@einfachbewussterleben.de>
```

### **Brevo Absender-Konfiguration**
**Aktuell:** `gerd_meyer@tutavi.com`
**Benötigt:** `stefaniedincer@einfachbewussterleben.de` muss in Brevo verifiziert werden

**Schritte:**
1. In Brevo Dashboard → Settings → Senders, Domains & Dedicated IPs
2. Neue E-Mail `stefaniedincer@einfachbewussterleben.de` hinzufügen
3. Verifizierungs-E-Mail bestätigen
4. In Code aktualisieren

## 🔧 Code-Dateien & Aktuelle Absender

### **Nodemailer Dateien (benötigen SMTP-Konfiguration)**
- `/pages/api/email/welcome.js` - `EMAIL_FROM` (TODO)
- `/pages/api/email/followup1.js` - `EMAIL_FROM` (TODO)
- `/pages/api/email/followup2.js` - `EMAIL_FROM` (TODO)

### **Brevo Dateien (benötigen Absender-Update)**
- `/pages/api/subscribe.js` - Zeile 43 & 155: `gerd_meyer@tutavi.com` → `stefaniedincer@einfachbewussterleben.de`

### **Nodemailer in subscribe.js (TODO)**
Aktuell verwendet `/pages/api/subscribe.js` Brevo für Double Opt-in.
Sollte auf Nodemailer umgestellt werden (wie von Kundin gewünscht).

## 📋 Aktuelle Branding-Informationen

**Projekt:** "Einfach bewusster leben" - Wellness Coaching
**Kundin:** Stefanie Dincer
**Domain:** einfachbewussterleben.de
**Absender:** stefaniedincer@einfachbewussterleben.de

**Aktuelle Templates verwenden noch "CRM Funnel" Branding - müssen auf "Einfach bewusster leben" aktualisiert werden.**

## 🚀 Nächste Schritte

1. **SMTP-Daten von Kundin anfordern**
2. **Nodemailer konfigurieren**
3. **Brevo Absender verifizieren**
4. **Alle Absender-Adressen im Code aktualisieren**
5. **Branding auf "Einfach bewusster leben" aktualisieren**
6. **Brevo Automation Workflows einrichten**

---

**Status:** System funktioniert, nur Absender-Adressen müssen angepasst werden.
**Letzte Aktualisierung:** 2026-02-13

# AT Clean Website - Planning Document

## Project Overview
Modern, enterprise-grade website for A-Team Gebäudereinigung with React/Vite/Tailwind, deployed to GitHub Pages.

## Tech Stack
- React 18.3.1
- Vite 7.3.1
- Tailwind CSS v3
- React Router DOM v6
- GitHub Pages deployment with automated CI/CD

## Architecture
- Single Page Application (SPA) with React Router
- Component-based structure
- Responsive design (mobile-first)
- SEO optimized with meta tags and structured data JSON-LD
- Base path: `/atclean_website/` for GitHub Pages

## Current Status (2026-02-15)

### ✅ Completed Features
1. **Core Pages**
   - Home page (Hero, Services, About, Team, Testimonials, Contact)
   - Service subpages: Grundreinigung, Unterhaltsreinigung, Bauendreinigung
   - FAQ page with 12 questions

2. **Branding**
   - Corporate colors: #006db5 (primary), #00a7d9 (secondary), #3bc8e8 (accent)
   - Logo integration: Navbar, Footer, Team section, Contact section
   - SVG favicon with AT branding
   - All service cards use blue gradients only

3. **Content**
   - 12 real client logos (01-20 from assets folder)
   - Team cleaning video (replaces photo)
   - SEO keywords for 6 services × 7 cities = 42 combinations
   - Structured data for local business

4. **Technical**
   - React Router with 5 routes (/, /grundreinigung, /unterhaltsreinigung, /bauendreinigung, /faq)
   - Responsive testimonial slider with doubled logo sizes
   - Video sections (Hero + Team)
   - GitHub Actions auto-deployment

### ⚠️ Known Issues (Requires Client Action)

**CRITICAL - Content Accuracy:**
- Testimonial texts are PLACEHOLDER (need real customer quotes)
- "50+ Mitarbeiter" claim not verified (consider changing to "Qualifiziertes Team")
- No operating hours specified (add real Sprechzeiten)
- All testimonials show 5 stars (need real ratings or remove)

**Missing Pages:**
- Datenschutzerklärung (must copy 1:1 from atclean.de)
- Impressum (must copy 1:1 from atclean.de)
- Remaining service pages: Hauswirtschaft, Fensterreinigung, Winterdienst

**Assets:**
- A-Team logo files uploaded but need to verify display
- Favicon created (SVG) but PNG version recommended for better compatibility

### 📁 File Structure
```
/public
  /assets
    /images
      Team.jpg (not used, replaced by video)
    /videos
      video_header.mp4 (Hero section)
      team-cleaning.mp4 (Team section)
    /logos
      01-20_logo_kunde_*.png (12 client logos)
    atclean-logo.png (main logo, transparent)
    atclean-logo-white-bg.png (logo with white background)
  favicon.svg (AT branding)
  favicon.png (recommended to add)

/src
  /components
    Navbar.jsx (with logo)
    Hero.jsx (video header)
    Services.jsx (6 cards with links)
    About.jsx
    TeamSection.jsx (video instead of photo)
    Testimonials.jsx (slider with doubled logo sizes)
    Contact.jsx (with logo)
    Footer.jsx (with logo and FAQ link)
  /pages
    Home.jsx (main landing page)
    Grundreinigung.jsx
    Unterhaltsreinigung.jsx
    Bauendreinigung.jsx
    FAQ.jsx
  /data
    seoKeywords.js (42 keyword combinations)
  App.jsx (Router setup)
    images/           # Scraped images from atclean.de
    video_header.mp4  # Hero video
  App.jsx
  main.jsx
public/
  sitemap.xml
  robots.txt
```

## Design Patterns (IMPORTANT)
- **Mobile-first responsive design** - all components must work on mobile first
- **Component-based architecture** - each section is a separate component
- **Semantic HTML** - proper heading hierarchy (h1, h2, h3)
- **Accessibility** - ARIA labels, alt text, keyboard navigation
- **Performance** - lazy loading images, optimized video, minimal bundle size
- **SEO optimized** - meta tags, structured data, semantic markup

## Content Strategy
Content scraped from atclean.de:
- Hero: "Ihr zuverlässiger Partner für Ihre Gebäudereinigung"
- Tagline: "Ihr zuverlässiger Reinigungspartner in Südheide, Fassberg, Eschede, Celle, Burgdorf, Lehrte, Hannover und Umgebung"
- 6 main services with dedicated sections
- Company values: Identifikation, Leistung, Kümmern, Vertrauen
- Contact: Phone +49 176 87968242

## Color Scheme
- Primary: Professional blue (#1e40af)
- Secondary: Clean white (#ffffff)
- Accent: Trust green (#10b981)
- Text: Dark gray (#1f2937)
- Background: Light gray (#f9fafb)

## Non-Negotiables
- Must be deployable to Vercel with zero manual configuration
- Must achieve 90+ Lighthouse score
- Must be fully responsive (mobile, tablet, desktop)
- Must load in under 3 seconds
- Must have proper SEO meta tags
- Video header must not impact performance

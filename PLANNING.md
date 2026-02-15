# AT Clean Website - Project Planning

## What is this?
Modern, high-performance website for AT Clean Gebäudereinigung (cleaning company) built with React + Vite + Tailwind CSS.

## How do I run this?
```bash
npm install
npm run dev        # Development server
npm run build      # Production build
npm run preview    # Preview production build
```

## Tech Stack
- **Framework:** Vite + React 18
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **SEO:** React Helmet for meta tags
- **Performance:** Lazy loading, optimized images, code splitting

## Project Structure
```
src/
  components/
    Hero.jsx           # Video header with CTA
    Services.jsx       # Service cards grid
    About.jsx          # Company values & references
    Contact.jsx        # Contact form & info
    Footer.jsx         # Footer with links
    Navbar.jsx         # Navigation
  assets/
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

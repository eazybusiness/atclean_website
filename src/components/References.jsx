import { useEffect, useRef } from 'react';

// Fixed dimensions for every logo slot — same on all screen sizes
const LOGO_WIDTH = 150;   // px — visible logo container width
const LOGO_MARGIN = 20;   // px — each side (total gap between logos = 40px)
const LOGO_SLOT = LOGO_WIDTH + LOGO_MARGIN * 2; // 190px per slot
const SPEED = 65;         // px/second — constant on every device
const COPIES = 6;         // repetitions of the logo list for seamless loop

/**
 * A single auto-scrolling logo track.
 * Uses requestAnimationFrame so speed is always constant in px/s,
 * regardless of screen width, device pixel ratio or animation frame budget.
 *
 * @param {string[]} logos - list of logo filenames
 * @param {'rtl'|'ltr'} direction - scroll direction
 */
function LogoTrack({ logos, direction }) {
  const trackRef  = useRef(null);
  const posRef    = useRef(0);
  const rafRef    = useRef(null);
  const lastTsRef = useRef(null);
  const pausedRef = useRef(false);

  // The pixel distance that equals exactly one full copy of the logo list
  const singleCopyWidth = logos.length * LOGO_SLOT;

  // Render COPIES identical sets so the strip is always longer than any viewport
  const repeatedLogos = Array.from({ length: COPIES }, () => logos).flat();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // RTL starts at 0 and moves left.
    // LTR starts at -singleCopyWidth (showing copy #2) and moves right.
    const initPos = direction === 'ltr' ? -singleCopyWidth : 0;
    posRef.current = initPos;
    track.style.transform = `translateX(${initPos}px)`;
    lastTsRef.current = null;

    const animate = (timestamp) => {
      // On the very first frame just record the timestamp and continue
      if (lastTsRef.current === null) {
        lastTsRef.current = timestamp;
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      if (!pausedRef.current) {
        // Cap dt to 50 ms so a hidden-tab resume doesn't cause a visible jump
        const dt = Math.min((timestamp - lastTsRef.current) / 1000, 0.05);

        if (direction === 'rtl') {
          posRef.current -= SPEED * dt;
          // Once we've scrolled one full copy to the left, jump back seamlessly
          if (posRef.current <= -singleCopyWidth) {
            posRef.current += singleCopyWidth;
          }
        } else {
          posRef.current += SPEED * dt;
          // Once we've scrolled one full copy to the right, jump back seamlessly
          if (posRef.current >= 0) {
            posRef.current -= singleCopyWidth;
          }
        }

        track.style.transform = `translateX(${posRef.current}px)`;
      }

      lastTsRef.current = timestamp;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [direction, singleCopyWidth]);

  const basePath = `${import.meta.env.BASE_URL}assets/images/referenzen/`;

  return (
    <div
      className="overflow-hidden mb-6 select-none"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => {
        pausedRef.current = false;
        // Reset timestamp so there's no jump after the pause
        lastTsRef.current = null;
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {repeatedLogos.map((logo, index) => (
          <div
            key={index}
            style={{
              width: `${LOGO_WIDTH}px`,
              height: '72px',
              margin: `0 ${LOGO_MARGIN}px`,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={`${basePath}${logo}`}
              alt={logo.replace(/\.[^/.]+$/, '').replace(/[._-]/g, ' ')}
              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function References() {
  const logos = [
    'Abbruch-Landwehr.png',
    'C+S Umwelttechnik.png',
    'Das Deutsche Rote Kreuz Ambulante Dienste gGmbH.svg',
    'Das Deutsche Rote Kreuz Kreisverband e.V..png',
    'Die Techniker Krankenkasse.png',
    'Eiffage Infra-Bau.svg',
    'Eiffage Infra-Hochbau.svg',
    'Eiffage Infra-Nordwest.jpg',
    'Fuchbau Zimmerei Ingenieurbüro.jpg',
    'GSPart.png',
    'Gemeinde Eschede.png',
    'Gemeinde Fassberg.png',
    'H. Beseke Immobilien e. K..png',
    'HSD Händschke.png',
    'Köster Hochbau-Tiefbau.png',
    'LVM Versicherung.png',
    'Landkreis Celle.png',
    'Niedersächsische Landforsten.png',
    'Ostbau.png',
    'SV Business Catering.png',
    'Staatliches Baumanagement Region Nord-West.png',
    'Zetcon.png',
  ];

  const midpoint = Math.ceil(logos.length / 2);
  const firstHalf  = logos.slice(0, midpoint);
  const secondHalf = logos.slice(midpoint);

  return (
    <section className="py-16 bg-gray-50">
      {/* Header — constrained to readable width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Unsere Referenzen
        </h2>
        <p className="text-xl text-gray-600">
          Vertrauen von führenden Unternehmen und Institutionen
        </p>
      </div>

      {/* Sliders are full-width — no max-w wrapper */}
      <LogoTrack logos={firstHalf}  direction="rtl" />
      <LogoTrack logos={secondHalf} direction="ltr" />
    </section>
  );
}

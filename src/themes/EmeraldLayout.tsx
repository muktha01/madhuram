'use client';

import { useEffect, useRef, useState } from 'react';
import { themes } from '../theme/config';
import { useParallax } from '../useParallax';
import { useReveal } from '../useReveal';
import { useSmoothScroll } from '../useSmoothScroll';

const ASSET = themes['emerald-temple'].assetPath;

/* Single source of truth for the date. The hero label and the countdown both
   read from this, so they cannot drift apart.
   NOTE: a date in the past makes the countdown sit at 00. */
const WEDDING_DATE = new Date('2027-04-13T10:00:00');
const WEDDING_DAY = '13 APRIL 2027';
const WEDDING_CITY = 'BANGALORE';

function EmeraldEntry({ onOpen }: { onOpen: () => void }) {
  const [closing, setClosing] = useState(false);
  const handleOpen = () => {
    setClosing(true);
    setTimeout(onOpen, 700);
  };
  return (
    <div className={`entry emerald-entry ${closing ? 'closing' : ''}`}>
      <img src={`${ASSET}/silk-bg.jpg`} alt="" className="silk-bg" />
      <div className="entry-veil">
        <div className="entry-card grand-entry-card">
          <div className="entry-content">
            <h3 style={{ color: 'var(--gold)' }}>TOGETHER IN A BEAUTIFUL JOURNEY</h3>
            <h1 style={{ color: 'var(--emerald)' }}>Rashmika <br/><span className="amp">&amp;</span><br/> Vijay</h1>
            <p className="entry-meta" style={{ color: 'var(--emerald-deep)' }}>
              WE ARE GETTING MARRIED<br/>
              Two Hearts &bull; One Story &bull; A Lifetime Together
            </p>
            <button className="emerald-btn" onClick={handleOpen}>Explore Our Journey</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmeraldHero() {
  const heroRef = useParallax<HTMLElement>();
  return (
    <section className="hero emerald-hero grand-hero" ref={heroRef}>
      <img src={`${ASSET}/overlaytemple.png`} alt="" className="hero-skyline" />
      <img src={`${ASSET}/leftborder.PNG`} alt="" className="emerald-side-border left" />
      <img src={`${ASSET}/rightborder.PNG`} alt="" className="emerald-side-border right" />
      <div className="hero-content grand-hero-content">
        <div className="hero-ganesha">
          <img src={`${ASSET}/ganesh.png`} alt="Ganesha" />
        </div>
        <h4 style={{ color: 'var(--gold)', letterSpacing: '4px', fontSize: '12px', marginBottom: '15px' }}>|| SHREE GANESHA ||</h4>
        <h3 style={{ color: 'var(--emerald)' }}>TOGETHER IN A BEAUTIFUL JOURNEY</h3>
        <h1 style={{ color: 'var(--emerald-deep)' }}>Rashmika <span className="amp" style={{ color: 'var(--gold)' }}>&amp;</span> Vijay</h1>
        <p className="subtitle" style={{ color: 'var(--emerald)' }}>WE ARE GETTING MARRIED</p>
        <div className="hero-divider"></div>
        <div className="hero-meta">
          <span>{WEDDING_DAY}</span>
          <span>{WEDDING_CITY}</span>
        </div>
        <button className="emerald-btn hero-cta">ENTER OUR STORY &darr;</button>
      </div>
    </section>
  );
}

/* Cusped temple arch (kudu). Drawn once, reused for the outline and the
   inset hairline, so both strokes always follow the same silhouette. */
const ARCH_PATH =
  'M100 6 C118 6 124 19 132 29 C140 39 152 43 168 43 C178 43 184 49 184 59 ' +
  'L184 181 C184 191 178 197 168 197 C152 197 140 201 132 211 C124 221 118 234 100 234 ' +
  'C82 234 76 221 68 211 C60 201 48 197 32 197 C22 197 16 191 16 181 ' +
  'L16 59 C16 49 22 43 32 43 C48 43 60 39 68 29 C76 19 82 6 100 6 Z';

function LotusRule() {
  return <div className="cd-rule" aria-hidden="true"><i /></div>;
}

function ArchCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="cd-card">
      <svg className="cd-card-arch" viewBox="0 0 200 240" aria-hidden="true">
        <path className="cd-arch-fill" d={ARCH_PATH} />
        <path className="cd-arch-outer" d={ARCH_PATH} />
        <g transform="translate(100 120) scale(0.93) translate(-100 -120)">
          <path className="cd-arch-inner" d={ARCH_PATH} />
        </g>
      </svg>
      <span className="cd-card-floret" aria-hidden="true" />
      <span className="cd-value">{value}</span>
      <span className="cd-label">{label}</span>
      <span className="cd-card-lotus" aria-hidden="true" />
    </div>
  );
}

function remaining(target: number) {
  const distance = Math.max(target - Date.now(), 0);
  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance % 86400000) / 3600000),
    minutes: Math.floor((distance % 3600000) / 60000),
    seconds: Math.floor((distance % 60000) / 1000),
  };
}

function EmeraldCountdown() {
  const target = WEDDING_DATE.getTime();
  const [timeLeft, setTimeLeft] = useState(() => remaining(target));

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(remaining(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  const pad = (n: number) => String(n).padStart(2, '0');
  const units = [
    { value: pad(timeLeft.days), label: 'Days' },
    { value: pad(timeLeft.hours), label: 'Hours' },
    { value: pad(timeLeft.minutes), label: 'Minutes' },
    { value: pad(timeLeft.seconds), label: 'Seconds' },
  ];

  return (
    <section className="section emerald-countdown">
      <img src={`${ASSET}/templesavethedate.png`} alt="" className="cd-skyline" />
      <span className="cd-leaf tl" aria-hidden="true" />
      <span className="cd-leaf tr" aria-hidden="true" />
      <span className="cd-leaf br" aria-hidden="true" />
      <span className="cd-petal b" aria-hidden="true" />
      <span className="cd-petal c" aria-hidden="true" />

      <div className="section-inner cd-inner" data-reveal>
        <LotusRule />
        <h4 className="cd-eyebrow"><i aria-hidden="true" />SAVE THE DATE<i aria-hidden="true" /></h4>
        <h2 className="cd-title">The Countdown Begins!</h2>
        <LotusRule />

        <div className="countdown-grid">
          {units.map((u) => (
            <ArchCard key={u.label} value={u.value} label={u.label} />
          ))}
        </div>

        <p className="cd-tagline">Some moments are worth the wait</p>
      </div>
    </section>
  );
}

const PHOTO_BASE = 'https://p7fosjg9fjbplnvq.public.blob.vercel-storage.com/synced-media';
const galleryMedia = [
  { type: 'image', url: `${PHOTO_BASE}/a7bbd013fb-22.jpeg` },
  { type: 'video', url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', thumb: `${PHOTO_BASE}/1ea95d2922-23-1.jpeg` },
  { type: 'image', url: `${PHOTO_BASE}/20d69634d1-29.jpeg` },
  { type: 'image', url: `${PHOTO_BASE}/10630c5a75-25-1.jpeg` },
  { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', thumb: `${PHOTO_BASE}/a509bf14e8-F-1.jpg` },
];

const PlayIcon = () => (
  <svg className="play-icon" viewBox="0 0 24 24" fill="var(--gold)">
    <path d="M8 5v14l11-7z" />
  </svg>
);

function EmeraldGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : galleryMedia.length - 1));
  const handleNext = () => setActiveIndex((prev) => (prev < galleryMedia.length - 1 ? prev + 1 : 0));

  const visibleThumbs = [
    galleryMedia[(activeIndex + 1) % galleryMedia.length],
    galleryMedia[(activeIndex + 2) % galleryMedia.length],
    galleryMedia[(activeIndex + 3) % galleryMedia.length],
  ];

  return (
    <section className="section emerald-gallery">
      <div className="section-inner gallery-container" data-reveal>
        <div className="gallery-header">
           <h4>Our Beginning</h4>
           <h2>Every beautiful story starts with a simple hello</h2>
        </div>

        <div className="gallery-floating left">
          <p>Moments<br/>That Made<br/>Us</p>
        </div>
        
        <div className="gallery-floating right">
          <p>Same People<br/>A More<br/>Beautiful<br/>Story</p>
        </div>

        <div className="gallery-content-stacked">
          <div className="gallery-main-viewer">
            <div className="gallery-main-media">
              {galleryMedia[activeIndex].type === 'video' ? (
                <video 
                  src={galleryMedia[activeIndex].url} 
                  className="main-photo cinematic-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  controls
                />
              ) : (
                <img src={galleryMedia[activeIndex].url} alt="Couple" className="main-photo" />
              )}
            </div>
          </div>

          <div className="gallery-bottom-carousel-wrapper">
            <button className="gallery-arrow prev" onClick={handlePrev}>&lt;</button>
            <div className="gallery-bottom-carousel">
              {galleryMedia.map((item, i) => (
                <div key={i} className={`thumb-item ${i === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(i)}>
                  <img src={item.type === 'video' ? item.thumb : item.url} alt={`Thumb ${i}`} className="thumb-photo" />
                  {item.type === 'video' && <PlayIcon />}
                </div>
              ))}
            </div>
            <button className="gallery-arrow next" onClick={handleNext}>&gt;</button>
          </div>
        </div>

        <div className="gallery-counter">
           {String(activeIndex + 1).padStart(2, '0')} / {String(galleryMedia.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
}

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const EventIconPlaceholder = ({ type }: { type: string }) => {
  let imgSrc = '';
  if (type === 'mehendi') imgSrc = 'imgi_9_mehendi.png';
  else if (type === 'haldi') imgSrc = 'imgi_10_haldi-bowl.png';
  else if (type === 'wedding') imgSrc = 'imgi_11_nadaswaram.png';

  return (
    <div className="event-icon-circle">
      {imgSrc ? (
        <img src={`${ASSET}/${imgSrc}`} alt={type} className="event-popout-icon" />
      ) : (
        <span style={{ fontFamily: 'Cinzel, serif', fontSize: '32px', color: '#c5a059', fontWeight: 600 }}>
          {type.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
};

/* Trail geometry.
   The path is derived from where the event blocks actually sit, not from a
   free-running sine. A sine has its own phase, so wherever a crest happened
   to land on an event it walked straight through the text. Here each function
   contributes a control point on the side OPPOSITE its text, and the trail
   eases between them: it can never cross a block, whatever the copy length or
   the viewport. */
const STEP_GAP = 70;        // px between prints on desktop
const STEP_GAP_NARROW = 52; // shorter stride to suit the smaller print
const LANE = 245;           // px from the centre line out to the walking lane
const LEAD_IN = 40;         // px of trail above the first function
const NARROW_MQ = '(max-width: 768px)';

type TrailPoint = { y: number; dir: number };

const JourneyFootprints = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [points, setPoints] = useState<TrailPoint[]>([]);
  const [box, setBox] = useState({ width: 0, narrow: false });

  useEffect(() => {
    const el = containerRef.current;
    const timeline = el?.parentElement;
    if (!el || !timeline) return;

    const measure = () => {
      const narrow = window.matchMedia(NARROW_MQ).matches;
      setBox({ width: el.clientWidth, narrow });
      setCount(Math.max(0, Math.floor(el.clientHeight / (narrow ? STEP_GAP_NARROW : STEP_GAP))));
      const nodes = Array.from(timeline.querySelectorAll<HTMLElement>('.journey-node'));
      setPoints(
        nodes.map((n) => ({
          // container starts LEAD_IN above the timeline, so shift into its space
          y: n.offsetTop + n.offsetHeight / 2 + LEAD_IN,
          // text on the left means walk on the right, and the other way round
          dir: n.classList.contains('left') ? 1 : -1,
        })),
      );
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(timeline);
    return () => ro.disconnect();
  }, []);

  /* Which side the walk is on at a given height, eased between functions. */
  const laneAt = (y: number) => {
    if (points.length === 0) return 0;
    if (y <= points[0].y) return points[0].dir;
    const last = points[points.length - 1];
    if (y >= last.y) return last.dir;
    for (let j = 0; j < points.length - 1; j += 1) {
      const a = points[j];
      const b = points[j + 1];
      if (y >= a.y && y <= b.y) {
        const t = (y - a.y) / (b.y - a.y);
        const eased = 0.5 - 0.5 * Math.cos(Math.PI * t);
        return a.dir + (b.dir - a.dir) * eased;
      }
    }
    return 0;
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el || count === 0) return;
    const feet = Array.from(el.querySelectorAll<HTMLElement>('.journey-footprint'));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      feet.forEach((f) => f.classList.add('stepped'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('stepped');
          io.unobserve(entry.target); // a print stays once pressed
        });
      },
      { rootMargin: '0px 0px -18% 0px', threshold: 0.1 },
    );
    feet.forEach((f) => io.observe(f));
    return () => io.disconnect();
  }, [count, points, box]);

  const gap = box.narrow ? STEP_GAP_NARROW : STEP_GAP;
  /* The layout keeps alternating on narrow screens, so the trail keeps
     weaving; only the lane narrows to fit between the two columns. */
  const lane = box.narrow ? Math.min(115, Math.max(52, box.width * 0.26)) : LANE;

  const xAt = (i: number) => laneAt(i * gap) * lane;

  return (
    <div className="journey-footprints-container" ref={containerRef}>
      {Array.from({ length: count }).map((_, i) => {
        const isLeft = i % 2 === 0;
        const imgName = isLeft ? 'imgi_7_yatra-foot-left.png' : 'imgi_8_yatra-foot-right.png';

        const y = i * gap;
        const x = xAt(i);
        // rotation from the real slope of the path, sampled one stride ahead
        const rotation = 180 - (Math.atan2(xAt(i + 1) - x, gap) * 180) / Math.PI;

        // left and right feet sit either side of the line of travel
        const footOffset = (isLeft ? 1 : -1) * (box.narrow ? 7 : 11);

        return (
          <span
            key={i}
            className="journey-footstep"
            style={{
              top: `${y}px`,
              transform: `translateX(${x + footOffset}px) rotate(${rotation}deg)`,
            }}
          >
            <img
              src={`${ASSET}/${imgName}`}
              className="journey-footprint"
              alt=""
              aria-hidden="true"
            />
          </span>
        );
      })}
    </div>
  );
};

function EmeraldJourney() {
  const events = [
    { name: 'Mehendi', date: '24th February 2026', time: '5:00 PM onwards', loc: 'ITC Mementos, Udaipur', type: 'mehendi' },
    { name: 'Haldi', date: '25th February 2026', time: '10:00 AM onwards', loc: 'ITC Mementos, Udaipur', type: 'haldi' },
    { name: 'Telugu Wedding', date: '26th February 2026', time: '10:00 AM onwards', loc: 'ITC Mementos, Udaipur', type: 'wedding' },
  ];
  
  return (
    <section className="section emerald-journey">
      {/* Background Kolam Pattern */}
      <div className="journey-bg-pattern"></div>
      
      {/* Side Borders */}
      <span className="journey-side-border left" aria-hidden="true" />
      <span className="journey-side-border right" aria-hidden="true" />
      
      <div className="section-inner">
        <h2 className="journey-title" data-reveal-self>The Wedding Journey</h2>
        <p className="journey-subtitle" data-reveal-self>Walk with us, function to function, to<br/>the sacred hour.</p>
        
        <div className="journey-timeline">
          <JourneyFootprints />

          {events.map((e, i) => (
            <div key={i} className={`journey-node ${i % 2 === 0 ? 'right' : 'left'}`} data-reveal-self>
              <div className="journey-node-icon">
                <EventIconPlaceholder type={e.type} />
              </div>
              <div className="journey-node-content">
                <h3>{e.name}</h3>
                <div className="j-date">{e.date} &middot; {e.time}</div>
                <div className="j-loc">{e.loc}</div>
                <button className="j-map-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  VIEW MAP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function EmeraldRsvp() {
  return (
    <section className="section emerald-rsvp grand-rsvp">
      <div className="section-inner rsvp-flex">
        <div className="rsvp-left">
          <h4>KINDLY</h4>
          <h2>RSVP</h2>
          <p>Your presence will make our celebration truly special. Please let us know if you'll be joining us.</p>
          <button className="emerald-btn">RSVP Now &rarr;</button>
        </div>
        <div className="rsvp-right">
           {/* RSVP forms or buttons */}
        </div>
      </div>
    </section>
  );
}

/* Traced from the transparent opening of goldenarchframe.png, in
   objectBoundingBox units so it scales with whatever size the frame renders at.
   Regenerate this if the frame art changes: the photo must sit exactly inside
   the gold, or a sliver of background shows through the cusps. */
const NICHE_CLIP =
  'M0.501,0.099 L0.550,0.130 L0.661,0.168 L0.680,0.185 L0.688,0.209 L0.741,0.213 ' +
  'L0.781,0.227 L0.806,0.254 L0.808,0.282 L0.855,0.285 L0.889,0.299 L0.912,0.327 ' +
  'L0.914,0.344 L0.911,0.361 L0.937,0.365 L0.949,0.375 L0.951,0.946 L0.049,0.946 ' +
  'L0.049,0.378 L0.062,0.365 L0.088,0.361 L0.085,0.347 L0.087,0.327 L0.110,0.299 ' +
  'L0.144,0.285 L0.192,0.282 L0.191,0.265 L0.200,0.244 L0.226,0.223 L0.258,0.213 ' +
  'L0.311,0.209 L0.320,0.185 L0.339,0.168 L0.450,0.130 L0.498,0.099 Z';

/* The frame's own pixel size. Clip, photo and frame all work in this one
   coordinate space, which is what keeps them aligned at any rendered size. */
const FRAME_W = 1086;
const FRAME_H = 1448;

/* Cover-fits a source photo into the frame at a given zoom, placing the chosen
   focal point where a portrait's face belongs. Clamped so the photo can never
   pull away from an edge and leave a gap. */
function coverRect(sw: number, sh: number, zoom: number, fx: number, fy: number) {
  const scale = Math.max(FRAME_W / sw, FRAME_H / sh) * zoom;
  const w = sw * scale;
  const h = sh * scale;
  const x = Math.min(0, Math.max(FRAME_W - w, FRAME_W * 0.5 - fx * w));
  const y = Math.min(0, Math.max(FRAME_H - h, FRAME_H * 0.36 - fy * h));
  return { x, y, w, h };
}

function CoupleProfile({
  id, photo, sw, sh, fx, fy, name, role, relation, parents,
}: {
  id: string; photo: string; sw: number; sh: number; fx: number; fy: number;
  name: string; role: string; relation: string; parents: string;
}) {
  const clipId = `niche-${id}`;
  const r = coverRect(sw, sh, 1.25, fx, fy);
  return (
    <div className="couple-profile">
      <div className="couple-niche">
        {/* Clipped inside the SVG rather than with CSS clip-path on an <img>:
            the clip, the photo and the frame then share one coordinate space,
            and nothing depends on an external objectBoundingBox reference. */}
        <svg viewBox={`0 0 ${FRAME_W} ${FRAME_H}`} aria-hidden="true">
          <defs>
            <clipPath id={clipId}>
              {/* Fractions scaled up to frame pixels. The 2% nudge tucks the
                  photo under the gold instead of meeting its anti-aliased
                  inner edge, which would leave a pale halo in every cusp. */}
              <path
                d={NICHE_CLIP}
                transform={`scale(${FRAME_W} ${FRAME_H}) translate(0.5 0.5) scale(1.02) translate(-0.5 -0.5)`}
              />
            </clipPath>
          </defs>
          <g clipPath={`url(#${clipId})`}>
            <image href={photo} x={r.x} y={r.y} width={r.w} height={r.h} preserveAspectRatio="none" />
          </g>
          <image href={`${ASSET}/goldenarchframe.png`} x="0" y="0" width={FRAME_W} height={FRAME_H} />
        </svg>
      </div>
      <h3 className="couple-name">{name}</h3>
      <p className="couple-role">{role}</p>
      <span className="couple-sep" aria-hidden="true" />
      <p className="couple-parents"><b>{relation}</b>{parents}</p>
    </div>
  );
}

function AmpersandColumn() {
  return (
    <div className="couple-amp" aria-hidden="true">
      <span className="amp-line" />
      <span className="amp-floret" />
      <div className="amp-badge">
        <svg viewBox="0 0 200 240">
          <path className="amp-shape" d={ARCH_PATH} />
        </svg>
        <span>&amp;</span>
      </div>
      <span className="amp-floret" />
      <span className="amp-line" />
    </div>
  );
}

function EmeraldCouple() {
  return (
    <section className="section emerald-couple">
      <span className="cp-leaf tl" aria-hidden="true" />
      <span className="cp-leaf tr" aria-hidden="true" />
      <span className="cp-leaf bl" aria-hidden="true" />
      <span className="cp-leaf br" aria-hidden="true" />

      <div className="section-inner cp-inner" data-reveal>
        <LotusRule />
        <h4 className="cp-eyebrow">The Couple</h4>
        <h2 className="cp-title">Two souls, one sacred journey</h2>
        <div className="cp-rule" aria-hidden="true"><i /></div>

        {/* Both niches crop the same photo, one onto each face. Every source
            image is a couple shot, so cropping is the only route to a solo
            portrait, and using one photo keeps the two sides matched for
            light. fx/fy are the face centre as a fraction of the source. */}
        <div className="couple-grid">
          <CoupleProfile
            id="bride"
            photo={`${PHOTO_BASE}/a509bf14e8-F-1.jpg`}
            sw={393} sh={420} fx={0.323} fy={0.231}
            name="Rashmika"
            role="The Bride"
            relation="Daughter of"
            parents="Mr. Mandanna & Mrs. Mandanna"
          />
          <AmpersandColumn />
          <CoupleProfile
            id="groom"
            photo={`${PHOTO_BASE}/a509bf14e8-F-1.jpg`}
            sw={393} sh={420} fx={0.644} fy={0.267}
            name="Vijay"
            role="The Groom"
            relation="Son of"
            parents="Mr. Deverakonda & Mrs. Deverakonda"
          />
        </div>

        <p className="cp-tagline">
          Different Stories <i aria-hidden="true" /> One Beautiful Forever
        </p>
      </div>
    </section>
  );
}

function EmeraldFooter() {
  return (
    <footer className="emerald-footer grand-footer">
      <div className="section-inner ft-inner" data-reveal>
        <h4 className="ft-eyebrow">With the blessings of the divine</h4>
        <p className="ft-subline">
          May our journey be filled with love, harmony and eternal grace
        </p>
        {/* Transparent PNG on the emerald band: the browser composites it over
            --emerald-deep, which is the same blend that removed the olive cast
            offline. No frame or mask needed. */}
        <img src={`${ASSET}/godfooter.png`} alt="" className="ft-plate" />
        <h2 className="ft-script">Shubham Bhavatu</h2>
        <p className="ft-names">Rashmika &amp; Vijay</p>
        <p className="ft-thanks">Thank you for being part of our story</p>
      </div>

      {/* Pond band closes the section, in flow directly under the sign-off */}
      <img src={`${ASSET}/footer.png`} alt="" className="ft-pond" />
    </footer>
  );
}

export default function EmeraldLayout() {
  const [opened, setOpened] = useState(false);
  useSmoothScroll();
  useReveal();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio(`${ASSET}/Inkem Inkem Inkem Kaavaale - SenSongsMp3.Co.mp3`);
    audioRef.current.loop = true;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => { 
    document.body.classList.toggle('invitation-open', opened); 
    
    // Auto-play when the user explicitly clicks the "Open Invitation" button
    if (opened && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(e => {
        console.log("Auto-play prevented by browser:", e);
      });
    }
  }, [opened]);
  
  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <main className="emerald-temple grand-layout">
      {!opened && <EmeraldEntry onOpen={() => setOpened(true)} />}
      <div id="home"><EmeraldHero /></div>
      <EmeraldCountdown />
      <div id="story"><EmeraldCouple /></div>
      <div id="gallery"><EmeraldGallery /></div>
      <div id="events"><EmeraldJourney /></div>
      <div id="rsvp"><EmeraldFooter /></div>

      {/* Floating Audio Button */}
      {opened && (
        <button 
          className={`global-audio-btn ${isPlaying ? 'playing' : 'muted'}`} 
          onClick={toggleAudio}
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          <img src={`${ASSET}/imgi_25_km-audio-on.png`} alt="" />
          {!isPlaying && <div className="mute-slash" />}
        </button>
      )}
    </main>
  );
}

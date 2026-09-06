import { useEffect, useState } from 'react';
import { themes } from '../theme/config';
import { useParallax } from '../useParallax';

const ASSET = themes['emerald-temple'].assetPath;

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
          <span>13 APRIL 2025</span>
          <span>BANGALORE</span>
        </div>
        <button className="emerald-btn hero-cta">ENTER OUR STORY &darr;</button>
      </div>
    </section>
  );
}

function EmeraldCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('April 13, 2025 10:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section emerald-countdown">
      <div className="section-inner text-center">
        <h4 style={{ color: 'var(--gold)' }}>SAVE THE DATE</h4>
        <h2 style={{ color: 'var(--emerald-deep)', marginBottom: '40px' }}>The Countdown Begins!</h2>
        
        <div className="countdown-grid">
          <div className="countdown-item">
            <span className="count-number">{timeLeft.days}</span>
            <span className="count-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="count-number">{timeLeft.hours}</span>
            <span className="count-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="count-number">{timeLeft.minutes}</span>
            <span className="count-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="count-number">{timeLeft.seconds}</span>
            <span className="count-label">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const PHOTO_BASE = 'https://p7fosjg9fjbplnvq.public.blob.vercel-storage.com/synced-media';
const galleryImages = [
  `${PHOTO_BASE}/a7bbd013fb-22.jpeg`,
  `${PHOTO_BASE}/1ea95d2922-23-1.jpeg`,
  `${PHOTO_BASE}/20d69634d1-29.jpeg`,
  `${PHOTO_BASE}/10630c5a75-25-1.jpeg`,
  `${PHOTO_BASE}/a509bf14e8-F-1.jpg`,
];

function EmeraldGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  const handleNext = () => setActiveIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));

  const visibleThumbs = [
    galleryImages[(activeIndex + 1) % galleryImages.length],
    galleryImages[(activeIndex + 2) % galleryImages.length],
    galleryImages[(activeIndex + 3) % galleryImages.length],
  ];

  return (
    <section className="section emerald-gallery">
      <div className="section-inner gallery-container">
        <div className="gallery-header">
           <h4 style={{ color: 'var(--gold)' }}>OUR BEGINNING</h4>
           <h2 style={{ color: '#fff' }}>"Every beautiful story starts with a simple hello."</h2>
        </div>

        <div className="gallery-floating left">
          <p>Moments<br/>That Made<br/>Us</p>
          <img src={`${ASSET}/lotus-icon.png`} alt="Lotus" className="floating-lotus" />
        </div>
        
        <div className="gallery-floating right">
          <p>Same People<br/>A More<br/>Beautiful<br/>Story</p>
          <img src={`${ASSET}/lotus-icon.png`} alt="Lotus" className="floating-lotus" />
        </div>

        <div className="gallery-content-split">
          <button className="gallery-arrow prev" onClick={handlePrev}>&lt;</button>
          
          <div className="gallery-left-main">
            <img src={galleryImages[activeIndex]} alt="Couple" className="main-photo" />
            <img src={`${ASSET}/custom-border-frame.png`} alt="" className="frame-overlay" />
          </div>

          <div className="gallery-right-thumbs">
            {visibleThumbs.map((img, i) => (
              <div key={i} className="thumb-item">
                <img src={img} alt={`Thumb ${i}`} className="thumb-photo" />
                <img src={`${ASSET}/custom-thumb-frame.png`} alt="" className="thumb-frame-overlay" />
              </div>
            ))}
          </div>
          
          <button className="gallery-arrow next" onClick={handleNext}>&gt;</button>
        </div>

        <div className="gallery-counter">
           {String(activeIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
}

function EmeraldEvents() {
  const events = [
    { name: 'Haldi', date: 'FRI, 12 APR 2025', time: '10:00 AM', loc: 'The Lotus Banquet' },
    { name: 'Wedding', date: 'SAT, 13 APR 2025', time: '11:30 AM', loc: 'The Grand Pavilion', highlight: true },
    { name: 'Reception', date: 'SAT, 13 APR 2025', time: '7:00 PM', loc: 'The Grand Pavilion' }
  ];
  return (
    <section className="section emerald-events grand-events">
      <div className="section-inner">
        <h4>WEDDING EVENTS</h4>
        <h2>We would be delighted to have you with us</h2>
        <div className="grand-events-grid">
          {events.map((e, i) => (
            <div key={i} className={`grand-event-card ${e.highlight ? 'highlight' : ''}`}>
              <h3>{e.name}</h3>
              <p className="event-date">{e.date}<br/>{e.time}</p>
              <p className="event-loc">{e.loc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmeraldTravel() {
  return (
    <section className="section emerald-travel">
      <div className="section-inner">
        <h4>TRAVEL &amp; STAY</h4>
        <h2>We can't wait to host you in Bangalore!</h2>
        <div className="travel-content">
          <div className="travel-buttons">
            <button className="emerald-outline-btn">How to Reach</button>
            <button className="emerald-outline-btn">Stay Options</button>
            <button className="emerald-outline-btn">Local Guide</button>
          </div>
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

function EmeraldCouple() {
  return (
    <section className="section emerald-couple">
      <div className="section-inner couple-grid">
        <div className="couple-profile">
          <div className="couple-frame">
            {/* The leaf wreath will go here once uploaded */}
            <div className="couple-photo-wrapper">
              <img src={`${PHOTO_BASE}/a509bf14e8-F-1.jpg`} alt="Vijay" className="couple-photo" />
            </div>
          </div>
          <h3 className="couple-name">Vijay</h3>
          <p className="couple-parents">SON OF<br/>Mr. Deverakonda &amp; Mrs. Deverakonda</p>
        </div>

        <div className="couple-amp">&amp;</div>

        <div className="couple-profile">
          <div className="couple-frame">
            {/* The leaf wreath will go here once uploaded */}
            <div className="couple-photo-wrapper">
              <img src={`${PHOTO_BASE}/10630c5a75-25-1.jpeg`} alt="Rashmika" className="couple-photo" />
            </div>
          </div>
          <h3 className="couple-name">Rashmika</h3>
          <p className="couple-parents">DAUGHTER OF<br/>Mr. Mandanna &amp; Mrs. Mandanna</p>
        </div>
      </div>
      <div className="lotus-divider">
        {/* Placeholder for the small lotus icon seen in the screenshot */}
      </div>
    </section>
  );
}

function EmeraldFooter() {
  return (
    <footer className="emerald-footer grand-footer">
      <img src={`${ASSET}/footer.png`} alt="Footer Graphic" className="footer-bg" />
    </footer>
  );
}

export default function EmeraldLayout() {
  const [opened, setOpened] = useState(false);
  useEffect(() => { document.body.classList.toggle('invitation-open', opened); }, [opened]);
  
  return (
    <main className="emerald-temple grand-layout">
      {!opened && <EmeraldEntry onOpen={() => setOpened(true)} />}
      <div id="home"><EmeraldHero /></div>
      <EmeraldCountdown />
      <div id="story"><EmeraldCouple /></div>
      <div id="gallery"><EmeraldGallery /></div>
      <div id="events"><EmeraldEvents /></div>
      <div id="travel"><EmeraldTravel /></div>
      <div id="rsvp"><EmeraldFooter /></div>
    </main>
  );
}

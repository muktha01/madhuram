import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Music2, Play, X } from 'lucide-react';

import { themes, ThemeId } from '../theme/config';

const urlParams = new URLSearchParams(window.location.search);
const themeId = (urlParams.get('theme') as ThemeId) || 'kalyana-mandapam';
const currentTheme = themes[themeId] || themes['kalyana-mandapam'];
const ASSET = currentTheme.assetPath;
const PHOTO_BASE = 'https://p7fosjg9fjbplnvq.public.blob.vercel-storage.com/synced-media';

const galleryImages = [
  `${PHOTO_BASE}/a7bbd013fb-22.jpeg`,
  `${PHOTO_BASE}/1ea95d2922-23-1.jpeg`,
  `${PHOTO_BASE}/20d69634d1-29.jpeg`,
  `${PHOTO_BASE}/10630c5a75-25-1.jpeg`,
  `${PHOTO_BASE}/a509bf14e8-F-1.jpg`,
  `${PHOTO_BASE}/f42440eb83-27.jpeg`,
  `${PHOTO_BASE}/fdbc188766-34.jpeg`,
  `${PHOTO_BASE}/83ace83b69-26.jpeg`,
  `${PHOTO_BASE}/938d8ff3f5-WhatsApp-Image-2026-08-18-at-2.12.52-PM.jpeg`,
  `${PHOTO_BASE}/88632f61b3-31.jpeg`,
];

const events = [
  { name: 'Mehendi', date: '24th February 2026', time: '5:00 PM onwards', image: `${ASSET}/events/mehendi.png` },
  { name: 'Haldi & Sangeet', date: '25th February 2026', time: '10:48 AM', image: `${ASSET}/events/haldi-bowl.png` },
  { name: 'Telugu Wedding', date: '26th February 2026', time: '10:00 AM onwards', image: `${ASSET}/events/nadaswaram.png` },
  { name: 'Kodava Ceremony', date: '26th February 2026 — Evening', time: '6:30 PM onwards', image: `${ASSET}/events/nadaswaram.png` },
];

function Frame() {
  return <div className="frame" aria-hidden="true"><i className="rail top" /><i className="rail bottom" /><i className="rail left" /><i className="rail right" /><i className="corner tl" /><i className="corner tr" /><i className="corner bl" /><i className="corner br" /></div>;
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    el.querySelectorAll('.reveal').forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Entry({ onOpen }: { onOpen: () => void }) {
  const [closing, setClosing] = useState(false);
  const handleOpen = () => {
    setClosing(true);
    setTimeout(onOpen, 700);
  };
  return <div className={`entry ${closing ? 'closing' : ''}`}><div className="entry-veil"><div className="entry-card"><img src={`${ASSET}/entry-card.jpg`} alt="" className="entry-art" /><div className="entry-bloom" /><img src={`${ASSET}/mandala-gold.webp`} alt="" className="entry-mandala" /><div className="entry-content"><div><p className="entry-label">The Wedding Of</p><h1>Vijay <span>&amp;</span> Rashmika</h1></div><div className="entry-meta"><p>26 October 2026</p><p>ITC Mementos, Udaipur, Rajasthan, India</p></div><button onClick={handleOpen}>Open Invitation</button></div></div></div></div>;
}

function Hero() {
  const groom = 'Vijay'.split('');
  const bride = 'Rashmika'.split('');
  return <section className="hero">{currentTheme.heroMedia.type === 'video' ? <video className="hero-video" autoPlay muted loop playsInline poster={`${ASSET}/temple-scenery.png`}><source src={currentTheme.heroMedia.src} type="video/mp4" /></video> : <img className="hero-video" src={currentTheme.heroMedia.src} alt="" />}<div className="hero-scrim" /><div className="hero-content"><p className="invocation">|| Shree Ganeshay Namah ||</p><h1>{groom.map((c, i) => <span key={i}>{c}</span>)}</h1><p className="amp">&amp;</p><h1>{bride.map((c, i) => <span key={i}>{c}</span>)}</h1><p className="date">Monday, October 26, 2026</p><p className="venue"><em>at</em> ITC Mementos, Udaipur, Rajasthan, India</p><span className="scroll-cue">Scroll to discover <b>↓</b></span></div></section>;
}

function Couple() {
  const ref = useReveal<HTMLDivElement>();
  return <section className="couple section-frame" ref={ref}><Frame /><img className="scenery scenery-top" src={`${ASSET}/temple-scenery.png`} alt="" /><img className="scenery scenery-bottom" src={`${ASSET}/temple-scenery.png`} alt="" /><div className="section-inner"><h2 className="reveal">The Couple</h2><p className="section-sub reveal">Two families, many blessings, one timeless celebration.</p><div className="reveal"><CoupleCard name="Vijay Deverakonda" role="Son of" parents="Deverakonda Govardhan Rao & Deverakonda Madhavi" image={`${PHOTO_BASE}/618dff4e0d-534536433_18324616675238653_1023307852965625301_n.jpg`} /></div><img className="divider reveal" src={`${ASSET}/gold-divider.webp`} alt="" /><div className="reveal"><CoupleCard name="Rashmika Mandanna" role="Daughter of" parents="Madan Mandanna & Suman Mandanna" image={`${PHOTO_BASE}/c4cc91ddfb-654209778_18573193186045304_3648194887087051682_n.jpg`} mirror /></div></div></section>;
}

function CoupleCard({ name, role, parents, image, mirror = false }: { name: string; role: string; parents: string; image: string; mirror?: boolean }) {
  return <div className="couple-unit"><div className={`couple-card ${mirror ? 'mirror' : ''}`}><div className="halo" /><div className="photo-window"><img src={image} alt={name} /></div><img className="ornament" src={`${ASSET}/peacock-arch.webp`} alt="" /></div><div className="couple-meta"><h3>{name}</h3><p className="role">{role}</p><p className="parents">{parents}</p></div></div>;
}

function Countdown() {
  const target = useMemo(() => new Date('2026-10-26T10:00:00+05:30').getTime(), []);
  const [remaining, setRemaining] = useState(target - Date.now());
  useEffect(() => { const timer = window.setInterval(() => setRemaining(Math.max(0, target - Date.now())), 1000); return () => window.clearInterval(timer); }, [target]);
  const units = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60];
  return <section className="countdown"><div className="countdown-art"><img src={`${ASSET}/countdown-wall.webp`} alt="" /><div className="countdown-values">{units.map((value, index) => <div key={index}><strong>{String(value).padStart(2, '0')}</strong><span>{['Days', 'Hours', 'Minutes', 'Seconds'][index]}</span></div>)}</div></div></section>;
}

function Events() {
  const ref = useReveal<HTMLDivElement>();
  return <section className="events section-frame" ref={ref}><Frame /><div className="kolam" /><div className="section-inner"><h2 className="reveal">The Wedding Journey</h2><p className="section-sub reveal">Walk with us, function to function, to the sacred hour.</p><div className="event-list">{events.map((event, index) => <article className={`event reveal ${index % 2 ? 'right' : 'left'}`} key={event.name} style={{ transitionDelay: `${index * 120}ms` }}><div className="event-icon"><img src={event.image} alt="" /></div><div className="event-card"><h3>{event.name}</h3><p className="event-when">{event.date} <span>·</span> {event.time}</p><p className="event-venue">ITC Mementos, Udaipur</p><a href="https://maps.app.goo.gl/XaQmk5ifYLZmsPuAA" target="_blank" rel="noreferrer"><MapPin size={11} /> View Map</a></div></article>)}</div></div></section>;
}

function Gallery({ onOpen }: { onOpen: (index: number) => void }) {
  const ref = useReveal<HTMLDivElement>();
  return <section className="gallery" ref={ref}><div className="gallery-toranam" /><div className="gallery-motes" aria-hidden="true">{Array.from({ length: 12 }).map((_, i) => <span key={i} className="gallery-mote" />)}</div><img className="gallery-parasol" src={`${ASSET}/gallery-parasol.png`} alt="" aria-hidden="true" /><div className="section-inner"><h2 className="reveal">Before the Vows</h2><p className="section-sub reveal">Little moments from the years that brought us here.</p><div className="gallery-grid">{galleryImages.map((image, index) => <button className={`gallery-cell reveal ${index === 0 || index === 9 ? 'feature' : ''}`} key={image} style={{ transitionDelay: `${(index % 2) * 100}ms` }} onClick={() => onOpen(index)}><img src={image} alt="" /><span /></button>)}</div></div></section>;
}

function Rsvp() {
  const [answer, setAnswer] = useState<'yes' | 'no' | null>(null);
  const [sent, setSent] = useState(false);
  return <section className="rsvp section-frame"><Frame /><div className="kolam" /><div className="section-inner"><h2>Bless Us With Your Presence</h2><p className="section-sub">Let us know if you can join us, so we may keep a place for you.</p><div className="rsvp-slip">{sent ? <div className="rsvp-done"><span>✦</span><h3>Thank you</h3><p>Your blessings mean the world to us.</p></div> : <><div className="choices"><button className={answer === 'yes' ? 'selected' : ''} onClick={() => setAnswer('yes')}><i>◇</i> With joy, we will be there</button><button className={answer === 'no' ? 'selected' : ''} onClick={() => setAnswer('no')}><i>◇</i> With regret, we cannot</button></div><button className="submit" disabled={!answer} onClick={() => setSent(true)}>Send RSVP</button></>}</div></div></section>;
}

function VideoSection() {
  const [playing, setPlaying] = useState(false);
  return <section className="video-section"><div className="video-wall"><img src={`${ASSET}/video-wall.jpg`} alt="" /><button className="video-opening" onClick={() => setPlaying(true)} aria-label="Play wedding video"><Play size={30} fill="currentColor" /></button></div>{playing && <div className="video-modal" onClick={() => setPlaying(false)}><button onClick={() => setPlaying(false)} aria-label="Close video"><X /></button><div className="video-modal-card"><img src={galleryImages[0]} alt="Wedding memories" /><div><Play size={28} fill="currentColor" /><p>A Special Glimpse</p></div></div></div>}</section>;
}

function Footer() { return <footer><img src={`${ASSET}/footer-card.jpg`} alt="" /><div className="footer-greeting"><p>We await your gracious presence</p><h2>and your blessings</h2><span>శుభమస్తు</span></div><a href="https://myshaadhilink.in" target="_blank" rel="noreferrer">This invitation was crafted on <b>MyShaadhi Link</b><small>Need one for your wedding? Click here</small></a></footer>; }

export default function ClassicLayout() {
  const [opened, setOpened] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [musicOn, setMusicOn] = useState(false);
  useEffect(() => { document.body.classList.toggle('invitation-open', opened); }, [opened]);
  return <main className={currentTheme.id}>{!opened && <Entry onOpen={() => setOpened(true)} />}<Hero /><Couple /><Countdown /><Events /><Gallery onOpen={setGalleryIndex} /><Rsvp /><VideoSection /><Footer /><button className={`music ${musicOn ? 'on' : ''}`} onClick={() => setMusicOn(!musicOn)} aria-label="Toggle music"><Music2 /></button><a className="order-cta" href="https://wa.me/919553143929?text=Hi%2C%20I'm%20interested%20in%20the%20Temple%20Theme%20wedding%20invitation%20template%20(%E2%82%B93%2C999)." target="_blank" rel="noreferrer"><b>₹3,999</b><span />Order Now</a>{galleryIndex !== null && <div className="lightbox" onClick={() => setGalleryIndex(null)}><button className="close-lightbox" onClick={() => setGalleryIndex(null)}><X /></button><button className="lightbox-arrow left-arrow" onClick={(event) => { event.stopPropagation(); setGalleryIndex((galleryIndex - 1 + galleryImages.length) % galleryImages.length); }}><ChevronLeft /></button><img src={galleryImages[galleryIndex]} alt="Wedding memory" onClick={(event) => event.stopPropagation()} /><button className="lightbox-arrow right-arrow" onClick={(event) => { event.stopPropagation(); setGalleryIndex((galleryIndex + 1) % galleryImages.length); }}><ChevronRight /></button></div>}</main>;
}

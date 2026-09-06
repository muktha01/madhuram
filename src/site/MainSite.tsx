'use client';

import Link from 'next/link';
import { useReveal } from '../useReveal';
import { useSmoothScroll } from '../useSmoothScroll';
import { TEMPLATES } from './templates';
import {
  BRAND, CLOSING, COMPARISON, FAQS, FEATURES, HERO, OFFER, OFFER_FAQ, PRICING,
  REASSURANCE, STEPS, WHATSAPP, WHATSAPP_DISPLAY,
} from './content';
import './main-site.css';

/* Inline SVG rather than an icon package or emoji: a handful of glyphs does
   not justify a dependency, and emoji render differently on every platform. */
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Dot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <circle cx="12" cy="12" r="8" />
  </svg>
);

/* A tick and a cross carry meaning, so they need a text alternative rather
   than aria-hidden: colour and shape alone would not reach a screen reader. */
const Yes = () => (
  <span className="ms-mark yes" role="img" aria-label="Yes">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);
const No = () => (
  <span className="ms-mark no" role="img" aria-label="No">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  </span>
);

/* Official WhatsApp glyph. Drawn rather than pulled from an icon set so the
   mark stays correct: lucide's is a generic phone-in-a-bubble. */
const WhatsAppGlyph = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
    <path d="M16.04 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.73 6.42L3.2 28.8l6.55-1.72a12.75 12.75 0 0 0 6.29 1.6h.01c7.05 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.71 12.71 0 0 0-9.06-3.63Zm0 23.28h-.01a10.63 10.63 0 0 1-5.42-1.48l-.39-.23-4.03 1.06 1.08-3.93-.25-.4a10.6 10.6 0 0 1-1.63-5.66c0-5.87 4.78-10.64 10.65-10.64 2.84 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.11 7.53c0 5.87-4.78 10.63-10.64 10.63Zm5.84-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.03-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z" />
  </svg>
);

const renderCell = (value: string) => {
  if (value === 'Yes') return <Yes />;
  if (value === 'No') return <No />;
  return value;
};

export default function MainSite() {
  useSmoothScroll();
  useReveal();

  return (
    <div className="mainsite">
      {/* Announcement bar. Above the sticky nav in source order so it scrolls
          away rather than permanently eating vertical space on a phone. */}
      <div className="ms-announce">
        <span className="ms-announce-flag">{OFFER.label}</span>
        <span>
          Every template {OFFER.price}
          {' '}
          <s>{OFFER.regular}</s>
          {' · '}
          {OFFER.blurb}
        </span>
      </div>

      <header className="ms-nav">
        <div className="ms-wrap ms-nav-inner">
          <a className="ms-logo" href="#top">{BRAND}<span>.</span></a>
          <nav aria-label="Main">
            <ul className="ms-nav-links">
              <li><a href="#templates">Templates</a></li>
              <li><a href="#compare">Why a link</a></li>
              <li><a href="#included">What&rsquo;s included</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </nav>
          <a className="ms-btn primary" href="#pricing">Get your invitation</a>
        </div>
      </header>

      <main id="top">
        {/* ---------------- Hero ---------------- */}
        <section className="ms-hero">
          <div className="ms-wrap ms-hero-grid">
            <div data-reveal>
            <p className="ms-eyebrow">{HERO.eyebrow}</p>
            <h1>
              {HERO.titleBefore}<em>{HERO.titleAccent}</em>{HERO.titleAfter}
            </h1>
            <p className="ms-lede ms-hero-lede">{HERO.lede}</p>
            <div className="ms-hero-actions">
              <a className="ms-btn primary" href="#templates">
                See the templates <ArrowRight />
              </a>
              <Link className="ms-btn ghost" href={`/invitation/${TEMPLATES[0].id}`}>
                Open a live example
              </Link>
            </div>
            <p className="ms-hero-note">{HERO.note}</p>
            </div>

            {/* Product shot: the templates themselves rather than a stock
                illustration. aria-hidden because the same three are listed
                properly, with names and alt text, in the section below. */}
            <div className="ms-hero-art" aria-hidden="true">
              <div className="ms-phone back-l">
                <img src={TEMPLATES[1].cover} alt="" loading="lazy" />
              </div>
              <div className="ms-phone back-r">
                <img src={TEMPLATES[2].cover} alt="" loading="lazy" />
              </div>
              <div className="ms-phone front">
                <img src={TEMPLATES[0].cover} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Templates ---------------- */}
        <section className="ms-section" id="templates">
          <div className="ms-wrap">
            <div className="ms-head" data-reveal>
              <p className="ms-eyebrow">The collection</p>
              <h2 className="ms-h2">Designed around a tradition, not a stock layout.</h2>
              <p className="ms-lede">
                Every one is a complete website with its own ornament, palette
                and motion. Open them and scroll to the end before you decide.
              </p>
            </div>

            <div className="ms-grid" data-reveal>
              {TEMPLATES.map((t) => (
                <article className="ms-card" key={t.id}>
                  <div className="ms-card-cover">
                    <img src={t.cover} alt={`${t.name} invitation template`} loading="lazy" />
                    <span className="ms-card-tag">{t.tradition}</span>
                  </div>
                  <div className="ms-card-body">
                    <h3>{t.name}</h3>
                    <div className="ms-swatches" aria-hidden="true">
                      {t.palette.map((c) => (
                        <span className="ms-swatch" key={c} style={{ background: c }} />
                      ))}
                    </div>
                    <p>{t.blurb}</p>
                    <div className="ms-card-foot">
                      <Link className="ms-card-link" href={`/invitation/${t.id}`}>
                        Open the full demo <ArrowRight />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Comparison ---------------- */}
        <section className="ms-section" id="compare">
          <div className="ms-wrap">
            <div className="ms-head" data-reveal>
              <p className="ms-eyebrow">Why a link</p>
              <h2 className="ms-h2">Three hundred cards, or one message.</h2>
              <p className="ms-lede">
                The cost of printing is only part of it. The rest is couriering
                them, reprinting when a time moves, and phoning round to find
                out who is coming.
              </p>
            </div>
            <div className="ms-table-scroll" data-reveal>
              <table className="ms-table">
                <caption className="ms-sr-only">
                  Printed cards, photo or video invitations, and {BRAND} compared
                </caption>
                <thead>
                  <tr>
                    <th scope="col">&nbsp;</th>
                    {COMPARISON.columns.map((c) => (
                      <th scope="col" key={c} className={c === BRAND ? 'ours' : undefined}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.rows.map(([label, ...cells]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      {cells.map((cell, i) => (
                        <td key={i} className={i === cells.length - 1 ? 'ours' : undefined}>
                          {renderCell(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="ms-footnote">
              Printed-card figures assume ₹50 to ₹200 a card plus courier, for
              300 guests. Your quotes will vary.
            </p>
          </div>
        </section>

        {/* ---------------- How it works ---------------- */}
        <section className="ms-section" id="how">
          <div className="ms-wrap">
            <div className="ms-head" data-reveal>
              <p className="ms-eyebrow">How it works</p>
              <h2 className="ms-h2">Three steps, and none of them are yours to build.</h2>
            </div>
            <div className="ms-steps" data-reveal>
              {STEPS.map(([title, body]) => (
                <div className="ms-step" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Features ---------------- */}
        <section className="ms-section" id="included">
          <div className="ms-wrap">
            <div className="ms-head center" data-reveal>
              <p className="ms-eyebrow">What&rsquo;s included</p>
              <h2 className="ms-h2">Everything, in the one price.</h2>
            </div>
            <div className="ms-features" data-reveal>
              {FEATURES.map(([title, body]) => (
                <div className="ms-feature" key={title}>
                  <Dot />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Objection handling ---------------- */}
        <section className="ms-section ms-reassure">
          <div className="ms-wrap">
            <div className="ms-head" data-reveal>
              <p className="ms-eyebrow">{REASSURANCE.eyebrow}</p>
              <h2 className="ms-h2">{REASSURANCE.title}</h2>
              <p className="ms-lede">{REASSURANCE.lede}</p>
            </div>
            <div className="ms-reassure-grid" data-reveal>
              {REASSURANCE.points.map(([title, body]) => (
                <div className="ms-reassure-item" key={title}>
                  <Check />
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Pricing ---------------- */}
        <section className="ms-section ms-price-band" id="pricing">
          <div className="ms-wrap">
            <div className="ms-head center" data-reveal>
              <p className="ms-eyebrow">{PRICING.eyebrow}</p>
              <h2 className="ms-h2">{PRICING.title}</h2>
              <p className="ms-lede">{PRICING.lede}</p>
            </div>

            <div className="ms-offer" data-reveal>
              <div className="ms-offer-head">
                <span className="ms-offer-flag">{OFFER.label}</span>
                <div className="ms-offer-price">
                  <span className="now">{OFFER.price}</span>
                  {/* <s> marks it as no longer accurate, which is what a
                      strike-through means semantically, not just visually */}
                  <s className="was">{OFFER.regular}</s>
                </div>
                <p className="ms-offer-note">one time, for any template</p>
                <a className="ms-btn primary" href={WHATSAPP}>
                  Start your invitation <ArrowRight />
                </a>
              </div>

              <ul className="ms-offer-list">
                {PRICING.includes.map((f) => (
                  <li key={f}><Check /> {f}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="ms-section" id="faq">
          <div className="ms-wrap">
            <div className="ms-head" data-reveal>
              <p className="ms-eyebrow">Questions</p>
              <h2 className="ms-h2">Before you ask.</h2>
            </div>
            {/* <details> gives keyboard support and find-in-page for free */}
            <div className="ms-faq" data-reveal>
              <details>
                <summary>{OFFER_FAQ[0]}</summary>
                <p>{OFFER_FAQ[1]}</p>
              </details>
              {FAQS.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating enquiry button. Fixed to the viewport, above everything,
          and clear of the iOS home indicator via safe-area insets. */}
      <a
        className="ms-wa"
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Message us on WhatsApp at ${WHATSAPP_DISPLAY}`}
      >
        <WhatsAppGlyph />
        <span className="ms-wa-label">Chat with us</span>
      </a>

      <footer className="ms-footer" id="contact">
        <div className="ms-wrap">
          <div className="ms-footer-top">
            <div>
              <h2>{CLOSING.title}</h2>
              <p className="ms-lede">{CLOSING.lede}</p>
            </div>
            <a className="ms-btn primary" href={WHATSAPP}>
              {CLOSING.cta} <ArrowRight />
            </a>
          </div>
          <div className="ms-footer-base">
            <p>© {new Date().getFullYear()} {BRAND}. Made for Indian weddings.</p>
            <p>{OFFER.price} one time · live in two days</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

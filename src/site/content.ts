/* All marketing copy in one place, so wording can be revised without going
   near layout code.

   Written to avoid the category's default register. Competitors lead with
   "crafted with love", "unforgettable", "blown away"; superlatives every rival
   also claims read as noise. Everything here is concrete: a number, a named
   object, or a specific thing that happens. */

export const BRAND = 'Shubh';
/* wa.me wants the full international number with no +, spaces or dashes.
   6363604062 is a 10-digit Indian mobile, so it carries the 91 country code. */
export const WHATSAPP_NUMBER = '916363604062';
export const WHATSAPP_DISPLAY = '+91 63636 04062';
/* Pre-filling the first message means the enquiry arrives with context
   instead of a bare "hi", which is what most floating buttons produce. */
export const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I'd like a wedding invitation website. Our wedding date is ",
)}`;
export const EMAIL = 'hello@example.com'; // TODO: real address

/* Launch offer: one price for every template, no tiers.
   REGULAR is the reference price a strike-through is measured against, so it
   must be a price genuinely charged before, not an invented anchor. */
export const OFFER = {
  price: '₹1,499',
  regular: '₹3,999',
  label: 'Launch offer',
  blurb: 'Every template, the same price, while the offer lasts.',
};

export const HERO = {
  eyebrow: 'Digital wedding invitations',
  /* The em is the accented word. Not "beautiful invitations", which says
     nothing: the buyer's actual problem is scale and logistics. */
  titleBefore: 'Every function, every venue, on ',
  titleAccent: 'one link',
  titleAfter: '.',
  lede:
    'A complete invitation website for your wedding, built around your own tradition. Guests tap once and see the whole celebration: mehendi through reception, with venue maps, your photographs, and a countdown to the muhurat.',
  note: '₹1,499 for any template · live in two days · no limit on guests',
};

/* The single most persuasive section on a competitor's page, and the one we
   were missing. It reframes the price: against 300 couriered cards this is
   cheap, and against a video invite it does far more. Figures are indicative
   market ranges, shown as ranges rather than false precision. */
export const COMPARISON = {
  columns: ['Printed cards', 'Photo or video invite', BRAND],
  rows: [
    ['Cost for 300 guests', '₹15,000–60,000', '₹1,000–4,000', '₹1,499'],
    ['Every function in one place', 'Rarely', 'No', 'Yes'],
    ['Venue maps guests can open', 'No', 'No', 'Yes'],
    ['RSVPs you can actually count', 'Phone calls', 'No', 'Yes'],
    ['Fix a time after sending', 'Reprint', 'No', 'Yes'],
    ['Reaching relatives abroad', 'Courier', 'Yes', 'Yes'],
    ['Still there a year later', 'In a box', 'Lost in the chat', 'Yes'],
  ],
};

export const STEPS: [string, string][] = [
  [
    'Choose a template',
    'Each one is a full website, not a card image. Open any of them and scroll the whole thing before you decide.',
  ],
  [
    'Send us your details',
    'Names, families, functions, venues and photographs, over WhatsApp. We do the setting up and send you a preview.',
  ],
  [
    'Share your link',
    'Live in two working days. Send it once on WhatsApp and it reaches everyone, here and abroad.',
  ],
];

export const FEATURES: [string, string][] = [
  [
    'Every function, in order',
    'Mehendi, haldi, sangeet, the ceremony, the reception. Each with its date, time, venue and a map that opens in Google Maps.',
  ],
  [
    'More than one tradition',
    'A Telugu ceremony and a Kodava or Christian one sit on the same timeline, each with its own venue and hour. Most invitations cannot do this.',
  ],
  [
    'Countdown to the muhurat',
    'Counts down to the exact minute, and keeps counting every time a guest reopens the link.',
  ],
  [
    'Your photographs',
    'A gallery for your shoot, with room for a save-the-date film if you have one.',
  ],
  [
    'RSVPs you can count',
    'Guests reply on the page. You get a running list and a headcount, instead of two hundred separate messages.',
  ],
  [
    'Built for a weak signal',
    'Loads on an old Android phone on patchy data, because plenty of your guests will be opening it on exactly that.',
  ],
];

/* The objection every competitor ignores. In this market the deciding voice
   is often a parent asking whether the older relatives will manage it, and a
   page that refuses to acknowledge print reads as evasive. */
export const REASSURANCE = {
  eyebrow: 'The question everyone asks',
  title: 'Will the elders be able to open it?',
  lede:
    'It is the first thing families ask, and it is a fair question. Here is the honest answer.',
  points: [
    [
      'Nothing to install, nothing to sign into',
      'It opens like any web page when they tap the message. No app, no account, no password.',
    ],
    [
      'One tap from WhatsApp',
      'The link opens straight into the browser they already have. If they can open a forwarded photo, they can open this.',
    ],
    [
      'Large type, generous spacing',
      'Set to be readable at arm\'s length without pinching or zooming.',
    ],
    [
      'Print a few cards as well',
      'For the elders who would rather hold one, and for the temple. The link is for the other three hundred guests, not instead of tradition.',
    ],
  ] as [string, string][],
};

export const PRICING = {
  eyebrow: 'Pricing',
  title: 'One price, every template.',
  lede:
    'No tiers to compare and nothing to work out. Pay once, and your invitation stays online through the wedding and long after it. No subscription, no charge per guest.',
  includes: [
    'Any template in the collection',
    'Every function, with venues and maps',
    'More than one tradition on a single timeline',
    'Countdown, photo gallery and music',
    'Save-the-date film if you have one',
    'RSVP with a live headcount',
    'Colours matched to your printed cards',
    'Unlimited edits after it goes live',
    'Live within two working days',
  ],
};

export const FAQS: [string, string][] = [
  [
    'How long does it take?',
    'Two working days from the point we have your details and photographs. If your date is close, say so when you message us and we will move you up.',
  ],
  [
    'Can we change something after it is live?',
    'Yes. Send us the edit and we will make it. Your link never changes, so anything already forwarded to guests keeps working.',
  ],
  [
    'Can you match our printed cards?',
    'Yes. Send a photograph of the card and we will bring the colours across so the two sit together.',
  ],
  [
    'What if we have functions in two traditions?',
    'That is included. Both sets of ceremonies go on one timeline, each with its own venue, time and map, in the order they happen.',
  ],
  [
    'How do guests RSVP?',
    'They tap yes or no on the page and add how many are coming. You see the running list and the headcount. No spreadsheet, no chasing.',
  ],
  [
    'Is there a limit on guests?',
    'No. The price is the same whether you send it to fifty people or eight hundred.',
  ],
  [
    'Can we see it before we pay?',
    'You can open every template in full, right now, from the collection above. Once you order, you also get a private preview with your own details in it before it goes to anyone.',
  ],
  [
    'What happens to it after the wedding?',
    'It stays up. Several couples keep sending the link to people who ask about the photographs months later.',
  ],
];

export const OFFER_FAQ: [string, string] = [
  'How long is the offer on?',
  'It is running now, and we will say here when it ends. Whatever you pay is a one-off, so the price never goes up on you later.',
];

export const CLOSING = {
  title: 'Shall we start on yours?',
  lede:
    'Message us with your date and the template you like. We will reply with a preview before you pay anything.',
  cta: 'Message us on WhatsApp',
};

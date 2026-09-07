/* All marketing copy in one place, so wording can be revised without going
   near layout code.

   Written to avoid the category's default register. Competitors lead with
   "crafted with love", "unforgettable", "blown away"; superlatives every rival
   also claims read as noise. Everything here is concrete: a number, a named
   object, or a specific thing that happens. */

export const BRAND = 'aahvanam';
/* wa.me wants the full international number with no +, spaces or dashes.
   6363604062 is a 10-digit Indian mobile, so it carries the 91 country code. */
export const WHATSAPP_NUMBER = '916363604062';
export const WHATSAPP_DISPLAY = '+91 63636 04062';
/* Pre-filling the first message means the enquiry arrives with context
   instead of a bare "hi", which is what most floating buttons produce. */
export const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I'd like a digital invitation website for our upcoming event/celebration. Event date is ",
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
  eyebrow: 'Digital invitations for all events & celebrations',
  /* The em is the accented word. Not "beautiful invitations", which says
     nothing: the buyer's actual problem is scale and logistics. */
  titleBefore: 'Every celebration, every venue, on ',
  titleAccent: 'one link',
  titleAfter: '.',
  lede:
    'A complete invitation website for your special occasion — weddings, birthdays, anniversaries, housewarmings, surprises & grand celebrations. Guests tap once and see the whole celebration: schedule, venue maps, photo galleries, RSVP tracking, and live countdowns.',
  note: '₹1,499 for any template · live in two days · unlimited guests',
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
    ['Reaching relatives & friends abroad', 'Courier', 'Yes', 'Yes'],
    ['Still there a year later', 'In a box', 'Lost in the chat', 'Yes'],
  ],
};

export const STEPS: [string, string][] = [
  [
    'Choose a template',
    'Each one is a full interactive website, not a static image. Open any template and explore the whole demo before you decide.',
  ],
  [
    'Send us your details',
    'Event dates, hosts, functions, venue locations and photographs over WhatsApp. We set everything up and send you a preview.',
  ],
  [
    'Share your link',
    'Live in two working days. Send it once on WhatsApp and it reaches all your guests instantly, anywhere in the world.',
  ],
];

export const FEATURES: [string, string][] = [
  [
    'Every event & function, in order',
    'From ceremonies to reception, birthday parties to sangeet. Each with its date, time, venue and interactive Google Maps.',
  ],
  [
    'For every occasion & tradition',
    'Weddings, milestone birthdays, anniversaries, housewarmings, or cradle ceremonies. Beautifully tailored for any celebration.',
  ],
  [
    'Live countdown to the big day',
    'Counts down to the exact minute of your celebration, and keeps counting every time a guest opens the link.',
  ],
  [
    'Photo & video showcase',
    'An elegant gallery for your photos, pre-event shoots, and save-the-date teaser reels.',
  ],
  [
    'RSVPs you can count',
    'Guests reply directly on the page with their headcount. You get a real-time list instead of chasing separate messages.',
  ],
  [
    'Built for any mobile device',
    'Loads effortlessly on any phone and patchy data connection, so every guest gets a smooth, instant experience.',
  ],
];

/* The objection every competitor ignores. In this market the deciding voice
   is often a parent asking whether the older relatives will manage it, and a
   page that refuses to acknowledge print reads as evasive. */
export const REASSURANCE = {
  eyebrow: 'The question everyone asks',
  title: 'Will elders and relatives be able to open it?',
  lede:
    'It is the first thing families ask, and it is a fair question. Here is the honest answer.',
  points: [
    [
      'Nothing to install, nothing to sign into',
      'It opens like any web page when they tap the link. No app download, no account, no password required.',
    ],
    [
      'One tap from WhatsApp',
      'The link opens straight in the browser they already have. If they can open a forwarded photo, they can open this.',
    ],
    [
      'Large type, generous spacing',
      'Set to be clear and readable at arm\'s length without pinching or zooming.',
    ],
    [
      'Print a few cards as well if needed',
      'For elders who prefer a physical keepsake. The link takes care of reaching all your guests quickly without courier hassles.',
    ],
  ] as [string, string][],
};

export const PRICING = {
  eyebrow: 'Pricing',
  title: 'One price, every template.',
  lede:
    'No tiers to compare and nothing to work out. Pay once, and your invitation stays online through the celebration and long after it. No subscription, no charge per guest.',
  includes: [
    'Any template in the collection',
    'All events & functions, with venues and maps',
    'Customized for weddings, birthdays, anniversaries & all events',
    'Live countdown, photo gallery and background music',
    'Video showcase & save-the-date reel',
    'RSVP management with a live headcount',
    'Custom colors matching your event theme',
    'Unlimited edits after it goes live',
    'Live within two working days',
  ],
};

export const FAQS: [string, string][] = [
  [
    'How long does it take?',
    'Two working days from the point we have your details and photographs. If your event date is close, let us know when you message and we will prioritize it.',
  ],
  [
    'Can we change something after it is live?',
    'Yes. Send us the edit and we will update it immediately. Your link never changes, so anything already forwarded to guests keeps working.',
  ],
  [
    'Can you match our event theme or cards?',
    'Yes. Send a photograph of your card or color palette and we will customize the styling to match.',
  ],
  [
    'What types of events do you support?',
    'All celebrations! Weddings, milestone birthdays, surprise parties, anniversaries, housewarmings, cradle ceremonies, and corporate events.',
  ],
  [
    'How do guests RSVP?',
    'They tap yes or no on the page and specify how many guests are attending. You get a live running list and headcount with zero chasing.',
  ],
  [
    'Is there a limit on guests?',
    'No. The price is the same whether you send it to fifty people or thousands of guests.',
  ],
  [
    'Can we see it before we pay?',
    'You can explore every template in full from the live demo collection above. Once you order, you get a private preview with your details before sending to guests.',
  ],
  [
    'What happens to it after the event?',
    'It stays online as a digital keepsake so you and your guests can look back at memories, pictures, and videos whenever you wish.',
  ],
];

export const OFFER_FAQ: [string, string] = [
  'How long is the offer on?',
  'It is running now, and we will announce here when it ends. Whatever you pay is a one-off price, so there are never any hidden renewals.',
];

export const CLOSING = {
  title: 'Shall we start on yours?',
  lede:
    'Message us with your event date and the template you like. We will reply with a preview before you pay anything.',
  cta: 'Message us on WhatsApp',
};

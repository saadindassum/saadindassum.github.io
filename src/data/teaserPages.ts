export interface TeaserPageData {
  id: string;
  gradient: string;
  releaseDate: string;
  trackListing: string[];
  wordBank: string[];
  tip: string;
  albumArt: string;
  fontFamily: string;
  fontSrc: string;
}

export const teaserPagesData: TeaserPageData[] = [
  {
    id: 'mrc',
    gradient: 'linear-gradient(180deg, #00010f 0%, #00007c 35%, var(--dark-space) 100%)',
    releaseDate: '202X',
    trackListing: [
      '1. About 10 Seconds (202X)',
      '2. Getaway',
      '3. Mornings (202X)',
      '4. Uniquely Mine',
      '5. Just Like That (202X)',
      '6. Plastic Doll (202X)',
      '7. The Mercy of the Moon'
    ],
    wordBank: ['walls', 'neck', 'out', 'stars', 'dust', 'myself', 'thought', 'strangers', 'past', 'life', 'begin', 'meaning', 'bleed', 'young', 'extravagant'],
    tip: '<span>The Moon. The moon has always been there</span>. Even when you don\'t see it. When there\'s no one else around. As you grow old and lonely, it\'s just you and the Mercy of the Moon.',
    albumArt: '/gameplan-assets/mrc/mrc-title.png',
    fontFamily: 'sangBold',
    fontSrc: '/assets/SangBleuKingdom-Bold.otf'
  },
  {
    id: 'ris',
    gradient: 'linear-gradient(180deg, #1e2754 0%, #631503 35%, #fabf00 100%)',
    releaseDate: 'Starts Nov 2025',
    trackListing: [
      'I. Más de lo que debo',
      'II. Te quiero amar',
      'III. Jacoba Guitarras',
      'IV. <3^6 (Corazón Elevado al Sexto)',
      'V. Down by Biscayne',
      'VI. My Mistakes',
      'VII. La Contra',
      'VIII. Two O One',
      'VII. Junio en la ciudad',
    ],
    wordBank: ['tell', 'you', 'tiempo', 'ame', 'noche', 'solo', 'pelea', 'quebrar', 'eternidad', 'guapa', 'adoro', 'corazon', 'Late', 'dejar', 'otro', 'amar', 'Rosa', 'Castigo', 'piedad', 'miedo', 'jade', 'perfect', 'playa', 'digno', 'loco', 'mujer', 'jamas', 'hechizera', 'veinticuatro'],
    tip: 'Rock fused with Merengue, Tropi-pop, Bachata... Influences ranging from Olga Tanon to Jeff Lynne. It\'s <span>all out Latin 90s</span> in this insane one-brain melting pot.',
    albumArt: '/gameplan-assets/ris/ris-icon.png',
    fontFamily: 'custom-impact',
    fontSrc: '/assets/321impact.ttf'
  },
  {
    id: 'dis',
    gradient: 'linear-gradient(180deg, #ec187b 0%, var(--light-space) 35%, var(--dark-space) 100%)',
    releaseDate: '2026',
    trackListing: [
      '1. Dream in Stereo',
      '2. Glasgow Lady (202X)',
      '3. Animal Song (202X)',
      '4. Birds',
      '5. Made for Dancing',
      '6. The Horror The Horror',
      '7. Love of a Lifetime',
    ],
    wordBank: ['Groove', 'Move', 'Flame', 'Forever', 'Sleep', 'Pain', 'Stinger', 'heart', 'come', 'daylight', 'pounce', 'dark', 'venom', 'control', 'words', 'singer', 'grand'],
    tip: 'Beautiful, sharp insanity in its purest form: <span>New Wave</span>. Prepare yourself to hear pure, unadulterated love.',
    albumArt: '/gameplan-assets/dis/dis-title.png',
    fontFamily: 'custom-impact',
    fontSrc: '/assets/RETROTECH.ttf'
  },
  {
    id: 'lal',
    gradient: 'linear-gradient(180deg, #000000 0%, #000000 35%, #ec187b 100%)',
    releaseDate: '202X',
    trackListing: [
      '1. MSND',
      '2. Jessie\'s Movie',
      '3. Down By Biscayne',
      '4. Love of a Lifetime',
      '5. Last Flight to Chicago',
      '6. Forgot My Name (2026)',
      '7. Rosethorn'
    ],
    wordBank: ['love', 'lifetime', 'biscayne', 'dream', 'sorry', 'myself', 'best', 'skies', 'wishful'],
    tip: 'Do yourself a favor and read the asterisk. <span>Love</span> is likely the most beautiful part of being human, but once in a while it bites you in the ass.',
    albumArt: '/gameplan-assets/lal/lal-title.png',
    fontFamily: 'custom-impact',
    fontSrc: '/assets/ROMANTICE.otf'
  },
  {
    id: 'hrn',
    gradient: 'linear-gradient(180deg, var(--dark-space) 0%, black 35%)',
    releaseDate: '202X',
    trackListing: [
      '1. Back Then',
      '2. Getaway',
      '3. Heaven Blue',
      '4. These Jaded Men',
      '5. Uniquely Mine',
      '6. Jack and Sally',
      '7. The World Through His Eyes',
      '8. Lionheart'
    ],
    wordBank: ['change', 'want', 'world', 'chance', 'seek', 'hope', 'horizon', 'doubt', 'village'],
    tip: 'Seek hope in the horizon.',
    albumArt: '/gameplan-assets/hrn/hrn-art.jpg',
    fontFamily: 'sangBold',
    fontSrc: '/assets/SangBleuKingdom-Bold.otf'
  }
];

export const getTeaserPageData = (id: string): TeaserPageData | undefined => {
  return teaserPagesData.find(page => page.id === id);
};
export interface Character {
  id: string
  name: string
  series: string
  type: 'Series' | 'Film' | 'Anime' | 'Manga'
  year: string
  rating: string
  genre: string
  color: string
  accentColor: string
  quote: string
  shortDesc: string
  youtubeId: string
  thumbnail: string
  qualities: { title: string; description: string }[]
  wishMessage: string
  whatTheyShare: string
  tags: string[]
}

export const characters: Character[] = [
  {
    id: 'seetha',
    name: 'Seetha',
    series: 'Anand (1973)',
    type: 'Film',
    year: '1973',
    rating: 'U',
    genre: 'Telugu Cinema · Drama · Classic',
    color: '#1b0000',
    accentColor: '#ff8a65',
    quote: 'Strength is not in the voice — it is in what you carry silently.',
    shortDesc: 'Telugu cinema\'s timeless portrait of dignified strength.',
    youtubeId: 'lSOmN6VGqo4',
    thumbnail: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=600&q=80',
    qualities: [
      { title: 'The Calm Presence', description: 'Some people speak loudly. Some people just make places feel peaceful. You remind me a little of Seetha from Anand. Simple outside. Strong inside.' }
    ],
    wishMessage: 'May life slowly become softer and kinder for you.',
    whatTheyShare: 'Simple outside. Strong inside. You make places feel peaceful without speaking loudly.',
    tags: ['Grace', 'Dignity', 'Depth', 'Endurance'],
  },
  {
    id: 'bhavana',
    name: 'Bhavana',
    series: 'Kerintha',
    type: 'Film',
    year: '2015',
    rating: 'U',
    genre: 'Telugu · Romance · Drama',
    color: '#0d1a0d',
    accentColor: '#a5d6a7',
    quote: 'Friendship means being there even in complete silence.',
    shortDesc: 'The warm, reliable comfort person of the group.',
    youtubeId: 'aP2idaZAFtI',
    thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
    qualities: [
      { title: 'Comfort Person', description: 'Some people are easy to talk to even after long silence. That energy reminded me of Bhavana.' }
    ],
    wishMessage: 'May you always find good people around you.',
    whatTheyShare: 'You hold that precious, rare comfort energy where gaps of silence never change the warmth.',
    tags: ['Warm', 'Reliable', 'Comfort', 'True'],
  },
  {
    id: 'chitti',
    name: 'Chitti',
    series: 'Jathi Ratnalu',
    type: 'Film',
    year: '2021',
    rating: 'U/A',
    genre: 'Telugu · Comedy · Blockbuster',
    color: '#1a0a00',
    accentColor: '#ffcc02',
    quote: 'Random moments make the best memories.',
    shortDesc: 'The straight-faced anchor of accidental legendary comedy.',
    youtubeId: 'Fy5dSwJNLjM',
    thumbnail: 'https://www.imdb.com/title/tt11306376/mediaviewer/rm1658377729?auto=format&fit=crop&w=600&q=80',
    qualities: [
      { title: 'Accidental Comedy', description: 'You look serious sometimes. But random moments become funny around you. Unintentionally creates comedy scenes.' }
    ],
    wishMessage: 'May life give you more laughter than stress.',
    whatTheyShare: 'Unintentionally creates comedy scenes. You look serious but bring massive random humor.',
    tags: ['Funny', 'Accidental', 'Joyful', 'Authentic'],
  },
  {
    id: 'swathi',
    name: 'Swathi',
    series: 'Oh Baby',
    type: 'Film',
    year: '2019',
    rating: 'U',
    genre: 'Telugu · Fantasy · Comedy',
    color: '#0a0a1f',
    accentColor: '#b39ddb',
    quote: 'Life is too short to wear boring clothes.',
    shortDesc: 'Effortless style mixed with absolute main character energy.',
    youtubeId: 'BLEKFEqf1AA',
    thumbnail: 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e47?auto=format&fit=crop&w=600&q=80',
    qualities: [
      { title: 'Main Character Dressing Sense', description: 'You genuinely dress well without trying too hard. Meanwhile others still fighting with color combinations.' }
    ],
    wishMessage: 'May your mirror always support your confidence.',
    whatTheyShare: 'Main Character Dressing Sense. Meanwhile others are still out here fighting with basic color combinations.',
    tags: ['Stylish', 'Confident', 'Vibrant', 'Charming'],
  },
  {
    id: 'hasini',
    name: 'Hasini',
    series: 'Bommarillu',
    type: 'Film',
    year: '2006',
    rating: 'U',
    genre: 'Telugu · Romance · Cult Classic',
    color: '#001a0d',
    accentColor: '#80cbc4',
    quote: 'Laughter is best when it is shared over the smallest things.',
    shortDesc: 'The ultimate easygoing vibe creator.',
    youtubeId: 'G5B1mIfQuo4',
    thumbnail: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
    qualities: [
      { title: 'The Effortlessly Comfortable Person', description: 'Hasini had this easygoing energy where people naturally felt comfortable around her. You also have that vibe sometimes — calm, casual, and somehow making random moments fun. Looks responsible outside. But fully capable of laughing at the dumbest things for 20 minutes.' }
    ],
    wishMessage: 'Hope life gives you more happy trips, good people, and moments worth remembering.',
    whatTheyShare: 'Looks responsible outside, but fully capable of losing it and laughing at the dumbest things for 20 straight minutes.',
    tags: ['Easygoing', 'Happy', 'Fun', 'Comfortable'],
  },
  {
    id: 'chitra',
    name: 'Chitra',
    series: 'Pelli Choopulu',
    type: 'Film',
    year: '2016',
    rating: 'U',
    genre: 'Telugu · Rom-Com · Modern',
    color: '#0a0d1a',
    accentColor: '#ef9a9a',
    quote: 'I want a life built entirely on my own terms.',
    shortDesc: 'Ambitious, fiercely focused, and allergic to routine.',
    youtubeId: 'MGRm4IzK1SQ',
    thumbnail: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=600&q=80',
    qualities: [
      { title: 'Independent Mode', description: 'Chitra had plans. You also feel like someone who wants more from life than just routine. Probably mentally resigned from job 47 times already.' }
    ],
    wishMessage: 'Hope you find work that feels exciting again.',
    whatTheyShare: 'Independent Mode. Has likely mentally resigned from their corporate job approximately 47 times already.',
    tags: ['Independent', 'Ambitious', 'Focused', 'Driven'],
  },
  {
    id: 'ramulamma',
    name: 'Ramulamma',
    series: 'Osey Ramulamma',
    type: 'Film',
    year: '1997',
    rating: 'U/A',
    genre: 'Telugu · Folk · Revolution',
    color: '#1a0a00',
    accentColor: '#ffcc02',
    quote: 'The earth does not bend — and neither do I.',
    shortDesc: 'The silent powerhouse holding systems together.',
    youtubeId: 'Fy5dSwJNLjM',
    thumbnail: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?auto=format&fit=crop&w=600&q=80',
    qualities: [
      { title: 'The Silent Fighter', description: 'You don’t unnecessarily show strength. But somehow you handle things quietly without stopping. Low battery. High responsibility.' }
    ],
    wishMessage: 'Hope one day life gives you rest without guilt.',
    whatTheyShare: 'The Silent Fighter. Operating status: permanently on low battery, but consistently matching high responsibility.',
    tags: ['Revolutionary', 'Authentic', 'Fierce', 'Rooted'],
  },
  {
    id: 'arya-stark',
    name: 'Arya Stark',
    series: 'Game of Thrones',
    type: 'Series',
    year: '2011',
    rating: 'TV-MA',
    genre: 'Fantasy · Drama · Epic',
    color: '#0d1b2a',
    accentColor: '#4fc3f7',
    quote: 'Not today.',
    shortDesc: 'Independent tactical survivalist who bypasses obstacles.',
    youtubeId: 'rlR4PJn8b8I',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    qualities: [
      { title: 'Independent Arc', description: 'Arya never waited for perfect situations. That confidence reminded me of you a little. Would probably survive apocalypse with one water bottle and sarcasm.' }
    ],
    wishMessage: 'May you always trust yourself more.',
    whatTheyShare: 'Independent Arc. Fully certified to survive a total global apocalypse with exactly one water bottle and pure sarcasm.',
    tags: ['Bold', 'Survivor', 'Fearless', 'Strategic'],
  },
  {
    id: 'tara',
    name: 'Tara',
    series: 'OK Kanmani',
    type: 'Film',
    year: '2015',
    rating: 'U',
    genre: 'Tamil · Romance · Urban Classic',
    color: '#1a0000',
    accentColor: '#ef5350',
    quote: 'Life should feel alive, not just calculated and stable.',
    shortDesc: 'The modern balance of sharp maturity and pure freedom.',
    youtubeId: 'vzVzIsPnrdo',
    thumbnail: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80',
    qualities: [
      { title: 'Free Spirit Energy', description: 'Tara had that balance of maturity and freedom. You also feel like someone who wants a life that feels alive, not just stable. Probably says ‘it’s fine’ and then overthinks at 2 AM.' }
    ],
    wishMessage: 'Hope you travel more, laugh more, and feel more free every year.',
    whatTheyShare: 'Free Spirit Energy. Frequently states "it\'s completely fine" and then proceeds to heavily overthink at 2 AM.',
    tags: ['Free Spirit', 'Maturity', 'Modern', 'Vibrant'],
  }
]

export const profiles = [
  { id: 'lakshmi', name: 'Lakshmi', color: '#E50914', initials: 'L', emoji: '♛', theme: 'gold' },
  { id: 'peetha', name: 'Peetha', color: '#1565c0', initials: 'P', emoji: '★', theme: 'blue' },
  { id: 'gajini-sister', name: "Gajini's Sister", color: '#6a1b9a', initials: 'G', emoji: '✦', theme: 'purple' },
  { id: 'nolan', name: 'Photographer Nolan', color: '#2e7d32', initials: 'N', emoji: '◉', theme: 'green' }
]

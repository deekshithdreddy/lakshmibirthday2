# Lakshmix — A Cinematic Birthday Tribute

A Netflix-style tribute website built for Lakshmi's birthday, celebrating her journey, courage, and achievement of the decade's highest package. The site uses "L" where Netflix uses "N", for **Lakshmix**.

## What It Is

A fully interactive, cinematic web experience that includes:

- **Profile selection page** — "Who's Watching?" with 4 profiles: Lakshmi, Peetha, Gajini's Sister, and Photographer Nolan
- **Home page** — Hero section with a poetic, Trivikram/Sirivennela-style description of Lakshmi; character carousels; birthday wishes at the bottom
- **Character detail pages** — 10 legendary strong women characters, each with a YouTube embed, their traits mapped to Lakshmi's qualities, and a personal wish message
- **Locked profile pages** — Humorous messages when non-Lakshmi profiles are selected

## Characters Featured

Black Widow, Arya Stark, Daenerys (Mother of Dragons), Seetha (Anand), Ramulamma, Setsuko (Grave of the Fireflies), Mikasa Ackerman (Attack on Titan), Nausicaä (Studio Ghibli), Violet Evergarden, Erza Scarlet (Fairy Tail)

## Tech Stack

- **Framework**: TanStack Start (React + TanStack Router)
- **Styling**: Tailwind CSS v4 + custom CSS with Netflix-inspired design system
- **Fonts**: Bebas Neue (display) + Cormorant Garamond (serif/cinematic) + Inter (body)
- **Deployment**: Netlify (free tier — no backend, no database required)

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization

- **Videos**: Replace `youtubeId` values in `src/data/characters.ts` with personal video IDs
- **Photos**: Add actual character images by setting backgrounds in `char-card-bg` elements
- **Wishes**: Edit wish text in `src/routes/home.tsx` in the `WishesSection` component
- **Cinematic description**: Edit the `hero-tagline` in `src/routes/home.tsx`
"# Lflix" 
"# Lflix" 

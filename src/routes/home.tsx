import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { characters } from '../data/characters'

export const Route = createFileRoute('/home')({
  component: HomePage,
})

const cardColors: Record<string, { bg: string; accent: string; icon: string }> = {
  'arya-stark': { bg: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)', accent: '#4fc3f7', icon: '⚔️' },
  'daenerys': { bg: 'linear-gradient(135deg, #1a0a2e 0%, #3a1060 100%)', accent: '#e040fb', icon: '🐉' },
  'black-widow': { bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 100%)', accent: '#ef5350', icon: '🕷' },
  'seetha': { bg: 'linear-gradient(135deg, #1b0000 0%, #3d1500 100%)', accent: '#ff8a65', icon: '🌹' },
  'setsuko': { bg: 'linear-gradient(135deg, #0d1a0d 0%, #1a3320 100%)', accent: '#a5d6a7', icon: '🌟' },
  'ramulamma': { bg: 'linear-gradient(135deg, #1a0a00 0%, #3d2000 100%)', accent: '#ffcc02', icon: '🔥' },
  'mikasa': { bg: 'linear-gradient(135deg, #0a0d1a 0%, #1a1535 100%)', accent: '#ef9a9a', icon: '🗡' },
  'nausicaa': { bg: 'linear-gradient(135deg, #001a0d 0%, #003322 100%)', accent: '#80cbc4', icon: '🌿' },
  'violet': { bg: 'linear-gradient(135deg, #0a0a1f 0%, #1a1545 100%)', accent: '#b39ddb', icon: '✉️' },
  'erza': { bg: 'linear-gradient(135deg, #1a0000 0%, #3d0000 100%)', accent: '#ef5350', icon: '🛡' },
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`lx-nav ${scrolled ? 'scrolled' : ''}`} style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: 'clamp(10px, 2vw, 20px) clamp(15px, 4vw, 40px)'
    }}>
      <div className="lx-logo" style={{ cursor: 'pointer', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 'bold', color: 'var(--lx-red, #E50914)' }} onClick={() => navigate({ to: '/home' })}>
        LAKSHMIX
      </div>
      <div className="lx-nav-links responsive-nav-links" style={{ display: 'flex', gap: 'clamp(10px, 2vw, 20px)' }}>
        <a className="lx-nav-link" href="#characters">Universe</a>
        <a className="lx-nav-link" href="#wishes">Wishes</a>
        <a className="lx-nav-link" href="#wishes">Tribute</a>
        <a className="lx-nav-link" onClick={e => { e.preventDefault(); navigate({ to: '/my-wishes' }) }} href="/my-wishes">My Wishes</a>
      </div>
      <div className="lx-nav-right" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.7, cursor: 'pointer' }}>
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <div className="lx-nav-avatar" onClick={() => navigate({ to: '/' })} style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#333', borderRadius: '4px', cursor: 'pointer' }}>
          L
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const heroImg = '/images/lakshmiintemple.png?auto=format&fit=crop&w=1600&q=80'; 
  return (
    <section
      className="hero saga-hero"
      style={{
        position: 'relative',
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'flex-end',
        background: '#141414',
      }}
    >
      <img
        src={heroImg}
        alt="Cinematic Heroine"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          filter: 'brightness(0.6) saturate(1.2) contrast(1.1)',
          transition: 'filter 0.5s',
        }}
        loading="lazy"
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          background: 'url(https://www.transparenttextures.com/patterns/asfalt-light.png)',
          opacity: 0.18,
          mixBlendMode: 'overlay',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}>
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 6 + Math.random() * 8,
              height: 6 + Math.random() * 8,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.13)',
              filter: 'blur(1.5px)',
              animation: `floatY 7s ease-in-out infinite ${i * 0.3}s`,
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          zIndex: 4,
          background: 'linear-gradient(180deg, rgba(20,20,20,0) 20%, rgba(20,20,20,0.95) 90%, #141414 100%)',
        }}
      />
      <div
        className="saga-hero-content"
        style={{
          position: 'relative',
          zIndex: 5,
          color: 'white',
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 6vw)',
          maxWidth: '800px',
          textShadow: '0 2px 16px #000, 0 1px 2px #000',
        }}
      >
        <div className="saga-hero-category fade-in-up stagger-1" style={{ fontSize: 'clamp(0.8rem, 2vw, 1.1rem)', opacity: 0.85, letterSpacing: '2px' }}>
          LAKSHMI SAGA
        </div>
        <h1 className="saga-hero-title fade-in-up stagger-2" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 800, letterSpacing: '-1px', margin: '0.2rem 0' }}>
          Season 22
        </h1>
        <div className="saga-hero-subtitle fade-in-up stagger-3" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: 'clamp(1rem, 3vw, 1.5rem)' }}>
          Under Exploration
        </div>
        <div className="saga-hero-actions fade-in-up stagger-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <button
            className="saga-btn saga-btn-primary"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', padding: '0.6em 1.5em', borderRadius: '4px', fontWeight: 600, background: 'white', color: 'black', border: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span style={{ fontSize: '1.2em', marginRight: 8 }}>▶</span> Play
          </button>
          <button
            className="saga-btn saga-btn-secondary"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', padding: '0.6em 1.5em', borderRadius: '4px', fontWeight: 600, background: 'rgba(109, 109, 110, 0.7)', color: 'white', border: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => alert('Added to your list!')}
          >
            <span style={{ fontSize: '1.2em', marginRight: 8 }}>＋</span> My List
          </button>
        </div>
        <div className="saga-hero-description fade-in-up" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', opacity: 0.92, marginBottom: '1.5rem', fontFamily: 'var(--font-body, Inter, sans-serif)', lineHeight: 1.5 }}>
          A series containing unexpected plot twists, emotional damage, good outfits, delayed success arcs, whale dreams, and strong main-character energy.
        </div>
      </div>
    </section>
  );
}

function CharacterCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    const amount = window.innerWidth > 768 ? 700 : 300
    trackRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <div id="characters" style={{ paddingTop: '2rem' }}>
      <div className="content-section" style={{ marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ padding: '0 clamp(1rem, 4vw, 4%)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700 }}>
          She Contains Multitudes
          <span className="section-title-accent" style={{ color: 'var(--lx-muted, #888)', fontSize: '0.8em', marginLeft: '10px' }}>· Icons of Strength</span>
        </h2>
        <p style={{ padding: '0 clamp(1rem, 4vw, 4%)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: 'var(--lx-muted, #aaa)', marginBottom: '1.5rem' }}>
          Click any card to discover which part of Lakshmi lives in each legend
        </p>
        <div className="carousel-container" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <button className="carousel-btn carousel-btn-left desktop-only-btn" onClick={() => scroll('left')} style={{ position: 'absolute', left: '1vw', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', borderRadius: '50%', padding: '10px', cursor: 'pointer' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
          </button>

          <div className="carousel-track hide-scrollbar" ref={trackRef} style={{ display: 'flex', overflowX: 'auto', gap: 'clamp(10px, 2vw, 20px)', padding: '10px clamp(1rem, 4vw, 4%)', scrollBehavior: 'smooth' }}>
            {characters.map((char) => (
              <div
                key={char.id}
                className="char-card cinematic-card"
                onClick={() => navigate({ to: '/character/$id', params: { id: char.id } })}
                style={{ 
                  cursor: 'pointer', 
                  position: 'relative', 
                  overflow: 'hidden', 
                  borderRadius: '8px', 
                  background: '#18181b', 
                  flex: '0 0 clamp(200px, 45vw, 280px)', 
                  aspectRatio: '2/3',
                  transition: 'transform 0.3s cubic-bezier(.4,2,.3,1), box-shadow 0.3s', 
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                }}
              >
                <img
                  src={char.thumbnail}
                  alt={char.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.85) saturate(1.1)', transition: 'filter 0.3s' }}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0.6) 40%, transparent 100%)', zIndex: 2 }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 3, color: 'white', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
                  <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>{char.type}</div>
                  <div style={{ fontWeight: 800, fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', margin: '4px 0' }}>{char.name}</div>
                  <div style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', opacity: 0.7, marginBottom: 8 }}>{char.series}</div>
                  <div style={{ fontStyle: 'italic', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', opacity: 0.9, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    &ldquo;{char.quote}&rdquo;
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn carousel-btn-right desktop-only-btn" onClick={() => scroll('right')} style={{ position: 'absolute', right: '1vw', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', borderRadius: '50%', padding: '10px', cursor: 'pointer' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9,18 15,12 9,6"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="content-section" style={{ marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ padding: '0 clamp(1rem, 4vw, 4%)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700 }}>
          Anime Legends
          <span className="section-title-accent" style={{ color: 'var(--lx-muted, #888)', fontSize: '0.8em', marginLeft: '10px' }}>· From the East</span>
        </h2>
        <div className="carousel-container">
          <div className="carousel-track hide-scrollbar" style={{ display: 'flex', overflowX: 'auto', gap: 'clamp(10px, 2vw, 20px)', padding: '10px clamp(1rem, 4vw, 4%)' }}>
            {characters.filter(c => c.type === 'Anime' || c.type === 'Manga').map((char) => {
              const colors = cardColors[char.id] ?? { bg: 'linear-gradient(135deg, #1a1a1a, #333)', accent: '#e5e5e5', icon: '✦' }
              return (
                <div
                  key={char.id}
                  className="char-card cinematic-card"
                  style={{ flex: '0 0 clamp(160px, 40vw, 220px)', aspectRatio: '2/3', position: 'relative', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}
                  onClick={() => navigate({ to: '/character/$id', params: { id: char.id } })}
                >
                  <div style={{ position: 'absolute', inset: 0, background: colors.bg }} />
                  <div style={{ position: 'absolute', top: '15px', right: '15px', fontSize: 'clamp(2rem, 5vw, 3rem)', color: colors.accent, opacity: 0.3 }}>{colors.icon}</div>
                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(1rem, 3vw, 1.5rem)', background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%)', color: 'white' }}>
                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{char.type}</div>
                    <div style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: 'bold', margin: '4px 0' }}>{char.name}</div>
                    <div style={{ fontSize: '0.85rem', opacity: 0.9, fontStyle: 'italic', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>&ldquo;{char.quote}&rdquo;</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function FeaturedBanner() {
  const navigate = useNavigate()
  return (
    <div
      className="featured-banner"
      style={{ margin: 'clamp(1rem, 4vw, 3rem) clamp(1rem, 4vw, 4%)', position: 'relative', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', background: '#0a0a0a', display: 'flex', alignItems: 'center', padding: 'clamp(1.5rem, 4vw, 3rem)', border: '1px solid #333' }}
      onClick={() => navigate({ to: '/character/$id', params: { id: 'arya-stark' } })}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 50%, rgba(229,9,20,0.15) 0%, transparent 60%)' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 3vw, 2rem)', position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', padding: 'clamp(10px, 2vw, 20px)' }}>⚔️</div>
        <div>
          <div style={{ color: '#E50914', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Featured Character · Editor's Pick</div>
          <div style={{ color: 'white', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '8px' }}>ARYA STARK</div>
          <div style={{ color: '#aaa', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', fontStyle: 'italic', maxWidth: '600px' }}>
            &ldquo;She walked into rooms that were not built for her, and left them changed forever.&rdquo;
          </div>
        </div>
      </div>
    </div>
  )
}

function WishesSection() {
  const wishes = [
    {
      icon: '🦀',
      title: "A Crab's Wisdom",
      text: 'The crab\'s greatest power is its sideways walk — it was NOT the plan. But it worked. Just like every "detour" in your career that somehow landed you at the highest package. The crab nods. The crab approves. The crab has been watching your glow-up from the ocean floor. Happy Birthday! 🦀',
    },
    {
      icon: '🌊',
      title: 'The Ocean Wrote In',
      text: 'You really give ‘beach person trapped in corporate life’ energy. Not every person looks this natural near sunsets and sea views. Happy Birthday Lakshmi. Hope life gives you more peaceful trips and less unnecessary stress. 🌊',
    },
    {
      icon: '🐚',
      title: 'Shell Philosophy',
      text: 'Somehow your random photos always look like they belong in Pinterest boards 😭 Even casual moments become aesthetic around you. Wishing you a year full of good memories, beautiful places, and better chapters ahead. 🐚',
    },
    {
      icon: '🐋',
      title: 'Whale Energy (Certified)',
      text: 'Whales don\'t shrink for fish. Whales breach the surface dramatically and everyone on the boat loses their minds. That\'s just Tuesday for you. The highest package of the decade didn\'t happen because you played small. Big brain. Big moves. Big whale energy. Happy Birthday from the deep! 🐋',
    },
    {
      icon: '🌌',
      title: 'The Sky Reacted',
      text: 'The sky said: "You genuinely look like someone who should be travelling more than working. That’s it, that’s the wish 😭 Happy Birthday Lakshmi. Hope your life becomes bigger than your routine." 🌌',
    },
    {
      icon: '🍞',
      title: 'Bread says',
      text: 'I seriously don’t know what personal problem you have with me 😭 I’ve been ignored for years for absolutely no reason. Still… Happy Birthday Lakshmi. May your future be softer than your food choices. 🍞',
    },
    {
      icon: '🧠',
      title: 'Brain Report: Outstanding',
      text: 'Your brain currently runs: 47 open tabs, a mental archive of every conversation since 2019, three interview answers loaded and ready, a full emotional support system for 6 people, AND a running list of memes to send. Scientists call this galaxy-brain. We call it Lakshmi. Peer reviewed. Published. Cited. 🧠',
    },
    {
      icon: '✝️',
      title: 'Jesus Christ (He Sent Word)',
      text: 'When Jesus turned water into wine, people were absolutely shook for centuries. You turned doubt, wrong jobs, waiting, and "you\'re overqualified" into the decade\'s highest package. He sent a message: "Respect. The miracles committee is taking notes. Also — the whale, the crab, and the ocean say hi. Happy Birthday, queen." ✝️',
    },
  ]

  return (
    <section id="wishes" style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 4%)', background: '#0a0a0a' }}>
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', textAlign: 'center', marginBottom: '10px' }}>
        <span style={{ color: '#E50914' }}>W</span>ishes From Around The World
      </h2>
      <p style={{ color: '#aaa', textAlign: 'center', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>The ocean, the sky, the crab, the whale, and Jesus — they all showed up</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 30vw, 350px), 1fr))', gap: 'clamp(1rem, 3vw, 2rem)', marginBottom: '4rem' }}>
        {wishes.map((wish, i) => (
          <div key={i} style={{ background: '#141414', padding: 'clamp(1.5rem, 4vw, 2rem)', borderRadius: '8px', border: '1px solid #222' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>{wish.icon}</div>
            <div style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>{wish.title}</div>
            <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: 1.6 }}>{wish.text}</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'linear-gradient(135deg, #1a0505, #000)', padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '12px', border: '1px solid #330000', textAlign: 'center' }}>
        <p style={{ color: 'white', fontSize: 'clamp(1rem, 3vw, 1.3rem)', lineHeight: 1.8, fontStyle: 'italic', maxWidth: '800px', margin: '0 auto' }}>
          The crab walked sideways to get here.<br />
          The ocean sent its deepest waves.<br />
          The shell held its breath and whispered your name.<br />
          The whale breached the surface for you.<br />
          The sky cleared entirely — no notes.<br />
          The brain sent a 47-tab report.<br />
          And Jesus Christ personally confirmed:<br />
          <br />
          <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#E50914' }}>You are the miracle this year.</span><br />
          <br />
          Happy Birthday, Lakshmi.<br />
          The universe is taking notes.
        </p>
        <div style={{ color: '#888', marginTop: '2rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>— From Everyone Who Watched You Become This —</div>
      </div>
    </section>
  )
}

function Footer() {
  const navigate = useNavigate()
  return (
    <footer style={{ background: '#000', padding: 'clamp(2rem, 5vw, 4rem) 4%', textAlign: 'center', borderTop: '1px solid #222' }}>
      <div onClick={() => navigate({ to: '/' })} style={{ cursor: 'pointer', color: '#E50914', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        LAKSHMIX
      </div>
      <div style={{ color: '#888', fontSize: 'clamp(0.85rem, 2vw, 1rem)', marginBottom: '0.5rem' }}>
        A cinematic tribute to courage, intelligence, and the decade&apos;s highest package.
      </div>
      <div style={{ color: '#555', fontSize: '0.8rem' }}>
        Made with love · 2025 · Lakshmi&apos;s Universe
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#141414', overflowX: 'hidden' }}>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .cinematic-card:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 10px 30px rgba(229, 9, 20, 0.4) !important;
          border-color: rgba(229, 9, 20, 0.5) !important;
        }
        @media (max-width: 768px) {
          .responsive-nav-links {
            display: none !important;
          }
          .desktop-only-btn {
            display: none !important;
          }
          .search-icon {
            display: none !important;
          }
        }
      `}</style>
      
      <Navbar />
      <Hero />
      <FeaturedBanner />
      <CharacterCarousel />
      <WishesSection />
      <Footer />
    </div>
  )
}
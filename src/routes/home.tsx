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
    <nav className={`lx-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="lx-logo" style={{ cursor: 'pointer' }} onClick={() => navigate({ to: '/home' })}>LAKSHMIX</div>
      <div className="lx-nav-links">
        <a className="lx-nav-link" href="#characters">Universe</a>
        <a className="lx-nav-link" href="#wishes">Wishes</a>
        <a className="lx-nav-link" href="#wishes">Tribute</a>
        <a className="lx-nav-link" onClick={e => { e.preventDefault(); navigate({ to: '/my-wishes' }) }} href="/my-wishes">My Wishes</a>
      </div>
      <div className="lx-nav-right">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.7, cursor: 'pointer' }}>
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <div className="lx-nav-avatar" onClick={() => navigate({ to: '/' })}>L</div>
      </div>
    </nav>
  )
}

function Hero() {
  // Cinematic HD image (replace with Lakshmi later)
  const heroImg = '/images/lakshmiintemple.png?auto=format&fit=crop&w=1600&q=80'; // Example: elegant portrait
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
        minHeight: '56vw', // 21:9 aspect ratio
        maxHeight: '80vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        background: '#141414',
      }}
    >
      {/* Cinematic HD image */}
      <img
        src={heroImg}
        alt="Cinematic Heroine"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          filter: 'brightness(0.7) saturate(1.1) contrast(1.1)',
          transition: 'filter 0.5s',
        }}
        loading="lazy"
      />
      {/* Movie grain overlay */}
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
      {/* Floating particles (simple, subtle) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      >
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
      {/* Gradient overlays for text readability */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          zIndex: 4,
          background:
            'linear-gradient(180deg, rgba(20,20,20,0.1) 40%, rgba(20,20,20,0.88) 100%)',
        }}
      />
      {/* Cinematic text overlay */}
      <div
        className="saga-hero-content"
        style={{
          position: 'relative',
          zIndex: 5,
          color: 'white',
          padding: '3vw 6vw 6vw 6vw',
          maxWidth: '700px',
          textShadow: '0 2px 16px #000, 0 1px 2px #000',
        }}
      >
        <div className="saga-hero-category fade-in-up stagger-1" style={{ fontSize: '1.1rem', opacity: 0.85 }}>
          LAKSHMI SAGA
        </div>
        <h1 className="saga-hero-title fade-in-up stagger-2" style={{ fontSize: '3.2rem', fontWeight: 700, letterSpacing: '-1px', margin: '0.5rem 0' }}>
          Season 22
        </h1>
        <div className="saga-hero-subtitle fade-in-up stagger-3" style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
          Under Exploration
        </div>
        <div className="saga-hero-actions fade-in-up stagger-4" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <button
            className="saga-btn saga-btn-primary"
            style={{ fontSize: '1.1rem', padding: '0.7em 2em', borderRadius: '0.4em', fontWeight: 600 }}
            onClick={() => document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span style={{ fontSize: 20, marginRight: 8 }}>▶</span> Play
          </button>
          <button
            className="saga-btn saga-btn-secondary"
            style={{ fontSize: '1.1rem', padding: '0.7em 2em', borderRadius: '0.4em', fontWeight: 600 }}
            onClick={() => alert('Added to your list!')}
          >
            <span style={{ fontSize: 20, marginRight: 8 }}>＋</span> My List
          </button>
        </div>
        <div className="saga-hero-description fade-in-up" style={{ fontSize: '1.1rem', opacity: 0.92, marginBottom: '1.5rem', fontFamily: 'var(--font-body, Inter, sans-serif)' }}>
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
    const amount = 700
    trackRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <div id="characters">
      <div className="content-section">
        <h2 className="section-title">
          She Contains Multitudes
          <span className="section-title-accent">· Icons of Strength</span>
        </h2>
        <p style={{ padding: '0 4%', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--lx-muted)', marginBottom: '1rem' }}>
          Click any card to discover which part of Lakshmi lives in each legend
        </p>
        <div className="carousel-container">
          <button className="carousel-btn carousel-btn-left" onClick={() => scroll('left')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
          </button>

          <div className="carousel-track" ref={trackRef}>
            {characters.map((char) => (
              <div
                key={char.id}
                className="char-card"
                onClick={() => navigate({ to: '/character/$id', params: { id: char.id } })}
                style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', borderRadius: '1.2em', boxShadow: '0 4px 32px #0007', background: '#18181b', margin: '0 1.5vw', minWidth: 260, maxWidth: 320, flex: '0 0 280px', transition: 'transform 0.3s cubic-bezier(.4,2,.3,1)', border: '2px solid #222', }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08) translateY(-8px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
              >
                <img
                  src={char.thumbnail}
                  alt={char.name}
                  style={{ width: '100%', height: 180, objectFit: 'cover', objectPosition: 'center', borderTopLeftRadius: '1.2em', borderTopRightRadius: '1.2em', filter: 'brightness(0.92) saturate(1.1)', transition: 'filter 0.3s' }}
                  loading="lazy"
                />
                <div className="char-card-gradient" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '60%', background: 'linear-gradient(0deg, #18181b 80%, transparent 100%)', zIndex: 2 }} />
                <div className="char-card-content" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 3, color: 'white', padding: '1.2em 1.2em 1.5em 1.2em', textShadow: '0 2px 12px #000' }}>
                  <div className="char-card-type" style={{ fontSize: '0.95em', opacity: 0.7, marginBottom: 2 }}>{char.type}</div>
                  <div className="char-card-name" style={{ fontWeight: 700, fontSize: '1.3em', marginBottom: 2 }}>{char.name}</div>
                  <div className="char-card-series" style={{ fontSize: '1em', opacity: 0.8, marginBottom: 6 }}>{char.series}</div>
                  <div className="char-card-quote" style={{ fontStyle: 'italic', fontSize: '1em', opacity: 0.9, marginBottom: 6 }}>&ldquo;{char.quote}&rdquo;</div>
                  {char.whatTheyShare && <div className="char-card-share" style={{ fontSize: '0.97em', color: '#e5e5e5', marginBottom: 6 }}>{char.whatTheyShare}</div>}
                  <div className="char-card-wish" style={{ fontSize: '0.97em', color: '#ffd700', marginTop: 8 }}>{char.wishMessage}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn carousel-btn-right" onClick={() => scroll('right')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9,18 15,12 9,6"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Second row — different grouping */}
      <div className="content-section">
        <h2 className="section-title">
          Anime Legends
          <span className="section-title-accent">· From the East</span>
        </h2>
        <div className="carousel-container">
          <div className="carousel-track">
            {characters.filter(c => c.type === 'Anime' || c.type === 'Manga').map((char) => {
              const colors = cardColors[char.id] ?? { bg: 'linear-gradient(135deg, #1a1a1a, #333)', accent: '#e5e5e5', icon: '✦' }
              return (
                <div
                  key={char.id}
                  className="char-card"
                  style={{ flex: '0 0 200px', height: '300px' }}
                  onClick={() => navigate({ to: '/character/$id', params: { id: char.id } })}
                >
                  <div className="char-card-bg" style={{ background: colors.bg }} />
                  <div className="char-card-gradient" />
                  <div className="char-card-type">{char.type}</div>
                  <div className="char-card-icon" style={{ fontSize: '4rem', color: colors.accent }}>{colors.icon}</div>
                  <div className="char-card-content">
                    <div className="char-card-series">{char.series}</div>
                    <div className="char-card-name">{char.name}</div>
                    <div className="char-card-quote">&ldquo;{char.quote}&rdquo;</div>
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
      onClick={() => navigate({ to: '/character/$id', params: { id: 'arya-stark' } })}
    >
      <div className="featured-banner-bg" />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 80% 50%, rgba(229,9,20,0.15) 0%, transparent 60%)',
        }}
      />
      <div className="featured-banner-content">
        <div className="featured-banner-icon">⚔️</div>
        <div>
          <div className="featured-banner-label">Featured Character · Editor's Pick</div>
          <div className="featured-banner-title">ARYA STARK</div>
          <div className="featured-banner-text">
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
      title: 'A Crab\'s Wisdom',
      text: 'The crab\'s greatest power is its sideways walk — it was NOT the plan. But it worked. Just like every "detour" in your career that somehow landed you at the highest package. The crab nods. The crab approves. The crab has been watching your glow-up from the ocean floor. Happy Birthday! 🦀',
    },
    {
      icon: '🌊',
      title: 'The Ocean Wrote In',
      text: 'You are the ocean. Deep, mysterious, and absolutely capable of wrecking things when underestimated. The ocean didn\'t ask for a performance review. It didn\'t need validation. It just... went. Big. Forever. That\'s you. Happy Birthday from the deep end — you magnificent, chaotic, beautiful wave.',
    },
    {
      icon: '🐚',
      title: 'Shell Philosophy',
      text: 'The shell carries its entire home everywhere it goes and never apologizes for its existence. Put one to your ear — it whispers: "You got the bag, queen. You always had it." The ocean agrees. The crab endorses this message. The whale has left a reaction. 🐚',
    },
    {
      icon: '🐋',
      title: 'Whale Energy (Certified)',
      text: 'Whales don\'t shrink for fish. Whales breach the surface dramatically and everyone on the boat loses their minds. That\'s just Tuesday for you. The highest package of the decade didn\'t happen because you played small. Big brain. Big moves. Big whale energy. Happy Birthday from the deep! 🐋',
    },
    {
      icon: '🌌',
      title: 'The Sky Reacted',
      text: 'The sky said: "I am infinite, above everything, limitless and vast." You said: "That\'s cute." *sky has left the chat.* Seriously though — you\'ve outgrown every ceiling they built. Every room that was "too advanced" for you became your lobby. The sky is not the limit. It\'s your starting point.',
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
    <section id="wishes" className="wishes-section">
      <h2 className="wishes-title fade-in-up">
        <span style={{ color: 'var(--lx-red)' }}>W</span>ishes From Around The World
      </h2>
      <p className="wishes-subtitle">The ocean, the sky, the crab, the whale, and Jesus — they all showed up</p>

      <div className="wish-cards-grid">
        {wishes.map((wish, i) => (
          <div key={i} className="wish-card fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="wish-card-icon" style={{ color: 'var(--lx-red)' }}>{wish.icon}</div>
            <div className="wish-card-title">{wish.title}</div>
            <p className="wish-card-text">{wish.text}</p>
          </div>
        ))}
      </div>

      <div className="main-wish fade-in-up" style={{ animationDelay: '0.6s' }}>
        <p className="main-wish-text">
          The crab walked sideways to get here.<br />
          The ocean sent its deepest waves.<br />
          The shell held its breath and whispered your name.<br />
          The whale breached the surface for you.<br />
          The sky cleared entirely — no notes.<br />
          The brain sent a 47-tab report.<br />
          And Jesus Christ personally confirmed:<br />
          <br />
          <em>You are the miracle this year.</em><br />
          <br />
          Happy Birthday, Lakshmi.<br />
          The universe is taking notes.
        </p>
        <div className="main-wish-signature">— From Everyone Who Watched You Become This —</div>
      </div>
    </section>
  )
}

function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="lx-footer">
      <div className="lx-footer-logo" onClick={() => navigate({ to: '/' })} style={{ cursor: 'pointer' }}>
        LAKSHMIX
      </div>
      <div className="lx-footer-text" style={{ marginBottom: '0.5rem' }}>
        A cinematic tribute to courage, intelligence, and the decade&apos;s highest package.
      </div>
      <div className="lx-footer-text">
        Made with love · 2025 · Lakshmi&apos;s Universe
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--lx-bg)' }}>
      <Navbar />
      <Hero />
      <FeaturedBanner />
      <CharacterCarousel />
      <WishesSection />
      <Footer />
    </div>
  )
}

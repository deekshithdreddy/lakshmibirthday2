import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { characters } from '../data/characters'

export const Route = createFileRoute('/home')({
  component: HomePage,
})

const cardColors: Record<string, { bg: string; accent: string; icon: string }> = {
  'seetha': { bg: 'linear-gradient(135deg, #1b0000 0%, #3d1500 100%)', accent: '#ff8a65', icon: '🌹' },
  'bhavana': { bg: 'linear-gradient(135deg, #0d1a0d 0%, #1a3320 100%)', accent: '#a5d6a7', icon: '🌟' },
  'chitti': { bg: 'linear-gradient(135deg, #1a0a00 0%, #3d2000 100%)', accent: '#ffcc02', icon: '🔥' },
  'swathi': { bg: 'linear-gradient(135deg, #0a0a1f 0%, #1a1545 100%)', accent: '#b39ddb', icon: '✉️' },
  'hasini': { bg: 'linear-gradient(135deg, #001a0d 0%, #003322 100%)', accent: '#80cbc4', icon: '🌿' },
  'chitra': { bg: 'linear-gradient(135deg, #0a0d1a 0%, #1a1535 100%)', accent: '#ef9a9a', icon: '🗡' },
  'ramulamma': { bg: 'linear-gradient(135deg, #1a0a00 0%, #3d2000 100%)', accent: '#ffcc02', icon: '🔥' },
  'arya-stark': { bg: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)', accent: '#4fc3f7', icon: '⚔️' },
  'tara': { bg: 'linear-gradient(135deg, #1a0000 0%, #3d0000 100%)', accent: '#ef5350', icon: '🛡' },
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate({ to: '/home' }).then(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      })
    }
  }

  return (
    <nav className={`lx-nav ${scrolled ? 'scrolled' : ''}`} style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: 'clamp(12px, 2vw, 20px) clamp(16px, 4vw, 40px)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'background-color 0.3s, backdrop-filter 0.3s'
    }}>
      <div className="lx-logo" style={{ cursor: 'pointer', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 800, color: '#E50914', letterSpacing: '1px' }} onClick={() => navigate({ to: '/home' })}>
        LAKSHMIX
      </div>
      
      {/* Mobile-Friendly Navigation Links Layer */}
      <div className="lx-nav-links responsive-mobile-nav" style={{ display: 'flex', gap: 'clamp(14px, 2vw, 24px)' }}>
        <span className="lx-nav-link" style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }} onClick={() => handleScrollToSection('characters')}>Universe</span>
        <span className="lx-nav-link" style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }} onClick={() => handleScrollToSection('wishes')}>Wishes</span>
        <span className="lx-nav-link" style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, color: '#E50914' }} onClick={() => navigate({ to: '/my-wishes' })}>My Wishes</span>
      </div>
      
      <div className="lx-nav-right" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div className="lx-nav-avatar" onClick={() => navigate({ to: '/' })} style={{ width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E50914', color: 'white', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
          L
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const heroImg = '/images/lakshmi-dream.png'; 
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
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'flex-end',
        background: '#141414',
      }}
    >
      <img
        src={heroImg}
        alt="Season 23 Title Frame"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          filter: 'brightness(0.55) saturate(1.15) contrast(1.05)',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 5 + Math.random() * 6,
              height: 5 + Math.random() * 6,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              filter: 'blur(1px)',
              animation: `floatY 8s ease-in-out infinite ${i * 0.4}s`,
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
          background: 'linear-gradient(180deg, rgba(20,20,20,0) 30%, rgba(20,20,20,0.92) 85%, #141414 100%)',
        }}
      />
      <div
        className="saga-hero-content"
        style={{
          position: 'relative',
          zIndex: 5,
          color: 'white',
          padding: 'clamp(2rem, 6vw, 4rem) clamp(1rem, 4vw, 4%)',
          maxWidth: '850px',
          textShadow: '0 2px 12px rgba(0,0,0,0.9)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: 'clamp(0.75rem, 2vw, 0.95rem)', color: '#E50914', fontWeight: 700, letterSpacing: '3px' }}>LAKSHMI SAGA</span>
          <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.15)', padding: '2px 6px', borderRadius: '2px', fontWeight: 600 }}>Est. 2003</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.6rem, 7.5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-1.5px', margin: '0.1rem 0', lineHeight: 1.1 }}>
          Season 23
        </h1>
        <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#ffcc02', marginBottom: '1.25rem' }}>
          Still Under Exploration
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '1.5rem' }}>
          <button
            className="saga-btn-primary"
            style={{ fontSize: '0.95rem', padding: '0.6em 1.6em', borderRadius: '4px', fontWeight: 700, background: 'white', color: 'black', border: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', transition: 'opacity 0.2s' }}
            onClick={() => document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span style={{ marginRight: 6, fontSize: '0.9em' }}>▶</span> Explore Universe
          </button>
          <button
            className="saga-btn-secondary"
            style={{ fontSize: '0.95rem', padding: '0.6em 1.6em', borderRadius: '4px', fontWeight: 700, background: 'rgba(109, 109, 110, 0.45)', backdropFilter: 'blur(8px)', color: 'white', border: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => navigate({ to: '/my-wishes' })}
          >
            🎴 View Premium Gallery
          </button>
        </div>
        <div style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)', opacity: 0.9, lineHeight: 1.6, maxWidth: '650px', color: '#eee' }}>
          A real-time cinematic sequence featuring structural plot twists, extreme empathy traits, outstanding dressing combinations, corporate package miracles, and unparalleled main-character energy.
        </div>
      </div>
    </section>
  )
}

function CharacterCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    const amount = window.innerWidth > 768 ? 600 : 280
    trackRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <div id="characters" style={{ paddingTop: '1.5rem' }}>
      <div className="content-section" style={{ marginBottom: '2.5rem' }}>
        <h2 className="section-title" style={{ padding: '0 clamp(1rem, 4vw, 4%)', fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.5px' }}>
          She Contains Multitudes
          <span style={{ color: '#E50914', fontSize: '0.75em', marginLeft: '8px', fontWeight: 400 }}>· Icons of Strength</span>
        </h2>
        <p style={{ padding: '0 clamp(1rem, 4vw, 4%)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.9rem', color: '#888', marginBottom: '1.25rem' }}>
          Click any card overlay to unlock how each distinct legend reflects Lakshmi&apos;s story
        </p>
        
        <div className="carousel-container" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <button className="carousel-btn carousel-btn-left desktop-only-btn" onClick={() => scroll('left')} style={{ position: 'absolute', left: '1.5vw', zIndex: 10, background: 'rgba(0,0,0,0.65)', border: '1px solid #333', color: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            ❮
          </button>

          <div className="carousel-track hide-scrollbar touch-scroll-enabled" ref={trackRef} style={{ display: 'flex', overflowX: 'auto', gap: '14px', padding: '10px clamp(1rem, 4vw, 4%)', scrollBehavior: 'smooth' }}>
            {characters.map((char) => (
              <div
                key={char.id}
                className="char-card cinematic-card"
                onClick={() => navigate({ to: '/character/$id', params: { id: char.id } })}
                style={{ 
                  cursor: 'pointer', 
                  position: 'relative', 
                  overflow: 'hidden', 
                  borderRadius: '6px', 
                  background: '#1a1a1a', 
                  flex: '0 0 clamp(200px, 46vw, 260px)', 
                  aspectRatio: '2/3',
                  transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), border-color 0.3s', 
                  border: '1px solid #222',
                }}
              >
                <img
                  src={char.thumbnail}
                  alt={char.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85) contrast(1.02)' }}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.5) 50%, transparent 100%)', zIndex: 2 }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 3, padding: '12px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#E50914', fontWeight: 700, letterSpacing: '1px' }}>{char.type}</div>
                  <div style={{ fontWeight: 800, fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', margin: '2px 0', color: '#fff' }}>{char.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#ccc', marginBottom: '6px' }}>{char.series}</div>
                  <div style={{ fontStyle: 'italic', fontSize: '0.75rem', color: '#aaa', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.4 }}>
                    &ldquo;{char.quote}&rdquo;
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn carousel-btn-right desktop-only-btn" onClick={() => scroll('right')} style={{ position: 'absolute', right: '1.5vw', zIndex: 10, background: 'rgba(0,0,0,0.65)', border: '1px solid #333', color: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            ❯
          </button>
        </div>
      </div>

      {/* 🔮 REPLACED ANIME CAROUSEL WITH: The Architecture of Her Spirit */}
      <div className="content-section" style={{ marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ padding: '0 clamp(1rem, 4vw, 4%)', fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.5px' }}>
          The Architecture of Her Spirit
          <span style={{ color: '#ffcc02', fontSize: '0.75em', marginLeft: '8px', fontWeight: 400 }}>· Core Layout</span>
        </h2>
        <p style={{ padding: '0 clamp(1rem, 4vw, 4%)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.9rem', color: '#888', marginBottom: '1.25rem' }}>
          An abstract structural mapping of inner characteristics and emotional depth frameworks
        </p>
        <div className="carousel-container">
          <div className="carousel-track hide-scrollbar touch-scroll-enabled" style={{ display: 'flex', overflowX: 'auto', gap: '14px', padding: '10px clamp(1rem, 4vw, 4%)' }}>
            {characters.slice(0, 5).map((char) => {
              const colors = cardColors[char.id] ?? { bg: 'linear-gradient(135deg, #111, #222)', accent: '#ffcc02', icon: '✦' }
              return (
                <div
                  key={char.id}
                  className="char-card cinematic-card"
                  style={{ flex: '0 0 clamp(160px, 42vw, 210px)', aspectRatio: '2/3', position: 'relative', borderRadius: '6px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #252525' }}
                  onClick={() => navigate({ to: '/character/$id', params: { id: char.id } })}
                >
                  <div style={{ position: 'absolute', inset: 0, background: colors.bg }} />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: colors.accent, opacity: 0.25 }}>{colors.icon}</div>
                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '12px', background: 'linear-gradient(0deg, rgba(0,0,0,0.95) 0%, transparent 100%)', color: 'white' }}>
                    <div style={{ fontSize: '0.7rem', color: colors.accent, fontWeight: 600, uppercase: true }}>{char.type}</div>
                    <div style={{ fontSize: 'clamp(1rem, 2.2vw, 1.15rem)', fontWeight: 800, margin: '2px 0' }}>{char.name}</div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.8, fontStyle: 'italic', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.3 }}>
                      {char.shortDesc}
                    </div>
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
      className="featured-banner-container"
      style={{ padding: '0 clamp(1rem, 4vw, 4%)', marginBottom: '3.5rem' }}
    >
      {/* 🌟 PREMIUM NETFLIX WIDESCREEN WIDGET: Lakshmi Dream 2 */}
      <div
        className="cinematic-card"
        style={{ 
          position: 'relative', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          cursor: 'pointer', 
          background: '#09090b', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'flex-end',
          minHeight: 'clamp(240px, 40vh, 420px)', 
          border: '1px solid rgba(229, 9, 20, 0.45)',
          boxShadow: '0 8px 32px rgba(229, 9, 20, 0.15)'
        }}
        onClick={() => navigate({ to: '/my-wishes' })}
      >
        <img 
          src="/images/lakshmi-dream2.png" 
          alt="Featured Widescreen Asset" 
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            filter: 'brightness(0.7) contrast(1.05)'
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 50%, transparent 100%)', zIndex: 1 }} />
        
        <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(1.2rem, 4vw, 2.5rem)', maxWidth: '700px' }}>
          <div style={{ color: '#E50914', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '6px' }}>
            ★ Featured Cinematic Experience · Widescreen Cut
          </div>
          <h3 style={{ color: 'white', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 900, margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
            THE HORIZON ARCHIVE
          </h3>
          <p style={{ color: '#ccc', fontSize: 'clamp(0.85rem, 2vw, 1rem)', fontStyle: 'italic', lineHeight: 1.5, margin: 0, color: '#b3b3b3' }}>
            &ldquo;An expansive view tracking milestones, continuous growth steps, shared paths, and unshakeable resilience frameworks.&rdquo;
          </p>
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
    <section id="wishes" style={{ padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1rem, 4vw, 4%)', background: '#0a0a0a' }}>
      <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', color: 'white', textAlign: 'center', marginBottom: '8px', fontWeight: 800 }}>
        <span style={{ color: '#E50914' }}>W</span>ishes From Around The World
      </h2>
      <p style={{ color: '#888', textAlign: 'center', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', marginBottom: '2.5rem' }}>
        The ocean, the sky, the crab, the whale, and Jesus — they all showed up
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(260px, 30vw, 340px), 1fr))', gap: '16px', marginBottom: '3.5rem' }}>
        {wishes.map((wish, i) => (
          <div key={i} style={{ background: '#121214', padding: '1.5rem', borderRadius: '6px', border: '1px solid #1e1e20', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{wish.icon}</div>
            <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '8px' }}>{wish.title}</div>
            <p style={{ color: '#b3b3b3', fontSize: '0.9rem', lineHeight: 1.55 }}>{wish.text}</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'linear-gradient(135deg, #160404, #050505)', padding: 'clamp(1.5rem, 4vw, 3rem)', borderRadius: '8px', border: '1px solid #2a0808', textAlign: 'center' }}>
        <p style={{ color: '#eee', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: 1.7, fontStyle: 'italic', maxWidth: '750px', margin: '0 auto' }}>
          The crab walked sideways to get here.<br />
          The ocean sent its deepest waves.<br />
          The shell held its breath and whispered your name.<br />
          The whale breached the surface for you.<br />
          The sky cleared entirely — no notes.<br />
          The brain sent a 47-tab report.<br />
          And Jesus Christ personally confirmed:<br />
          <br />
          <span style={{ fontSize: '1.15em', fontWeight: 800, color: '#E50914' }}>You are the miracle this year.</span><br />
          <br />
          Happy Birthday, Lakshmi.<br />
          The universe is taking notes.
        </p>
        <div style={{ color: '#555', marginTop: '1.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>— From Everyone Who Watched You Become This —</div>
      </div>
    </section>
  )
}

function Footer() {
  const navigate = useNavigate()
  return (
    <footer style={{ background: '#000', padding: '2.5rem 4%', textAlign: 'center', borderTop: '1px solid #141414' }}>
      <div onClick={() => navigate({ to: '/home' })} style={{ cursor: 'pointer', color: '#E50914', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '0.5px' }}>
        LAKSHMIX
      </div>
      <div style={{ color: '#555', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
        A cinematic tribute to courage, intelligence, and the decade&apos;s highest package.
      </div>
      <div style={{ color: '#333', fontSize: '0.75rem' }}>
        Made with love · 2026 · Lakshmi&apos;s Universe
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#141414', overflowX: 'hidden', paddingTop: '50px' }}>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .touch-scroll-enabled {
          -webkit-overflow-scrolling: touch;
        }
        .cinematic-card:hover {
          transform: scale(1.04) translateY(-3px);
          box-shadow: 0 8px 24px rgba(229, 9, 20, 0.35) !important;
          border-color: rgba(229, 9, 20, 0.4) !important;
        }
        @media (max-width: 768px) {
          .responsive-mobile-nav {
            gap: 12px !important;
          }
          .desktop-only-btn {
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
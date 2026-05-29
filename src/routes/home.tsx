import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { characters } from '../data/characters'

export const Route = createFileRoute('/home')({
  component: HomePage,
})

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
      padding: 'clamp(12px, 2vw, 18px) clamp(16px, 4vw, 40px)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'background-color 0.3s, backdrop-filter 0.3s'
    }}>
      <div className="lx-logo" style={{ cursor: 'pointer', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: 900, color: '#E50914', letterSpacing: '1px' }} onClick={() => navigate({ to: '/home' })}>
        LAKSHMIX
      </div>
      
      {/* Mobile-Optimized Navigation Link Bar */}
      <div className="lx-nav-links responsive-mobile-nav" style={{ display: 'flex', gap: 'clamp(12px, 2vw, 24px)' }}>
        <span className="lx-nav-link" style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#eee' }} onClick={() => handleScrollToSection('characters')}>Universe</span>
        <span className="lx-nav-link" style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#eee' }} onClick={() => handleScrollToSection('wishes')}>Wishes</span>
        <span className="lx-nav-link" style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#E50914' }} onClick={() => navigate({ to: '/my-wishes' })}>My Wishes</span>
      </div>
      
      <div className="lx-nav-right" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="lx-nav-avatar" onClick={() => navigate({ to: '/' })} style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E50914', color: 'white', fontWeight: 800, borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
          L
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const heroImg = '/images/lakshmi-temple-bluedress.jpg'; 
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
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'flex-end', // Pushes text down onto the smooth fade zone
        background: '#0a0a0a',
        overflow: 'hidden'
      }}
    >
      {/* Crisp, Beautifully Clear Centerpiece Image Frame */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: '#0a0a0a' }}>
        <img
          src={heroImg}
          alt="Season 23 Clear Main Artwork"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center', // Centers the whole graphic canvas perfectly
            filter: 'brightness(0.85) contrast(1.05)' // Removed muddy dimming filters for ultimate clarity
          }}
        />
      </div>

      {/* Cinematic Soft Bottom Vignette Gradient Only */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.6) 35%, transparent 75%)',
        }}
      />

      <div
        className="saga-hero-content"
        style={{
          position: 'relative',
          zIndex: 5,
          color: 'white',
          padding: 'clamp(120px, 20vh, 200px) clamp(1rem, 4vw, 4%) clamp(1.5rem, 4vw, 3rem)',
          maxWidth: '750px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
          <span style={{ fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', color: '#E50914', fontWeight: 800, letterSpacing: '2px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>LAKSHMI: Under Exploration</span>
          <span style={{ fontSize: '0.65rem', background: 'rgba(229, 9, 20, 0.35)', border: '1px solid rgba(229, 9, 20, 0.5)', padding: '2px 6px', borderRadius: '2px', fontWeight: 700, color: '#fff' }}>Est. 2003</span>
        </div>
        
        <h1 style={{ fontSize: 'clamp(2.5rem, 7.5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-1.5px', margin: '0 0 4px 0', lineHeight: 1.1, textShadow: '0 4px 12px rgba(0,0,0,0.9)' }}>
          Season 23
        </h1>
        
        <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#ffcc02', marginBottom: '1.25rem', fontWeight: 600, textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
          The Story is Still being Written...
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <button
            style={{ fontSize: '0.9rem', padding: '0.65em 1.5em', borderRadius: '4px', fontWeight: 700, background: '#E50914', color: 'white', border: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', boxShadow: '0 4px 14px rgba(229,9,20,0.45)' }}
            onClick={() => document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span style={{ marginRight: 6 }}>▶</span> Explore Multitudes
          </button>
          <button
            style={{ fontSize: '0.9rem', padding: '0.65em 1.5em', borderRadius: '4px', fontWeight: 700, background: 'rgba(10, 10, 10, 0.65)', backdropFilter: 'blur(12px)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
            onClick={() => navigate({ to: '/my-wishes' })}
          >
            🎴 Premium Gallery
          </button>
        </div>

        <p style={{ fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)', opacity: 0.9, lineHeight: 1.6, margin: 0, color: '#f0f0f0', maxWidth: '600px', fontWeight: 500, textShadow: '0 2px 10px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.95)' }}>
          one day it's beach. Another day it's a new city. Some days feel like side quests. Some feel like the beginning of something bigger. No one nows where the story goes next. Including the main character.
        </p>
      </div>
    </section>
  )
}

function CharacterCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    const amount = window.innerWidth > 768 ? 600 : 260
    trackRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <div id="characters" style={{ paddingTop: '2.5rem' }}>
      <div className="content-section" style={{ marginBottom: '1.5rem' }}>
        <h2 className="section-title" style={{ padding: '0 clamp(1rem, 4vw, 4%)', fontSize: 'clamp(1.3rem, 3.5vw, 2rem)', fontWeight: 800, letterSpacing: '-0.5px', color: 'white' }}>
          She Contains Multitudes
          <span style={{ color: '#E50914', fontSize: '0.7em', marginLeft: '8px', fontWeight: 500 }}>· Icons of Strength</span>
        </h2>
        <p style={{ padding: '0 clamp(1rem, 4vw, 4%)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.85rem', color: '#888', marginBottom: '1.25rem' }}>
          Click any card overlay to unlock how each distinct legend reflects Lakshmi&apos;s story
        </p>
        
        <div className="carousel-container" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <button className="carousel-btn carousel-btn-left desktop-only-btn" onClick={() => scroll('left')} style={{ position: 'absolute', left: '1.5vw', zIndex: 10, background: 'rgba(0,0,0,0.75)', border: '1px solid #222', color: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
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
                  background: '#121212', 
                  flex: '0 0 clamp(190px, 45vw, 250px)', 
                  aspectRatio: '2/3',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s', 
                  border: '1px solid #222',
                }}
              >
                <img
                  src={char.thumbnail}
                  alt={char.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8) contrast(1.02)' }}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)', zIndex: 2 }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 3, padding: '12px' }}>
                  <div style={{ fontSize: '0.65rem', color: '#E50914', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>{char.type}</div>
                  <div style={{ fontWeight: 800, fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)', margin: '2px 0', color: '#fff' }}>{char.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#aaa', marginBottom: '6px' }}>{char.series}</div>
                  <div style={{ fontStyle: 'italic', fontSize: '0.75rem', color: '#888', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.35 }}>
                    &ldquo;{char.quote}&rdquo;
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn carousel-btn-right desktop-only-btn" onClick={() => scroll('right')} style={{ position: 'absolute', right: '1.5vw', zIndex: 10, background: 'rgba(0,0,0,0.75)', border: '1px solid #222', color: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            ❯
          </button>
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
      text: `23 years... I don't know how fast time went. I'm still missing those small fights with Praveen and Madhan a lot, actually. Now we are some employees, next whatever it will be. I know the struggles and the hard work you put on for yourself to become something, but right now, this odd job is really frustrating.

But I know your spirit. We faced the worst—this is just a small thing. We're gonna have a great comeback this year. I'm saying this with a genuine gut feeling: you will laugh hard from the heart, as usual.

Enjoy every moment, making a lot of friends, exploring as far as it goes, and never stop anywhere. I wish you a very happy birthday. May this chapter surprise you, outgrow the struggles, and turn into your most beautiful, victorious season yet. Happy Birthday, Lakshmi! ❤️✨. 🧠`,
    },
    {
      icon: '✝️',
      title: 'Jesus Christ (He Sent Word)',
      text: 'When Jesus turned water into wine, people were absolutely shook for centuries. You too will turn doubt, wrong jobs, waiting, and "you\'re overqualified" into the decade\'s highest package. He sent a message: "Respect. The miracles committee is taking notes. Also — the whale, the crab, and the ocean say hi. Happy Birthday, queen." ✝️',
    },
  ]

  return (
    <section id="wishes" style={{ padding: '3rem clamp(1rem, 4vw, 4%) 4rem', background: '#0a0a0a' }}>
      <h2 style={{ fontSize: 'clamp(1.6rem, 4.5vw, 2.5rem)', color: 'white', textAlign: 'center', marginBottom: '6px', fontWeight: 800, letterSpacing: '-0.5px' }}>
        <span style={{ color: '#E50914' }}>W</span>ishes From Around The World
      </h2>
      <p style={{ color: '#666', textAlign: 'center', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
        The ocean, the sky, the crab, the whale, and Jesus — they all showed up
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 30vw, 340px), 1fr))', gap: '14px', marginBottom: '3rem' }}>
        {wishes.map((wish, i) => (
          <div key={i} style={{ background: '#111113', padding: '1.25rem', borderRadius: '6px', border: '1px solid #1c1c1e', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
            <div style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{wish.icon}</div>
            <div style={{ color: 'white', fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>{wish.title}</div>
            <p style={{ color: '#a0a0a0', fontSize: '0.85rem', lineHeight: 1.5 }}>{wish.text}</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'linear-gradient(135deg, #120303, #050505)', padding: 'clamp(1.5rem, 4vw, 2.5rem)', borderRadius: '6px', border: '1px solid #220606', textAlign: 'center' }}>
        <p style={{ color: '#dcdcdc', fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', lineHeight: 1.65, fontStyle: 'italic', maxWidth: '700px', margin: '0 auto' }}>
          The crab walked sideways to get here.<br />
          The ocean sent its deepest waves.<br />
          The shell held its breath and whispered your name.<br />
          The whale breached the surface for you.<br />
          The sky cleared entirely — no notes.<br />
          The brain sent a 47-tab report.<br />
          And Jesus Christ personally confirmed:<br />
          <br />
          <span style={{ fontSize: '1.1em', fontWeight: 800, color: '#E50914' }}>You are the miracle this year.</span><br />
          <br />
          Happy Birthday, Lakshmi.<br />
          The universe is taking notes.
        </p>
        <div style={{ color: '#444', marginTop: '1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>— From Everyone Who Watched You Become This —</div>
      </div>
    </section>
  )
}

function Footer() {
  const navigate = useNavigate()
  return (
    <footer style={{ background: '#050505', padding: '2rem 4%', textAlign: 'center', borderTop: '1px solid #111' }}>
      <div onClick={() => navigate({ to: '/home' })} style={{ cursor: 'pointer', color: '#E50914', fontSize: '1.2rem', fontWeight: 900, marginBottom: '0.4rem', letterSpacing: '0.5px' }}>
        LAKSHMIX
      </div>
      <div style={{ color: '#444', fontSize: '0.8rem', marginBottom: '0.2rem' }}>
        A cinematic tribute to courage, intelligence, and the decade&apos;s highest package.
      </div>
      <div style={{ color: '#252525', fontSize: '0.7rem' }}>
        Made with love · 2026 · Lakshmi&apos;s Universe
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', overflowX: 'hidden' }}>
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
          transform: scale(1.03) translateY(-2px);
          box-shadow: 0 6px 20px rgba(229, 9, 20, 0.3) !important;
          border-color: rgba(229, 9, 20, 0.35) !important;
        }
        @media (max-width: 768px) {
          .responsive-mobile-nav {
            gap: 14px !important;
          }
          .desktop-only-btn {
            display: none !important;
          }
          .lx-nav {
            padding: 12px 16px !important;
            background-color: rgba(10, 10, 10, 0.8) !important;
            backdrop-filter: blur(12px) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
        }
      `}</style>
      
      <Navbar />
      <Hero />
      <CharacterCarousel />
      <WishesSection />
      <Footer />
    </div>
  )
}
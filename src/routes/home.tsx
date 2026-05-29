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
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`lx-nav ${scrolled ? 'scrolled' : ''}`} style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: scrolled ? '12px 4%' : '24px 4%',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 20000, // Explicit layout priority layer lock
      background: scrolled ? '#141414' : 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)',
      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      borderBottom: scrolled ? '1px solid #252525' : 'none'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(15px, 4vw, 40px)' }}>
        <div 
          style={{ 
            cursor: 'pointer', 
            fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)', 
            fontWeight: 900, 
            color: '#E50914', 
            letterSpacing: '0.5px'
          }} 
          onClick={() => navigate({ to: '/home' })}
        >
          LAKSHMIX
        </div>
        
        {/* Mobile & Desktop High-Visibility Navigation Stream Link Grid */}
        <div className="responsive-mobile-nav" style={{ display: 'flex', gap: 'clamp(12px, 3vw, 22px)', alignItems: 'center' }}>
          <span style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#e5e5e5', transition: 'color 0.2s' }} className="nav-hover-link" onClick={() => handleScrollToSection('characters')}>Universe</span>
          <span style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#e5e5e5', transition: 'color 0.2s' }} className="nav-hover-link" onClick={() => handleScrollToSection('wishes')}>Wishes</span>
          <span style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700, color: '#E50914', transition: 'color 0.2s' }} className="nav-hover-link" onClick={() => navigate({ to: '/my-wishes' })}>My Wishes</span>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div 
          onClick={() => navigate({ to: '/' })} // Navigates straight from /home back to the root profile directory
          style={{ 
            width: '32px', 
            height: '32px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: '#E50914', 
            color: 'white', 
            fontWeight: 800, 
            borderRadius: '4px', 
            cursor: 'pointer', 
            fontSize: '0.85rem'
          }}
        >
          L
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const navigate = useNavigate()
  const heroImg = '/images/lakshmiintemple.png'
  
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
        height: '88vh',
        display: 'flex',
        alignItems: 'flex-end',
        background: '#141414',
        overflow: 'hidden'
      }}
    >
      {/* Background Hero Frame - Specially adjusted to shift her profile right and clear text elements */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: '#141414' }}>
        <img
          src={heroImg}
          alt="Lakshmi Portrait Display Frame"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '55% 45%', // Shifts her face nicely to the right-center while keeping it centered vertically
            filter: 'brightness(0.85) contrast(1.03)'
          }}
        />
      </div>

      {/* Netflix Cinematic Multi-Stage Shadow Gradient Scrim Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(to right, rgba(20,20,20,0.96) 0%, rgba(20,20,20,0.65) 45%, rgba(20,20,20,0) 85%), linear-gradient(to top, #141414 0%, rgba(20,20,20,0.2) 20%, transparent 60%)',
        }}
      />

      <div
        className="saga-hero-content"
        style={{
          position: 'relative',
          zIndex: 5,
          color: 'white',
          padding: '0 clamp(16px, 4vw, 45px) clamp(25px, 6vh, 50px)',
          maxWidth: '680px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.72rem', color: '#aaa', fontWeight: 800, letterSpacing: '2px' }}>LAKSHMI SAGA</span>
          <span style={{ fontSize: '0.65rem', background: 'rgba(229, 9, 20, 0.35)', border: '1px solid rgba(229, 9, 20, 0.5)', padding: '1px 6px', borderRadius: '2px', fontWeight: 700, color: '#fff' }}>Est. 2003</span>
        </div>
        
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, letterSpacing: '-1px', margin: '0 0 6px 0', lineHeight: 1.05 }}>
          Season 23
        </h1>
        
        <div style={{ fontSize: 'clamp(1.05rem, 2.8vw, 1.35rem)', fontWeight: 700, color: '#46d369', marginBottom: '16px' }}>
          The Story is Still being Written...
        </div>

        {/* Action Controls Group Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
          <button
            className="netflix-btn-white"
            style={{ fontSize: '0.9rem', padding: '0.6em 1.6em', borderRadius: '4px', fontWeight: 700, background: '#ffffff', color: '#000000', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s ease' }}
            onClick={() => document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>▶</span> Explore Multitudes
          </button>
          <button
            className="netflix-btn-gray"
            style={{ fontSize: '0.9rem', padding: '0.6em 1.6em', borderRadius: '4px', fontWeight: 700, background: 'rgba(109, 109, 110, 0.45)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', color: '#ffffff', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s ease' }}
            onClick={() => navigate({ to: '/my-wishes' })}
          >
            <span>🎴</span> Premium Gallery
          </button>
        </div>

        <p style={{ fontSize: 'clamp(0.85rem, 2.2vw, 1rem)', lineHeight: 1.5, margin: 0, color: '#cccccc', fontWeight: 400 }}>
          One day it&apos;s a beach. Another day it&apos;s a new city. Some days feel like side quests. Some feel like the beginning of something bigger. No one knows where the story goes next. Including the main character.
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
    const amount = window.innerWidth > 768 ? 600 : 250
    trackRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  const platformMatches = ['99% Match', '96% Match', '100% Match', '95% Match', '98% Match', '97% Match', '99% Match']

  return (
    <div id="characters" style={{ paddingTop: '2.5rem', background: '#141414' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ padding: '0 4%', fontSize: 'clamp(1.1rem, 3.5vw, 1.45rem)', fontWeight: 700, color: '#e5e5e5', margin: '0 0 10px 0' }}>
          She Contains Multitudes
        </h2>
        
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <button className="carousel-btn-nav desktop-only-btn" onClick={() => scroll('left')} style={{ position: 'absolute', left: 0, zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', width: '40px', height: '100%', cursor: 'pointer' }}>❮</button>

          <div className="carousel-track hide-scrollbar touch-scroll-enabled" ref={trackRef} style={{ display: 'flex', overflowX: 'auto', gap: '10px', padding: '10px 4%', scrollBehavior: 'smooth' }}>
            {characters.map((char, i) => (
              <div
                key={char.id}
                className="netflix-thumbnail-card"
                onClick={() => navigate({ to: '/character/$id', params: { id: char.id } })}
                style={{ 
                  cursor: 'pointer', 
                  position: 'relative', 
                  overflow: 'hidden', 
                  borderRadius: '4px', 
                  background: '#181818', 
                  // Original portrait size constraints preserved perfectly
                  flex: '0 0 clamp(190px, 45vw, 250px)', 
                  aspectRatio: '2/3',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.55)'
                }}
              >
                <img
                  src={char.thumbnail}
                  alt={char.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,15,15,1) 0%, rgba(15,15,15,0.4) 45%, transparent 100%)', zIndex: 2 }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 3, padding: '14px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#E50914', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>{char.type}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: '2px 0' }}>{char.name}</div>
                  <div style={{ fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                    <span style={{ color: '#46d369', fontWeight: 800 }}>{platformMatches[i % platformMatches.length]}</span>
                    <span style={{ color: '#e5e5e5' }}>{char.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn-nav desktop-only-btn" onClick={() => scroll('right')} style={{ position: 'absolute', right: 0, zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', width: '40px', height: '100%', cursor: 'pointer' }}>❯</button>
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
    <section id="wishes" style={{ padding: '3rem 4% 4rem', background: '#141414' }}>
      <h2 style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.45rem)', color: '#ffffff', marginBottom: '16px', fontWeight: 700 }}>
        Wishes From Around The World
      </h2>

      {/* Floating Modern Animated Wish Cards Grid Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(250px, 22vw, 310px), 1fr))', gap: '14px', marginBottom: '3.5rem' }}>
        {wishes.map((wish, i) => (
          <div 
            key={i} 
            className="netflix-wish-card"
            style={{ 
              background: '#181818', 
              padding: '1.25rem', 
              borderRadius: '4px', 
              border: '1px solid #282828', 
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ fontSize: '1.4rem' }}>{wish.icon}</span>
              <div style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 700 }}>{wish.title}</div>
            </div>
            <p style={{ color: '#a3a3a3', fontSize: '0.82rem', lineHeight: 1.5, margin: 0, whiteSpace: 'pre-line' }}>{wish.text}</p>
          </div>
        ))}
      </div>

      {/* 🎬 PREMIUM SUMMARY EDITORIAL EXPERIENTIAL BILLBOARD */}
      <div 
        className="netflix-billboard-container"
        style={{ 
          background: 'linear-gradient(135deg, #1d1d20 0%, #09090a 100%)', 
          padding: '2.5rem clamp(16px, 4vw, 40px)', 
          borderRadius: '6px', 
          border: '1px solid rgba(229, 9, 20, 0.6)', 
          textAlign: 'center', 
          maxWidth: '850px', 
          margin: '0 auto', 
          position: 'relative',
          boxShadow: '0 0 30px rgba(229, 9, 20, 0.22), 0 8px 32px rgba(0,0,0,0.75)' 
        }}
      >
        <div style={{ position: 'absolute', top: '12px', left: '12px', background: '#E50914', color: '#fff', fontSize: '0.6rem', fontWeight: 800, padding: '2px 8px', borderRadius: '2px', letterSpacing: '1px' }}>
          TOP 10 SUMMARY FEATURE
        </div>
        
        {/* Editorial Netflix Premium Serif Layout Design Script */}
        <p style={{ 
          color: '#ffffff', 
          fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)', 
          lineHeight: 1.85, 
          maxWidth: '720px', 
          margin: '18px auto 0', 
          fontWeight: 300, 
          letterSpacing: '0.5px',
          fontFamily: '"Georgia", "Times New Roman", serif', 
          fontStyle: 'italic' 
        }}>
          The crab walked sideways to get here.<br />
          The ocean sent its deepest waves.<br />
          The shell held its breath and whispered your name.<br />
          The whale breached the surface for you.<br />
          The sky cleared entirely — no notes.<br />
          The brain sent a 47-tab report.<br />
          And Jesus Christ personally confirmed:<br />
          <br />
          <span style={{ fontSize: '1.2em', fontWeight: 900, color: '#E50914', fontStyle: 'normal', fontFamily: 'sans-serif', textShadow: '0 0 15px rgba(229,9,20,0.35)' }}>You are the miracle this year.</span><br />
          <br />
          Happy Birthday, Lakshmi.<br />
          The universe is taking notes.
        </p>
        <div style={{ color: '#555555', marginTop: '1.75rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>— From Everyone Who Watched You Become This —</div>
      </div>
    </section>
  )
}

function Footer() {
  const navigate = useNavigate()
  return (
    <footer style={{ background: '#141414', padding: '3rem 4% 2rem', textAlign: 'center', borderTop: '1px solid #252525' }}>
      <div onClick={() => navigate({ to: '/home' })} style={{ cursor: 'pointer', color: '#E50914', fontSize: '1.2rem', fontWeight: 900, marginBottom: '0.75rem', letterSpacing: '0.5px' }}>
        LAKSHMIX
      </div>
      <div style={{ color: '#666666', fontSize: '0.78rem', marginBottom: '0.4rem', maxWidth: '480px', margin: '0 auto 0.5rem', lineHeight: 1.4 }}>
        A cinematic tribute to courage, intelligence, and the decade&apos;s highest package.
      </div>
      <div style={{ color: '#444444', fontSize: '0.7rem', marginTop: '0.85rem' }}>
        Made with love · 2026 · Lakshmi&apos;s Universe
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#141414', overflowX: 'hidden' }}>
      
      {/* Structural Hardware Accelerated Animation Rules */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .touch-scroll-enabled { -webkit-overflow-scrolling: touch; }
        
        .netflix-thumbnail-card:hover {
          transform: translate3d(0, -8px, 0) scale(1.05) !important;
          box-shadow: 0 14px 28px rgba(0,0,0,0.85) !important;
          z-index: 99;
        }
        .netflix-wish-card:hover {
          transform: translate3d(0, -6px, 0) !important; /* Premium 3D movement lift acceleration */
          border-color: rgba(229, 9, 20, 0.5) !important;
          background-color: #202023 !important;
          box-shadow: 0 8px 24px rgba(0,0,0,0.65) !important;
        }
        .nav-hover-link:hover {
          color: #b3b3b3 !important;
        }
        .netflix-btn-white:active, .netflix-btn-gray:active {
          transform: scale(0.96);
        }
        @media (max-width: 768px) {
          .desktop-only-btn { display: none !important; }
          .lx-nav {
            padding: 14px 16px !important;
            background-color: rgba(20, 20, 20, 0.98) !important; /* Solid back constraint layout anchor */
            border-bottom: 1px solid #252525 !important;
          }
          .responsive-mobile-nav {
            display: flex !important;
            gap: 14px !important;
          }
          .netflix-thumbnail-card:hover {
            transform: translate3d(0, -4px, 0) scale(1.03) !important;
          }
          .saga-hero-content {
            padding: 100px 16px 30px !important;
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
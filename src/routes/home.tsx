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
    const handler = () => setScrolled(window.scrollY > 50)
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
      padding: scrolled ? '12px clamp(16px, 4vw, 60px)' : '24px clamp(16px, 4vw, 60px)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled ? '#141414' : 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
      transition: 'background-color 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.5)' : 'none'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '45px' }}>
        <div 
          className="lx-logo" 
          style={{ 
            cursor: 'pointer', 
            fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', 
            fontWeight: 900, 
            color: '#E50914', 
            letterSpacing: '0.5px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
          }} 
          onClick={() => navigate({ to: '/home' })}
        >
          LAKSHMIX
        </div>
        
        {/* Flat Netflix Style Primary Navigation Row */}
        <div className="responsive-mobile-nav" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span className="netflix-nav-link" style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 500, color: '#e5e5e5', transition: 'color 0.25s' }} onClick={() => handleScrollToSection('characters')}>Universe</span>
          <span className="netflix-nav-link" style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 500, color: '#e5e5e5', transition: 'color 0.25s' }} onClick={() => handleScrollToSection('wishes')}>Wishes</span>
          <span className="netflix-nav-link" style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', transition: 'color 0.25s' }} onClick={() => navigate({ to: '/my-wishes' })}>My Wishes</span>
        </div>
      </div>
      
      <div className="lx-nav-right" style={{ display: 'flex', alignItems: 'center' }}>
        <div 
          className="lx-nav-avatar" 
          onClick={() => navigate({ to: '/' })} 
          style={{ 
            width: '32px', 
            height: '32px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: '#E50914', 
            color: 'white', 
            fontWeight: 700, 
            borderRadius: '4px', 
            cursor: 'pointer', 
            fontSize: '0.9rem',
            fontFamily: 'sans-serif'
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
  const heroImg = '/images/lakshmi-temple-bluedress.jpg'
  
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
        height: '92vh',
        display: 'flex',
        alignItems: 'center',
        background: '#141414',
        overflow: 'hidden'
      }}
    >
      {/* High Definition Clean Asset Underlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: '#141414' }}>
        <img
          src={heroImg}
          alt="Main Artwork"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            filter: 'brightness(0.85)'
          }}
        />
      </div>

      {/* True Netflix Double-Veil Vignette: Sharp text masking + cinematic asset fade */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(to right, rgba(20,20,20,0.92) 0%, rgba(20,20,20,0.7) 35%, rgba(20,20,20,0) 70%), linear-gradient(to top, #141414 0%, rgba(20,20,20,0.4) 15%, transparent 45%)',
        }}
      />

      <div
        className="saga-hero-content"
        style={{
          position: 'relative',
          zIndex: 5,
          color: 'white',
          padding: '0 clamp(16px, 4vw, 60px)',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span style={{ fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', color: '#a3a3a3', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>LAKSHMI SAGA</span>
          <span style={{ fontSize: '0.7rem', border: '1px solid rgba(255,255,255,0.4)', padding: '1px 6px', borderRadius: '2px', fontWeight: 600, color: '#ffffff', letterSpacing: '0.5px' }}>Est. 2003</span>
        </div>
        
        <h1 style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 900, letterSpacing: '-1.5px', margin: '0 0 8px 0', lineHeight: 1.05, fontFamily: 'Arial, Helvetica, sans-serif' }}>
          Season 23
        </h1>
        
        <div style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.45rem)', fontWeight: 600, color: '#46d369', marginBottom: '16px', letterSpacing: '0.2px' }}>
          The Story is Still being Written...
        </div>

        {/* Authentic Netflix CTA Buttons Mapping */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '22px' }}>
          <button
            className="netflix-btn-white"
            style={{ 
              fontSize: '1rem', 
              padding: '0.55em 1.7em', 
              borderRadius: '4px', 
              fontWeight: 700, 
              background: '#ffffff', 
              color: '#000000', 
              border: 'none', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              cursor: 'pointer', 
              transition: 'background-color 0.2s ease, transform 0.2s' 
            }}
            onClick={() => document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span style={{ fontSize: '1.15rem' }}>▶</span> Explore Multitudes
          </button>
          <button
            className="netflix-btn-gray"
            style={{ 
              fontSize: '1rem', 
              padding: '0.55em 1.7em', 
              borderRadius: '4px', 
              fontWeight: 700, 
              background: 'rgba(109, 109, 110, 0.4)', 
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              color: '#ffffff', 
              border: 'none', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              cursor: 'pointer', 
              transition: 'background-color 0.2s ease, transform 0.2s' 
            }}
            onClick={() => navigate({ to: '/my-wishes' })}
          >
            <span style={{ fontSize: '1.15rem' }}>🎴</span> Premium Gallery
          </button>
        </div>

        <p style={{ fontSize: 'clamp(0.9rem, 2.3vw, 1.1rem)', opacity: 1, lineHeight: 1.5, margin: 0, color: '#e5e5e5', maxWidth: '620px', fontWeight: 400 }}>
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
    const amount = window.innerWidth > 768 ? 750 : 280
    trackRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <div id="characters" style={{ paddingTop: '3rem', background: '#141414' }}>
      <div className="content-section" style={{ marginBottom: '2rem' }}>
        <h2 className="section-title" style={{ padding: '0 clamp(16px, 4vw, 60px)', fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)', fontWeight: 700, letterSpacing: '0px', color: '#e5e5e5', margin: '0 0 12px 0' }}>
          She Contains Multitudes
        </h2>
        
        <div className="carousel-container" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <button className="carousel-btn carousel-btn-left desktop-only-btn" onClick={() => scroll('left')} style={{ position: 'absolute', left: 0, zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', width: '45px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background-color 0.2s' }}>
            ❮
          </button>

          <div className="carousel-track hide-scrollbar touch-scroll-enabled" ref={trackRef} style={{ display: 'flex', overflowX: 'auto', gap: '8px', padding: '10px clamp(16px, 4vw, 60px)', scrollBehavior: 'smooth' }}>
            {characters.map((char) => (
              <div
                key={char.id}
                className="char-card netflix-card"
                onClick={() => navigate({ to: '/character/$id', params: { id: char.id } })}
                style={{ 
                  cursor: 'pointer', 
                  position: 'relative', 
                  overflow: 'hidden', 
                  borderRadius: '4px', 
                  background: '#181818', 
                  flex: '0 0 clamp(160px, 24vw, 230px)', 
                  aspectRatio: '16/10', // True platform landscape aspect alignment matrix
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                }}
              >
                <img
                  src={char.thumbnail}
                  alt={char.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,20,0.95) 0%, rgba(20,20,20,0.3) 40%, transparent 100%)', zIndex: 2 }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 3, padding: '10px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>{char.name}</div>
                  <div style={{ fontSize: '0.65rem', color: '#a3a3a3', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                    <span style={{ color: '#46d369', fontWeight: 700 }}>98% Match</span>
                    <span>{char.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn carousel-btn-right desktop-only-btn" onClick={() => scroll('right')} style={{ position: 'absolute', right: 0, zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', width: '45px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background-color 0.2s' }}>
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
    <section id="wishes" style={{ padding: '4rem clamp(16px, 4vw, 60px)', background: '#141414' }}>
      <h2 style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#ffffff', marginBottom: '20px', fontWeight: 700 }}>
        Wishes From Around The World
      </h2>

      {/* Flat Structured Grid Interface */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(260px, 22vw, 320px), 1fr))', gap: '16px', marginBottom: '3.5rem' }}>
        {wishes.map((wish, i) => (
          <div key={i} style={{ background: '#181818', padding: '1.5rem', borderRadius: '4px', border: '1px solid #2f2f2f', transition: 'border-color 0.3s', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.5rem' }}>{wish.icon}</span>
              <div style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700 }}>{wish.title}</div>
            </div>
            <p style={{ color: '#a3a3a3', fontSize: '0.85rem', lineHeight: 1.5, margin: 0, whiteSpace: 'pre-line' }}>{wish.text}</p>
          </div>
        ))}
      </div>

      <div style={{ background: '#181818', padding: '2.5rem clamp(16px, 4vw, 40px)', borderRadius: '4px', border: '1px solid #2f2f2f', textAlign: 'center', maxWidth: '900px', margin: '0 auto', boxShadow: '0 6px 20px rgba(0,0,0,0.5)' }}>
        <p style={{ color: '#ffffff', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: 1.7, maxWidth: '750px', margin: '0 auto', fontFamily: 'inherit', fontWeight: 500 }}>
          The crab walked sideways to get here.<br />
          The ocean sent its deepest waves.<br />
          The shell held its breath and whispered your name.<br />
          The whale breached the surface for you.<br />
          The sky cleared entirely — no notes.<br />
          The brain sent a 47-tab report.<br />
          And Jesus Christ personally confirmed:<br />
          <br />
          <span style={{ fontSize: '1.15em', fontWeight: 900, color: '#E50914' }}>You are the miracle this year.</span><br />
          <br />
          Happy Birthday, Lakshmi.<br />
          The universe is taking notes.
        </p>
        <div style={{ color: '#777777', marginTop: '1.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>— From Everyone Who Watched You Become This —</div>
      </div>
    </section>
  )
}

function Footer() {
  const navigate = useNavigate()
  return (
    <footer style={{ background: '#141414', padding: '4rem 4% 2.5rem', textAlign: 'center', borderTop: '1px solid #282828' }}>
      <div onClick={() => navigate({ to: '/home' })} style={{ cursor: 'pointer', color: '#E50914', fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '0.5px' }}>
        LAKSHMIX
      </div>
      <div style={{ color: '#777777', fontSize: '0.8rem', marginBottom: '0.4rem', maxWidth: '500px', margin: '0 auto 0.5rem' }}>
        A cinematic tribute to courage, intelligence, and the decade&apos;s highest package.
      </div>
      <div style={{ color: '#555555', fontSize: '0.75rem', marginTop: '1rem' }}>
        Made with love · 2026 · Lakshmi&apos;s Universe
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
        .touch-scroll-enabled {
          -webkit-overflow-scrolling: touch;
        }
        .netflix-card:hover {
          transform: scale(1.06) !important;
          box-shadow: 0 12px 25px rgba(0,0,0,0.8) !important;
          zIndex: 10 !important;
        }
        .netflix-btn-white:hover {
          background-color: #e5e5e5 !important;
        }
        .netflix-btn-gray:hover {
          background-color: rgba(109, 109, 110, 0.25) !important;
        }
        .netflix-nav-link:hover {
          color: #b3b3b3 !important;
        }
        @media (max-width: 768px) {
          .responsive-mobile-nav {
            gap: 14px !important;
          }
          .desktop-only-btn {
            display: none !important;
          }
          .lx-nav {
            padding: 14px 16px !important;
            background-color: #141414 !important;
            border-bottom: 1px solid #252525;
          }
          .saga-hero-content {
            padding: 100px 16px 20px !important;
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
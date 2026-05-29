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
      padding: scrolled ? '10px 4%' : '20px 4%',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10000,
      background: scrolled ? '#141414' : 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)',
      transition: 'all 0.35s ease',
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
        
        {/* Unbreakable Android Navbar Navigation Link Stream */}
        <div style={{ display: 'flex', gap: 'clamp(10px, 3vw, 20px)', alignItems: 'center' }}>
          <span className="netflix-nav-item" style={{ cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600, color: '#e5e5e5' }} onClick={() => handleScrollToSection('characters')}>Universe</span>
          <span className="netflix-nav-item" style={{ cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600, color: '#e5e5e5' }} onClick={() => handleScrollToSection('wishes')}>Wishes</span>
          <span className="netflix-nav-item" style={{ cursor: 'pointer', fontSize: '0.82rem', fontWeight: 700, color: '#E50914' }} onClick={() => navigate({ to: '/my-wishes' })}>My Wishes</span>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div 
          onClick={() => window.location.reload()}
          style={{ 
            width: '30px', 
            height: '30px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: '#E50914', 
            color: 'white', 
            fontWeight: 800, 
            borderRadius: '4px', 
            cursor: 'pointer', 
            fontSize: '0.82rem'
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
      {/* High-Definition Underlay cropped to keep her face fully visible on portrait Android viewports */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: '#141414' }}>
        <img
          src={heroImg}
          alt="Lakshmi Portrait Display Frame"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'right 20%', // Keeps her face perfectly clear and positioned in the top-right to middle quadrant
            filter: 'brightness(0.85) contrast(1.02)'
          }}
        />
      </div>

      {/* Netflix Cinematic Multi-Axis Shadow Scrim Overlay Mask */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(to right, rgba(20,20,20,0.95) 0%, rgba(20,20,20,0.6) 40%, rgba(20,20,20,0) 80%), linear-gradient(to top, #141414 0%, rgba(20,20,20,0.3) 25%, transparent 60%)',
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
          <span style={{ fontSize: '0.65rem', border: '1px solid rgba(255,255,255,0.35)', padding: '1px 6px', borderRadius: '2px', fontWeight: 700, color: '#fff' }}>Est. 2003</span>
        </div>
        
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, letterSpacing: '-1.5px', margin: '0 0 6px 0', lineHeight: 1.05 }}>
          Season 23
        </h1>
        
        <div style={{ fontSize: 'clamp(1.05rem, 2.8vw, 1.35rem)', fontWeight: 700, color: '#46d369', marginBottom: '16px' }}>
          The Story is Still being Written...
        </div>

        {/* Translucent & High-Contrast CTA Buttons Row */}
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

  return (
    <div id="characters" style={{ paddingTop: '2.5rem', background: '#141414' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ padding: '0 4%', fontSize: 'clamp(1.1rem, 3.5vw, 1.45rem)', fontWeight: 700, color: '#e5e5e5', margin: '0 0 10px 0' }}>
          She Contains Multitudes
        </h2>
        
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <button className="carousel-btn-nav desktop-only-btn" onClick={() => scroll('left')} style={{ position: 'absolute', left: 0, zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', width: '40px', height: '100%', cursor: 'pointer' }}>❮</button>

          <div className="carousel-track hide-scrollbar touch-scroll-enabled" ref={trackRef} style={{ display: 'flex', overflowX: 'auto', gap: '8px', padding: '10px 4%', scrollBehavior: 'smooth' }}>
            {characters.map((char) => (
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
                  flex: '0 0 clamp(155px, 24vw, 220px)', 
                  aspectRatio: '16/10',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.4)'
                }}
              >
                <img
                  src={char.thumbnail}
                  alt={char.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,20,0.95) 0%, rgba(20,20,20,0.2) 50%, transparent 100%)', zIndex: 2 }} />
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 3, padding: '8px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>{char.name}</div>
                  <div style={{ fontSize: '0.62rem', color: '#a3a3a3', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '1px' }}>
                    <span style={{ color: '#46d369', fontWeight: 700 }}>98% Match</span>
                    <span>{char.year}</span>
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

      {/* Floating Masonry Grid Panel */}
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

      {/* 🎬 HIGH-END NETFLIX ORIGINAL FEATURED BILLBOARD SECTION */}
      <div 
        className="netflix-billboard-container"
        style={{ 
          background: 'linear-gradient(135deg, #1f1f23 0%, #0d0d0e 100%)', 
          padding: '2.5rem clamp(16px, 4vw, 40px)', 
          borderRadius: '6px', 
          border: '1px solid rgba(229, 9, 20, 0.55)', 
          textAlign: 'center', 
          maxWidth: '850px', 
          margin: '0 auto', 
          position: 'relative',
          boxShadow: '0 0 25px rgba(229, 9, 20, 0.25), 0 8px 32px rgba(0,0,0,0.7)' 
        }}
      >
        <div style={{ position: 'absolute', top: '12px', left: '12px', background: '#E50914', color: '#fff', fontSize: '0.6rem', fontWeight: 800, padding: '2px 8px', borderRadius: '2px', letterSpacing: '1px' }}>
          TOP 10 SUMMARY FEATURE
        </div>
        
        <p style={{ color: '#ffffff', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: 1.75, maxWidth: '720px', margin: '15px auto 0', fontWeight: 500, letterSpacing: '0.2px' }}>
          The crab walked sideways to get here.<br />
          The ocean sent its deepest waves.<br />
          The shell held its breath and whispered your name.<br />
          The whale breached the surface for you.<br />
          The sky cleared entirely — no notes.<br />
          The brain sent a 47-tab report.<br />
          And Jesus Christ personally confirmed:<br />
          <br />
          <span style={{ fontSize: '1.2em', fontWeight: 900, color: '#E50914', textShadow: '0 0 15px rgba(229,9,20,0.4)' }}>You are the miracle this year.</span><br />
          <br />
          Happy Birthday, Lakshmi.<br />
          The universe is taking notes.
        </p>
        <div style={{ color: '#666666', marginTop: '1.75rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>— From Everyone Who Watched You Become This —</div>
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
  const [profileScreen, setProfileScreen] = useState<boolean>(true)
  const [guestToast, setGuestToast] = useState<boolean>(false)
  const [profileAnimate, setProfileAnimate] = useState<boolean>(false)

  // Handlers managing access loops safely
  const triggerLakshmiProfile = () => {
    setProfileAnimate(true)
    setTimeout(() => {
      setProfileScreen(false)
    }, 600)
  }

  const triggerGuestProfile = () => {
    setGuestToast(true)
    setTimeout(() => setGuestToast(false), 2400)
  }

  // Gateway Interface matching standard profile wall frameworks
  if (profileScreen) {
    return (
      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 999999, 
        background: '#141414', 
        color: 'white', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        opacity: profileAnimate ? 0 : 1,
        transform: profileAnimate ? 'scale(1.1)' : 'scale(1)',
        transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }}>
        
        {/* Localized Guest Warning Popup Node */}
        {guestToast && (
          <div style={{
            position: 'absolute',
            top: '8%',
            background: '#b20710',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '0.95rem',
            fontWeight: 700,
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            animation: 'flashFadeOverlay 0.3s ease-out'
          }}>
            Evanivi ra nuvvu... 😂
          </div>
        )}

        <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: 500, color: '#fff', marginBottom: '2.5rem', textAlign: 'center', letterSpacing: '0.5px' }}>
          Who&apos;s watching LAKSHMIX?
        </h1>

        <div style={{ display: 'flex', gap: 'clamp(20px, 5vw, 35px)', justifyContent: 'center', flexWrap: 'wrap', padding: '0 20px' }}>
          
          {/* Target Profile: Lakshmi */}
          <div onClick={triggerLakshmiProfile} style={{ textAlign: 'center', cursor: 'pointer' }} className="profile-box-card">
            <div style={{ width: 'clamp(90px, 15vw, 120px)', aspectRatio: '1/1', background: '#E50914', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: 900, color: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.4)', transition: 'outline 0.1s' }} className="p-box-glow">
              L
            </div>
            <div style={{ marginTop: '12px', fontSize: '0.9rem', color: '#808080', fontWeight: 600 }} className="p-text-glow">Lakshmi</div>
            <div style={{ fontSize: '0.65rem', color: '#46d369', fontWeight: 700, marginTop: '2px' }}>[ Main Character ]</div>
          </div>

          {/* Fallback Profile: Guest */}
          <div onClick={triggerGuestProfile} style={{ textAlign: 'center', cursor: 'pointer' }} className="profile-box-card">
            <div style={{ width: 'clamp(90px, 15vw, 120px)', aspectRatio: '1/1', background: '#333333', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: 900, color: '#666', boxShadow: '0 4px 15px rgba(0,0,0,0.4)' }}>
              ?
            </div>
            <div style={{ marginTop: '12px', fontSize: '0.9rem', color: '#808080', fontWeight: 500 }}>Guest Account</div>
          </div>

        </div>

        <button 
          onClick={triggerLakshmiProfile}
          style={{ 
            marginTop: '4.5rem', 
            background: 'none', 
            border: '1px solid #808080', 
            color: '#808080', 
            padding: '8px 26px', 
            fontSize: '0.85rem', 
            letterSpacing: '1px', 
            textTransform: 'uppercase',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Manage Profiles
        </button>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#141414', overflowX: 'hidden' }}>
      
      {/* Structural Hardware Accelerated Animation Rules */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .touch-scroll-enabled { -webkit-overflow-scrolling: touch; }
        
        /* 3D Hardware Accelerated Lifting Styles Matrix */
        .netflix-thumbnail-card:hover {
          transform: translate3d(0, -6px, 0) scale(1.06) !important;
          box-shadow: 0 12px 25px rgba(0,0,0,0.8) !important;
          z-index: 99;
        }
        .netflix-wish-card:hover {
          transform: translate3d(0, -5px, 0) !important;
          border-color: #E50914 !important;
          box-shadow: 0 8px 20px rgba(0,0,0,0.6) !important;
        }
        .profile-box-card:hover .p-box-glow {
          outline: 3px solid #ffffff;
        }
        .profile-box-card:hover .p-text-glow {
          color: #ffffff !important;
        }
        .netflix-btn-white:active, .netflix-btn-gray:active {
          transform: scale(0.95);
        }
        @media (max-width: 768px) {
          .desktop-only-btn { display: none !important; }
          .lx-nav {
            padding: 12px 16px !important;
            background-color: #141414 !important;
            border-bottom: 1px solid #222;
          }
          .netflix-thumbnail-card:hover {
            transform: translate3d(0, -4px, 0) scale(1.04) !important;
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
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { characters } from '../../data/characters' // FIXED: Changed from '../' to '../../'

export const Route = createFileRoute('/character/$id')({
  component: CharacterPage,
})

const cardColors: Record<string, { bg: string; accent: string; icon: string; particle: string }> = {
  'seetha': { bg: 'linear-gradient(135deg, #1b0000 0%, #3d1500 50%, #1b0000 100%)', accent: '#ff8a65', icon: '🌹', particle: '✦' },
  'bhavana': { bg: 'linear-gradient(135deg, #0d1a0d 0%, #1a3320 50%, #0d1a0d 100%)', accent: '#a5d6a7', icon: '🌟', particle: '✨' },
  'chitti': { bg: 'linear-gradient(135deg, #1a0a00 0%, #3d2000 50%, #1a0a00 100%)', accent: '#ffcc02', icon: '🔥', particle: '◉' },
  'swathi': { bg: 'linear-gradient(135deg, #0a0a1f 0%, #1a1545 50%, #0a0a1f 100%)', accent: '#b39ddb', icon: '✉️', particle: '✧' },
  'hasini': { bg: 'linear-gradient(135deg, #001a0d 0%, #003322 50%, #001a0d 100%)', accent: '#80cbc4', icon: '🌿', particle: '❋' },
  'chitra': { bg: 'linear-gradient(135deg, #0a0d1a 0%, #1a1535 50%, #0a0d1a 100%)', accent: '#ef9a9a', icon: '🗡', particle: '◆' },
  'ramulamma': { bg: 'linear-gradient(135deg, #1a0a00 0%, #3d2000 50%, #1a0a00 100%)', accent: '#ffcc02', icon: '🔥', particle: '◉' },
  'arya-stark': { bg: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 50%, #0d1b2a 100%)', accent: '#4fc3f7', icon: '⚔️', particle: '❄' },
  'tara': { bg: 'linear-gradient(135deg, #1a0000 0%, #3d0000 50%, #1a0000 100%)', accent: '#ef5350', icon: '🛡', particle: '✦' },
}

function CharacterPage() {
  const { id } = Route.useParams()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const character = characters.find((c) => c.id === id)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!character) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0a', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '5rem', fontWeight: 900, color: '#E50914', lineHeight: 1 }}>404</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '10px 0 5px' }}>Character Not Found</div>
        <div style={{ color: '#aaa', marginBottom: '20px', fontSize: '0.95rem' }}>This legend hasn&apos;t been added to Lakshmi&apos;s universe yet.</div>
        <button style={{ background: '#E50914', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate({ to: '/home' })}>Return Home</button>
      </div>
    )
  }

  const colors = cardColors[character.id] ?? { bg: '#141414', accent: '#e5e5e5', icon: '✦', particle: '◈' }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: 'white', overflowX: 'hidden', paddingTop: '60px' }}>
      
      {/* Mobile Component Style Injection Layer */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .mobile-qualities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          margin-top: 1.5rem;
        }

        @media (max-width: 768px) {
          .responsive-mobile-nav {
            gap: 14px !important;
          }
          .desktop-bg-icon {
            display: none !important;
          }
          .char-hero-content {
            padding: 2.5rem 1rem 1.5rem !important;
            text-align: center;
          }
          .char-title-container {
            flex-direction: column !important;
            gap: 0.5rem !important;
            justify-content: center;
          }
          .char-quote-block {
            padding-left: 0 !important;
            border-left: none !important;
            font-size: 1.05rem !important;
            text-align: center;
          }
          .char-tags-row {
            justify-content: center !important;
          }
          .lx-nav {
            padding: 12px 16px !important;
            background-color: rgba(10, 10, 10, 0.85) !important;
            backdrop-filter: blur(12px) !important;
          }
          .section-padding-handler {
            padding: 2.5rem 1rem !important;
          }
        }
      `}</style>

      {/* Responsive Structural Navbar */}
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
        background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        transition: 'background-color 0.3s, backdrop-filter 0.3s'
      }}>
        <div className="lx-logo" style={{ cursor: 'pointer', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: 900, color: '#E50914', letterSpacing: '1px' }} onClick={() => navigate({ to: '/home' })}>
          LAKSHMIX
        </div>
        
        <div className="lx-nav-links responsive-mobile-nav" style={{ display: 'flex', gap: 'clamp(12px, 2vw, 24px)' }}>
          <span className="lx-nav-link" style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#eee' }} onClick={() => navigate({ to: '/home' })}>Universe</span>
          <span className="lx-nav-link" style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#eee' }} onClick={() => navigate({ to: '/home' })}>Wishes</span>
          <span className="lx-nav-link" style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#E50914' }} onClick={() => navigate({ to: '/my-wishes' })}>My Wishes</span>
        </div>
        
        <div className="lx-nav-right" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="lx-nav-avatar" onClick={() => navigate({ to: '/' })} style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E50914', color: 'white', fontWeight: 800, borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
            L
          </div>
        </div>
      </nav>

      {/* Back Loop Button Action Link */}
      <div style={{ padding: '1rem clamp(1rem, 4vw, 4%) 0' }}>
        <button 
          onClick={() => navigate({ to: '/home' })}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            color: '#888',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '4px 0',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
        >
          ❮ Back to Universe
        </button>
      </div>

      {/* Hero Header Presentation Display Block */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingBottom: '1rem' }}>
        <div style={{ position: 'absolute', inset: 0, background: colors.bg, opacity: 0.25, zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0a 0%, transparent 100%)', zIndex: 2 }} />
        
        {/* Particle Vector Simulation Field */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: `${(i * 20 + 15) % 85}%`,
                left: `${(i * 27 + 10) % 85}%`,
                color: colors.accent,
                opacity: 0.12,
                fontSize: '1.2rem',
              }}
            >
              {colors.particle}
            </div>
          ))}
        </div>

        {/* Big Desktop Floating Silhouette Icon */}
        <div className="desktop-bg-icon" style={{
          position: 'absolute',
          right: '8%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '22rem',
          opacity: 0.04,
          userSelect: 'none',
          zIndex: 1
        }}>
          {colors.icon}
        </div>

        <div className="char-hero-content" style={{ position: 'relative', zIndex: 5, padding: '3rem clamp(1rem, 4vw, 4%) 2rem', maxWidth: '800px' }}>
          <div style={{ fontSize: '0.75rem', color: colors.accent, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            {character.series} · {character.year} · {character.type}
          </div>

          <div className="char-title-container" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)' }}>{colors.icon}</span>
            <h1 style={{ margin: 0, fontSize: 'clamp(2.2rem, 6.5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-1px' }}>{character.name}</h1>
          </div>

          <p className="char-quote-block" style={{ margin: '0 0 1.5rem 0', paddingLeft: '1rem', borderLeft: `3px solid ${colors.accent}`, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', color: '#eee', lineHeight: 1.4, fontWeight: 300 }}>
            &ldquo;{character.quote}&rdquo;
          </p>

          <div className="char-tags-row" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {character.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#aaa',
                  padding: '4px 10px',
                  borderRadius: '3px',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p style={{ fontFamily: 'var(--font-body, inherit)', fontSize: '0.95rem', color: '#b3b3b3', lineHeight: 1.6, margin: 0 }}>
            {character.shortDesc}
          </p>
        </div>
      </section>

      {/* Shared Characteristics Structural Cards Grid */}
      <section className="section-padding-handler" style={{ padding: '3rem clamp(1rem, 4vw, 4%) 2.5rem' }}>
        <h2 style={{
          fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)',
          fontWeight: 800,
          letterSpacing: '0.5px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          margin: 0
        }}>
          <span style={{ color: colors.accent }}>◈</span>
          What Lakshmi Shares With {character.name}
        </h2>

        <div className="mobile-qualities-grid">
          {character.qualities.map((quality, i) => (
            <div key={i} style={{ background: '#111113', padding: '1.5rem', borderRadius: '6px', border: '1px solid #1e1e20', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: colors.accent, letterSpacing: '1px', marginBottom: '4px' }}>FRAME 0{i + 1}</div>
              <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '8px' }}>{quality.title}</div>
              <p style={{ color: '#a0a0a0', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>{quality.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Ambient Wish Letter Message Widget */}
      <section className="section-padding-handler" style={{ padding: '0 clamp(1rem, 4vw, 4%) 4rem' }}>
        <h2 style={{
          fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)',
          fontWeight: 800,
          letterSpacing: '0.5px',
          color: 'white',
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <span style={{ color: '#E50914', fontSize: '1.1em' }}>♥</span>
          A Message From {character.name} to Lakshmi
        </h2>

        <div style={{ position: 'relative', background: 'linear-gradient(135deg, #111 0%, #0c0c0e 100%)', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${colors.accent}20`, boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
          <div
            style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1.25rem',
              fontSize: '2.5rem',
              opacity: 0.08,
              userSelect: 'none'
            }}
          >
            {colors.icon}
          </div>
          <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.6, color: '#dfdfdf' }}>
            &ldquo;{character.wishMessage}&rdquo;
          </p>
        </div>
      </section>

      {/* Internal Routing Matrix Nav Group */}
      <section className="section-padding-handler" style={{ padding: '0 clamp(1rem, 4vw, 4%) 4rem', borderTop: '1px solid #121214' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#666', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Explore Other Universe Branches
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {characters.filter(c => c.id !== id).slice(0, 4).map((char) => {
            const c = cardColors[char.id] ?? { accent: '#e5e5e5', icon: '✦' }
            return (
              <button
                key={char.id}
                onClick={() => navigate({ to: '/character/$id', params: { id: char.id } })}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: '#111113',
                  border: '1px solid #1e1e20',
                  color: '#bbb',
                  padding: '8px 14px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = c.accent + '50'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1e1e20'
                  e.currentTarget.style.color = '#bbb'
                }}
              >
                <span>{c.icon}</span>
                {char.name}
              </button>
            )
          })}
          <button
            onClick={() => navigate({ to: '/home' })}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(229,9,20,0.08)',
              border: '1px solid rgba(229,9,20,0.25)',
              color: '#E50914',
              padding: '8px 14px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: 700,
            }}
          >
            All Icons →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#050505', padding: '2.5rem 4%', textAlign: 'center', borderTop: '1px solid #111' }}>
        <div className="lx-footer-logo" style={{ cursor: 'pointer', color: '#E50914', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '0.5px' }} onClick={() => navigate({ to: '/home' })}>
          LAKSHMIX
        </div>
        <div style={{ color: '#444', fontSize: '0.8rem', marginTop: '0.4rem' }}>A cinematic tribute · Made with love · 2026</div>
      </footer>
    </div>
  )
}
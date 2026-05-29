import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/my-wishes')({
  component: MyWishesPage,
})

function MyWishesPage() {
  const navigate = useNavigate()

  // Base URL fallback handler to prevent router routing nesting path breaks
  const getAssetPath = (path: string) => {
    return `${window.location.origin}${path}`
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: 'white', overflowX: 'hidden' }}>
      
      {/* Dynamic Keyframe Animations for that Grand Cinematic Vibe */}
      <style>{`
        @keyframes subtleGlow {
          0% { box-shadow: 0 0 15px rgba(229, 9, 20, 0.4), 0 4px 20px rgba(0,0,0,0.8); }
          50% { box-shadow: 0 0 30px rgba(229, 9, 20, 0.75), 0 4px 30px rgba(229, 9, 20, 0.2); }
          100% { box-shadow: 0 0 15px rgba(229, 9, 20, 0.4), 0 4px 20px rgba(0,0,0,0.8); }
        }
        .grand-featured-card {
          animation: subtleGlow 4s infinite ease-in-out;
        }
        .gallery-responsive-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .main-large-item {
          grid-column: 1 / 3;
          grid-row: 1 / 3;
        }
        .featured-dream-item {
          grid-column: 1 / 5;
          margin-bottom: 8px;
        }
        @media (max-width: 950px) {
          .gallery-responsive-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .main-large-item {
            grid-column: 1 / 3 !important;
            grid-row: auto !important;
          }
          .featured-dream-item {
            grid-column: 1 / 3 !important;
          }
        }
        @media (max-width: 520px) {
          .gallery-responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .main-large-item, .featured-dream-item {
            grid-column: auto !important;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className="lx-nav scrolled" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: 'clamp(10px, 2vw, 20px) clamp(15px, 4vw, 40px)'
      }}>
        <div className="lx-logo" style={{ cursor: 'pointer', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 'bold', color: '#E50914' }} onClick={() => navigate({ to: '/home' })}>
          LAKSHMIX
        </div>
        <div className="lx-nav-links responsive-nav-links" style={{ display: 'flex', gap: 'clamp(10px, 2vw, 20px)' }}>
          <a className="lx-nav-link" onClick={(e) => { e.preventDefault(); navigate({ to: '/home' }) }} href="/home">Home</a>
          <a className="lx-nav-link" onClick={(e) => { e.preventDefault(); navigate({ to: '/home#characters' }) }} href="/home#characters">Universe</a>
          <a className="lx-nav-link" onClick={(e) => { e.preventDefault(); navigate({ to: '/home#wishes' }) }} href="/home#wishes">Wishes</a>
        </div>
        <div className="lx-nav-right">
          <div className="lx-nav-avatar" onClick={() => navigate({ to: '/' })} style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#333', borderRadius: '4px', cursor: 'pointer' }}>
            L
          </div>
        </div>
      </nav>

      {/* Hero Intro */}
      <section
        style={{
          paddingTop: 'clamp(90px, 12vh, 120px)',
          paddingBottom: 'clamp(20px, 6vw, 40px)',
          paddingLeft: 'clamp(1.2rem, 5vw, 6vw)',
          paddingRight: 'clamp(1.2rem, 5vw, 6vw)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(229,9,20,0.18) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(229,9,20,0.12)',
            border: '1px solid rgba(229,9,20,0.35)',
            color: '#E50914',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '0.35rem 1rem',
            borderRadius: '2px',
            marginBottom: '1.25rem',
          }}
        >
          Personal · For Lakshmi
        </div>
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 6.5vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-1px',
            marginBottom: '1.25rem',
          }}
        >
          My <span style={{ color: '#E50914' }}>Wishes</span>
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(235,235,235,0.9)',
            maxWidth: '720px',
            margin: '0 auto 0.85rem',
          }}
        >
          23 seasons later, still under exploration... and that&apos;s what makes the story interesting
        </p>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(200,200,200,0.6)',
            maxWidth: '540px',
            margin: '0 auto',
          }}
        >
          a small tribute to one of my favorite people
        </p>
      </section>

      {/* Photo & Video Gallery Grid */}
      <section
        style={{
          padding: '0 clamp(1rem, 4vw, 4%) 4rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.75rem',
          }}
        >
          <div style={{ width: '1.5rem', height: '2px', background: '#E50914' }} />
          <h2
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#fff'
            }}
          >
            OUR GALLERY
          </h2>
        </div>

        <div className="gallery-responsive-grid">
          
          {/* 🌟 GRAND HORIZONTAL FEATURED PICTURE: Lakshmi Dream */}
          <div
            className="featured-dream-item grand-featured-card"
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              border: '2px solid rgba(229, 9, 20, 0.85)',
              background: '#111',
              aspectRatio: '16/9',
              cursor: 'pointer'
            }}
          >
            <img
              src={getAssetPath('/images/lakshmi-dream.png')}
              alt="The Dream"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.98) saturate(1.12)',
                transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = '' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                background: '#E50914',
                color: 'white',
                fontSize: '0.6rem',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
                zIndex: 4
              }}
            >
              ★ THE PREMIUM CUT
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem 1.5rem 1.25rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
                zIndex: 2
              }}
            >
              <div style={{ fontWeight: 900, fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', letterSpacing: '0.5px', color: '#ffcc02', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>THE DREAM ARCHIVE</div>
              <div style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)', opacity: 0.9, marginTop: '4px', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>A beautiful landscape frame holding true main character values.</div>
            </div>
          </div>

          {/* Main Video Box Block */}
          <div
            className="main-large-item"
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 6px 25px rgba(0,0,0,0.5)',
              background: '#000',
              aspectRatio: '16/10',
              border: '1px solid rgba(255,255,255,0.06)'
            }}
          >
            <video
              src={getAssetPath('/images/video.mp4')}
              autoPlay
              loop
              muted
              playsInline
              controls
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.95)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.25rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                zIndex: 3,
                pointerEvents: 'none'
              }}
            >
              <div style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.5px' }}>LAKSHMI COVER</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.8rem', opacity: 0.75 }}>Live stream exploration arc.</div>
            </div>
          </div>

          {/* Secondary Photo Matrix - Proportioned cleanly for vertical scanning on mobile screens */}
          {[
            { src: '/images/lakshmi-dream2.png', label: 'The Horizon' },
            { src: '/images/lakshmi-weird-photo.jpg', label: 'The Weird Moments' },
            { src: '/images/lakshmi-and-me-museum.jpg', label: 'The Museum Day' },
            { src: '/images/lakshmi-and-me-temple-bw-photo.jpg', label: 'The Temple (B&W Classic)' },
            { src: '/images/lakshmi-and-me-temple-bw.jpg', label: 'The Heritage Frame' },
            { src: '/images/lakshmi-and-me-temple.jpg', label: 'The Shared Paths' },
            { src: '/images/lakshmi-and-me-temple-2.jpg', label: 'The Sacred Ground' },
            { src: '/images/lakshmi-temple-bluedress.jpg', label: 'The Blue Dress Portrait' },
            { src: '/images/lakshmi-temple.jpg', label: 'The Sanctuary' },
            { src: '/images/lakshmilaugh.jpg', label: 'Pure Laughter' },
            { src: '/images/lakshmi-beach.jpg', label: 'The Sunset Waves' },
            { src: '/images/lakshmiinteemple.png', label: 'The Core Memory' }
          ].map((photo, i) => (
            <div
              key={i}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                aspectRatio: '4/3', // Perfect mobile display box ratio
                background: '#141416',
                border: '1px solid rgba(255,255,255,0.04)'
              }}
            >
              <img
                src={getAssetPath(photo.src)}
                alt={photo.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'brightness(0.85) saturate(1.02)',
                  transition: 'transform 0.4s ease, filter 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  img.style.transform = 'scale(1.04)'
                  img.style.filter = 'brightness(0.95) saturate(1.1)'
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  img.style.transform = ''
                  img.style.filter = 'brightness(0.85) saturate(1.02)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1rem 0.75rem 0.65rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.9)',
                    textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                  }}
                >
                  {photo.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speech Section */}
      <section
        style={{
          padding: '3rem clamp(1rem, 4vw, 4%) 5rem',
          maxWidth: '850px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ width: '1.5rem', height: '2px', background: '#E50914' }} />
          <h2
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            MY SPEECH
          </h2>
        </div>

        <div
          style={{
            position: 'relative',
            borderLeft: '2px solid #E50914',
            paddingLeft: 'clamp(1rem, 4vw, 2rem)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-1.5rem',
              left: '-0.35rem',
              fontFamily: 'var(--font-serif)',
              fontSize: '4.5rem',
              color: '#E50914',
              opacity: 0.2,
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            &ldquo;
          </div>

          {[
            'I\'ve been trying to write this for weeks. Every draft felt either too short for what you mean, or too long for what a birthday message is supposed to be. So let me just say it plainly.',
            'You are one of the most quietly remarkable people I\'ve ever known. Not quietly in the sense of small — quiet in the sense of a storm that doesn\'t announce itself before it rearranges everything.',
            'You\'ve had bad days that would have broken most people. You\'ve sat in rooms where you were doubted, dismissed, or simply invisible — and you didn\'t flinch. You just waited. And then you delivered. That specific kind of patience — the kind that isn\'t passive but precise — that\'s a superpower most people never develop.',
            'The highest package of the decade is brilliant. I mean that. But it\'s also the least interesting thing about you. What\'s interesting is the version of you that existed before the title. The one who showed up anyway. The one who kept going when going felt impossible.',
            'So today, on your birthday — I want to celebrate that person. Not just the achievement, but the whole messy, brilliant, hilarious, kind, occasionally chaotic, deeply generous human being behind it.',
            'You have my full respect, my admiration, and my sincere wish that every single thing ahead of you is as extraordinary as you deserve. And you deserve a lot.',
            'Happy Birthday, Lakshmi. May this year be your most ridiculous, beautiful, and victorious one yet.',
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: i === 0 ? 'var(--font-body, inherit)' : 'var(--font-serif)',
                fontStyle: i === 0 ? 'normal' : 'italic',
                fontSize: i === 0 ? '1rem' : 'clamp(0.95rem, 1.8vw, 1.2rem)',
                fontWeight: 300,
                lineHeight: 1.75,
                color: i === 6 ? 'white' : 'rgba(220,220,220,0.85)',
                marginBottom: i === 6 ? 0 : '1.5rem',
              }}
            >
              {para}
            </p>
          ))}

          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div style={{ flex: 1, height: '1px', background: '#222' }} />
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: '#E50914',
              }}
            >
              — With everything —
            </span>
            <div style={{ flex: 1, height: '1px', background: '#222' }} />
          </div>
        </div>
      </section>

      {/* Back Loop Navigation Button */}
      <section style={{ textAlign: 'center', padding: '1rem 4% 5rem' }}>
        <button
          onClick={() => navigate({ to: '/home' })}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            background: '#E50914',
            color: 'white',
            border: 'none',
            padding: '0.8rem 2rem',
            borderRadius: '4px',
            fontWeight: 700,
            fontSize: '0.85rem',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#b20710' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#E50914' }}
        >
          ← Back to Lakshmi&apos;s Universe
        </button>
      </section>

      {/* Footer */}
      <footer style={{ background: '#000', padding: '2.5rem 4%', textAlign: 'center', borderTop: '1px solid #161616' }}>
        <div className="lx-footer-logo" onClick={() => navigate({ to: '/' })} style={{ cursor: 'pointer', color: '#E50914', fontWeight: 'bold', fontSize: '1.2rem' }}>
          LAKSHMIX
        </div>
        <div style={{ color: '#555', fontSize: '0.8rem', marginTop: '0.4rem' }}>Made with love · 2026 · Lakshmi&apos;s Universe</div>
      </footer>
    </div>
  )
}

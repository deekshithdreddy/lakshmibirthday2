import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/my-wishes')({
  component: MyWishesPage,
})

const galleryPhotos = [
  { src: '/lakshmi-photo.jpg', alt: 'Lakshmi', span: 'large' },
  { src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', alt: 'Memory', span: 'small' },
  { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80', alt: 'Moment', span: 'small' },
  { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', alt: 'Journey', span: 'small' },
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80', alt: 'Adventure', span: 'small' },
]

function MyWishesPage() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--lx-bg)', color: 'var(--lx-text)' }}>
      {/* Navbar */}
      <nav className="lx-nav scrolled">
        <div className="lx-logo" style={{ cursor: 'pointer' }} onClick={() => navigate({ to: '/home' })}>LAKSHMIX</div>
        <div className="lx-nav-links">
          <a className="lx-nav-link" onClick={(e) => { e.preventDefault(); navigate({ to: '/home' }) }} href="/home">Home</a>
          <a className="lx-nav-link" onClick={(e) => { e.preventDefault(); navigate({ to: '/home' }) }} href="/home#characters">Universe</a>
          <a className="lx-nav-link" onClick={(e) => { e.preventDefault(); navigate({ to: '/home' }) }} href="/home#wishes">Wishes</a>
        </div>
        <div className="lx-nav-right">
          <div className="lx-nav-avatar" onClick={() => navigate({ to: '/' })}>L</div>
        </div>
      </nav>

      {/* Hero Intro */}
      <section
        style={{
          paddingTop: '120px',
          paddingBottom: '60px',
          paddingLeft: '6vw',
          paddingRight: '6vw',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(229,9,20,0.12) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(229,9,20,0.12)',
            border: '1px solid rgba(229,9,20,0.35)',
            color: 'var(--lx-red)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            padding: '0.4rem 1.2rem',
            borderRadius: '2px',
            marginBottom: '1.5rem',
          }}
        >
          Personal · For Lakshmi
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 1,
            letterSpacing: '0.02em',
            marginBottom: '1.5rem',
            color: 'var(--lx-text)',
          }}
        >
          My <span style={{ color: 'var(--lx-red)' }}>Wishes</span>
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'rgba(229,229,229,0.85)',
            maxWidth: '680px',
            margin: '0 auto 0.75rem',
          }}
        >
          You didn&apos;t just turn 22. You turned the whole game around.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'rgba(229,229,229,0.6)',
            maxWidth: '580px',
            margin: '0 auto',
          }}
        >
          Here is everything I couldn&apos;t fit in a text message.
        </p>
      </section>

      {/* Photo Gallery */}
      <section
        style={{
          padding: '0 4vw 5rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            paddingLeft: '2vw',
          }}
        >
          <div style={{ width: '2rem', height: '2px', background: 'var(--lx-red)' }} />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              letterSpacing: '0.1em',
              color: 'var(--lx-text)',
            }}
          >
            OUR GALLERY
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 220px)',
            gap: '12px',
          }}
        >
          {/* Main large photo — spans 2 cols × 2 rows */}
          <div
            style={{
              gridColumn: '1 / 3',
              gridRow: '1 / 3',
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            }}
          >
            <img
              src="/lakshmi-photo.jpg"
              alt="Lakshmi"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                filter: 'brightness(0.95) saturate(1.1)',
                transition: 'transform 0.5s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = '' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                color: 'white',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '0.1em' }}>LAKSHMI</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.85rem', opacity: 0.8 }}>The main character. Always was.</div>
            </div>
          </div>

          {/* Grid photos — 4 smaller */}
          {[
            {
              src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
              label: 'The Journey',
            },
            {
              src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
              label: 'The Moments',
            },
            {
              src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
              label: 'The Dreams',
            },
            {
              src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
              label: 'The Horizon',
            },
          ].map((photo, i) => (
            <div
              key={i}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src={photo.src}
                alt={photo.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'brightness(0.8) saturate(1.1)',
                  transition: 'transform 0.4s ease, filter 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  img.style.transform = 'scale(1.06)'
                  img.style.filter = 'brightness(1) saturate(1.2)'
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  img.style.transform = ''
                  img.style.filter = 'brightness(0.8) saturate(1.1)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '0.75rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {photo.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speech / Message */}
      <section
        style={{
          padding: '4rem 6vw 6rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          <div style={{ width: '2rem', height: '2px', background: 'var(--lx-red)' }} />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              letterSpacing: '0.1em',
              color: 'var(--lx-text)',
            }}
          >
            MY SPEECH
          </h2>
        </div>

        <div
          style={{
            position: 'relative',
            borderLeft: '3px solid var(--lx-red)',
            paddingLeft: '2.5rem',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-1rem',
              left: '-0.5rem',
              fontFamily: 'var(--font-serif)',
              fontSize: '5rem',
              color: 'var(--lx-red)',
              opacity: 0.3,
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
                fontFamily: i === 0 ? 'var(--font-body)' : 'var(--font-serif)',
                fontStyle: i === 0 ? 'normal' : 'italic',
                fontSize: i === 0 ? '1.05rem' : 'clamp(1rem, 1.8vw, 1.25rem)',
                fontWeight: 300,
                lineHeight: 1.9,
                color: i === 6 ? 'rgba(229,229,229,1)' : 'rgba(229,229,229,0.85)',
                marginBottom: i === 6 ? 0 : '1.75rem',
                letterSpacing: i > 0 ? '0.01em' : '0',
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
            <div style={{ flex: 1, height: '1px', background: 'var(--lx-border)' }} />
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--lx-red)',
              }}
            >
              — With everything —
            </span>
            <div style={{ flex: 1, height: '1px', background: 'var(--lx-border)' }} />
          </div>
        </div>
      </section>

      {/* Back to Universe */}
      <section
        style={{
          textAlign: 'center',
          padding: '2rem 4% 6rem',
        }}
      >
        <button
          onClick={() => navigate({ to: '/home' })}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'var(--lx-red)',
            color: 'white',
            border: 'none',
            padding: '0.85rem 2.5rem',
            borderRadius: '3px',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.08em',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#b20710' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--lx-red)' }}
        >
          ← Back to Lakshmi&apos;s Universe
        </button>
      </section>

      {/* Footer */}
      <footer className="lx-footer">
        <div className="lx-footer-logo" onClick={() => navigate({ to: '/' })} style={{ cursor: 'pointer' }}>
          LAKSHMIX
        </div>
        <div className="lx-footer-text">Made with love · 2025 · Lakshmi&apos;s Universe</div>
      </footer>
    </div>
  )
}

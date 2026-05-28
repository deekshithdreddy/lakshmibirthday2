import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { characters } from '../../data/characters'

export const Route = createFileRoute('/character/$id')({
  component: CharacterPage,
})

const cardColors: Record<string, { bg: string; accent: string; icon: string; particle: string }> = {
  'arya-stark': { bg: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 50%, #0d1b2a 100%)', accent: '#4fc3f7', icon: '⚔️', particle: '❄' },
  'daenerys': { bg: 'linear-gradient(135deg, #1a0a2e 0%, #3a1060 50%, #1a0a2e 100%)', accent: '#e040fb', icon: '🐉', particle: '🔥' },
  'black-widow': { bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)', accent: '#ef5350', icon: '🕷', particle: '◈' },
  'seetha': { bg: 'linear-gradient(135deg, #1b0000 0%, #3d1500 50%, #1b0000 100%)', accent: '#ff8a65', icon: '🌹', particle: '✦' },
  'setsuko': { bg: 'linear-gradient(135deg, #0d1a0d 0%, #1a3320 50%, #0d1a0d 100%)', accent: '#a5d6a7', icon: '🌟', particle: '✨' },
  'ramulamma': { bg: 'linear-gradient(135deg, #1a0a00 0%, #3d2000 50%, #1a0a00 100%)', accent: '#ffcc02', icon: '🔥', particle: '◉' },
  'mikasa': { bg: 'linear-gradient(135deg, #0a0d1a 0%, #1a1535 50%, #0a0d1a 100%)', accent: '#ef9a9a', icon: '🗡', particle: '◆' },
  'nausicaa': { bg: 'linear-gradient(135deg, #001a0d 0%, #003322 50%, #001a0d 100%)', accent: '#80cbc4', icon: '🌿', particle: '❋' },
  'violet': { bg: 'linear-gradient(135deg, #0a0a1f 0%, #1a1545 50%, #0a0a1f 100%)', accent: '#b39ddb', icon: '✉️', particle: '✧' },
  'erza': { bg: 'linear-gradient(135deg, #1a0000 0%, #3d0000 50%, #1a0000 100%)', accent: '#ef5350', icon: '🛡', particle: '✦' },
}

function CharacterPage() {
  const { id } = Route.useParams()
  const navigate = useNavigate()
  const character = characters.find((c) => c.id === id)

  if (!character) {
    return (
      <div className="profile-locked">
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', color: 'var(--lx-red)' }}>404</div>
        <div className="profile-locked-title">Character Not Found</div>
        <div className="profile-locked-text">This legend hasn&apos;t been added to Lakshmi&apos;s universe yet.</div>
        <button className="btn-primary" onClick={() => navigate({ to: '/home' })}>Return Home</button>
      </div>
    )
  }

  const colors = cardColors[character.id] ?? { bg: '#141414', accent: '#e5e5e5', icon: '✦', particle: '◈' }

  return (
    <div className="char-page">
      {/* Back button */}
      <button className="char-back-btn" onClick={() => navigate({ to: '/home' })}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15,18 9,12 15,6"/>
        </svg>
        Back to Universe
      </button>

      {/* Hero */}
      <section className="char-hero">
        <div className="char-hero-bg" style={{ background: colors.bg }}>
          {/* Animated particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: `${(i * 17 + 10) % 90}%`,
                left: `${(i * 23 + 5) % 90}%`,
                color: colors.accent,
                opacity: 0.15,
                fontSize: `${1 + (i % 3) * 0.5}rem`,
                animation: `loadingPulse ${3 + (i % 4)}s ease infinite`,
                animationDelay: `${(i * 0.4) % 3}s`,
              }}
            >
              {colors.particle}
            </div>
          ))}
          {/* Big background icon */}
          <div style={{
            position: 'absolute',
            right: '5%',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(15rem, 25vw, 30rem)',
            opacity: 0.06,
            lineHeight: 1,
            userSelect: 'none',
            filter: 'grayscale(0.5)',
          }}>
            {colors.icon}
          </div>
        </div>
        <div className="char-hero-overlay" />

        <div className="char-hero-content">
          <div className="char-series-label">{character.series} · {character.year} · {character.type}</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '3rem' }}>{colors.icon}</span>
            <h1 className="char-name" style={{ margin: 0 }}>{character.name}</h1>
          </div>

          <blockquote className="char-quote-block">&ldquo;{character.quote}&rdquo;</blockquote>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {character.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: `${colors.accent}18`,
                  border: `1px solid ${colors.accent}40`,
                  color: colors.accent,
                  padding: '0.3rem 0.75rem',
                  borderRadius: '2px',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1rem',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'rgba(229,229,229,0.7)',
            lineHeight: 1.6,
          }}>
            {character.shortDesc}
          </p>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="video-section">
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          letterSpacing: '0.08em',
          color: 'var(--lx-text)',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--lx-red)">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
          Watch the Legend
        </h2>
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${character.youtubeId}?rel=0&modestbranding=1&color=white`}
            title={`${character.name} - Official Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '0.8rem',
          fontStyle: 'italic',
          color: 'var(--lx-muted)',
          marginTop: '0.75rem',
          textAlign: 'center',
        }}>
          You can replace this video with a personal message later
        </p>
      </section>

      {/* Qualities */}
      <section className="qualities-section">
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          letterSpacing: '0.08em',
          color: 'var(--lx-text)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <span style={{ color: colors.accent }}>◈</span>
          What Lakshmi Shares With {character.name}
        </h2>

        <div className="qualities-grid">
          {character.qualities.map((quality, i) => (
            <div key={i} className="quality-card fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="quality-number">0{i + 1}</div>
              <div className="quality-title">{quality.title}</div>
              <p className="quality-desc">{quality.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Wish Message */}
      <section className="wish-message-section">
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          letterSpacing: '0.08em',
          color: 'var(--lx-text)',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lx-red)" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          A Message From {character.name} to Lakshmi
        </h2>

        <div className="wish-message-card" style={{ borderColor: `${colors.accent}30` }}>
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              fontSize: '3rem',
              opacity: 0.15,
            }}
          >
            {colors.icon}
          </div>
          <p className="wish-message-text">{character.wishMessage}</p>
        </div>
      </section>

      {/* Navigation to other characters */}
      <section style={{ padding: '0 4% 4rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          letterSpacing: '0.08em',
          color: 'var(--lx-text)',
          marginBottom: '1rem',
        }}>
          More Icons in Lakshmi&apos;s Universe
        </h2>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {characters.filter(c => c.id !== id).slice(0, 5).map((char) => {
            const c = cardColors[char.id] ?? { accent: '#e5e5e5', icon: '✦' }
            return (
              <button
                key={char.id}
                onClick={() => navigate({ to: '/character/$id', params: { id: char.id } })}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--lx-card)',
                  border: '1px solid var(--lx-border)',
                  color: 'var(--lx-text)',
                  padding: '0.6rem 1.1rem',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-body)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = c.accent + '60'
                  e.currentTarget.style.color = c.accent
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--lx-border)'
                  e.currentTarget.style.color = 'var(--lx-text)'
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
              gap: '0.5rem',
              background: 'rgba(229,9,20,0.1)',
              border: '1px solid rgba(229,9,20,0.3)',
              color: 'var(--lx-red)',
              padding: '0.6rem 1.1rem',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-body)',
              transition: 'all 0.2s ease',
            }}
          >
            View All →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="lx-footer">
        <div className="lx-footer-logo" style={{ cursor: 'pointer' }} onClick={() => navigate({ to: '/' })}>
          LAKSHMIX
        </div>
        <div className="lx-footer-text">A cinematic tribute · Made with love · 2025</div>
      </footer>
    </div>
  )
}

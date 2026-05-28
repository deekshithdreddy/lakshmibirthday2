import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { profiles } from '../data/characters'
import { z } from 'zod'

const lockedSearchSchema = z.object({
  profile: z.string().optional(),
})

export const Route = createFileRoute('/locked')({
  validateSearch: lockedSearchSchema,
  component: LockedPage,
})

const funnyMessages: Record<string, { title: string; text: string; icon: string }> = {
  'peetha': {
    icon: '🔐',
    title: 'Nice Try, Peetha!',
    text: 'This universe has only one star. And today, her name is Lakshmi. You\'re still fabulous, but this gate requires a higher clearance level.',
  },
  'gajini-sister': {
    icon: '🎭',
    title: 'Gajini\'s Sister Says...',
    text: 'Even Gajini couldn\'t remember everything — but he definitely remembered that this profile belongs exclusively to Lakshmi. Access: Denied (with love).',
  },
  'nolan': {
    icon: '📷',
    title: 'Photographer Nolan Sees This',
    text: 'Through Nolan\'s lens, every shot is perfect — except this login attempt. The frame is beautiful, but it\'s not the protagonist\'s frame. That belongs to Lakshmi alone.',
  },
}

function LockedPage() {
  const navigate = useNavigate()
  const { profile } = Route.useSearch()
  const profileData = profiles.find(p => p.id === profile)
  const message = profile ? funnyMessages[profile] : null

  return (
    <div style={{ minHeight: '100vh', background: 'var(--lx-bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Background effect */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 40%, rgba(229,9,20,0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'absolute', top: '1.5rem', left: '2rem' }}>
        <div className="lx-logo">LAKSHMIX</div>
      </div>

      <div className="profile-locked">
        <div className="profile-locked-icon" style={{ fontSize: '5rem' }}>
          {message?.icon ?? '🔒'}
        </div>

        {profileData && (
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
            color: 'var(--lx-muted)',
            textTransform: 'uppercase',
          }}>
            Profile: {profileData.name}
          </div>
        )}

        <div className="profile-locked-title">
          {message?.title ?? 'Access Restricted'}
        </div>

        <p className="profile-locked-text">
          {message?.text ?? 'This universe belongs to Lakshmi. Only she holds the key to this world.'}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            className="btn-primary"
            onClick={() => navigate({ to: '/home' })}
          >
            Enter as Guest
          </button>
          <button
            className="btn-secondary"
            onClick={() => navigate({ to: '/' })}
          >
            Switch Profile
          </button>
        </div>

        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '0.85rem',
          fontStyle: 'italic',
          color: 'rgba(128,128,128,0.5)',
          marginTop: '1rem',
        }}>
          &ldquo;Every great story has one protagonist. Today, it&apos;s her.&rdquo;
        </div>
      </div>
    </div>
  )
}

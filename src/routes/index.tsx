import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { profiles } from '../data/characters'

export const Route = createFileRoute('/')({
  component: ProfilePage,
})

function ProfilePage() {
  const navigate = useNavigate()
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selecting, setSelecting] = useState<string | null>(null)

  const handleSelect = (profileId: string) => {
    setSelecting(profileId)
    setTimeout(() => {
      if (profileId === 'lakshmi') {
        navigate({ to: '/home' })
      } else {
        navigate({ to: '/locked', search: { profile: profileId } })
      }
    }, 600)
  }

  return (
    <>
      <div className="loading-screen">
        <div className="loading-l">L</div>
      </div>
      <div className="profile-page">
        <div className="profile-page-header">
          <div className="lx-logo">LAKSHMIX</div>
        </div>

        <div className="fade-in-up stagger-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
          <h1 className="profile-title">Who&apos;s Watching?</h1>

          <div className="profiles-grid">
            {profiles.map((profile, i) => (
              <div
                key={profile.id}
                className="profile-card fade-in-up"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                onMouseEnter={() => setHoveredId(profile.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleSelect(profile.id)}
              >
                <div
                  className={`profile-avatar profile-avatar-${profile.id === 'gajini-sister' ? 'gajini' : profile.id}`}
                  style={{
                    opacity: selecting && selecting !== profile.id ? 0.3 : 1,
                    transform: selecting === profile.id ? 'scale(0.92)' : undefined,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div className="profile-avatar-inner">
                    {profile.initials}
                    {hoveredId === profile.id && profile.id === 'lakshmi' && (
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(229,9,20,0.05)' }} />
                    )}
                  </div>
                </div>
                <span className="profile-name">{profile.name}</span>
              </div>
            ))}
          </div>

          <button
            className="btn-secondary fade-in-up stagger-4"
            style={{ marginTop: '1rem' }}
            onClick={() => handleSelect('lakshmi')}
          >
            Manage Profiles
          </button>
        </div>

        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: i % 2 === 0 ? '2px' : '1px',
                height: i % 2 === 0 ? '2px' : '1px',
                borderRadius: '50%',
                background: 'rgba(229,9,20,0.4)',
                top: `${(i * 17 + 7) % 100}%`,
                left: `${(i * 23 + 13) % 100}%`,
                animation: `loadingPulse ${2 + (i % 3)}s ease infinite`,
                animationDelay: `${(i * 0.3) % 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/my-wishes')({
  component: MyWishesPage,
})

interface SpecialParticle {
  x: number
  y: number
  size: number
  color: string
  speedX: number
  speedY: number
  rotation: number
  rotationSpeed: number
  opacity: number
  glow?: boolean
}

function MyWishesPage() {
  const navigate = useNavigate()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<SpecialParticle[]>([])
  const animationFrameRef = useRef<number | null>(null)
  const streamIntervalRef = useRef<number | null>(null)
  
  const [rating, setRating] = useState<number>(0)
  const [hoverRating, setHoverRating] = useState<number>(0)
  const [flashActive, setFlashActive] = useState<boolean>(false)

  const getAssetPath = (path: string) => {
    return `${window.location.origin}${path}`
  }

  // Unified High-Velocity Particle Pipeline Engine
  const executeRatingImpact = (selectedScore: number) => {
    setRating(selectedScore)
    if (!canvasRef.current) return

    // Clear any previously running streams instantly
    if (streamIntervalRef.current) {
      clearInterval(streamIntervalRef.current)
      streamIntervalRef.current = null
    }
    
    const startX = window.innerWidth / 2
    const startY = window.innerHeight * 0.72
    
    const baseMinVelocity = 7
    const baseMaxVelocity = 15

    // TIER 1: 1 & 2 Stars — Blazing Red & Solid Deep Black Stars from center
    if (selectedScore === 1 || selectedScore === 2) {
      setFlashActive(true)
      setTimeout(() => setFlashActive(false), 500)

      const monochromeRedTones = ['#E50914', '#000000', '#111111', '#ff3333']
      const clusterQueue: SpecialParticle[] = []
      for (let i = 0; i < 80; i++) {
        const angle = Math.random() * Math.PI * 2
        const velocity = baseMinVelocity + Math.random() * baseMaxVelocity
        clusterQueue.push({
          x: startX,
          y: startY,
          size: 9 + Math.random() * 10,
          color: monochromeRedTones[Math.floor(Math.random() * monochromeRedTones.length)],
          speedX: Math.cos(angle) * velocity,
          speedY: (Math.sin(angle) * velocity) - 4,
          rotation: Math.random() * 360,
          rotationSpeed: -15 + Math.random() * 30,
          opacity: 1
        })
      }
      particlesRef.current = [...particlesRef.current, ...clusterQueue]
    } 
    // TIER 2: 3 & 4 Stars — Delicate Decreased Size Gold & Silver Fields from center
    else if (selectedScore === 3 || selectedScore === 4) {
      const metallicTones = ['#ffcc02', '#ffd700', '#e6e6e6', '#ffffff', '#aaaaaa']
      const clusterQueue: SpecialParticle[] = []
      for (let i = 0; i < 180; i++) {
        const angle = Math.random() * Math.PI * 2
        const velocity = baseMinVelocity + Math.random() * baseMaxVelocity
        clusterQueue.push({
          x: startX,
          y: startY,
          size: 3 + Math.random() * 5,
          color: metallicTones[Math.floor(Math.random() * metallicTones.length)],
          speedX: Math.cos(angle) * velocity,
          speedY: (Math.sin(angle) * velocity) - 5,
          rotation: Math.random() * 360,
          rotationSpeed: -20 + Math.random() * 40,
          opacity: 1
        })
      }
      particlesRef.current = [...particlesRef.current, ...clusterQueue]
    } 
    // 🐋 TIER 3: 5 Stars — 2.5-Second High-Density Continuous Birthday Bomb
    else if (selectedScore === 5) {
      const glowingGoldTones = ['#ffcc02', '#ffea00', '#fffb99', '#ffffff', '#ffe066']
      const groundY = window.innerHeight
      let runtimeCounter = 0

      // Fire the popper loops continuously on a 75ms loop cycle track
      streamIntervalRef.current = window.setInterval(() => {
        const streamQueue: SpecialParticle[] = []

        // Left Party Popper Cannon Stream
        for (let i = 0; i < 8; i++) {
          const angle = -Math.PI / 6 - Math.random() * (Math.PI / 3) 
          const velocity = 11 + Math.random() * 16
          streamQueue.push({
            x: 0,
            y: groundY,
            size: 4 + Math.random() * 6,
            color: glowingGoldTones[Math.floor(Math.random() * glowingGoldTones.length)],
            speedX: Math.cos(angle) * velocity,
            speedY: Math.sin(angle) * velocity,
            rotation: Math.random() * 360,
            rotationSpeed: -25 + Math.random() * 50,
            opacity: 1,
            glow: true // Activates high-intensity brightness filter
          })
        }

        // Right Party Popper Cannon Stream
        for (let i = 0; i < 8; i++) {
          const angle = -Math.PI * 0.5 - Math.random() * (Math.PI / 3) 
          const velocity = 11 + Math.random() * 16
          streamQueue.push({
            x: window.innerWidth,
            y: groundY,
            size: 4 + Math.random() * 6,
            color: glowingGoldTones[Math.floor(Math.random() * glowingGoldTones.length)],
            speedX: Math.cos(angle) * velocity,
            speedY: Math.sin(angle) * velocity,
            rotation: Math.random() * 360,
            rotationSpeed: -25 + Math.random() * 50,
            opacity: 1,
            glow: true
          })
        }

        particlesRef.current = [...particlesRef.current, ...streamQueue]
        runtimeCounter += 75

        // Safely unmount and kill stream loop after 2.5 seconds complete
        if (runtimeCounter >= 2500) {
          if (streamIntervalRef.current) {
            clearInterval(streamIntervalRef.current)
            streamIntervalRef.current = null
          }
        }
      }, 75)
    }
  }

  const renderVectorStar = (ctx: CanvasRenderingContext2D, cx: number, cy: number, points: number, outer: number, inner: number, fillStyle: string) => {
    let rotationAngle = (Math.PI / 2) * 3
    let x = cx
    let y = cy
    const step = Math.PI / points

    ctx.beginPath()
    ctx.moveTo(cx, cy - outer)
    for (let i = 0; i < points; i++) {
      x = cx + Math.cos(rotationAngle) * outer
      y = cy + Math.sin(rotationAngle) * outer
      ctx.lineTo(x, y)
      rotationAngle += step

      x = cx + Math.cos(rotationAngle) * inner
      y = cy + Math.sin(rotationAngle) * inner
      ctx.lineTo(x, y)
      rotationAngle += step
    }
    ctx.lineTo(cx, cy - outer)
    ctx.closePath()
    ctx.fillStyle = fillStyle
    ctx.fill()
  }

  // Fluid Performance Canvas Update Architecture Lifecycle
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleResize = () => {
      if (canvas && ctx) {
        const dpr = window.devicePixelRatio || 1
        canvas.width = window.innerWidth * dpr
        canvas.height = window.innerHeight * dpr
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`
        ctx.scale(dpr, dpr)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    const processingFrameUpdate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.speedX
        p.y += p.speedY
        p.speedY += 0.36 
        p.speedX *= 0.975 
        p.rotation += p.rotationSpeed
        p.opacity -= 0.014

        if (p.opacity <= 0) return false

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.globalAlpha = p.opacity

        // 🌟 ILLUMINATION BLOOM TRIGGER FOR 5 STARS
        if (p.glow) {
          ctx.shadowBlur = 16
          ctx.shadowColor = p.color
        } else {
          ctx.shadowBlur = 0
        }

        renderVectorStar(ctx, 0, 0, 5, p.size, p.size / 2, p.color)

        ctx.restore()
        return true
      })

      animationFrameRef.current = requestAnimationFrame(processingFrameUpdate)
    }

    animationFrameRef.current = requestAnimationFrame(processingFrameUpdate)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      if (streamIntervalRef.current) clearInterval(streamIntervalRef.current)
    }
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: 'white', overflowX: 'hidden' }}>
      
      {/* High-Performance Canvas Overlay Sheet */}
      <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999, width: '100%', height: '100%' }} />

      {/* Tier 1 Flash Overlay Block Widget */}
      {flashActive && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(229,9,20,0.3) 0%, rgba(10,10,10,0.98) 100%)',
          zIndex: 9998,
          pointerEvents: 'none',
          animation: 'flashFadeOverlay 0.5s ease-out forwards'
        }} />
      )}

      {/* Style Layer */}
      <style>{`
        @animations matrix...
        .grand-featured-card {
          animation: subtleGlow 4s infinite ease-in-out;
        }
        @keyframes subtleGlow {
          0% { box-shadow: 0 0 15px rgba(229, 9, 20, 0.4), 0 4px 20px rgba(0,0,0,0.8); }
          50% { box-shadow: 0 0 30px rgba(229, 9, 20, 0.75), 0 4px 30px rgba(229, 9, 20, 0.2); }
          100% { box-shadow: 0 0 15px rgba(229, 9, 20, 0.4), 0 4px 20px rgba(0,0,0,0.8); }
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
          .main-large-item, .featured-dream-item {
            grid-column: 1 / 3 !important;
            grid-row: auto !important;
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
            fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
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
          
          {/* GRAND HORIZONTAL FEATURED PICTURE: Lakshmi Dream */}
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

          {/* Secondary Photo Matrix */}
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
            { src: '/images/lakshmiintemple.png', label: 'The Core Memory' }
          ].map((photo, i) => (
            <div
              key={i}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                aspectRatio: '4/3',
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

          <p style={{ fontFamily: 'var(--font-body, inherit)', fontSize: '1.15rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
            Happy Birthday Lakshmi ❤️
          </p>

          {[
            "After my sister Ramani, when someone talks about studies, marks, and ranks, you're one of the first people that comes to my mind. Growing up, you were almost like a celebrity in our village when it came to academics 😄. People knew Lakshmi because of marks before they knew Lakshmi as a person.",
            "Honestly, I still believe your story is much bigger than what life has shown so far. That's probably why it hurts sometimes. I know how much effort you've put in, how many expectations you've carried, and how many responsibilities come with being from a middle-class family. Meeting those expectations and giving meaning to every rupee our parents spend on us is never a small thing.",
            "You and Ramani akka have already achieved things many people only talk about. But somewhere, I still feel both of you deserve bigger stages, better recognition, and opportunities that match your potential.",
            "So this birthday, one thing I'm genuinely wishing for is this:\nMay both my akkalu end up exactly where they belong. May your hard work finally meet the opportunities it deserves. And may the coming years surprise you in the best possible way.",
            "Also... trip ki miss aynanduku nijanga chaala chaala miss avtunna 😭. Photos choostunte inka ekkuva miss avtunna.",
            "Keep travelling. Keep collecting memories. Keep taking random photos. Keep being Peeta. Keep being the female version of Gajini 😭.",
            "Most importantly, keep being Lakshmi.",
            "Life lo eppudaina oka choice vaste, fear valla vadulukoku. Take risks. Try new things. Explore new places. Explore new careers. Explore new versions of yourself.",
            "Because temporary failures kante lifelong regrets chaala painful.",
            "And if there is one thing I've learned from watching your journey, it's this:\nYou always keep moving forward.",
            "So here's to better opportunities, better adventures, better memories, and a much happier Season 23."
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
                fontWeight: 300,
                lineHeight: 1.75,
                color: 'rgba(230,230,230,0.9)',
                marginBottom: '1.5rem',
                whiteSpace: 'pre-line'
              }}
            >
              {para}
            </p>
          ))}

          <p style={{ fontFamily: 'var(--font-body, inherit)', fontSize: '1.1rem', fontWeight: 'bold', color: '#E50914', marginTop: '1.5rem' }}>
            Happy Birthday Lakshmi ❤️
          </p>

          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '1rem' }}>
              <div style={{ flex: 1, height: '1px', background: '#222' }} />
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: '#E50914',
                }}
              >
                — Lakshman
              </span>
              <div style={{ flex: 1, height: '1px', background: '#222' }} />
            </div>

            {/* Interactive Rating Cluster Setup */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '14px', justifyContent: 'center' }}>
              {[1, 2, 3, 4, 5].map((starValue) => {
                const isLit = starValue <= (hoverRating || rating)
                let starColor = '#222'
                if (isLit) {
                  if (hoverRating <= 2 && rating <= 2 && starValue <= 2 && hoverRating > 0) {
                    starColor = '#E50914'
                  } else if (rating === 1 || rating === 2) {
                    starColor = '#E50914'
                  } else {
                    starColor = '#ffcc02'
                  }
                }
                
                return (
                  <span
                    key={starValue}
                    onClick={() => executeRatingImpact(starValue)}
                    onMouseEnter={() => setHoverRating(starValue)}
                    onMouseLeave={() => setHoverRating(0)}
                    style={{
                      fontSize: '2.4rem',
                      cursor: 'pointer',
                      color: starColor,
                      transition: 'color 0.15s, transform 0.1s',
                      transform: starValue === hoverRating ? 'scale(1.18)' : 'scale(1)',
                      textShadow: isLit ? '0 0 12px rgba(255,204,2,0.4)' : 'none'
                    }}
                  >
                    ★
                  </span>
                )
              })}
            </div>
            <div style={{ color: '#444', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>[ CELEBRATE SEASON 23 ]</div>
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
        <div className="lx-footer-logo" onClick={() => navigate({ to: '/home' })} style={{ cursor: 'pointer', color: '#E50914', fontWeight: 'bold', fontSize: '1.2rem' }}>
          LAKSHMIX
        </div>
        <div style={{ color: '#555', fontSize: '0.8rem', marginTop: '0.4rem' }}>Made with love · 2026 · Lakshmi&apos;s Universe</div>
      </footer>
    </div>
  )
}
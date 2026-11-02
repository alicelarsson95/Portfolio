import { useRef, useState, useSyncExternalStore } from 'react'

// Only devices with a real mouse get the hover video (and nobody who prefers reduced motion).
const HOVER_QUERY = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

function subscribe(onChange: () => void) {
  const query = window.matchMedia(HOVER_QUERY)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

function useCanHover() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(HOVER_QUERY).matches,
    () => false,
  )
}

type ProjectMediaProps = {
  name: string
  image?: string
  imageAlt?: string
  video?: string
}

function ProjectMedia({ name, image, imageAlt, video }: ProjectMediaProps) {
  const canHover = useCanHover()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const showVideo = Boolean(image && video && canHover)

  function start() {
    videoRef.current?.play().catch(() => {
      // Autoplay blocked or video failed — the image just stays visible.
    })
  }

  function stop() {
    const el = videoRef.current
    if (!el) return
    el.pause()
    el.currentTime = 0
    setPlaying(false)
  }

  if (!image) {
    return (
      <div className="project-card__image">
        <span>screenshot coming soon</span>
      </div>
    )
  }

  return (
    <div
      className="project-card__image"
      onMouseEnter={showVideo ? start : undefined}
      onMouseLeave={showVideo ? stop : undefined}
    >
      <img src={image} alt={imageAlt ?? `Screenshot of ${name}`} />
      {showVideo && (
        <video
          ref={videoRef}
          className={playing ? 'is-playing' : undefined}
          src={video}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onPlaying={() => setPlaying(true)}
        />
      )}
    </div>
  )
}

export default ProjectMedia

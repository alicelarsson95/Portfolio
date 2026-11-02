import './Hero.css'

/*
 * Pixel cat drawn from a tiny map.
 * K = outline, W = fur, P = pink (ears, cheeks, nose), . = transparent
 */
const CAT_PIXELS = [
  '.K..........K.',
  'KPK........KPK',
  'KPPK......KPPK',
  'KWWWKKKKKKWWWK',
  'KWWWWWWWWWWWWK',
  'KWWKKWWWWKKWWK',
  'KWWKKWWWWKKWWK',
  'KPWWWWPPWWWWPK',
  'KWWWWKWWKWWWWK',
  '.KWWWWKKWWWWK.',
  '..KWWWWWWWWK..',
  '...KKKKKKKK...',
]

const CAT_COLORS: Record<string, string> = {
  K: '#17173D',
  W: '#FFFFFF',
  P: '#FF8AC6',
}

function PixelCat() {
  const width = CAT_PIXELS[0].length
  const height = CAT_PIXELS.length

  return (
    <svg
      className="computer__cat"
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {CAT_PIXELS.flatMap((row, y) =>
        [...row].map((pixel, x) =>
          pixel === '.' ? null : (
            <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={CAT_COLORS[pixel]} />
          ),
        ),
      )}
    </svg>
  )
}

function RetroComputer() {
  return (
    <div className="computer" role="img" aria-label="A retro computer with a pixel cat on the screen that says PRESS START">
      <div className="computer__monitor">
        <div className="computer__screen">
          <div className="computer__hud">
            <span>LVL 01</span>
            <span>♥♥♥</span>
          </div>
          <PixelCat />
          <p className="computer__press">PRESS START</p>
        </div>
        <div className="computer__panel">
          <span className="computer__led" />
          <span className="computer__slot" />
        </div>
      </div>
      <div className="computer__neck" />
      <div className="computer__base" />
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__greeting">hi there, I'm</p>
          <h1 className="hero__name" id="hero-title">
            Alice Larsson
          </h1>
          <p className="hero__role">Fullstack developer</p>
          <p className="hero__intro">Based in Gothenburg, Sweden. I like building things, solving problems and working with people.</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              See my projects
            </a>
            <a className="btn btn--secondary" href="#contact">
              Say hello
            </a>
          </div>
        </div>

        <div className="hero__art">
          <RetroComputer />

          <svg className="sticker sticker--star" viewBox="0 0 100 100" aria-hidden="true">
            <path
              d="M50 6 L62 37 L95 38 L69 58 L79 91 L50 72 L21 91 L31 58 L5 38 L38 37 Z"
              fill="#C8F25A"
              stroke="#17173D"
              strokeWidth="5"
              strokeLinejoin="round"
            />
          </svg>

          <svg className="sticker sticker--smiley" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="44" fill="#FF8AC6" stroke="#17173D" strokeWidth="5" />
            <ellipse cx="36" cy="40" rx="5" ry="8" fill="#17173D" />
            <ellipse cx="64" cy="40" rx="5" ry="8" fill="#17173D" />
            <path d="M28 58 Q50 80 72 58" fill="none" stroke="#17173D" strokeWidth="5" strokeLinecap="round" />
          </svg>

          <span className="sticker sticker--code" aria-hidden="true">
            &lt;/&gt;
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero

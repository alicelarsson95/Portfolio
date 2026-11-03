import './Contact.css'

const EMAIL = 'alicelarsson95@hotmail.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/alice-larsson-859783162/'
const GITHUB_URL = 'https://github.com/alicelarsson95'

/* Barcode drawn from alternating bar/gap widths (bar, gap, bar, gap, …) */
const BARCODE = [3, 1, 1, 2, 2, 1, 1, 1, 3, 2, 1, 1, 2, 1, 1, 3, 1, 2, 3, 1, 1, 1, 2, 2, 1, 1, 3]

function Barcode() {
  const bars: { x: number; width: number }[] = []
  let x = 0
  BARCODE.forEach((width, index) => {
    if (index % 2 === 0) bars.push({ x, width })
    x += width
  })

  return (
    <div className="barcode" aria-hidden="true">
      <svg className="barcode__bars" viewBox={`0 0 ${x} 20`} preserveAspectRatio="none" shapeRendering="crispEdges">
        {bars.map((bar) => (
          <rect key={bar.x} x={bar.x} y={0} width={bar.width} height={20} fill="#17173D" />
        ))}
      </svg>
      <span className="barcode__label">HIRE-ME 2026</span>
    </div>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <Barcode />

        <h2 className="contact__title" id="contact-title">
          <span className="contact__title-line">Let's work</span>
          <span className="contact__title-plate">together!</span>
        </h2>

        <p className="contact__text">I’m currently looking for my next role. Let’s talk!</p>

        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <a
            className="btn btn--white"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            className="btn btn--white"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

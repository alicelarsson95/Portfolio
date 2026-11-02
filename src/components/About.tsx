import alicePhoto from '../assets/alice.jpg'
import './About.css'

const TITLE_WORDS = ['ABOUT', 'ME']
const CHIPS = [
  { label: 'Gothenburg-based' },
  { label: 'Swedish · English · Norwegian' },
  { label: 'Open to work', highlight: true },
  { label: 'Hybrid / on-site' },
  { label: 'Gamer' },
]

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__inner">
        <figure className="polaroid">
          <div className="polaroid__photo">
            <img src={alicePhoto} alt="Alice Larsson" />
          </div>
          <figcaption className="polaroid__caption">that's me! :)</figcaption>
        </figure>

        <div className="about__content">
          <h2 className="about__title" id="about-title">
            <span className="visually-hidden">About me</span>
            <span className="keys" aria-hidden="true">
              {TITLE_WORDS.map((word) => (
                <span className="keys__word" key={word}>
                  {[...word].map((letter, i) => (
                    <span className="key" key={`${word}-${i}`}>
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </h2>

          <p>
            I'm Alice, a fullstack developer who graduated in 2026 from a two-year vocational program in software
            development. I love building projects where I get to follow the whole journey, from idea to production, in
            both frontend and backend.
          </p>
          <p>
            I'm a very social person, with many years of experience in customer service and building relationships with
            customers.
          </p>
          <p>
            Looking for a developer who quickly gets into new technologies and codebases, and who's also great at
            building relationships? Feel free to reach out, I'd love to have a chat!
          </p>

          <ul className="about__chips">
            {CHIPS.map((chip) => (
              <li className={chip.highlight ? 'chip chip--highlight' : 'chip'} key={chip.label}>
                {chip.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About

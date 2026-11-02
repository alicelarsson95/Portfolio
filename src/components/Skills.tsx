import type { CSSProperties } from 'react'
import { skillGroups } from '../data/skills'
import './Skills.css'

function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <div className="skills__inner">
        <header className="skills__heading">
          <h2 className="skills__title" id="skills-title">
            Skills
          </h2>
          <p className="skills__subtitle">my toolbox</p>
        </header>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article
              className="skill-card"
              key={group.title}
              style={{ '--group': group.color, '--group-light': group.lightColor } as CSSProperties}
            >
              <h3 className="skill-card__label">{group.title}</h3>
              <ul className="skill-card__chips">
                {group.skills.map((skill) => (
                  <li className="skill-chip" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="skills__cta">
          <a className="skills__cv" href="/cv.pdf" download>
            Download CV
          </a>
          <p className="skills__cv-note">
            <span className="skills__cv-arrow" aria-hidden="true">
              ←
            </span>{' '}
            for more details
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills

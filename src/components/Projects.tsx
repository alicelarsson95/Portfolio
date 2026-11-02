import { projects } from '../data/projects'
import ProjectMedia from './ProjectMedia'
import './Projects.css'

function Projects() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="projects__inner">
        <header className="section-heading">
          <h2 className="section-heading__title" id="projects-title">
            Projects
          </h2>
          <p className="section-heading__subtitle">things I've built</p>
        </header>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${index % 2 === 0 ? 'project-card--pin' : 'project-card--tape'}`}
              key={project.name}
            >
              <ProjectMedia
                name={project.name}
                image={project.image}
                imageAlt={project.imageAlt}
                video={project.video}
              />

              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__description">{project.description}</p>

              <ul className="project-card__tech" aria-label="Tech stack">
                {project.tech.map((tech) => (
                  <li className="tech-chip" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="project-card__links">
                {project.links.map((link) => (
                  <a
                    className="project-link"
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} – ${link.label} (opens in a new tab)`}
                  >
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

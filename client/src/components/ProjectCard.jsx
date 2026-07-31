import { useLang } from '../context/LangContext'
import './ProjectCard.css'

function ProjectCard({ project }) {
  const { lang } = useLang();
  const { title, description, tech, course, repoStats } = project

  return (
    <article className="card">
      <div className="card__titlebar">
        <span className="card_dot card_dot--red" />
        <span className="card_dot card_dot--yellow" />
        <span className="card_dot card_dot--green" />
        <span className="card__course">{course}</span>
      </div>

      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description[lang]}</p>

        <div className="card__tags">
          {tech.map((t) => (
            <span key={t} className="card__tag">
              --{t.toLowerCase()}
            </span>
          ))}
        </div>

        {repoStats && (
          <div className="card__stats">
            <span>⎇ {repoStats.commits} commits</span>
            <span>★ {repoStats.stars}</span>
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
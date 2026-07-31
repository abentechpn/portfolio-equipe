import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { useLang } from '../context/LangContext'
import './ProjectGallery.css'

function ProjectGallery({ projects, allTechs }) {
  const { t } = useLang();
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.tech.includes(activeFilter))

  return (
    <section className="gallery">
      <div className="gallery__filters">
        <button
          className={`gallery__filter ${activeFilter === 'all' ? 'gallery__filter--active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          {t.projectGallery.all}
        </button>
        {allTechs.map((tech) => (
          <button
            key={tech}
            className={`gallery__filter ${activeFilter === tech ? 'gallery__filter--active' : ''}`}
            onClick={() => setActiveFilter(tech)}
          >
            --{tech.toLowerCase()}
          </button>
        ))}
      </div>

      <div className="gallery__grid">
        {filteredProjects.length === 0 ? (
          <p className="gallery__empty">{t.projectGallery.empty}</p>
        ) : (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </section>
  )
}

export default ProjectGallery
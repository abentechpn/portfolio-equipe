import { useState } from 'react'
import ProjectCard from './ProjectCard'
import './ProjectGallery.css'

function ProjectGallery({ projects, allTechs }) {
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
          --all
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
          <p className="gallery__empty">Pas de project sur ce filter.</p>
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
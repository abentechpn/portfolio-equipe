import ProjectGallery from '../components/ProjectGallery'
import { projects, allTechs } from '../data/projects'

function Projets() {
  return (
    <div style={{ padding: '2rem', textAlign: 'left' }}>
      <h1 style={{ textAlign: 'center' }}>Nos Projets</h1>
      <ProjectGallery projects={projects} allTechs={allTechs} />
    </div>
  )
}

export default Projets
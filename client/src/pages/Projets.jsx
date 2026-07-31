import ProjectGallery from '../components/ProjectGallery'
import { projects, allTechs } from '../data/projects'
import { useLang } from '../context/LangContext'

function Projets() {
  const { t } = useLang();

  return (
    <div style={{ padding: '2rem', textAlign: 'left' }}>
      <h1 style={{ textAlign: 'center' }}>{t.projets.title}</h1>
      <ProjectGallery projects={projects} allTechs={allTechs} />
    </div>
  )
}

export default Projets
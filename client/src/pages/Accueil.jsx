import { Link } from 'react-router-dom';
import membres from '../data/membres';
import { projects } from '../data/projects';
import { useLang } from '../context/LangContext';
import './Accueil.css';

export default function Accueil() {
  const { t } = useLang();

  return (
    <div className="accueil-hero">
      <span className="accueil-badge">{t.accueil.badge}</span>
      <h1 className="accueil-titre">{t.accueil.title}</h1>
      <p className="accueil-soustitre">{t.accueil.subtitle}</p>

      <div className="accueil-boutons">
        <Link to="/projets" className="accueil-bouton accueil-bouton--principal">{t.accueil.ctaProjects}</Link>
        <Link to="/equipe" className="accueil-bouton accueil-bouton--secondaire">{t.accueil.ctaTeam}</Link>
      </div>

      <div className="accueil-stats">
        <div className="accueil-stat">
          <span className="accueil-stat-nombre">{membres.length}</span>
          <span className="accueil-stat-label">{t.accueil.statMembers}</span>
        </div>
        <div className="accueil-stat">
          <span className="accueil-stat-nombre">{projects.length}</span>
          <span className="accueil-stat-label">{t.accueil.statProjects}</span>
        </div>
        <div className="accueil-stat">
          <span className="accueil-stat-nombre">100%</span>
          <span className="accueil-stat-label">{t.accueil.statStack}</span>
        </div>
      </div>
    </div>
  );
}
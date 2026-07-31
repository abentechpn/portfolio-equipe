import { Link } from 'react-router-dom';
import membres from '../data/membres';
import { projects } from '../data/projects';
import './Accueil.css';

export default function Accueil() {
  return (
    <div className="accueil-hero">
      <span className="accueil-badge">Portfolio d'equipe - ISTEAH</span>
      <h1 className="accueil-titre">Portfolio</h1>
      <p className="accueil-soustitre">
        Le portfolio collectif d'une equipe de 5 etudiants en technologie de l'information.
        Decouvrez notre equipe, nos projets et contactez-nous.
      </p>

      <div className="accueil-boutons">
        <Link to="/projets" className="accueil-bouton accueil-bouton--principal">Voir nos projets</Link>
        <Link to="/equipe" className="accueil-bouton accueil-bouton--secondaire">Rencontrer l'equipe</Link>
      </div>

      <div className="accueil-stats">
        <div className="accueil-stat">
          <span className="accueil-stat-nombre">{membres.length}</span>
          <span className="accueil-stat-label">Membres</span>
        </div>
        <div className="accueil-stat">
          <span className="accueil-stat-nombre">{projects.length}</span>
          <span className="accueil-stat-label">Projets</span>
        </div>
        <div className="accueil-stat">
          <span className="accueil-stat-nombre">100%</span>
          <span className="accueil-stat-label">React + Express</span>
        </div>
      </div>
    </div>
  );
}
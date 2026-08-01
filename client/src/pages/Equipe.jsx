import { Link } from 'react-router-dom';
import membres from '../data/membres';
import GithubStats from '../components/GithubStats';
import './Equipe.css';

export default function Equipe() {
  return (
    <section className="equipe-page" aria-labelledby="equipe-titre">
      <h1 id="equipe-titre" className="equipe-titre">Notre Equipe</h1>
      <p className="equipe-soustitre">Presentation des membres de l'equipe. Cliquez sur un membre pour voir son profil complet.</p>

      <div className="equipe-grille">
        {membres.map((membre) => (
          <Link
            key={membre.id}
            to={`/equipe/${membre.id}`}
            className="membre-carte"
            aria-label={`Voir le profil de ${membre.nom}`}
          >
            <div className="membre-photo-wrap">
              <img className="membre-photo" src={membre.photo} alt={membre.nom} />
            </div>
            <div className="membre-info">
              <h3 className="membre-nom">{membre.nom}</h3>
              <p className="membre-role">{membre.role}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 style={{ marginTop: '3rem' }}>Statistiques GitHub</h2>
      <GithubStats username="abentechpn" />
    </section>
  );
}
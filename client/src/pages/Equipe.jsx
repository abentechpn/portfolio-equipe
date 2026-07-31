import { Link } from 'react-router-dom';
import membres from '../data/membres';
import GithubStats from '../components/GithubStats';
import { useLang } from '../context/LangContext';
import './Equipe.css';

export default function Equipe() {
  const { t, lang } = useLang();

  return (
    <div className="equipe-page">
      <h1 className="equipe-titre">{t.equipe.title}</h1>
      <p className="equipe-soustitre">{t.equipe.subtitle}</p>

      <div className="equipe-grille">
        {membres.map((membre) => (
          <Link
            key={membre.id}
            to={`/equipe/${membre.id}`}
            className="membre-carte"
            aria-label={`${t.equipe.viewProfile} ${membre.nom}`}
          >
            <div className="membre-photo-wrap">
              <img className="membre-photo" src={membre.photo} alt={membre.nom} />
            </div>
            <div className="membre-info">
              <h3 className="membre-nom">{membre.nom}</h3>
              <p className="membre-role">{membre.role[lang]}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 style={{ marginTop: '3rem' }}>{t.equipe.githubStatsTitle}</h2>
      <GithubStats username="abentechpn" />
    </div>
  );
}
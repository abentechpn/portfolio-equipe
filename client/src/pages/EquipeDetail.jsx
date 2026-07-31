import { useParams, Link } from 'react-router-dom';
import membres from '../data/membres';
import { useLang } from '../context/LangContext';
import './EquipeDetail.css';

export default function EquipeDetail() {
  const { id } = useParams();
  const { t, lang } = useLang();
  const membre = membres.find((m) => String(m.id) === id);

  if (!membre) {
    return (
      <div className="profil-page">
        <p>{t.equipeDetail.notFound}</p>
        <Link to="/equipe">{t.equipeDetail.back}</Link>
      </div>
    );
  }

  return (
    <div className="profil-page">
      <Link to="/equipe" className="profil-retour">← {t.equipeDetail.back}</Link>

      <div className="profil-entete">
        <img className="profil-photo" src={membre.photo} alt={membre.nom} />
        <div>
          <h1>{membre.nom}</h1>
          <p className="profil-role">{membre.role[lang]}</p>
        </div>
      </div>

      <section className="profil-section">
        <h2>{t.equipeDetail.bio}</h2>
        <p>{membre.bio[lang]}</p>
      </section>

      <section className="profil-section">
        <h2>{t.equipeDetail.parcours}</h2>
        <p>{membre.parcours[lang]}</p>
      </section>

      {membre.competences && membre.competences.length > 0 && (
        <section className="profil-section">
          <h2>{t.equipeDetail.competences}</h2>
          <div className="profil-competences">
            {membre.competences.map((c) => (
              <span key={c} className="profil-badge">{c}</span>
            ))}
          </div>
        </section>
      )}

      <section className="profil-section">
        <h2>{t.equipeDetail.contact}</h2>
        <div className="profil-reseaux">
          {membre.github && <a href={membre.github} target="_blank" rel="noreferrer">GitHub</a>}
          {membre.whatsapp && <a href={membre.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>}
          {membre.facebook && <a href={membre.facebook} target="_blank" rel="noreferrer">Facebook</a>}
          {membre.youtube && <a href={membre.youtube} target="_blank" rel="noreferrer">YouTube</a>}
        </div>
      </section>
    </div>
  );
}
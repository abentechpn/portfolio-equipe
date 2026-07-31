import { useParams, Link } from 'react-router-dom';
import membres from '../data/membres';
import './EquipeDetail.css';

export default function EquipeDetail() {
  const { id } = useParams();
  const membre = membres.find((m) => String(m.id) === id);

  if (!membre) {
    return (
      <div className="profil-page">
        <p>Membre introuvable.</p>
        <Link to="/equipe">Retour a l'equipe</Link>
      </div>
    );
  }

  return (
    <div className="profil-page">
      <Link to="/equipe" className="profil-retour">← Retour a l'equipe</Link>

      <div className="profil-entete">
        <img className="profil-photo" src={membre.photo} alt={membre.nom} />
        <div>
          <h1>{membre.nom}</h1>
          <p className="profil-role">{membre.role}</p>
        </div>
      </div>

      <section className="profil-section">
        <h2>Biographie</h2>
        <p>{membre.bio}</p>
      </section>

      <section className="profil-section">
        <h2>Parcours</h2>
        <p>{membre.parcours}</p>
      </section>

      {membre.competences && membre.competences.length > 0 && (
        <section className="profil-section">
          <h2>Competences</h2>
          <div className="profil-competences">
            {membre.competences.map((c) => (
              <span key={c} className="profil-badge">{c}</span>
            ))}
          </div>
        </section>
      )}

      <section className="profil-section">
        <h2>Contact</h2>
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
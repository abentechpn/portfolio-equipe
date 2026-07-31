import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import membres from '../data/membres';
import { useLang } from '../context/LangContext';
import Lightbox from '../components/Lightbox';
import './EquipeDetail.css';

export default function EquipeDetail() {
  const { slug } = useParams();
  const { t, lang } = useLang();
  const membre = membres.find((m) => m.slug === slug);
  const [photoOuverte, setPhotoOuverte] = useState(false);

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
        <button
          type="button"
          className="profil-photo-bouton"
          onClick={() => setPhotoOuverte(true)}
          aria-label={t.equipeDetail.viewPhoto}
        >
          <img className="profil-photo" src={membre.photo} alt={membre.nom} />
        </button>
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

      {photoOuverte && (
        <Lightbox src={membre.photo} alt={membre.nom} onClose={() => setPhotoOuverte(false)} />
      )}
    </div>
  );
}
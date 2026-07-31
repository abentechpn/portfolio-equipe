import { useState } from 'react';
import membres from '../data/membres';
import GithubStats from '../components/GithubStats';
import './Equipe.css';

export default function Equipe() {
  const [selection, setSelection] = useState(null);

  return (
    <div className="equipe-page">
      <h1 className="equipe-titre">Notre Equipe</h1>
      <p className="equipe-soustitre">Presentation des membres de l'equipe. Cliquez sur un membre pour en savoir plus.</p>

      <div className="equipe-grille">
        {membres.map((membre) => (
          <button
            key={membre.id}
            className="membre-carte"
            onClick={() => setSelection(membre)}
            aria-label={`Voir la biographie de ${membre.nom}`}
          >
            <div className="membre-photo-wrap">
              <img className="membre-photo" src={membre.photo} alt={membre.nom} />
            </div>
            <div className="membre-info">
              <h3 className="membre-nom">{membre.nom}</h3>
              <p className="membre-role">{membre.role}</p>
            </div>
          </button>
        ))}
      </div>

      <h2 style={{ marginTop: '3rem' }}>Statistiques GitHub</h2>
      <GithubStats username="abentechpn" />

      {selection && (
        <div className="modal-overlay" onClick={() => setSelection(null)}>
          <div className="modal-carte" onClick={(e) => e.stopPropagation()}>
            <button className="modal-fermer" onClick={() => setSelection(null)} aria-label="Fermer">X</button>
            <img className="modal-photo" src={selection.photo} alt={selection.nom} />
            <div className="modal-contenu">
              <h2 style={{ margin: '0 0 0.2rem' }}>{selection.nom}</h2>
              <p style={{ color: 'var(--accent-color, #7c3aed)', fontWeight: 600, marginTop: 0 }}>{selection.role}</p>
              <p>{selection.bio}</p>

              <div className="modal-reseaux">
                {selection.github && (
                  <a href={selection.github} target="_blank" rel="noreferrer">GitHub</a>
                )}
                {selection.whatsapp && (
                  <a href={selection.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
                )}
                {selection.facebook && (
                  <a href={selection.facebook} target="_blank" rel="noreferrer">Facebook</a>
                )}
                {selection.youtube && (
                  <a href={selection.youtube} target="_blank" rel="noreferrer">YouTube</a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
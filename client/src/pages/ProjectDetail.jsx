import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div style={{ padding: '1rem' }}>
      <Link to="/projets">← Retour aux projets</Link>

      <h1>Détails du Projet #{id}</h1>

      <p>
        Présentation détaillée du projet sélectionné.
      </p>
    </div>
  );
}
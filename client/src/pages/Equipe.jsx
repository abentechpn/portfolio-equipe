import membres from '../data/membres';
import GithubStats from '../components/GithubStats';

export default function Equipe() {
  return (
    <div>
      <h1>Notre Equipe</h1>
      <p>Presentation des membres de l'equipe.</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1.5rem' }}>
        {membres.map((membre) => (
          <div key={membre.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', width: '220px' }}>
            <img src={membre.photo} alt={membre.nom} style={{ width: '100%', borderRadius: '6px', objectFit: 'cover', height: '160px' }} />
            <h3>{membre.nom}</h3>
            <p><strong>{membre.role}</strong></p>
            <p style={{ fontSize: '0.9rem' }}>{membre.bio}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '2rem' }}>Statistiques GitHub</h2>
      <GithubStats username="abentechpn" />
    </div>
  );
}
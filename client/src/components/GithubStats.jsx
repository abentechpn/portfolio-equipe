import { useState, useEffect } from 'react';

function GithubStats({ username }) {
  const [stats, setStats] = useState(null);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => setErreur('Impossible de charger les statistiques GitHub.'));
  }, [username]);

  if (erreur) return <p>{erreur}</p>;
  if (!stats) return <p>Chargement des statistiques...</p>;

  return (
    <div style={{ border: '1px solid var(--border-color, #ccc)', padding: '1rem', borderRadius: '8px' }}>
      <p><strong>{stats.login}</strong></p>
      <p>Dépôts publics : {stats.public_repos}</p>
      <p>Followers : {stats.followers}</p>
    </div>
  );
}

export default GithubStats;
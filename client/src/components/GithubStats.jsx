import { useState, useEffect } from 'react';
import { useLang } from '../context/LangContext';

function GithubStats({ username }) {
  const { t } = useLang();
  const [stats, setStats] = useState(null);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => setErreur(t.githubStats.error));
  }, [username, t]);

  if (erreur) return <p>{erreur}</p>;
  if (!stats) return <p>{t.githubStats.loading}</p>;

  return (
    <div style={{ border: '1px solid var(--border-color, #ccc)', padding: '1rem', borderRadius: '8px' }}>
      <p><strong>{stats.login}</strong></p>
      <p>{t.githubStats.publicRepos} : {stats.public_repos}</p>
      <p>{t.githubStats.followers} : {stats.followers}</p>
    </div>
  );
}

export default GithubStats;
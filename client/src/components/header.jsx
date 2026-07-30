import { Link } from "react-router-dom";

function Header({ theme, toggleTheme }) {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">Mon Portfolio</Link>
      </div>

      <nav aria-label="Navigation principale">
        <Link to="/">Accueil</Link>
        <Link to="/equipe">Équipe</Link>
        <Link to="/projets">Projets</Link>
      </nav>

      <button
        onClick={toggleTheme}
        aria-label="Changer le thème sombre ou clair"
      >
        {theme === "dark" ? "☀️ Clair" : "🌙 Sombre"}
      </button>
    </header>
  );
}

export default Header;
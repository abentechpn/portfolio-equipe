import { NavLink } from "react-router-dom";

function Header({ theme, toggleTheme }) {
  const navLinkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className="site-header">
      <div className="logo">
        <NavLink to="/">Mon Portfolio</NavLink>
      </div>

      <nav aria-label="Navigation principale">
        <NavLink to="/" end className={navLinkClass}>
          Accueil
        </NavLink>
        <NavLink to="/equipe" className={navLinkClass}>
          Équipe
        </NavLink>
        <NavLink to="/projets" className={navLinkClass}>
          Projets
        </NavLink>
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
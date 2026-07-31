import { NavLink } from "react-router-dom";
import { useLang } from "../context/LangContext";

function Header({ theme, toggleTheme }) {
  const { lang, toggleLang, t } = useLang();
  const navLinkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className="site-header">
      <div className="logo">
        <NavLink to="/">{t.nav.brand}</NavLink>
      </div>

      <nav aria-label="Navigation principale">
        <NavLink to="/" end className={navLinkClass}>
          {t.nav.home}
        </NavLink>
        <NavLink to="/equipe" className={navLinkClass}>
          {t.nav.team}
        </NavLink>
        <NavLink to="/projets" className={navLinkClass}>
          {t.nav.projects}
        </NavLink>
      </nav>

      <div className="header-actions">
        <button onClick={toggleTheme} aria-label={t.theme.toggleAriaLabel}>
          {theme === "dark" ? `☀️ ${t.theme.light}` : `🌙 ${t.theme.dark}`}
        </button>

        <button onClick={toggleLang} aria-label={t.lang.toggleAriaLabel}>
          🌐 {lang === "fr" ? "EN" : "FR"}
        </button>
      </div>
    </header>
  );
}

export default Header;
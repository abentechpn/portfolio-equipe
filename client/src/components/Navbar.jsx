import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      style={{
        padding: '1rem',
        background: '#222',
        color: '#fff',
        display: 'flex',
        gap: '1rem',
      }}
    >
      <NavLink to="/" style={{ color: '#fff', textDecoration: 'none' }}>
        Accueil
      </NavLink>
      <NavLink to="/equipe" style={{ color: '#fff', textDecoration: 'none' }}>
        Équipe
      </NavLink>
      <NavLink to="/projets" style={{ color: '#fff', textDecoration: 'none' }}>
        Projets
      </NavLink>
      <NavLink to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
        Contact
      </NavLink>
    </nav>
  );
}
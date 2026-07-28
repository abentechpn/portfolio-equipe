import { Routes, Route, Link } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import Accueil from './pages/Accueil'
import Equipe from './pages/Equipe'
import Projets from './pages/Projets'
import DetailProjet from './pages/DetailProjet'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/equipe">Équipe</Link>
        <Link to="/projets">Projets</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Sombre' : '☀️ Clair'}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/projets/:id" element={<DetailProjet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
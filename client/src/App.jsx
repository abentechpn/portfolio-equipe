import { Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import MainLayout from './components/MainLayout'
import Accueil from './pages/Accueil'
import Equipe from './pages/Equipe'
import Projets from './pages/Projets'
import DetailProjet from './pages/DetailProjet'
import EquipeDetail from './pages/EquipeDetail'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <MainLayout theme={theme} toggleTheme={toggleTheme}>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/projets/:id" element={<DetailProjet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>404 - Page non trouvée</h2>} />
        <Route path="/equipe/:id" element={<EquipeDetail />} />
      </Routes>
    </MainLayout>
  )
}

export default App
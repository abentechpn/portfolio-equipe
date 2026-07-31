import { createContext, useState, useContext } from 'react';
import translations from '../data/translations';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr');
  const toggleLang = () => setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));

  return (
    <LangContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
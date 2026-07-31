import { useEffect } from 'react';
import { useLang } from '../context/LangContext';
import './Lightbox.css';

export default function Lightbox({ src, alt, onClose }) {
  const { t } = useLang();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-contenu" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lightbox-fermer"
          onClick={onClose}
          aria-label={t.lightbox.close}
        >
          ✕
        </button>
        <img className="lightbox-image" src={src} alt={alt} />
      </div>
    </div>
  );
}

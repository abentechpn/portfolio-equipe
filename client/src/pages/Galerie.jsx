import { useState } from 'react';
import { galleryItems } from '../data/gallery';
import { useLang } from '../context/LangContext';
import GalleryThumb from '../components/GalleryThumb';
import Lightbox from '../components/Lightbox';
import './Galerie.css';

export default function Galerie() {
  const { t } = useLang();
  const [itemOuvert, setItemOuvert] = useState(null);

  return (
    <div className="galerie-page">
      <h1 className="galerie-titre">{t.galerie.pageTitle}</h1>
      <p className="galerie-soustitre">{t.galerie.pageSubtitle}</p>

      <div className="galerie-grille">
        {galleryItems.map((item) => (
          <figure key={item.id} className="galerie-item">
            <GalleryThumb
              item={item}
              className="galerie-carte"
              onClick={() => setItemOuvert(item)}
              ariaLabel={`${t.galerie.viewImage} ${item.titre}`}
            />
            <figcaption className="galerie-legende">{item.titre}</figcaption>
          </figure>
        ))}
      </div>

      {itemOuvert && (
        <Lightbox src={itemOuvert.src} alt={itemOuvert.titre} onClose={() => setItemOuvert(null)} />
      )}
    </div>
  );
}

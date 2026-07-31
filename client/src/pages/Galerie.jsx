import { useMemo, useState } from 'react';
import { galleryItems } from '../data/gallery';
import { useLang } from '../context/LangContext';
import GalleryThumb from '../components/GalleryThumb';
import Lightbox from '../components/Lightbox';
import './Galerie.css';

const FILTRE_DATE = {
  TOUTES: 'all',
  SEMAINE: 'week',
  MOIS: 'month',
};

const UNE_SEMAINE_MS = 7 * 24 * 60 * 60 * 1000;

function estCetteSemaine(dateStr, maintenant) {
  const date = new Date(dateStr);
  return date <= maintenant && maintenant - date <= UNE_SEMAINE_MS;
}

function estCeMois(dateStr, maintenant) {
  const date = new Date(dateStr);
  return date.getFullYear() === maintenant.getFullYear() && date.getMonth() === maintenant.getMonth();
}

export default function Galerie() {
  const { t } = useLang();
  const [itemOuvert, setItemOuvert] = useState(null);
  const [categorieActive, setCategorieActive] = useState('all');
  const [filtreDate, setFiltreDate] = useState(FILTRE_DATE.TOUTES);

  const categories = useMemo(
    () => [...new Set(galleryItems.map((item) => item.categorie))],
    []
  );

  const maintenant = useMemo(() => new Date(), []);

  const itemsFiltres = galleryItems.filter((item) => {
    const correspondCategorie = categorieActive === 'all' || item.categorie === categorieActive;

    let correspondDate = true;
    if (filtreDate === FILTRE_DATE.SEMAINE) {
      correspondDate = estCetteSemaine(item.date, maintenant);
    } else if (filtreDate === FILTRE_DATE.MOIS) {
      correspondDate = estCeMois(item.date, maintenant);
    }

    return correspondCategorie && correspondDate;
  });

  return (
    <div className="galerie-page">
      <h1 className="galerie-titre">{t.galerie.pageTitle}</h1>
      <p className="galerie-soustitre">{t.galerie.pageSubtitle}</p>

      <div className="galerie-filtres">
        <button
          type="button"
          className={`galerie-filtre ${categorieActive === 'all' ? 'galerie-filtre--active' : ''}`}
          onClick={() => setCategorieActive('all')}
        >
          {t.galerie.filterAll}
        </button>
        {categories.map((categorie) => (
          <button
            type="button"
            key={categorie}
            className={`galerie-filtre ${categorieActive === categorie ? 'galerie-filtre--active' : ''}`}
            onClick={() => setCategorieActive(categorie)}
          >
            --{categorie.toLowerCase()}
          </button>
        ))}

        <select
          className="galerie-filtre-date"
          value={filtreDate}
          onChange={(e) => setFiltreDate(e.target.value)}
          aria-label={t.galerie.dateFilterLabel}
        >
          <option value={FILTRE_DATE.TOUTES}>{t.galerie.dateAll}</option>
          <option value={FILTRE_DATE.SEMAINE}>{t.galerie.dateWeek}</option>
          <option value={FILTRE_DATE.MOIS}>{t.galerie.dateMonth}</option>
        </select>
      </div>

      {itemsFiltres.length === 0 ? (
        <p className="galerie-vide">{t.galerie.noResults}</p>
      ) : (
        <div className="galerie-grille">
          {itemsFiltres.map((item) => (
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
      )}

      {itemOuvert && (
        <Lightbox src={itemOuvert.src} alt={itemOuvert.titre} onClose={() => setItemOuvert(null)} />
      )}
    </div>
  );
}

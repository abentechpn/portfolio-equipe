import { useState } from 'react';

export default function GalleryThumb({ item, className, onClick, ariaLabel }) {
  const [cassee, setCassee] = useState(false);

  return (
    <button type="button" className={className} onClick={onClick} aria-label={ariaLabel}>
      {!cassee && (
        <img src={item.src} alt={item.titre} onError={() => setCassee(true)} />
      )}
    </button>
  );
}

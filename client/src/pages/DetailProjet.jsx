import { useParams } from 'react-router-dom';
import { useLang } from '../context/LangContext';

function DetailProjet() {
  const { id } = useParams();
  const { t } = useLang();
  return (
    <div>
      <h1>{t.detailProjet.title} {id}</h1>
    </div>
  );
}

export default DetailProjet;
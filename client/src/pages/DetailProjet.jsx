import { useParams } from 'react-router-dom';

function DetailProjet() {
  const { id } = useParams();
  return (
    <div>
      <h1>Détail du projet {id}</h1>
    </div>
  );
}

export default DetailProjet;
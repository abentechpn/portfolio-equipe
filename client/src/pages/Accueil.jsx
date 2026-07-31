import { Link } from "react-router-dom";

function Accueil() {
  return (
    <section aria-labelledby="accueil-titre">
      <h1 id="accueil-titre">Bienvenue sur notre portfolio</h1>
      <p>
        Nous sommes une équipe d'étudiants en développement web, et ce site
        présente notre parcours, nos compétences et nos réalisations.
      </p>

      <div className="accueil-liens">
        <Link to="/equipe" className="bouton-accueil">
          Découvrir l'équipe
        </Link>
        <Link to="/projets" className="bouton-accueil bouton-accueil-secondaire">
          Voir nos projets
        </Link>
      </div>
    </section>
  );
}

export default Accueil;
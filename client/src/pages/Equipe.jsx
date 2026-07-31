import membres from "../data/membres";

function Equipe() {
  return (
    <section aria-labelledby="equipe-titre">
      <h1 id="equipe-titre">Équipe</h1>
      <p>Présentation des membres de l'équipe.</p>

      <ul className="grille-equipe">
        {membres.map((membre, index) => (
          <li
            key={membre.id}
            className={
              index === membres.length - 1
                ? "carte-membre carte-membre-solo"
                : "carte-membre"
            }
          >
            <img
              src={membre.photo}
              alt={`Photo de ${membre.nom}`}
              className="photo-membre"
            />
            <h2>{membre.nom}</h2>
            <p className="role-membre">{membre.role}</p>
            <p>{membre.bio}</p>
            {membre.github && (
              <a
                href={membre.github}
                target="_blank"
                rel="noopener noreferrer"
                className="lien-github-membre"
                aria-label={`Voir le GitHub de ${membre.nom}`}
            >
                Voir le GitHub
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Equipe;
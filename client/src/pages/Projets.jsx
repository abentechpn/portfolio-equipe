import { useState } from "react";

const projets = [
  {
    id: 1,
    titre: "Portfolio Collectif",
    categorie: "web",
    description: "Application React/Express présentant l'équipe et ses réalisations.",
  },
  {
    id: 2,
    titre: "API de gestion de tâches",
    categorie: "backend",
    description: "API REST Node.js avec authentification et persistance JSON.",
  },
  {
    id: 3,
    titre: "Jeu de mémoire",
    categorie: "web",
    description: "Petit jeu interactif en JavaScript vanilla.",
  },
  {
    id: 4,
    titre: "Script d'automatisation",
    categorie: "outils",
    description: "Script Node.js pour automatiser des tâches répétitives.",
  },
];

const categories = ["tous", "web", "backend", "outils"];

function Projets() {
  const [filtre, setFiltre] = useState("tous");

  const projetsFiltres =
    filtre === "tous"
      ? projets
      : projets.filter((p) => p.categorie === filtre);

  return (
    <section aria-labelledby="projets-titre">
      <h1 id="projets-titre">Projets</h1>
      <p>Galerie des projets de l'équipe.</p>

      <div className="filtres" role="group" aria-label="Filtrer les projets par catégorie">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltre(cat)}
            aria-pressed={filtre === cat}
            className={filtre === cat ? "filtre-actif" : ""}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <ul className="grille-projets">
        {projetsFiltres.map((projet) => (
          <li key={projet.id} className="carte-projet">
            <h2>{projet.titre}</h2>
            <p className="categorie-tag">{projet.categorie}</p>
            <p>{projet.description}</p>
          </li>
        ))}
      </ul>

      {projetsFiltres.length === 0 && (
        <p role="status">Aucun projet dans cette catégorie.</p>
      )}
    </section>
  );
}

export default Projets;
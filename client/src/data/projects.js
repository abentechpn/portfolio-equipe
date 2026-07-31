export const projects = [
  {
    id: 1,
    title: 'Atlas Mondial Interactif',
    description:
      "Application web utilisant l'API REST Countries pour explorer les pays du monde avec des données en temps réel.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    course: 'LOG3500',
    repoStats: { commits: 42, stars: 3 },
  },
  {
    id: 2,
    title: 'CareMap — Tableau de bord Pharmacie',
    description:
      "Tableau de bord pour la gestion des stocks de pharmacie avec système d'alertes automatiques, connecté à un backend Express/Prisma.",
    tech: ['React', 'Express', 'Prisma', 'PostgreSQL'],
    course: 'Stage',
    repoStats: { commits: 128, stars: 7 },
  },
  {
    id: 3,
    title: 'Système de Bibliothèque',
    description:
      "Mini-projet de base de données pour la gestion d'une bibliothèque : schéma normalisé, requêtes, formulaires et rapport.",
    tech: ['Access', 'SQL'],
    course: 'TIC400',
    repoStats: { commits: 15, stars: 1 },
  },
  {
    id: 4,
    title: "Page d'inscription — Signup Page",
    description:
      'Page HTML/CSS validée selon les standards W3C, avec formulaire d\'inscription responsive.',
    tech: ['HTML', 'CSS'],
    course: 'INF3500',
    repoStats: { commits: 9, stars: 0 },
  },
  {
    id: 5,
    title: 'Météo Dynamique',
    description:
      "Application web qui affiche la météo en temps réel selon la ville recherchée, en utilisant l'API Fetch pour récupérer les données.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    course: 'LOG3500',
    repoStats: { commits: 12, stars: 0 },
  },
]

export const allTechs = [...new Set(projects.flatMap((p) => p.tech))].sort()
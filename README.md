# Portfolio Professionnel Dynamique Full-Stack

Application web monopage (SPA) réalisée dans le cadre du cours **LOG3500 — Conception et programmation de sites Web I** (ISTEAH, Été 2026). Le site présente notre équipe, nos projets, et propose un formulaire de contact connecté à un serveur.

## Demo

- **Application en production :** https://portfolio-equipe-production.up.railway.app
- **Dépôt GitHub :** https://github.com/abentechpn/portfolio-equipe

## Équipe

| Membre | Rôle |
|---|---|
| Despelado Marc | Sémantique, Accessibilité & Design responsive |
| Hosmane Jean François | Composants React UI |
| Rosalvo Dimeus | Routage & Architecture Client |
| Newson Laurane | État global & Intégration API GitHub |
| Benchinaud Alfred | Backend, DevOps & Coordination |

## Stack technique

- **Frontend :** React 19, Vite, React Router v6, Context API
- **Backend :** Node.js, Express
- **Hébergement :** Railway (déploiement continu depuis GitHub)
- **API externe :** API REST GitHub (statistiques de dépôts)

## Fonctionnalités

- Navigation sans rechargement de page (React Router v6)
- Thème sombre / clair persistant (Context API)
- Galerie de projets filtrable par technologie
- Pages de profil détaillées pour chaque membre de l'équipe
- Formulaire de contact avec validation dynamique et envoi vers l'API
- Statistiques GitHub de l'équipe récupérées en temps réel

## Installation locale

```bash
git clone https://github.com/abentechpn/portfolio-equipe.git
cd portfolio-equipe

# Backend
npm install

# Frontend
cd client
npm install
npm run build

# Lancer le serveur
cd ..
npm start
```

L'application est accessible sur `http://localhost:3000` (ou le port défini par `PORT`).

## Développement

```bash
cd client
npm run dev
```

## Structure du projet

```
portfolio-equipe/
├── server.js              # Serveur Express
├── package.json
└── client/
    ├── src/
    │   ├── components/    # Composants React réutilisables
    │   ├── context/        # ThemeContext, LangContext
    │   ├── data/           # membres.js, projects.js
    │   └── pages/          # Accueil, Equipe, Projets, Contact, etc.
    └── public/assets/equipe/
```
# checkpoint-react4

Checkpoint React — Composant fonctionnel avec gestion d'état et cycle de vie.

## 🚀 Tech Stack

- [React 18](https://react.dev/) — UI
- [Vite](https://vitejs.dev/) — Bundler
- [Tailwind CSS v4.3](https://tailwindcss.com/) — Styling

## 📋 Fonctionnalités

- Composant fonctionnel `App` avec **hooks React**
- État `person` — objet contenant `fullName`, `bio`, `imgSrc`, `profession`
- État `show` — booléen qui contrôle l'affichage du profil
- Bouton toggle pour afficher / masquer la carte profil
- Timer en temps réel via `setInterval` dans un `useEffect` (lifecycle)

## 🧠 Concepts illustrés

| Hook            | Rôle                                             |
| --------------- | ------------------------------------------------ |
| `useState`      | Gestion de l'état local                          |
| `useEffect`     | Simulation du cycle de vie (montage / démontage) |
| `setInterval`   | Mise à jour du timer chaque seconde              |
| `clearInterval` | Nettoyage à la destruction du composant          |

## 📁 Structure

checkpoint-react4/
├── public/
├── src/
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js

## ⚙️ Installation

```bash
npm install
npm install tailwindcss @tailwindcss/vite
npm run dev
```

## 👤 Auteur

Développé par **WinchLabs** — 2026

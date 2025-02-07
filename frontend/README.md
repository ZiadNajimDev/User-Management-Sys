# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Projet de Gestion des Utilisateurs

Ce projet est une application de gestion des utilisateurs développée avec **Express** pour le backend, **React** pour le frontend, et **SQLite** comme base de données. Il permet de créer, lire, mettre à jour et supprimer des utilisateurs (CRUD). Le projet a été conçu dans le cadre d'un cours de déploiement et suit les bonnes pratiques de développement.

---

## Fonctionnalités

- **Backend (Express) :**
  - API RESTful pour la gestion des utilisateurs.
  - Endpoints pour créer, lire, mettre à jour et supprimer des utilisateurs.
  - Utilisation de SQLite pour stocker les données des utilisateurs.
  - Validation des données pour garantir l'intégrité de la base de données.

- **Frontend (React) :**
  - Interface utilisateur simple et intuitive.
  - Affichage de la liste des utilisateurs.
  - Possibilité d'ajouter, de modifier et de supprimer des utilisateurs.
  - Communication avec le backend via des requêtes HTTP.

- **Tests :**
  - Tests des endpoints API avec **Postman**.
  - Vérification des fonctionnalités CRUD.

---

## Structure du Projet
user-management-system/
├── backend/ # Code backend (Express + SQLite)
│ ├── models/ # Modèles de base de données
│ ├── routes/ # Routes de l'API
│ ├── controllers/ # Contrôleurs pour la logique métier
│ ├── server.js # Point d'entrée du serveur
│ └── database.db # Base de données SQLite
├── frontend/ # Code frontend (React)
│ ├── public/ # Fichiers statiques
│ ├── src/ # Code source React
│ │ ├── components/ # Composants React
│ │ ├── App.js # Composant principal
│ │ └── index.js # Point d'entrée de l'application
│ ├── package.json # Dépendances du frontend
│ └── README.md # Documentation du frontend
├── .gitignore # Fichiers ignorés par Git
├── package.json # Dépendances du projet
└── README.md # Documentation du projet

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- **Node.js** (v14 ou supérieure)
- **npm** (gestionnaire de paquets Node.js)
- **Git** (pour la gestion de version)
- **Postman** (pour tester les endpoints API)

---

## Installation

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/votre-username/user-management-system.git
   cd user-management-system
   
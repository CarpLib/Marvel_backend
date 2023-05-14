# Marvel App Backend

Backend développé pour l'application Marvel App.

## Fonctionnalités

- **Authentification** : Permet aux utilisateurs de s'enregistrer et de se connecter.
- **Gestion des utilisateurs** : Permet de créer, mettre à jour et supprimer des utilisateurs.
- **Gestion des favoris** : Permet d'ajouter et de supprimer des personnages et des comics en tant que favoris pour les utilisateurs.
- **Communication avec l'API Marvel** : Permet d'interagir avec l'API Marvel pour récupérer des informations sur les personnages et les comics.

## Installation

1. Clonez ce dépôt : `git clone https://github.com/votre-utilisateur/marvel-app-backend.git`
2. Accédez au répertoire du projet : `cd marvel-app-backend`
3. Installez les dépendances : `npm install`

## Configuration

1. Créez un fichier `.env` à la racine du projet.
2. Ajoutez les variables d'environnement suivantes :
   API_KEY=<votre_clé_publique_leReacteur_api>
   PORT=3000
   MONGODB_URI=<votre_adresse_de_serveur_mongoose>

## Utilisation

1. Lancez le serveur : `npm start`
2. Le serveur sera accessible à l'adresse : `http://localhost:3000`

## Base de données

Ce projet utilise Mongoose pour interagir avec une base de données MongoDB. Assurez-vous d'avoir une instance de MongoDB en cours d'exécution et configurez l'URL de votre base de données dans le fichier `.env`.

## Chiffrement des mots de passe

Ce projet utilise Crypto-js pour encrypter les mots de passe des utilisateurs. Les mots de passe sont stockés de manière sécurisée dans la base de données.

## Endpoints

### Authentification

- **POST /signup** : Permet à un utilisateur de s'enregistrer en fournissant un nom d'utilisateur et un mot de passe.
- **POST /login** : Permet à un utilisateur de se connecter en fournissant un nom d'utilisateur et un mot de passe.

### Utilisateurs

- **GET /user/:id/favorites** (Authentification requise) : Récupère les favoris d'un utilisateur spécifié par son ID.
- **PUT /user/:id/favorites** (Authentification requise) : Met à jour les favoris d'un utilisateur spécifié par son ID.

### Marvel

- **GET /characters** : Récupère la liste des personnages (avec des options de requête : `name` pour rechercher des personnages, `skip` pour les pages suivantes, `limit` pour limiter le nombre de réponses).
- **GET /character/:id** : Récupère les détails d'un personnage spécifié par son ID.
- **GET /comics** : Récupère la liste des comics (avec des options de requête : `title` pour rechercher un comics par titre, `skip` pour les pages suivantes).
- **GET /comics/:characterid** : Récupère les comics associés à un personnage spécifié par son ID.
- **GET /comic/:comicId** : Récupère les détails d'un comic spécifié par son ID.

## Packages utilisés

Ce projet utilise les packages suivants :

- **Mongoose** : Permet d'interagir avec une base de données MongoDB et de définir des modèles pour les données.
- **Crypto-js** : Utilisé pour encrypter les mots de passe des utilisateurs et les stocker de manière sécurisée dans la base de données.

## Crédits

Ce backend utilise les ressources de l'API Marvel. Pour plus d'informations, veuillez consulter [APi Le Reacteur](https://lereacteur-marvel-api.netlify.app/documentation).

## Licence

Ce projet est sous licence MIT.

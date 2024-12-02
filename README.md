# Discord Auto Bump System (D-A-B-S) 🤖🚀

![License](https://img.shields.io/github/license/ErrorNoName/D-A-B-S)
![Version](https://img.shields.io/github/package-json/v/ErrorNoName/D-A-B-S)
![Issues](https://img.shields.io/github/issues/ErrorNoName/D-A-B-S)

**Discord Auto Bump System (D-A-B-S)** est un script automatisé utilisant un **self-bot** pour effectuer des bumps réguliers sur Disboard. Ce projet simplifie le processus de bump tout en ajoutant des délais aléatoires pour une exécution plus naturelle.

---

## 📋 Fonctionnalités

- **Interaction console** : Configurez les délais de bump au démarrage en répondant à des questions interactives.
- **Automatisation complète** : Bumps réguliers avec des délais aléatoires entre 2 et 2h02.
- **Suivi des actions** : Affiche le nombre de bumps effectués directement dans la console.
- **Sûr et configurable** : Utilise des variables d'environnement pour les paramètres sensibles comme le token Discord et l'ID du canal.

---

## 🚀 Installation et Utilisation

### 1. Pré-requis

- **Node.js** : Version 16 ou plus.
- **Disboard Bot** : Le bot Disboard doit être présent sur votre serveur.
- **Token Self-Bot** : Nécessite un token de self-bot Discord (⚠️ à utiliser avec prudence, cela va à l'encontre des TOS de Discord).

---

### 2. Installation

Clonez le dépôt et installez les dépendances nécessaires :

```bash
git clone https://github.com/ErrorNoName/D-A-B-S.git
cd D-A-B-S
npm install
```

---

### 3. Configuration

1. **Créer un fichier `.env`** à la racine du projet.
2. Ajouter les clés suivantes :

```env
TOKEN=Votre_Token_Discord
BUMP_CHANNEL=ID_du_Canal_Disboard
```

- `TOKEN` : Votre token Discord.
- `BUMP_CHANNEL` : L'ID du canal où les commandes `!d bump` sont exécutées.

---

### 4. Lancer le Script

Pour démarrer le script, utilisez :

```bash
npm start
```

Une fois lancé, répondez aux questions interactives pour configurer le premier bump.

---

## 📂 Structure du Projet

```
D-A-B-S/
├── index.js        # Script principal
├── .env.example    # Exemple de configuration
├── package.json    # Dépendances et scripts
├── README.md       # Documentation
└── node_modules/   # Dépendances installées
```

---

## 🛠️ Technologies Utilisées

- **Node.js** : Moteur d'exécution JavaScript.
- **discord.js-selfbot-v13** : Librairie pour interagir avec l'API Discord.
- **dotenv** : Gestion des variables d'environnement.

---

## ⚠️ Avertissements

- **Self-Bots et TOS Discord** : L'utilisation d'un self-bot enfreint les Conditions d'Utilisation de Discord. Utilisez ce script à vos risques et périls.
- **Utilisation Responsable** : Ne spammez pas les serveurs et respectez les communautés Discord.

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Veuillez suivre ces étapes :

1. Fork le dépôt.
2. Créez une branche pour vos modifications : `git checkout -b feature/ma-fonctionnalité`.
3. Commitez vos changements : `git commit -m 'Ajout de ma fonctionnalité'`.
4. Poussez vers votre branche : `git push origin feature/ma-fonctionnalité`.
5. Ouvrez une Pull Request.

---

## 📜 Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](./LICENSE) pour plus d'informations.

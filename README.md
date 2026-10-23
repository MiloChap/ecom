# ECom : boutique en ligne en React

Site e-commerce en React.
Les produits viennent de l'API [Fake Store](https://fakestoreapi.com) et l'authentification passe par l'API [authdev.ri7.tech](https://authdev.ri7.tech).

## Lancer le projet

```bash
git clone https://github.com/MiloChap/ecom.git
cd ecom
npm install
npm run dev
```

Le site est ensuite disponible sur http://localhost:5173.

Le `.env` est commité pour la version démo. Dans un vrai projet, il ne serait jamais commité et serait remplacé par un `.env.example`.

## Comptes de test

| Rôle        | Email                        | Mot de passe |
| ----------- | ---------------------------- | ------------ |
| Admin       | `admin.demo@ecom.fr`         | `admindemo`  |
| Utilisateur | à créer avec « Inscription » |              |

## Limites connues

- **Le CRUD est simulé** : l'API FakeStore n'enregistre rien. J'appelle l'API puis je mets à jour le Context, donc toute modification est perdu au raffraichissement.
- **Les commandes sont simulés** : elles sont stockées dans le `localStorage` avec un id généré avec `Date.Now()`.
- **Le token n'est vérifié qu'au chargement** : s'il expire pendant la navigation, on est déconnecté au prochain rechargement.

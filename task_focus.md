# Plan de Travail Agile - Plateforme eCommerce SaaS avec CMS

## Légende
- 🔄 En cours
- ✅ Terminé
- ⏳ En attente

## Sprint 0 : Préparation & Configuration (3 jours)

### Infrastructure & Configuration
- [x] ✅ Initialisation du projet
  - [x] ✅ Configurer la structure des dossiers
  - [x] ✅ Mettre en place ESLint, Prettier et Husky
  - [ ] 🔄 Configuration de Supabase
    - [ ] Créer le projet Supabase
    - [ ] Configurer les variables d'environnement
    - [ ] Initialiser le client Supabase

### Base de Données
- [ ] ⏳ Configuration de la base de données
  - [ ] Créer les tables principales
    - [ ] `profiles` (utilisateurs)
    - [ ] `shops` (boutiques)
    - [ ] `products` (produits)
    - [ ] `product_variants` (variantes de produits)
    - [ ] `categories` (catégories de produits)
  - [ ] Configurer les relations entre les tables
  - [ ] Mettre en place le RLS (Row Level Security)
  - [ ] Créer les politiques d'accès

## Sprint 1 : Authentification & Espace Vendeur (5 jours)

### Authentification
- [ ] ⏳ Système d'authentification avec rôles
  - [ ] Inscription/Connexion vendeur
  - [ ] Inscription/Connexion client
  - [ ] Gestion des sessions
  - [ ] Récupération de mot de passe

### Tableau de Bord Vendeur
- [ ] ⏳ Tableau de bord principal
  - [ ] Vue d'ensemble des ventes
  - [ ] Statistiques de base
  - [ ] Vue rapide des commandes récentes

## Sprint 2 : Gestion des Produits & CMS (7 jours)

### Gestion des Produits
- [ ] ⏳ CRUD produits
  - [ ] Création/édition de produits
  - [ ] Gestion des variantes
  - [ ] Téléchargement d'images
  - [ ] Gestion des stocks

### Fonctionnalités CMS
- [ ] ⏳ Gestion des pages
  - [ ] Éditeur WYSIWYG
  - [ ] Gestion des modèles
  - [ ] Sections modulaires
- [ ] ⏳ Gestion des médias
  - [ ] Bibliothèque de médias
  - [ ] Téléchargement/gestion des fichiers

## Sprint 3 : Boutique en Ligne (5 jours)

### Page Boutique
- [ ] ⏳ Page boutique personnalisable
  - [ ] Thème personnalisable
  - [ ] Sections modulaires
  - [ ] SEO de base
- [ ] ⏳ Catalogue produits
  - [ ] Filtres et recherche
  - [ ] Fiches produits détaillées
  - [ ] Galerie d'images

## Sprint 4 : Commandes & Paiements (5 jours)

### Système de Commandes
- [ ] ⏳ Panier d'achat
- [ ] ⏳ Processus de commande
- [ ] ⏳ Intégration de paiement (Stripe)
- [ ] ⏳ Notifications par email

## Sprint 5 : Administration & Finalisation (5 jours)

### Console d'Administration
- [ ] ⏳ Gestion des utilisateurs
- [ ] ⏳ Gestion des boutiques
- [ ] ⏳ Tableaux de bord avancés
- [ ] ⏳ Paramètres généraux

### Finalisation
- [ ] ⏳ Tests utilisateurs
- [ ] ⏳ Optimisation des performances
- [ ] ⏳ Documentation

## Tâche Actuelle

### 🔄 Configuration de Supabase
- [x] Créer le projet Supabase
- [ ] Configurer les variables d'environnement
- [ ] Initialiser le client Supabase
- [ ] Créer la structure de la base de données

## Prochaine Tâche
- Configuration des variables d'environnement et initialisation du client Supabase

## Structure des Dossiers
```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   │
│   ├── (dashboard)/
│   │   ├── seller/
│   │   │   ├── products/
│   │   │   ├── orders/
│   │   │   ├── pages/
│   │   │   ├── media/
│   │   │   └── settings/
│   │   │
│   │   └── admin/
│   │       ├── users/
│   │       ├── stores/
│   │       └── settings/
│   │
│   └── (store)/
│       └── [storeSlug]/
│           ├── products/
│           ├── pages/
│           └── cart/
│
├── components/
│   ├── cms/
│   │   ├── editor/
│   │   ├── blocks/
│   │   └── media-library/
│   │
│   ├── products/
│   ├── cart/
│   └── ui/
│
└── lib/
    ├── supabase/
    │   ├── client.ts
    │   └── server.ts
    └── utils/
```

## Schéma de la Base de Données

### Tables Principales
1. **profiles** - Gestion des utilisateurs
2. **shops** - Informations des boutiques
3. **products** - Produits des boutiques
4. **product_variants** - Variantes de produits
5. **categories** - Catégories de produits
6. **pages** - Pages personnalisées
7. **media** - Fichiers multimédias
8. **navigation_menus** - Menus de navigation

### Relations Clés
- Un utilisateur peut posséder plusieurs boutiques
- Une boutique peut avoir plusieurs produits et pages
- Un produit peut appartenir à plusieurs catégories
- Les médias sont liés aux boutiques et aux produits/pages

## Notes Importantes
- Toutes les requêtes doivent respecter les politiques RLS
- Les médias sont stockés dans Supabase Storage
- Les thèmes sont stockés sous forme de configurations JSON
- Les pages utilisent un système de blques modulaires


# Restoran - Site Web de Restaurant Moderne

## 📝 Description
**Restoran** est un site web moderne, élégant et entièrement responsive conçu pour un restaurant. Développé avec **HTML**, **CSS**, et **JavaScript**, il offre une expérience utilisateur exceptionnelle grâce à son design intuitif, ses animations fluides et ses fonctionnalités optimisées pour tous les appareils.

---

## 🚀 Fonctionnalités Principales

### 🎨 Design Moderne
- **Palette de couleurs sophistiquée** avec des variables CSS personnalisées.
- **Effets visuels élégants** : gradients, transparence, flou.
- **Animations fluides** pour les interactions.
- Design homogène et attrayant sur toutes les sections.

### 🧭 Navigation
- Navbar fixe avec effet de transparence.
- **Menu hamburger animé** pour une navigation mobile fluide.
- Transitions douces entre les sections.
- Overlay sombre pour le menu mobile.

### 📜 Sections Principales
- **Hero Section** :
  - Image principale animée avec effet de flottement.
  - Texte animé avec dégradés.
  - Bouton CTA proéminent pour capter l’attention.
- **Promotions** :
  - Cartes visuelles avec effets de survol et images circulaires.
  - Adaptabilité parfaite sur tous les écrans.
- **Menu** :
  - Grille responsive avec filtres de catégories.
  - Animations d’interaction : survol et zoom sur les images.
  - Affichage des prix avec un effet dégradé.
- **À Propos** :
  - Mise en page en deux colonnes.
  - Icônes et animations pour les points forts.
  - Effet de zoom subtil sur l’image.
- **Footer** :
  - Grille à 4 colonnes pour les informations essentielles.
  - Icônes de réseaux sociaux animées.
  - Formulaire pour s’abonner à la newsletter.

---

## 💎 Points Forts du Design

### 🔄 Animations et Transitions
```css
/* Animation de flottement */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Transition douce pour les éléments interactifs */
.element {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### ✨ Effets de Survol Sophistiqués
```css
.menu-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  border-color: var(--secondary);
}
```

### 📐 Design Responsive
```css
/* Breakpoints principaux */
@media (min-width: 1400px) { /* TV et grands écrans */ }
@media (max-width: 1200px) { /* Laptops */ }
@media (max-width: 992px) { /* Tablettes */ }
@media (max-width: 768px) { /* Mobiles */ }
@media (max-width: 576px) { /* Petits mobiles */ }
```

---

## 🛠 Technologies Utilisées
- **HTML5** : Structure sémantique.
- **CSS3** : Flexbox, Grid, Animations, Variables CSS.
- **JavaScript** : Interactions et navigation mobile.
- **Font Awesome** : Icônes stylisées.

---

## 📱 Responsive Design
- Design adaptatif pour toutes les tailles d’écran.
- **Menu hamburger** optimisé pour les mobiles.
- Grilles CSS fluides.
- Images adaptées aux résolutions variées.

---

## ⚡ Performance
- Variables CSS pour une meilleure maintenabilité.
- **Animations optimisées** utilisant `transform` et `opacity`.
- Support du chargement différé des images.
- Code modulaire et réutilisable.

---

## 🎨 Palette de Couleurs
```css
:root {
  --primary: #E31837;  /* Rouge restaurant */
  --secondary: #FFB800; /* Or chaud */
  --dark: #1C1C1C;      /* Noir profond */
  --darker: #141414;    /* Noir plus profond */
  --light: #FFFFFF;     /* Blanc pur */
  --gray: #9B9B9B;      /* Gris neutre */
  --accent: #2C2C2C;    /* Gris foncé */
  --gold: #D4AF37;      /* Or pour les accents */
}
```

---

## 📂 Structure des Fichiers

```plaintext
restaurant-website/
├── index.html
├── style.css
├── script.js
└── img/
    ├── grill.jpg
    ├── burger.jpg
    ├── pizza.jpg
    └── ...
```

---

## 🚀 Installation et Utilisation
1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/restaurant-website.git
   ```
2. Assurez-vous que les images sont présentes dans le dossier `img/`.
3. Ouvrez `index.html` dans votre navigateur pour voir le site.

---

## 💡 Bonnes Pratiques Utilisées
- Utilisation de **HTML sémantique** pour l’accessibilité.
- CSS modulaire avec **variables personnalisées**.
- JavaScript non-intrusif pour une compatibilité accrue.
- **Approche mobile-first** pour le design.
- Animations optimisées pour des performances accrues.

---

## 🔄 Futures Améliorations Possibles
- Ajout d’un système de **réservation en ligne**.
- Intégration d’une **carte interactive**.
- **Galerie photos** avec lightbox.
- Support pour un **menu multilingue**.
- Mise en place d’un **système de commande en ligne**.

---

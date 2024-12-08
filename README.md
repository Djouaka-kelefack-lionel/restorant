# Restoran - Site Web de Restaurant Moderne

## 📝 Description
Un site web moderne et responsive pour un restaurant, développé avec HTML, CSS et JavaScript. Le site présente un design élégant avec des animations fluides, une navigation intuitive et une excellente expérience utilisateur sur tous les appareils.

## 🚀 Fonctionnalités Principales

### 1. Design Moderne
- Palette de couleurs sophistiquée avec des variables CSS personnalisées
- Gradients élégants pour les éléments interactifs
- Effets de transparence et de flou pour la navbar
- Design cohérent à travers toutes les sections

### 2. Navigation
- Navbar fixe avec effet de transparence
- Menu hamburger animé pour mobile
- Navigation fluide avec transitions douces
- Overlay sombre lors de l'ouverture du menu mobile

### 3. Sections Principales
- **Hero Section**
  - Animation de flottement pour l'image principale
  - Texte avec dégradé et animations d'entrée
  - Bouton CTA (Call-to-Action) proéminent

- **Section Promotions**
  - Cartes promotionnelles avec images circulaires
  - Effets de survol élégants
  - Design responsive qui s'adapte aux mobiles

- **Section Menu**
  - Grille responsive de plats
  - Filtres de catégories
  - Animations au survol des cartes
  - Prix avec effet de dégradé
  - Images avec zoom au survol

- **Section À Propos**
  - Mise en page en deux colonnes
  - Features avec icônes
  - Animations au défilement
  - Image avec effet de zoom au survol

- **Footer**
  - Design en grille à 4 colonnes
  - Icônes de réseaux sociaux avec animations
  - Formulaire newsletter
  - Responsive sur tous les appareils

## 💎 Points Forts du Design

### Animations et Transitions 


css
/ Animation de flottement /
@keyframes float {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-20px); }
}
/ Transition douce pour les éléments interactifs /
.element {
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}


### Effets de Survol Sophistiqués

css
.menu-item:hover {
transform: translateY(-10px);
box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
border-color: var(--secondary);
}



### Design Responsive

css
/ Breakpoints principaux /
@media (min-width: 1400px) { / TV et grands écrans / }
@media (max-width: 1200px) { / Laptops / }
@media (max-width: 992px) { / Tablettes / }
@media (max-width: 768px) { / Mobiles / }
@media (max-width: 576px) { / Petits mobiles / }



## 🛠 Technologies Utilisées
- HTML5
- CSS3 (Variables, Flexbox, Grid, Animations)
- JavaScript (Navigation mobile, Interactions)
- Font Awesome (Icônes)

## 📱 Responsive Design
- Design fluide qui s'adapte à tous les écrans
- Menu hamburger pour mobile
- Grilles responsives avec CSS Grid
- Images optimisées pour différentes tailles d'écran

## ⚡ Performance
- Utilisation de variables CSS pour la cohérence
- Animations optimisées avec transform et opacity
- Chargement différé des images possible
- Code CSS modulaire et réutilisable

## 🎨 Palette de Couleurs


css
:root {
--primary: #E31837; / Rouge restaurant /
--secondary: #FFB800; / Or chaud /
--dark: #1C1C1C; / Noir profond /
--darker: #141414; / Noir plus profond /
--light: #FFFFFF; / Blanc pur /
--gray: #9B9B9B; / Gris neutre /
--accent: #2C2C2C; / Gris foncé /
--gold: #D4AF37; / Or pour les accents /
}



## 📦 Structure des Fichiers

restaurant-website/
├── index.html
├── style.css
├── script.js
└── img/
├── grill.jpg
├── burger.jpg
├── pizza.jpg
└── ...



## 🚀 Installation et Utilisation
1. Clonez le repository
2. Assurez-vous d'avoir toutes les images dans le dossier `img/`
3. Ouvrez `index.html` dans votre navigateur

## 💡 Bonnes Pratiques Utilisées
- Code HTML sémantique
- CSS modulaire avec variables
- JavaScript non-intrusif
- Accessibilité prise en compte
- Design mobile-first
- Animations optimisées pour les performances

## 🔄 Futures Améliorations Possibles
- Ajout d'un système de réservation en ligne
- Intégration d'une carte interactive
- Galerie photos avec lightbox
- Menu multilingue
- Système de commande en ligne
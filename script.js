// Sélection des éléments
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

// Fonction pour basculer le menu
function toggleMenu() {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('menu-open');
}

// Écouteur d'événement pour le bouton menu
menuBtn.addEventListener('click', toggleMenu);

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Fermer le menu quand on clique en dehors
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target) && navLinks.classList.contains('active')) {
        toggleMenu();
    }
}); 
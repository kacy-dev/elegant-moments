/**
 * NAVIGATION.JS
 * Handles mobile drawer toggles, smooth scroll interactions, and active page styling.
 */

function toggleMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) {
    navMenu.classList.toggle('active');
  }
}

// Automatically highlight active page in header
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
});
 // Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const bottomNav = document.querySelector('.bottom-nav');

if (hamburger && navMenu && body && bottomNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('nav-active');
    bottomNav.classList.toggle('hide');
  });

  // Close menu when a nav link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      body.classList.remove('nav-active');
    });
  });
}

// Smooth scroll for anchor links with valid targets
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Header hide/show on scroll
let lastScrollTop = 0;
const header = document.querySelector('#main-header');

if (header) {
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// Ellipsis toggle for navigation items on desktop
const ellipsis = document.querySelector('.nav-menu .ellipsis');
if (ellipsis && navMenu) {
  ellipsis.addEventListener('click', () => {
    navMenu.classList.toggle('show-all');
  });
}
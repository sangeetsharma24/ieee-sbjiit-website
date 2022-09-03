const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const navbarHomeLink = document.querySelector('.home');
const navbarContactUsLink = document.querySelector('.contact');

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

function closeMobileNavbar() {
  nav_header.classList.remove('active');
}


mobile_nav.addEventListener("click", () => toggleNavbar());
navbarContactUsLink.addEventListener("click", closeMobileNavbar);
navbarHomeLink.addEventListener("click", closeMobileNavbar);

function toggleMenu() {
  var navLinks = document.getElementById('nav-links');
  var burger = document.querySelector('.burger');
  navLinks.classList.toggle('active');
  burger.classList.toggle('open');
}
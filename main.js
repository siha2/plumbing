let filters = document.querySelectorAll(".work .filters li");
let works = document.querySelectorAll(".work .works .all");

function toggleMenu() {
  var navLinks = document.getElementById('nav-links');
  var burger = document.querySelector('.burger');
  navLinks.classList.toggle('active');
  burger.classList.toggle('open');
}

// filters
filters.forEach((filter) => {
  filter.addEventListener("click",workFilter);
});

function workFilter() {
  filters.forEach((filter) => {
    filter.classList.remove("active");
  });
  this.classList.add("active");
  works.forEach((work) => {
    work.style.display = "none";
  });
  document.querySelectorAll(`.${this.dataset.cat}`).forEach((el) => {
    el.style.display = "block";
  });
};
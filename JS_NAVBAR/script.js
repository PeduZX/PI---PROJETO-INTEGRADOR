let barraNav = document.getElementById('barra-nav');
let navHeader = document.getElementById('nav-header');
let closeNav = document.getElementById('close-nav');

barraNav.addEventListener('click', function () {
  navHeader.style.display = "flex";
  barraNav.style.display = "none";
  closeNav.style.display = "block";
});

closeNav.addEventListener('click', function () {
  navHeader.style.display = "none";
  barraNav.style.display = "block";
  closeNav.style.display = "none";
});

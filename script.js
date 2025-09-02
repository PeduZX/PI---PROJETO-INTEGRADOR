let barraNav = document.getElementById('barra-nav');
let navHeader = document.querySelector('.nav-header')
let ulNav = document.getElementById('ul-nav');
let closeNav = document.getElementById('close-nav');
let divClose = document.getElementById('div-close');


barraNav.addEventListener('click', function() {
if (navHeader.style.display === 'block') {
    navHeader.style.display = 'none';
    barraNav.style.display = 'block';
    divClose.style.display = 'none';
} else {
    navHeader.style.display = 'block';
    barraNav.style.display = 'none';
    divClose.style.display = 'block';
}
});
closeNav.addEventListener('click', function() {
    if (navHeader.style.display === 'block') {
        navHeader.style.display = 'none';
        barraNav.style.display = 'block';
        divClose.style.display = 'none';
    }    
});
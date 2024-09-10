function showCategory(category) {
    document.querySelector('.main-dishes').style.display = 'none';
    document.querySelector('.side-dishes').style.display = 'none';
    document.querySelector('.drinks').style.display = 'none';

    document.querySelector('.' + category).style.display = 'flex';
}
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}
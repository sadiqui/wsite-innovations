var logo = document.querySelector('.menu-icon');
var menu = document.querySelector('.burger');

logo.addEventListener('click',function(){
    menu.classList.toggle('show-menu');
});
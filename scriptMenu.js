// Script para mostrar/ocultar o menu no clique do ícone de hambúrguer
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav ul');

hamburger.addEventListener('click', function() {
  navList.classList.toggle('show');
});

const botaoMenu = document.querySelector('.menu-botao')
const menuToggle = document.querySelector('.menu')

botaoMenu.onclick = function (){
    menuToggle.classList.toggle('aberto')
    botaoMenu.classList.toggle('aberto')
}
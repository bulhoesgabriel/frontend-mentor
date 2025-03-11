const menuButton = document.querySelector('#menu-button')
const menuList = document.querySelector('#menu-list')
const menuContainer = document.querySelector('.menu-container')
const buttonImg = document.querySelector('#button-img')
const mainImg = document.querySelector('#main-img')

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('active')
    menuContainer.classList.toggle('active')
    if (menuList.classList.contains('active')) {
        buttonImg.src = "assets/images/icon-menu-close.svg"
    } else {
        buttonImg.src = "assets/images/icon-menu.svg"
    }
})
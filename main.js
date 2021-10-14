'use strict'

// Make navbar transparent when it is on the top.
const navbar = document.querySelector('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height
document.addEventListener('scroll', () => {
   if(window.scrollY > navbarHeight) {
       navbar.classList.add('navbar--dark')
   } else {
       navbar.classList.remove('navbar--dark')
   }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu')
navbarMenu.addEventListener('click', (event) => {
    const target = event.target
    const link = target.dataset.link
    if(link == null) {
        return
    }
    scrollIntoView(link)
})

// Handle click on "Contact Me"
const contactBtn = document.querySelector('.home__contact')
contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact')
})

function scrollIntoView(selector) {
    const selectedElement = document.querySelector(selector)
    selectedElement.scrollIntoView({behavior:'smooth'})
}

// transparent home
const homeContainer = document.querySelector('.home__container');
const homeContainerHeight = homeContainer.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    homeContainer.style.opacity = 1 - window.scrollY / homeContainerHeight
})

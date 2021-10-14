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

// transparent home
const homeContainer = document.querySelector('.home__container');
const homeContainerHeight = homeContainer.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    homeContainer.style.opacity = 1 - window.scrollY / homeContainerHeight
})

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
    if(window.scrollY >= homeContainerHeight / 2) {
        arrowUp.classList.add('visible')
    } else {
        arrowUp.classList.remove('visible')
    }
})

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home')
})

// Projects
const workBtnContainer = document.querySelector('.work__categories')
const projectContainer = document.querySelector('.work__projects')
const projects = document.querySelectorAll('.project')
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter
    projectContainer.classList.add('anim-out')
    setTimeout(() => {
        projects.forEach(project => {
            if(filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible')
            } else {
                project.classList.add('invisible')
            }
        })
        projectContainer.classList.remove('anim-out')
    }, 300)
})

function scrollIntoView(selector) {
    const selectedElement = document.querySelector(selector)
    selectedElement.scrollIntoView({behavior:'smooth'})
}

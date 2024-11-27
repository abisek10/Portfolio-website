// mobile menu
const headerBar = document.querySelector('.header_bar')
const mobileNav = document.querySelector('.mobile-nav')
const mobileNav_link = document.querySelectorAll('.mobile-nav_link')

let ismobileNav = false

headerBar.addEventListener('click',() => {
    if (!ismobileNav) {      
        mobileNav.style.display = 'flex'
        document.body.style.overflowY = 'hidden'
        ismobileNav = !ismobileNav
    } else {
        mobileNav.style.display = 'none'
        document.body.style.overflowY = 'auto'
        ismobileNav = !ismobileNav
    }
})

mobileNav_link.forEach((link) => {
    link.addEventListener('click', () => {
        mobileNav.style.display = 'none'
        document.body.style.overflow = 'auto'
        ismobileNav = !ismobileNav
    })
})

// theme toggle
const toggleBtn = document.querySelectorAll('#toggle-btn')

const theme = localStorage.getItem('theme')

theme && document.body.classList.add(theme)

toggleBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode')
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode')
        } else {
            localStorage.removeItem('theme')
            document.body.removeAttribute('class')
        }
    })
})


// lazy loading
const lazy = document.querySelectorAll('.lazy')

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {   
            let img = entry.target
            img.src = img.dataset.src
            img.classList.remove('loading')
            img.classList.add('loaded')
            observer.unobserve(img)
        }
    })
})

lazy.forEach((img) => {
    observer.observe(img)
})
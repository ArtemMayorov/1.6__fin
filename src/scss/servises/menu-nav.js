const wraps = document.querySelector('.nav__list').children
const anchors = document.querySelector('.nav__list').querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", (ev) => {
        ev.preventDefault()
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

for (let wrap of wraps) {
    wrap.addEventListener("click", ()=> {
        for(let remov of wraps) {
            remov.classList.remove('nav__item--active')
        }
        wrap.classList.add('nav__item--active')
    })
}
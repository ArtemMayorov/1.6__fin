const readMore = document.querySelector('.about-company__read-more-button');
const openFirstPar = document.querySelector('.about-company__first-paragraph');
const openSecondPar = document.querySelector('.about-company__second-paragraph');
const hiddenParOpen = document.querySelector ('.about-company__hidden-paragraph')
const hiddenPar2Open = document.querySelector ('.about-company__hidden-paragraph2')



readMore.addEventListener('click',() =>{

    openSecondPar.classList.toggle('about-company__second-paragraph--active');
    readMore.classList.toggle('about-company__read-more-button--rotate')
    hiddenParOpen.classList.toggle('about-company__hidden-paragraph--active')
    hiddenPar2Open.classList.toggle('about-company__hidden-paragraph2--active')

    if(readMore.textContent != "Скрыть") {
        readMore.textContent = "Скрыть"
    }else {
        readMore.textContent = "Читать далее"

    }
})

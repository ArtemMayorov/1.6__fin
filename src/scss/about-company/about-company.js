const readMore = document.querySelector('.about-company__read-more-button');
const openFirstPar = document.querySelector('.about-company__first-paragraph');
const openSecondPar = document.querySelector('.about-company__second-paragraph');
const hiddenParOpen = document.querySelector ('.about-company__hidden-paragraph')
const hiddenPar2Open = document.querySelector ('.about-company__hidden-paragraph2')


console.log(openSecondPar)

readMore.addEventListener('click',() =>{

    openSecondPar.classList.toggle('about-company__second-paragraph--active');
    readMore.classList.toggle('about-company__read-more-button--rotate')
    hiddenParOpen.classList.toggle('about-company__hidden-paragraph--active')
    hiddenPar2Open.classList.toggle('about-company__hidden-paragraph2--active')

    // about-company__hidden-paragraph--active
    if(readMore.textContent != "Скрыть") {
        readMore.textContent = "Скрыть"
    }else {
        readMore.textContent = "Показать всё"

    }
})
//   showAllButton.classList.toggle('slider__show-all--hidden');

//    if(showAllButton.textContent != "Скрыть") {
//   showAllButton.textContent = "Скрыть"
//   } else {
//     showAllButton.textContent = "Показать все"
//   }

// })
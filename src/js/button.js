
const slider1ShowAll = document.querySelector('.slider__show-all');
const slider2ShowAll = document.querySelector('.slider2__show-all');
console.log(slider2ShowAll)
const openSliderPartner = document.querySelector('.slider__partner');
const openSliderRepair = document.querySelector('.swiper-wrapper__repair');


slider1ShowAll.addEventListener ('click', () => {
    openSliderPartner.classList.toggle('slider__partner--open');
    slider1ShowAll.classList.toggle('show-all--active');
    if(slider1ShowAll.textContent != "Скрыть") {
        slider1ShowAll.textContent = "Скрыть"
    }else {
        slider1ShowAll.textContent = "Показать всё"

    }
})
slider2ShowAll.addEventListener ('click', () => {
    openSliderRepair.classList.toggle('swiper-wrapper__repair--active');
    slider2ShowAll.classList.toggle('show-all--active');
    if(slider2ShowAll.textContent != "Скрыть") {
        slider2ShowAll.textContent = "Скрыть"
    }else {
        slider2ShowAll.textContent = "Показать всё"

    }
})
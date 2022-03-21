const orderCall = document.querySelector('.burger-footer__call');
const callBackPage = document.querySelector('.callback-page')
const mainPage = document.querySelector('.main-page');
const modalBack = document.querySelector('.callback-modal__back')
const openMenu = document.querySelector('.aside-page');
const bodyDisable = document.querySelector('.body')
const openCallBack = document.querySelector('.callback-page')


// console.log(orderCall)
 
orderCall.addEventListener('click', () =>{
    console.log(orderCall)
    callBackPage.classList.toggle('callback-page--active')
    mainPage.classList.add('body--disabled')
    bodyDisable.classList.add('body--disabled')
    openMenu.classList.toggle('aside-page--active')

    

})
modalBack.addEventListener('click', () =>{
    callBackPage.classList.toggle('callback-page--active')
    mainPage.classList.toggle('body--disabled')
    openMenu.classList.remove('aside-page--active')
    bodyDisable.classList.remove('body--disabled')
})
openCallBack.addEventListener('click', (ev) => {
    if (ev.target === openCallBack) {
        openCallBack.classList.toggle('callback-page--active')
    }
})

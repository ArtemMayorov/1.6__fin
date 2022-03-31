const openMenu = document.querySelector('.aside-page');
const burgerButton = document.querySelector('.button__burger');
const burgerBack = document.querySelector('.button__back');
const burgerBack2 = document.querySelector('.burger-header__button');
const bodyHidden = document.querySelector('body');
const mainPage = document.querySelector('.main-page');
const bodyDisable = document.querySelector('.body')
const buttonCall = document.querySelector('.button__call')
const buttonChat = document.querySelector('.button__chat')


const orderCall = document.querySelector('.burger-footer__call');
const callBackPage = document.querySelector('.callback-page')
const modalBack = document.querySelector('.callback-modal__back')

const openCallBack = document.querySelector('.callback-page')


const openFeedback = document.querySelector('.feedback-page')



const chatPage = document.querySelector('.feedback-page')
const feedbackButtonBack = document.querySelector('.feedback-modal__back')



    buttonCall.addEventListener('click', () =>{
        console.log(orderCall)
        callBackPage.classList.toggle('callback-page--active')
        mainPage.classList.add('body--disabled')
        bodyDisable.classList.add('body--disabled')
       
    })


    buttonChat.addEventListener('click', () =>{
   
        chatPage.classList.toggle('feedback-page--active')
     
        mainPage.classList.add('body--disabled')
        bodyDisable.classList.add('body--disabled')
    })

    burgerButton.addEventListener('click', () =>{
        openMenu.classList.add('aside-page--active')
        mainPage.classList.add('body--disabled')
        bodyDisable.classList.add('body--disabled')
    })
    burgerBack2.addEventListener('click', ()=>{
        openMenu.classList.remove('aside-page--active')
        mainPage.classList.remove('body--disabled')
        bodyDisable.classList.remove('body--disabled')
    })


    openMenu.addEventListener('click', (ev) => {
        if (ev.target === openMenu) {
            openMenu.classList.toggle('aside-page--active')
            bodyDisable.classList.remove('body--disabled')
        }
    })

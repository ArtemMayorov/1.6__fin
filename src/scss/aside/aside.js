const openMenu = document.querySelector('.aside-page');
const burgerButton = document.querySelector('.button__burger');
const burgerBack = document.querySelector('.button__back');
const burgerBack2 = document.querySelector('.burger-header__button');
const bodyHidden = document.querySelector('body');
const mainPage = document.querySelector('.main-page');
const bodyDisable = document.querySelector('.body')
const buttonCall = document.querySelector('.button__call')
const buttonChat = document.querySelector('.button__chat')
/////from call 

const orderCall = document.querySelector('.burger-footer__call');
const callBackPage = document.querySelector('.callback-page')
const modalBack = document.querySelector('.callback-modal__back')

const openCallBack = document.querySelector('.callback-page')

//// from chat
// const buttonChat = document.querySelector('.burger-footer__chat');
const openFeedback = document.querySelector('.feedback-page')


// console.log(buttonChat)

const chatPage = document.querySelector('.feedback-page')
const feedbackButtonBack = document.querySelector('.feedback-modal__back')
// console.log(burgerBack)

// burgerBack.addEventListener('click', () => {
//     console.log(burgerBack2)
// })
    buttonCall.addEventListener('click', () =>{
        console.log(orderCall)
        callBackPage.classList.toggle('callback-page--active')
        mainPage.classList.add('body--disabled')
        bodyDisable.classList.add('body--disabled')
        // openMenu.classList.toggle('aside-page--active')
    })


    buttonChat.addEventListener('click', () =>{
        // console.log(orderCall)
        chatPage.classList.toggle('feedback-page--active')
        // mainPage.classList.add('body--disabled')
        // openMenu.classList.toggle('aside-page--active')
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
// if (window.innerWidth > 360) {
//     burgerButton.addEventListener('click', () =>{
//         openMenu.classList.toggle('aside-page--active')
//         bodyHidden.classList.toggle('body--disabled')
//     })
// }
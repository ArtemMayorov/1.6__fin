const buttonChat = document.querySelector('.burger-footer__chat');
const openMenu = document.querySelector('.aside-page');
const bodyDisable = document.querySelector('.body')
const openFeedback = document.querySelector('.feedback-page')



const chatPage = document.querySelector('.feedback-page')
const mainPage = document.querySelector('.main-page');
const feedbackButtonBack = document.querySelector('.feedback-modal__back')


buttonChat.addEventListener('click', () =>{
    chatPage.classList.toggle('feedback-page--active')
    openMenu.classList.toggle('aside-page--active')
    mainPage.classList.add('body--disabled')
    bodyDisable.classList.add('body--disabled')
})
feedbackButtonBack.addEventListener('click', () =>{
    chatPage.classList.toggle('feedback-page--active')
    openMenu.classList.remove('aside-page--active')
    mainPage.classList.remove('body--disabled')
    bodyDisable.classList.remove('body--disabled')
})
openFeedback.addEventListener('click', (ev) => {
    if (ev.target === openFeedback) {
        openFeedback.classList.toggle('feedback-page--active');
        mainPage.classList.remove('body--disabled');
        bodyDisable.classList.remove('body--disabled');
    }
})

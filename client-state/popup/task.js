const subMod = document.getElementById('subscribe-modal')
const closeEl = subMod.querySelector('.modal__close')

if ( !document.cookie.includes('popup=viewed') ){
    subMod.classList.add('modal_active')
}

closeEl.addEventListener('click', () => {
    subMod.classList.remove('modal_active')
    document.cookie = 'popup=viewed'
})

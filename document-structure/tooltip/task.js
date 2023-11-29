const elems = Array.from(document.querySelectorAll('.has-tooltip'))

elems.forEach( (el) => {
    const extra = document.createElement('div')
    extra.classList.add('tooltip')
    extra.innerText = el.title
    extra.style.left = elems[elems.indexOf(el)].getBoundingClientRect().left + 'px'
    el.appendChild(extra)
})

const tips = Array.from(document.querySelectorAll('.tooltip'))

elems.forEach( (el) => {
    el.addEventListener('click', (elChlick) => {
        elChlick.preventDefault();
        //const steck = tips.filter( (some) => (some.classList.contains('tooltip_active')) )
        //if (steck.length < 2 || steck.in)
        tips[elems.indexOf(el)].classList.toggle('tooltip_active')
    })
})
const elems = [...document.querySelectorAll('.has-tooltip')]

elems.forEach( (el) => {
  const extra = document.createElement('div')
  extra.className = 'tooltip'
  extra.innerText = el.title
  extra.style.left = elems[elems.indexOf(el)].getBoundingClientRect().left + 'px'
  el.insertAdjacentElement('afterend', extra)
})

const tips = Array.from(document.querySelectorAll('.tooltip'))

elems.forEach( (el, index) => {
  el.addEventListener('click', (elChlick) => {
    elChlick.preventDefault();

    const active = tips.find(el => el.className === 'tooltip tooltip_active') 

    if (!active){
      tips[index].classList.toggle('tooltip_active')
    } else {
      if (tips.indexOf(active) === index) {
        active.classList.remove('tooltip_active')
      } else {
        active.classList.remove('tooltip_active')
        tips[index].classList.toggle('tooltip_active')}
    }
  })
})

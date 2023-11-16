const elem = document.querySelectorAll(".reveal")

for (let i = 0; i < elem.length; i++){
setInterval( () => {
    const { top, bottom} = elem[i].getBoundingClientRect()
    if ( top > window.innerHeight || bottom < 0 && elem[i].classList.contains("reveal_active") ){
        elem[i].classList.remove("reveal_active")
    } else {
        elem[i].classList.add("reveal_active")
    }
}, 1000)
}

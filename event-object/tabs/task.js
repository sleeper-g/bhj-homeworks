const tabs = document.querySelectorAll(".tab")
const content = document.querySelectorAll(".tab__content")
let active = 0
for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener("click", () => {
        tabs[active].classList.remove("tab_active")
        content[active].classList.remove("tab__content_active")
        tabs[i].classList.add("tab_active")
        content[i].classList.add("tab__content_active")
        active = i
    })
}

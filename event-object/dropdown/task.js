const elem = document.querySelector(".dropdown__value")
const elemList = document.querySelector(".dropdown__list")
const elemItems = document.querySelectorAll(".dropdown__item")

elem.addEventListener("click", () => elemList.classList.add("dropdown__list_active"))
for (let i = 0; i < elemItems.length; i++){
    elemItems[i].onclick = () => {
        elemList.classList.remove("dropdown__list_active")
        elem.textContent = elemItems[i].textContent
        return false
    }
}

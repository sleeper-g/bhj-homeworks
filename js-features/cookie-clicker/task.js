
const press = document.getElementById("clicker__counter")
const speed = document.getElementById("clicker__speed")
const cooki = document.getElementById("cookie")
let start = new Date()
cooki.onclick = () => {
  if (cooki.classList.toggle("clicker__cookie")){
    cooki.width = 300
  } 
  else {
    cooki.width = 200
  }
  let now = new Date()
  speed.textContent = (now.getTime() - start.getTime())/100
  start = now
  press.textContent = +press.textContent + 1
}

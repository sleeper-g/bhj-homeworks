
const time = document.getElementById("timer")
timerid = setInterval( ()=> {
  if (time.innerHTML != 0){
  time.innerHTML -=1
  } 
  else {
    alert("Вы победили в конкурсе!")
    clearTimeout(timerid)
  }
}, 1000)

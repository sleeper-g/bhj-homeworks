dead = document.getElementById("dead")
lost = document.getElementById("lost")
getHole = index => document.getElementById(`hole${index}`)

for (let index = 1; index < 10; index++){
  let hole = getHole(index)
  hole.onclick = () => {
    if ( hole.className.includes( 'hole_has-mole' ) ){
      dead.textContent = 1 + +dead.textContent
      if (+dead.textContent > 9) {
        alert("Вы выиграли")
        dead.textContent = 0
        lost.textContent = 0
      }
    }
    else {
      lost.textContent = 1 + +lost.textContent
      if (+lost.textContent > 4) {
        alert("Вы проиграли")
        dead.textContent = 0
        lost.textContent = 0
      }
    }
  }
}

const form = document.querySelector('form') 
const taskList = document.getElementById('tasks__list')
const newtask = document.getElementById('task__input') 

form.addEventListener('submit', (el) => {
    el.preventDefault()
    if (newtask.value){
    const task = document.createElement('div')
    task.classList.add('task')
    task.innerHTML = `<div class="task__title">
    ${newtask.value}
    </div>
    <a href="#" class="task__remove">&times;</a>`
  taskList.appendChild(task)
  task.childNodes[2].addEventListener( 'click', () => taskList.removeChild(task) )
}
    form.reset()
})

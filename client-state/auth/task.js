const form = document.getElementById('signin__form'),
    btn = document.getElementById('signin__btn'),
    enterCard = document.getElementById('signin'),
    welcomeCard = document.getElementById('welcome')
    xhr = new XMLHttpRequest()

const displayWelcome = (user_id) => {
    enterCard.classList.remove('signin_active')
    welcomeCard.classList.add('welcome_active')
    welcomeCard.firstElementChild.textContent = user_id
}

const displayDeactive = () => {
    const deactiveBtn = document.createElement('button')
    deactiveBtn.innerText = 'Деавторизация'
    welcomeCard.appendChild(deactiveBtn)
    deactiveBtn.addEventListener('click', () => {
        localStorage.removeItem('user_id');
        location.reload()
    })
}

if (localStorage.user_id){
    displayWelcome(localStorage.user_id);
    displayDeactive();
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    xhr.open('POST', form.action, true);
    xhr.send(new FormData(form))

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4){
            const result = JSON.parse(xhr.responseText)

            if (result.success){
                localStorage.user_id = result.user_id;
                displayWelcome(result.user_id);
                displayDeactive();
            } else {
                alert('Неверный логин/пароль');
                form.reset()
            }
        }
    }
})
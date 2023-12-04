const xhr = new XMLHttpRequest(),
 xhr1 = new XMLHttpRequest(),
 question = document.getElementById('poll__title'),
 answer = document.getElementById('poll__answers')

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true)
xhr.setRequestHeader('Content-Type', 'application/json')
xhr.send()
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
        let response = JSON.parse(xhr.responseText)
        question.innerText = response.data.title
        let answers = response.data.answers
        answers.forEach( (el, index) => {
            const btn = document.createElement('button')
            btn.className = 'poll__answer'
            btn.innerText = el
            answer.appendChild(btn)

            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!')
                xhr1.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll', true)
                xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
                xhr1.send(`vote=${response.id}&answer=${index}`)

                xhr1.onreadystatechange = () => {
                    if (xhr1.readyState === 4){
                        answer.innerHTML = ''
                        const returnStat = JSON.parse(xhr1.responseText).stat
                        let sumMaxVotes = 0
                        returnStat.forEach (num => sumMaxVotes += num.votes)
                        returnStat.forEach( returnEl => {
                            const divEl = document.createElement('div')
                            divEl.innerText = `${returnEl.answer}: ${(returnEl.votes / sumMaxVotes).toFixed(2)}%`
                            answer.appendChild(divEl)
                    })
                }}
            })
        });
    }
}

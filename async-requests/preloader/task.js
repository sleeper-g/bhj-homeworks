let xhr = new XMLHttpRequest()
const items = document.getElementById('items')
const loader = document.getElementById('loader')

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.setRequestHeader('Content-Type', 'application/json')
xhr.send();
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
        loader.style.display = 'none'
        const response = JSON.parse(xhr.responseText).response.Valute
        const itemCode = Object.keys(response)
        itemCode.forEach( el => {
            const item = document.createElement('div')
            item.className = 'item'
            item.innerHTML = `<div class="item__code">${el}</div>
                <div class="item__value">${response[el].Value}</div>
                <div class="item__currency">руб.</div>` 
            items.appendChild(item)
        })
    }
}
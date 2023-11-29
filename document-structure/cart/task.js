const products = [...document.querySelectorAll('.product')]

const basket = document.querySelector('.cart__products')
const cart = document.querySelector('.cart')

//for (let i = 0; i < product.length; i++){

//    add[i].addEventListener('click', () => {
//        const card__product = document.createElement('div')
//        card__product.className = 'cart__product'
//        card__product.setAttribute('data-id', i+1)
//        card__product.innerHTML =`<img class="cart__product-image" 
//        src="${product[i].childNodes[3].src}">
//        <div class="cart__product-count">${val[i].textContent}</div>`
//
//        basket.appendChild(card__product)
//    })
//}

products.forEach( (product, index) => {
    console.log(product)
    console.log(index)

    const dec = product.querySelector('.product__quantity-control_dec')
    const inc = product.querySelector('.product__quantity-control_inc')
    const val = product.querySelector('.product__quantity-value')
    const add = product.querySelector('.product__add')
    const img = product.querySelector('img').src

    dec.addEventListener('click', () => {
        if (+val.innerText > 1){
            val.innerText--
        }
    }) 
    inc.addEventListener('click', () => val.innerText++)

    add.addEventListener('click', () => {
        let inBasket = [...basket.children].find(el => el.dataset.id === product.dataset.id)
        if (inBasket){
            let valCart = inBasket.querySelector('.cart__product-count')
            valCart.textContent = +valCart.textContent + +val.textContent
        }
        else {
            inBasket = document.createElement('div')
            inBasket.className = 'cart__product'
            inBasket.dataset.id = product.dataset.id
            inBasket.innerHTML = `<img class="cart__product-image" 
            src="${img}">
            <div class="cart__product-count">${val.textContent}</div>`
            basket.appendChild(inBasket)
        }
    })
})
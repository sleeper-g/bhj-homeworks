const elem = Array.from(document.querySelectorAll('.font-size'))
const book = document.querySelector('.book')

for (let i = 0; i < elem.length; i++){
    elem[i].href = "#"
    elem[i].addEventListener('click', () => {
        if ( ! elem[i].classList.contains("font-size_active") ){
            elem.forEach(elem => elem.classList.remove("font-size_active")) 
            elem[i].classList.add("font-size_active")

            book.classList.remove("book_fs-big")
            book.classList.remove("book_fs-small")
            if ( elem[i].classList.contains('font-size_small')){book.classList.add("book_fs-small")}
            if ( elem[i].classList.contains('font-size_big')){book.classList.add("book_fs-big")}
        }
    })
}
const elems = Array.from(document.querySelectorAll(".rotator__case"))

for (let i = 0; i < elems.length; i++){
    elems[i].style.color = elems[i].dataset.color
}

setInterval( ()=> {
    for (let i = 0; i < elems.length; i++){
        if (elems[i].classList.contains("rotator__case_active")){
            next = i + 1
            if ( next < elems.length){
            elems[i].classList.remove("rotator__case_active")
            elems[next].classList.add("rotator__case_active")
            return
        }
        else {
            elems[i].classList.remove("rotator__case_active")
            elems[0].classList.add("rotator__case_active")
            return
        }
        }
    }}, 1000)
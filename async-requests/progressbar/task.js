const progress = document.getElementById('progress')
const file = document.getElementById('file')
const form = document.forms.form

const xhr = new XMLHttpRequest

form.addEventListener('submit', (e) => {
    e.preventDefault();
    xhr.upload.onprogress = (e) => {
        progress.value = e.loaded / e.total 
    }
    
    xhr.addEventListener('loadend', () => {
        if (xhr.status == 201) { 
            alert(`Success!`)
        } 
        else {
            alert(`Upload error - ${xhr.status}`)
        }
    
    })
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(new FormData(form));
})


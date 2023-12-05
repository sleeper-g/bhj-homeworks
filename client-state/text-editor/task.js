const editor = document.getElementById('editor');
if (!editor.value){
    editor.value = localStorage.editorText
}
editor.addEventListener('change', () => localStorage.editorText = editor.value)

const clearBtn = document.createElement('button')
clearBtn.innerText = 'Очистить содержимое'
editor.insertAdjacentElement('afterend', clearBtn)

clearBtn.addEventListener('click', () => {
    if (editor.value){
        editor.value = '';
        localStorage.editorText = '';
    }
})
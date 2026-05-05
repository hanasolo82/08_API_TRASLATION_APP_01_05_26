
const form = document.querySelector("form")
const button = document.getElementById("form-btn")
const input = document.querySelector("input")





form.addEventListener("submit", traslateBtnHandler)

function traslateBtnHandler(e) {
    e.preventDefault()
    const formData = new FormData(form)
    const inputName = formData.get(input.name)
    const textArea = document.getElementById("to-translate").value
    console.log(textArea)
    console.log(inputName)
    
    
    
}
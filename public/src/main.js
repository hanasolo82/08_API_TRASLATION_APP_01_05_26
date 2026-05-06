
const form = document.querySelector("form")
const button = document.getElementById("form-btn")
const input = document.querySelector("input")
const mainEl = document.getElementById("main-container")

form.addEventListener("submit", renderPage)
form.addEventListener("submit", formData)


function formData(e) {
    e.preventDefault()
    const formData = new FormData(form)
    const inputName = formData.get(input.name)
    const textArea = document.getElementById("to-translate").value
    console.log(textArea)
    console.log(inputName)
    
}


function renderPage(e) {
    e.preventDefault()


    mainEl.innerHTML = `
                <form>
                    <fieldset>
                        <label for="to-translate" class="blue">Orinal text 👇</label>
                        <textarea id="to-translate" placeholder="How are you?"></textarea>
                        <label for="translated"  class="blue">Your translation 👇</label>
                        <textarea id="translated" placeholder=""></textarea>
                        <button type="submit" class="form-btn" id="form-btn">Star Over</button>
                    </fieldset>
                </form>`
}
//next steps:

//  on click 
//  1. change to second page js ---------> hardcoded done
//  2. configure secure ids with server. framework express --> done
//  3. Api openai configure 
//  4. Get data and deploy 
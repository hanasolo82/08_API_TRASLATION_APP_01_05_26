
const form = document.querySelector("form")
const button = document.getElementById("form-btn")
const input = document.querySelector("input")
const mainEl = document.getElementById("main-container")
const textAreaEl = document.getElementById("to-translate")
//const resultEl = document.getElementById("translated")

form.addEventListener("submit",  async (e) => {
    e.preventDefault()
   
    const data = new FormData(form)
    const language = data.get("radio-language")

  
    console.log(language)
   await handleRequest(e, language)
})

async function  handleRequest(e, languages) {
    e.preventDefault()
    
   
    const areaValue = textAreaEl.value.trim()
    if(!areaValue) return

    const response = await fetch("http://localhost:3000/api", {
                            method : "POST",
                            headers : {
                                "Content-Type" : "application/json"
                            },
                            body : JSON.stringify({areaValue, languages})
            })
             const data = await response.json()
                
    
    renderPage(data.message)     
}

function renderPage(apiResponse= "") {
    mainEl.innerHTML = `
                <form>
                    <fieldset>
                        <label for="to-translate" class="blue">Orinal text 👇</label>
                        <textarea id="to-translate" placeholder="How are you?"></textarea>
                        <label for="translated"  class="blue">Your translation 👇</label>
                        <textarea id="translated" placeholder="">${apiResponse}</textarea>
                        <button type="submit" class="form-btn" id="form-btn">Star Over</button>
                    </fieldset>
                </form>`
}
//next steps:

//  on click 
//  1. change to second page js ---------> hardcoded done
//  2. configure secure ids with server. framework express --> done
//  3. Api openai configure ----> done
//  4. Get data and deploy -----> done
//

const body = document.querySelector("body")
import header from "./header.js"
import mergeInput from "./merge.js"
import btnDiv from "./button.js"
import input1Value from "./input.js"


function form(){
    let form =  document.createElement("form")
    form.setAttribute("id", "form")
    form.append(header(), mergeInput(), btnDiv())
    return form
}


body.append(form())

let formElement = document.getElementById("form")


formElement.addEventListener("submit", signUp)
function signUp(event){
    console.log("hello")
    event.preventDefault()
    let inputElement = document.getElementById("email")
    let valueInput = inputElement.value
    console.log(valueInput)
    let nameElemet = document.getElementById("name")
    let nameInput = nameElemet.value
    console.log(nameInput)    
}




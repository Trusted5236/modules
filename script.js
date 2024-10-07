const body = document.querySelector("body")
import header from "./header.js"
import mergeInput from "./merge.js"
import btnDiv from "./button.js"


function form(){
    let form =  document.createElement("form")
    form.setAttribute("id", "form")
    console.log(form)
    form.append(header(), mergeInput(), btnDiv())
    return form
}

body.append(form())

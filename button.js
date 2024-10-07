function btnDiv(){
    let btnDiv =  document.createElement("div")
    btnDiv.setAttribute("class", "btn")
    btnDiv.append(button())
    return btnDiv
}

function button(){
    let button = document.createElement("button")
    button.textContent = "Sign UP"
    button.setAttribute("type", "submit")
    return button
}

export default btnDiv
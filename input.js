import subInput from "./sub-input.js"

function label1(){
    let firstLabel = document.createElement("label")
    firstLabel.setAttribute("for", "email")
    firstLabel.textContent = "Your email"
    return firstLabel
}

function input1(){
    let input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("id", "email")
    input.setAttribute("name", "email")
    input.setAttribute("placeholder", "email@gmail.com")
    return input
}

function label2(){
    let secondLabel = document.createElement("label")
    secondLabel.setAttribute("for", "name")
    secondLabel.textContent = "Your Name and Surname"
    return secondLabel
}


function label3(){
    let thirdLabel = document.createElement("label")
    thirdLabel.setAttribute("for", "password")
    thirdLabel.textContent = "Password"
    return thirdLabel
}

function input2(){
    let input = document.createElement("input")
    input.setAttribute("type", "password")
    input.setAttribute("id", "password")
    input.setAttribute("name", "password")
    input.setAttribute("placeholder", "***********")
    return input
}

export {label1, input1, label2, subInput, label3, input2}
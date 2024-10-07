function subInput(){
    let subDiv = document.createElement("div")
    subDiv.setAttribute("class", "sub-input")
    subDiv.append(subInput1(), subInput2())
    return subDiv
}

function subInput1(){
    let input1 =  document.createElement("input")
    input1.setAttribute("type", "text")
    input1.setAttribute("id", "name")
    input1.setAttribute("name", "name")
    input1.setAttribute("placeholder", "Name")
    return input1
}

function subInput2(){
    let input2 =  document.createElement("input")
    input2.setAttribute("type", "text")
    input2.setAttribute("id", "Surname")
    input2.setAttribute("name", "name")
    input2.setAttribute("placeholder", "Surname")
    return input2
}

export default subInput


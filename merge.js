import { label1, input1, label2, subInput, label3, input2 } from "./input.js"

function mergeInput(){
    let mergeInput = document.createElement("div")
    mergeInput.setAttribute("class", "input")
    mergeInput.append( label1(), input1(), label2(), subInput(), label3(), input2())
    return mergeInput
}

export default mergeInput
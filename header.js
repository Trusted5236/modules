function h4(){
    let headerSize = document.createElement("h3");
    headerSize.textContent = "Sign Up"
    return headerSize
}

function header(){
    let headerCont  =  document.createElement("div")
    headerCont.setAttribute("class", "header")
    headerCont.append(h4())
    return headerCont
}

export default header

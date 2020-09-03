function getDate(){
    let body = document.getElementById("mainBody")

    let p = document.createElement("p")
    p.innerText = new Date()
    body.appendChild(p)
}
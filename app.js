let divA = document.querySelector("dA")

fetch("PVANSIEDADENOVA.json").then((Response) => {
    Response.json().then((divA) => {
        console.log(PVANSIEDADENOVA.json)
    })
})

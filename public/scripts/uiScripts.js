//scripts de apoyo para UserInterface
let sliceText = document.querySelector('.sliceText')
// 

function formatText (){
    sliceText.style.color = "#00adef"
    let newText = sliceText.textContent.toString().split(" ")
    sliceText.textContent = newText.splice(0,10)
    console.log(sliceText)
}

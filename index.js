const checkName = document.querySelector('#yourName')
const showNameWarning = document.querySelector('.warningName')
checkName.addEventListener("keyup",() => {
    if (checkName.value.length > 20) {
        console.log("Too many characters! Must be less than 20.")
        showNameWarning.innerText = "Too many characters! Must be less than 20."
    }else{
        showNameWarning.innerText = ""
    }
})

const inPutAge = document.querySelector('#yourAge')
const showageWarning = document.querySelector('.warningAge')
inPutAge.addEventListener("click",() =>{
    if (inPutAge.value < -10 || inPutAge.value > 10){
        console.log("Please don't under -10 and over 10.")
        showageWarning.innerText = "Please do not under -10 and over 10."
    }else{
        showageWarning.innerText = ""
    }
})

const checkCheckbox = document.querySelector("#acceptTerms")
const warningWord = document.querySelector(".warningCheckbox")
const Submitcomplete = document.querySelector(".submitcomplete")
const clickTocheckForm = document.querySelector('button')
clickTocheckForm.addEventListener("click",() =>{
    if (checkCheckbox.checked === true && checkName.value !== ""){
        console.log("Thank you")
        Submitcomplete.innerText = "Thank you very much!"
        warningWord.innerText = ""

    }else{
        console.log("Please fill your name and accept the terms and condition")
        warningWord.innerText = "Please fill your Name and accept the terms and condition"
        Submitcomplete.innerText = ""
    }
})

const typeT = document.querySelector("#fillInBlank")
const noTypeTt = document.querySelector(".noTypeTt")
typeT.addEventListener("keyup",() =>{
    if (typeT.value.includes("T")) {
        //console.log("Please don't type T")        
        noTypeTt.innerText = "Please don't type 'T'"
    }else{
        noTypeTt.innerText = ""
    }
})
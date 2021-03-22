import './styles/style.css'
import './styles/styles.scss'


let burgerBtn = document.querySelector(".Header__burgerMenu")
let burgerMenu = document.querySelector(".burgerMenu")
let body = document.querySelector("body")
let ModuleBtn = document.querySelector(".ContactUs__btn")
let ModuleBox = document.querySelector(".moduleBox")
let NameInput = document.querySelector("#NameInput")
let emailInput = document.querySelector("#emailInput")
let MessageTextArea = document.querySelector("#MessageTextArea")
let SubmitLetsTalkBtn = document.querySelector("#SubmitLetsTalkBtn")
let FormRequiredError = document.querySelector(".FormRequiredError")
let Form = document.querySelector(".moduleBox__form")
let sucsessFormSendMessage = document.querySelector(".sucsessFormSend")

SubmitLetsTalkBtn.addEventListener("mouseenter",()=>{
    FormRequiredError.classList.add("active")
    console.log("fvsgfdgdf");
    setTimeout(()=>{
        FormRequiredError.classList.remove("active")
    },3000)
})
SubmitLetsTalkBtn.disabled = true

SubmitLetsTalkBtn.addEventListener("click", (e)=>{
    console.log("FDFS");
    sucsessFormSendMessage.classList.add("active")
    ModuleBtn.classList.remove("active")
    ModuleBox.classList.remove("active")
    body.classList.remove("ModuleActive")
    setTimeout(()=> {
        Form.submit()}
        , 3000)
})

NameInput.addEventListener("input", ()=>{
    if(NameInput.value && emailInput.value && MessageTextArea.value){
        SubmitLetsTalkBtn.disabled = false
        FormRequiredError.classList.remove("active")
        FormRequiredError.innerHTML = ""
    } else{
        SubmitLetsTalkBtn.disabled = true
        FormRequiredError.classList.add("active")

    }
})
emailInput.addEventListener("input", ()=>{
    if(NameInput.value && emailInput.value && MessageTextArea.value){
        SubmitLetsTalkBtn.disabled = false
        FormRequiredError.classList.remove("active")
        FormRequiredError.innerHTML = ""
    } else{
        SubmitLetsTalkBtn.disabled = true
        FormRequiredError.classList.add("active")
    }
})
MessageTextArea.addEventListener("input", ()=>{
    if(NameInput.value && emailInput.value && MessageTextArea.value){
        SubmitLetsTalkBtn.disabled = false
        FormRequiredError.classList.remove("active")
        FormRequiredError.innerHTML = ""
    } else{
        SubmitLetsTalkBtn.disabled = true
        FormRequiredError.classList.add("active")
    }
})
burgerBtn.addEventListener("click", () => {
    if (burgerMenu.classList.contains("active")) {
        burgerMenu.classList.remove("active")
        burgerBtn.classList.remove("active")
        body.classList.remove("BurgerActive")
    } else {
        burgerBtn.classList.add("active")
        burgerMenu.classList.add("active")
        body.classList.add("BurgerActive")
    }
})

ModuleBtn.addEventListener("click", () => {
    if (ModuleBtn.classList.contains("active")) {
        ModuleBtn.classList.remove("active")
        ModuleBox.classList.remove("active")
        body.classList.remove("ModuleActive")
    } else {
        ModuleBtn.classList.add("active")
        ModuleBox.classList.add("active")
        body.classList.add("ModuleActive")
    }
})


window.addEventListener("click", (e) => {
    if (!e.target.classList.contains("ContactUs__btn")) {
        if (ModuleBtn.classList.contains("active")) {
            if (!e.target.classList.contains("moduleField")) {
                ModuleBtn.classList.remove("active")
                ModuleBox.classList.remove("active")
                body.classList.remove("ModuleActive")
            }
        }
    }
})

window.addEventListener("click", (e) => {
    if (!e.target.classList.contains("sucsessFormSend")) {
        if (sucsessFormSendMessage.classList.contains("active")) {
            if (!e.target.classList.contains("moduleField")) {
                sucsessFormSendMessage.classList.remove("active")
            }
        }
    }
})



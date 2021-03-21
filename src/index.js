
import './styles/style.css'
import './styles/styles.scss'


let burgerBtn = document.querySelector(".Header__burgerMenu")
let burgerMenu = document.querySelector(".burgerMenu")
let body = document.querySelector("body")


burgerBtn.addEventListener("click", ()=>{
    if(burgerMenu.classList.contains("active")){
        burgerMenu.classList.remove("active")
        burgerBtn.classList.remove("active")
        body.classList.remove("BurgerActive")
    } else {
        burgerBtn.classList.add("active")
        burgerMenu.classList.add("active")
        body.classList.add("BurgerActive")
    }
})


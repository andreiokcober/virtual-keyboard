import  "./css/index.css"
import './scss/index.scss'
import Keyboard from "./modules/virtual-keyboard"
import MainContainer from "./modules/main-container"
import TetArea from "./modules/textArea"
import DescriptionText from "./modules/description"
import {clickItem} from "./modules/item"
import {itemToUpperCase} from "./modules/item"
import {itemToUpperCaseShift} from "./modules/item"

const mainContainer = new MainContainer()
const textArea = new TetArea()
const descriptionText = new DescriptionText()
const keyboard = new Keyboard()

const main = mainContainer.createElement()
let clickMouse = false
let capsLock = false

document.body.append(main)
main.append(textArea.createElement())
main.append(keyboard.createElement())
main.append(descriptionText.createElement())

document.addEventListener('keydown',(e) => {
    e.preventDefault()
    clickMouse = false
    capsLock = true
    let elem = document.getElementById(`${e.code}`)
    clickItem(elem,clickMouse,capsLock)
})
document.addEventListener('keyup',(e) => {
    e.preventDefault()
    clickMouse = false
    capsLock = false
    let elem = document.getElementById(`${e.code}`)
    if(elem.dataset.item === 'CapsLock' & capsLock == false){
        itemToUpperCase()
        elem.classList.remove('bg-caps')
        elem.classList.add('clickItem')
    }else{
        elem.classList.remove('clickItem')
    }
    if(elem.dataset.item === 'shift'){
        itemToUpperCase()
        itemToUpperCaseShift()
    }
})
document.addEventListener('click',(e) => {
    if(e.target.classList.contains('item')) {
        e.preventDefault()
        clickMouse = true
        const idElem = e.target.id
        let elem = document.getElementById(`${idElem}`)
        if(elem.dataset.item === 'CapsLock' & !elem.classList.contains('bg-caps')) {
            elem.classList.add('bg-caps')
            itemToUpperCase()
        }else if (elem.dataset.item === 'CapsLock' & elem.classList.contains('bg-caps')) {
            console.log('good')
            itemToUpperCase()
            elem.classList.remove('bg-caps')
            elem.classList.add('clickItem')
        }
        clickItem(elem,clickMouse)
    }
})

  
       
       

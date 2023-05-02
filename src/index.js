import  "./css/index.css"
import './scss/index.scss'
import Keyboard from "./modules/virtual-keyboard"
import MainContainer from "./modules/main-container"
import TetArea from "./modules/textArea"
import DescriptionText from "./modules/description"

const mainContainer = new MainContainer()
const textArea = new TetArea()
const descriptionText = new DescriptionText()
const keyboard = new Keyboard()

const main = mainContainer.createElement()
let clickMouse = false

document.body.append(main)
main.append(textArea.createElement())
main.append(keyboard.createElement())
main.append(descriptionText.createElement())

document.addEventListener('keydown',(e) => {
    e.preventDefault()
    clickMouse = false
    let elem = document.getElementById(`${e.code}`)
    clickItem(elem)
})
document.addEventListener('keyup',(e) => {
    e.preventDefault()
    clickMouse = false
    let elem = document.getElementById(`${e.code}`)
    elem.classList.remove('clickItem')
})
document.addEventListener('click',(e) => {
    if(e.target.classList.contains('item')) {
        e.preventDefault()
        clickMouse = true
        const idElem = e.target.id
        let elem = document.getElementById(`${idElem}`)
        clickItem(elem,clickMouse)
    }
})

function clickItem(event,clickMouse) {
    const inputText = document.querySelector('#inputText')
    const backSpace = document.getElementById('CapsLock')
    const backSpaceUp =  backSpace.classList.contains('bg-caps')
    const valueItem =  backSpaceUp ? event.textContent.toUpperCase() : event.textContent
       
    if((event.classList.contains('false')) !== true){
        inputText.value += valueItem
    }
    if(event.dataset.item === 'Backspace') {
        let arr= inputText.value.split('')
        arr.pop()
        inputText.value = arr.join('')   
    }
    if(event.dataset.item === 'Tab') {
        let tab = ' ' + ' ' + ' ' + ' '
        inputText.value += tab
    }
    if(event.dataset.item === 'Enter') {
        let entr = '\n'
        inputText.value +=entr
    }
    if(event.classList.contains('back-slash')){
        inputText.value += valueItem
    }
    if(event.dataset.item === 'CapsLock') {
        let lock = document.querySelectorAll('.lock')
        for(let  i of lock) {
            if(i.classList.contains('lock') & i.classList.contains('Up') === false) {
                i.classList.add('Up')
            } else {
                i.classList.remove('Up')
            }
        }
        if(event.classList.contains('bg-caps')) {
            event.classList.remove('bg-caps')
            }else{
                event.classList.add('bg-caps')
            }   
        }
        const item = event.classList.contains('item')
        if(item) {
            event.classList.add('clickItem')
        }
        if(clickMouse){
            event.addEventListener('animationend', () => {
            event.classList.remove('clickItem')
            })
        }
        
    } 
       
       

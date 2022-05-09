import  "./css/index.css"
import './scss/index.scss'
import Keyboard from "./modules/virtual-keyboard"
import MainContainer from "./modules/main-container"
import TetArea from "./modules/textArea"
import DescriptionText from "./modules/description"

const mainContainer = new MainContainer()
const textArea = new TetArea()
const descriptionText = new DescriptionText()
descriptionText.createElement()






const mainCont = document.querySelector('.main')
const inputText = document.querySelector('#inputText')
mainCont.append(descriptionText.createElement())

const keyboard = new Keyboard(inputText)
         document.addEventListener('keydown',(e)=>{
             console.log(e.code)
    let elem = document.getElementById(`${e.code}`)
    serfItem(elem)
    
    
})

function serfItem(event){
     const inputValue =  inputText.value
       const valueItem = event.textContent
       

       if((event.classList.contains('false')) !== true){
           inputText.value += valueItem
       }
       if(event.dataset.item ==='Backspace'){
            let arr= inputText.value.split('')
            arr.pop()
            inputText.value = arr.join('')   
       }
       if(event.dataset.item === 'Tab'){
           let tab = ' ' + ' ' + ' ' + ' '
           inputText.value +=tab
       }
       if(event.dataset.item === 'Enter'){
        let entr = '\n'
         inputText.value +=entr
       }
       if(event.dataset.item === 'CapsLock'){
          let lock = document.querySelectorAll('.lock')
          for(let  i of lock){
              if(i.classList.contains('lock') & i.classList.contains('Up') === false){
                i.classList.add('Up')
              }
              else if( i.classList.contains('Up')){
                  i.classList.remove('Up')
              }
              
          }
           
           
            
           
           if(event.classList.contains('bg-caps')){
               event.classList.remove('bg-caps')
           }else{
               event.classList.add('bg-caps')
           }
           
       }

        const item = event.classList.contains('item')
        if(item){
            event.classList.add('clickItem')
        }else{
           
        }
        event.addEventListener('animationend', () =>{
            event.classList.remove('clickItem')
        })
        
       } 
       
       

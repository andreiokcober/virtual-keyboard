

export function clickItem(event,clickMouse,capsLock = false) {
    const inputText = document.querySelector('#inputText')
    const backSpace = document.getElementById('CapsLock')
    const backSpaceUp =  backSpace.classList.contains('bg-caps')
    const valueItem =  backSpaceUp ? event.textContent.toUpperCase() : event.textContent
    const item = event.classList.contains('item')

    if(item) {
        event.classList.add('clickItem')
    }  
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
    if(event.dataset.item === 'CapsLock' & capsLock) {
        itemToUpperCase()
        event.classList.add('bg-caps')
        event.addEventListener('animationend', () => {
            event.classList.remove('clickItem')
        })
    }
    if(clickMouse){
        event.addEventListener('animationend', () => {
        event.classList.remove('clickItem')
        })
    }        
} 
export function itemToUpperCase(){
    let lock = document.querySelectorAll('.lock')
    for(let  i of lock) {
        if(i.classList.contains('lock') & i.classList.contains('Up') === false) {
            i.classList.add('Up')
        } else {
            i.classList.remove('Up')
        }
    }
 } 
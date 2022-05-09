export default class Keyboard{
    constructor(id){
        this.inputId = id
        this.el = this.createElement()
        this.setEventHandlers()
        
        
        
        
    }
    createElement(){
        const el = document.createElement('div')
        el.classList.add('virtual-keyboard')
        el.innerHTML = `<div class="virtual-keyboard-str">
          <div class="item"></div>
          <div class="item" id="Digit1">1</div>
          <div class="item" id="Digit2">2</div>
          <div class="item" id="Digit3">3</div>
          <div class="item" id="Digit4">4</div>
          <div class="item" id="Digit5">5</div>
          <div class="item" id="Digit6">6</div>
          <div class="item" id="Digit7">7</div>
          <div class="item" id="Digit8">9</div>
          <div class="item" id="Digit0">0</div>
          <div class="item" id="Minus">-</div>
          <div class="item" id="Equal">=</div>
          <div class="item false" data-item="Backspace" id="Backspace">Backspace</div>
        </div>
        <div class="virtual-keyboard-str">
          <div class="item false" data-item="Tab" id="Tab">Tab</div>
          <div class="item lock" id="KeyQ">q</div>
          <div class="item lock" id="KeyW">w</div>
          <div class="item lock" id="KeyE">e</div>
          <div class="item lock" id="KeyR">r</div>
          <div class="item lock" id="KeyT">t</div>
          <div class="item lock" id="KeyY">y</div>
          <div class="item lock" id="KeyU">u</div>
          <div class="item lock" id="KeyI">i</div>
          <div class="item lock" id="KeyO">o</div>
          <div class="item lock" id="KeyP">p</div>
          <div class="item" id="BracketLeft">[</div>
          <div class="item" id="BracketRight">]</div>
          <div class="item">\</div>
          <div class="item false" id="Delete">Del</div>
        </div>
        <div class="virtual-keyboard-str">
          <div class="item false" data-item="CapsLock" id="CapsLock">CapsLock</div>
          <div class="item lock" id="KeyA">a</div>
          <div class="item lock lock" id="Keys">s</div>
          <div class="item lock" id="KeyD">d</div>
          <div class="item lock" id="KeyF">f</div>
          <div class="item lock" id="KeyG">g</div>
          <div class="item lock" id="KeyH">h</div>
          <div class="item lock" id="KeyJ">j</div>
          <div class="item lock" id="KeyK">k</div>
          <div class="item lock" id="KeyL">l</div>
          <div class="item" id="Semicolon">;</div>
          <div class="item" id="Quote">'</div>
          <div class="item false" data-item="Enter" id="Enter">Enter</div>
        </div>
        <div class="virtual-keyboard-str">
          <div class="item false" id="ShiftLeft">Shift</div>
          <div class="item  lock" id="KeyZ">z</div>
          <div class="item  lock" id="KeyX">x</div>
          <div class="item lock" id="KeyC">c</div>
          <div class="item lock" id="KeyV">v</div>
          <div class="item lock" id="KeyB">b</div>
          <div class="item lock" id="KeyN">n</div>
          <div class="item lock" id="KeyM">m</div>
          <div class="item" id="Comma">,</div>
          <div class="item" id="Period">.</div>
          <div class="item" id="Slash">/</div>
          <div class="item" id="ArrowUp">&#8593</div>
          <div class="item false" id="ShiftRight">Shift</div>
        </div>
        <div class="virtual-keyboard-str">
          <div class="item false" id="ControlLeft">Ctrl</div>
          <div class="item false" id="MetaLeft">Win</div>
          <div class="item false" id="AltLeft">Alt</div>
          <div class="item probel" id="Space"> </div>
          <div class="item false" id="AltRight">Alt</div>
          <div class="item false" id="ControlRight">Ctrl</div>
          <div class="item str" id="ArrowLeft">&#8596</div>
          <div class="item" id="ArrowDown">&#8595</div>
          <div class="item str" id="ArrowRight">&#8596</div>
      </div>`
         document.querySelector('.main').append(el)
         return el
        
        
       
    }
    
     setEventHandlers(){
       this.el.addEventListener('click',function surItem(event){
          
           const inputValue =  this.inputId.value
       const valueItem = event.target.textContent

       if((event.target.classList.contains('false')) !== true){
           this.inputId.value += valueItem
       }
       if(event.target.dataset.item ==='Backspace'){
            let arr= this.inputId.value.split('')
            arr.pop()
            this.inputId.value = arr.join('')   
       }
       if(event.target.dataset.item === 'Tab'){
           let tab = ' ' + ' ' + ' ' + ' '
           this.inputId.value +=tab
       }
       if(event.target.dataset.item === 'Enter'){
        let entr = '\n'
         this.inputId.value +=entr
       }
       if(event.target.dataset.item === 'CapsLock'){
          let lock = document.querySelectorAll('.lock')
          for(let  i of lock){
              if(i.classList.contains('lock') & i.classList.contains('Up') === false){
                i.classList.add('Up')
              }
              else if( i.classList.contains('Up')){
                  i.classList.remove('Up')
              }
              
          }
           
           
            
           
           if(event.target.classList.contains('bg-caps')){
               event.target.classList.remove('bg-caps')
           }else{
               event.target.classList.add('bg-caps')
           }
           
       }

        const item = event.target.classList.contains('item')
        if(item){
            event.target.classList.add('clickItem')
        }else{
           
        }
        event.target.addEventListener('animationend', () =>{
            event.target.classList.remove('clickItem')
        })
        
       }.bind(this) )
       
       
    }
   

   
}
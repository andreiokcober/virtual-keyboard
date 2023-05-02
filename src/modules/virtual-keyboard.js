export default class Keyboard {
    constructor(id){
      this.inputId = id
      this.el = document.createElement('div') 
    }
    createElement() {
      const backQuote = '`'
      const backSlash = '\\'
      this.el.classList.add('virtual-keyboard')
      this.el.innerHTML = `
      <div class="virtual-keyboard-str">
        <div class="item" id="Backquote">${backQuote}</div>
        <div class="item shift-rule" id="Digit1"><span>1</span><span class="hidden shift">!</span></div>
        <div class="item shift-rule" id="Digit2"><span>2</span><span class="hidden shift">@</span></div>
        <div class="item shift-rule" id="Digit3"><span>3</span><span class="hidden shift">#</span></div>
        <div class="item shift-rule" id="Digit4"><span>4</span><span class="hidden shift">$</span></div>
        <div class="item shift-rule" id="Digit5"><span>5</span><span class="hidden shift">%</span></div>
        <div class="item shift-rule" id="Digit6"><span>6</span><span class="hidden shift">^</span></div>
        <div class="item shift-rule" id="Digit7"><span>7</span><span class="hidden shift">&</span></div>
        <div class="item shift-rule" id="Digit8"><span>8</span><span class="hidden shift">*</span></div>
        <div class="item shift-rule" id="Digit8"><span>9</span><span class="hidden shift">(</span></div>
        <div class="item shift-rule" id="Digit0"><span>0</span><span class="hidden shift">)</span></div>
        <div class="item shift-rule" id="Minus"><span>-</span><span class="hidden shift">_</span></div>
        <div class="item shift-rule" id="Equal"><span>=</span><span class="hidden shift">+</span></div>
        <div class="item button-key false" data-item="Backspace" id="Backspace">delete</div>
      </div>
      <div class="virtual-keyboard-str">
        <div class="item tab button-key false" data-item="Tab" id="Tab">tab</div>
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
        <div class="item shift-rule" id="BracketLeft"><span>[</span><span class="hidden shift">{</span></div>
        <div class="item shift-rule" id="BracketRight"><span>]</span><span class="hidden shift">}</span></div>
        <div class="item false back-slash" id="Backslash">${backSlash}</div>
      </div>
      <div class="virtual-keyboard-str">
        <div class="item caps-lock button-key false" data-item="CapsLock" id="CapsLock">caps lock</div>
        <div class="item lock" id="KeyA">a</div>
        <div class="item lock lock" id="KeyS">s</div>
        <div class="item lock" id="KeyD">d</div>
        <div class="item lock" id="KeyF">f</div>
        <div class="item lock" id="KeyG">g</div>
        <div class="item lock" id="KeyH">h</div>
        <div class="item lock" id="KeyJ">j</div>
        <div class="item lock" id="KeyK">k</div>
        <div class="item lock" id="KeyL">l</div>
        <div class="item shift-rule" id="Semicolon"><span>;</span><span class="hidden shift">:</span></div>
        <div class="item shift-rule" id="Quote"><span>'</span><span class="hidden shift">"</span></div>
        <div class="item return button-key false" data-item="Enter" id="Enter">return</div>
      </div>
      <div class="virtual-keyboard-str">
        <div class="item shift-left button-key false" id="ShiftLeft" data-item="shift">shift</div>
        <div class="item  lock" id="KeyZ">z</div>
        <div class="item  lock" id="KeyX">x</div>
        <div class="item lock" id="KeyC">c</div>
        <div class="item lock" id="KeyV">v</div>
        <div class="item lock" id="KeyB">b</div>
        <div class="item lock" id="KeyN">n</div>
        <div class="item lock" id="KeyM">m</div>
        <div class="item shift-rule" id="Comma"><span>,</span><span class="hidden shift"><</span></div>
        <div class="item shift-rule" id="Period"><span>.</span><span class="hidden shift">></span></div>
        <div class="item shift-rule" id="Slash"><span>/</span><span class="hidden shift">?</span></div>
        <div class="item shift-right button-key false" id="ShiftRight" data-item="shift">shift</div>
      </div>
      <div class="virtual-keyboard-str">
        <div class="item false button-key" id="ControlLeft">control</div>
        <div class="item false button-key" id="AltLeft">option</div>
        <div class="item command false button-key" id="MetaLeft">command</div>
        <div class="item probel" id="Space"> </div>
        <div class="item command false button-key" id="MetaRight">command</div>
        <div class="item false button-key" id="AltRight">option</div>
        <div class="str-container">
          <div class="item str str-key" id="ArrowLeft">&#9668</div>
          <div class="str-container-center">
            <div class="item str-key" id="ArrowUp">&#9650</div>
            <div class="item str-key" id="ArrowDown">&#9660</div>
          </div>
          <div class="item str str-key" id="ArrowRight">&#9658</div>
        </div>
      </div>`
      return this.el  
    }
}
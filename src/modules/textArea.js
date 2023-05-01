export default class TetArea {
    constructor(){
        this.el = document.createElement('div')
    }
    createElement() {
        this.el.classList.add('main_text')
        this.el.innerHTML = `<textarea name="" id="inputText" cols="75" rows="11"></textarea>`
        return this.el
    }
}
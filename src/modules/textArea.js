export default class TetArea{
    constructor(){
    this.el = this.createElement()
    }
    createElement(){
        const el = document.createElement('div')
        el.classList.add('main_text')
        el.innerHTML = `<textarea name="" id="inputText" cols="65" rows="10"></textarea>`
        document.querySelector('.main').insertAdjacentElement('afterbegin',el)
        
    }
}
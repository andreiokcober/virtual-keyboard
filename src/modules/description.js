export default class DescriptionText {
    constructor(){
        this.el = document.createElement('div')
    }
    createElement(){
        this.el.innerHTML = `<h2>
          Клавиатура создана в операционной системе macOS
        </h2>
        <h2>Для переключения языка комбинация: левые shift + option</h2>`
        return this.el
    }
}
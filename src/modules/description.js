export default class DescriptionText{
    constructor(){
        this.el = this.createElement()
    }
    createElement(){
        const el = document.createElement('div')
        el.innerHTML = `<h2>
          Клавиатура создана в операционной системе Windows
        </h2>
        <h2>Для переключения языка комбинация: левые shift + alt</h2>`
        return el
    }
}
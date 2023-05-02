export default class MainContainer {
    constructor() {
        this.el = document.createElement('div')  
    }
    createElement() {
        this.el.classList.add('main')
        return this.el
    }
}
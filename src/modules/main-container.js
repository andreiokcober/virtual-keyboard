export default class MainContainer{
    constructor(){
        this.el = this.createElement()
        
    }
    createElement(){
        const el = document.createElement('div')
        el.classList.add('main')
        document.body.append(el)
        return el
    }

}
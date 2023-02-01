import DonateForm from "./donate-form.js"
export default class App{
    #donateForm
    constructor(){
    this.#donateForm = new DonateForm()
    }
    get getDonateForm(){
        
        return this.#donateForm.render()
    }
    run(){
        const Body = document.querySelector("body")
        console.log(this.#donateForm.getDonateForm)
        Body.append(this.#donateForm.render())
    }
}
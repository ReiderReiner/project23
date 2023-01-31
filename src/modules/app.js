import DonateForm from "./donate-form"
export default class App{
    #donateForm
    constructor(){
    this.#donateForm = new DonateForm()
    }
    run(){
        const Body = document.querySelector("body")
        Body.this.#donateForm.render()
    }
}
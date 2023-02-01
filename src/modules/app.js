import DonateForm from "./donate-form"
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
        Body.getDonateForm
    }
}
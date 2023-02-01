import DonateForm from "./donate-form.js"
import DonateList from "./donate-list.js"

export default class App{
    #donateForm
    #donateList
    constructor(donates){
    this.donates = donates
    this.#donateForm = new DonateForm()
    this.#donateList = new DonateList(this.donates)
    }
    run(){
        const Body = document.querySelector("body")
        Body.append(this.#donateForm.render())
        Body.append(this.#donateList.render())
    }
}
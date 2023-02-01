import DonateForm from "./donate-form.js"
import DonateList from "./donate-list.js"

export default class App{
    #donateForm
    #donateList
    constructor(state){
    this.state = state
    //this.donates = this.state[0]
    //this.totalAmount = this.state[1]
    this.#donateForm = new DonateForm(this.state)
    this.#donateList = new DonateList(this.state)
    }
    run(){
        console.log(this.state.donates)
        const Body = document.querySelector("body")
        Body.append(this.#donateForm.render())
        Body.append(this.#donateList.render())
    }
}
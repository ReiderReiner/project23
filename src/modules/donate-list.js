
export default class DonateList{
    constructor(state){
        this.state = state
        this.donates = this.state.donates
    }
    render(){
        console.log(this.donates)
        const donatesContainer = document.createElement("div")
        donatesContainer.className = ("donates-container")

        const donatesContainerTitle = document.createElement("h2")
        donatesContainerTitle.className = ("donates-container__title")
        donatesContainerTitle.textContent = "Список донатов"
        donatesContainer.append(donatesContainerTitle)

        const donatesContainerDonates = document.createElement("div")
        donatesContainerDonates.className = ("donates-container__donates")
        donatesContainerTitle.append(donatesContainerDonates)
        
        for(let i = 0; i < this.donates.length; i++){
            console.log(this.donates[i].date )
            const donateItem = document.createElement("div")
            donateItem.className = ("donate-item")
            donateItem.textContent = this.donates[i].date 
            donatesContainerDonates.append(donateItem)

            const donateAmount = document.createElement("b")
            donateAmount.textContent = `-${this.donates[i].amount}$`
            donateItem.append(donateAmount)
        }
        return donatesContainer
    }
}
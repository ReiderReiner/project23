export default class DonateForm{
    constructor(){}
    render(){
        const FormDonate = document.createElement("form")
        FormDonate.className = ("donate-form")

        const IdTotalAmount = document.createElement("h1")
        FormDonate.append(IdTotalAmount)
        IdTotalAmount.id = "total-amount"
        IdTotalAmount.textContent = "28$"

        const DonateFormInputLabel = document.createElement("label")
        FormDonate.append(DonateFormInputLabel)
        DonateFormInputLabel.className = ("donate-form__input-label")
        DonateFormInputLabel.textContent = "Введите сумму в $"

        const DonateFormInputInput = document.createElement("input")
        DonateFormInputLabel.append(DonateFormInputInput)
        DonateFormInputInput.className = ("donate-form__donate-input")
        DonateFormInputInput.name = "amount"
        DonateFormInputInput.type = "number"
        DonateFormInputInput.max = "100"
        DonateFormInputInput.min = "1"
        DonateFormInputInput.required = ""

        const DonateFormSubmitButton = document.createElement("button")
        FormDonate.append(DonateFormSubmitButton)
        DonateFormSubmitButton.className = ("donate-form__submit-button")
        DonateFormSubmitButton.type = "submit"
        DonateFormSubmitButton.textContent = "Задонатить"

        return FormDonate
    }
}
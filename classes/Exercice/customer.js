export default class Customer {
    #age = ''
    #name = ''
    #invoices = []

    constructor (name, age) {
        this.#name = name,
        this.#age = age
    }

    getAge = () => this.#age
    getName = () => this.#name

    addInvoice = (invoice) => {
        this.#invoices.push(invoice)
    }

    getInvoices = () => {
        return this.#invoices
    }
}
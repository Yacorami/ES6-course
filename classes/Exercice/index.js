import Customer from "./customer.js";
import Invoice from "./invoice.js"


let invoice1 = new Invoice('MAD', 100);
let invoice2 = new Invoice('USD', 50);
let invoice3 = new Invoice('MAD', 130);

let customer = new Customer('Yacine', 34);
customer.addInvoice(invoice1)
customer.addInvoice(invoice2)
customer.addInvoice(invoice3)


console.log(customer)
console.table(customer.getInvoices())




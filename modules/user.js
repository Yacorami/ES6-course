// named export: to be used if we have multiple objects, functions, vars to be exported
const name = 'Yacine';
const age = 34;
const address = ' ha soualem';

const dispUser = () => {
    return  `Name: ${name},\nAge: ${age},\nAddress: ${address}`
}

export {name, age, address, dispUser};

// default export : we use it if we have one thing to be exported
/*const dispusa = () => {
    return  `Name: ${name},\nAge: ${age},\nAddress: ${address}`
}

export default dispusa*/


// in react js it would be more like this :

const displayUser = function () {
    const name = 'jamaoui'
    const age = 29
    const job = 'developer'

    return `Nom: ${name}, Age: ${age}, Job: ${job}`
}

export default displayUser;

    
// playing a bit

export const users = [
    {
      name: "Alice Smith",
      age: 28,
      address: "123 Maple St, Springfield, IL 62704"
    },
    {
      name: "Bob Johnson",
      age: 34,
      address: "456 Oak St, Metropolis, NY 10001"
    },
    {
      name: "Eve Brown",
      age: 25,
      address: "789 Pine St, Smalltown, CA 90210"
    },
    {
      name: "Charlie Davis",
      age: 40,
      address: "987 Cedar St, Bigcity, TX 78701"
    },
    {
      name: "Grace Wilson",
      age: 30,
      address: "234 Elm St, Midtown, FL 33101"
    }
];

export const dispUserParam = (user) => {
    return `Nom: ${user.name}, Age: ${user.age}.`
}
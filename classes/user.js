class User {
    static #counter = 1
    #id = 1

    constructor(name, age) {
        this.name = name
        this.age = age
        this.#id = User.#counter++
    }

    getId = () => this.#id

    afficherUser = () => {
        return `My name is : ${this.name}, and I am ${this.age} years old.`
    }
}


// Extending
class Admin extends User {
    isAdmin = true
    #gender = 'male'

    constructor(name, age, isAdmin) {
        super(name, age); // calls parent constructor(name, age)
        this.isAdmin = true
    }

    // this automatically overrides the parent method.
    afficherUser = () => {
        return `My name is : ${this.name}, and I am an admin.`
    }

    getGender = () => {
        return this.#gender
    }
}

export {User, Admin};
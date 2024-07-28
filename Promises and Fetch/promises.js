// Javascript is asnyc (simultaneously)

// we tried to user rest parameter and reduce function and arrow functions in same line

let sumup = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0) 

/*
console.log("immediate:")
let timeout = 0
setTimeout(()=> {
    console.log(sumup(2, 3,8))
}, timeout)

*/

// Promises (producing code (time consuming) or consuming code (waiting for something))

const count = true

// this is a callback using two callbacks as parameters which that we will use to create a Promise next
let countFunction = (resolve, reject) => {
    if (count) {
        setTimeout(()=>{
            resolve([1,2,3,5]) // Fulfilled
        }, 3000)
    } else {
        reject({'message':'No data'}) // Rejected
    }
}

let countValue = new Promise(countFunction)
countValue.then((response) => {
    console.log("Data:" + response)
}).catch(error => console.log(error))
console.log("waiting for data")

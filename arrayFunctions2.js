let fruits = ['Banane', 'Apple', 'Orange', 'Berries']


// Foreach 
fruits.forEach((e) => {
    //console.log(e)
})

// Foreach with key valye
let display = (v, k, array) => {
    //console.log(`${k} => ${v}`, array)
}

fruits.forEach(display)


// For
for (let [key, fruit] of fruits.entries()) {
    //console.log(`${key} => ${fruit}}`)
}

for (let i = 0; i < fruits.length; i++) {
    //console.log(`${fruits[i]}`)
}


// Map
let numbers = [0,1,2,3,4,5,6]
const multiply = (value) => value * 2;
numbers = numbers.map(multiply)
//console.log(numbers)


// Filter
let randomNums = [0,1,2,3,4,5,6,34,65]
let oddNums = (e) => { return e % 2 }
let evenNums = (e) => { return !(e % 2) }
randomNums = randomNums.filter(evenNums)


// Some : returns true of one element matches the condition
let numsToSum = [3, 6, 5, 10, 'car', 33]
let sum = numsToSum.some((value) => {
    return value  == 'car'
});
//console.log(sum)

// Every : returns true if every element of the array matches the condition
let randara = ['ab', 'XY',33, 'AA', 99]
const hasTwoChars = (e) => { return e.length == 2 || e.toString().length == 2}
let twoCharsEvery = randara.every(hasTwoChars)
//console.log(twoCharsEvery)

// fill (value, index to start filling, index to stop filling (not inluded))
let fillTable = [4, 7, 66, 8, 555, 22, 14, 44, 100]
fillTable = fillTable.fill('x', 3, 5)
//console.log(fillTable)


// ===================== Reduce ==========================
// !! Reduce : take an initial value compute it with fhe first element of the array and update it and apply it on the next ...
let recudeNums = [1,2,3,4,5,6,7]
let initialValue = 0;
let reduced = recudeNums.reduce( (befValue, curValue) => {
    //console.log(befValue)
    return curValue + befValue
}, initialValue)

//console.log(reduced)

// Calculate average age using reduce
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
];

totalAges = 0;
let averageAge = people.reduce(function(totalAges, person) {
    return totalAges + person.age;
}, totalAges)

//console.log(averageAge / people.length)


const responses = ['Yes', 'No', 'Yes', 'Maybe', 'Yes', 'No', 'lala'];

const responseCounts = responses.reduce((counts, response) => {
    counts[response] = (counts[response] || 0) + 1;
    return counts;
}, {});

//console.log(responseCounts);


// ========== Sort ==============

const NumsToSort = [34,64,900,33,1]
let sortedResps = NumsToSort.sort((a,b) => b - a)
// console.log(sortedResps)

const arrayofStrings = ['Yacine', 'Ameni', 'Diana']
arrayofStrings.sort((a,b) => b.localeCompare(1)) // this is desc, for asc : don't pass anyting to sort()


// another way 
const arrayofStringadas = ['Yacine', 'Ameni', 'Diana']
const sortWords = (firstWord, secondeWord) => {
    return firstWord.localeCompare(secondeWord)
}
arrayofStringadas.sort(sortWords) // this is desc, for asc : don't pass anyting to sort()
//console.log(arrayofStringadas)



//Exercice reduce

let tabToRed = [[0,1], [2,3], [4,5]]

let reducedTab = tabToRed.reduce((accum, current) => {
    return [...accum, ...current]
})

//console.log(reducedTab)